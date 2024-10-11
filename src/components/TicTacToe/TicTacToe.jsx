import React, { useEffect } from 'react';
import { useState } from 'react';
import "./TicTacToe.css";
import { Square } from './Square';
import confetti from "canvas-confetti";
import { WINNER_COMBOS, TURNS } from '../constants.js';
import { checkWinnerFrom, checkEndGame } from '../logic/board.js';
import { WinnerModal } from './WinnerModal.jsx';
import { resetGameStorage, saveGameToStorage } from '../logic/storage/index.js';

export function TicTacToe() {
    

    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem("board");
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
    });

    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem("turn");
        return turnFromStorage ? turnFromStorage :  TURNS.X;
    }
    );

    const [winner, setWinner] = useState(null); //null = no hay ganador; false = hay un empate

    

    const updateBoard = (index) => {
        //No actualizo si el casillero está completo
        if (board[index] || winner) return;
        
        //Actualizar el tablero
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        //Cambiar el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn); 

        //Revisar si hay ganador
        const newWinner = checkWinnerFrom(newBoard);
        if (newWinner) {
            confetti();
            setWinner(newWinner);
        } else if (checkEndGame(newBoard)) {
            setWinner(false);  //Empate
        }
    }

    useEffect(() => {
        //Guardar aquí la partida
        saveGameToStorage({
            board,
            turn
        });
    }, [board, turn])

    
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);

        //localStorage
        resetGameStorage();
    }

    return (
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>Resetear Juego</button>
            <section className='game'>
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key = {index}
                                index = {index}
                                updateBoard={updateBoard}
                            >   
                                {board[index]}                      
                            </Square>
                        )
                    })
                }
            </section>

            <section className='turn'>
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
        
    )
}