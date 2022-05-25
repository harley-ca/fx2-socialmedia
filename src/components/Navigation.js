const Navigation = ({loggedInUser, activateUser}) => {

    const logout = (e) => {
        e.preventDefault()
        activateUser("")
    }

    return (
        <nav>
            <a href="/">Home</a>
            <a href="/">Messages</a>
            { loggedInUser ? 
                <>
                    {loggedInUser}
                    <a href="/" onClick={logout}>Logout</a>
                </>
                :
                <>
                    Guest
                    <a href="/">Login</a>
                    <a href="/">Sign up</a>
                </>
            }
        </nav>
    )
}

export default Navigation