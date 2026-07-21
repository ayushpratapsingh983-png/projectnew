import ProductCard from "./ProductCard";
import "./Product.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "₹50,000",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 2,
    name: "Smartphone",
    price: "₹20,000",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 3,
    name: "Headphones",
    price: "₹2,000",
    img: "https://images.unsplash.com/photo-1518441902110-9c6e6d8e3c5b"
  }
];

function Product() {
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
}

export default Product;