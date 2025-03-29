import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { TwitterFollowCard } from './components/TwitterCard/TwitterFollowCard.jsx'
// import { TicTacToe } from './components/TicTacToe/TicTacToe.jsx'
// import { BolaEnMouse } from './components/BolaEnMouse/BolaEnMouse.jsx'
// import Cats from './components/Cats/Cats.jsx'
// import BuscadorDePeliculas from './components/BuscadorDePeliculas/BuscadorDePeliculas.jsx'
// import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'
// import { FiltersProvider } from './components/ShoppingCart/contexts/filters.jsx'
// import PabloRouter from './components/PabloRouter/PabloRouter.jsx'
import { BarraDeNavegacion } from './components/BarraDeNavegacion/BarradeNavegacion.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//import HomePage from "./components/PabloRouter/pages/HomePage.jsx";
import {Home as HomePage} from "./components/paginas/Home/Home.jsx";
import AboutPage from "./components/PabloRouter/pages/AboutPage.jsx";
import Page404 from './components/PabloRouter/pages/Page404.jsx';
import SearchPage from './components/PabloRouter/pages/SearchPage.jsx'; 


const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pabloandrescoca',
    name: 'Pablo Andrés Coca',
    isFollowing: false
  }
];

function App() {
  const [count, setCount] = useState(0)
  const formatUserName = (userName) => `@${userName}`;



  return (
    <>
      <Router>
        <BarraDeNavegacion></BarraDeNavegacion>  
        <Routes>
                
          <Route path='/' element= {<HomePage></HomePage> } ></Route>
          <Route path='/about' element= {<AboutPage routeParams={{lang: "es"}}></AboutPage> } ></Route> 
          {/* <Route path='/productos' element= {<ItemListContainer greeting="Bienvenidos Superhéroes del Universo" /> } ></Route>
          <Route path='/producto/:pid' element= {<ItemDetailContainer /> } ></Route>
          <Route path='/categoria/:cid' element= {<ItemListContainer greeting="Bienvenidos Superhéroes del Universo" /> } ></Route>
          <Route path='/cart' element= {<CartContainer /> } ></Route>
          <Route path='*' element= {<Navigate to={"/"}/> } ></Route>   */}   
          
        </Routes>
      </Router>
        
        {/* <h1>Hola que tal</h1>
        <PabloRouter></PabloRouter> */}
        {/* <FiltersProvider>
          <ShoppingCart>Bienvenido al Shopping Cart
            <p>A reir y llorar</p>
          </ShoppingCart>
        </FiltersProvider> */}
        {/* <BuscadorDePeliculas></BuscadorDePeliculas> */}
        {/* <Cats></Cats>
                
        <div className='lista-twitters-cards'>
        {
          users.map(user => {
            return (
            <TwitterFollowCard 
            key={user.userName} userName={user.userName} name={user.name} formatUserName={formatUserName} initialIsFollowing={user.isFollowing}/> 
            ) 
          })
        }
        </div>

        <TicTacToe> </TicTacToe>

        <BolaEnMouse></BolaEnMouse> */}

    </>
  )
}

export default App
