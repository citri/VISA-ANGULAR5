import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NEED THIS FOR ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// IMPORT OUR ANGULAR MATERIAL MODULE
import { MaterialAppModule } from './ngmaterial.module';
// IMPORT OUR WEBAPI SERVICE
import { WebapiService } from './services/webapi.service';
// HTTP MODULE IS NEEDED
import { HttpClientModule} from '@angular/common/http';
// ROUTER MODULE IS NEEDED
import { RouterModule, Routes } from '@angular/router';

// DECLARE OUR ROUTES
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  //{ path: 'holiday-detail', component: HolidayDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
