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

  const addMessage = (text) => {
    const message = {
      text: text,
      user: loggedInUser,
      id: messageList[messageList.length - 1].id + 1
    }
    setMessageList(
      (messageList) => [...messageList, message]
    )
  }

  useEffect(
    ()=>{
      //fetch
      setMessageList(initialMessageList)
    }
    ,
    []
  )
  // Multiple conditionals because multiline ternaries look awful and I hate them
  return (
    <div >
      <h1>Social media</h1>
      <Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
      { !loggedInUser && <LoginForm activateUser={activateUser}/> }
      { loggedInUser && <MessageForm loggedInUser={loggedInUser} addMessage={addMessage} /> }
      <Messages messageList={messageList}/>
    </div>
  )
}

export default App