import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { IFriend } from "../../App"
import Card from "../Card"

const friend1: IFriend = {name: "Tomi", status: "online", id:"5"}
const friend2: IFriend = {name: "Diego", status: "offline", id:"6"}


describe("Card", ()=>{
    describe("Como estado default", ()=>{
        it("Deberia renderizar un titulo con el nombre del friend",()=>{
            render(<Card key="1" data={friend1} />);
            expect(screen.getByText(friend1.name)).toBeInTheDocument()
        })
        it("Deberia renderizar un boton con el status del friend", ()=>{
            render(<Card key="1" data={friend1} />);
            const button = screen.getByRole("button")
            expect(button.innerHTML).toEqual(friend1.status)
        })
    })
    describe("Al presionar el boton de status", ()=>{
        describe("Si el status es online", ()=>{
            it("deberia cambiar a offline", ()=>{
                render(<Card key="1" data={friend1} />);
                const button = screen.getByRole("button")
                expect(button.innerHTML).toEqual("online")
                userEvent.click(button)
                expect(button.innerHTML).toEqual("offline")
            })
        })
        describe("Si el status es offline", ()=>{
            it("deberia cambiar a online", ()=>{
                render(<Card key="1" data={friend2} />)
                const button = screen.getByRole("button")
                expect(button.innerHTML).toEqual("offline")
                userEvent.click(button)
                expect(button.innerHTML).toEqual("online")
            })
        })
    })
})



