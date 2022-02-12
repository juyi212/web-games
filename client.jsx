import React from 'react';
import ReactDom from 'react-dom';

const WordRelay = require('./WordRelay')
const NumberBaseball = require ('./NumberBaseball')

ReactDom.render(
    <div>
        <WordRelay />
        <NumberBaseball />
    </div>, document.querySelector('#root'))
