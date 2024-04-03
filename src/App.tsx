import Propinas from './hooks/usePropinas'

function App() {
  const { data, consumo, propina, addConsumo, substractConsumo, total, subtotal, handlePropinaChange, removeItem, flushConsumo } = Propinas();

  return (
    <>
      <h1 className="text-3xl bg-gray-800 text-gray-100 text-center font-semibold py-5">Calculadora de Propinas y Consumo</h1>
      <div className='grid grid-cols-1 gap-y-2 md:grid-cols-2 relative p-2 overflow-x-auto container mx-auto mt-10 md:gap-x-2 mb-10'>
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
                      {data.map(food => (
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
          {consumo.length > 0 
              ?
          <article className='transition-all w-full border-2 rounded-md border-gray-200 p-2 flex flex-col space-y-5'>
              <h2 className='font-bold text-2xl'>Consumo</h2>
              <fieldset>
                  <legend className='mb-5 py-2 border-b border-gray-200 text-gray-400 text-xl w-full font-bold'>Contenido</legend>
                          <ul className=''>
                          {
                              consumo.map(food => (
                                  <li className='grid grid-cols-3 items-center pb-4' key={food.id}>
                                      <div className='flex flex-col'>
                                          <h3 className='text-sm font-semibold text-gray-800'>{food.name}</h3>
                                          <p className='text-xs text-indigo-600'>${food.price}</p>
                                      </div>
                                      <div className='rounded-full place-self-center px-3 py-1 border flex items-center justify-between *:text-xs text-center w-fit space-x-6 font-semibold'>
                                          <button 
                                              type="button"
                                              onClick={() => substractConsumo(food.id)}>
                                              -
                                          </button>
                                          <p>{food.quantity}</p>
                                          <button
                                              type='button'
                                              onClick={() => addConsumo(food)}>
                                              +
                                          </button>
                                      </div>
                                      <button 
                                          type='button'
                                          className='place-self-center hover:rotate-90 hover:text-red-600 cursor-pointer transition-all'
                                          onClick={() => removeItem(food.id)}>
                                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className=" icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                                      </button>
                                  </li>
                              ))
                          }
                          </ul>
              </fieldset>
              <fieldset>
                  <legend className='mb-5 py-2 border-b border-gray-200 text-gray-400 text-xl w-full font-bold'>Propina</legend>
                  <div className='flex flex-col'>
                      <ul className="grid w-full sm:gap-3 grid-cols-2 lg:grid-cols-4 *:flex *:h-full gap-y-2 items-center *:justify-self-center *:w-full *:self-center">
                          <li>
                              <input type="radio" id="minima" name="propina" value={1.1} className="hidden peer" onChange={handlePropinaChange} defaultChecked/>
                              <label htmlFor="minima" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 border">
                                  <div className="block">
                                      <div className="w-full text-sm text-center text-balance mb-2 pb-4 font-bold">Mínima 🙂</div>
                                      <div className="w-full text-xs text-center text-pretty">Se cobrará un <strong>10%</strong> extra del valor total</div>
                                  </div>
                              </label>
                          </li>
                          <li>
                              <input type="radio" id="mediana" name="propina" value={1.15} className="hidden peer" onChange={handlePropinaChange}/>
                              <label htmlFor="mediana" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 border">
                                  <div className="block">
                                      <div className="w-full text-sm text-center text-balance mb-2 pb-4 font-bold">Mediana 😏</div>
                                      <div className="w-full text-xs text-center text-pretty">Se cobrará un <strong>15%</strong> extra del valor total</div>
                                  </div>
                              </label>
                          </li>
                          <li>
                              <input type="radio" id="grande" name="propina" value={1.2} className="hidden peer" onChange={handlePropinaChange}/>
                              <label htmlFor="grande" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 border">
                                  <div className="block">
                                      <div className="w-full text-sm text-center text-balance mb-2 pb-4 font-bold">Generosa 🤑</div>
                                      <div className="w-full text-xs text-center text-pretty">Se cobrará un <strong>20%</strong> extra del valor total</div>
                                  </div>
                              </label>
                          </li>
                          <li>
                              <input type="radio" id="vacia" name="propina" value={1} className="hidden peer" onChange={handlePropinaChange} />
                              <label htmlFor="vacia" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-pink-500 peer-checked:text-pink-500 hover:text-gray-600 hover:bg-gray-100 border">                        
                                  <div className="block">
                                      <div className="w-full text-sm text-center text-balance mb-2 pb-4 font-bold">Vacía 😵</div>
                                      <div className="w-full text-xs text-center text-pretty">Se cobrará el valor total sin añadidos</div>
                                  </div>
                              </label>
                          </li>
                      </ul>
                  </div>
              </fieldset>
              <fieldset className='*:text-gray-800'>
                  <legend className='mb-5 py-2 border-b border-gray-200 !text-gray-400 text-xl w-full font-bold'>Totales y Propina</legend>
                  <div className='mx-auto w-full flex items-center justify-center mb-10'>
                      <div className='text-center w-full px-10 py-1 shadow-md rounded-3xl'>
                          <p className='text-xs text-gray-400'>El valor de la orden es</p>
                          <p className='text-3xl font-bold py-2 text-indigo-600'>${total}</p>
                      </div>
                  </div>
                  <div className='*:text-xs *:w-full'>
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
          : <>
              <article className='w-full border-2 rounded-md border-gray-200 p-2 flex flex-col space-y-5 text-gray-800'>
                  <h2 className='font-bold text-2xl my-2'>Consumo</h2>
                  <p className='text-center font-semibold text-sm'>No se ha seleccionado ningún plato aún 🍕😴</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="grid gap-4">
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                          </div>
                      </div>
                      <div className="grid gap-4">
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                          </div>
                      </div>
                      <div className="grid gap-4">
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                          </div>
                      </div>
                      <div className="grid gap-4">
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                          </div>
                          <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                          </div>
                      </div>
                  </div>
              </article>
          </>
      }
      </div>
      <div id="consumoElem" className='w-fit fixed bottom-5 left-5 space-y-2 block'></div>
    </>
  )
}

export default App
