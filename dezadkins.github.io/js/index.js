
$(document).ready(function () {
  /** 1. Loader Spinner
   **************************************************************** **/
  window.addEventListener("load" , function() {
	
    const loader = document.querySelector(".overlay");
    
    loader.className += " hidden"; //class will change to "overlay hidden"
    
  });

  /** 2. Intiate wow js
   **************************************************************** **/
  new WOW().init();


  /** 3. Back to Top" Button
   **************************************************************** **/
  let btn = $('#btnTop');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 300);
  });


  /** 4. Smooth Scrolling
   **************************************************************** **/
  let scroll = new SmoothScroll('a[href*="#"]', { offset: 80, speed: 900 });


  /** 5. Active Link 
   **************************************************************** **/
  $(window).scroll(function () {

    let scrollLink = $('.scroll-link')

    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      let sectionOffset = $(this.hash).offset().top - 325;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })

  /** 6. Navbar toggle icon  --> 
 **************************************************************** **/
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });



  /** 7. Modal --> Keeps portfolio modals above the portfolio section. Need to finesse a little. 
 **************************************************************** **/

  $("body").on("click", ".modalClick", function () {

    // data-target id that corresponds to the matching modal id
    let modalBtn = $(this.id)

    modalBtn.modal("show");
    $("#portfolio").addClass("after_modal_appended");

    //removes the padding right and modal-open class from the body tag which bootstrap adds when a modal is shown
    // $('body').removeClass("modal-open")
    //   $('body').css("padding-right","");     
  });


  // Stops video from playing once modal is closed 
  $('#sfmModal').on('hidden.bs.modal', function (e) {
    $('#sfmModal iframe').attr("src", $('#sfmModal iframe').attr('src'));
  });

  //The code below will allows the modal to stay open for design and editing. Just change the modal id. Comment out when finished.
  // $('#sfmModal').modal('toggle')


  /** 8. Bootstrap Form Validation --> Do we need?
   **************************************************************** **/

  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      let forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      let validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


})

