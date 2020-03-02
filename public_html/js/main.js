
//  MAIN JAVA SCRIPT



//  ANIMACIJA:
    function animation(){
        let screen = $(window).height();
        let scrollTop = $(window).scrollTop();
        
        $('.animation').each(function(){
            let position = $(this).offset().top;
            let delay = $(this).attr('data-delay');
            if(position < screen + scrollTop - 0){
               let animation = $(this).attr('data-animation');
               $(this).css('animation-delay', delay);
               $(this).addClass(animation);
           }
        });
    }
    
//  ----------------------------
    $(window).scroll(function(){
        animation();
    });
    animation();
//  ----------------------------

    
if ($('.contact-form').length > 0) {

        //FORM VALIDATION
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    }

                },
                messages: {

                    name: {
                        required: 'The Name* is required field.'
                    },
                    email: {
                        required: 'The Email* is required field.',
                        email: 'Please provide a valid Email address.'
                    },
                    message: {
                        required: 'The Message* is required field.'
                    }


                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }