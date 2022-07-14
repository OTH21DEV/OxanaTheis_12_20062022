import styled from "styled-components";
import icon_zen from "../../assets/icon_zen.svg";
import icon_swim from "../../assets/icon_swim.svg";
import icon_cycle from "../../assets/icon_cycle.svg";
import icon_fit from "../../assets/icon_fit.svg";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #020203;
  width: 70px;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 375px) and (max-width: 600px) {
    display: none;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 42px;
  padding-bottom: 10px;
  cursor: pointer;
`;

const Copyright = styled.p`
  color: white;
  transform: rotate(270deg);
  width: 60vh;
  font-size: 0.7em;
`;

/**
 * Display sidebar
 * @returns {JSX}
 */

function SideBar() {
  return (
    <SideBarContainer>
      <ImgContainer>
        <Image src={icon_zen} alt="" />
        <Image src={icon_swim} alt="" />
        <Image src={icon_cycle} alt="" />
        <Image src={icon_fit} alt="" />
      </ImgContainer>
      <Copyright>Copiryght, SportSee 2020</Copyright>
    </SideBarContainer>
  );
}

export default SideBar;
