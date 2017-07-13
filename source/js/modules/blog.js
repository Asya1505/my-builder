/**
 * Created by Nik on 12.07.2017.
 */
$(document).on('scroll', scrollPageFixMenu);
var main = $('.blog__right-content'),
    wrapMenu = $('.blog__left-content');

if(typeof main.offset()) {
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
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
}