(function( global ) { // global is simply the name of the parameter inside the function body --
  //anonymous function which will be invoked immediately
  "use strict" ;   //meaning that all the variables are in strict mode : can't be used without declaring i.e without var keyword

  //class Cell
  function Cell( config ) {
    this.$el = config.$element;
    this.x = config.x;
    this.y = config.y;
  }

  //class Grid
  function Grid( config ) {
    this.grid = [];
    this.cells = [];
    this.rowsCount = config.rows;
    this.colsCount = config.cols;
    this.rows = [];
    this.cols = [];
    if( config.render ) {
      this.placeholder = config.render.placeholder;
      this.render();
    }
  }

  //container called Grid.prototype for common methods and properties
  Grid.prototype = {
    createCell: function( config ) {
      return new Cell( config );
    },

    getCellAt: function(x, y) {
      if(!this.grid[y]) {
        console.warn("No such Y coordinates: %i (grid size is: x[%i], y[%i])", y, this.colsCount, this.rowsCount);
        //%i is similar to %i for integer in cpp
        return false;
      }
      if ( !this.grid[y][x]) {
        console.warn("No such X coordinates: %i (grid size is: x[%i], y[%i])", x, this.colsCount, this.rowsCount);
        return false;
      }
      return this.grid[y][x];
    },

    render: function( options ) {
      if( options && options.placeholder) {
        this.placeholder = options.placeholder;
      }
      this.$placeholder = $(this.placeholder);
      if(!this.placeholder || this.$placeholder.length == 0) {
        console.error("Placeholder is not present");
        return;
      }
      var i, j, $row, $cell, cell, cellId = 0;
      for( i = 0; i < this.rowsCount; i += 1) {
        this.grid[i] = [];
        $row = $('<div class = "row"></div>').prependTo(this.$placeholder);
        for( j = 0; j < this.colsCount; j += 1) {
          $cell = $('<div class = "cell"></div>').appendTo($row);
          cell = this.createCell({$element: $cell, x: j, y: i});
          this.grid[i].push(cell);
          this.cells.push(cell);
        }
      }
      //rows
      var self = this;
      this.grid.forEach( function( row ) { self.rows.push(row); });
    }
  };

  global.Grid = Grid;

}(window));  //parameter passed to the outermost function which will be called global inside the function
