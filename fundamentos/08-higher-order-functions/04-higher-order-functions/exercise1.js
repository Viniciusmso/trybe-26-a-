//Utilize o reduce para transformar uma matriz em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  let test = [];
  const flatten = (arrays) => {
    return arrays.reduce((array, outra) => {
        return array.concat(outra)
    })}

console.log(flatten(arrays));