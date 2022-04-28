import { useCallback, useState } from 'react'
import { IFriend } from '../App'

type IUseStatus = {isOnline: boolean, setStatus: ()=>void}

const useStatus = (friend: IFriend): IUseStatus => {
    const [state, setState] = useState(friend.status)

    const setStatus = useCallback(()=>{
        if(state === "online") {
            setState("offline")
            friend.status = "offline"}

        if(state === "offline") {
            setState("online")
            friend.status = "online"
    }}, [friend, state])

    const isOnline = state === "online" ? true : false 

  return {isOnline, setStatus}
}

export default useStatus