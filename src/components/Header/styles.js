import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  background: #eee;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav{
    a{
      font-weight: bold;
      color: #ee4540;
      font-size: 22px; 
    }
  }

  aside{
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #292929;

  a{
    display: flex;
    align-items: center;
    strong{
      display: block;
      color: #292929;
      margin-right: 10px;
    }
    img{
      height: 42px;
      width: 42px;
      border-radius: 50%;
    }
  }
`;