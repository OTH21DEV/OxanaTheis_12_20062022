import caloris from "../../assets/calories-icon.svg";
import carbs from "../../assets/carbs-icon.svg";
import fat from "../../assets/fat-icon.svg";
import protein from "../../assets/protein-icon.svg";
import styled from "styled-components";
import propTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  background: #fbfbfb;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);

  img {
    padding-right: 20px;
  }

  @media all and (min-width: 375px) and (max-width: 484px) {
    width: 100%;
  }

  @media all and (min-width: 484px) and (max-width: 1300px) {
    margin-right: 10px;
    width: 35%;
  }
`;

const Container = styled.div`
  width: 25%;

  @media all and (min-width: 375px) and (max-width: 1300px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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


/**
 * Display nutrition data of user
 * @param {Object} props
 * @param {Object} props.value
 * @param {Number} props.value.caloriCount
 * @param {Number} props.value.carbohydrateCount
 * @param {Number} props.value.lipidCount
 * @param {Number} props.value.proteineCount
 * @returns {JSX}
 */
function NutritionData(props) {
 
  const typeOfNutritionData = ["Calories", "Proteines", "Glucides", "Lipides"];
  const icons = [caloris, protein, carbs, fat];
  return (
    <Container>
      {typeOfNutritionData.map((element, index) => (
        <Wrapper key={element.toString()}>
          <img src={icons[index]} alt=""></img>
          <Titles>
            <h3>
              {Object.values(props.value)[index] }
              {index === 0 ? "kCal" : "g"}
            </h3>
            <h4 >{element}</h4>
          </Titles>
        </Wrapper>
      ))}
    </Container>
  );
}

NutritionData.propTypes = {
 
  values: propTypes.shape({
    caloriCount: propTypes.number.isRequired,
    carbohydrateCount: propTypes.number.isRequired,
    lipidCount: propTypes.number.isRequired,
    proteineCount: propTypes.number.isRequired,
  }),
};

export default NutritionData;
