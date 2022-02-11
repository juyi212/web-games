const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay')


ReactDom.render(
    <div>
        <WordRelay />
        <WordRelay />
    </div>, document.querySelector('#root'))
