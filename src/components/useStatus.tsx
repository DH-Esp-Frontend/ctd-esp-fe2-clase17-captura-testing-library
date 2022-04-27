import { useState } from 'react'
import { IFriend, IStatus } from '../App'

type IUseStatus = [boolean, ()=>void]

const checkStatus = (status: IStatus)=> status === "online" ? true : false 


const useStatus = (friend: IFriend): IUseStatus => {
    const [state, setState] = useState(friend.status)

    const setStatus = ()=>{
        if(state === "online") {
            setState("offline")
            friend.status = "offline"}

        if(state === "offline") {
            setState("online")
            friend.status = "online"
    }}

    const isOnline = checkStatus(state)

  return [isOnline, setStatus]
}

export default useStatus