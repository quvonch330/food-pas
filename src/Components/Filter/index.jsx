import React, { useState } from "react";
import './Filter.css'




function Filter( { data, setFilter}) {
  const [state, setState] = useState(data)

  const FilterItem = (e) => {     
    setFilter(e.target.id)
    setState((items) => {
        const updatedItems = [...items];
        const changedItems = updatedItems.map((item) => {
          if(e.target.id === item.type) {
            return(
              {
                ...item, 
                active: true,
              }
            )
          } else {
            return(
              {
                ...item, 
                active: false,
              }
            )
          }
        })     
        return changedItems;
      }
     )
    
  }

  return ( 
    <div className="mt-[24px] w-full">
    <ul className="flex flex-row justify-between pb-[13px] border-b-[1px_solid_#393C49]">
        {state.map((item) => {
        return  <li className={`text-[#fff] cursor-pointer relative text-[16px] leading-[20px] tracking-[1px] ${item.active ? 'active' : ' '}`}
                    key={item.id}
                    id={item.type}
                    onClick={FilterItem}> 
                    {item.type}    
                </li> 
})}
    </ul>
 </div>
   );
}

export default Filter;