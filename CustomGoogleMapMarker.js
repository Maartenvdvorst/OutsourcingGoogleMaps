function CustomMarker(lat,lng, map, name, goal) {
	//this.latlng = latlng;	
	this.lng = lng;
	this.lat = lat;
	this.name = name;
	this.goal = goal;	
	this.setMap(map);
	$.ajax({
		type: "POST",
		url : "markerDB.php",
		data:{name:this.name,lat: this.lat, lng : this.lng,funct : this.goal},
		//JSON.stringify(this.latlng)
		success: function (data)
		{
			console.log(data);

		},
		error:function(data){
			console.log(data);
		}
	});
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	var div = this.div;
	var srcImage = 'https://image.flaticon.com/icons/png/512/189/189662.png'
	if (!div) {
	
		div = this.div = document.createElement('div');
		div.setAttribute('id',this.name);
		div.setAttribute('data-lat',this.lat);
		div.setAttribute('data-lng',this.lng);
		
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';	
		div.style.backgroundImage = img;
		div.style.width = '33px';
		div.style.height = '33px';
		
		
		var img = document.createElement('img');
		img.src = srcImage;
		img.style.width = '33px';
		img.style.height = '33px';
        img.style.position = 'absolute';
        div.appendChild(img);
		
		div.className = 'marker';
		var divheight = 55;
		var breakline = true;
		var hovering = false;
		div.innerHTML = div.innerHTML + '<br>';
		div.innerHTML = div.innerHTML + '<br>';
		div.innerHTML = div.innerHTML + '<br>';
			
		if (typeof(self.name.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.name.marker_id;
		}
		
		div.onmouseover = function()
		{
			div.style.width = '150px';
			div.style.height = (divheight + 'px');
			div.style.border = '1px solid white';
			div.style.borderRadius = '15px';
			div.style.backgroundColor = 'white';
			
			if(breakline == false)
			{
				div.innerHTML = div.innerHTML + '<br>';
				div.innerHTML = div.innerHTML + '<br>';
				div.innerHTML = div.innerHTML + '<br>';
				breakline = true;
			}
			if(hovering === false){
				hovering = true;
				var latvar = div.getAttribute('data-lat');
				var lngvar = div.getAttribute('data-lng');
				
				$.ajax({
					type: "POST",
					url : "markerDB.php",
					
					data:{funct : "GetEigenschap", lat:latvar,lng:lngvar},
					success: function (data)
					{
						
						var json = JSON.parse(data);
						console.log(json);

						 json.forEach(function(a){
							
							var test = '<div style="font-size:18px;">'+String(a)+'</div>';
							div.innerHTML = div.innerHTML + test;
							divheight = divheight + 10;
							console.log(a);
						 })
						
						
					},
					error:function(data){
						console.log(data);
					}
				});
			}
			
		}
		
		div.onmouseout = function()
		{
			div.innerHTML = '';
			div.style.width = '33px';
			div.style.height = '33px';
			divheight = 55;
			div.style.backgroundColor = 'transparent';
			var img = document.createElement('img');
			
			img.src = srcImage;
			img.style.width = '33px';
			img.style.height = '33px';
			img.style.position = 'absolute';
			div.appendChild(img)
			
			breakline = false;
			hovering = false;
		}
		
		google.maps.event.addDomListener(div, "click", function(event) {
			divheight = divheight + 25;
			var eigenschap = prompt("Voeg een eigenschap toe");
			event.stopPropagation();
			test = '<div style="font-size:18px;">'+String(eigenschap)+'</div>';
			div.innerHTML = div.innerHTML + test;
			var latvar = div.getAttribute('data-lat');
			var lngvar = div.getAttribute('data-lng');
			
			$.ajax({
				type: "POST",
				url : "markerDB.php",
				
				data:{funct : "SetEigenschap", lat:latvar,lng:lngvar,eigenschap:String(eigenschap)},
				success: function (data)
				{
					console.log(data);
				},
				error:function(data){
					console.log(data);
				}
			});
		});
		
		
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	//changed shit form this.latlng to dis
	var point = this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(this.lat,this.lng));
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};