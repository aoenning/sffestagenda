import { Route, BrowserRouter, Routes as Rotas } from "react-router-dom";

// import Configuracao from "./../pages/Configuracao";
import Home from "./../pages/home";
import Login from "./../pages/login";

const Routes = () => {
  return (
    <Rotas>
      <Route path="/" exact element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/Produto" element={<Produto />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Relatorio" element={<Relatorio />} /> */}
    </Rotas>
  );
};
export default Routes;
