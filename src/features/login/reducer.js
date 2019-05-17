export function login(defaultStore={name:"",email:"",designation:""},action){
    switch(action.type){
        case "LOGIN_RESPONSE":
            if(action.res.data && !action.res.data.error){
                const data = action.res.data
                return {
                    name: data.name,
                    email: data.email,
                    designation: data.designation,
                    type: data.type
                }
            }
        default: return defaultStore;
    }
}