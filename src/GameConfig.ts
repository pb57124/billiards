/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import Ball from "./script/Ball"
import Game from "./script/Game"
import GameControl from "./script/GameControl"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=640;
    static height:number=1136;
    static scaleMode:string="fixedwidth";
    static screenMode:string="vertical";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="game/Game.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=true;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/Ball.ts",Ball);
        reg("script/Game.ts",Game);
        reg("script/GameControl.ts",GameControl);
    }
}
GameConfig.init();