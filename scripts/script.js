$(document).ready(() => {
	var products = [
		{
			title: "Botín",
			price: 800.44,
			category: "Botines",
			image: "http://placehold.it/225x225",
			brand: "nike"
		},
		{
			title: "Ojotas",
			price: 300.99,
			category: "Ojotas",
			image: "http://placehold.it/225x225",
			brand: "adidas"
		},
		{
			title: "Zapatillas",
			price: 1120.0,
			category: "Calzado",
			image: "http://placehold.it/225x225",
			brand: "puma"
		},
		{
			title: "Short",
			price: 320.44,
			category: "Vestimenta",
			image: "http://placehold.it/225x225",
			brand: "nike"
		},
		{
			title: "Pantalón",
			price: 360.44,
			category: "Natación",
			image: "http://placehold.it/225x225",
			brand: "nike"
		}
	];
	products.forEach(item => {
		$(".galeria").append(`
			<article class="item">
			<img src=${item.image} alt=${item.title} class="img">
			<p class="oferta">oferta</p>
			<p class="titulo">${item.title}</p>
			<p class="precio">${item.price} <i class="icon ${item.brand}"></i></p>
			<p class="categoria">${item.category}</p>
			</article>`);
	});
	$(".oferta").each(index => {
		if (index % 2 != 0) {
			$(".oferta")
				.eq(index)
				.addClass("isActive");
		}
	});
	$(".img").each(index => {
		$(".img")
			.eq(index)
			.on("mouseenter", () => {
				$(".precio")
					.eq(index)
					.addClass("isActive");
				$(".titulo")
					.eq(index)
					.addClass("isActive");
			});
	});
	$(".img").each(index => {
		$(".img")
			.eq(index)
			.on("mouseleave", () => {
				$(".precio")
					.eq(index)
					.removeClass("isActive");
				$(".titulo")
					.eq(index)
					.removeClass("isActive");
			});
	});
	$(".navItem1").on("click", () => {
		$(".menuHombre").toggleClass("isActive");
	});
	$("body").mouseup(e => {
		var container = $(".menuHombre");
		if (!container.is(e.target) && container.has(e.target).length === 0 && $(window).width() >= 1023) {
			container.removeClass("isActive");
		}
	});
	$(".toggleSubmenu").on("click", () => {
		$(".submenu, .toggleSubmenu").toggleClass("isActive");
	});
	$(".marcas").on("click", () => {
		$.get("http://remote.fizzmod.com/ajax.php", data => {
			if (data) {
				$(".marcas").hide();
				$(".banners").append(`<div class="black"><p>${data}</p></div>`);
			}
		});
	});
});
