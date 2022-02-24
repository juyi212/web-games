const React = require('react')
const {useReducer, createContext } = React;
const MineForm = require('./MineForm')
const MineTable = require('./MineTable')

const TableContext = createContext({
    tableData: [],
    dispatch: () => {},
});

const initialState = {
    tableData : [],
    timer: 0,
    result: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
        }
    }
    
    
    const MineSearch = () => {
        const [state, dispatch] = useReducer(reducer, initialState)
        
        return(
            
            <TableContext.Provider value={{tableData: state.tableData}}>
            <MineForm />
            <div>{state.timer}</div>
            <MineTable />
            <div></div>
        </TableContext.Provider>
    )
}

module.exports = TableContext;
module.exports = MineSearch;
