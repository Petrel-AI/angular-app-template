import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@shared/services/auth/auth.service';
import { MockAuthService, mostUsedServices } from '@shared/test-utils';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [...mostUsedServices, { provide: AuthService, useClass: MockAuthService }],
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Petrel.Taxer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Petrel.Taxer');
  });
});
