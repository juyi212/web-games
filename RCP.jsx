const React = require('react')
const { useState, useRef } = React;

const RCP = () => {
    const [result, setResult] = useState('')
    const [score, setScore] = useState(0)
    const [imgCoord, setImgCoord] = useState(0)


        return (
            <div>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
              <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
              <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
              <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
          </div>
        )
    
}

module.exports = RCP;