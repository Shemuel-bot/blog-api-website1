import style from '../styles/Log_In.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function Login(){
    const navigate = useNavigate();

    const handleSubmit = async () => {
        
        fetch('http://localhost:3000/api/log-in', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                userName: document.getElementById('userName').value,
                password: document.getElementById('password').value,
            }),
        })
        .then(async res=>{    
            const a = await res.json();
            if(a.message !== null){
                localStorage.setItem('token', a.message);
                navigate('/home')
            }
        })
        
    }

    return(
        <>
        
        <form className={style.form}>

            <h2>Log In</h2>

            <div className={style.fieldset}>
                <label htmlFor="">User Name</label>
                <input type="text" className={style.input} placeholder='user name...' id='userName'/>
            </div>

            <div className={style.fieldset}>
                <label htmlFor="">Password</label>
                <input type="password" className={style.input} placeholder='password...' id='password'/>
            </div>
            <Link to="/log-in" id='link'>
            <button className={style.btn} onClick={() => {handleSubmit();}} >Login</button>
            </Link>

            <Link to='/sign-up' className={style.link}>Sign Up</Link>
        </form>

        </>
    );
}

export default Login