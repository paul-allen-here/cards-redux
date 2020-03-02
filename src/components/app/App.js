import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../CardList/CardList';
import Modal from '../Modal/Modal';
import './App.css';

const App = () => {

  const show = useSelector(state => state.showModal);
  const cards = useSelector(state => state.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CONNECT_TO_STORAGE" });
  }, [ dispatch ]);
  
  return (
    <div>
      <Modal props = {{show: show}}/>
      <div className="app">
        <header className="image_covered wrap">
          <div>
            <h1 id="jumbotron-header">Webinars</h1>
            <p className="jumbotron-describtion">
              Here you can register and take part in educational 
              webinars conducted by the best digital marketing experts
            </p>
            <button className="button button-add"
            onClick={() => {dispatch({ type: 'TOGGLE_MODAL'})}}>Add new</button>
          </div>
        </header>
        <div className = "container">
          <CardList props = {{cards}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
