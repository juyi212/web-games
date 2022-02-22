const { useCallback } = require('react')
const React = require('react')
const CLICK_CELL = 'CLICK_CELL';

const Tb = React.memo( function Tb ({rowIndex, cellIndex, dispatch, cellData}) {
    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        if (cellData) {
          return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
      }, [cellData]);
    return(
        <td onClick={onClickTd}>
            {cellData}
        </td>
    )
})

module.exports = Tb;