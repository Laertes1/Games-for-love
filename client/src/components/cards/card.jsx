import React from "react";
import "./cards.css";
import FormDialog from '../dialog/dialog'
export default function Card(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickCard = () =>{
    setOpen(true)
  }
  return (
    <>
      <FormDialog 
      open={open} 
      setOpen={setOpen} 
      name={props.name} 
      cost={props.cost}
      category={props.category}
      id={props.id}
      listCard={props.listCard}
      setListCard={props.setListCard}
      />
      <div className="card--container" onClick={() => handleClickCard()}>
        <h1 className="card--title">{props.name}</h1>
        <p className="car--cost">{props.cost}</p>
        <p className="car--category">{props.category}</p>
      </div>
    </>
  );
}
