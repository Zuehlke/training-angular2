import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app.component'
import { NavMenuComponent } from './components/navmenu.component';
import { HomeComponent } from './components/home.component';

/* TODO: Exercise 1 */

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [AppComponent, NavMenuComponent, HomeComponent],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        /* TODO: Exercise 1 */
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {}
