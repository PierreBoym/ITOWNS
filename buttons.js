
            // Inclinaison Sud
            var button_sud = document.getElementById('button_sud');
            button_sud.addEventListener("click", function(){
              var current_pos=globeView.controls.getCameraTargetGeoPosition();
			  console.log(current_pos);
              globeView.controls.setCameraTargetGeoPosition({longitude:current_pos._values[0], latitude:current_pos._values[1]-45}, true)
            });
			// Inclinaison Nord
            var button_nord = document.getElementById('button_nord');
            button_nord.addEventListener("click", function(){
              var current_pos=globeView.controls.getCameraTargetGeoPosition();
			  console.log(current_pos);
              globeView.controls.setCameraTargetGeoPosition({longitude:current_pos._values[0], latitude:current_pos._values[1]+45}, true)
            });
			// Inclinaison EST
            var button_est = document.getElementById('button_est');
            button_est.addEventListener("click", function(){
              var current_pos=globeView.controls.getCameraTargetGeoPosition();
			  console.log(current_pos);
              globeView.controls.setCameraTargetGeoPosition({longitude:current_pos._values[0]+90, latitude:current_pos._values[1]}, true)
            });
			// Inclinaison OUEST
            var button_OUEST = document.getElementById('button_OUEST');
            button_OUEST.addEventListener("click", function(){
              var current_pos=globeView.controls.getCameraTargetGeoPosition();
			  console.log(current_pos);
              globeView.controls.setCameraTargetGeoPosition({longitude:current_pos._values[0]-90, latitude:current_pos._values[1]}, true)
            });
            // Vue initiale
            var button_vi = document.getElementById('button_vue_initiale');
            button_vi.addEventListener("click", function(){
              var current_pos=globeView.controls.getCameraTargetGeoPosition();
			  console.log(current_pos);
              globeView.controls.setCameraTargetGeoPositionAdvanced({longitude: 2.588025, latitude: 48.841117, zoom:25, tilt:0}, true)
            });