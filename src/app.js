import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';


const jsx = ( 
    <div className={"container"}>
        <AppRouter/>
    </div>
);


ReactDOM.render( <LoadingPage/> , document.getElementById('app'));

ReactDOM.render(<AppRouter/>, document.getElementById("app"));