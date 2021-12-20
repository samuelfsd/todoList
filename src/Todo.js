import './Todo.css'
import {useState,useEffect} from 'react';
import List from '././components/List';
import TodoForm from '././components/TodoForm';
import Item from '././components/Item';
import Modal from './components/Modal';

export default function Todo(){

  const [items,setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems'));
    if(savedItems){
      setItems(savedItems);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('savedItems',JSON.stringify(items));
  },[items])

  function onAddItem(text){
    const item = new Item(text);
    
    setItems([...items,item]);
    onHideModal();
  }

  function onItemDeletd(item){
    const filteredItems = items.filter(it => it.id !== item.id);
    setItems(filteredItems);
  }

  function onDone(item){
    console.log('done');
    const updatedItems = items.map(it => {
      if(it.id === item.id){
        it.done = !it.done;
      }
      return it;
    })

    setItems(updatedItems);
  }



  function onHideModal(){
    setShowModal(false);
  }

  
  return(
    <div className="container">

      <header className="header">
        <h1>Todo</h1>
        <button onClick={() => {setShowModal(true)}} className="addButton">+</button>  
      </header>
      <List onDone={onDone} onItemDeletd={onItemDeletd} items={items} />
      
      <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem} /></Modal>
    </div>
  ); 
}
