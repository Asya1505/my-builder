// (function() {
//   'use strict';
//
//   // setTimeout(function() {
//   //   document.querySelector('.greating_picture').classList.add('m--show');
//   // }, 1000);
//     var card = document.querySelector(".card"),
//         btn = document.querySelector(".avtorization");
//
//     btn.addEventListener( "click", flipFn);
//
//     function flipFn(){
//         var c = card.classList;
//
//         c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
//     }
// })();
//

//гамбургер + валидация
$(document).ready(function(){
  $('.hamburger').click(function() {
      $(this).toggleClass('active');
      $('.nav__menu').show();
  });
  $('#sendlink').click(function() {
      if(!$('#inputName').val()){
          $('#errorInputName').show();
      }
      if(!$('#inputMail').val()){
          $('#errorInputMail').show();
      }
      if(!$('#inputText').val()){
          $('#errorInputText').show();
      }
      function func_sh() {
          $('#errorInputName').hide();
          $('#errorInputMail').hide();
          $('#errorInputText').hide();
      }
      setTimeout(func_sh, 3000);
  });
});

//--параллакс
var parallaxContainer = document.getElementById('parallax');


var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;

    var
        divider = 3 / 100,
        positionX = initialX * divider,
        positionY = initialY * divider,
        bottomPosition = (window.innerHeight / 2) * divider,
        transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
        image = parallaxContainer.firstElementChild;

    parallaxContainer.style.transform = transformString;
    image.style.bottom = '-' + bottomPosition + 'px';
};

window.addEventListener('mousemove', moveLayers);

//--пролистывание блога
$(document).on('scroll', scrollPageFixMenu);
var main = $('.blog__right-content'),
    wrapMenu = $('.blog__left-content');

function scrollPageFixMenu (e) {
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
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });


menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});


$(window).scroll(function(){

    var fromTop = $(this).scrollTop();


    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
});
//--слайдер

