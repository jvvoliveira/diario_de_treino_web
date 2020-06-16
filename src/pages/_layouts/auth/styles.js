import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #292929;
  color: #fff;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .titleArea{
    margin: 40px;
    h1{
      font-size: 50px;
      color: #EE4540;
    }
    h4{
      font-size: 28px;
      margin-top: 15px;
    }
  }

  .formArea{
    display: flex;
    flex-direction: column;
    flex: 1 1;
    justify-content: center;
    align-items: center;

    form{
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      margin-top: 30px;
      input{
        background: rgba(255, 255, 255, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        margin-bottom: 10px;
        color: #fff;

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
        color: #fff;
        transition: background 0.2s;
      }
      .primary{
        background: #EE4540;
        &:hover{
          background: ${darken(0.05, '#ee4540')};
        }
      }
      .secundary{
        background: #292929;
        &:hover{
          background: ${darken(0.05, '#292929')};
        }
      }

      span{
        color: #ff0000;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }
    }
  }
`;