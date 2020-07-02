import React, {useState} from "react";

import MenuOptions from "./MenuOptions/MenuOptions";
import {ALUNOS, TREINOS} from "./consts";
import {Container, Content} from "./styles";
import Students from "./Students/Students";
import GroupTrainingsSession from "../../components/GroupTrainingSession/GroupTrainingSession";

function Home() {
  const [selected, setSelected] = useState("ALUNOS");

  const isStudents = selected === ALUNOS;
  const isTrainings = selected === TREINOS;

  return(
    <Container>
      <MenuOptions selected={selected} setSelected={setSelected}/>
      <Content>
        {isStudents && <Students />}
        {isTrainings && <GroupTrainingsSession />}
      </Content>
    </Container>
  )
}

export default Home;