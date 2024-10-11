export const saveGameToStorage = ({board, turn}) => {
    //Guardar aquí la partida
    window.localStorage.setItem("board", JSON.stringify(board));
    window.localStorage.setItem("turn", turn);
}

export const resetGameStorage = () => {
    //localStorage
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");    
}