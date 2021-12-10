import Root from './components/Root';
import configureStore from './store/store';
import React from 'react';
import ReactDOM  from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};
    if(window.currentUser){
        preloadedState = {
            session: {id: window.currentUser.id},
            entities: {users:{[window.currentUser.id]:window.currentUser}}
        }
        delete window.currentUser;
    }

    const root = document.getElementById('root')
    const store = configureStore(preloadedState);
    
    window.getState = store.getState;
    
    ReactDOM.render(<Root store={store}/>, root);
})