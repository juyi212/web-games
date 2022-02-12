import React from 'react';
import ReactDom from 'react-dom';

const WordRelay = require('./WordRelay')
const NumberBaseball = require ('./NumberBaseball')

ReactDom.render(
    <div>
        <h2>끝말잇기 게임</h2>
        <WordRelay />
         <br />
        <h2>숫자야구 게임</h2>
        <NumberBaseball />
    </div>, document.querySelector('#root'))
