import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import moment from "moment";

import api from "../../../services/api";
import { TrainingList, TrainingInfo } from "./styles";

const Training = ({training}) => {
  console.log(training);
  const dateFormat = moment(training.validity).format('DD/MM/YYYY');
  return (
    <li>
      <TrainingInfo>
        <h3>{training.name}</h3>
        <p>Meta de execuções: {training.goal}</p>
        <p>Validade: {dateFormat}</p>
      </TrainingInfo>
    </li>
  )
}

const loadData = async setData => {
  try{
    const response = await api.get('/group');
    setData(response.data);
  }catch(error){
    console.log(error);
    toast.error(error);
  }
}

const Trainings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(setData);
  }, []);

  return(
    <TrainingList>
      {data.map(training => <Training key={training.id} training={training}/>)}
    </TrainingList>
  )

}

export default Trainings;