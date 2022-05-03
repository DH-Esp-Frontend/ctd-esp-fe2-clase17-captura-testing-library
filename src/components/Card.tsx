import { IFriend } from '../App'
import useStatus from './useStatus'
import "../styles/index.css"

interface ICard  {
    data: IFriend,
    key: string
}

const Card = ({data}: ICard) => {
    const {isOnline, setStatus} = useStatus(data)
    const {name, status} = data
  return (
    <div data-testid="friend-card" className={isOnline ? "card-online" : "card-offline"} >
        <h2>{name}</h2>
        <li>    
          <button  onClick={()=>setStatus()}>{status}</button>
        </li>
    </div>
  )
}

export default Card