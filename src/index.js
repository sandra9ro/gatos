import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import RandomCat from './components/RandomCat';
import CatList from './components/CatList';

ReactDOM.render(
    <CatList />, document.getElementById('root')
);
reportWebVitals();
