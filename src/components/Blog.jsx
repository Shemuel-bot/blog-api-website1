import { useEffect, useState } from 'react';
import style from '../styles/Blog.module.css';



const handleSubmit = () => {
    fetch('https://blog-api.adaptable.app/api/post-comment', {
        method: 'post',
        headers:{'Content-Type':'application/json', 'authorization': `Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify({
            content: document.getElementById('content').value,
            id: localStorage.getItem('postId'),
        }),
    })
    .then(async res=>{
        const a = await res.json();
        console.log(a)
        window.location.reload();
    })
    .catch(err=>{console.log(err)})
}

function Blog(){
    const [array, setArray] = useState([]);
    const comments = [];

    useEffect(()=>{
        fetch('https://blog-api.adaptable.app/api/posts-comments', {
            method: 'post',
            headers:{'Content-Type':'application/json', 'authorization': localStorage.getItem('token')},
            body: JSON.stringify({
                id: localStorage.getItem('postId'),
            })
        })
        .then(async res=>{
            const a = await res.json();
            setArray([a])
        })
        
    }, [])

    if(array[0] != null){
       
        if(typeof array[0] ===  typeof []){
            
        for (let i = 0; i < array[0].comments.length; i++) {
            
            comments.push(<>
            <div key={i} className={style.comments}>
                <h3>@{array[0].comments[i].user}</h3>
                <p>{array[0].comments[i].content}</p>
            </div>
            </>);
        }
        }else{
            
            comments.push(<>
                <div key={0} className={style.comments}>
                    <h3>@{array[0].comments.user}</h3>
                    <p>{array[0].comments.content}</p>
                </div>
                </>); 
        }
    }
   
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
         <button className={style.btn} onClick={()=>{
            handleSubmit();
            }}>Post</button>
         </div>
         <h2>Comments</h2>
            {comments}
         </div>
         
        </>
    );
}
export default Blog;