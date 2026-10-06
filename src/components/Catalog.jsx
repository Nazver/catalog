import ProductCard from './ProductCard';

function Catalog() {
  const products = [
    { id: 1, title: 'Хлеб', price: 50 },
    { id: 2, title: 'Молоко', price: 90 },
    { id: 3, title: 'Сахар', price: 70 },
    { id: 4, title: 'Чай', price: 120 },
    { id: 5, title: 'Печенье', price: 150 },
  ];

  return (
    <div>
      <h2>Каталог продуктов</h2>
      <div className="catalog-list">
        {products.map((item) => (
          <ProductCard 
        {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
