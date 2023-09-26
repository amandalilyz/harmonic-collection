<script>
    // Function to play or pause the video based on scrolling
    function adjustVideoPlayback() {
        var video = document.getElementById("scroll-video");
        var scrollPosition = window.scrollY;
        var containerTop = videoContainer.offsetTop;
        var containerHeight = videoContainer.offsetHeight;
        var windowHeight = window.innerHeight;

        // Adjust these values to control when the video should play and pause
        var playTriggerPosition = containerTop - windowHeight / 2;
        var pauseTriggerPosition = containerTop + containerHeight - windowHeight / 2;

        if (scrollPosition >= playTriggerPosition && scrollPosition <= pauseTriggerPosition) {
            // Play the video when within the playTriggerPosition and pauseTriggerPosition
            video.play();
        } else {
            // Pause the video when outside of the playTriggerPosition and pauseTriggerPosition
            video.pause();
        }
    }

    var videoContainer = document.getElementById("video-container");

    // Attach the adjustVideoPlayback function to the scroll event
    document.addEventListener("scroll", adjustVideoPlayback);

    // Initialize video playback state
    adjustVideoPlayback();
</script>