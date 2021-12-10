import {
  receiveState,
} from '../actions';

export const addListeners = (store) => {
  window.addEventListener("storage", (e) => {
    if (e.storageArea !== localStorage) return;
    rehydrateState(store);
  });
};

export const rehydrateState = (store) => {
  const text = localStorage.getItem('text');
  const slideIndex = localStorage.getItem('slideIndex');
  store.dispatch(receiveState({ text, slideIndex }));
};
