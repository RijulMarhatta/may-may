$(document).ready(function() {
 	
		
			$(".cart-drawer .close").addClass('d-none');
			if ($(window).width() <= 786) {
				$(".cart-drawer .close").removeClass('d-none').attr('src', 'images/group-17.svg');
			}

			$("#mobile").on("input", function() {
				var reg = /^[0]+/gi;
				if (this.value.match(reg)) {
					this.value = this.value.replace(reg, '');
				}
				this.value = this.value.replace(/[^0-9]/g, '');
			});
			$("#mobile").on("keyup input", function(event) {

				var tempVal = $(this).val();
				this.value = this.value.replace(/[^0-9]/g, '');
				if (tempVal.length == 10) {
					$(this).siblings(".invalid-feedback").hide();
					$(this).parent().addClass("validBorder");
					$(this).parent().removeClass("invalidBorder");
					$(this).siblings(".clearAll").show();
				} else if (tempVal.length > 0 && tempVal.length < 10 && (event.keyCode == 8 || event.keyCode == 46)) {
					$(this).siblings(".invalid-feedback").show();
					$(this).parent().addClass("invalidBorder");
					$(this).parent().removeClass("validBorder");
					$(this).siblings(".clearAll").show();
				} else if ((tempVal.length > 0) && (tempVal.length < 10) && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
					$(this).parent().addClass("validBorder");
					$(this).parent().removeClass("invalidBorder");
					$(this).siblings(".invalid-feedback").hide();
					$(this).siblings(".clearAll").show();
				}
				if (tempVal.length == 0) {
					$(this).siblings(".invalid-feedback").hide();
					$(this).parent().removeClass("invalidBorder validBorder");
					$(this).siblings(".clearAll").hide();
				}

				if (tempVal.length >= 1 && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
					$("#mobile").siblings(".clearAll").show();
				}

				if (event.keyCode == 86 && event.keyCode == 17) {
					$("#mobile").siblings(".clearAll").show();
				}

			});
			$("#mobile").on("input", function() {
				var reg = /^0+/gi;
				if (this.value.match(reg)) {
					this.value = this.value.replace(reg, '');
				}
			});


			placeholderLabel();

		});

		function placeholderLabel() {
			$(".bootLabel").hide();
			var ua = window.navigator.userAgent;
			var msie = ua.indexOf("MSIE ");

			if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
			{
				$(".form-control").focus(function(event) {
					$(this).siblings(".bootLabel").show();
				});
				$(".form-control").on("blur", function(event) {
					if (this.value.length == 0) {
						$(this).siblings(".bootLabel").hide();
					}
				});
			} else {
				$(".form-control").on("keyup input", function(event) {
					$(this).siblings(".bootLabel").show();
					var tempVal = $(this).val();
					if (tempVal.length <= 0) {
						$(this).siblings(".bootLabel").hide();
					}

				});
			}

			return false;
		}