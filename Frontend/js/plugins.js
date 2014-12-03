//TODO: move to plugin
(function($) {
    $.fn.responsiveTabs = function() {
        var _this = this

        this.find('.Sections-Anchor').click(function(e){
            var parent = $(this).parents('.js-sections').eq(0);
            e.preventDefault();
            var panelId = $(this).attr('href');

            if ($(this).hasClass('isActive') && !parent.children('.Sections-Tabs').is(":visible")) {
                $(this).removeClass('isActive');
                $(panelId).removeClass('isActive');
            } else {
                parent.children('.Sections-Tabs').children('.Sections-Tab').children('.Sections-Anchor').removeClass('isActive');
                parent.children('.Sections-AccordionTitle').children('.Sections-Anchor').removeClass('isActive');
                $(this).addClass('isActive');
                
                parent.children('.Sections-Panel').removeClass('isActive');
                $(panelId).addClass('isActive');
            }
        });

        // If tabs, activate first tab
        if ( _this.find('.Sections-Tabs').is(":visible") ) {
            _this.find('.Sections-Anchor').eq(0).click();
        }
        return this;
    };
}( jQuery ));


var onReadyPlugins = function() {
    audiojs.events.ready(function() {
        path = '/_Resources/Static/Packages/Sfi.Sfi/Built/';
        var as = audiojs.createAll({
            imageLocation: path + 'player-graphics.gif',
            swfLocation: path + 'audiojs.swf',
        });
    });
    $('.js-SitemapMenu-Toggle').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.js-SitemapMenu').toggleClass('isActive');
    });
    $('body').click(function(e){
        $('.js-SitemapMenu').removeClass('isActive');
    });
    $('.js-SitemapMenu-SectionsWrap').click(function(e){
        e.stopPropagation();
    });

	$('.js-sections').responsiveTabs();

// TODO: optimize carousel init code
    $('.js-carousel-1x').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev icon-left-open">Назад</button>',
        nextArrow: '<button type="button" class="slick-next icon-right-open">Вперед</button>'
    });

    $('.js-carousel-2x').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev icon-left-open">Назад</button>',
        nextArrow: '<button type="button" class="slick-next icon-right-open">Вперед</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.js-carousel-3x').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev icon-left-open">Назад</button>',
        nextArrow: '<button type="button" class="slick-next icon-right-open">Вперед</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

$(document).ready(function () {
	onReadyPlugins();
});


if (typeof document.addEventListener === 'function') {
	document.addEventListener('Neos.PageLoaded', function(event) {
		onReadyPlugins();
	}, false);
}