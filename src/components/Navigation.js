import { Link } from "react-router-dom"

const Navigation = ({loggedInUser, activateUser}) => {

    const logout = (e) => {
        e.preventDefault()
        activateUser("")
    }

    return (
        <nav>
            <Link to="/messages">Home</Link>
            <Link to="/about">About</Link>
            { loggedInUser ? 
                <>
                    <Link to="/messages/new">New</Link>
                    {loggedInUser}
                    <Link to="/messages" onClick={logout}>Logout</Link>
                </>
                :
                <>
                    Guest
                    <Link to="/login">Login</Link>
                    <Link to="/login">Sign up</Link>
                </>
            }
        </nav>
    )
}

export default Navigation