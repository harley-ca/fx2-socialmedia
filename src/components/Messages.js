import Message from './Message'

const Messages = ({messageList}) => {
    return (
        <>
            {messageList.map(message =>
                <Message message={message} />
            )}
        </>
    )
}

export default Messages