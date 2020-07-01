import React from "react";

import PropTypes from "prop-types";

import {Menu, Option} from "./styles";
import { ALUNOS, TREINOS } from "../consts";

function MenuOptions({selected, setSelected}) {
  const classSelectAlunos = selected === ALUNOS ? 'selected' : '';
  const classSelectTreinos = selected === TREINOS ? 'selected' : '';

  const changeOption = (option) => {
    setSelected(option);
  }

  return(
      <Menu>
        <Option className={classSelectAlunos} 
          onClick={() => changeOption(ALUNOS)}>
            Meus Alunos
        </Option>
        <Option className={classSelectTreinos} 
          onClick={() => changeOption(TREINOS)}>
            Meus Treinos
        </Option>
      </Menu>
  )
}

MenuOptions.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired
}

export default MenuOptions;