/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { AuthService } from '../services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub, RouterStub } from '../../../utils/testutils';

describe('The HomeComponent', () => {

    let homeComponent: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let pageTitle: HTMLElement;
    let authService: AuthService;

    beforeAll(()=>{
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [AuthService, { provide: Router, useClass: RouterStub }]
        });

        fixture = TestBed.createComponent(HomeComponent);
        homeComponent = fixture.componentInstance;

        pageTitle = fixture.debugElement.query(By.css('.panel-heading')).nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(pageTitle.textContent).toContain(homeComponent.pageTitle);
    });

    it('should display a different test title', () => {
        homeComponent.pageTitle = 'Test Title';
        fixture.detectChanges();
        expect(pageTitle.textContent).toContain('Test Title');
    });
});