//Importar las paginas y templates
import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

//Rutas que vamos a manejar en la APP
const routes = {
  "/": Home,
  "/:id": Character, //El id es un valor dinamico
  "/Contact": "Contact",
};

const router = async () => {
  //Elementos donde se hará el render
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  //Enviar el template de header hacia el HTML
  header.innerHTML = await Header();
};

export default router;
