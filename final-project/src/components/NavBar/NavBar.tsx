import { Link, useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebase"
import './NavBar.css'
import { useEffect, useState } from "react"


interface CurrentUser {
    id: string,
    email: string,
}

const NavBar = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState<CurrentUser | null>(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const email = user.email
                const id = user.uid
                if (typeof email === 'string' && typeof id === 'string') {
                    setUser({ id: id, email: email})
                }
            }
        })
    }, [])

    const handleSignout = () => {
        signOut(auth).then(() => {
            setUser(null)
            navigate('/signin')
        }) .catch ((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <ul className="nav justify-content-center navbar">
                {user ?
                    <>
                        <li className="text-light" id='title'>MoFitness</li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/exercise">Exercise Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/plan">Workout Plan</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/schedule">Book With Me</Link>
                        </li>
                        <li>
                        <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
                        </li>
                    </>
                    :
                    <>
                        <li className="text-light" id='title'>MoFitness</li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/signup">Sign Up/Sign In</Link>
                        </li>
                    </>
                }
            </ul>
        </>
    )
}

export default NavBar