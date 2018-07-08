import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    ContentComponent,
    ContentListComponent,
    ContentUploadComponent,
    ContentDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
