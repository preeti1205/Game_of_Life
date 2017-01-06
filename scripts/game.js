var game = function(grid) {
  var r = grid.rowsCount;
  var c = grid.colsCount;

  for( var i = 0; i < r; i++) {
    for (var j = 0; j < c; j++) {
      //console.log("Grid at the beginning: ", grid.getCellAt(i, j).val, "for", i, j);
      var sum = findSum( i, j, grid, r, c);
      if (sum == 3) { //always 1
        if (grid.getCellAt(i, j).val == 0) grid.getCellAt(i, j).val = 2;
        else grid.getCellAt(i, j).val = 3;
      }
      if (sum == 4) { //stays as it is
        if (grid.getCellAt(i, j).val == 0) grid.getCellAt(i, j).val = 0;
        else grid.getCellAt(i, j).val = 3;
      }
      else if (grid.getCellAt(i, j).val == 0) grid.getCellAt(i, j).val = 0;
      else grid.getCellAt(i, j).val = 1;
      //console.log("This is 2 digit sum and result :", sum, grid.getCellAt(i, j).val, "for", i, j);
    }
  }

  for(var i = 0; i < r; i++) {
    for(var j = 0; j < c; j++) {
      //console.log("before: ", grid.getCellAt(i, j).val,i, j);
      (grid.getCellAt(i, j).val) >>= 1;
      //console.log(grid.getCellAt(i, j).val, i, j);
    }
  }
  return grid;
}

var findSum = function( i, j, grid, r, c) {
  var sum = 0;
  for(var x = i - 1; x <= i + 1; x++) {
    for(var y = j - 1; y <= j + 1; y++) {
      if (x >= 0 && x < r && y >= 0 && y < c) {
        //if (grid.getCellAt(x,y).$el.css("background") == "green")
          sum += ( grid.getCellAt(x, y).val & 1);
          console.log( (grid.getCellAt(x, y).val & 1), x, y);
        }
    }
  }
  console.log(sum, i, j, "final");
  return sum;
}
