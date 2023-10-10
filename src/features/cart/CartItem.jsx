/* eslint-disable react/prop-types */
import { useState } from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

function CartItem({ product }) {
  const { id, image, title, price, totalPrice, category, quantity } = product;
  const dispatch = useDispatch();
  return (
    <li className="grid grid-cols-6 items-center  gap-5 rounded-lg border-[1px] border-gray-300 px-2  text-xs shadow-md ss:px-0 ss:text-base xs:px-2 xs:py-2 xs:text-base sm:mx-auto sm:w-3/4 sm:py-5 sm:text-xl ">
      <div>
        <img
          src={image}
          alt="product cover"
          className="h-14 w-full object-contain"
        />
      </div>
      <div className="col-span-2">
        <h2 className="block sm:hidden">{title.slice(0, 10)}..</h2>
        <h2 className="hidden sm:block">{title}</h2>
        <span className="text-ellipsis whitespace-nowrap text-xs ss:text-sm">
          {category}
        </span>
      </div>
      <div className="col-span-2 flex items-center justify-center gap-1 ss:gap-3 ">
        <button className=" font-semibold text-red-500">-</button>
        <input
          type="number"
          className=" max-w-[16%] appearance-none rounded-lg border-[1px]  border-primary text-center ss:max-w-[20%] xs:max-w-[27%]  sm:max-w-[20%]"
          value={quantity}
          onChange={() => {}}
          // onChange={(e)=>dispatch()}
        />
        <button className=" font-semibold text-green-500">+</button>
        <p className="flex items-center">
          <LiaDollarSignSolid className=" text-green-500" />
          {totalPrice}
        </p>
      </div>
      <RiDeleteBin6Line className="cursor-pointer  text-red-500 hover:text-red-600" />
    </li>
  );
}

export default CartItem;
