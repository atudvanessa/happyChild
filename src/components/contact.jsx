import React from 'react'

function Contact() {
  return (
    <form>
    <div className="contact">
        <div className="font">
        <p>
        <h2> <b>Having difficulties?</b> </h2>
      </p>
      <p>
       <b> Send us a message.</b>
</p>
        <p>First Name</p>
        <input
          type="text"
        />
        <p>Last Name</p>
        <input
          type="text"
        />
        <p>Email</p>
        <input
          type="alphanumeric"
        />
         <p>How can we help you</p>
        <input
          type="text"
        /> 
        </div>
        <div className="flex">
          <p>
          
<a href="">Submit</a>
          </p>
          <ul>
          <li>submit request</li>
          <li>cancel request</li>
          </ul>
          </div> 
 <ul>
   <li>Need help to login as donor</li>
   <li>Need help to login as helper</li>
   <li>Which child is currently recieving help</li>
   <li>How to provide feedbacks</li>
 </ul>
 <div>
   <p>
     For more information contact us at;
   </p>
   <div className="lay">
     <p>email: atudagum1@gmail.com</p>
     <p>contact: 680832995 or 652671837 or 678610074</p>
   </div>
 </div>
    </div>
    </form>
  );

}
export default Contact;