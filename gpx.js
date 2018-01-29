itowns.GpxUtils.load('tmc.gpx', globeView.referenceCrs, {enablePin: true}).then(function (gpx) {
    if (gpx) {
        globeView.scene.add(gpx);
		
    }
});