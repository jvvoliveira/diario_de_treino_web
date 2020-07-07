import React, {useState} from "react";

import { withRouter } from "react-router-dom";
import { Form, Input, Select } from "@rocketseat/unform";
import { MdAdd } from "react-icons/md";

import { toast } from "react-toastify";
import api from "../../../services/api";
import {Container, ButtonArea, ExerciseContainer} from "./styles";

const exercisesTypes = [
  {
    id: "peito",
    title: "peito"
  },
  {
    id: "costas",
    title: "costas"
  },
  {
    id: "ombro",
    title: "ombro"
  },
  {
    id: "bíceps",
    title: "bíceps"
  },
  {
    id: "panturrilha",
    title: "panturrilha"
  },
  {
    id: "tríceps",
    title: "tríceps"
  },
  {
    id: "glúteos",
    title: "glúteos"
  },
  {
    id: "perna",
    title: "perna"
  },
  {
    id: "abdômen",
    title: "abdômen"
  }
]

const emptyExercise = () => ({
  id: '',
  type: '',
  series: '',
  repetitions: '',
  rest: '',
  options: null
})

const emptySheet = () => ({
    name: "",
    exercises: [
      emptyExercise()
    ]
})

const CreateTraining = ({match, history}) => {
  const [trainingSheets, setTrainingSheets] = useState([emptySheet()]);
  const {studentId} = match.params;

const addSheet = () => {
  setTrainingSheets([...trainingSheets, 
    emptySheet()
  ])
}

const addExercise = (sheetIndex) => {
  const cloneTrainings = [...trainingSheets];
  cloneTrainings[sheetIndex].exercises.push(emptyExercise());
  setTrainingSheets(cloneTrainings);
}

const loadExercisesByType = async (event, trainingIndex, exerciseIndex) => {
  const {value} = event.target;
  try{
    const response = await api.get(`/exercise/${value}`);
    const formatOptions = response.data.map(exercise => ({
      id: exercise.id,
      title: exercise.name
    }))
    const cloneTrainings = [...trainingSheets];
    console.log(trainingIndex, exerciseIndex);
    cloneTrainings[trainingIndex].exercises[exerciseIndex].options = formatOptions;
    setTrainingSheets(cloneTrainings);
  }catch(error){
    console.log(error);
  }
}

const validationSchema = () => {

}

const handleSubmit = async (data) => {
  console.log(data)
  const {name, goal, validity, trainings} = data;
  try{
    let responseGroup;
    if(studentId){
      responseGroup = await api.post('/group/student', {name, goal, validity, user_id: studentId}); 
    }else{
      responseGroup = await api.post('/group', {name, goal, validity}); 
    }
    const {id: groupId} = responseGroup.data;

    await trainings.map(async training => {
      const {name: trainingName, exercises} = training;
      await api.post(`/training/${groupId}`, {name: trainingName, exercises});
    })
    toast.success('Treino criado com sucesso!');
    history.push('/home');
  }catch(error){
    console.log(error);
    toast.error(error);
  }
}

return (
  <Container>
    <Form onSubmit={handleSubmit}>
      <h2>Treino</h2>
      <Input name='name' type='text' placeholder='Nome do treino' />
      <Input name='goal' type='number' placeholder='Execuções'/>
      <Input name='validity' type='date' placeholder='Validade' />
      <hr/>
      {
        trainingSheets.map((training, trainingIndex) => (
          <>
            <h3>Ficha {trainingIndex+1}</h3>
            <Input name={`trainings[${trainingIndex}].name`} type='text' placeholder='Nome da ficha' />
            {
              training.exercises.map((exercise, exerciseIndex) => (
                <>
                  <h4>Exercício {exerciseIndex+1}</h4>
                  <ExerciseContainer>
                    <div className='exerciseType'>
                      <Select 
                        name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].type`}
                        placeholder='Modalidade do exercício'
                        options={exercisesTypes}
                        onChange={(event) => loadExercisesByType(event, trainingIndex, exerciseIndex)}
                      />
                      <Select 
                        name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].id`} 
                        placeholder='Nome do exercício' 
                        disabled={!exercise.options}
                        options={exercise.options || []}
                      />
                    </div>
                    <div className='exerciseInfo'>
                      <Input 
                        name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].series`} 
                        type='number' 
                        placeholder='Séries' 
                      />
                      <Input 
                        name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].repetitions`} 
                        type='text' 
                        placeholder='Repetições (0-10)' 
                      />
                      <Input 
                        name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].rest`} 
                        type='number' 
                        placeholder='Descanso (s)' 
                      />
                    </div>
                  </ExerciseContainer>
                </>
              ))
            }
            <ButtonArea>
            <button type='button' className='secundary' onClick={() => addExercise(trainingIndex)}>
              <MdAdd color='#eee' size={30}/>
              Adicionar exercício
            </button>
            </ButtonArea>
            <hr/>
          </>
        ))
      }
      <ButtonArea>
        <button type='button' className='secundary' onClick={addSheet}>
          <MdAdd color='#eee' size={30}/>
          Adicionar ficha
        </button>
      </ButtonArea>
      <button className='primary' type='submit'>Salvar</button>
    </Form>
  </Container>
)
}

export default withRouter(CreateTraining);