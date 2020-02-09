$(".dramatic-list li").each(function() {
    $(this).html($(this).html().replace(/^(\w+)/, '<span class="number">$1</span>'));
})