import Image from 'next/image';
import animalData from '../../../data/animals.json';
import { AnimalData, AnimalDatum } from '../../../types/animals';

export default function AnimalPage({ params }: { params: { id: string } }) {
    const data: AnimalData = animalData as AnimalData;
    const animal: AnimalDatum | undefined = data[params.id];

    if (!animal) {
        return <div>Animal not found</div>;
    }

    return (
        <div className="container mx-auto px-4 text-black">
            <h1>{animal.name}</h1>
            <Image
                src={animal.image}
                alt={animal.name}
                width={300}  // specify appropriate width
                height={200} // specify appropriate height
            />
            <p>Also known as: {animal.nicknames.join(', ')}</p>
            <p>Height: {animal.height}m</p>
            <p>Weight: {animal.weight}kg</p>
            <p>Lifespan: {animal.lifespan} years</p>
            {/* ... rest of your component ... */}
        </div>
    );
}

export function generateStaticParams() {
    const data: AnimalData = animalData as AnimalData;
    return Object.keys(data).map(id => ({ id }));
}
