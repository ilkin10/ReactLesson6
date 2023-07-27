import React, { useState } from 'react'

let nextId = 3;
const initialList = [
    {id:0,title:"Big Bellies",seen:false},
    {id:1,title:"Lunar Landscape",seen:false},
    {id:2,title:"Terracotta Army",seen:true},

];

export default function List() {

    const [myList,setMyList] = useState(initialList);
    const [yourList,setYourList] = useState(initialList);

    function handleToggleMyList(artWorkId,nextSeen){
        // const myNextList = [...myList];
        // const artwork = myNextList.find(a=>a.id===artWorkId);
        // artwork.seen = nextSeen;
        setMyList(
            myList.map(artwork=>{
                if(artwork.id === artWorkId){
                    return {...artwork,seen:nextSeen}
                }
                else{

                }
            })
        );
    }


    function handleToggleYourList(artWorkId,nextSeen){
        const yourNextList = [...yourList];
        const artwork = yourNextList.find(a=>a.id===artWorkId);
        artwork.seen = nextSeen;
        setYourList(yourNextList);
    }


  return (
    <div>
        <h1>Art Bucket</h1>
        <h2>My List Of Art To See</h2>
        <ItemList artworks={myList} onToggle={handleToggleMyList}></ItemList>
        <h2>Your List Of Art To See</h2>
        <ItemList artworks={yourList} onToggle={handleToggleYourList}></ItemList>

    </div>
  )
}





function ItemList({artworks,onToggle}) {
  return (
      <ul>
        {
            artworks.map((a)=>(
                <li key={a.id}>
                    <label>
                        <input type="checkbox" checked={a.seen}
                        onChange={(e) =>{
                            onToggle(a.id,e.target.checked)
                        }}></input>
                        {a.title}
                    </label>
                </li>
            ))
        }
      </ul>
  )
}
