import Link from 'next/link';
import animalData from '../../data/output/animals.json';
import { AnimalData } from '../../types/animals';

export default function AnimalsPage() {
    const data: AnimalData = animalData as AnimalData;

    return (
        <div className="container mx-auto px-4 text-black">
            <h1 className="text-2xl font-semibold py-2">List of all the animals</h1>
            <ul className="divide-y">
                {Object.keys(data).map((animalType) => (
                    <li className="py-2" key={animalType}>
                        <Link href={`/animals/${animalType}`}>
                            {animalType.charAt(0).toUpperCase() + animalType.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
