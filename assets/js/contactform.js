(function($) {
  "use strict";

  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });

  $(document).ready(function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyA7eemmVrebWjsHrLJFR_KOSJjVGBZ9tng",
      authDomain: "qart-bce9d.firebaseapp.com",
      databaseURL: "https://qart-bce9d.firebaseio.com",
      projectId: "qart-bce9d",
      storageBucket: "qart-bce9d.appspot.com",
      messagingSenderId: "43845262284",
      appId: "1:43845262284:web:bd03f08bb823f565e0db69",
      measurementId: "G-1VTFV269LP"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    //reference messages collection
    var messagesRef = firebase.database().ref('messages');

    //FORM SUBMIT
    // document.getElementById('contactForm').addEventListener('submit', submitForm);
    document.querySelector('#contactForm').addEventListener('submit', submitForm);

    function submitForm(e) {
      e.preventDefault();

      var name = getInputVal('name');
      var email = getInputVal('email');
      var message = getInputVal('message');

      saveMessage(name, email, message);

      document.querySelector('.alert').style.display='block';
      setTimeout(function(){
        document.querySelector('.alert').style.display='none';
      }, 50000);

      document.getElementById('contactForm').reset();
    }

    function getInputVal(id) {
      return document.getElementById(id).value;
    }

    function saveMessage(name, email ,message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name : name,
        email : email,
        message : message,
      });
    }

    //Video Animation

    function _OnBigScreen() {
      console.log("Big Screen setup!");
      $(".product_bl").hover(
        function() {
          $(this).children("video").get(0).play();
        },
        function() {
          $(this).children("video").get(0).pause();
          //video restart on hover again
          $(this).children("video").get(0).currentTime = 0;
        });
    }

    function _OnMobileScreen() {
      console.log("Mobile setup!");
      $(window).scroll(function() {
        $('video').each(function() {
          if ($(this).is(":in-viewport")) {
            $(this)[0].play();
          } else {
            $(this)[0].pause();
          }
        });
      });
    }

    function init() {
      if (window.innerWidth > 600) {
        return (_OnBigScreen());
      } else {
        return (_OnMobileScreen());
      }
    }

    // Video Animations
    init();

  });

  AOS.init();
})(jQuery);
