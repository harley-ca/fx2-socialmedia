import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import initialMessageList from '../data/message-list.json'


const App = () => {

  const [loggedInUser, setLoggedInUser] = useState("sam")
  const [messageList, setMessageList] = useState([])

  const activateUser = (username) => {
    setLoggedInUser(username)
  }

  useEffect(
    ()=>{
      //fetch
      setMessageList(initialMessageList)
    }
    ,
    []
  )

  return (
    <div >
      <h1>Social media</h1>
      <Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
      { !loggedInUser && <LoginForm activateUser={activateUser}/> }
      <MessageForm />
      <Messages messageList={messageList}/>
    </div>
  )
}

export default App