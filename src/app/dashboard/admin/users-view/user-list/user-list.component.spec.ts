import { AdminService } from './../../../../../services/admin.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ModalService } from '../../../../../services/modal.service';
import { UserListComponent } from './user-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let adminServiceStub;
  let modalServiceStub;

  beforeEach(async(() => {
    adminServiceStub = {
      getActiveUsers: jasmine.createSpy('getActiveUsers').and.callFake(() => {
        return {
          objectId: "1",
          isActive: true,
          isAdmin: false,
          isSuperAdmin: false,
        };
      })
    };

    modalServiceStub = {
      open(): Observable<any> {
        return Observable.of(true);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: AdminService, useValue: adminServiceStub },
        { provide: ModalService, useValue: modalServiceStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch active users on ngOnInit', () => {
    fixture.detectChanges();
    expect(adminServiceStub.getActiveUsers).toHaveBeenCalledTimes(1);
  });
});
