<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Genese
 */

?>
<!-- Start: Navbar Centered Links -->
<nav id="navbar" class="navbar navbar-expand-lg">
	<div class="container">
		<a class="navbar-brand" href="/">
			<svg fill="none" height="40" viewBox="0 0 889 189"><clipPath id="a"><path d="m0 0h888.1v188.8h-888.1z"/></clipPath><g clip-path="url(#a)" fill="#fff"><path d="m383.2 72.9c-2.9-1.5-5.4-2.8-7.4-3.8-2.1-1-4.2-1.5-6.5-1.5-2.5 0-4.6.8-6.3 2.3s-2.5 3.5-2.5 5.8c0 2.1.8 3.8 2.3 5s3.5 2.2 5.8 3.1 4.8 1.7 7.6 2.5c2.7.8 5.3 1.9 7.6 3.4 2.3 1.4 4.2 3.3 5.8 5.7 1.5 2.4 2.3 5.5 2.3 9.4 0 3.4-.6 6.5-1.8 9.1-1.2 2.7-2.8 4.9-4.9 6.8-2.1 1.8-4.5 3.2-7.2 4.2-2.8 1-5.7 1.4-8.9 1.4-3.7 0-7.3-.7-10.9-2-3.6-1.4-7.3-3.3-11.2-5.8l4.8-11.4c1.2.8 2.5 1.7 3.9 2.6s2.7 1.7 4 2.5c1.3.7 2.6 1.4 4 1.8 1.3.5 2.6.7 3.8.7 1.9 0 3.6-.3 5-.8s2.5-1.2 3.4-2 1.5-1.8 1.9-2.8.6-2.1.6-3.1c0-2.6-.8-4.7-2.3-6.1s-3.5-2.6-5.8-3.5-4.8-1.8-7.6-2.6c-2.7-.8-5.3-1.9-7.6-3.2-2.3-1.4-4.2-3.2-5.8-5.5-1.5-2.3-2.3-5.3-2.3-9.3 0-2.8.6-5.4 1.7-7.8s2.7-4.5 4.7-6.3 4.3-3.2 7-4.2 5.5-1.5 8.5-1.5c6.4 0 12.8 2 19.4 6.1z"/><path d="m466.4 124.1-11.8 5.3-11.2-24.6h-24.4l-11.4 24.7-11.5-5.5 30.3-65.8 7.7-3.3zm-35.2-45.9-7.2 15.7h14.4z"/><path d="m500.4 129-7.2-5.9-26.6-64.6 11.9-5 19.9 47.7 19.8-47.7 11.8 5z"/><path d="m567.8 89.8v35.4h-13.1v-35.4l-25.8-30.7 11.2-5.7 21.1 25 21.1-24.8 11.1 5.4z"/><path d="m626.7 105.5h-29.9l2.4-11.4h29.9z"/><path d="m691.9 68h-21.9v57.4h-13.1v-57.4h-24.7l4.1-11.2h59.7z"/><path d="m742.1 68h-25.7v17.3h25.6v11h-25.6v17.9h27.1l3.7 11h-43.9v-68.4h43.7z"/><path d="m812.9 73.2c-3.8-1.9-7.4-3.3-10.9-4.4s-7.1-1.6-10.8-1.6c-3.2 0-6.2.6-9 1.8s-5.2 2.8-7.2 5c-2 2.1-3.6 4.6-4.8 7.5s-1.7 6.1-1.7 9.5.6 6.6 1.7 9.5 2.8 5.4 4.8 7.4c2.1 2.1 4.5 3.7 7.4 4.8 2.9 1.2 6 1.7 9.4 1.7 1.5 0 3-.1 4.6-.3s3.3-.5 5.1-1 3.8-1.1 5.9-1.9 4.5-1.8 7-3.1l4.2 11.2c-5.2 2.7-9.9 4.5-14.3 5.4s-8.5 1.4-12.4 1.4c-5.3 0-10.3-.9-14.8-2.7s-8.4-4.2-11.7-7.4-5.9-6.9-7.7-11.1c-1.9-4.2-2.8-8.9-2.8-13.9 0-5.3 1-10.1 3-14.4s4.7-8 8.1-11.1 7.3-5.5 11.6-7.2c4.4-1.7 8.9-2.6 13.7-2.6 3.9 0 8 .5 12.4 1.4 4.3.9 9.1 2.6 14.5 5.1z"/><path d="m888.1 128.8-12.9-4.4v-27.3h-32.8v27.2l-13.1 4.4v-71.8h13.1v29.2h32.8v-29.2h12.9z"/><path d="m94.4 188.8-94.4-94.4 94.4-94.4 94.4 94.4zm-8.8-21.3 8.8 8.8 36.5-36.5-8.8-8.8zm-14.5-14.5 8.2 8.2 42.8-42.8 15 15 7.8-7.8-51.1-52.5-51.3 51.3 8.5 8.5 42.8-42.8 20.1 20.1zm-13.8-13.8 7.6 7.6 36.5-36.5-7.6-7.6zm36.5-78.7 57.4 58.9 25-25-8.5-8.5-14.3 14.3-57.7-57.7-67.6 67.5 8.1 8.1zm-81.3 33.9 9.4 9.4 73.8-73.8 57.8 57.8 8.1-8.1-67.2-67.2z"/><path d="m273 2.5h-8.9v185.9h8.9z"/></g></svg>
		</a>
		<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Basculer la navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="navbarSupportedContent" class="collapse navbar-collapse d-lg-flex justify-content-lg-end">
			<ul class="navbar-nav mb-4 mb-lg-0 me-lg-4">
				<li class="nav-item"><a class="nav-link" href="/">Accueil</a></li>
				<li class="nav-item"><a class="nav-link" href="/#about">A Propos</a></li>
				<li class="nav-item"><a class="nav-link" href="/#services">Nos services</a></li>
				<li class="nav-item"><a class="nav-link" href="/#pricing">Nos tarifs</a></li>
			</ul>
			<a class="btn btn-sm btn-secondary" role="button" href="/#contact">
				<span>Nous contacter</span>
				<i class="icon-right-open"></i>
			</a>
		</div>
	</div>
</nav><!-- End: Navbar Centered Links -->
