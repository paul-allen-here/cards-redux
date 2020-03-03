import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connectStorage, toggleModal } from '../../actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardList from '../CardList/CardList';
import Modal from '../Modal/Modal';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectStorage());
  }, [ dispatch ]);
  
  return (
    <Router>
      <Modal/>
      <div className="app">
        <header className="image_covered wrap">
          <div>
            <h1 id="jumbotron-header">Webinars</h1>
            <p className="jumbotron-describtion">
              Here you can register and take part in educational 
              webinars conducted by the best digital marketing experts
            </p>
            <button className="button button-add"
            onClick={() => {dispatch(toggleModal())}}>Add new</button>
          </div>
        </header>
        <div className = "container">
          <Route path = '/' component = { CardList }/>
        </div>
      </div>
    </Router>
  );
}

export default App;
