export default function login(defaultStore = {
  name: '', email: '', designation: '', type: '',
}, action) {
  switch (action.type) {
    case 'LOGIN_RESPONSE':
      if (action.res.data && !action.res.data.error) {
        const { data } = action.res;
        return {
          name: data.name,
          email: data.email,
          designation: data.designation,
          type: data.type,
        };
      } break;
    default: return defaultStore;
  }
  return defaultStore;
}
