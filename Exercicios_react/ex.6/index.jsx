import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family>
        <Member name="Mario" lastName="Rodrigues" />
    </Family>
    , document.getElementById('app'))