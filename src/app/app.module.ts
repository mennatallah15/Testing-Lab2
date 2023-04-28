import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Components/demo/demo.component';
import { CustomPipePipe } from './Pipes/custom-pipe.pipe';

@NgModule({
  declarations: [AppComponent, DemoComponent, CustomPipePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
