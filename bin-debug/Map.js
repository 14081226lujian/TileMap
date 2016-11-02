var config = [
    { x: 0, y: 0, walkable: true, image: "grass_jpg" },
    { x: 0, y: 1, walkable: true, image: "grass_jpg" },
    { x: 0, y: 2, walkable: true, image: "grass_jpg" },
    { x: 0, y: 3, walkable: true, image: "grass_jpg" },
    { x: 0, y: 4, walkable: true, image: "grass_jpg" },
    { x: 0, y: 5, walkable: true, image: "grass_jpg" },
    { x: 0, y: 6, walkable: true, image: "grass_jpg" },
    { x: 0, y: 7, walkable: true, image: "grass_jpg" },
    { x: 0, y: 8, walkable: true, image: "grass_jpg" },
    { x: 0, y: 9, walkable: true, image: "grass_jpg" },
    { x: 1, y: 0, walkable: false, image: "tree_jpg" },
    { x: 1, y: 1, walkable: true, image: "grass_jpg" },
    { x: 1, y: 2, walkable: true, image: "grass_jpg" },
    { x: 1, y: 3, walkable: false, image: "tree_jpg" },
    { x: 1, y: 4, walkable: true, image: "grass_jpg" },
    { x: 1, y: 5, walkable: false, image: "grass_jpg" },
    { x: 1, y: 6, walkable: true, image: "grass_jpg" },
    { x: 1, y: 7, walkable: true, image: "grass_jpg" },
    { x: 1, y: 8, walkable: true, image: "grass_jpg" },
    { x: 1, y: 9, walkable: true, image: "grass_jpg" },
    { x: 2, y: 0, walkable: true, image: "grass_jpg" },
    { x: 2, y: 1, walkable: false, image: "tree_jpg" },
    { x: 2, y: 2, walkable: true, image: "grass_jpg" },
    { x: 2, y: 3, walkable: false, image: "card_jpg" },
    { x: 2, y: 4, walkable: false, image: "card_jpg" },
    { x: 2, y: 5, walkable: false, image: "card_jpg" },
    { x: 2, y: 6, walkable: false, image: "card_jpg" },
    { x: 2, y: 7, walkable: false, image: "card_jpg" },
    { x: 2, y: 8, walkable: false, image: "card_jpg" },
    { x: 2, y: 9, walkable: false, image: "card_jpg" },
    { x: 3, y: 0, walkable: true, image: "grass_jpg" },
    { x: 3, y: 1, walkable: true, image: "grass_jpg" },
    { x: 3, y: 2, walkable: true, image: "grass_jpg" },
    { x: 3, y: 3, walkable: true, image: "grass_jpg" },
    { x: 3, y: 4, walkable: true, image: "grass_jpg" },
    { x: 3, y: 5, walkable: true, image: "grass_jpg" },
    { x: 3, y: 6, walkable: true, image: "grass_jpg" },
    { x: 3, y: 7, walkable: true, image: "grass_jpg" },
    { x: 3, y: 8, walkable: true, image: "grass_jpg" },
    { x: 3, y: 9, walkable: false, image: "tree_jpg" },
    { x: 4, y: 0, walkable: true, image: "grass_jpg" },
    { x: 4, y: 1, walkable: true, image: "grass_jpg" },
    { x: 4, y: 2, walkable: true, image: "grass_jpg" },
    { x: 4, y: 3, walkable: false, image: "card_jpg" },
    { x: 4, y: 4, walkable: true, image: "grass_jpg" },
    { x: 4, y: 5, walkable: true, image: "grass_jpg" },
    { x: 4, y: 6, walkable: false, image: "card_jpg" },
    { x: 4, y: 7, walkable: true, image: "grass_jpg" },
    { x: 4, y: 8, walkable: false, image: "tree_jpg" },
    { x: 4, y: 9, walkable: true, image: "grass_jpg" },
    { x: 5, y: 0, walkable: true, image: "grass_jpg" },
    { x: 5, y: 1, walkable: false, image: "card_jpg" },
    { x: 5, y: 2, walkable: true, image: "grass_jpg" },
    { x: 5, y: 3, walkable: false, image: "card_jpg" },
    { x: 5, y: 4, walkable: true, image: "grass_jpg" },
    { x: 5, y: 5, walkable: true, image: "grass_jpg" },
    { x: 5, y: 6, walkable: false, image: "card_jpg" },
    { x: 5, y: 7, walkable: true, image: "grass_jpg" },
    { x: 5, y: 8, walkable: true, image: "grass_jpg" },
    { x: 5, y: 9, walkable: false, image: "tree_jpg" },
    { x: 6, y: 0, walkable: false, image: "card_jpg" },
    { x: 6, y: 1, walkable: false, image: "totem_jpg" },
    { x: 6, y: 2, walkable: false, image: "card_jpg" },
    { x: 6, y: 3, walkable: false, image: "card_jpg" },
    { x: 6, y: 4, walkable: true, image: "grass_jpg" },
    { x: 6, y: 5, walkable: false, image: "card_jpg" },
    { x: 6, y: 6, walkable: false, image: "totem_jpg" },
    { x: 6, y: 7, walkable: false, image: "card_jpg" },
    { x: 6, y: 8, walkable: false, image: "card_jpg" },
    { x: 6, y: 9, walkable: false, image: "card_jpg" },
    { x: 7, y: 0, walkable: true, image: "grass_jpg" },
    { x: 7, y: 1, walkable: false, image: "card_jpg" },
    { x: 7, y: 2, walkable: true, image: "grass_jpg" },
    { x: 7, y: 3, walkable: false, image: "card_jpg" },
    { x: 7, y: 4, walkable: true, image: "grass_jpg" },
    { x: 7, y: 5, walkable: true, image: "grass_jpg" },
    { x: 7, y: 6, walkable: false, image: "card_jpg" },
    { x: 7, y: 7, walkable: true, image: "grass_jpg" },
    { x: 7, y: 8, walkable: true, image: "grass_jpg" },
    { x: 7, y: 9, walkable: true, image: "grass_jpg" },
    { x: 8, y: 0, walkable: true, image: "grass_jpg" },
    { x: 8, y: 1, walkable: true, image: "grass_jpg" },
    { x: 8, y: 2, walkable: true, image: "grass_jpg" },
    { x: 8, y: 3, walkable: false, image: "card_jpg" },
    { x: 8, y: 4, walkable: true, image: "grass_jpg" },
    { x: 8, y: 5, walkable: true, image: "grass_jpg" },
    { x: 8, y: 6, walkable: false, image: "card_jpg" },
    { x: 8, y: 7, walkable: true, image: "grass_jpg" },
    { x: 8, y: 8, walkable: true, image: "grass_jpg" },
    { x: 8, y: 9, walkable: true, image: "grass_jpg" },
    { x: 9, y: 0, walkable: true, image: "grass_jpg" },
    { x: 9, y: 1, walkable: true, image: "grass_jpg" },
    { x: 9, y: 2, walkable: true, image: "grass_jpg" },
    { x: 9, y: 3, walkable: true, image: "grass_jpg" },
    { x: 9, y: 4, walkable: true, image: "grass_jpg" },
    { x: 9, y: 5, walkable: true, image: "grass_jpg" },
    { x: 9, y: 6, walkable: true, image: "grass_jpg" },
    { x: 9, y: 7, walkable: true, image: "grass_jpg" },
    { x: 9, y: 8, walkable: true, image: "grass_jpg" },
    { x: 9, y: 9, walkable: true, image: "grass_jpg" },
];
var MyMap = (function (_super) {
    __extends(MyMap, _super);
    function MyMap() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=MyMap,p=c.prototype;
    p.init = function () {
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        var player = new egret.Bitmap();
        var playerX = 0;
        var playerY = 0;
        var move = false;
        player.width = 64;
        player.height = 64;
        player.texture = RES.getRes("frog_jpg");
        this.addChild(player);
        var playerTween;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            playerTween = egret.Tween.get(player);
            console.log("ismove:" + move);
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / MyMap.SIZE);
            var gridY = Math.floor(localY / MyMap.SIZE);
            var grid = new Grid(10, 10);
            for (var i = 0; i < config.length; i++) {
                grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
            }
            var aStar = new AStar();
            grid.setStartNode(playerX, playerY);
            grid.setEndNode(gridX, gridY);
            if (aStar.findPath(grid)) {
                var path = aStar._path;
                if (!move) {
                    for (var i = 0; i < path.length; i++) {
                        move = true;
                        playerX = gridX;
                        playerY = gridY;
                        playerTween.to({ x: path[i].x * MyMap.SIZE, y: path[i].y * MyMap.SIZE }, 500, egret.Ease.sineIn).call(function () {
                            if (Math.abs(player.x - (gridX * MyMap.SIZE)) < 10 && Math.abs(player.y - (gridY * MyMap.SIZE)) < 10) {
                                console.log("到达目的地");
                                move = false;
                            }
                        });
                    }
                }
                else {
                    egret.Tween.removeTweens(playerTween);
                    console.log("remove");
                    move = false;
                }
            }
            else {
                console.log("无法到达");
            }
        }, this);
    };
    MyMap.SIZE = 64;
    return MyMap;
}(egret.DisplayObjectContainer));
egret.registerClass(MyMap,'MyMap');
//# sourceMappingURL=Map.js.map