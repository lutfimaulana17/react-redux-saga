import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';

function Main() {
  const dispatch = useDispatch()
  const product = {
    name: 'Iphone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
    </div>
  );
}

export default Main;
