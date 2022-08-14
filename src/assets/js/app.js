import { Collapse } from "bootstrap";

// import HomePage from "./pages/home";

const initializeApp = () => {
	/**
	 * The smooth scroll instance.
	 */
	let /** @type {LocomotiveScroll} */ scroll = null;
	/**
	 * Run the application.
	 */
	const run = () => {
		// Turn on smooth scroll.
		// scroll = new LocomotiveScroll({
		// 	el: document.querySelector("[data-scroll-container]"),
		// 	smooth: true,
		// 	lerp: 0.1,
		// });

		// Listen scroll and hide or show navbar.
		const watchNavbar = () => {
			// Variables.
			let last = 0;
			let delta = 0;
			let current = 0;
			let limit = 0;
			let ticking = false;
			const navbar = document.getElementById("navbar");
			const { height } = navbar.getBoundingClientRect();

			/**
			 * Set behaviors of
			 * Navbar when we scroll.
			 */
			function handleNavbarOnScroll() {
				// First of all, let's make sure that we
				// have scrolled from a significant amount before doing anything.
				// if (current <= delta) return; // When iOs bounce on top
				// if (current >= limit - window.innerHeight) return; // When iOs bounce on bottom

				// Pull up when we scroll up
				// Stick when the scroll amount is greater than the height
				navbar.classList.toggle("pull-up", current >= last);
				navbar.classList.toggle("sticky", current > height);
			}

			function resize() {
				limit = document.getElementById("#app").getBoundingClientRect().height
			}

			// Attach the event listener.
			window.addEventListener('resize', resize)
			window.addEventListener("scroll", () => {
				// Keep current scroll details.
				current = window.scrollY;
				delta = Math.abs(Math.floor(current - last));

				if (!ticking) {
					window.requestAnimationFrame(() => {
						handleNavbarOnScroll();
						ticking = false;
						last = current >= 0 ? current : 0;
					});
				}
				ticking = true;
			});
		};
		watchNavbar();

		// Turn on collapsed
		// const collapseElementList = document.querySelectorAll(".collapse");
		// Array.from(collapseElementList)
		// 	.map((collapseEl) => new Collapse(collapseEl))
		// 	.forEach((collapsible) => {
		// 		collapsible.addEventListener("click", collapsible.toggle());
		// 	});
	};

	return {
		run,
	};
};

// Turn on the lights.
const app = initializeApp();
// const page = HomePage(app);
document.addEventListener("DOMContentLoaded", app.run);
