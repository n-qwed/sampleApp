import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createAggregate } from 'redux-aggregate';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ProfileST, ProfileMT } from './models/profile';

const middleware = [];

export function defineStore(reducer) {
  return createStore(
    combineReducers(reducer),
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

export const Profile = createAggregate(ProfileMT, 'profile/');

export const store = defineStore({
  profile: Profile.reducerFactory({ ...ProfileST, name: 'PROFILE' }),
});
