import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { IFriend } from "../../App"
import useStatus from "../useStatus"

const friend1: IFriend = {name: "Tomi", status: "online", id:"5"}
const friend2: IFriend = {name: "Diego", status: "offline", id:"6"}

describe("useStatus", ()=>{
    describe("si el estado inicial del friend es online", ()=>{
        it("isOnline deberia ser true", ()=>{
            const { result } = renderHook(()=> useStatus(friend1))
            expect(result.current.isOnline).toBeTruthy()
        })
        it("setStatus deberia cambiar el status del friend a offline", ()=>{
            const { result } = renderHook(()=> useStatus(friend1))
            act(()=>{
                result.current.setStatus()
            })
            expect(result.current.isOnline).toBeFalsy()
        })
    })
    describe("si el estado inicial del friend es offline", ()=>{
        it("isOnline deberia ser false", ()=>{
            const { result } = renderHook(()=> useStatus(friend2))
            expect(result.current.isOnline).toBeFalsy()
        })
        it("setStatus deberia cambiar el status del friend a online", ()=>{
            const { result } = renderHook(()=> useStatus(friend2))
            act(()=>{
                result.current.setStatus()
            })
            expect(result.current.isOnline).toBeTruthy()
        })
    })


})

