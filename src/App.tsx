import CalculadoraPropinas from './components/CalculadoraPropinas';
import FoodComponent from './components/FoodComponent';
import SinConsumo from './components/SinConsumo';
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
              <SinConsumo/>
          </>
      }
      </div>
      <div id="consumoElem" className='w-fit fixed bottom-5 left-5 space-y-2 block transition-all'></div>
    </>
  )
}

export default App
