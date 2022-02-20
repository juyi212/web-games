const React = require('react')
const { useState, useRef } = React;

// const Try = ({tryInfo}) => {


//     return (
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// }

const Try = React.memo(function Try ({tryInfo}) {

    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
})
module.exports =  Try;