$(window).load(function () {
	$(".input-group input").val("");
	$(".input-group input").focusout(function () {
		if ($(this).val() != "") {
			$(this).addClass("has-content");
		} else {
			$(this).removeClass("has-content");
		}
	})
});