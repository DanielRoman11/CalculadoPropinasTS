import { useState } from "react";
import { menuItems } from "../data/db";

export default function usePropinas() {

  const [ data ] = useState(menuItems);

  const [ consumo, setConsumo ] = useState([]);

  return {
    data,
    consumo
  }
}