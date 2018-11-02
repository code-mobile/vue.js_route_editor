
new Vue({
	el: '#app',
	data: {
	message: '',
	currentPoint: '',
    points: [
	{
		text: ''
	}
	]	
	},
	methods: {
	  addPoint: function(){
		this.points.push({
			text: this.currentPoint
		});
		
		this.currentPoint='';
	}  
}
})

    function initMap(){
     //Map options
     var options = {
       zoom:14,
       center:{lat:55.742353,lng:37.808940}
     }
	  
	  
	  
    
      // New map
     var map = new google.maps.Map(document.getElementById('map'), options);
	 
	 
	 

      // Listen for click on map
     google.maps.event.addListener(map, 'click', function(event){
        // Add marker
      addMarker({coords:event.latLng});
      });

	  
	        function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        })
    };

}
	  
	  