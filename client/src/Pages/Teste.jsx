import React, { useState, useEffect } from "react";
import "./Teste.css";
import Axios from "axios";
import Card from "../components/cards/card";

export default function Teste() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  const handleClickButton = () => {
    Axios.post("http://localhost:3009/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:3009/getCards").then((response) => {
      setListGames(response.data);
    });
  }, []);
  return (
    <>
      <main>
        <div className="app--container">
          <div className="register--container">
            <h1>Games love</h1>
            <input
              type="text"
              name="name"
              className="register--input"
              placeholder="Nome"
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="cost"
              className="register--input"
              placeholder="Preço"
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="category"
              className="register--input"
              placeholder="Categoria"
              onChange={handleChangeValues}
            />
            <button onClick={() => handleClickButton()}>Cadastrar</button>
          </div>
          {typeof listGames !== "undefined" &&
            listGames.map((value) => {
              return (
                <Card
                  key={value.id}
                  listCard={listGames}
                  setListCard={setListGames}
                  id={value.idgames}
                  name={value.nome}
                  cost={value.cost}
                  category={value.category}
                ></Card>
              );
            })}
        </div>
      </main>
    </>
  );
}
