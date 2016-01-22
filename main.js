
var styles= {
	"background-color": "#0d47a1",
	"color": "#fff"
};
var defaults = {
	"background-color": "#2AB7A9",
	"color": "#fff"	
}
var d = new Date();
$(document).ready(function() {
	reloj();
});
function reloj () {
	
	reset();
	hora = d.getHours();
	minutos = d.getMinutes();
	setHora(hora,minutos);
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
	$(".btn").css(defaults);
}

function setHora (hora,minutos) {
	if (hora == 1 || hora == 13) {
		esla();		
		$(".una").css(styles);
		setMinutos(minutos);
	}
	if (hora == 2 || hora == 14) {
		sonLas();		
		$(".dos").css(styles);
		setMinutos(minutos);
	}
	if (hora == 3 || hora == 15) {
		sonLas();		
		$(".tres").css(styles);
		setMinutos(minutos);
	}	
	if (hora == 4 || hora == 16) {
		sonLas();		
		$(".cuatro").css(styles);
		setMinutos(minutos);
	}
	if (hora == 5 || hora == 17) {
		sonLas();		
		$(".cinco").css(styles);
		setMinutos(minutos);
	}
	if (hora == 6 || hora == 18) {
		sonLas();		
		$(".seis").css(styles);
		setMinutos(minutos);
	}
	if (hora == 7 || hora == 19) {
		sonLas();		
		$(".siete").css(styles);
		setMinutos(minutos);
	}

	if (hora == 8 || hora == 20) {
		sonLas();		
		$(".ocho").css(styles);
		setMinutos(minutos);
	}
	if (hora == 9 || hora == 21) {
		sonLas();		
		$(".nueve").css(styles);
		setMinutos(minutos);
	}
	if (hora == 10 || hora == 22) {
		sonLas();		
		$(".diez").css(styles);
		setMinutos(minutos);
	}
	if (hora == 11 || hora == 23) {
		sonLas();		
		$(".once").css(styles);
		setMinutos(minutos);
	}
	if (hora == 12 || hora == 24) {
		sonLas();		
		$(".doce").css(styles);
		setMinutos(minutos);
	}
}