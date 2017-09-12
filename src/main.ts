import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app/app.component';
import { CarPartsComponent} from './app/car-parts.component';

import { FormsModule } from '@angular/forms'; 
import { RacingDataService } from './app/racing-data.services';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [AppComponent, CarPartsComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  bootstrap: [AppComponent],
  providers: [RacingDataService]
})

class AppModule {

}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));