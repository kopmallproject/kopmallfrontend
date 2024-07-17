import logo from './logo.svg';
import './App.css';
import SignUp from './components/screens/authentication/SignUp';
import Login from './components/screens/authentication/Login';
import ForgetPassword from './components/screens/authentication/ForgetPassword';
import Recovery from './components/screens/authentication/Recovery';
import OTP from './components/screens/authentication/OTP';
import HomePage from './components/screens/HomePage';
import ProductPage from './components/screens/productPage/ProductPage';
import CartPage from './components/screens/productPage/CartPage';
import ProductPageOverview from './components/screens/productPage/ProductPageOverview';
import MyAccordion from './components/CustomAccordion';

const items = [
  { title: 'Item 1', content: 'Content of item 1' },
  { title: 'Item 2', content: 'Content of item 2' },
  { title: 'Item 3', content: 'Content of item 3' },
];



function App() {
  return (
    <>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <ForgetPassword /> */}
      {/* <Recovery /> */}
      {/* <OTP /> */}
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      {/* <CartPage /> */}
      {/* <ProductPageOverview /> */}
      <MyAccordion items={items} />

    </>
  );
}

export default App;
