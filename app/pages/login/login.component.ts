import { OnInit, Component } from '@angular/core';
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "login",
    styleUrls: ["login-common.css"],
    templateUrl: "login.html"
})
export class LoginComponent implements OnInit {
    constructor(private page: Page) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
}