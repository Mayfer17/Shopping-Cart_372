import { useState } from 'react';
import { products, coupons } from './data';
import { FaShoppingCart } from 'react-icons/fa'; // นำเข้าไอคอนตะกร้า
import './app.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState({});
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [selectedFlavors, setSelectedFlavors] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 100; 

  const addToCart = (product, flavor) => {
    const productWithFlavor = { ...product, flavor }; 
    setCart([...cart, productWithFlavor]);
    setCounts({
      ...counts,
      [`${product.name} (${flavor})`]: (counts[`${product.name} (${flavor})`] || 0) + 1,
    });
    calculateTotal();
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const index = newCart.indexOf(product);
    if (index !== -1) {
      newCart.splice(index, 1);
      setCart(newCart);
    }
    setCounts({
      ...counts,
      [`${product.name} (${product.flavor})`]: Math.max((counts[`${product.name} (${product.flavor})`] || 1) - 1, 0),
    });
    calculateTotal();
  };

  const calculateTotal = () => {
    let total = cart.reduce((sum, product) => sum + product.price, 0);
    total += shippingCost;

    if (selectedCoupon) {
      if (total >= selectedCoupon.minAmount) {
        if (selectedCoupon.discount) {
          total *= (1 - selectedCoupon.discount); 
        }
        if (selectedCoupon.freeShipping) {
          total -= shippingCost; 
        }
      }
    }

    setTotalPrice(Math.max(total, 0)); 
  };

  const handleFlavorChange = (product, flavor) => {
    setSelectedFlavors({
      ...selectedFlavors,
      [product.name]: flavor,
    });
  };

  const handleCouponSelect = (coupon) => {
    setSelectedCoupon(coupon);
    calculateTotal(); 
  };

  const handleUpdateTotal = () => {
    calculateTotal(); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="title">Cat Food Products</h1>
      <ul className="grid grid-cols-2 gap-4 mb-4">
        {products.map((product) => (
          <li key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
            <img src={product.imageUrl} alt={product.name} className="w-32 h-32 mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>Price: {product.price} THB</p>

            {product.flavors && (
              <div className="mb-2">
                <label htmlFor={`flavor-${product.id}`}>Choose Flavor:</label>
                <select
                  id={`flavor-${product.id}`}
                  onChange={(e) => handleFlavorChange(product, e.target.value)}
                  className="ml-2 p-1 border"
                >
                  {product.flavors.map((flavor, index) => (
                    <option key={index} value={flavor}>
                      {flavor}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              onClick={() => addToCart(product, selectedFlavors[product.name] || product.flavors?.[0])} 
              className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2 flex items-center">
        <FaShoppingCart className="mr-2" /> Shopping Cart
      </h2>
      <ul className="border rounded-lg p-4 mb-4">
        {cart.map((product, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {product.name} ({product.flavor || "Regular"}) x {counts[`${product.name} (${product.flavor || "Regular"})`]}
            <button onClick={() => removeFromCart(product)} className="text-red-500">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3 className="font-bold mt-4">Coupons:</h3>
      <ul className="list-disc list-inside mb-4">
        {coupons.map((coupon, index) => (
          <li key={index}>
            <button 
              onClick={() => handleCouponSelect(coupon)}
              className="text-blue-500 underline"
            >
              {coupon.description} 
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold">Total Price: {totalPrice.toFixed(2)} THB (Shipping: {selectedCoupon?.freeShipping ? 'Free' : shippingCost} THB)</h2>

      <button
        onClick={handleUpdateTotal}
        className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-700"
      >
        Update Total Price
      </button>
    </div>
  );
}
