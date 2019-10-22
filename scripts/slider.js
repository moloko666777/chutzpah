$(document).ready(function () {
    $('.dictionary-page__content').slick({


        responsive: [
            {
                breakpoint: 2561,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    arrows: false,
                    slidesToShow: 1.2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: false,
                    arrows: false,
                    slidesToShow: 2.2
                }
            },
            {
                breakpoint: 1365,
                settings: {
                    infinite: false,
                    arrows: false,
                    slidesToShow: 3.2
                }
            }
        ]
    });
});