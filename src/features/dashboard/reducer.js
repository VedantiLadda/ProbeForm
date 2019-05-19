export default function dashboard(defaultStore = { permissions: [] }, action) {
  switch (action.type) {
    case 'PERMISSIONS':
      if (action.res.data && !action.res.data.error) {
        const { data } = action.res;
        const permissionList = data.map(item => item.permission);
        return {
          permissions: permissionList,
        };
      } break;
    default: return defaultStore;
  }
  return defaultStore;
}
