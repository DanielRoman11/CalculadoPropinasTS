import { ChangeEvent } from "react"

export interface Food {
  id: number
  name: string 
  price: price
}

export interface FoodItem extends Food {
  quantity: number
}

interface CalculadoraPropinasProps{
  consumo: FoodItem[]
  substractConsumo: (id: FoodItem["id"]) => void
  addConsumo: (food: Food | FoodItem) => void
  removeItem: (id: FoodItem["id"]) => void
  flushConsumo: () => void
  handlePropinaChange: (e: ChangeEvent<HTMLInputElement>) => void
  total: number
  subtotal: number
  propina: number
}
