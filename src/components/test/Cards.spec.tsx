import { render, screen } from "@testing-library/react"
import { IFriend } from "../../App";
import Cards from "../Cards"

const friendList: IFriend[] = [
    { id: "1", name: 'Phoebe', status:"offline" },
    { id: "2", name: 'Rachel', status:"offline"},
    { id: "3", name: 'Ross', status:"offline" },
    { id: "4", name: 'Chandler', status:"online" },
    { id: "5", name: 'Monica', status:"online" },
  ];

// const mockCard = jest.fn()
// jest.mock("../Card", ()=>({ Card: ()=>{
//      mockCard() 
//      return <div>Card</div> }})
// )


// describe("Cards", ()=>{
//     describe("Por cada friend de la lista", ()=>{
//         it("Deberia renderizar una Card", ()=>{
//             render(<Cards friends={friendList}/>)
//             expect(mockCard).toBeCalledTimes(5)
//         })
//     })
// })

describe("Cards", ()=>{
    describe("Por cada friend de la lista", ()=>{
        it("Deberia renderizar una Card", ()=>{
            render(<Cards friends={friendList}/>)
            expect(screen.getAllByTestId('friend-card')).toHaveLength(5)
        })
    })
})