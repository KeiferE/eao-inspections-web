import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Injectable} from '@angular/core';

const Parse: any = require('parse');

Parse.initialize(environment.parseId, environment.parseKey);
Parse.serverURL = environment.parseURL;
Parse.masterKey = environment.parseMasterKey;

@Injectable()
export class AdminService {
  user = new Parse.User();
  constructor(private router: Router) {
    this.user = Parse.User.current();
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      const teamQuery = new Parse.Query('Team');
      teamQuery.equalTo('userId', this.user.userId);

      const q = new Parse.Query('User');
      q.matchesKeyInQuery('teamId', 'teamId', teamQuery, {
        success: function (results) {
          resolve(results);
        },
        error: function (error) {
          reject(error.message);
        }
      });
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      const userQuery = new Parse.Query('User');
      userQuery.find({
        success: function (results) {
          resolve(results);
        },
        error: function (error) {
          reject(error.message);
        }
      });
    });
  }

  getArchivedUsers() {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('User');
      query.equalTo('isActive', false);
      query.find({
        success: function (results) {
          resolve(results);
        },
        error: function (error) {
          reject(error.message);
        }
      });
    });
  }

  getActiveUsers() {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('User');
      query.equalTo('isActive', true);
      query.find({
        success: function (results) {
          resolve(results);
        },
        error: function (error) {
          reject(error.message);
        }
      });
    });
  }

  getSuperAdminStatus(permission: string) {
    if (permission === "superadmin") {
      return true;
    }
    return false;
  }

  getAdminStatus(permission: string) {
    if (permission === "admin") {
      return true;
    }
    return false;
  }

  createUser(firstName: string,
             lastName: string,
             email: string,
             password: string,
             team: string,
             permission: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Parse.Role);
      const user = new Parse.User();
      user.set('isActive', true);
      user.set('isAdmin', this.getAdminStatus(permission));
      user.set('isSuperAdmin', this.getSuperAdminStatus(permission));
      user.set('firstName', firstName);
      user.set('username', email);
      user.set('lastName', lastName);
      user.set('password', password);
      user.set('email', email);
      user.set('publicEmail', email);
      user.set('permission', permission);
      user.set('team', team);
      user.save(null, {
        success: function (results) {
          query.equalTo('name', permission);
          query.first().then((obj) => {
            obj.getUsers().add(results);
            obj.save().then(object => {
              resolve(object);
            }, error => {
              reject(error.message);
            });
          });
        },
        error: function (object, error) {
          reject(error.message);
        }
      });
    });
  }

  updateUser(userId: string,
             firstName: string,
             lastName: string,
             email: string,
             permission: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Parse.User);
      query.get(userId, {
        success: function (user) {
          user.set('isAdmin', this.getAdminStatus(permission));
          user.set('isSuperAdmin', this.getSuperAdminStatus(permission));
          user.set('firstName', firstName);
          user.set('lastName', lastName);
          user.set('email', email);
          user.set('permission', permission);
          user.set('publicEmail', email);
          user.save(null, { useMasterKey: true }).then((object) => {
            resolve(object);
          }, (error) => {
            reject(error.message);
          });
          resolve(user);
        },
        error: function (object, error) {
          reject(error.message);
        }
      });
    });
  }

  archiveUser(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Parse.User);
      query.get(userId, {
        success: function (user) {
          user.set('isActive', false);
          user.save(null, {useMasterKey: true}).then(object => {
            resolve(object);
          }, error => {
            reject(error.message);
          });
        },
        error: function (object, error) {
          reject(error.message);
        }
      });
    });
  }

  unArchiveUser(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('User');
      query.get(userId, {
        success: function (user) {
          user.set('isActive', true);
          user.save(null, {useMasterKey: true}).then(object => {
            resolve(object);
          }, error => {
            reject(error.message);
          });
        },
        error: function (object, error) {
          reject(error.message);
        }
      });
    });
  }

  createTeam(teamName: string, color: string) {
    return new Promise((resolve, reject) => {
      const team = new Parse.Object('Team');
      team.set('name', teamName);
      team.set('color', color);
      team.set('isActive', true);
      team.save()
      .then(result => {
        console.log(result);
        resolve(result);
      }, error => {
        reject(error.message);
      });
    });
  }

  updateTeam(teamId: string,
    teamName: string,
    color: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('Team');
      query.get(teamId, {
        success: function (team) {
          team.set('name', teamName);
          team.set('color', color);
          team.save(null, { useMasterKey: true }).then((object) => {
            resolve(object);
          }, (error) => {
            reject(error.message);
          });
          resolve(team);
        },
        error: function (object, error) {
          reject(error.message);
        }
      });
    });
  }

  getArchivedTeams() {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('Team');
      query.equalTo('isActive', false);
      query.find({
        success: function (results) {
          resolve(results);
        },
        error: function (error) {
          reject(error.message);
        }
      });
    });
  }

  getActiveTeams() {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('Team');
      query.equalTo('isActive', true);
      query.find({
        success: function (results) {
          resolve(results);
        },
        error: function (error) {
          reject(error.message);
        }
      });
    });
  }

  archiveTeam(teamId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('Team');
      query.get(teamId, {
        success: function (team) {
          team.set('isActive', false);
          team.save(null, { useMasterKey: true }).then(object => {
            resolve(object);
          }, error => {
            reject(error.message);
          });
        },
        error: function (object, error) {
          reject(error.message);
        }
      });
    });
  }

  unArchiveTeam(teamId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('Team');
      query.get(teamId, {
        success: function (team) {
          team.set('isActive', true);
          team.save(null, { useMasterKey: true }).then(object => {
            resolve(object);
          }, error => {
            reject(error.message);
          });
        },
        error: function (object, error) {
          reject(error.message);
        }
      });
    });
  }

  getReports() {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('Inspection');
      query.equalTo('adminId', this.user.id);
      query.find({
        success: function(results) {
          if (!results.length) {
            results = [results];
          }
          resolve (results);
        },
        error: function(error) {
          reject (error.message);
        }
      });
    });
  }

  archiveReport(reportId) {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query('Inspection');
      query.get(reportId, {
        success: function (report) {
          report.set('active', false);
          report.save();
          resolve(report);
        },
        error: function (object, error) {
          resolve(error.message);
        }
      });
    });
  }
}
