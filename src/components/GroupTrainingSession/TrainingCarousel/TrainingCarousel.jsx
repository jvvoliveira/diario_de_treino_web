import React, {useState} from "react";
import Slider from "react-slick";

import { toast } from "react-toastify";
import { CarouselContainer, TrainingContainer, Exercise, EmptyMessage } from "./styles";
import api from "../../../services/api";

const Training = ({training}) => {
  const [exercises, setExercises] = useState([]);

  const loadExercises = exercises.length === 0 ?  async () => {
    try{
      const response = await api.get(`/exercises/${training.id}`);
      console.log(response.data);
      setExercises(response.data);
    }catch(error){
      console.log(error);
      toast.error(error);
    }
  } : () => setExercises([]);

  return(
    <TrainingContainer onClick={loadExercises} key={training.id}>
      <h3>{training.name}</h3>
      {exercises.map(exercise => (
        <Exercise key={exercise.id}>
          <p>{exercise.exercise.name}</p>
          <div>
            <span>{exercise.series}</span>
            <span>{exercise.repetitions}</span>
            <span>{exercise.rest}s</span>
          </div>
        </Exercise>
      ))}
      <p>Execuções: {training.executions}</p>
    </TrainingContainer>
  )
}

const settings = {
  infinite: true,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,
  speed: 500,
  centerPadding: '60px',
}

const TrainingCarousel = ({trainings}) => {

const empty = (
      <EmptyMessage>
        Sem fichas disponíveis. Selecione um treino não vazio.
      </EmptyMessage>
)

const content = (
  <Slider {...settings}>
          {trainings.map(training => <Training training={training} key={training.key}/> )}
  </Slider>
)


  return(
    <CarouselContainer>
      <hr/>
      <h1>Fichas</h1>
      { trainings.length === 0 ? empty : content }    
    </CarouselContainer>
  )
}

export default TrainingCarousel;