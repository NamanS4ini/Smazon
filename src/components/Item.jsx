import React from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from "../store/slice/cart-slice";
const Item = ({ item }) => {
    const cart = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    function handelAdd() {
        dispatch(addToCart(item))
    }
    function handelRemove() {
        dispatch(removeFromCart(item.id))
    }

  return (
    <div className="bg-white p-5 w-64 flex flex-col items-center rounded-lg">
      <div>
        <img
          className="w-32 h-32 object-contain rounded-lg"
          src={item.image}
          alt=""
        />
      </div>
      <div className="py-4 w-full h-24 font-semibold line-clamp-3 break-all">
        {item.title}
      </div>

      <div className="p-4">Price: ${item.price}</div>
      <div className="flex justify-center w-full px-4">
        <button onClick={cart.some(product=> product.id == item.id)?handelRemove:handelAdd} className="bg-green-500 font-semibold rounded-lg p-2">
            
            {
                cart.some(product=> product.id == item.id)? 'Remove From Cart': "Add To Cart"
            }

        </button>
      </div>
    </div>
  );
};

export default Item;
