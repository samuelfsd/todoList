import './styles.css';

export default function Card(props){
  return(
    <div className={props.className ? `${props.className} card` : 'card'}>
      {props.children}
    </div>
  );
} 