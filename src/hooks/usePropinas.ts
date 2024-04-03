import { ChangeEvent, useMemo, useState } from "react";
import { menuItems } from "../data/db";
import { Food, FoodItem } from "../interfaces";

export default function usePropinas() {
  const [ data ] = useState(menuItems);
  const [ consumo, setConsumo ] = useState<FoodItem[]>([]);
  const [ propina, setPropina ] = useState(1.1)

  const MAX_TIMES = 15

  function createToast(food: Food) {
    const consumoElem: HTMLElement | null = document.querySelector('#consumoElem');
    const toastElem = document.createElement('div');
    const toastText = document.createElement('p');

    toastText.textContent = `Se añadió ${food.name} al consumo.`
    toastText.classList.add('text-sm', 'font-normal', 'p-4')
    toastElem.classList.add('text-center', 'bg-white', 'shadow', 'items-center', 'text-gray-500', 'rounded-lg' )
    
    
    toastElem.appendChild(toastText)
    consumoElem?.appendChild(toastElem)

    setTimeout(() => {
      const primero = consumoElem?.firstElementChild
      if(primero) consumoElem?.removeChild(primero)
    }, 5000);
  }

  function addConsumo(food: Food) {
    const id = food.id;
  
    createToast(food)

    if(consumo.find((item: Food) => item.id === id) === undefined) {
      const newFoodItem: FoodItem = {...food, quantity: 1}
      setConsumo([...consumo, newFoodItem]);
    } else {
      const consumoCopy: FoodItem[]= [...consumo];
      const thisQuantity: FoodItem | undefined = consumoCopy.find((item) => item.id === id);
      
      if(thisQuantity !== undefined && thisQuantity.quantity < MAX_TIMES) {
        thisQuantity.quantity++;
        setConsumo([...consumoCopy]);
      }
    }
  }

  function substractConsumo(id: number) {
    const consumoCopy: FoodItem[] = [...consumo]
    const thisTimes = consumoCopy.find((item) => Number(item.id) === id)

    if(thisTimes !== undefined && thisTimes.quantity > 1){
      thisTimes.quantity -= 1
      setConsumo([...consumoCopy])
    }
  }

  const removeItem = (id: number) => {
    const thisItem: FoodItem | undefined = consumo.find((item) => Number(item.id) === id)
    setConsumo(consumo.filter((item) => item !== thisItem))
  };

  const handlePropinaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPropina(parseFloat(e.target.value))
  }

  const subtotal = useMemo(() => consumo.reduce((total, food): number => {
    return total + (food.price * food.quantity)
  }, 0), [consumo]);

  const total = useMemo(() => {
    return Number((subtotal * propina).toFixed(2))
  }, [propina, subtotal])

  const flushConsumo = () => { setConsumo([]); setPropina(1.1)}

  return {
    data,
    consumo,
    propina,
    addConsumo,
    substractConsumo,
    removeItem,
    subtotal,
    total,
    handlePropinaChange,
    flushConsumo
  }
}