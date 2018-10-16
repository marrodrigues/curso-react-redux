import React from 'react'
import ReactDom from 'react-dom'
import { Primeiro, Segundo } from './component'

ReactDom.render(
    <div>
        <Primeiro value="Primeiro componente." />
        <Segundo value="Segundo componente." />
    </div>
    , document.getElementById('app'))