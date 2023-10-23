import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullpageModule } from './layouts/fullpage/fullpage.module';
import { SharedModule } from "./shared/shared.module";
import { FullpageadminModule } from './layouts/fullpageadmin/fullpageadmin.module';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DefaultModule,
        FullpageModule,
        SharedModule,
        FullpageadminModule,
        AdminModule
    ],
    exports:[
      SharedModule,
      AdminModule
    ]
})
export class AppModule { }
