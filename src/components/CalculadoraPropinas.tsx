import { CalculadoraPropinasProps, FoodItem } from "../interfaces";
import ConsumoItem from "./ConsumoItem";
import Propina from "./Propina";

export default function CalculadoraPropinas({consumo, substractConsumo, addConsumo, removeItem, flushConsumo, handlePropinaChange, total, subtotal, propina}: CalculadoraPropinasProps){
  return (
    <article className='transition-all w-full border-2 rounded-md border-gray-200 p-2 flex flex-col space-y-5'>
      <h2 className='font-bold text-2xl'>Consumo</h2>
      <fieldset className='flex flex-col w-full'>
        <legend className='mb-5 py-2 border-b border-gray-200 text-gray-400 text-xl w-full font-bold'>Contenido</legend>
        <ul className='flex flex-col'>
        {
          consumo.map((food: FoodItem) => (
            <ConsumoItem
              key={food.id}
              food={food}
              substractConsumo={substractConsumo}
              addConsumo={addConsumo}
              removeItem={removeItem}
            />
          ))
        }
        </ul>
      </fieldset>
      <Propina
        handlePropinaChange={handlePropinaChange}
      />
      <fieldset className='flex flex-col w-full'>
          <legend className='mb-5 py-2 border-b border-gray-200 !text-gray-400 text-xl w-full font-bold'>Totales y Propina</legend>
          <div className='mx-auto w-full flex items-center justify-center mb-10'>
              <div className='text-center w-full px-10 py-1 shadow-md rounded-3xl'>
                  <p className='text-xs text-gray-400'>El valor de la orden es</p>
                  <p className='text-3xl font-bold py-2 text-indigo-600'>${total}</p>
              </div>
          </div>
          <div className='*:text-xs *:w-full grid'>
              <p>Subtotal <span className='font-bold float-right'>${subtotal}</span></p>
              <p>Propina <span className='text-indigo-600 text-xs'>{Number.parseFloat(((propina * 100) - 100).toString()).toFixed(0)}%</span> <span className='font-bold float-right'>${total - subtotal}</span></p>
              <p className='border-t mt-4 font-semibold !text-lg'>Total <span className='font-bold text-indigo-600 float-right'>${total}</span></p>
          </div>
      </fieldset>
      <button 
          type="button" 
          className='text-center w-full py-2 rounded-md bg-indigo-600 hover:bg-indigo-800 text-white'
          onClick={flushConsumo}>Guardar Orden</button>
  </article>
  )
}