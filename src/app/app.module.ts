import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardDetailComponent } from './components/card/card-detail/card-detail.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { StatsComponent } from './components/card/card-detail/stats/stats.component';
import { TypeComponent } from './components/card/card-detail/type/type.component';
import { LogoComponent } from './components/menu/logo/logo.component';
import { MenuBarSocialComponent } from './components/menu/menu-bar-social/menu-bar-social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuComponent,
    CardDetailComponent,
    CardLabelComponent,
    StatsComponent,
    TypeComponent,
    LogoComponent,
    MenuBarSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
