// this import should be first in order to load some required settings (like globals and reflect-metadata)

import app = require('application');
import "reflect-metadata";

import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

app.on(app.launchEvent, function (args: app.ApplicationEventData) {
    console.log("-------------------------------------");

    let intent = args.android;
    if (intent) {
        let sub = intent.getStringExtra(android.content.Intent.EXTRA_SUBJECT);
        let txt = intent.getStringExtra(android.content.Intent.EXTRA_TEXT);
        console.log(sub);
        console.log(txt);
    }


    console.log("-------------------------------------");
})

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
