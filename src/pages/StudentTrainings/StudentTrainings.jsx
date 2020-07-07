import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { MdPerson } from "react-icons/md";
import GroupTrainingsSession from "../../components/GroupTrainingSession/GroupTrainingSession";
import api from "../../services/api";

import {HeadingProfile} from "./styles";

const loadStudent = async (setStudent, studentId) => {
  try{
    const response = await api.get(`/users/${studentId}`)
    setStudent(response.data);
  }catch(error){
    toast.error(error);
  }
}

const StudentTrainings = (props) => {
  const [student, setStudent] = useState(null);
  const {match} = props;
  const {studentId} = match.params;

  useEffect(() => {
    loadStudent(setStudent, studentId);
  },[])

  return(
    <>
      {student &&
      <HeadingProfile>
         {student.avatar ? 
          <img src={student.avatar.url} alt='profile'/>
          :
          <MdPerson color='#fff' size={120}/> 
        }
        <h3>{student.name}</h3>
        <p>{student.email}</p>
      </HeadingProfile>
      }
      <GroupTrainingsSession userId={studentId}/>
    </>
  )
}

export default withRouter(StudentTrainings);