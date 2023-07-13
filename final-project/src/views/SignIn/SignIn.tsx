import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import NavBar from '../../components/NavBar/NavBar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const SignIn = () => {
  useEffect(() => {
    document.title = 'Sign In Page'
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <>
      <NavBar />
      <div className='signin'>
        <form className='signin-form' onSubmit={handleSubmit}>
          <div className='signin-icon'>
            <FitnessCenterIcon sx={{ fontSize: 60}}/>
          </div>
          <h2 className='signin-title'>Sign In</h2>
          <input className='email-login' name='email' type='email' placeholder='Enter Email'
            onChange={(event) => setEmail(event.target.value)} />
          <input className='password-login' name='password' type='password' placeholder='Enter Password'
            onChange={(event) => setPassword(event.target.value)} />
          <div>
            <button className='btn rounded-pill d-block mx-auto' id='login-btn' type='submit'>Sign In</button>
          </div>
          <Link to='/signup' className='login-link'>Need an Account?</Link>
        </form>
      </div>
    </>
  )
}

export default SignIn