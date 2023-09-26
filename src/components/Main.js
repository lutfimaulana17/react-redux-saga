import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log('Data in main >>>', data)
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
      <div>
        <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div>
    </div>
  );
}

export default Main;
