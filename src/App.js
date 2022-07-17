import Board from './Board';
import Info from "./Info";
import "./css/app.css";
import { useState } from 'react';

function App() {
  const [reset, setReset] = useState(false);

	const [winner, setWinner] = useState('');

	const resetBoard = () => {// Sets the reset property to true
    // which starts the chain
    // reaction of resetting the board
		setReset(true);
	}

	return (
		<div className="App">
			<div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
				<div className='winner-text'>{winner}</div>
				<button onClick={() => resetBoard()}>
					Reset to Play Again
				</button>
			</div>
			<Board reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
			<Info />
		</div>
	);
}

export default App;

