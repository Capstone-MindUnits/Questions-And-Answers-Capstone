import React from 'react';
import Qna from './Components/Qna/Qna.js'
import Search from './Components/Search/Search.js'
import Buttons from './Components/Buttons/Buttons.js'

function App() {
  return (
    <div className="app pr-16 pl-16">  
      <div className="grid grid-cols-1 gap-4">
         <Search />
         <Qna />
         <Buttons />
      </div> 
    </div>
  );
}

export default App;
