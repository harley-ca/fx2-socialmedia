import { Link } from 'react-router-dom'

const Message = ({message}) => {
    return (
        <>
            
            <Link to={`${message.id}`}>View detail</Link> - <strong>{message.user} says</strong> 
            <p>"{message.text}"</p>
        </>
    )
}

export default Message