import React from 'react';
import ReactDom from 'react-dom';
import "./styles.css";

const WordRelay = require('./WordRelay')
const NumberBaseball = require ('./NumberBaseball')
const RCP = require('./RCP')


ReactDom.render(
    <div>
        <h2>끝말잇기 게임</h2>
        {/* <WordRelay /> */}
         <br />
        <h2>숫자야구 게임</h2>
        <NumberBaseball />

        <RCP />
    </div>, document.querySelector('#root'))
