import { useEffect } from 'react';
import style from '../styles/Blog.module.css'


const handleSubmit = () => {
    fetch('http://localhost:3000/api/posts-comments', {
        method: 'get',
        headers:{'authorization': localStorage.getItem('token')},
        body: JSON.stringify({
            content: document.getElementById('content').value,
        }),
    })
    .catch(err=>{console.log(err)})
}

function Blog(){

    useEffect(()=>{
        fetch('http://localhost:3000/api/posts-comments', {
            method: 'get',
            headers:{'authorization': localStorage.getItem('token')},
        })
        .then(async res=>{
            const a = await res.json();
            console.log(a);
        })
    }, [])

    return(
        <>
        <div className={style.body}>
         <h1>{localStorage.getItem('title')}</h1>
         <p>author: {localStorage.getItem('author')}</p>
         <div className={style.content}>
            <p>{localStorage.getItem('content')}</p>
        
         </div>
         
         <div className={style.commentbox}>
         <textarea name="" placeholder='Comment here' id="content" className={style.textarea}></textarea>
         <button className={style.btn}>Post</button>
         </div>

         </div>
         
        </>
    );
}
export default Blog;