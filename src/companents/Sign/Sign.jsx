import React, { useRef } from 'react'
import './Sign.scss'
import { compileString } from 'sass';
import { Link, NavLink, useNavigate } from 'react-router-dom';
function Sign() {
  const navigate=useNavigate();
  const emailValue=useRef('');
  const passwordValue=useRef('');
  let email="hindolbekkarimov67@gmail.com";
  let password="hindolbek004";
  console.log();
  function Check_fn() {
    if(emailValue.current.value===email && passwordValue.current.value===password){
      emailValue.current.className='inp1';
      passwordValue.current.className='inp2';
      navigate('/hero');
    }else if(emailValue.current.value!==email && passwordValue.current.value===password){
     emailValue.current.focus();
     emailValue.current.className='inp1 red'
     passwordValue.current.className='inp2';
     navigate('/')
    }else if(emailValue.current.value===email && passwordValue.current.value!==password){
      passwordValue.current.focus();
      passwordValue.current.className='inp2 red'
      emailValue.current.className='inp1';
      navigate('/')
    }else{
      console.log('email va password xato');
      emailValue.current.className='inp1 red';
      passwordValue.current.className='inp2 red';
      navigate('/')
    }
  }
    
  return (
      <div className="Sign">
      <div className="Sign__inner">
        <h1>Sign in</h1>
        <ul>
         <input ref={emailValue} className='inp1' type="text" placeholder='  @ Email address' />
         <input ref={passwordValue} className='inp2' type="text" placeholder='   Password' />
        </ul>
        <div className='nima'>
          <span></span>
          <p>Remember me</p>
        </div>
        <button onClick={Check_fn} className='btn1'>Sign in</button>
        <button className='btn2'><i class="bi bi-google"></i> Sign Up with Google</button>
        <a href="#">Don’t have an account? Sign Up </a>
      </div>
    </div>
  )
}
export default Sign