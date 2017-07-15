/**
 * Created by Nik on 12.07.2017.
 */
var main = $('.blog__right-content'),
    wrapMenu = $('.blog__left-content');
if((typeof wrapMenu.val()) != 'undefined') {
    $(document).on('scroll', scrollPageFixMenu);
}

function scrollPageFixMenu(e) {
    var scroll = window.pageYOffset;

    if (scroll < main.offset().top) {
        wrapMenu.removeClass('fixed');
    } else {
        wrapMenu.addClass('fixed');
    }
}

var lastId,
    menu = $('.blok__bt'),
    menuItems = menu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });


menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

$(window).scroll(function () {

    var fromTop = $(this).scrollTop();


    var cur = scrollItems.map(function () {
        var h =$(this).offset().top - 44;
        if (h <= fromTop)
            return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "art1";

    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});