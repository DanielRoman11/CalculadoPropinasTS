export interface Food {
  id: number
  name: string 
  price: price
}

export interface FoodItem extends Food {
  quantity: number
}