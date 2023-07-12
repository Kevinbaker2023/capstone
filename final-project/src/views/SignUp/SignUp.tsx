import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css'
import NavBar from '../../components/NavBar/NavBar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const SignUp = () => {
    useEffect(() => {
        document.title = 'Sign Up Page'
    }, [])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                navigate('/signin')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
            })
    }
    return (
        <>
        <NavBar />
        <div className='signup'>
        <form className='create-form' onSubmit={handleSubmit}>
          <div className='signin-icon'>
            <FitnessCenterIcon sx={{ fontSize: 60}}/>
          </div>
          <h2 className='signup-title'>SignUp</h2>
          <input className='first-name' name='first-name' type='name' placeholder='Enter First Name' />
          <input className='last-name' name='last-name' type='name' placeholder='Enter Last Name' />
          <input className='email' name='email' type='email' placeholder='Enter Email'
            onChange={(event) => setEmail(event.target.value)} />
          <input className='password' name='password' type='password' placeholder='Enter Password'
            onChange={(event) => setPassword(event.target.value)} />
          <div>
            <button className='btn btn-info rounded-pill d-block mx-auto' id='create-btn' type='submit'>Create Account</button>
          </div>
          <Link to='/signin' className='login-link'>Already Have an Account?</Link>
        </form>
      </div>
        </>
  )
}

export default SignUp