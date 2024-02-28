import { configureStore, combineReducers } from '@reduxjs/toolkit'
import disabled from '../reducers/disabled';
import { reducer } from '../reducers/reducer'

const reducers = combineReducers({
  clicks: reducer,
  disabled: disabled,
});

export const store = configureStore({
  reducer: reducers,
})
