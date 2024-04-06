import CalculadoraPropinas from './components/CalculadoraPropinas';
import FoodComponent from './components/FoodComponent';
import Propinas from './hooks/usePropinas'

function App() {
  const { data, consumo, propina, addConsumo, substractConsumo, total, subtotal, handlePropinaChange, removeItem, flushConsumo } = Propinas();

  return (
    <>
      <h1 className="text-3xl bg-gray-800 text-gray-100 text-center font-semibold py-5">Calculadora de Propinas y Consumo</h1>
      <div className='grid grid-cols-1 gap-y-2 md:grid-cols-2 relative p-2 overflow-x-auto container mx-auto mt-10 md:gap-x-2 mb-10'>
        <FoodComponent
          data={data}
          addConsumo={addConsumo}
        />
          {consumo.length > 0 
            ? <CalculadoraPropinas
                consumo={consumo}
                subtotal={subtotal}
                propina={propina}
                handlePropinaChange={handlePropinaChange}
                addConsumo={addConsumo}
                substractConsumo={substractConsumo}
                flushConsumo={flushConsumo}
                removeItem={removeItem}
                total={total}
              />
            : <>
              <article className='w-full border-2 rounded-md border-gray-200 p-2 flex flex-col space-y-5 text-gray-800'>
                  <h2 className='font-bold text-2xl my-2'>Consumo</h2>
                  <p className='text-center font-semibold text-sm'>No se ha seleccionado ningún plato aún 🍕😴</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full items-center">
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
