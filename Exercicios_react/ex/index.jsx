import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import Counter from './counter'
import CounterReducer from './counterReducer'

const reducers = combineReducers({
    counter: CounterReducer
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
, document.getElementById('app'))