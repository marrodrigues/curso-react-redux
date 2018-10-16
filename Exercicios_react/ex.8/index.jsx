import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastName="Rodrigues">
        <Member name="Mario" />
        <Member name="Alinne" />
        <Member name="Tarik" />
        <Member name="Júlia" />
    </Family>
    , document.getElementById('app'))