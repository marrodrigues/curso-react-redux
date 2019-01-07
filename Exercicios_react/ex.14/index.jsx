import React from 'react'
import ReactDom from 'react-dom'
import Field from './field'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import FieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: FieldReducer
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="Teste"/>
    </Provider>
, document.getElementById('app'))