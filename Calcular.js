		

		function Calcularvelo(){
			var dist, tempo, velomedia;

			dist = document.getElementById('distancia').value;
			tempo = document.getElementById('tempo').value;
			velomedia = dist/tempo;

			console.log(velomedia);
			if(velomedia === Infinity){
				velomedia = 0;
			}

			
			document.getElementById('velocidade').value = velomedia + " (m/s)";
		
		}