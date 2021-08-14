import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { UsersComponent } from './page/users/users.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RoleGuardService } from './service/role-guard.service';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UserNewComponent } from './page/user-new/user-new.component';
import { MapComponent } from './page/map/map.component';
import { WorkingHoursComponent } from './page/working-hours/working-hours.component';
import { CountiesComponent } from './page/counties/counties.component';
import { CitiesComponent } from './page/cities/cities.component';
import { SkillsComponent } from './page/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'user/new',
    component: UserNewComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'working-hours',
    component: WorkingHoursComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'counties',
    component: CountiesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cities',
    component: CitiesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'skills',
    component: SkillsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
