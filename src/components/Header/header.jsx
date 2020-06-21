import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Notifications from "../Notifications/notifications";

import { Container, Content, Profile, } from "./styles";

const Header = () => {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <Link to='/home'>
            Diário de Treino
          </Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <Link to='/profile'>
              <strong>{profile.name}</strong>
              <img src={profile.avatar.url} alt='profile' />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  )

}

export default Header;