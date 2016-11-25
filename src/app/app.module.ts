import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicLogoComponent } from './basic-logo/basic-logo.component';
import { LogoWithBindingsComponent } from './logo-with-bindings/logo-with-bindings.component';

import { LogoWithComponentsModule } from './logo-with-components/logo-with-components.module';
import { ChangingCanvasLogoModule } from './changing-canvas-logo/changing-canvas-logo.module';
import { AnimatedCanvasLogoModule } from './animated-canvas-logo/animated-canvas-logo.module';

import { AnimatedLogoCssComponent } from './animated-logo-css/animated-logo-css.component';
import { AnimatedLogoNganimateComponent } from './animated-logo-nganimate/animated-logo-nganimate.component';
import { AnimatedLogoGsapComponent } from './animated-logo-gsap/animated-logo-gsap.component';
import { BasicCanvasLogoComponent } from './basic-canvas-logo/basic-canvas-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLogoComponent,
    LogoWithBindingsComponent,
    AnimatedLogoCssComponent,
    AnimatedLogoNganimateComponent,
    AnimatedLogoGsapComponent,
    BasicCanvasLogoComponent,
  ],
  imports: [
    BrowserModule,
    LogoWithComponentsModule,
    ChangingCanvasLogoModule,
    AnimatedCanvasLogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
