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
import { ServicesComponent } from './page/services/services.component';
import { ServiceEditComponent } from './page/service-edit/service-edit.component';
import { CountyEditComponent } from './page/county-edit/county-edit.component';
import { CityEditComponent } from './page/city-edit/city-edit.component';
import { SkillEditComponent } from './page/skill-edit/skill-edit.component';
import { ServiceNewComponent } from './page/service-new/service-new.component';
import { CountyNewComponent } from './page/county-new/county-new.component';
import { CityNewComponent } from './page/city-new/city-new.component';
import { SkillNewComponent } from './page/skill-new/skill-new.component';

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
    path: 'county/new',
    component: CountyNewComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'county/edit/:id',
    component: CountyEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'cities',
    component: CitiesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'city/new',
    component: CityNewComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'city/edit/:id',
    component: CityEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'skill/new',
    component: SkillNewComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'skill/edit/:id',
    component: SkillEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'service/new',
    component: ServiceNewComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'service/edit/:id',
    component: ServiceEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
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
