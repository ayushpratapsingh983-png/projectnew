import "./ProductCard.css";

function ProductCard({ product }) {
  const buyNow = () => {
    alert(`✅ Order placed for ${product.name}`);
  };

  return (
    <div className="card">
      <img src={product.img} alt={product.name} />

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>

        <button onClick={buyNow}>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;