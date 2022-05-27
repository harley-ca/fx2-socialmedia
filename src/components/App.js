import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import Message from './Message'
import MessageDetail from './MessageDetail'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'


const App = () => {

  const [loggedInUser, setLoggedInUser] = useState("")
  const [messageList, setMessageList] = useState([])

  const activateUser = (username) => {
    setLoggedInUser(username)
  }

  const addMessage = (text) => {
    const message = {
      text: text,
      user: loggedInUser,
      id: nextId(messageList)
    }
    setMessageList(
      (messageList) => [...messageList, message]
    )
  }
  function nextId(data) {
    if (data.length < 1) {
        return 1
    } else {
        let x = []
        data.forEach((element) => {
            x.push(element.id)
        })
        return (Math.max(...x)+1)
    }
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
          <Route path="messages">
            <Route index element={<Messages messageList={messageList} />} />
            <Route path="new" element={
              loggedInUser?
                <MessageForm loggedInUser={loggedInUser} addMessage={addMessage} />
              :
                <Navigate to="/login" />
            } />
            <Route path=":messageId" element={<MessageDetail messageList={messageList}/>} />
          </Route>
          <Route path="login" element={<LoginForm activateUser={activateUser}/>} />
          <Route path="*" element={<NotFound />} /> {/* for everything else, there's NotFound */}
        </Routes>
      </Router>
    </div>
  )
}

export default App