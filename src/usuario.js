import React from "react";
import { Link } from "react-router-dom";
import "./usuario.css";

export default function Usuario() {

  function cadastrarUsuario(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log(data)

    alert("Usuario - " + data.nome);
  }

  return (
    <div>
      <h1>Usuário</h1>
      <form class="formulario" onSubmit={cadastrarUsuario}>

        <label>Nome:<input type="text" name="nome" placeholder="nome do usuario"/></label>
        <input class="submit" type="submit" value="Enviar formulário!" />

      </form>

      <h1></h1>
      <Link to="/">retornar a página inicial</Link>
    </div>
  );
}

