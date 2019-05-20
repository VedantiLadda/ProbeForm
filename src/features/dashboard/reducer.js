export default function dashboard(defaultStore = { permissions: [], modal: '' }, action) {
  switch (action.type) {
    case 'PERMISSIONS':
      if (action.res.data && !action.res.data.error) {
        const { data } = action.res;
        const permissionList = data.map(item => item.permission);
        return {
          ...defaultStore,
          permissions: permissionList
        };
      }
      break;
    case 'SET_MODAL':
      return {
        ...defaultStore,
        modal: action.permission
      };
    default:
      return defaultStore;
  }
  return defaultStore;
}
