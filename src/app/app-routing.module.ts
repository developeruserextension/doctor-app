import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinzocdocComponent } from './about/joinzocdoc/joinzocdoc.component';
import { CareerListComponent } from './about/career-list/career-list.component';
import { ThankyouComponent } from './about/joinzocdoc/join-form/thankyou/thankyou.component';
import { SearchDocappComponent } from './search-docapp/search-docapp.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';

const routes: Route[]= [
  { path: '' , redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'search',component: SearchDocappComponent},
  { path: 'patient/s', component: ServicesComponent },
  { path: 'about',component: AboutComponent,},
  { path: 'about/join',component: JoinzocdocComponent},
  { path: 'about/join/thankyou', component: ThankyouComponent},
  { path: 'about/career-list', component:CareerListComponent },
  { path: 'signin', component:DoctorLoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
