import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { select } from '@ngneat/elf';
import { NHostService, User } from 'core/services/nhost';
import gql from 'graphql-tag';
import { Observable, from, of, switchMap, tap } from 'rxjs';

import { userStore } from './user.state';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private hostClient: NHostService) {
    hostClient.auth.onAuthStateChanged((event, session) => {
      this.setUser(session?.user);
    });

    this.setUser(this.hostClient.auth.getUser());
  }

  user$ = userStore.pipe(select((x) => x.user));

  private setUser(user: User | null | undefined) {
    userStore.update((state) => ({
      ...state,
      user: user,
    }));
  }

  isAuthenticatedAsync() {
    return this.hostClient.auth.isAuthenticatedAsync();
  }

  login(payload: { username: string; password: string }) {
    return new Observable((observer) => {
      this.hostClient.auth
        .signIn({
          email: payload.username,
          password: payload.password,
        })
        .then((results) => {
          if (results.error) {
            observer.error(new Error(results.error.message));
          } else {
            observer.next(results.session);
          }
        })
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  logOut() {
    return from(this.hostClient.auth.signOut());
  }

  signUp(payload: { email: string; password: string }) {
    return from(
      this.hostClient.auth.signUp({
        email: payload.email,
        password: payload.password,
      })
    );
  }

  changeEmail(payload: { email: string }) {
    return from(
      this.hostClient.auth.changeEmail({
        newEmail: payload.email,
      })
    ).pipe(
      tap((results) => {
        if (results.error) {
          throw new Error(results.error.message);
        } else of(null);
      })
    );
  }

  changePassword(payload: { newPassword: string }) {
    return from(
      this.hostClient.auth.changePassword({
        newPassword: payload.newPassword,
      })
    );
  }

  resetPassword(payload: { email: string }) {
    return from(
      this.hostClient.auth.resetPassword({
        email: payload.email,
      })
    );
  }

  confirmPassword(payload: { ticket: string; password: string }) {
    return from(
      this.hostClient.auth.changePassword({
        ticket: payload.ticket,
        newPassword: payload.password,
      })
    );
  }

  sendVerificationEmail(payload: { email: string }) {
    return from(
      this.hostClient.auth.sendVerificationEmail({
        email: payload.email,
      })
    );
  }

  deleteUser() {
    const user = this.hostClient.auth.getUser();
    const DELETE_USER = gql`
      mutation {
        deleteUser(id: $id) {
          id
        }
      }
    `;

    return from(this.hostClient.graphql.request(DELETE_USER, { id: user?.id })).pipe(
      tap((results) => {
        if (results.error) {
          throw new Error('Error deleting user');
        } else of(null);
      }),
      switchMap(() => this.logOut())
    );
  }
}
