import caloris from "../../assets/calories-icon.svg";
import carbs from "../../assets/carbs-icon.svg";
import fat from "../../assets/fat-icon.svg";
import protein from "../../assets/protein-icon.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  img {
    padding-right: 20px;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
  }
  h4 {
    margin: 0;
    font-size: 0.7em;
    font-weight: 500;
    color: #74798c;
  }
`;

function NutritionData(props) {
  const typeOfNutritionData = ["Calories", "Proteines", "Glucides", "Lipides"];
  const icons = [caloris, protein, carbs, fat];
  return (
    <div>
      {typeOfNutritionData.map((element, index) => (
        <Wrapper>
          <img src={icons[index]} alt=""></img>
          <Titles>
            <h3>
              {Object.values(props.value)[index]}
              {index === 0 ? "kCal" : "g"}
            </h3>
            <h4>{element}</h4>
          </Titles>
        </Wrapper>
      ))}
    </div>
  );
}
export default NutritionData;
