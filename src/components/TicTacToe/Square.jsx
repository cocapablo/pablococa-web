import React from 'react';
import { useState } from 'react';
import "./TicTacToe.css";

export const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? "is-selected" : ""}`

    const handleClick = () => {
        
        updateBoard(index);
        
    }

    return (
        <div onClick={handleClick} className={className}>
            {children} 

        </div>
    )

}