function styleDramaticLists() {
    $(".dramatic-list li").each(function() {
        $(this).html($(this).html().replace(/^(\w+)/, '<span class="number">$1</span>'))
    })
}

function parallax() {
    scrollPercent = $(window).scrollTop() / ($(document).height() - $(window).height())

    $(".block-background").each(function() {
        $e = $(this)
        positionY = Math.round(scrollPercent * $e.height()/2 - $e.width() + $e.height()/2)
        $e.css("background-position-y", positionY + "px")
    })
}

var debounceTimer
function debounce(func) {
    if (debounceTimer) {
        window.clearTimeout(debounceTimer)
    }
    debounceTimer = window.setTimeout(func, 10)
}

$(document).ready(function() {
    parallax()
    styleDramaticLists()
})
$(window).scroll(function() {
    debounce(parallax)
})
$(window).resize(parallax)