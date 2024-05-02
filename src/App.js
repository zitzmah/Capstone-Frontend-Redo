import './App.css';
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Favicon from 'react-favicon'
import { Helmet } from 'react-helmet'



function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blood Bank App</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Bloodbank App" />
      </Helmet>

      <Favicon url={'./components/Images/vampire.png'}/>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
