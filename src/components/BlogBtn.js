
function BlogBtn(title, user, timeStamp, content){
    const btn = document.createElement('button')
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    h3.textContent = title;
    p1.textContent = user;
    p2.textContent = timeStamp;

    btn.append(h3)
    btn.append(p1);
    btn.append(p2);
    btn.onclick = ()=>{
        document.getElementById('blog-title').textContent = title;
        document.getElementById('blog-content').textContent = content
    };
    document.getElementById('blogdiv').append(btn);
}

export default BlogBtn