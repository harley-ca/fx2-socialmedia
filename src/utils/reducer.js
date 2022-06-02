// Alternative to useState, more complex, powerful and flexible
// useState is a syntactic sugar of useRecucer that simplifies
// kind of Redux

// reducer function recieves 2 params
// recieves current state and action we want to implement
// based on the actionm the function will update the state in one way or another
// action is an object with 2 keys, type and data.

export const reducer = (state, action) => {
    console.log(state)
    console.log(action)
}