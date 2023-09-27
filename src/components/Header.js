import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const result = useSelector((state) => state).cartData;
    console.log('result store >>>', result)
    return (
        <div className="header">
            <Link to="/">
                <h1 className='logo'>Market</h1>
            </Link>
            <Link to='/cart'>
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt=""/>
                </div>
            </Link>
        </div>
    )
}

export default Header;