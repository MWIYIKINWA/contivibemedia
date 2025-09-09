

import whatsapp_logo from '../assets/images/logo-white.jpg'; // Update path
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import verified from '../assets/images/verified.png'


const WhatsAppChat = () => {

  
  const message = 'Hello! Ready to elevate your brand?';

 

  return (
    <>
     
      <FloatingWhatsApp 
         
         phoneNumber = "+256783694161"
         accountName='Contivibe Media'
         avatar = {whatsapp_logo}
         statusMessage='Typically Replies within 1 minute'
         chatMessage={message}
         placeholder='Type your message'
         allowClickAway
         notification
         notificationSound
         darkMode={false}
         

       />
      
    </>
  );
};

export default WhatsAppChat;
