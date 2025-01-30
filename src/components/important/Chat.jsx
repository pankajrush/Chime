import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    if (!window.Tawk_API) {  // Prevents duplicate script loading
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/679b407c3a84273260772d51/1iir77pu8';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);
    }
  }, []);

  return null; // No UI needed, since Tawk.to handles it
};

export default Chat;


// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/679b407c3a84273260772d51/1iir77pu8';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->