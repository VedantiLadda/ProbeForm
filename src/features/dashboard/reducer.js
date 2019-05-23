export default function dashboard(
  defaultStore = { permissions: [], modal: '', allPermissions: [], allTypes: [] },
  action
) {
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
    case 'GOT_ALL_PERMISSSIONS':
      return {
        ...defaultStore,
        allPermissions: action.data
      };
    case 'GOT_ALL_TYPES':
      return {
        ...defaultStore,
        allTypes: action.data
      };
    default:
      return defaultStore;
  }
  return defaultStore;
}
