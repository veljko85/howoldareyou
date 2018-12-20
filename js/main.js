$(document).ready(function(){
	$("a[data-scroll]").scroller();
});		

			function wrapMainSize(){
				document.getElementById("wrap").style.height = document.body.clientHeight - 833 + "px";
			}

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

				document.getElementById("wrap").style.marginTop = "833px";

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
				if (dan < 1 || dan > 31 || mesec < 1 || mesec > 12 || godina > 2019) {
					document.getElementById("oldnes").innerHTML = "Wrong input";
				}
				if (godina >= 1930 && godina < 1940) {
					document.getElementById("toScroll").href = "#thirties";

				}
				if (godina >= 1940 && godina < 1950) {
					document.getElementById("toScroll").href = "#forties";

				}
				if (godina >= 1950 && godina < 1960) {
					document.getElementById("toScroll").href = "#fifties";

				}
				if (godina >= 1960 && godina < 1970) {
					document.getElementById("toScroll").href = "#sixties";

				}
				if (godina >= 1970 && godina < 1980) {
					document.getElementById("toScroll").href = "#seventies";

				}
				if (godina >= 1980 && godina < 1990) {
					document.getElementById("toScroll").href = "#eighties";
					document.getElementById("otherDetails").innerHTML = "You are born in the eighties. The decade saw great socioeconomic change due to advances in technology and a worldwide move away from planned economies and towards laissez-faire capitalism.";
				}
				if (godina >= 1990 && godina < 2000) {
					document.getElementById("toScroll").href = "#nineties";

				}
				if (godina >= 2000 && godina < 2010) {
					document.getElementById("toScroll").href = "#twoThousands";

				}
				if (godina >= 2010 && godina < 2020) {
					document.getElementById("toScroll").href = "#tens";
				}

			}
