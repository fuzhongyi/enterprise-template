layui.define(['element', 'layer'], function () {
	var $ = layui.jquery;
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		lazyLoading: true,
		slidesPerView: 4,
		slidesPerGroup: 1
	});

	$('.swiper-slide').on('mouseover ', function () {
		layer.tips('内容内容内容内容，内容内容内容内容内容内容内容内容。', this, {
			tips: [1, '#3595CC'],
			time: 3000
		});
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			$(".layui-fixbar-top").slideDown();
			$(".header-index").css({
				'box-shadow': '0px 5px 20px rgba(0, 0, 0, 0.43)',
				'background-color': '#000',
				'height': '60px'
			});
			$(".header-index .layui-main").css("margin","0 auto");
		} else {
			$(".layui-fixbar-top").slideUp();
			$(".header-index").css({
				'box-shadow': 'none',
				'background-color': 'transparent',
				'height': '70px'
			});
			$(".header-index .layui-main").css("margin","10px auto");
		}
	});

	$(".layui-fixbar-top").on("click touchstart", function () {
		$('html,body').animate({
			scrollTop: $('html').offset().top
		}, 300);
	});

	$('.hde-animate-box').waypoint(function (direction) {
		if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
			$(this.element).addClass('hde-item-animate');
			setTimeout(function () {
				$('body .hde-animate-box.hde-item-animate').each(function (k) {
					var el = $(this);
					setTimeout(function () {
						var effect = el.data('animate-effect') || 'fadeIn';
						el.addClass(effect + ' animated-fast').removeClass('hde-item-animate');;
					}, k * 200, 'easeInOutExpo');
				});
			}, 100);
		}
	}, {
		offset: '85%'
	});

	function isPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}

	var contactMap = function () {
		if (isPC()) {
			contactMap= function () {
				layer.open({
					title: '联系我们',
					type: 2,
					area: ['700px', '530px'],
					fixed: false,
					maxmin: true,
					content: 'address.html'
				});
			};
		} else {
			contactMap= function () {
				layer.open({
					title: '联系我们',
					type: 2,
					area: ['320px', '300px'],
					skin: 'layui-layer-rim', 
					content: ['address.html', 'no']
				});
			};
		}
		contactMap();
	};

	$(".contact").click(function () {
		contactMap();
	});
	$("#year").html(new Date().getFullYear());
});