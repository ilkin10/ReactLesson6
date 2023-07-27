import './App.css';
import { useState } from 'react';
import Shapes from './Shapes';
import Students from './Students';
import List from './List';

let nextId = 0;

function App() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  
  function addArtist() {
    setArtists([
      {
        id: ++nextId,
        name: name
      },
      ...artists
    ]);
  }

  function removeItem(id) {
    setArtists(artists.filter(artist => artist.id !== id));
  }

  return (
    <div className="App">



      {/* <h1>Our Artists</h1>
      <section>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={addArtist}>Add</button>
      </section>
      <ul>
        {artists.map(a => (
          <li key={a.id}>
            {a.name}
            <button onClick={() => removeItem(a.id)}>Remove</button>
          </li>
        ))}
      </ul> */}




      {/* <Shapes></Shapes> */}



      {/* <Students></Students> */}


      <List></List>



    </div>
  );
}

export default App;
