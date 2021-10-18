import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { QuemSomos } from "./pages/QuemSomos";
import { Poltronas } from "./pages/Poltronas";
import { Banquetas } from "./pages/Banquetas";
import { Cadeiras } from "./pages/Cadeiras";
import { Contato } from "./pages/Contato";
import { Entrar } from "./pages/Entrar";
import { Mesas } from "./pages/Mesas";
import { Home } from "./pages/Home";
import { Whatsapp } from "./components/whatsapp/whatsapp";
function App() {
  return (
    <Router>
      <Navbar />
      <Whatsapp />
      <Switch>
        <Route path="/poltronas" component={Poltronas} />
        <Route path="/banquetas" component={Banquetas} />
        <Route path="/quemSomos" component={QuemSomos} />
        <Route path="/cadeiras" component={Cadeiras} />
        <Route path="/contato" component={Contato} />
        <Route path="/sign-in" component={Entrar} />
        <Route path="/mesas" component={Mesas} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
