import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// 기본 react 파일
import CounselorData from '../db/data.json';

import styles from "./Select.module.css"

import Counselor from "../components/Counselor"; //Counselor components 파일

import img from "../img/person.png" // 더미 사진 데이터
import { couldStartTrivia } from "typescript";

function Select() {

  console.log(CounselorData);

  return (

    <div className={styles.parent}>
      
      {CounselorData.counselors.map(counselors =>(
          // <tr>
          //   <td>{counselors.id}</td>
          //   <td>{counselors.이름}</td>
          //   <td>{counselors.나이}</td>
          //   <td>{counselors.전문분야}</td>
          // </tr>
          <Counselor key={counselors.id}
          name = {counselors.이름} 
          img = {img}
          profile = {counselors.전문분야}
          introduction = {counselors.자기소개}
          /> 

      ))}

      {/* <Counselor 
        name = "juheun" 
        img = {img}
        profile = "..."
        id = '1'
        /> 

      <Counselor
        name = "name2" 
        img = {img}
        profile = "..."
        id = '2'
        /> */}

    </div>
  )
}

export default Select;