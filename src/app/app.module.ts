import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes and Guards
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core';
import { AppComponent } from '@app/core/containers';

@NgModule({
  declarations: [],
  imports: [AppRoutingModule, BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
