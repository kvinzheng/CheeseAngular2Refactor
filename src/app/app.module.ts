import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilteredButtonGroupComponent } from './filtered-button-group/filtered-button-group.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ResultTableComponent } from './result-table/result-table.component';
// import { ServerComponent } from './servers/server/server.component';
// import{ ServersService } from './servers/servers.service';

// const appRoutes: Routes = [
//   { path: '/', component: },
//   { path: '/secondPage', component: },
//   { path: '/register', component: }
// ]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FilteredButtonGroupComponent,
    CarouselComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(appRouters);
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
