        
			 $(function() {
                $('#activator').click(function(){
                    $('#overlay').fadeIn('fast',function(){
                        $('#box').animate({'top':'260px'},500);
                    });
                });
                $('#boxclose').click(function(){
                    $('#box').animate({'top':'30px'},500,function(){
                        $('#overlay').fadeOut('fast');
                    });
                });

            });
        