WL.registerComponent('gltf loading', {
    glbFile: {type: WL.Type.String, default: 'gltf/InfoSessionP3V5.gltf'},
    scale: {type: WL.Type.Float, default: 1000.0}
}, {
    start: function() {
        WL.scene.append(this.glbFile).then((obj) => {
            obj.scale([this.scale, this.scale, this.scale]);
			console.log("here");
        })
        .catch((error) => {
            console.error("Failed to load GLB file:", error);
        });
    },
});