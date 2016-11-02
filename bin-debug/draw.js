var Grid = (function () {
    function Grid(numCols, numRows) {
        this._numCols = numCols;
        this._numRows = numRows;
        this._nodes = new Array();
        for (var i = 0; i < this._numCols; i++) {
            this._nodes[i] = new Array();
            for (var j = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new MapNode(i, j);
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    p.getNode = function (x, y) {
        return this._nodes[x][y];
    };
    p.setEndNode = function (x, y) {
        this._endNode = this._nodes[x][y];
    };
    p.getEndNode = function () {
        return this._endNode;
    };
    p.setStartNode = function (x, y) {
        this._startNode = this._nodes[x][y];
    };
    p.getStartNode = function () {
        return this._startNode;
    };
    p.setWalkable = function (x, y, value) {
        this._nodes[x][y].walkable = value;
    };
    p.getNumCols = function () {
        return this._numCols;
    };
    p.getNumRows = function () {
        return this._numRows;
    };
    return Grid;
}());
egret.registerClass(Grid,'Grid');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.init(data);
    }
    var d = __define,c=Tile,p=c.prototype;
    p.init = function (data) {
        this.x = data.x * MyMap.SIZE;
        this.y = data.y * MyMap.SIZE;
        this.image = data.image;
        var bitmap = new egret.Bitmap();
        bitmap.width = 64;
        bitmap.height = 64;
        bitmap.texture = RES.getRes(this.image);
        this.addChild(bitmap);
    };
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
var MapNode = (function () {
    function MapNode(x, y) {
        this.costMultiplier = 1.0;
        this.x = x;
        this.y = y;
    }
    var d = __define,c=MapNode,p=c.prototype;
    return MapNode;
}());
egret.registerClass(MapNode,'MapNode');
//# sourceMappingURL=draw.js.map