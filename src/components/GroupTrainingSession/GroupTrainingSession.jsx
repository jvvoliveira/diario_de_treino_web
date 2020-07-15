import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import moment from "moment";
import { withRouter } from "react-router-dom";

import { MdAdd, MdDeleteForever } from "react-icons/md";
import api from "../../services/api";
import { GroupTrainingList, GroupInfo, ButtonAddTraining, ButtonArea, FooterGroup, GroupContent } from "./styles";
import TrainingCarousel from "./TrainingCarousel/TrainingCarousel";

const Group = ({group, setTrainings, selectedIndex, setSelectedIndex, groups, setGroups}) => {
  const activeClass = selectedIndex === group.id ? 'actived' : ''; 

  const dateFormat = group.validity ? moment(group.validity).format('DD/MM/YYYY') : "---";
  const getTrainingsByGroup = async () => {
    try{
      const response = await api.get(`/training/${group.id}`);
      setTrainings(response.data);
      setSelectedIndex(group.id);
      window.scrollTo(0, document.body.scrollHeight);
    }catch(error){
      console.log(error.response);
      toast.error(error);
    }
  }

  const deleteGroup = async () => {
    try{
      await api.delete(`/group/${group.id}`);
      const newGroups = [...groups];
      const index = newGroups.findIndex(item => item.id === group.id);
      newGroups.splice(index, 1);
      setGroups(newGroups);
      toast.success('Treino excluído com sucesso');
    }catch(error){
      if(error.response && error.response.data){
        if(error.response.data.error === "You do not have permission"){
          toast.error("Você não pode deletar treino dos alunos");
        }
      }
    }
  }
  
  return (
    <li className={activeClass}>
      <GroupContent>
        <GroupInfo onClick={getTrainingsByGroup}>
          <h3>{group.name}</h3>
          {/* <p>Meta de execuções: {group.goal}</p> */}
          <p>Validade: {dateFormat}</p>
        </GroupInfo>
        <FooterGroup>
          <button onClick={deleteGroup}>
            <MdDeleteForever size={20} color='#222'/>
          </button>
        </FooterGroup>
      </GroupContent>
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

const GroupTrainingsSession = ({userId, history}) => {
  const [groups, setGroups] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    loadTrainingGroups(setGroups, userId);
  }, []);

  const goCreateTraining = () => {
    if(userId){
      history.push(`/trainings/${userId}/create`);
      return;
    }
    history.push('/trainings/create');
  } 

  return(
    <>
    <ButtonArea>
        <ButtonAddTraining type='button' onClick={goCreateTraining}>
          <MdAdd color='#eee' size={30}/>
          Adicionar treino
        </ButtonAddTraining>
      </ButtonArea>
      <GroupTrainingList>
        {groups.map(group => 
        <Group 
          key={group.id} 
          group={group} 
          setTrainings={setTrainings}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          groups={groups}
          setGroups={setGroups}
          /> 
        )}
      </GroupTrainingList>
      <TrainingCarousel trainings={trainings}/>
    </>  
  )

}

export default withRouter(GroupTrainingsSession);