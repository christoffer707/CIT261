import { makeRequest } from './authHelpers.js';
import { makeRequest } from './auth.js';

makeRequest('login', 'POST', {
   password: 'user1',
   email: 'user1@email.com'
   });

var Auth = new auth();

document.getElementById("submitbtn").addEventListener("click", function(){
   Auth.login();
 });