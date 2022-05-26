import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'


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

      {/* { !loggedInUser && <LoginForm activateUser={activateUser}/> }
      { loggedInUser && <MessageForm loggedInUser={loggedInUser} addMessage={addMessage} /> }
      <Messages messageList={messageList}/> */}
      {/* {Wrap all the componenets involed in the app routing} */}
      <Router>
        <Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="/" element={<Navigate to="messages" replace/>} />
          <Route path="messages/new" element={<MessageForm />} />
          <Route path="messages" element={<Messages messageList={messageList} />} />
          <Route path="login" element={<LoginForm activateUser={activateUser}/>} />
          <Route path="*" element={<NotFound />} /> {/* for everything else, there's NotFound */}
        </Routes>
      </Router>
    </div>
  )
}

export default App