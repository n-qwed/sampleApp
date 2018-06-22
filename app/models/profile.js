export const ProfileST = {
  uid: '',
};
// @ Queries
function getUid(state) {
  return `uid:${state.uid}`;
}
export const ProfileQR = {
  getUid,
};
// @ Mutations
function updateUid(state, payload) {
  return { ...state, uid: payload };
}
function resetUid(state) {
  return { ...state, uid: '' };
}
export const ProfileMT = {
  updateUid,
  resetUid,
};
