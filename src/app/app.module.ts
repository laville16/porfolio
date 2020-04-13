import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { NgTypedModule } from 'ng-typed';
import {NgxTypedJsModule} from 'ngx-typed-js';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CarsatComponent } from './carsat/carsat.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AnimeteoComponent } from './animeteo/animeteo.component';
import { CombavaComponent } from './combava/combava.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '', component: PortfolioComponent }, //localhost:4200
  { path: 'carsat', component : CarsatComponent},
  { path: 'animeteo', component : AnimeteoComponent},
  { path: 'combava', component : CombavaComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    CarsatComponent,
    MenuComponent,
    PortfolioComponent,
    AnimeteoComponent,
    CombavaComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    NgTypedModule,
    NgxTypedJsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
