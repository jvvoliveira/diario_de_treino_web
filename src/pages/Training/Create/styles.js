import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;

  form{
      display: flex;
      flex-direction: column;

      margin-top: 30px;
      input, select{
        background: rgba(255, 255, 255, 0.2);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        margin-bottom: 10px;
        color: #eee;

        &::placeholder{
          color: rgba(255, 255, 255, 0.7);
        }
      }
      select option{
        background: #292929;
        color: #eee;
        
      }
      button{
        margin: 5px;
        height: 44px;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        color: #eee;
        transition: background 0.2s;
      }
      button.primary{
        background: #EE4540;
        &:hover{
          background: ${darken(0.05, '#ee4540')};
        }
      }
      button.secundary{
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: 1px solid #ee4540;
        width: 35%;
        min-width: 200px;
        &:hover{
          color: #ee4540;
        }
      }

      h2, h3, h4{
        color: #eee;
        margin: 0 0 10px;
      }

      hr{
        border: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        margin: 10px 0 20px;
      }
      span{
        color: #ff0000;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }
    }
`;

export const InputContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExerciseContainer = styled.div`
  .exerciseType{
    display: flex;
    justify-content: space-around;
  }
  .exerciseInfo{
    display: flex;
    justify-content: space-around;
  }
`;