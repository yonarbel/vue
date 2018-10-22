import axios from 'axios'
const API_KEY = "AIzaSyAr21HqXfYHALT9zJVVptF89jbnH4RyHe0"   
const apiClient = axios.create({  
  baseURL: `https://www.googleapis.com/identitytoolkit/v3/relyingparty`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
   signUp(payload){
    console.log("Auth service is preforming sing up")
    payload.returnSecureToken = true;
    console.log("Sending SignUP request",payload)
    return apiClient.post(`signupNewUser/?key=${API_KEY}`,payload)
  },
   login(payload) {
      console.log("Logging In",payload)
    return  apiClient.post(`verifyPassword/?key=${API_KEY}`,payload)
  }
}