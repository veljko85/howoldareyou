			function calculate(){
				var dan = document.getElementById("dan").value;
				var mesec = document.getElementById("mesec").value;
				var godina = document.getElementById("godina").value;
				var presDay = new Date().getDate();
				var presMonth = new Date().getMonth() + 1;
				var presYear = new Date().getFullYear();
				var dayOld = presDay - dan;
				var monOld = presMonth - mesec;
				var yearOld = presYear - godina;

				if (dayOld < 0 && monOld >= 0){
					document.getElementById("oldnes").innerHTML = "You are old " + (dayOld + 30) + " days, "  + (monOld -1) + " months, and " + yearOld + " years.";
				}
				if (dayOld >= 0 && monOld >= 0) {
					document.getElementById("oldnes").innerHTML = "You are old " + dayOld + " days, " + monOld + " months, and " + yearOld + " years.";}
				if (monOld < 0 && dayOld >= 0) {
					document.getElementById("oldnes").innerHTML = "You are old " + dayOld + " days, " + (monOld + 12) + " months, and " + (yearOld - 1) + " years.";}		
				if (dayOld < 0 && monOld < 0)	{
					document.getElementById("oldnes").innerHTML = "You are old " + (dayOld + 30) + " days, " + (monOld + 12) + " months, and " + (yearOld - 1) + " years.";
				}
				if (dayOld < 0 && monOld == 0) {
					document.getElementById("oldnes").innerHTML = "You are old " + (dayOld + 30) + " days, "  + (monOld + 11) + " months, and " + (yearOld - 1) + " years.";
				}
				if (dan == 16 && mesec == 12 && godina == 1985){
					document.getElementById("joke").innerHTML = "I ti pirke mislis da ovo moze svako da napravi !?";
				}
				if (dan == 9 && mesec == 7 && godina == 1987){
					document.getElementById("joke").innerHTML = "Buci buc Stralence!";
				}
				if (dan == 8 && mesec == 3 && godina == 1985){
					document.getElementById("joke").innerHTML = "Misika Misika!";
				}
				if (dan == 23 && mesec == 10 && godina == 1985){
					document.getElementById("joke").innerHTML = "Ti si doktor za programiranje!!!";
				}
				if (dan == 17 && mesec == 5 && godina == 1991){
					document.getElementById("joke").innerHTML = "Jeca pereca :)";
				}
				if (dan < 1 || dan > 31 || mesec < 1 || mesec > 12 || godina > 2019) {
					document.getElementById("oldnes").innerHTML = "Wrong input";
				}
			}