/** @format */

var tl = gsap.timeline();
var counter = 1;
function overlayrepeat() {
	tl.to(".overlay", {
		top: "0%",
		duration: 1,
		delay: 1,
		ease: Expo.easeInOut,
	})
		.to("#page1", {
			backgroundImage: `url(./images/bgimg${counter}.webp)`,
			ease: Expo.easeInOut,
			duration: 0.4,
		})
		.to(".overlay", {
			top: "-100%",
			duration: 0.8,
			delay: 0.3,
			ease: Expo.easeInOut,
		})
		.to(".overlay", {
			top: "100%",
			duration: 0.01,
			ease: Expo.easeInOut,
		});
}
overlayrepeat();
// setInterval(overlayrepeat, 3000);
setInterval(() => {
	overlayrepeat();
	counter++;
	if (counter == 6) {
		counter = 1;
	}
}, 3000);

gsap.to("#elem1 h1,#elem3 h1", {
	x: "-15%",
	scrollTrigger: {
		trigger: "#elem1 h1",
		scroller: "body",
		scrub: 3,
		// markers: true,
		start: "top -5%",
		end: "top -90%",
	},
});
gsap.to("#elem1 h5,#elem3 h5", {
	x: "15%",
	scrollTrigger: {
		trigger: "#elem1 h1",
		scroller: "body",
		scrub: 3,
		// markers: true,
		start: "top -5%",
		end: "top -90%",
	},
});
gsap.to("#elem2 h1,#elem4 h1", {
	x: "15%",
	scrollTrigger: {
		trigger: "#elem1 h1",
		scroller: "body",
		scrub: 3,
		// markers: true,
		start: "top -5%",
		end: "top -90%",
	},
});
gsap.to("#elem2 h5,#elem4 h5", {
	x: "-15%",
	scrollTrigger: {
		trigger: "#elem1 h1",
		scroller: "body",
		scrub: 3,
		// markers: true,
		start: "top -5%",
		end: "top -90%",
	},
});
