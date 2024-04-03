import Propinas from './hooks/usePropinas'

function App() {
  const { data, consumo } = Propinas();

  return (
    <>
      <h1 className="text-3xl bg-gray-800 text-gray-100 text-center font-semibold py-5">Calculadora de Propinas y Consumo</h1>
        <div className='flex relative overflow-x-auto container mx-auto mt-10 space-x-2 mb-10'>
            <article className='w-1/2'>
                <h2 className='font-bold text-2xl my-2'>Menú</h2>
                <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400 border border-red-600 overflow-hidden rounded-md">
                    <thead className="text-xs text-gray-100 bg-gray-800">
                        <tr>
                            <th scope='col' className='px-6 py-3'>Nombre</th>
                            <th scope='col' className='px-6 py-3'>Precio</th>
                            <th scope='col' className='px-6 py-3'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr className='odd:bg-white text-md lg:text-md even:bg-slate-200 hover:bg-slate-400 *:hover:text-white' key={item.id}>
                                <th scope='col' className='font-medium text-gray-900 px-6 py-4 text-left'>{item.name}</th>
                                <th scope='col' className='font-medium text-gray-900 px-6 py-4 text-left'>${item.price}</th>
                                <th scope='col' className='font-medium px-6 py-4 text-left'><a href='#' className='hover:underline underline-offset-4 font-semibold text-indigo-600 hover:text-indigo-500'>+ Añadir</a></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
            <article className='w-1/2 border-2 rounded-md border-gray-200 px-4 py-2 flex flex-col space-y-5'>
                <h2 className='font-bold text-2xl'>Consumo</h2>
                <fieldset>
                    <legend className='mb-5 py-2 border-b border-gray-200 text-gray-400 text-xl w-full font-bold'>Contenido</legend>
                    {consumo.length > 0 
                        ? <p>Hay contenido</p>
                        : <p className='text-center font-semibold text-gray-600'>No se han seleccionado productos 😴</p>
                    }
                </fieldset>
                <fieldset>
                    <legend className='mb-5 py-2 border-b border-gray-200 text-gray-400 text-xl w-full font-bold'>Propina</legend>
                    <div className='flex flex-col'>
                        <ul className="grid w-full sm:gap-3 grid-cols-2 lg:grid-cols-4 *:flex *:h-full gap-y-2 items-center *:justify-self-center *:w-full *:self-center">
                            <li>
                                <input type="radio" id="minima" name="propina" value="minima" className="hidden peer" defaultChecked/>
                                <label htmlFor="minima" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 border">
                                    <div className="block">
                                        <div className="w-full text-md text-center text-balance mb-2 pb-4 font-semibold">Mínima 🙂</div>
                                        <div className="w-full text-xs text-center text-pretty">Se cobrará un 10% del valor total</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="mediana" name="propina" value="mediana" className="hidden peer"/>
                                <label htmlFor="mediana" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 border">
                                    <div className="block">
                                        <div className="w-full text-md text-center text-balance mb-2 pb-4 font-semibold">Mediana 😏</div>
                                        <div className="w-full text-xs text-center text-pretty">Se cobrará un 15% del valor total</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="grande" name="propina" value="grande" className="hidden peer"/>
                                <label htmlFor="grande" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 border">
                                    <div className="block">
                                        <div className="w-full text-md text-center text-balance mb-2 pb-4 font-semibold">Generosa 🤑</div>
                                        <div className="w-full text-xs text-center text-pretty">Se cobrará un 20% del valor total</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="vacia" name="propina" value="vacia" className="hidden peer" />
                                <label htmlFor="vacia" className="inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-pink-500 peer-checked:text-pink-500 hover:text-gray-600 hover:bg-gray-100 border">                        
                                    <div className="block">
                                        <div className="w-full text-md text-center text-balance mb-2 pb-4 font-semibold">Vacía 😵</div>
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
                        <div className='text-center w-full px-10 py-1 shadow-md rounded-full'>
                            <p className='text-xs text-gray-400'>Tu recibo de pago es de</p>
                            <p className='text-3xl font-bold py-2 text-indigo-600'>$110</p>
                        </div>
                    </div>
                    <div className='*:text-md'>
                        <p>Subtotal: <span className='font-bold float-right'>$100</span></p>
                        <p>Propina: <span className='font-bold float-right'>$10</span></p>
                        <p>Propina: <span className='font-bold float-right'>$10</span></p>
                    </div>
                </fieldset>
                <button type="button" className='text-center w-full py-2 rounded-md bg-indigo-600 text-white'>Guardar Orden</button>
            </article>
        </div>
    </>
  )
}

export default App
