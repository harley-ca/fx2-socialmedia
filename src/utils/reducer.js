// Alternative to useState, more complex, powerful and flexible
// useState is a syntactic sugar of useRecucer that simplifies
// kind of Redux

// reducer function recieves 2 params
// recieves current state and action we want to implement
// based on the actionm the function will update the state in one way or another
// action is an object with 2 keys, type and data.
// type key determines what is the action we are taking
// data ket contains the data necessary to update the state

// the function returns the updated state

export const reducer = (state, action) => {
    console.log(state)
    console.log(action)

    switch(action.type){
        case "setMessageList": {
            // populate the messageList array using the initial values
            return {
                ...state,
                messageList: action.data
            }
        }
        case "addMessage": {
            // add the new message to the messageList and return
            // can access messageList through the current state
            return {
                ...state,
                messageList: [action.data, ...state.messageList]
            }
        }
        case "setLoggedInUser": {
            // set the logged in user value
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        default: return state
    }
}