import './styles.css';
import Card from '../Card';

function DoneImg(props){
  if(props.done){
    return <img alt='on' src='././assets/on.png'></img>
  }else{
    return <img alt='off' src='././assets/off.png'></img>
  }
}

export default function ListItem(props){
  return(
        <li>
          <Card className={props.item.done ? 'done item' : 'item'} >
            {props.item.text}
            <div className=''>
              <button onClick={() => {props.onDone(props.item)}}> <DoneImg done={props.item.done} /> </button>
              <button onClick={() => {props.onItemDeletd(props.item)}} ><img src='././assets/trash-regular-24.png' alt='delete'></img></button>
            </div>
          </Card>
        </li>
  );
}