import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { appFeatureKey, getReducers } from './store/app.reducer';
import { BaseComponent } from './01. inheritance/base/base.component';
import { SubComponent } from './01. inheritance/sub/sub.component';
import { Sub2Component } from './01. inheritance/sub2/sub2.component';
import { DarkThemeComponent } from './02. composition and services/dark-theme/dark-theme.component';
import { LightThemeComponent } from './02. composition and services/light-theme/light-theme.component';
import { SupermarketComponent } from './03. composition and observables/supermarket/supermarket.component';
import { CartComponent } from './03. composition and observables/cart/cart.component';
import { ImbissComponent } from './04. composition and decorators/imbiss/imbiss.component';
import { IceCardComponent } from './04. composition and decorators/ice-card/ice-card.component';
import { PaletteComponent } from './bonus: composition in services/palette/palette.component';
import { BaseThemeComponent } from './02. composition and services/base-theme/base-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SubComponent,
    Sub2Component,
    DarkThemeComponent,
    LightThemeComponent,
    SupermarketComponent,
    CartComponent,
    ImbissComponent,
    IceCardComponent,
    PaletteComponent,
    BaseThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(getReducers),
    StoreModule.forFeature(appFeatureKey, getReducers),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
