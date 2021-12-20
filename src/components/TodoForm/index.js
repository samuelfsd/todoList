import {useState} from 'react';
import './styles.css';

export default function TodoForm(props){

  const [text,setText] = useState('');

  function handleChange(event){
    const text = event.target.value;
    setText(text);
  }

  function addItem(event){
    event.preventDefault();
    if(text){
      props.onAddItem(text);
      setText('')
    } 
  }

  return(
    <form className="form">
      <input className='input-form' onChange={handleChange} type="text" value={text}></input>
      <button className='btn-form'onClick={addItem}>add</button>
    </form>
  );
}