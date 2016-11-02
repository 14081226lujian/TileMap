

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield:egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene():void {
    //var sky:egret.Bitmap = this.createBitmapByName("bg_jpg");
    //this.addChild(sky);
    //var stageW:number = this.stage.stageWidth;
    //var stageH:number = this.stage.stageHeight;
    //sky.width = stageW;
    //sky.height = stageH;
        var map = new MyMap();
        this.addChild(map);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
    abstract class StateMachine extends egret.DisplayObjectContainer{
    public idle:String = "STATE_IDLE";
    public move:String = "STATE_MOVEMENT";

    //private currentState:String = this.idle;
    
    //public transition(target:String):void {
        //this.currentState = target;
    //}
}

interface Idle {
    Idle():void;
}

interface Move{
    Move():void;
}

class Character extends StateMachine implements Idle,Move {
    
    private _mcData:any;
    private _mcTexture:egret.Texture;

    private currentState:String = this.idle;

    private role:egret.MovieClip;

    constructor(){
        super();
        this.load(this.initMovieClip);
        //alert("constructor");
    }

    private initMovieClip():void {

        var mcDataFactory = new egret.MovieClipDataFactory(this._mcData, this._mcTexture);
        this.role= new egret.MovieClip(mcDataFactory.generateMovieClipData("20150422144640_7544"));
        this.role.anchorOffsetX = this.role.width / 2;
        this.role.anchorOffsetY = this.role.height*0.95;
        this.role.skewY = 180;
        this.addChild(this.role);
        
        this.Polling(this.currentState);
        
    }

    protected load(callback:Function):void {
        var count:number = 0;
        var self = this;
        
        var check = function () {
            count++;
            if (count == 2) {
                callback.call(self);
            }
        }
        
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(e) {
            var loader = e.currentTarget;

            this._mcTexture = loader.data;
            
            check();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        //var request = new egret.URLRequest("resource/assets/mc/animation.png");
        //loader.load(request);
        
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(e) {
            var loader = e.currentTarget;

            this._mcData = JSON.parse(loader.data);
            
            check();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //var request = new egret.URLRequest("resource/assets/mc/animation.json");
        //loader.load(request);
    }

    public Idle():void {
        console.log("idle");
        this.role.gotoAndStop(11);
    }

    public Move():void {
        console.log("move");
        this.role.gotoAndPlay(1);
        this.role.addEventListener(egret.Event.COMPLETE,function(e:egret.Event):void{
            this.role.gotoAndPlay(1);
        },this);
    }

    public Transition(target:String){
        this.currentState = target;
        this.Polling(this.currentState);
    }

    public Polling(cur:String):void{
        switch(this.currentState){
            case "STATE_IDLE":
                this.Idle();
                break;
            case "STATE_MOVEMENT":
                this.Move();
                break;
            default:
                break;
        }
    }
}






