import { items } from '../../../data/items';

export default function Item({ params }: { params: { id: string } }) {
  const item = items.find(item => item.id.toString() === params.id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='text-black'>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
      <p>Date: {item.date}</p>
    </div>
  );
}

export function generateStaticParams() {
  return items.map(item => ({
    id: item.id.toString(),
  }));
}