var aviatitle = {
    generate: function (string, block) {
        var wordsArray = string.split(' '),
            stringArray = string.split(''),
            sentence = [],
            word = '';

        block.text('');

        wordsArray.forEach(function (currentWord) {
            var wordsArray = currentWord.split('');

            wordsArray.forEach(function (letter) {
                var letterHtml = '<span class="letter-span">' + letter + '</span>';

                word += letterHtml;
            });

            var wordHTML = '<span class="letter-word">' + word + '</span>'

            sentence.push(wordHTML);
            word = '';
        });

        block.append(sentence.join(' '));

        // анимация появления
        var letters = block.find('.letter-span'),
            counter = 0,
            timer,
            duration = 500 / stringArray.length;

        function showLetters() {
            var currentLetter = letters.eq(counter);

            currentLetter.addClass('active');
            counter++;

            if (typeof timer !== 'undefined') {
                clearTimeout(timer);
            }

            timer = setTimeout(showLetters, duration);
        }

        showLetters();

    }
}
var Slider = function (container) {
    var nextBtn = container.find('.works-slider__control-btn_left'),
        prevBtn = container.find('.works-slider__control-btn_right'),
        items = nextBtn.find('.works-slider__control-item'),
        display = container.find('.works-slider__display'), // Витрина слайдера
        title = container.find('.subtitle'),
        skills = container.find('.works__content-desc'),
        link = container.find('.works__content-view'),
        itemsLength = items.length,
        duration = 500,
        flag = true;

    var timeout;

    this.counter = 0;

    // private Генерация разметки кнопки следующий слайд
    var generateMarkups = function () {
        var list = nextBtn.find('.works-slider__control-list'),
            markups = list.clone();

        prevBtn
            .append(markups)
            .find('.works-slider__control-item')
            .removeClass('active')
            .eq(this.counter + 1)
            .addClass('active');
    }
    // Вытащить данные из дата атрибутов для левой части слайдера
    var getDataArrays = function () {
        var dataObject = {
            pics: [],
            title: [],
            skills: [],
            link: []
        };

        $.each(items, function () {
            var $this = $(this);

            dataObject
                .pics
                .push($this.data('full'));
            dataObject
                .title
                .push($this.data('title'));
            dataObject
                .skills
                .push($this.data('skills'));
            dataObject
                .link
                .push($this.data('link'));
        });

        return dataObject;
    }

    var slideInLeftBtn = function (slide) {
        var reqItem = items.eq(slide - 1),
            activeItem = items.filter('.active');

        activeItem
            .stop(true, true)
            .animate({
                'top': '100%'
            }, duration);

        reqItem
            .stop(true, true)
            .animate({
                'top': '0%'
            }, duration, function () {
                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active')
                    .css('top', '-100%')
            });

    }

    var slideInRightBtn = function (slide) {
        var items = prevBtn.find('.works-slider__control-item'),
            activeItem = items.filter('.active'),
            reqSlide = slide + 1;

        if (reqSlide > itemsLength - 1) {
            reqSlide = 0;
        }

        var reqItem = items.eq(reqSlide);

        activeItem
            .stop(true, true)
            .animate({
                'top': '-100%'
            }, duration);

        reqItem
            .stop(true, true)
            .animate({
                'top': '0%'
            }, duration, function () {
                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active')
                    .css('top', '100%')
            });
    };

    var changeMainPicture = function (slide) {
        var image = display.find('.works-slider__display-pic');
        var data = getDataArrays();

        image
            .stop(true, true)
            .fadeOut(duration / 2, function () {
                image.attr('src', data.pics[slide]);
                $(this).fadeIn(duration / 2);
            });
    }

    var changeTextData = function (slide) {
        var data = getDataArrays();

        // название работы
        aviatitle.generate(data.title[slide], title, 'ru');

        // // описание технологий
        aviatitle.generate(data.skills[slide], skills, 'en');

        // ссылка
        link.attr('href', data.link[slide]);
    }

    // public
    this.setDefaults = function () {
        var _that = this,
            data = getDataArrays();

        // создаем разметку
        generateMarkups();

        // левая кнопка
        nextBtn
            .find('.works-slider__control-item')
            .eq(_that.counter - 1)
            .addClass('active');

        // правая кнопка
        prevBtn
            .find('.works-slider__control-item')
            .eq(_that.counter + 1)
            .addClass('active');

        // основное изображение
        display
            .find('.works-slider__display-pic')
            .attr('src', data.pics[_that.counter]);

        // текстовые описания
        changeTextData(_that.counter);

    };

    this.moveSlide = function (direction) {
        var _that = this;

        var directions = {
            next: function () {
                // закольцовывание слайдера
                if (_that.counter < itemsLength - 1) {
                    _that.counter++;
                } else {
                    _that.counter = 0;
                }
            },

            prev: function () {
                if (_that.counter > 0) {
                    _that.counter--;
                } else {
                    _that.counter = itemsLength - 1;
                }
            }
        };

        directions[direction]();

        if (flag) {
            flag = false;

            if (typeof timeout != 'undefined') {
                clearTimeout(timeout);
            }

            timeout = setTimeout(function () {
                flag = true;
            }, duration + 50);

            slideInLeftBtn(_that.counter);
            slideInRightBtn(_that.counter);
            changeMainPicture(_that.counter);
            changeTextData(_that.counter);
        }
    };
};

var slider = new Slider($('.works'));
slider.setDefaults();

$('.works-slider__control-btn_left').on('click', function (e) {
    e.preventDefault();
    slider.moveSlide('prev');
});

$('.works-slider__control-btn_right').on('click', function (e) {
    e.preventDefault();
    slider.moveSlide('next');
});

console.dir(slider);

// map
google.maps.event.addDomListener(window, 'load', init);

function init() {
    console.log('map');
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(54.7387621, 55.9720554),
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#243f6e"},{"visibility":"on"}]}]
    };


    var mapElement = document.getElementById('map');


    var map = new google.maps.Map(mapElement, mapOptions);


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}

