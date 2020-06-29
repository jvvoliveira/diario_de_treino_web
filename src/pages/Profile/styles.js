import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;

  form{
      display: flex;
      flex-direction: column;

      margin-top: 30px;
      input{
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
      button{
        margin: 5px 0 0;
        height: 44px;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        color: #eee;
        transition: background 0.2s;
      }
      .primary{
        background: #EE4540;
        &:hover{
          background: ${darken(0.05, '#ee4540')};
        }
      }

      span{
        color: #ff0000;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }

      hr{
        border: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        margin: 10px 0 20px;
      }
    }

    > button{
        width: 100%;
        margin: 15px 0 0;
        height: 44px;
        font-weight: bold;
        border: 1px solid #ee4540;
        border-radius: 4px;
        background: transparent;
        font-size: 16px;
        color: #eee;
        transition: color 0.2s;
        &:hover{
          color: #ee4540;
        }
      }
`;