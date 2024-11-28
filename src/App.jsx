import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './Component/CoffeeCards';

function App() {
   const coffees=useLoaderData();
  return (
    <div className='m-20'>
      <h1 className='text-purple-300'>HOT AND COLD COFFEE</h1>
       <div className='grid grid-cols-2 gap-4'>
       {
        coffees.map(coffee=>
        <CoffeeCards
        key={coffee._id}
        coffee={coffee}
        ></CoffeeCards>)
       }
       </div>
    </div>
  )
}

export default App
