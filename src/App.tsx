import { MouseEventHandler, useState } from 'react';
import { BingoNumberGenerator } from './BingoNumberGenerator';
import './index.css';

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
    <div className="relative h-screen bg-red-ts">
      <header className="flex flex-row justify-center pt-2 pb-10">
        <img src="src/assets/all_too_red_logo.svg"/>
        <div className='flex items-center justify-center'>
          <h1 className='font-inlander text-64 w-4/5 leading-[4rem] text-center text-white'>the lucky one bingo</h1>
        </div>
      </header>
      <div className='flex flex-row justify-center space-x-4'>
        <div className='flex font-rethink bg-white rounded-3xl justify-center items-center w-[36%]'>
          <p className='text-gray-ts text-10xl'>
            {getCurrNum()}
          </p>
        </div>
        <div className='font-rethink bg-white rounded-3xl justify-center w-[36%] pb-4'>
          <h2 className='text-center text-red-ts text-4xl font-bold py-4'>
            NÚMEROS JÁ SORTEADOS
          </h2>
          <div className='grid grid-cols-5 grid-rows-5 h-80'>
          {currList.map((num, i, arr) => 
            <p key={i} className='text-black font-rethink font-bold text-4xl text-center'>
              {arr[arr.length - i - 1]}
            </p>
          )}
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <button className='text-red-ts font-rethink rounded-2xl text-4xl font-bold bg-yellow-ts px-10 py-6 my-6' onClick={handleDrawNewNumber}>
          SORTEAR NOVO NÚMERO
        </button>
      </div>
      <div className='absolute space-x-4 right-5 bottom-5 text-white font-rethink font-bold'>
          <button className='flex flex-row space-x-4 justify-center items-center' onClick={handleRestart}>
            <img src="src/assets/refresh_icon.svg"/>
            <p>Reiniciar Bingo</p>
          </button>
      </div>
    </div>
  )
}

export default App
