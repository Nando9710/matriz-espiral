const spiralDiagonalSum = (md) => {
  //md es la dimension de la matriz

  const spiralMatrix = generateSpiralMatrix(md);

  const diagonalSumLeftToRight = calculateDiagonalSum(spiralMatrix, md, "left");
  const diagonalSumRightToLeft = calculateDiagonalSum(spiralMatrix, md, "right");
  
  const diagonalsSum = diagonalSumLeftToRight + diagonalSumRightToLeft
  
  return diagonalsSum
};

const generateSpiralMatrix = (md) => {
  
  if (md % 2 === 0)
    throw new Error("El numero debe ser impar, sino no hay centro de espiral");
  
  const squareDimension = Math.pow(md, 2);
  let number = squareDimension;
  let limit = md - 1;

  let rowUp = 0;
  let rowDown = limit;
  let columnRight = limit;
  let columnLeft = 0;

  let actualRow;
  let actualColumn;
  
  //creamos array mdXmd
  const mainArray = new Array(md);

  for (let i = 0; i < mainArray.length; i++) {
    mainArray[i] = new Array(md).fill("");
  }

  // comienza la generacion de la espiral
  while (number >= 1) {
    //1ra iteracion: Llenamos fila superior de derecha a izquierda
    actualRow = rowUp;
    for (let i = columnRight; i >= columnLeft; i--) {
      mainArray[actualRow][i] = number;
      number--;
    }

    rowUp++;

    if (number === 1) break;

    //2da iteracion: Lenamos columna izquierda de abajo a arriba
    actualColumn = columnLeft;
    for (let i = rowUp; i <= rowDown; i++) {
      mainArray[i][actualColumn] = number;
      number--;
    }

    columnLeft++;

    //3ra iteracion: Lenamos fila inferior de izquierda a derecha
    actualRow = rowDown;
    for (let i = columnLeft; i <= columnRight; i++) {
      mainArray[actualRow][i] = number;
      number--;
    }

    rowDown--;

    //4ta iteracion: Llenamos columna derecha de abaja a arriba
    actualColumn = columnRight;
    for (let i = rowDown; i >= rowUp; i--) {
      mainArray[i][actualColumn] = number;
      number--;
    }

    columnRight--;
  }

  return mainArray;
};

const calculateDiagonalSum = (matrix, md, direction) => {
  let sum = 0;
  let column;

  
  if (direction === "right") column = md - 1;
  if (direction === "left") column = 0;
  
  matrix.forEach((el, row) => {
    sum += matrix[row][column];
    
    if (direction === "right") column--;
    if (direction === "left") column++;
  });

  return sum;
};

const result = spiralDiagonalSum(1003);
console.log(result);
