import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MatNavBarPaginationModule } from "mat-nav-bar-pagination";
// import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule } from "@angular/material";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";
import { routerModule } from "./app.routing";
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent, SixthComponent],
  imports: [
    BrowserModule,
    MatNavBarPaginationModule,
    MatTabsModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
