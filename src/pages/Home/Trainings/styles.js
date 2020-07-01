import styled from "styled-components";

export const TrainingList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  width: 90%;
  flex-wrap: wrap;

  li{
    margin: 10px;
  }
`;

export const TrainingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  color: #292929;
  padding: 16px 32px;
  transition: box-shadow 0.3s;

  &:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px 10px 2px rgba(239, 69, 64, 0.5);
    cursor: pointer;
  }

  h3{
    margin-bottom: 20px;
  }

  p{
    margin: 10px 0;
  }

`;