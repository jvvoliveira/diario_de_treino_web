import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: space-around;
  width: 60%;
`;

export const Option = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  flex: 1 1;
  padding-bottom: 8px;

  &.selected{
    color: #ee4540;
    border-bottom: 1px solid #ee4540;
  }

  &:hover{
    color: #ee4540;
    cursor: pointer;
  }
`;