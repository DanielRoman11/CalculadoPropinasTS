import { CalculadoraPropinasProps, Food } from "../interfaces";

interface FoodProps extends Pick<CalculadoraPropinasProps, "addConsumo">{
  data: Food[]
}

export default function FoodComponent({data, addConsumo}: FoodProps){
  return (
    <article className='w-full'>
      <h2 className='font-bold text-2xl my-2'>Menú</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400 border border-red-600 overflow-hidden rounded-md">
          <thead className="text-xs text-gray-100 bg-gray-800">
              <tr>
                  <th scope='col' className='px-6 py-3'>Nombre</th>
                  <th scope='col' className='px-6 py-3'>Precio</th>
                  <th scope='col' className='px-6 py-3'></th>
              </tr>
          </thead>
          <tbody className=''>
              {data.map((food: Food) => (
                  <tr className="text-md lg:text-md transition-colors odd:bg-white even:bg-gray-100" key={food.id} >
                      <th scope='col' className='font-medium text-gray-900 px-6 py-4 text-left'>{food.name}</th>
                      <th scope='col' className='font-medium text-gray-900 px-6 py-4 text-left'>${food.price}</th>
                      <th scope='col' className='font-medium px-6 py-4 text-left'>
                          <button 
                          type='button' 
                          className='hover:underline underline-offset-4 font-semibold text-indigo-600 hover:text-indigo-500' 
                          onClick={() => addConsumo(food)}>
                              Añadir
                          </button>
                      </th>
                  </tr>
              ))}
          </tbody>
      </table>
  </article>
  )
}