import styled from "styled-components";

export const StudentList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  width: 90%;
  flex-wrap: wrap;

  li{
    margin: 10px;
  }
`;

export const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  transition: box-shadow 0.8s;

  &:hover{
    box-shadow: 5px 5px 10px 2px rgba(239, 69, 64, 0.5);
    cursor: pointer;
  }

  img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  .info{
    /* border-left: 1px solid #ee4540; */
    padding-left: 8px;
    margin-left: 8px;
    p{
      font-size: 16px;
      padding: 2px 0;
    }
  }
`;