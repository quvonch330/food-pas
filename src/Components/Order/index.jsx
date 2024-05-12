import React from "react";
import './Order.css';
import {AiOutlineDelete} from 'react-icons/ai'


function Orders( { order, onDelet, payment} ) {

   const totalCost = order.map(el => el.count * el.price)
   const sum = order.length !==  0 ? totalCost.reduce((a, b) => a +b ) : 0
   
   const Continue = () => {
    if(order.length > 0 ) {
      payment(true)
    }
   }

  return (
    <div className="w-[416px] h-screen relative">
      <div className="w-[416px] h-screen bg-[#1F1D2B] fixed rounded-tr-[16px] rounded-br-[16px] text-[#fff] pl-[24px] pr-[24px] py-[10px] overflow-scroll">
        <h2 className="text-[20px] leading-[28px] mb-[24px]"> Orders #34562</h2>
        <div className="Row">
          <button className="text-[#fff] bg-[#EA7C69] text-[16px] leading-[20px] px-[12px] py-[7px] mr-[8px] mb-[15px] border-[1px] border-[solid] border-[#393C49] rounded-[10px] cursor-pointer"> Dine In</button>
          <button className="text-[#EA7C69] text-[16px] leading-[20px] px-[12px] py-[7px] mr-[8px] mb-[15px] bg-[#1F1D2B] border-[1px] border-[solid] border-[#393C49] rounded-[10px] cursor-pointer"> To Go</button>
          <button className="text-[#EA7C69] text-[16px] leading-[20px] px-[12px] py-[7px] mr-[8px] mb-[15px] bg-[#1F1D2B] border-[1px] border-[solid] border-[#393C49] rounded-[10px] cursor-pointer"> Delivery</button>
        </div>
        <div className="flex flex-row border-b-[1px_solid_#393C49] pb-[7px] mb-[7px]">
          <h2 className="text-[16px] leading-[22px] w-[68%]"> Item</h2>
          <h2 className="text-[16px] leading-[22px] w-[15%]"> Qty</h2>
          <h2 className="text-[16px] leading-[22px]"> Price</h2>
        </div>
        {order.map((item) => (
          <div className="Row" key={item.id}>
          <div className="flex flex-row justify-between items-center">
              <div className="Food-info">
                  <img src={item.img} alt='Food-img'/>
                  <div>
                      <p className="text-[#fff] w-[150px] h-[18px] font-medium leading-[19px] tracking-[0.5px] overflow-hidden mr-[25px] mb-[5px] "> {item.name}</p>
                      <p className="text-[#fff]"> ${item.price}</p>
                  </div>
              </div>
                <p className=" px-[19px] py-[13px] rounded-[10px] border-[1px] border-[solid] border-[#393C49]">{item.count}</p>
                <p className="pl-[0] pr-[19px] py-[12px]"> $ {item.count * item.price}</p>
            </div>
            <div className="flex items-center">
                <input className="w-[293px] h-[48px] text-[#E0E6E9] pl-[14px] pr-[88px] py-[14px] mt-[13px] border-[#393C49] outline-[#393C49] bg-[#2D303E] rounded-[10px]" placeholder="Order Note..."/>
                <div className="Order-delet-btn" onClick={() => onDelet(item)}><AiOutlineDelete /></div>
            </div>
         </div>
        ))}
      </div>
      <div className="w-[409px] fixed bottom-[0] text-[#E0E6E9] p-[24px] pb-[10px] pt-[10px] mt-[5px] border-t-[1px_solid_#393C49] z-10 bg-[#1F1D2B]">
        <div className="flex items-center justify-between mb-[10px]"> 
          <p> Discount</p>
          <p> $ {(sum / 10 * 2).toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between mb-[10px]">
          <p> Sub-totla </p>
          <p> $ {sum.toFixed(2)}</p>
        </div>
        <button className=" Continue-btn  w-full text-[#e9dfdf] text-[14px] text-center leading-[20px] px-0 py-[10px] bg-[#EA7C69] cursor-pointer rounded-[10px] outline-[none] border-[none] [transition:all_0.3s_ease]" onClick={Continue}>Continue to Payment</button>
      </div>
    </div>

  );
}

export default Orders;