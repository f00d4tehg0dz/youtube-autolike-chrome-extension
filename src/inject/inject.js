(function() {

    //Youtube seems to require a wait of 5 it seems. I referenced outadoc.fr extension to discover this.
    setTimeout(initialize, 5000);
    var checkedLike = false;

    function initialize() {
        ytplayer = document.getElementById("movie_player");
        ytplayer.getCurrentTime();


        if (checkedLike == true) {
            //put in case, more or less for testing.
            setInterval(loopTimer, 1000);
            console.log('true');
            initialize();
        } else {
            var LoopTimerID = setInterval(loopTimer, 1000);

            function loopTimer() {
                var playerstate = ytplayer.getCurrentTime();


                if ((playerstate > 7.0000) && (playerstate < 9.0000)) {
                    likeThisVideo();
                  //  console.log('false');
                    clearInterval(LoopTimerID);
                }
            }
            return true;

        }
    }

    function theVideoIsLiked() {
        var likeButton = document.getElementById("watch-like");
        // if watchlike is blank and doesn't have yt-uix-button-toggled, then tell me its off
        if (likeButton != null && likeButton.className.indexOf(
                "yt-uix-button-toggled") != -1) {
            return true;
        } else {
            return false;
        }
    }

    function likeThisVideo() {
        var likeButton = document.getElementById("watch-like");
        // now click watch-like
        likeButton.click();


    }
})();