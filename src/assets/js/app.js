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
		scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			lerp: 0.1,
		});

		// Listen scroll and hide or show navbar.
    const navbar = document.getElementById('navbar');
    const { height } = navbar.getBoundingClientRect();
    const watchNavbar = () => {
      let last = 0;
      let current = 0;
      let ticking = false;
      const onScroll = scroll => {
        if (scroll < last) {
          navbar.classList.remove('pull-up');
        } else {
          navbar.classList.add('pull-up');
        }

        if (scroll <= height) {
          navbar.classList.remove('sticky');
        } else {
          navbar.classList.add('sticky');
        }
      };
      scroll.on('scroll', ({scroll}) => {
        current = scroll.y;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            onScroll(current);
            ticking = false;
            last = (current >= 0) ? current : 0;
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
