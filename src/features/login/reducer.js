export default function login(
  defaultStore = {
    sapientId: '',
    name: '',
    email: '',
    designation: '',
    type: ''
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_RESPONSE':
      if (action.res.data && !action.res.data.error) {
        const { data } = action.res;
        return {
          sapientId: data.sapientId,
          name: data.name,
          email: data.email,
          designation: data.designation,
          type: data.type
        };
      }
      break;
    case 'PROFILE_EDITED':
      if (action.data) {
        const { data } = action;
        return {
          sapientId: data.sapientId,
          name: data.name,
          email: data.email,
          designation: data.designation,
          type: data.type
        };
      }
      break;
    default:
      return defaultStore;
  }
  return defaultStore;
}
