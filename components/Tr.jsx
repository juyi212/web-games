const React = require('react')
const Td = require('./Td')

const Tr = React.memo(function Tr ({rowData, rowIndex, dispatch}) {
    return(
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>
            ))}
        </tr>
    )
})

module.exports = Tr;