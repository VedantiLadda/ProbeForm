import axios from 'axios';
export function editProfile(sapientId,name,email,type,designation){
    axios.post('http://localhost:5000/v1/apis/editEmployee',{sapientId,name,email,type,designation}).then(res=>{
        console.log(res);
    });
}