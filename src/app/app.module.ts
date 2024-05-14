import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { MeanHeadingComponent } from './mean-heading/mean-heading.component';
import { ServicesComponent } from './services/services.component';
import { DesignComponent } from './design/design.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VideoComponent } from './video/video.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CONTACTUSComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SCRBtnComponent } from './scr-btn/scr-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    MeanHeadingComponent,
    ServicesComponent,
    DesignComponent,
    PortfolioComponent,
    VideoComponent,
    AboutComponent,
    StatisticsComponent,
    OurSkillsComponent,
    QuoteSectionComponent,
    PricingComponent,
    SubscribeComponent,
    CONTACTUSComponent,
    FooterComponent,
    SCRBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
