import { Collapse } from "bootstrap";
import LocomotiveScroll from "locomotive-scroll";

import HomePage from "./pages/home";

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
		// 	el: document.querySelector('[data-scroll-container]'),
		// 	smooth: true,
		// 	lerp: 0.1,
		// });

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
