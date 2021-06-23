import { useState } from 'react';
import './Styles/Main.css';

function App() {

  const [numToConvert, setNumToConvert] = useState();

  numToConvertSubmit(){
    return null;
  }

  function numToConvertChange(e){
    e.preventDefault();
    setNumToConvert(e.target.value);
  }

  return (
    <div className="main-container">
      <form class="calculator">
        <input type="Text" placeholder="How much you want to convert"
        value={numToConvert}
        onChange={numToConvertChange}
        onSubmit={numToConvertSubmit}/>
        <h1>numToConvert: {numToConvert}</h1>
      </form>
    </div>
  );
}

export default App;
