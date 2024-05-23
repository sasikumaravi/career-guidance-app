import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Test from './Component/Test';
import Guidance from './Component/Guidance';
import About from './Component/About';
import Bot from './Component/Bot';
import Quiz from './Component/Quiz';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import AuthProvider from './Component/Auth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Bot/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/guidance' element={<Guidance/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;
