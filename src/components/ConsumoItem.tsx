import { CalculadoraPropinasProps, FoodItem } from "../interfaces"

export interface ConsumoProps extends Pick<CalculadoraPropinasProps, "substractConsumo" | "addConsumo" | "removeItem"> {
  food: FoodItem
}

export default function ConsumoItem({food, substractConsumo, addConsumo, removeItem}: ConsumoProps){
  return (
    <li className='grid grid-cols-3 items-center pb-4'>
      <div className='flex flex-col'>
          <h3 className='text-sm font-semibold text-gray-800'>{food.name}</h3>
          <p className='text-xs text-indigo-600'>${food.price}</p>
      </div>
      <div className='rounded-full place-self-center px-3 py-1 border flex items-center justify-between *:text-xs text-center w-fit space-x-6 font-semibold'>
          <button 
              type="button"
              className='px-2'
              onClick={() => substractConsumo(food.id)}>
              -
          </button>
          <p>{food.quantity}</p>
          <button
              type='button'
              className='px-2'
              onClick={() => addConsumo(food)}>
              +
          </button>
      </div>
      <button 
          type='button'
          className='place-self-center hover:rotate-90 hover:text-red-600 cursor-pointer transition-all p-4'
          onClick={() => removeItem(food.id)}
      >
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className=" icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
      </button>
    </li>
  )
}