// import console = require("console");

let baseURL="http://13.235.76.131:8080/jsv"

let bodyObj=(method,data,authToken='')=>{
    return({
        method:method,
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization":authToken
        },
        body:JSON.stringify(data)
    })
}

const serverRoutes={
    getOTPApi:async(params)=> await fetch(baseURL+'/user/getOtp',bodyObj('POST',params)),
    loginApi:async(params)=>await fetch(baseURL+'/user/login',bodyObj('POST',params)),
    userRegistration:async(params,authToken)=>await fetch(baseURL+'/user/save',bodyObj('POST',params,authToken)),
    userInfo:async(params,authToken)=>await fetch(baseURL+'/user/update',bodyObj('POST',params,authToken))
}

export default serverRoutes;