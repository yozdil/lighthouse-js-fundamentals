const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function (moves) {
  let position = [0,0];
  for (const move of moves) {
    if (move === "north") {
      position[1]++; }
    else if (move === "south") {
      position[1]--; }
    else if (move === "west") {
      position[0]--; }
    else {
      position[0]++; }
  }
  return position;
}
  
  
finalPosition(moves);