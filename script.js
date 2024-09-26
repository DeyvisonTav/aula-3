fetch("usuarios.json")
  .then((response) => response.json())
  .then((data) => {
    const listaUsuarios = document.getElementById("lista-usuarios");

    data.usuarios.forEach((usuario) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${usuario.nome} (${usuario.email})`;
      listaUsuarios.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
