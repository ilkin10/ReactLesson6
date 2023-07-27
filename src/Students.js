import React, { useState } from 'react'

let students = [
    {id:0,name:"Ilkin",score:0},
    {id:1,name:"Alirza",score:0},
    {id:2,name:"Ali",score:0}
];


export default function Students() {

    const [studentsArr,setStudentsArr] = useState(students);

    function IncrementScoreFunc(id){
        const updatedStudentsArr = studentsArr.map(student => {
            if (student.id === id) {
              return {
                ...student,
                score: student.score + 10
              };
            }
            return student;
          });
      
          setStudentsArr(updatedStudentsArr);
    }

  return (
    <div>
      <ul>
        {studentsArr.map(s => (
          <li key={s.id}>
            Id: {s.id} - Name: {s.name} - Score: {s.score}                        <button onClick={() => IncrementScoreFunc(s.id)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
