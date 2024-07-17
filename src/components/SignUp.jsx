//import { useState, useEffect } from 'react';
import style from '../styles/Log_In.module.css';
import { Link } from 'react-router-dom';


const handleSubmit = () => {
    fetch('https://blog-api.adaptable.app/api/sign-up', {
         method: "put",
         headers: {'Content-Type':'application/json'},        
         body: JSON.stringify({ 
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            userName: document.getElementById('userName').value,
            password: document.getElementById('password').value,
        }),
        
        })
        .catch(err=>{console.log(err)})
}

function SignUp(){

    return(
        <>
        
        <form onSubmit={()=>handleSubmit()} className={style.form}>

            <h2>Sign Up</h2>

            <div className={style.fieldset}>
                <label htmlFor="">First Name</label>
                <input type="text" className={style.input} placeholder='first name...' id='firstName'/>
            </div>

            <div className={style.fieldset}>
                <label htmlFor="">Last Name</label>
                <input type="text" className={style.input} placeholder='last name...' id='lastName'/>
            </div>

            <div className={style.fieldset}>
                <label htmlFor="">User Name</label>
                <input type="text" className={style.input} placeholder='user name...' id='userName'/>
            </div>

            <div className={style.fieldset}>
                <label htmlFor="">Password</label>
                <input type="password" className={style.input} placeholder='password...' id='password'/>
            </div>
            <Link to='/log-in'>
            <button className={style.btn} onClick={()=>handleSubmit()}>Sign Up</button>
            </Link>
        </form>
        
        </>
    );
}

export default SignUp