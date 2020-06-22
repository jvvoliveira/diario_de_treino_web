import styled from "styled-components";
import { darken } from "polished";
import mosaicoPretoBranco from "../../../assets/mosaicoPretoBranco.jpg";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(#292929, #444);
  color: #eee;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-image: url(${mosaicoPretoBranco}); */
  background-repeat: repeat-y;
  background-position: 180% 50%;

  @media(max-width: 1145px){
    background-position: 200% 50%;
  }
  @media(max-width: 980px){
    background-image: none;
  }

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
      .secundary{
        background: transparent;
        &:hover{
          color: #ee4540;
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