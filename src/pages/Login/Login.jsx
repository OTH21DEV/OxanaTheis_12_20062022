import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  background: linear-gradient(to bottom right, #161616, #f2f2f2);
  height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 310px;
  height: 370px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  overflow: hidden;
`;

const Content = styled.div`
  margin: 0px 20px;
  height: 100%;
`;

const Form = styled.form`
  height: 100%;

  input {
    width: 100%;
    height: 40px;
    background: transparent;
    outline: none;
    border: 0px;
    position: relative;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleSignIn = styled.h1`
  font-size: 1.3em;
  padding-top: 35px;
  color: white;
  font-weight: 500;
`;

const TitleSignUp = styled.h1`
  font-size: 1.3em;
  padding-top: 35px;
  color: white;
  font-weight: 500;
  opacity: 0.8;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  border: none;
  border-top: 0.4px solid #ff0101;
  color: white;
  transition: 0.6s;
`;

const Submit = styled.button`
  background-color: #ff0101;
  height: 40px;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  padding-top: 5px;
  margin-top: 40px;
  cursor: pointer;
`;

const ForgotPass = styled.a`
  text-align: center;
  color: #ff0101;
  text-decoration: none;
  margin-top: 20px;
`;

/**
 * Display login page
 * @returns {JSX}
 */
function Login() {
  const [inputValue, setInputValue] = useState('12');
  let navigate = useNavigate();

  /**
   * Change page - load dashboardpage if id exist
   */
  const routeChange = () => {
  navigate(`/user/${inputValue}`);

 //   navigate(`https://sportsee-p12.herokuapp.com/user/${inputValue}`);
  };

  return (
    <section>
      <Wrapper>
        <img src={logo} alt=""></img>
        <Container>
          <CardWrapper>
            <Content>
              <Form>
                <TitleWrapper>
                  <TitleSignIn>SIGN IN</TitleSignIn>
                  <TitleSignUp>SIGN UP</TitleSignUp>
                </TitleWrapper>

                <InputBox>
                  <div className="input">
                    <input value={inputValue} required onChange={(e) => setInputValue(e.target.value)}></input>

                    <Label>UserID</Label>
                  </div>

                  <input type="password" required></input>
                  <Label>Password</Label>

                  <Submit value="Login" onClick={routeChange}>
                    SIGN IN
                  </Submit>

                  <ForgotPass href="#">Forgot password?</ForgotPass>
                </InputBox>
              </Form>
            </Content>
          </CardWrapper>
        </Container>
      </Wrapper>
    </section>
  );
}
export default Login;
