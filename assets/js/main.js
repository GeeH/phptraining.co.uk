$(document).ready(function() {
    // Scroll to fixed
    $('#nav-fixed').scrollToFixed();

    //Smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');


    $('.slimmenu').slimmenu(
        {
            resizeWidth: '767', /* Navigation menu will be collapsed when document width is below this size or equal to it. */
            initiallyVisible: false, /* Make main navigation menu initially visible on mobile devices without the need to click on expand/collapse icon. */
            collapserTitle: '' /* Collapsed menu title. */
        });
});
