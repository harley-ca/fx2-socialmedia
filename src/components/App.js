import React, { useEffect, useReducer } from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import MessageDetail from './MessageDetail'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext'


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
  const {loggedInUser} = store

  //const [loggedInUser, setLoggedInUser] = useState("")
  //const [messageList, setMessageList] = useState([])
  // const activateUser = (username) => {
  //   //setLoggedInUser(username)
  //   dispatch({
  //       type: "setLoggedInUser",
  //       data: username
  //   })
  // }

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
      {/* Wrap all the componenets that use the global state like loggedInUser or messageList in the state context provider */}
      <StateContext.Provider value={{store, dispatch}}>
        {/* Wrap all the componenets involed in the app routing */}
        <Router>
          <Navigation />
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="/" element={<Navigate to="messages" replace/>} />
            <Route path="messages">
              <Route index element={<Messages />} />
              <Route path="new" element={
                loggedInUser?
                  <MessageForm />
                :
                  <Navigate to="/login" />
              } />
              <Route path=":messageId" element={<MessageDetail />} />
            </Route>
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<NotFound />} /> {/* for everything else, there's NotFound */}
          </Routes>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App