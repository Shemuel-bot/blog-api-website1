import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import style from '../styles/Home.module.css'
import plus from '../assets/plus.png'
import user from '../assets/user.png'
import BlogBtn from './BlogBtn';

function Home(){
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:3000/api/all-posts', {
            mode: 'cors',
            headers: {'authorization': localStorage.getItem('token'),}
        })
            .then(async res=>{
                if(res.status === 403){
                    navigate('/log-in');
                    return
                }
                const a = await res.json();
                for (let i = 0; i < a.posts.length; i++) {
                   BlogBtn(a.posts[i].title, a.posts[i].user, a.posts[i].timeStamp, a.posts[i].content);
                }
               
            })
    }, [])

    return(
        <>
        
            <h1 className={style.h1}>Blogs</h1>
            <div className={style.body} id='body'>
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

            <div  className={style.blogdiv}>
                <h3 id='blog-title'></h3>
                <p id='blog-content'></p>
            </div>
            </div>
            
        </>
    );
}

export default Home