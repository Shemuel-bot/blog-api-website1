import { useEffect } from 'react';
import style from '../styles/Home.module.css'
import plus from '../assets/plus.png'
import user from '../assets/user.png'
import BlogBtn from './BlogBtn';

function Home(){

    useEffect(()=>{
        fetch('http://localhost:3000/api/all-posts', {mode: 'cors'})
            .then(async res=>{
                const a = await res.json();
                console.log(a)
                for (let i = 0; i < a.posts.length; i++) {
                   BlogBtn(a.posts[i].title, a.posts[i].user, a.posts[i].timeStamp);
                }
               
            })
    }, [])

    return(
        <>
            <h1 className={style.h1}>Blogs</h1>
            <div className={style.body}>
                <div className={style.btnsdiv}>
            <button className={style.newpostbtn}>
                <img src={user} alt="" className={style.userimg}/>
            </button>
            <button className={style.newpostbtn}>
                <img src={plus} alt="" className={style.newpostimg}/>
            </button>
            </div>
            <div className={style.blogdiv} id='blogdiv'>
                
            </div>
            </div>
        </>
    );
}

export default Home