import { posts } from "./database.js";
import { postClass } from "./post.js";

const btn = document.getElementById("add");
// console.log(btn)

btn.addEventListener("click", () => {
  addPost();
});

function addPost() {
  const postNew = new postClass();
  postNew.Titulo = "Post 01";
  postNew.Descricao = "New Post 01";
  postNew.Data = "01/06/2024";
  postNew.texto = "Vamos adicinor um novo post 01";
  console.log(postNew);
  posts.push(postNew);
  listarPosts();
}


function listarPosts() {
  let templatePost = "";
  posts.forEach((post) => {
    templatePost += `
  
      <div class="post">
          <h2>${post.Titulo}</h2>
          <h6>Descrição: ${post.Descricao}</h6>
          <h6>Data: ${post.Data}</h6>
          <p>${post.texto}</p>
          <button class="btn">Leia mais</button>
      </div>
      
      `;
  });

  const post = document.querySelector(".posts");

  post.innerHTML = templatePost;
}

listarPosts();

// console.log(post)
