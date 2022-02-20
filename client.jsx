import React from 'react';
import ReactDom from 'react-dom';


const WordRelay = require('./components/WordRelay')
const NumberBaseball = require ('./components/NumberBaseball')
const RCP = require('./components/RCP')
const Lotto = require('./components/Lotto')

ReactDom.render(
    <div>
        <h2>끝말잇기 게임</h2>
        <WordRelay />
         <br />
        <h2>숫자야구 게임</h2>
        <NumberBaseball />

        <RCP />
        <h2> 로또게임 </h2>
        <Lotto />
    </div>, document.querySelector('#root'))
