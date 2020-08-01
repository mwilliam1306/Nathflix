import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Assets/logo.png';
import Button from '../Button';
import useScrollHandler from '../Utils/UseScroll';

const Nav = styled.nav`
  background: ${({ scrollDown }) => `${scrollDown ? 'transparent' : 'var(--black)'}`};
  transition: 0.15s;
`;

function Menu() {
  // const scrollActive = window.scrollY < 96;
  // const [scrollDirection, setScrollDirection] = useState(null);
  const scrollDown = useScrollHandler();

  return (
    <Nav className="Menu" scrollDown={scrollDown}>
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </Nav>
  );
}

export default Menu;
