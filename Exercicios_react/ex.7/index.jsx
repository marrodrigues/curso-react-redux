import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastName="Rodrigues">
        <Member name="Mario" />
    </Family>
    , document.getElementById('app'))