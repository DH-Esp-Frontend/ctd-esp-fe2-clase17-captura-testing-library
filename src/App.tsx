import React from 'react';
import Cards from './components/Cards';

export type IStatus = "offline" | "online"

export interface IFriend{
  name: string,
  status: IStatus,
  id: string
}

const friendList: IFriend[] = [
  { id: "1", name: 'Phoebe', status:"offline" },
  { id: "2", name: 'Rachel', status:"offline"},
  { id: "3", name: 'Ross', status:"offline" },
  { id: "4", name: 'Chandler', status:"online" },
  { id: "5", name: 'Monica', status:"online" },

];


function App() {
  return (
    <div>
      <h2>Friends List</h2>
      <Cards friends={friendList}/>
    </div>
  );
}

export default App;
