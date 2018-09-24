var myMap;
var myMap2;
ymaps.ready(init);

function init () {

    myMap = new ymaps.Map('map_1', {
        center:[38.00998766783103,13.600574031646696],
        zoom:18
    });
    var myPlacemark11 = new ymaps.Placemark(
        [38.00998766783103,13.600574031646696], {
            balloonContent: 'ул. Ставропольская, 132',
            hintContent: 'ул. Ставропольская, 132'
        }, {
            iconImageHref: 'img/design/map_marker.svg',
            iconImageSize: [23, 32],
            iconImageOffset: [-20, -50]
        }
    );

    myMap.geoObjects.add(myPlacemark11);
    myMap.controls.add('zoomControl', { bottom: 5, left: 5 });


    myMap2 = new ymaps.Map('map_2', {
        center:[43.61200407456846,39.732781499999966],
        zoom:17
    });
    var myPlacemark12 = new ymaps.Placemark(
        [43.61200407456846,39.732781499999966], {
            balloonContent: 'ул. Ставропольская, 132',
            hintContent: 'ул. Ставропольская, 132'
        }, {
            iconImageHref: 'img/design/map_marker.svg',
            iconImageSize: [23, 32],
            iconImageOffset: [-20, -50]
        }
    );

    myMap2.geoObjects.add(myPlacemark12);
    myMap2.controls.add('zoomControl', { bottom: 5, left: 5 });
}