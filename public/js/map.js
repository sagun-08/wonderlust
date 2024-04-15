       
	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: JSON.parse(coordinates), // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    const marker = new mapboxgl.Marker({color:'black'})
    .setLngLat(JSON.parse(coordinates))  //Listing.geometry.cordinates
    .setPopup(
        new mapboxgl.Popup({offset:25}).setHTML(
            `<h5>Exact Location will be provided akter booking</h5>`
        )
    )
    .addTo(map);
    // console.log(coordinates)
    