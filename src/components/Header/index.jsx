import logo from "../../assets/logo.svg";
import styled from "styled-components";


const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 30px;
  background-color: #020203;
  height:60px;
`;

const NavLogo = styled.img`
  width: 110px;
  padding-right: ;
`;

const NavLink = styled.a`
  color: white;
  cursor:pointer;
`;
function Header() {
  return (
    <NavContainer>
      <NavLogo src={logo} alt=""></NavLogo>
      <NavLink>Accueil</NavLink>
      <NavLink>Profil</NavLink>
      <NavLink>Réglage</NavLink>
      <NavLink>Communauté</NavLink>
    </NavContainer>
  );
}

export default Header;
