import React ,{ createContext,useState } from "react"
import { food_items } from "../food";
export const dataContext = createContext()


 function Usercontext({children}) {
    let [ input, setInput ] = useState("")
    const [cate, setCate] = useState(food_items);
    const [showCard, setShowCard] = useState(false);

    let data = {
        input,
        setInput,
        cate,
        setCate,
        showCard,
        setShowCard,
    }


  return (
    <div>
      <dataContext.Provider value= {data} >
        {children}
      </dataContext.Provider>
    </div>
  )
}

export default Usercontext
