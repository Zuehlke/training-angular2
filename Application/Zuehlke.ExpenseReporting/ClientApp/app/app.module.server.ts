import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from '../modules/app/app.module';
import { AppComponent } from '../modules/app/components/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        NoopAnimationsModule,
        AppModuleShared
    ]
})
export class AppModule {
}
