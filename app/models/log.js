export const LogST = {
  items: [],
};
// @ Mutations
function addLog(state, payload) {
  const items = [...state.items];
  items.push(payload);
  return { ...state, items };
}
export const LogMT = {
  addLog,
};
