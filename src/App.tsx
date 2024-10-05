import { useState } from 'react';
import { BingoNumberGenerator } from './BingoNumberGenerator';
import './index.css';
import allTooRedLogo from './assets/all_too_red_logo.svg'
import refreshIcon from './assets/refresh_icon.svg'

function App() {
  const [bingo, setBingo] = useState(new BingoNumberGenerator());
  const [currNum, setCurrNum] = useState(0);
  const [currList, setCurrList] = useState(bingo.drawnNumbers);

  const handleDrawNewNumber = () => {
    const randNum = bingo.drawNumber();
    setCurrNum(randNum);
    console.log(bingo.drawnNumbers);
    setBingo(bingo);
  };

  const handleRestart = () => {
    bingo.clear();
    setBingo(bingo);
    setCurrNum(0);
    setCurrList(bingo.drawnNumbers);
  };

  const getCurrNum = () => {
    if (currNum == 0 || currNum == -1) return null;
    return currNum;
  }

  return (
    <div className="relative min-h-screen min-w-screen bg-red-ts">
      <header className="flex flex-row justify-center pt-2 pb-5 lg:pb-10 space-x-4">
        <img className="h-24 lg:h-full" src={allTooRedLogo}/>
        <div className='flex flex-col items-center justify-center font-inlander text-4xl lg:text-64 lg:leading-[4rem] text-center text-white'>
          <h1>the lucky one</h1>
          <h1>bingo</h1>
        </div>
      </header>
      <div className='flex flex-row justify-center space-x-2 lg:space-x-4'>
        <div className='flex font-rethink bg-white rounded-2xl lg:rounded-3xl justify-center items-center w-[36%]'>
          <p className='text-gray-ts text-5xl lg:text-10xl'>
            {getCurrNum()}
          </p>
        </div>
        <div className='font-rethink bg-white rounded-2xl text-xl lg:text-4xl lg:rounded-3xl justify-center w-[36%] lg:pb-4'>
          <h2 className='text-center text-red-ts font-bold lg:py-4'>
            NÚMEROS JÁ SORTEADOS
          </h2>
          <div className='grid grid-cols-5 grid-rows-6 h-40 lg:h-80'>
          {currList.map((_num, i, arr) => 
            <p key={i} className='text-black font-rethink font-bold text-center'>
              {arr[arr.length - i - 1]}
            </p>
          )}
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <button className='text-red-ts font-rethink rounded-2xl text-2xl lg:text-4xl font-bold bg-yellow-ts px-5 lg:px-10 py-3 lg:py-6 my-3 lg:my-6' onClick={handleDrawNewNumber}>
          SORTEAR NOVO NÚMERO
        </button>
      </div>
      <div className='absolute space-x-4 right-5 bottom-5 text-white font-rethink font-bold'>
          <button className='flex flex-row space-x-4 justify-center items-center' onClick={handleRestart}>
            <img src={refreshIcon}/>
            <p>Reiniciar Bingo</p>
          </button>
      </div>
    </div>
  )
}

export default App
