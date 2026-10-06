function ProductCard(props) {
  const handleBuy = () => {
    console.log(`Товар "${props.title}" куплен!`);
  };

  return (
    <div className="product-card">
      <h3>{props.title}</h3>
      <p>{props.price} руб.</p>
      <button onClick={handleBuy}>Купить</button>
    </div>
  );
}

export default ProductCard;
