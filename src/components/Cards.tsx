import React from 'react'
import { IFriend } from '../App'
import Card from './Card'

interface ICards{
    friends: IFriend[]
}

const Cards = ({friends}: ICards) => {
  return (
    <div>
        {friends.map(friend => <Card id={friend.id} data={friend} />)}
    </div>
  )
}

export default Cards