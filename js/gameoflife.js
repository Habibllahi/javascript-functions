function hieghest(state = [],index){
  let hieghest = 0;
  if(state.length){
    state.forEach((value) => {
      if(value[index] > hieghest){
        hieghest = value[index];
      }
    });
  }
  return hieghest;
}

function lowest(state = [],index){
  let lowest = 10000000000000;
  if(state.length){
    state.forEach((value) => {
      if(value[index] < lowest){
        lowest = value[index];
      }
    });
  }else{
    lowest = 0;
  }
  return lowest;
}


function seed() {
  const args = [...arguments];
  return args;
}

function same([x, y], [j, k]) {
  let exact = false;
  if((x === j) && (y === k)){
    exact = true;
  }
  return exact;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  const [a,b] = cell;
  const found = this.find((value)=> {
    let [x,y] = value;
    return (a === x) && (b === y)
  });
  
  if(found){
    return true
  }else{
    return false
  }
}

const printCell = (cell, state) => {
  if(contains.call(state,cell)){
    return '\u25A3';
  }else{
    return '\u25A2';
  }
};

const corners = (state = []) => {
  const coners = {
    topRight: [0,0], 
    bottomLeft: [0,0]
  }
  coners.topRight = [hieghest(state,0), hieghest(state,1)]
  coners.bottomLeft = [lowest(state,0), lowest(state,1)]
  return coners;
}

const printCells = (state) => {

};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;