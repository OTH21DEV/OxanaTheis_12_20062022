import { Link } from "react-router-dom";
import error from "../../assets/error.svg";
import styled from "styled-components";

const Image = styled.img`
display:flex;
  width: 80%;
 
`;
const Wrapper = styled.div`
  display: flex;
  
`;
function Error() {
  return (
    <Wrapper>
      <Image src={error} alt=""></Image>
      <div>
        <p>Oups! La page que vous demandez n'existe pas.</p>

        <Link to="/" className="title-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Wrapper>
  );
}

export default Error;
