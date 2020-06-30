import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import api from "../../../services/api";

import {StudentList, StudentInfo} from "./styles";

const Student = ({ student }) => {
  return(
    <li key={student.id}>
      <StudentInfo>
        {student.user.avatar && 
          <img src={student.user.avatar.url} alt='profile'/> 
        }
        <div className='info'>
          <p>{student.user.name}</p>
          <p>{student.user.email}</p>
        </div>
      </StudentInfo>
    </li>
  )
}

const loadStudents = async (setData) => {
  try{
    const response = await api.get('/students');
    setData(response.data);
    console.log(response.data);
  }catch(error){
    console.log(error);
    toast.error(error);
  }
}

const Students = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadStudents(setData);
  },[]);

  return(
    <StudentList>
      {data.map(student => <Student student={student}/>)}
    </StudentList>
  )
}

export default Students;