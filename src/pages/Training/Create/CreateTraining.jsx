import React, {useState} from "react";

import { withRouter } from "react-router-dom";
import { Form, Input, Select } from "@rocketseat/unform";
import { MdAdd } from "react-icons/md";

import { toast } from "react-toastify";
import api from "../../../services/api";
import {exercisesTypes, emptyExercise, emptySheet } from "../constants";
import {Container, ButtonArea, ExerciseContainer, InputContainer} from "./styles";
import schema from "./validationSchema.js";

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
      cloneTrainings[trainingIndex].exercises[exerciseIndex].options = formatOptions;
      setTrainingSheets(cloneTrainings);
    }catch(error){
      console.log(error);
    }
  }

  const handleSubmit = async (data) => {
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
      await toast.success('Treino criado com sucesso!');
      history.push('/home');
    }catch(error){
      console.log(error);
      toast.error(error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
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
                        <InputContainer>
                          <Select 
                            name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].id`} 
                            placeholder='Nome do exercício' 
                            disabled={!exercise.options}
                            options={exercise.options || []}
                          />
                        </InputContainer>
                      </div>
                      <div className='exerciseInfo'>
                        <InputContainer>
                          <Input 
                            name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].series`} 
                            type='number' 
                            placeholder='Séries' 
                          />
                        </InputContainer>
                        <InputContainer>
                          <Input 
                            name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].repetitions`} 
                            type='text' 
                            placeholder='Repetições (0-10)' 
                          />
                        </InputContainer>
                        <InputContainer>
                          <Input 
                            name={`trainings[${trainingIndex}].exercises[${exerciseIndex}].rest`} 
                            type='number' 
                            placeholder='Descanso (s)' 
                          />
                        </InputContainer>
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