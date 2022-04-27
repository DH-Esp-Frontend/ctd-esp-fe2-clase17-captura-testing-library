import React from 'react'
import { IFriend } from '../App'
import useStatus from './useStatus'

interface ICard  {
    data: IFriend,
    id: string
}

const Card = ({data}: ICard) => {
    const [isOnline, setStatus] = useStatus(data)
    const {name, status } = data
    console.log(name, status);
  return (
    <div style={{"border": isOnline ? "2px solid green" : "2px solid brown"}} >
        <h2>{name}</h2>
        <button onClick={()=>setStatus()} >{status}</button>
    </div>
  )
}

export default Card