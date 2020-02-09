$(".dramatic-list li").each(function() {
    $(this).html($(this).html().replace(/^(\w+)/, '<span class="number">$1</span>'));
})

function parallax() {
    scrollPercent = $(window).scrollTop() / ($(document).height() - $(window).height());
    $(".block-background").each(function() {
        $(this).css("background-position-y", scrollPercent * 300 + 500 + "px");
    })
    setTimeout(parallax, 30)
}

$(document).ready(function() {
    parallax()
})