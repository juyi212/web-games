import React, { useState, useRef } from 'react';
import Try from './Try'

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4 ; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen)
    }
    return array 
}

const NumberBaseball = () => {
    const [answer, setAnswer] = useState('아리')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [tries, setTries] = useState([])
    // const inputRef = useRef(null)

    const onSubmitForm = (e) => {
    }

    const onChangeInput= (e) => {
        setValue(e.target.value)
    }


        return (
            <>
                <div>{result}</div>
                <form onSubmit={onSubmitForm}>
                    <input ref={inputRef} value= {value} onChange = {onChangeInput} />
                    <button>정답 </button>
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                    <Try />
                </ul>
            </>
    )
}


