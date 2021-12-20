import './styles.css';
import Card from '../Card';

export default function Modal(props){

  function hideModal(event){
    const target = event.target;
    if(target.id === 'modal'){
      props.onHideModal();
    }
  }
  return(
    <div id='modal' onClick={hideModal} className={props.show ? ' modal' : 'modal hideModal'}>
      <Card className="card-modal">
        {props.children}
      </Card>
    </div>
  );
}