import { AppState } from '@/app/store/state/app.state';
import { LookupsState } from '@/app/store/state/lookups.state';
import { PhotosState } from '@/app/store/state/photos.state';
import { ProfileState } from '@/app/store/state/profile.state';
import { UserState } from '@/app/store/state/user.state';

export * from './base.state';
export * from './lookups.actions';
export * from './lookups.state';
export * from './photos.actions';
export * from './photos.state';
export * from './profile.actions';
export * from './profile.state';
export * from './user.actions';
export * from './user.state';
export * from './app.actions';
export * from './app.state';

export const APP_STATES = [AppState, LookupsState, PhotosState, ProfileState, UserState];
