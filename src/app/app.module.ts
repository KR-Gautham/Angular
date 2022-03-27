import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { CareersComponent } from './components/careers/careers.component';
import { Router, RouterModule , Routes } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: 'services' , component: ServicesComponent} ,
  {path: 'careers' , component: CareersComponent},
  {path: 'message' , component: MessageComponent},
  {path: 'Home' , component:  HomeComponent},
  {path: 'contact' , component: ContactComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialMediaIconsComponent,
    BodyComponent,
    FooterComponent,
    ServicesComponent,
    CareersComponent,
    MessageComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

exports: [
  RouterModule,
]
