import { useState } from "react"

const LoginForm = () => {
    const initialFormData = {
        user: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit clicked")
        console.log(formData)
        setFormData(initialFormData)
    }

    const handleFormData = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="user" id="user" value={formData.user} onChange={handleFormData} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData} />
                </div>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default LoginForm