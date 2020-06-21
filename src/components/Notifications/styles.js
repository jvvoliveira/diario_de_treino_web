import styled, { css } from "styled-components";

import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: none;
  position: relative;

  ${props => props.hasUnread && css`
    &::after{
      position: absolute;
      top: 0;
      right: 0;
      width: 8px;
      height: 8px;
      background: #ee4540;
      content: '';
      border-radius: 50%;
    }
  `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 10px 5px;
  display: ${props => (props.visible ? "block" : "none")};

  &::before{
    content: "";
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  position: relative;
  padding: 10px 0;

  & + div{
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p{
    font-size: 13px;
    line-height: 18px;
  }

  ${props => props.unread && css`
  &::after{
      position: absolute;
      top: 40%;
      left: -6%;
      width: 8px;
      height: 8px;
      background: #ee4540;
      content: '';
      border-radius: 50%;
    }
  `}
`;