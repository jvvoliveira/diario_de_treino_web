import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import { MdPerson } from "react-icons/md";
import { withRouter } from "react-router-dom";
import api from "../../../services/api";

import {StudentList, StudentInfo} from "./styles";

const Student = ({ student, history }) => {
  const {user} = student;
  return(
    <li>
      <StudentInfo onClick={() => history.push(`/trainings/${user.id}`)}>
        {user.avatar ? 
          <img src={user.avatar.url} alt='profile'/>
          :
          <MdPerson color='#fff' size={50}/> 
        }
        <div className='info'>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </StudentInfo>
    </li>
  )
}

const loadStudents = async (setData) => {
  try{
    const response = await api.get('/students');
    setData(response.data);
  }catch(error){
    console.log(error);
    toast.error(error);
  }
}

const Students = ({history}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadStudents(setData);
  },[]);

  return(
    <StudentList>
      {data.map(student => <Student key={student.id} student={student} history={history}/>)}
    </StudentList>
  )
}

export default withRouter(Students);