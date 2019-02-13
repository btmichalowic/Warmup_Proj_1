//No-lose minimax algorithm

const HUMAN= 2;
const COMPUTER = 1;
const SIDE = 3

const RESULT = '';

const hum_move = 'X'
const cpu_move = 'O'


function intialize(board, move){
	var i = 0;
	for(i = 0; i<SIDE*SIDE; i++){
		board[i] = ' '

	for(i = 0; i<SIDE*SIDE; i++){
		moves[i] = i;
	}

}


function playTTT(turn){
	var board = [];
	board.length = 9;
	var moves = [];
	moves.length = 9;

	var move =0, x, y;


	while(gameOver(board) == false && move !=SIDE*SIDE){
		if(turn == COMPUTER){
			x = moves[move]/SIDE;
			y = moves[move] % SIDE;
			board[(x*y)-1] = COMPUTERMOVE
			move++;
			turn = HUMAN;
			
		}else if(turn == HUMAN){
			x = moves[move]/SIDE;
			y = moves[move] % SIDE;
			board[(x*y)-1] = HUMANMOVE
			move++;
			turn = COMPUTER;

		}
	}

	if(gameOver(board) == false && move == SIDE*SIDE){
		RESULT = 'D'

	}else{
		if(turn == COMPUTER)
			turn = HUMAN
		else if (turn == HUMAN)
			turn = COMPUTER
		declareWinner(turn);
	}
}


function declareWinner(whoseTurn){
	if(turn == COMPUTER)
		RESULT = "O"
	else if (turn == HUMAN)
		RESULT = "X"
	return RESULT;
}

function gameOver(board){
	return rowCrossed(board) || columnCrossed(board) || diagonalCrossed(board);

}

function diagonalCrossed(board){
	if(board[0] ==board[5] && board[5] == board[9] && board[0]!=' ') return true;

	if(board[7] ==board[5] && board[5] == board[2] && board[2] != ' ') return true;

	return false;
}

function columnCrossed(board){
	var i = 0;
	for(i = 0; i<SIDE; i++){
		if(board[0+i] == board[3+i] && board[6+i]==board[3+i] && board[0+i] != ' ') return true;

	}
	return false;
}

function rowCrossed(board){
	var i = 0;
	for(i = 0; i<SIDE*2+1; i+=3){
		if(board[i] == board[i+1] && board[i+1] == board[i+2] && board[i] !=' ') return true;

	}
	return false;
}

