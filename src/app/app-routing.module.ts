import { SobreComponent } from './sobre/sobre.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'painel', component: PainelComponent,
    canActivate: [AuthGuard]
  },
    { path: 'sobre/:id', component: SobreComponent },
    { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
   
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
