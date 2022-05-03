import { IFriend } from '../App'
import Card from './Card'
import "../styles/index.css"

interface ICards{
    friends: IFriend[]
}

const Cards = ({friends}: ICards) => {
  return (
    <div className='card-container'>
        {friends.map(friend => <Card key={friend.id} data={friend} />)}
    </div>
  )
}

export default Cards