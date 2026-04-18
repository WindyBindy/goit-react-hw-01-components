import { useState } from 'react'
import './App.css'
import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transactions from "../transactions.json"
import { Profile} from "./components/Profile/Profile"
import { Statistics } from './components/Statistics/Statistics'
import { FriendList } from './components/FriendList/FriendList'
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory'
function App() {

  return (
    <>
    <Profile username={user.username} tag={user.jgluke} location={user.location} avatar={user.avatar} stats={user.stats}/>
    <Statistics data={data}/> 
    <FriendList friends={friends}/>
    <TransactionHistory transaction={transactions}/>
  
    </>
  )
}

export default App
