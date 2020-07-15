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

export const ButtonArea = styled.div`
  width: 80%;
  margin: auto;
  padding: 0 10px;
`;

export const GroupTrainingList = styled.ul`
  display: flex;
  margin: 10px auto;
  width: 80%;
  flex-wrap: wrap;
  max-height: 400px;
  overflow-y: auto;

  li{
    padding: 10px;
    width: 240px;
  }
  li.actived{
    border: 1px solid #ee4540;
  }
`;

export const GroupContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  color: #292929;
  padding: 8px 16px;
  height: 100%;
  transition: box-shadow 0.3s;

  &:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px 10px 2px rgba(239, 69, 64, 0.5);
  }

  h3{
    margin-bottom: 10px;
  }

  p{
    margin: 20px 0;
  }

`;

export const GroupInfo = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

export const FooterGroup = styled.div`
  position: absolute;
  bottom: 2px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-top: 1px solid #292929;

  button{
    border: none;
    &:hover{
      border: 1px solid #292929;
    }
  }
`;