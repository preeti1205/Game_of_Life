var game = function(grid) {
  var r = grid.x;
  var c = grid.y;

  for( var i = 0; i < r; i++) {
    for (var j = 0; j < c; j++) {
      var sum = findSum( i, j, grid, r, c);
      if (sum == 3) {
        if (grid[i][j] == 0) grid[i][j] = 2;
        else grid[i][j] = 3;
      }
      if (sum == 4) {
        if (grid[i][j] == 0) grid[i][j] = 0;
        else grid[i][j] = 3;
      }
      else if (grid[i][j] == 0) grid[i][j] = 0;
      else grid[i][j] = 1;
    }
  }

  for(var i = 0; i < r; i++) {
    for(var j = 0; j < c; j++) {
      grid[i][j] >> 1;
    }
  }

  return grid;
}

var findSum = function( i, j, grid, r, c) {
  var sum = 0;
  for(var x = i - 1; x <= i + 1; x++) {
    for(var y = j - 1; y <= j + 1; y++) {
      if (x >= 0 && x < r && y >= 0 && y < c)
          sum += grid[i][j];
    }
  }
  return sum;
}
