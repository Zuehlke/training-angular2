import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './components/app.component';
import { NavMenuComponent } from './components/navmenu.component';
import { HomeComponent } from './components/home.component';

import { NotificationService } from './services/notification.service';
import { AuthService } from './services/auth.service';

import { ExpenseModule } from '../expense/expense.module';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ExpenseModule,
        ToastModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
        providers:[
        AuthService,
        NotificationService
    ]
})
export class AppModuleShared {
}
