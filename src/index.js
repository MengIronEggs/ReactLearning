import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Todolist from './Todolist'
import * as serviceWorker from './serviceWorker'; //PWA progressive web application 
// 程序入口
ReactDOM.render(<Todolist />, document.getElementById('root')); // 缓存网页 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
