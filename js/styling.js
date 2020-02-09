$(".dramatic-list li").each(function() {
    $(this).html($(this).html().replace(/^(\w+)/, '<span class="number">$1</span>'));
})

$(window).unbind("scroll").scroll(function() {
    console.log('hi')

    scrollPercent = $(window).scrollTop() / ($(document).height() - $(window).height());
    $(".block-background").each(function() {
        $(this).css("background-position-y", scrollPercent * 300 + 500 + "px");
    })

})