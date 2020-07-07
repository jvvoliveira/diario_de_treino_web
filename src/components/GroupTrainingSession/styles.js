import styled from "styled-components";

export const ButtonAddTraining = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    height: 44px;
    font-size: 16px;

    background: transparent;
    border: 1px solid #ee4540;
    border-radius: 4px;
    color: #eee;
    transition: color 0.2s;
    font-weight: bold;

    &:hover{
      color: #ee4540;
    }
`;

export const GroupTrainingList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  width: 90%;
  flex-wrap: wrap;

  li{
    margin: 10px;
    padding: 10px;
    width: 240px;
  }
  li.actived{
    border: 1px solid #ee4540;
  }
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  color: #292929;
  padding: 8px 16px;
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