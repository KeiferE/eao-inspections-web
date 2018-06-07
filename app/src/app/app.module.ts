import { TeamService } from './../services/team.service';
import { EqualValidator } from './directives/equal-validator.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MyReportsComponent } from './dashboard/reports/my-reports/my-reports.component';
import { TeamReportsComponent } from './dashboard/reports/team-reports/team-reports.component';
import { ProfileComponent } from './dashboard/profile-view/profile.component';
import { SettingsComponent } from './dashboard/settings-view/settings.component';
import { ProfileCardComponent } from './reusables/profile-card/profile-card.component';
import { TeamCardComponent } from './reusables/team-card/team-card.component';
import { MyReportListComponent } from './dashboard/reports/my-reports/my-report-list/my-report-list.component';
import { InspectionViewComponent } from './reusables/inspection-view/inspection-view.component';
import { ElementViewComponent } from './reusables/element-view/element-view.component';
import { UsersViewComponent } from './dashboard/admin/users-view/users-view.component';
import { TeamsViewComponent } from './dashboard/admin/teams-view/teams-view.component';
import { ReportsViewComponent } from './dashboard/admin/reports-view/reports-view.component';
import { SearchViewComponent } from './dashboard/search-view/search-view.component';
import { UserCardComponent } from './reusables/user-card/user-card.component';
import { ManageTeamsViewComponent } from './dashboard/admin/teams-view/manage-teams-view/manage-teams-view.component';
import { TeamReportListComponent } from './dashboard/reports/team-reports/team-report-list/team-report-list.component';
import { AuthService } from '../services/auth.service';
import { AuthGuardService} from '../services/auth-guard.service';
import { RoleGuardService } from '../services/role-guard-service';
import { ReportListItemComponent } from './reusables/report-list-item/report-list-item.component';
import { ModalService } from '../services/modal.service';
import { NoRouteComponent } from './no-route/no-route.component';
import { NoContentComponent } from './reusables/no-content/no-content.component';
import { UserModalComponent } from './reusables/modals/user-modal/user-modal.component';
import { TeamModalComponent } from './reusables/modals/team-modal/team-modal.component';
import { ConfirmationModalComponent } from './reusables/modals/confirmation-modal/confirmation-modal.component';
import { UserListComponent } from './dashboard/admin/users-view/user-list/user-list.component';
import { ArchivedUsersComponent } from './dashboard/admin/users-view/archived-users/archived-users.component';
import { ArchiveModalComponent } from './reusables/modals/archive-modal/archive-modal.component';
import { ArchivedTeamsComponent } from './dashboard/admin/teams-view/archived-teams/archived-teams.component';
import { ArchivedInspectionsComponent } from './dashboard/admin/reports-view/archived-inspections/archived-inspections.component';
import { OrderByPipe } from './directives/orderby.pipe';
import { AdminTeamCardComponent } from './dashboard/admin/teams-view/admin-team-card/admin-team-card.component';
import { MemberModalComponent } from './reusables/modals/member-modal/member-modal.component';
import { ReportViewListComponent } from './dashboard/admin/reports-view/report-view-list/report-view-list.component';
import { ElementMediaComponent } from './reusables/element-view/element-media/element-media.component';
import { LoadingComponent } from './reusables/loading/loading.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordModalComponent } from './reusables/modals/password-modal/password-modal.component';
import { ForgotPasswordModalComponent } from './reusables/modals/forgot-password-modal/forgot-password-modal.component';
import {Ng2ImgMaxModule, Ng2ImgMaxService} from 'ng2-img-max';
import { PasswordChangeComponent } from './login/password-change/password-change.component';
import {FirstTimePasswordGuardService} from '../services/first-time-password-guard.service';
import {ProfileService} from '../services/profile.service';
import { LoadingService } from '../services/loading.service';
import { LoggedInGuardService } from '../services/logged-in-guard.service';
import { PaginationComponent } from './reusables/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    MyReportsComponent,
    TeamReportsComponent,
    ProfileComponent,
    SettingsComponent,
    ProfileCardComponent,
    TeamCardComponent,
    MyReportListComponent,
    InspectionViewComponent,
    ElementViewComponent,
    UsersViewComponent,
    TeamsViewComponent,
    ReportsViewComponent,
    SearchViewComponent,
    UserCardComponent,
    ManageTeamsViewComponent,
    TeamReportListComponent,
    ReportListItemComponent,
    NoRouteComponent,
    NoContentComponent,
    UserModalComponent,
    TeamModalComponent,
    ConfirmationModalComponent,
    UserListComponent,
    ArchivedUsersComponent,
    ArchiveModalComponent,
    ArchivedTeamsComponent,
    ArchivedInspectionsComponent,
    OrderByPipe,
    AdminTeamCardComponent,
    MemberModalComponent,
    ReportViewListComponent,
    LoadingComponent,
    ElementMediaComponent,
    DashboardComponent,
    PasswordModalComponent,
    EqualValidator,
    ForgotPasswordModalComponent,
    PasswordChangeComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({ timeOut: 10000, tapToDismiss: true}),
    BrowserAnimationsModule,
    ColorPickerModule,
    Ng2ImgMaxModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    FirstTimePasswordGuardService,
    RoleGuardService,
    ModalService,
    ProfileService,
    Ng2ImgMaxService,
    LoggedInGuardService,
    LoadingService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
