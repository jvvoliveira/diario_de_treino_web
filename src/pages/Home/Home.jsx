import React, {useState} from "react";

import MenuOptions from "./MenuOptions/MenuOptions";
import {ALUNOS, TREINOS} from "./consts";
import {Container, Content} from "./styles";
import Students from "./Students/Students";
import Trainings from "./Trainings/Trainings";

function Home() {
  const [selected, setSelected] = useState("ALUNOS");

  const isStudents = selected === ALUNOS;
  const isTrainings = selected === TREINOS;

  return(
    <Container>
      <MenuOptions selected={selected} setSelected={setSelected}/>
      <Content>
        {isStudents && <Students />}
        {isTrainings && <Trainings />}
      </Content>
    </Container>
  )
}

export default Home;