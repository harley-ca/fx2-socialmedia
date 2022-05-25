const Message = ({message}) => {
    return (
        <>
            <p>{message.text}</p>
            <strong>{message.user}</strong>
        </>
    )
}

export default Message