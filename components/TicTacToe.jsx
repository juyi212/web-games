const React = require('react')
const { useState, useReducer, useCallback } = React;
const Table = require('./Table')

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    recentCell: [-1, -1],
  };

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER :
            return {
                // 불변성 = 새로운 객체를 반환 
                ...state, 
                winner: action.winner, 
            }
    }
}


const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const onClickTable = useCallback(() => {
        dispatch({ type: 'SET_WINNER', winner: 'o'})
    }, [])

    return(
        <div>
            <Table onClick= {onClickTable} tableData = {state.tableData}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </div>
    )
}

module.exports = TicTacToe;