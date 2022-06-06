import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"

const MessageForm = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, messageList} = store

    const navigate = useNavigate()

    const initialFormData = {
        text: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.text === "") {
            console.log("Can't post an empty message")
        } else {
            addMessage(formData.text)
            console.log(formData)
            navigate("/messages")
        }

    }
    const clearMessage = () => {
        setFormData(initialFormData)
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea type="text" name="text" id="text" value={formData.text} onChange={handleFormData} placeholder="Let people know what you're thinking.."/>
                </div>
                <input type="submit" value="post" />
                <button onClick={clearMessage}>Clear</button>
            </form>
        </>
    )
}

export default MessageForm