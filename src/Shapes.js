import React, { useState } from 'react'


let initialShapes = [
    {id:0,type:'circle',x:50,y:100},
    {id:1,type:'square',x:150,y:100},
    {id:2,type:'circle',x:250,y:100},
];

export default function Shapes() {

    const [shapes,setShapes] = useState(initialShapes);

    function hadleClick(){
        const nextShapes = shapes.map(shape =>{
            if(shape.type === 'square'){
                return shape;
            }
            else{
                return {
                    ...shape,
                    y:shape.y+50
                }
            }
        });
        setShapes(nextShapes);
    }


  return (
    <div>
      <button onClick={hadleClick}>Move Circles Down</button>
      {
        shapes.map(shape => (
            <div key={shape.id}
            style={{
                backgroundColor:"purple",
                position:"absolute",
                left:shape.x,
                top:shape.y,
                borderRadius:shape.type==='circle' ? '50%' : '',
                width:"25px",
                height:"25px"
            }}></div>
        ))
      }
    </div>
  )
}
