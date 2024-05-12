import React from "react";
import './Payment.css'
import {BsCreditCard2Front, BsCashCoin, BsCheckCircleFill} from 'react-icons/bs'
import { RiPaypalLine } from 'react-icons/ri'

function Payment( { active}) {
  console.log(active);
  return ( 
    <>
      <div className={`Payment ${active ? 'active' : ''} `}>
      <div className="Payment-Container">
        <h1 className="text-[28px] leading-[39px] mb-[8px]" > Payment</h1>
        <p className="text-[16px] leading-[22px] pb-[24px] mb-[28px] border-b-[1px_solid_#393C49]" > 3 payment method available</p>
        <div className="Payment-method"> 
          <h2 className="text-[20px] leading-[28px] mb-[16px]"> Payment Method </h2>
          <div className="Payment-btn">
          <div className="Card active">  
            <BsCheckCircleFill className="Payment-icon__check"/>
            <BsCreditCard2Front className="w-[30px] h-[20px]"/> <br/> <br/>
            Credit Card
          </div>
          <div className="Paypal">  
            <BsCheckCircleFill className="Payment-icon__check"/>  
            <RiPaypalLine className="w-[30px] h-[20px]" />  <br/> <br/>
            Paypal
          </div>
          <div className="Cash">
            <BsCheckCircleFill className="Payment-icon__check"/>
            <BsCashCoin className="w-[30px] h-[20px]" /> <br/> <br/>
            Cash
          </div>
          </div>
          <form className="Payment-form">
          
          <label className="block text-[14px] leading-[20px] font-semibold mb-[8px]">
            <span className="mt-[40px] block text-[14px] leading-[20px] font-semibold mb-[8px]">Cardholder Name</span>
            <input className="w-full p-[14px] text-[#E0E6E9] text-[15px] leading-[20px] bg-[#2D303E] border-[#393C49] rounded-[8px] outline-[none] mb-[16px] border-[none]" type="text" placeholder="Levi Ackerman"/>
          </label>

          <label className="block text-[14px] leading-[20px] font-semibold mb-[8px]">
           <span className="block text-[14px] leading-[20px] font-semibold mb-[8px]" >  Card Number </span>
           <input className="w-full p-[14px] text-[#E0E6E9] text-[15px] leading-[20px] bg-[#2D303E] border-[#393C49] rounded-[8px] outline-[none] mb-[16px] border-[none]" type="number" placeholder="2564 1421 0897 1244"/> 
          </label>
          
          <div className="Form-Row">
              <label >
                <span>Expiration Date</span>
              <input className="w-full p-[14px] text-[#E0E6E9] text-[15px] leading-[20px] bg-[#2D303E] border-[#393C49] rounded-[8px] outline-[none] mb-[16px] border-[none]" type="number" placeholder="02/2022"/> 
              </label>
              
              <label>
                <span>CVV</span>
                <input className="w-full p-[14px] text-[#E0E6E9] text-[15px] leading-[20px] bg-[#2D303E] border-[#393C49] rounded-[8px] outline-[none] mb-[16px] border-[none]"  type="password" placeholder="***"/> 
              </label>
              <hr></hr>
              <label className="-mt-[14px]">
                <span>Order Type</span>
                <select className="w-full bg-[#2D303E] text-[#fff] border-[none] text-[15px] p-[15px] pr-0 rounded-[8px]" >
                  <option value="1">Dine In</option>
                  <option value="2">To Go</option>
                  <option value="3">Delivery</option>
                </select>
              </label>

              <label>
              <span>Table no.</span>
              <input className="w-full p-[14px] text-[#E0E6E9] text-[15px] leading-[20px] bg-[#2D303E] border-[#393C49] rounded-[8px] outline-[none] mb-[16px] border-[none]" type="number" placeholder="140"/> 
              </label>
          </div>

          <div className="flex items-center justify-between mt-[10px]">
            <button className="text-[#EA7C69] border-[1px] border-[solid] border-[#EA7C69] bg-[#2D303E] w-[48%] p-[14px] text-center rounded-[10px] text-[14px] leading-[20px] outline-[none] cursor-pointer"> Cancel</button>
          
            <button className=" text-[#fff] border-[1px] border-[solid] border-[#EA7C69] bg-[#EA7C69] w-[48%] p-[14px] text-center rounded-[10px] text-[14px] leading-[20px] outline-[none] cursor-pointer"> Confirm Payment </button>
         </div>

          </form>

        </div>
    </div>
      </div>
    </>
   );
}
export default Payment;