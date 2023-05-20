import { posts } from "./database.js";

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

const post = document.querySelector(".posts")

post.innerHTML = templatePost;

console.log(post)