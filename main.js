$(document).ready(function() {
	getHora();
});
var styles= {
	"background-color": "#0d47a1",
	"color": "#fff"
};
var defaults = {
	"background-color": "#2AB7A9",
	"color": "#fff"	
}
var d = new Date();
function getHora () {
	reset();
	hora = d.getHours();
	minutos = d.getMinutes();
	console.log("minutos"+minutos);
	//alert("Hora Actual = "+hora);
	switch (hora){
		case 1:
			esla();
			$(".una").css(styles);
		break;
		case 2:
		break;
		case 10:
			sonLas();
			$(".diez").css(styles);
			setMinutos(minutos);
		break;
		case 11:
			sonLas();
			$(".once").css(styles);
			setMinutos(minutos);
		break;
		case 12:
			sonLas();
			$(".doce").css(styles);
			setMinutos(minutos);
		break;
		case 13:
			esla();
			$(".una").css(styles);
			setMinutos(minutos);
		break;
		case 14:
			sonLas();
			$(".dos").css(styles);
			setMinutos(minutos);
		break;
		case 15:
			sonLas();
			$(".tres").css(styles);
			setMinutos(minutos);
		break;
		case 16:
			sonLas();
			$(".cuatro").css(styles);
			setMinutos(minutos);
		break;
		case 17:
			sonLas();
			$(".cinco").css(styles);
			setMinutos(minutos);
		break;
		case 18:
			sonLas();
			$(".seis").css(styles);
			setMinutos(minutos);
		break;
		case 19:
			sonLas();
			$(".siete").css(styles);
			setMinutos(minutos);
		break;
		case 20:
			sonLas();
			$(".ocho").css(styles);
			setMinutos(minutos);
		break;
		case 21:
			sonLas();
			$(".nueve").css(styles);
			setMinutos(minutos);
		break;				
		case 22:
			sonLas();
			$(".diez").css(styles);
			setMinutos(minutos);
		break;
		case 23:
			sonLas();
			$(".once").css(styles);
			setMinutos(minutos);
		break;
		case 24:
			sonLas();
			$(".doce").css(styles);
		break;
	}
}

function setMinutos (min) {
	if (min>=5 && min <10) {
		$(".y").css(styles);
		$(".cincominutos").css(styles);
	}
	if (min >=10 && min<15) {
		$(".y").css(styles);
		$(".diezminutos").css(styles);
	}
	if (min >=15 && min<20) {
		$(".y").css(styles);
		$(".cuarto").css(styles);
	}
	if (min >=20 && min<25) {
		$(".veinte").css(styles);
	}
	if (min >=25 && min<30) {
		$(".veinte").css(styles);
		$(".cincominutos").css(styles);
	}
	if (min>=30) {
		$(".y").css(styles);
		$(".media").css(styles);
	}
	if (min >=40 && min<45) {
		$(".menos").css(styles);
		$(".veinte").css(styles);
	}
	if (min >=45 && min<50) {
		$(".menos").css(styles);
		$(".cuarto").css(styles);
	}
	if (min >=40 && min<45) {
		$(".menos").css(styles);
		$(".diezminutos").css(styles);
	}
}
function esla () {
	$(".es").css(styles);
	$(".la").css(styles);
}
function sonLas() {
	$(".son").css(styles);
	$(".las").css(styles);
}
function reset () {
	$(".es").css(defaults);
	$(".la").css(defaults);
	$(".una").css(defaults);
}