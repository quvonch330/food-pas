import React from "react";


function Food( {foodData, onAdd } ) {

 


  return ( 
    <div className="block w-full -mt-[10px]">
        <div className="flex [flex-flow:row_wrap] items-center justify-between">
          <h2 className="text-[#fff] text-[22px] leading-[28px]">Choose Dishes </h2>
          <select className="h-[48px] text-[#fff] text-[14px] p-[15px] bg-[#1F1D2B] border-[#393C49] rounded-[10px] pr-[4px] outline-[none]" >
            <option value="1">Dine In</option>
            <option value="2">To Go</option>
            <option value="3">Delivery</option>
          </select>
        </div>
        <div className="flex [flex-flow:row_wrap] items-center justify-between">
          {foodData.map((item) => (
            <div className="w-[192px] h-[226px] text-center bg-[#1F1D2B] rounded-[16px] px-[24px] py-[0] mt-[66px] cursor-pointer" key={item.id} id={item.id} onClick={() => onAdd(item)}>
                <div className="w-[149px] h-[136px] rounded-[100%] text-center mx-[auto] my-[0] -mt-[50px] -ml-[3px]" > <img src={item.img} alt={item.name}/></div>
                <h3 className="text-[17px] font-medium leading-[18px] mt-[14px] pb-[8px] text-[white]"> {item.name}</h3>
                <p className="text-[white]" > $ {item.price} </p>
                <p className="text-[#ABBBC2] mt-[5px]"> {item.bowls} Bowls available</p>
          </div>
          ))}
        </div>
    </div>
   );
}

export default Food;