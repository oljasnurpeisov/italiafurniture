var myMap,myMap2;function init(){myMap=new ymaps.Map("map_1",{center:[43.904388,12.859186],zoom:17});var a=new ymaps.Placemark([43.904388,12.859186],{balloonContent:"ул. Ставропольская, 132",hintContent:"ул. Ставропольская, 132"},{iconImageHref:"/sites/default/files/img/design/map_marker.svg",iconImageSize:[23,32],iconImageOffset:[-20,-50]});myMap.geoObjects.add(a),myMap.controls.add("zoomControl",{bottom:5,left:5}),myMap2=new ymaps.Map("map_2",{center:[43.61200407456846,39.732781499999966],zoom:17});var e=new ymaps.Placemark([43.61200407456846,39.732781499999966],{balloonContent:"ул. Ставропольская, 132",hintContent:"ул. Ставропольская, 132"},{iconImageHref:"/sites/default/files/img/design/map_marker.svg",iconImageSize:[23,32],iconImageOffset:[-20,-50]});myMap2.geoObjects.add(e),myMap2.controls.add("zoomControl",{bottom:5,left:5})}ymaps.ready(init);