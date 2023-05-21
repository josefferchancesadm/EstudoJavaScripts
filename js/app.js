import { posts } from "./database.js";
import { postClass } from "./post.js";

// const btn = document.getElementById("add");
// // console.log(btn)

// btn.addEventListener("click", () => {
//   addPost();
// });

//Metodos para adicionar um novo post
function addPost() {
  const postNew = new postClass();
  postNew.Titulo = "Post 01";
  postNew.Descricao = "New Post 01";
  postNew.Data = "01/06/2024";
  postNew.texto = "Vamos adicinor um novo post 01";
  // console.log(postNew);
  posts.push(postNew);
  listarPosts();
}

function deletePost(event) {
  console.log(event);
}

function listarPosts() {
  // Cria o template dos posts Dinamicos
  let templatePost = "";
  posts.forEach((post) => {
    templatePost += `
  
      <div class="post">
          <h2>${post.Titulo}</h2>
          <h6>Descrição: ${post.Descricao}</h6>
          <h6>Data: ${post.Data}</h6>
          <p>${post.texto}</p>
          <div>
            <button class="btn btnAdd">Adicionar</button>
            <button class="btnDel">Excluir</button>
          </div>
      </div>
      
      `;
  });

  //Coloca a tag no seletor posts
  const post = document.querySelector(".posts");
  post.innerHTML = templatePost;

  //Carrega os seletores dos botões de adicionar post e coloca os eventos onclick addPost() nos botões
  const btns = document.querySelectorAll(".btnAdd");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      addPost();
    });
  });

  //Carrega os seletores dos botões de excluir post e coloca os eventos onclick addPost() nos botões
  const btnsDel = document.querySelectorAll(".btnDel");
  btnsDel.forEach((btnDel) => {
    btnDel.addEventListener("click", (event) => {
      deletePost(event);
    });
  });
}

// lista todos os posts
listarPosts();
