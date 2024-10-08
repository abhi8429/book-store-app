import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public-components/home/home.component';
import { MaterialModule } from './shared/material.module';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';
import { counterFactory } from './shared/services/counter.factory';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
   counterFactory,
    TestService,
    {
      provide: 'appTitle',
      useValue: { title: 'this is title', descreption: 'this is descreption' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
