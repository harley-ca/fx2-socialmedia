const Message = ({message}) => {
    return (
        <>
            <strong>{message.user} says</strong>
            <p>"{message.text}"</p>
        </>
    )
}

export default Message