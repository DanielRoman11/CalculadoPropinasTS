import { useState } from "react";
import { menuItems } from "../data/db";
import { Food, FoodItem } from "../interfaces";

export default function usePropinas() {
  const initializeConsumo: FoodItem[] = []

  const [ data ] = useState(menuItems);
  const [ consumo, setConsumo ] = useState(initializeConsumo);

  const MAX_TIMES = 15

  function addConsumo(food: Food) {
    const id = food.id;
  
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

  return {
    data,
    consumo,
    addConsumo
  }
}