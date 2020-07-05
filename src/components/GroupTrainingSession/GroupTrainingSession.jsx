import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import moment from "moment";

import api from "../../services/api";
import { GroupTrainingList, GroupInfo } from "./styles";
import TrainingCarousel from "./TrainingCarousel/TrainingCarousel";

const Group = ({group, setTrainings, selectedIndex, setSelectedIndex}) => {
  const activeClass = selectedIndex === group.id ? 'actived' : ''; 

  const dateFormat = group.validity ? moment(group.validity).format('DD/MM/YYYY') : "---";
  const getTrainingsByGroup = async () => {
    try{
      const response = await api.get(`/training/${group.id}`);
      setTrainings(response.data);
      setSelectedIndex(group.id);
    }catch(error){
      console.log(error);
      toast.error(error);
    }
  }
  

  return (
    <li className={activeClass}>
      <GroupInfo onClick={getTrainingsByGroup}>
        <h3>{group.name}</h3>
        <p>Meta de execuções: {group.goal}</p>
        <p>Validade: {dateFormat}</p>
      </GroupInfo>
    </li>
  )
}

const loadTrainingGroups = async (setGroups, userId) => {
  const getData = userId ? () => api.get(`/group/student/${userId}`) 
  : () => api.get('/group');

  try{
    const response = await getData();
    setGroups(response.data);
  }catch(error){
    console.log(error);
    toast.error(error);
  }
}

const GroupTrainingsSession = ({userId}) => {
  const [groups, setGroups] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    loadTrainingGroups(setGroups, userId);
  }, []);
  console.log(groups);

  return(
    <>
      <GroupTrainingList>
        {groups.map(group => 
        <Group 
          key={group.id} 
          group={group} 
          setTrainings={setTrainings}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          /> 
        )}
      </GroupTrainingList>
      <TrainingCarousel trainings={trainings}/>
    </>  
  )

}

export default GroupTrainingsSession;