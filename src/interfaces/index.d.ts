import { ChangeEvent } from "react"

export interface Food {
  id: number
  name: string 
  price: price
}

export interface tipsI {
  id: number
  percentage: number
  description: string
  name: string
  title: string
}

export interface FoodItem extends Food {
  quantity: number
}

export interface CalculadoraPropinasProps{
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
