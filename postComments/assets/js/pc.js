async function getData(postId) {
  let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
  let { comments } = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());

  const postContentItem = document.querySelector('.postContentItem');
  postContentItem.innerHTML += `<div class="postContent">
        <h2>${post.title}</h2> 
        <p>${post.body}</p>
        <ul id="list" class="list">${comments.map(x => `<li>${x.user.fullName} said : ${x.body}</li>`).join('')}</ul>
       </div>`;

}

for (let i = 1; i <= 30; i++) {
  getData(i);
}