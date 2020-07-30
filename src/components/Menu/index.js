import React from "react";
import "./Menu.css";
import Logo from "../../Assets/logo.png";
import Button from "../Button";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
