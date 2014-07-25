$(".icon-menu").click(function(t){
		$(".sidebar").html($("nav").html());
		$(".container").toggleClass("showMenu");
		return t.preventDefault();
	}
)

$(".card_giro").click(function(t){
		$(this).closest(".card").toggleClass("girado");
		return t.preventDefault();
	}
)