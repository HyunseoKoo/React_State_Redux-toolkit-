import styled from "styled-components";
import Left1 from "./Components/left";
import Right1 from "./Components/right";

function App() {
  return (
    <S.Container>
        <h1>Root :</h1>
        <S.Grid>
          <Left1/>
          <Right1/>
        </S.Grid>
    </S.Container>
  );
}

export default App;

const Container = styled.div`
  border: 5px solid red;
  margin: 10px;

    & > div > div {
    border: 5px solid red;
    margin: 10px;

    & > div {
    border: 5px solid red;
    margin: 10px;

    & > div {
    border: 5px solid red;
    margin: 10px;
  }
  }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const S = {
  Container,
  Grid
}