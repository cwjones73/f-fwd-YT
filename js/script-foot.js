
           $(function() {
               $('.videolink').click(function(){
                   $('#overlay').fadeIn('fast',function(){
                       $('#box').animate({'top':'120px'},500);
                   });
               });
               $('#boxclose').click(function(){
                   $('#box').animate({'top':'-500px'},500,function(){
                       $('#overlay').fadeOut('fast', function(){console.log('here')});
                       deleteVideo();
                   });
               });
           });


    function deleteVideo() {
        document.getElementById('VideoPlayer').src='';
        $( "id" ).remove();
    }

    // LoadVideo - set the src of the videoplayer
    // start     - time that the video should start at (optional)
    // end       - time that the video should end (optional)
    function LoadVideo(start, end) {
        var src = 'https://www.youtube-nocookie.com/embed/-hoo_dIOP8k?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1'
        if (start) {
            src +='&amp;start='+start; // Append the start parameter to the source URL
        }
        if (end) {
            src += '&amp;end='+end;     // Append the end parameter to the source URL
        }
        document.getElementById('VideoPlayer').src = src;
    }

 // changes videoPlayer title
    $(document).ready(function () {
            $("#start").on('click', function (e) {
                e.preventDefault();
                $("#vTitle").append("<id>start</id>");
            });
            $("#middle").on('click', function (e) {
                e.preventDefault();
                $("#vTitle").append("<id>middle</span>");
            });
            $("#final").on('click', function (e) {
                e.preventDefault();
                $("#vTitle").append("<id>final</id>");
            });
    });
