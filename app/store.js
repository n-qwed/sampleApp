import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createAggregate } from 'redux-aggregate';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ProfileST, ProfileMT } from './models/profile';
import { LogST, LogMT } from './models/log';

const middleware = [];

export function defineStore(reducer) {
  return createStore(
    combineReducers(reducer),
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

export const Profile = createAggregate(ProfileMT, 'profile/');
export const Log = createAggregate(LogMT, 'log/');

export const store = defineStore({
  profile: Profile.reducerFactory({ ...ProfileST, name: 'PROFILE' }),
  log: Log.reducerFactory({ ...LogST, name: 'LOG' }),
});
