import { TIPS } from "../data/db"
import { CalculadoraPropinasProps } from "../interfaces"

interface PropinaProps extends Pick<CalculadoraPropinasProps, "handlePropinaChange">{}

export default function Propina({handlePropinaChange}: PropinaProps){
  return(
    <fieldset className='flex flex-col w-full'>
      <legend className='mb-5 py-2 border-b border-gray-200 text-gray-400 text-xl w-full font-bold'>Propina</legend>
      <div className='flex flex-col'>
      <ul className="grid w-full h-full sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 *:flex *:h-full gap-y-2 items-center *:justify-self-center *:w-full *:self-center">
        {
          TIPS.map(tip => (
            <li key={tip.id}>
              <input type="radio" id={tip.name} name="propina" value={tip.percentage} className="hidden peer" onChange={handlePropinaChange} defaultChecked={tip.id === 1}/>
              <label htmlFor={tip.name} className={tip.id !== 4 ? "inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 border" : "inline-flex items-center justify-center w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-pink-500 peer-checked:text-pink-500 hover:text-gray-600 hover:bg-gray-100 border"}>
                <div className="block">
                  <p className="w-full text-sm text-center text-balance mb-2 pb-4 font-bold">{tip.title}</p>
                  <p className="w-full text-xs text-center text-pretty">{tip.description}</p>
                </div>
              </label>
            </li>
          ))
        }
      </ul>
      </div>
    </fieldset>
  )
}