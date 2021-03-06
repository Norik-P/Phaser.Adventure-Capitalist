import { Game } from "../../Game";

import { State } from "../State";
import { StateInterface } from "../StateInterface";

export class MenuState extends State implements StateInterface {

    public music: any = null;

    constructor(
        public game: Game
    ) {
        super();
    }

    preload() {

    }

    create() {

        var bg = this.game.add.tileSprite(
            0,
            0,
            this.game.camera.width,
            this.game.camera.height,
            "menu_bg"
        );

        var start = this.game.add.button(this.game.world.centerX, 200, "start");
        var help  = this.game.add.button(this.game.world.centerX, 300, "help");
        var logo  = this.game.add.button(75, 50, "logo");

        if (this.music === null) {
            this.music = this.game.add.audio("bgm", 1, true);
            this.music.play();
        }

        logo.scale.setTo(.9, .9);
        help.scale.setTo(.5, .5);
        start.scale.setTo(.5, .5);

        help.anchor.x  = Math.round(help.width * 0.5) / help.width;
        start.anchor.x = Math.round(start.width * 0.5) / start.width;

        bg.fixedToCamera = true;

        start.onInputOver.add((start: any) => {
            start.scale.setTo(.55, .55);
            start.anchor.x = Math.round(start.width * 0.5) / start.width;
        });
        start.onInputOut.add(() => {
            start.scale.setTo(.5, .5);
            start.anchor.x = Math.round(start.width * 0.5) / start.width;
        });
        start.onInputDown.add(() => {
            this.music.stop();
            this.game.state.start("GameState");
        });

        help.onInputOver.add((help: any) => {
            help.scale.setTo(.55, .55);
            help.anchor.x = Math.round(help.width * 0.5) / help.width;
        });
        help.onInputOut.add(() => {
            help.scale.setTo(.5, .5);
            help.anchor.x = Math.round(help.width * 0.5) / help.width;
        });
        help.onInputDown.add(() => {
            this.game.state.start("HelpState");
        });
    }

}
