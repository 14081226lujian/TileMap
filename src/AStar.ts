class AStar {
          //待查列表
		  _openList: MapNode[] = [];
          //已查列表
		  _closedList: MapNode[] = [];  
          //最终路径
		  _path: MapNode[] = [];
		  _grid: Grid;
		  _startNode: MapNode;
		  _endNode: MapNode;
          //设置启发函数
	      _heuristic: Function = this.diagonal;
		  _straightCost: number = 1.0;
		  _diagCost: number = Math.SQRT2;

	      public findPath(grid: Grid): Boolean {
			  
			  this._grid = grid;
			  this._openList = new Array();
			  this._closedList = new Array();
			  this._startNode = this._grid._startNode;
			  this._endNode = this._grid._endNode;
			  this._startNode.g = 0;
			  this._startNode.h = this._heuristic(this._startNode);
			  this._startNode.f = this._startNode.g + this._startNode.h;
			  return this.search();
			}

			//一直到找到路为止
			public search(): Boolean {
				var currentNode: MapNode = this._startNode;
				while (currentNode != this._endNode) {
					//保证节点不在地图外
					var startX: number = Math.max(0, currentNode.x - 1);
					var endX: number = Math.min(this._grid._numCols - 1, currentNode.x + 1);
					var startY: number = Math.max(0, currentNode.y - 1);
					var endY: number = Math.min(this._grid._numRows - 1, currentNode.y + 1);
					for (var i: number = startX; i <= endX; i++) {
						for (var j: number = startY; j <= endY; j++) {
							var test: MapNode = this._grid._nodes[i][j];
							//检测节点为当前节点或不可通过时，无需计算代价
							if (test == currentNode || !test.walkable||!this._grid._nodes[currentNode.x][test.y].walkable||!this._grid._nodes[test.x][currentNode.y].walkable){
								continue;
							}
							var cost: number = this._straightCost;
							if (!((currentNode.x == test.x) || (currentNode.y == test.y))){
								cost = this._diagCost;
							}
							var g: number = currentNode.g + cost;
							var h: number = this._heuristic(test);
							var f: number = g + h;
							if (this.isOpen(test) || this.isClosed(test)) {
								if (test.f > f) {
									test.f = f;
									test.g = g;
									test.h = h;
									test.parent = currentNode;
								}
							}else{
								test.f = f;
								test.g = g;
								test.h = h;
								test.parent = currentNode;
								this._openList.push(test);
							}
						}
					}
					this._closedList.push(currentNode);  
					//待查列表
					if (this._openList.length == 0) {
						return false;
					}
					this._openList.sort(function (a, b) {
						return a.f - b.f;
					});
					currentNode = this._openList.shift() as MapNode;
				}
				this.buildPath();
				return true;
			}
			public isOpen(node: MapNode): Boolean {
				for (var i: number = 0; i < this._openList.length; i++) {
					if (this._openList[i] == node) {
						return true;
					}
				}
				return false;
			}
			
			public isClosed(node: MapNode): Boolean {
				for (var i: number = 0; i < this._closedList.length; i++) {
					if (this._closedList[i] == node) {
						return true;
					}
				}
				return false;
			}

			public buildPath(): void {
				this._path = new Array();
				var node: MapNode = this._endNode;
				this._path.push(node);
				while (node != this._startNode){
					node = node.parent;
					this._path.unshift(node);  
				}
			}

			public manhattan(node: MapNode): number {
				return Math.abs(this._endNode.x - node.x) * this._straightCost + Math.abs(this._endNode.y - node.y) * this._straightCost;
			}
			public euclidian(node: MapNode): number {
				var dx: number = this._endNode.x - node.x;
				var dy: number = this._endNode.y - node.y;
				return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
			}
			
			public diagonal(node: MapNode): number {
				var dx: number = Math.abs(this._endNode.x - node.x);
				var dy: number = Math.abs(this._endNode.y - node.y);
				var diag: number = Math.min(dx, dy);
				var straight: number = dx + dy;
				return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
			}
		}