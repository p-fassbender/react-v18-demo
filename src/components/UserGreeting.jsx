import { useState } from "react"

export const UserGreeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn ? 'Out' : 'In'}</button>
            Welcome {isLoggedIn ? 'User' : 'Guest'}
        </>
    )
}