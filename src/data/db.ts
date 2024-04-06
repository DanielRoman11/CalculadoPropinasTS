import { Food, tipsI } from "../interfaces";

export const menuItems: Food[] = [
  {
    "id": 1,
    "name": "Pizza a la Leña Chica",
    "price": 30
  },
  {
    "id": 2,
    "name": "Pizza a la Leña Mediana",
    "price": 50
  },
  {
    "id": 3,
    "name": "Rebanada de Pay de Limón",
    "price": 30
  },
  {
    "id": 4,
    "name": "Rebanada de Pastel de Chocolate",
    "price": 30
  },
  {
    "id": 5,
    "name": "Jugo de Naranja",
    "price": 15
  },
  {
    "id": 6,
    "name": "Pizza a la Leña Grande",
    "price": 70
  },
  {
    "id": 7,
    "name": "Rib Eye 800g",
    "price": 100
  },
  {
    "id": 8,
    "name": "Jugo de Naranja",
    "price": 15
  },
  {
    "id": 9,
    "name": "Tequila",
    "price": 40
  },
  {
    "id": 10,
    "name": "Rebanada de Pay de Queso",
    "price": 30
  },
  {
    "id": 11,
    "name": "Café Americano",
    "price": 20
  },
  {
    "id": 12,
    "name": "Café Capuchino",
    "price": 40
  }
]

export const TIPS: tipsI[] = [
  {
    id: 1,
    percentage: 1.1,
    description: "Se cobrará un 10% extra del valor total.",
    name: "minima",
    title: "Mínima 🙂"
  },
  {
    id: 2,
    percentage: 1.15,
    description: "Se cobrará un 15% extra del valor total.",
    name: "mediana",
    title: "Mediana 😏"
  },
  {
    id: 3,
    percentage: 1.2,
    description: "Se cobrará un 20% extra del valor total.",
    name: "grande",
    title: "Generosa 🤑"
  },
  {
    id: 4,
    percentage: 1.0,
    description: "Se cobrará el valor total sin añadidos.",
    name: "vacia",
    title: "Vacía 😵"
  }
]
