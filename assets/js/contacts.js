document
                      .getElementById("osm_canvas")
                      .contentDocument.write(
                        '<link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.min.css" />'
                      );
                    document
                      .getElementById("osm_canvas")
                      .contentDocument.write(
                        '<script src = "https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.min.js"><\/script>'
                      );
                    document
                      .getElementById("osm_canvas")
                      .contentDocument.write(
                        '<div id ="osm-map" style = "width:100%; height:100%;"></div>'
                      );
                    document
                      .getElementById("osm_canvas")
                      .contentDocument.write(
                        '<script>var mapOptions={center:[54.722118, 20.4699469],zoom:15,attributionControl: true}; var map = new L.map("osm-map", mapOptions); map.attributionControl.setPrefix(\'&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright" rel="nofollow noopener noreferrer">OpenStreetMap</a>\'); var layer = new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");map.addLayer(layer);let marker = new L.Marker([54.722118, 20.4699469]);marker.addTo(map).bindPopup(\'4, Коммунальная улица\'); marker.on(\'mouseover\',function(ev) {marker.openPopup();});<\/script>'
                      );
                    document
                      .getElementById("osm_canvas")
                      .contentDocument.close();