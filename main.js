

  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  /*var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-Form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');

  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);
  //show alert
  document.querySelector('.alert').style.display='block';

}
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
   
    email:email,
    subject:subject,
    message:message
  });
}
*/
// Initialize Firebase

  var config = {
    apiKey: "AIzaSyBR3Uuop_eRTeun3AL4g622tPydU5CjA-E",
    authDomain: "contactform-4476b.firebaseapp.com",
    databaseURL: "https://contactform-4476b.firebaseio.com",
    projectId: "contactform-4476b",
    storageBucket: "contactform-4476b.appspot.com",
    messagingSenderId: "1051425968245"
  };
  firebase.initializeApp(config);
  
/*document.getElementById('contactForm').addEventListener("submit" , getInformationFromHtml)


function getValue(id){return document.getElementById(id).value}

function getInformationFromHtml (e) {
  e.preventDefault()

  var name = getValue('name')

  sendDataToFirebase(name)

  document.getElementById('contactForm').reset()

}

var feedbacks = firebase.database().ref('feedbacks')

function sendDataToFirebase(name) {
  var feedback = feedbacks.push()

  feedback.set({
    nom : name
  })
}
*/



   document.getElementById('contactForm').addEventListener('submit',submitForm);

 function submitForm(e){
   e.preventDefault();

   var name = getValues('name');
   var email = getValues('email');
   var subject = getValues('subject');
   var message = getValues('message');

   ab3ith(name,email,subject,message);

     document.getElementById('contactForm').reset(); 
}

 function getValues(id){return document.getElementById(id).value;}

 var feedbacks = firebase.database().ref('feedbacks');

 function ab3ith(name,email,subject,message){
   var feedback = feedbacks.push();
  feedback.set({
     name : name,
     email: email,
    subject:subject,
    message: message,
    
   });
 }
 var auth = firebase.auth();

 var logOut=document.getElementById('submit');

     logOut.addEventListener('click', e=>{
        window.location.href="index.html";
        auth.signOut();
    
    alert.style.display = "none";
 })
    
 auth.onAuthStateChanged(firebaseUser =>{
     if(firebaseUser){ logOut.classList.remove('hide'); }
     else{ logOut.classList.add('hide')}
 })
