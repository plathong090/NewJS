function canMove(piece,fromSquare,toSquare) {
    // TEST : Befor
    console.log("\n");
    console.log("Befor : " + fromSquare.toLowerCase());
    console.log("Befor : " + toSquare.toLowerCase());

    const file = [];
    const rank = [];
    const bool = [];
    let ascii = null;
    let number = null;
    let correct = null;

    if (fromSquare != toSquare) {
        const square = [fromSquare,toSquare];

        for (let i = 0; i < square.length; i++) {
            file.push(square[i].charAt(0).toLowerCase());
            rank.push(parseInt(square[i].charAt(1)));

            const locationChar = ['a','b','c','d','e','f','g','h'];
            bool.push(locationChar.includes(file[i]) && (rank[i] >= 1 && rank[i] <= 8));
        }
 
        // TEST : After Split
        console.log("\n< --------- step 1 --------- >");
        console.log("After Spilt Char : " + file.join(' , '));
        console.log("After Spilt Num  : " + rank.join(' , '));
        console.log("After Spilt Bool : " + bool.join(' , '));

        ascii = Math.abs(file[0].charCodeAt(0) - file[1].charCodeAt(0));
        number = Math.abs(rank[0] - rank[1]);
        correct = bool[0] === true && bool[1] === true;
    }

    // TEST : After Check 
    console.log("\n< --------- step 2 --------- >");
    console.log("After Check Ascii : " + ascii);
    console.log("After Check Num   : " + number);
    console.log("After Check Bool  : " + correct);
    console.log();

    while (correct) {
        switch (piece.toLowerCase()) {
            case 'pawn':
                return ascii === 0 && number === 1 && rank[0] < rank[1];
            case 'knight':
                return (ascii !== 0 && number !== 0) && (ascii === 1 && number === 2) || (ascii === 2 && number === 1);
            case 'bishop':
                return ascii === number;
            case 'rook': 
                return ascii === 0 || number === 0;
            case 'queen':
                return ascii === number || ascii === 0 || number === 0;
            case 'king':
                return (ascii === 0 && number === 1) || (number === 0 && ascii === 1) || (ascii === 1 && number === 1);
            default: 
                return false;
        }
    }
    return false;
}

console.log(canMove("Rook","A8","H8"));
// console.log(canMove("Bishop","A7","G1"));
// console.log(canMove("Queen","C4","D6"));
// console.log(canMove("Pawn","C4","C5"));
// console.log(canMove("Knight","D4","F6"));
// console.log(canMove("King","F5","D3"));