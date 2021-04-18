import React, { useState } from 'react';

function App() { 
  // Use conditional rendering to open and cloe the folder 
  // From Line 8-14 all belong to props.children

    return <div>
      <Folder name='Desktop'>
        <Folder name= 'music'>
            <File name = 'chillBeats.mp4'/>
            <File name = 'superPlaylist.mp4'/>
        </Folder>
      <File name = 'dogs.jpeg'/>
      <File name = 'cats.png'/>
      </Folder>
        
      <Folder name='Applications'/>
      
      
        </div>  
}
// If the condition is true, the ternary operator returns expression(1) otherwise it returns expression(2)
  const Folder = (props) => {
  const {name ,children} = props; // destructuring the Props objs

  const [ isOpen, setIsOpen ] = useState(true); //Array Destrcturing - UseState returns an Array that contains 2 Elements A Boolean and a function 
  const direction  = isOpen ? 'down': 'right';
 
  const handleSubmit = () => {
      // setIsOpen(isOpen ? false: true);  // setting the state so if isOpen is False set it to True
      setIsOpen(!isOpen);
      
  }
    return <div>
      <span onClick={handleSubmit}> 
      <i className = "blue folder big icon"></i>
      <i className = {`caret ${direction} icon`}> </i>
      </span>

      {name}
      
      <div style={{marginLeft: '17px'}}>
      {isOpen ? children : null}
      </div>
      
      </div>
  
}
const File = (props) => {
const{name} = props;

const fileExtension = name.split('.')[1];
const fileIcons = {
  mp4:'headphones',
  jpeg: 'file image',
  png: 'file image outline',
};

return <div> <i className = {`${fileIcons[fileExtension]} icon`}> </i>
  {name}
  </div>

}

export default App;
