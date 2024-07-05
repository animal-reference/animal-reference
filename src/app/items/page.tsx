import Link from 'next/link';
import { items } from '../../data/items';

export default function Home() {
  return (
    <div className='text-black'>
      <h1>All Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
