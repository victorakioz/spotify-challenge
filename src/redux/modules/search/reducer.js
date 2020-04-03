export default function search(state = [], action) {
  switch (action.type) {
    case 'SEARCH':
      sessionStorage.setItem('search', action.e.target.value);
      return [ ...state, action.e.target.value ];
    default:
      return state;
  }
}