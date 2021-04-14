import React from 'react';

function App() { 
  // Use conditional rendering to open and cloe the folder 
  // From Line 8-14 all belong to props.children

    return <div>
      <Folder name='Desktop' isOpen = {false}>
        <Folder name= 'music'>
            <File name = 'chillBeats.mp4'/>
            <File name = 'superPlaylist.mp4'/>
        </Folder>
      <File name = 'dogs.png'/>
      <File name = 'cats.png'/>
      </Folder>
        
      <Folder name='Applications'/>
      
      
        </div>  
}
// If the condition is true, the ternary operator returns expression(1) otherwise it returns expression(2)
const Folder = (props) => {
  const {name , isOpen, children} = props; // destructuring the Props objs
  
    return <div>
      {name}
      <div style={{marginLeft: '17px'}}>
      {isOpen ? children : null}
      </div>
      
      </div>
  
}
const File = (props) => {
return <div>{props.name}</div>

}

export default App;
