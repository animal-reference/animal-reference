import Image from 'next/image';
import animalData from '../../../data/output/animals.json';
import { AnimalData, AnimalDatum } from '../../../types/animals';

export default function AnimalPage({ params }: { params: { id: string } }) {
    const data: AnimalData = animalData as AnimalData;
    const animal: AnimalDatum | undefined = data[params.id];

    if (!animal) {
        return <div>Animal not found</div>;
    }

    return (
        <div className="container mx-auto px-4 text-black">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-shrink-0">
                    <Image
                        src={animal.image}
                        alt={animal.name}
                        width={138}
                        height={138}
                    />
                </div>
                <div className="flex-grow">
                    <h1 className="text-3xl font-bold mb-2">{animal.name}</h1>
                    <p><span className="font-bold">{animal.species}</span> ▪ Wiki: <a href={`https://en.wikipedia.org/wiki/${animal.name}`} target="_blank" rel="noopener noreferrer">{animal.name}</a></p>
                    <p>({animal.nicknames.join(', ')})</p>
                    <p>{animal.height}m, {animal.weight}kg</p>
                    <p><span className="font-bold">Lifespan:</span> {animal.lifespan} years</p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="text-sm text-left border-collapse border-gray-400 font-mono">
                    <thead>
                        <tr className="bg-gray-100 text-red-800">
                            <th className="px-1 py-1 border-l border-t border-b border-r-2 border-gray-400 text-center whitespace-nowrap" title="Calendar year">
                                Year
                            </th>
                            <th className="px-1 py-1 border border-gray-400 text-center whitespace-nowrap" title="Estimated population">
                                Pop
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {animal.data.index.map((year, index) => (
                            <tr key={year}>
                                <td className="px-1 py-1 border-l border-b border-r-2 border-gray-400 text-right">{year}</td>
                                <td className="px-1 py-1 border border-gray-400 text-right">
                                    {animal.data.columns.population[index].toLocaleString(undefined, { maximumFractionDigits: 0})}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function generateStaticParams() {
    const data: AnimalData = animalData as AnimalData;
    return Object.keys(data).map(id => ({ id }));
}
