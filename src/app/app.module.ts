import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes and Guards
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core';

// Base components
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';

@NgModule({
  declarations: [AppComponent, CallbackComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
