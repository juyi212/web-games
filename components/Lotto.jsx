const React = require('react')
const { useState, useRef, useEffect, useMemo  } = React;
const Ball  = require('./Ball')

function getWinNumbers() {
    console.log('getWinnumbers')
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}


const Lotto = () => {
    // getWinNumbers를 계속 호출안하도록 방지
    // useMemo : 복잡한 함수 결과값을 기억 
    // useRef: 일반 값을 기억 
    const lottoNumbers = useMemo(()=>  getWinNumbers(), [])
    const [winNumbers, setWinNumbers] = useState(lottoNumbers)
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(()=> {
        for (let i = 0; i < winNumbers.length-1;  i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls)=> [...prevBalls,  winNumbers[i]])
            }, (i+1)* 1000)
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6])
            setRedo(true)
        }, 7000)
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v)
            })
        }
    },[timeouts.current])

    const onClickRedo = () => {
        // 자식 컴포넌트에 함수가 전달될때는 useCallback을 쓰는 것이 좋음 
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
      };

    return (
        <div>
            <div>당첨 숫자</div>
                <div id="결과창">
                    {winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball number={bonus} onClick={onClickRedo} />}
                {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </div>
    )
}

module.exports = Lotto;