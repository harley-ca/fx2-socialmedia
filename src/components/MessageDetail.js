import { useParams } from "react-router-dom"


const MessageDetail = ({messageList}) => {
    const params = useParams()
    console.log(params)
    const getMessage = (id) => {
        return messageList.find(m => m.id === parseInt(id))
    }
    const message = getMessage(params.messageId)
    return (
        <>
            { message ?
                <>
                    <strong>{message.user} says</strong>
                    <p>"{message.text}"</p>
                    <p>This is a message in detail!</p>
                </>
                :
                <><p>This message doesn't seem to exist</p></>
            }
        </>
    )
}

export default MessageDetail