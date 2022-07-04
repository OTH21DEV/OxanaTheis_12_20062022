import { Link } from "react-router-dom";
import error from "../../assets/error.svg";
import styled from "styled-components";

const Image = styled.img`
  display: flex;
  width: 50%;
  margin-top: 60px;

  @media all and (min-width: 375px) and (max-width: 600px) {
    width: 70%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media all and (min-width: 375px) and (max-width: 890px) {
    flex-direction: column-reverse;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 
   margin-left:40px;


  

    @media all and (min-width: 375px) and (max-width: 890px) {
      margin-left: 20px;
    }

    p {
      font-size: 1.7em;
      color:#282D30;

    }
    a {
      text-decoration: none;
      background: #ff0101;
      width: 110px;
      height: 40px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;


      @media all and (min-width: 375px) and (max-width: 890px) {
        position:absolute;
        bottom:40px;
        align-self:center;
      }

    }
   
  
`;
function Error() {
  return (
    <Wrapper>
      <Image src={error} alt=""></Image>
      <div>
        <p>
          {" "}
          {<span style={{ color: "#FF0101", fontWeight: "bold", fontSize: "1.6em" }}>Oups!</span>}
          <br /> <br />
          La page que vous demandez n'existe pas.
        </p>

        <Link to="/" className="title-link">
          ACCUEIL
        </Link>
      </div>
    </Wrapper>
  );
}

export default Error;
