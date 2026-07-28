import { Tool } from "../base/Tool.js";

import { exec } from "child_process";

export const openAppTool = new Tool({

    name:"open_app",

    description:"Open desktop applications",

    schema:{
        app:"string"
    },

    async execute(args){

        const app=args.app.toLowerCase();

        switch(app){

            case "chrome":

                exec("start chrome");

                return "Opening Chrome";

            case "vscode":

                exec("code");

                return "Opening VS Code";

            case "notepad":

                exec("notepad");

                return "Opening Notepad";

            case "calculator":

                exec("calc");

                return "Opening Calculator";

            default:

                return "Application not found.";

        }

    }

});