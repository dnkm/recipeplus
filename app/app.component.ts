import { Component } from "@angular/core";
import { Parser } from './shared/parser/parser';
import * as app from "tns-core-modules/application";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [Parser]
})
export class AppComponent {
    constructor(private parser: Parser) {
        app.on(app.launchEvent, function (args: app.ApplicationEventData) {
            console.log("v7-------------------------------------");

            let intent = args.android;
            if (intent) {
                let txt = intent.getStringExtra(android.content.Intent.EXTRA_TEXT);
                parser.parse(txt).subscribe(obj => console.dir(obj));
            }

            console.log("-------------------------------------");
        })
    }
}


