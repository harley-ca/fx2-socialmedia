import React, { useEffect, useReducer, useState } from 'react'
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
import { reducer } from '../utils/reducer'


const App = () => {
  // useReducer handles all the states in the same object
  const initialState = {
    messageList: [],
    loggedInUser: ""
  }
  // useReducer takes two arguments
  // reducer - a function that is executed when
  // state
  // it returns an array with two elements
  // store - actually the name for the state
  // dispatch - function that triggers the reducer function, dispatch's argument is action (from reducer)
  const [store, dispatch] = useReducer(reducer, initialState)
  const {messageList, loggedInUser} = store

  //const [loggedInUser, setLoggedInUser] = useState("")
  //const [messageList, setMessageList] = useState([])

  const activateUser = (username) => {
    //setLoggedInUser(username)
    dispatch({
      type: "setLoggedInUser",
      data: username
    })
  }

  const addMessage = (text) => {
    const message = {
      id: messageList[0].id + 1, //nextId(messageList),
      text: text,
      user: loggedInUser
    }
    // setMessageList(
    //   (messageList) => [...messageList, message]
    // )
    dispatch({
      type: "addMessage",
      data: message
    })
  }
  // function nextId(data) {
  //   if (data.length < 1) {
  //       return 1
  //   } else {
  //       let x = []
  //       data.forEach((element) => {
  //           x.push(element.id)
  //       })
  //       return (Math.max(...x)+1)
  //   }
  // }

  useEffect(
    ()=>{
      //fetch
      //setMessageList(initialMessageList)
      dispatch({
        type: "setMessageList",
        data: initialMessageList
      })
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