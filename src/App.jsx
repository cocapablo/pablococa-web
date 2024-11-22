import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { TwitterFollowCard } from './components/TwitterCard/TwitterFollowCard.jsx'
import { TicTacToe } from './components/TicTacToe/TicTacToe.jsx'
import { BolaEnMouse } from './components/BolaEnMouse/BolaEnMouse.jsx'
import Cats from './components/Cats/Cats.jsx'
import BuscadorDePeliculas from './components/BuscadorDePeliculas/BuscadorDePeliculas.jsx'


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
      
        <h1>Hola que tal</h1>
        <BuscadorDePeliculas></BuscadorDePeliculas>
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
