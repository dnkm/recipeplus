import { OnInit, Component } from '@angular/core';
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "cookbookDetail",
    styleUrls: ["cookbookDetail-common.css"],
    templateUrl: "cookbookDetail.html",
})
export class CookbookDetailComponent implements OnInit {

    

    constructor(private page: Page) { }

    ngOnInit() {
        
    }

    
}