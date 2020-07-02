import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import moment from "moment";

import api from "../../services/api";
import { TrainingList, TrainingInfo } from "./styles";

const Group = ({group}) => {
  const dateFormat = group.validity ? moment(group.validity).format('DD/MM/YYYY') : "---";
  const getTrainingsByGroup = () => api.get(`/training/${group.id}`);

  return (
    <li>
      <TrainingInfo onClick={getTrainingsByGroup}>
        <h3>{group.name}</h3>
        <p>Meta de execuções: {group.goal}</p>
        <p>Validade: {dateFormat}</p>
      </TrainingInfo>
    </li>
  )
}

const loadData = async (setData, userId) => {
  const getData = userId ? () => api.get(`/group/student/${userId}`) 
  : () => api.get('/group');

  try{
    const response = await getData();
    setData(response.data);
  }catch(error){
    console.log(error);
    toast.error(error);
  }
}

const GroupTrainingsSession = ({userId}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(setData, userId);
  }, []);

  return(
    <TrainingList>
      {data.map(group => <Group key={group.id} group={group}/>)}
    </TrainingList>
  )

}

export default GroupTrainingsSession;