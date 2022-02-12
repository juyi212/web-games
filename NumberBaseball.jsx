const React = require('react')
const { useState, useRef } = React;
const Try = require('./ Try')

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
    const [answer, setAnswer] = useState(getNumbers())
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [tries, setTries] = useState([])
    // const inputRef = useRef(null)

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (value === answer.join('')) {
            setResult('홈런')
            setTries((prevTries) => {
                [...prevTries, { try : value, result: "홈런!"}]
            })
            alert('게임을 다시 시작합니다.')
            setValue('')
            setAnswer(getNumbers())
            setTries([])
        } else { // 답이 틀렸을 경우,
            const valueArray = value.split('').map(v=>parseInt(v));
            let strike = 0 ;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('.')}였습니다.`)
                alert('게임을 다시 시작합니다.')
                setValue('')
                setAnswer(getNumbers())
                setTries([])
            } else {
                for (let i = 0; i < 4; i += 1){
                    if (valueArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(valueArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, {try : value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}])
                setValue('')
            }
        }

    }

    const onChangeInput= (e) => {
        setValue(e.target.value)
    }


        return (
            <>
                <div>{result}</div>
                <form onSubmit={onSubmitForm}>
                    <input maxLength={4} value= {value} onChange = {onChangeInput} />
                    <button>정답 </button>
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i+1}차 시도 :`} tryInfo ={v}/>
                        )
                    })}
                </ul>
            </>
    )
}

module.exports = NumberBaseball;
