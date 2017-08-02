import { OnInit, Component } from '@angular/core';
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "mainmenu",
    styleUrls: ["mainmenu-common.css"],
    templateUrl: "mainmenu.html"
})
export class MainmenuComponent implements OnInit {
    constructor(private page: Page) { }

    ngOnInit() {
    }
}