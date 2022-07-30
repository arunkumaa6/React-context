import React from 'react'
import products from '../products.json';
import { useContext } from 'react';
import { statecontext } from '../statecontext/Context';

export default function Home() {
  const {state,dispatch}=useContext(statecontext);
  // console.log("state",state);

const addTocart=(prod)=>{
  let temp=[];
  if(state?.cartItem?.length){
    temp=[...state.cartItem, prod]
  }
  else{
    temp=[prod];
    console.log("temp",temp);
  }

  dispatch({
    type:"update",
    payload: {cartItem: temp}
  });
}

  return (
    <div>
      {products.map((prod,id)=>
      <div key={id}>
        <h2>{prod.name}</h2>
        <button onClick={()=> addTocart(prod)}>Add</button>
        </div>)}
    </div>
  )
}

