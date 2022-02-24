import React from 'react';
import ReactDom from 'react-dom';


// const WordRelay = require('./components/WordRelay')
// const NumberBaseball = require ('./components/NumberBaseball')
// const RCP = require('./components/RCP')
// const Lotto = require('./components/Lotto')
// const TicTacToe = require('./components/TicTacToe')
const MineSearch = require('./components/MineSearch')

ReactDom.render(
    <div>
        {/* <h2>끝말잇기 게임</h2>
        <WordRelay />
         <br />
        <h2>숫자야구 게임</h2>
        <NumberBaseball /> */}

        {/* <RCP /> */}
        {/* <h2> 로또게임 </h2>
        <Lotto /> */}

        {/* <h2> 틱택토 </h2>
        <TicTacToe /> */}

        <MineSearch />

    </div>, document.querySelector('#root'))
