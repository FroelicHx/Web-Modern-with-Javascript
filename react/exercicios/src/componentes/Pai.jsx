import React from 'react'
import { childrenWithProps } from '../componentes/utils/utils'
// eslint-disable-next-line
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
           {childrenWithProps(props)}
        </ul>
    </div>