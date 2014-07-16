$(".card_giro").click(function(t){
		$(this).closest(".card").toggleClass("girado");
		return t.preventDefault();
	}
)