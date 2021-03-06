import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 80%;
  margin: 30px auto 0;
  height: 500px;
  padding-bottom: 20px;

  hr{
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }

  h1{
    margin-bottom: 30px;
  }
`;

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  color: #292929;
  padding: 8px 8px;
  margin: 0 10px;
  max-height: 360px;
  overflow: auto;

  &:hover{
    cursor: pointer;
  }

  p{
    margin: 10px 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  color: #ee4540;
  font-size: 32px;
`;

export const Exercise = styled.div`
  width: 100%;
  P{
    font-weight: bold;
  }

  div{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyMessage = styled.h3`
  width: 100%;
  text-align: center;
`;