import React from 'react'

import "./log_in.styles.css"

const LogIn = () => {
    
    const initialState = {
        username: '',
        password: ''
    }
    
    const [login, setLogin] = React.useState(initialState)
    
    // pull username and password out
    const {username, password} = login
    
    const handleChange = e => {
        e.preventDefault()
        setLogin({...login, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        console.log('clicked handlesubmit')
        e.preventDefault()
        // connect to backend
        setLogin({
            username: '',
            password: ''
        })
        console.log(login)
    }
        
    return (
        <div className="form-container">
            <form className="login" onSubmit={handleSubmit}>
                <div className="username">
                    <label className="form-label">Username</label>
                    <input 
                        name="username"
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={handleChange}
                        placeholder="username"
                    />
                </div>
                <div className="password">
                    <label className="form-label">Password</label>
                    <input 
                        name="password"
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="password"
                    />
                </div>
                <div className="button">
                    <input
                        className="form-button"
                        value="Log In"
                        type="submit"
                    />
                </div>
            </form>
            
        </div>
    )
}

export default LogIn

