import {NgRedux, select} from '@angular-redux/store';
import {combineReducers} from 'redux';

interface AppState {
  pesan: string;
}

const namaDari: AppState ={
  pesan: 'Halo, dunia maya !!'
};

function rootReducer(state = namaDari, action) {
  switch (action.type) {
    case 'PESAN_DIUBAH':
      return { ...state, pesan: 'Pesan telah diubah'};
      default:
        return state;
  }
}