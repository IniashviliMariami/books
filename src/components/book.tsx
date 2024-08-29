import React from 'react'

interface BookProps{
    name:string;
    description:string;
    image: string; 
    weapons:string[];
    action: (name: string) => void;
}

const Book:React.FC<BookProps>=(props)=>{
  return (
    <div className='card'>
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
      <p>{props.description} </p>
      {props.weapons.map((weapons)=><div>{weapons}</div>)}
      <button onClick={()=> props.action(props.name)} >button</button>
    </div>
  )
}

export default Book
