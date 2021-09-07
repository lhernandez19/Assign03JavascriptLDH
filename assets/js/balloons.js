$(document).ready(function(){
    var pageLoad = randomAttentionSeeker();
    $('#loadSeeker').removeClass().addClass('animate__animated').addClass(pageLoad);
    $('#birthday').pickadate({ format: 'mmmm, d' });
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

     $('.form-check-input').on('change', function () {
        $('#' + this.id + 'Img').css('visibility', 'visible')

        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');  
        });

     $('#allBalloons').on('change', function () {
        $('.form-check-input').each( function () {
            $("#" + this.id + "Img").css('visibility', 'visible')

            $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp') ;
        });   
    });

    $("#allBalloons").click(function(){    
       $('input:checkbox').not(this).prop('checked', this.checked);        
    });  

    $('#submit').on('click', function(e) {
        e.preventDefault();
        if (!$('#red').is(':checked') && !$('#blue').is(':checked') && !$('#green').is(':checked')) {
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });

    $(document).on('keydown', (e) => {
        if (e.key == 'Escape') {
            $('#toast').toast('hide');
        }
    });

    $('.form-check-label').hover(function() {
        $('#loadSeeker').css('color', $(this).data('color'));
    }, function() {
        $('#loadSeeker').css('color', '');
    });
});

    function randomAttentionSeeker() {
        const attentionSeekers  = [
            "animate__heartBeat",
            "animate__rubberBand",
            "animate__swing",
            "animate__bounce",
        ];
        var differentIndex  = Math.floor(Math.random() * attentionSeekers .length);
        return attentionSeekers [differentIndex ];
    };

