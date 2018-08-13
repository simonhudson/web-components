'use strict';

let img;

class ExpnLogo extends HTMLElement {
		
	constructor() {
		super();
		const namespace = 'expn-logo';
		
		const shadow = this.attachShadow({mode: 'open'});
		const wrapper = document.createElement('div');
		wrapper.classList.add(`${namespace}__wrapper`);
		
		img = document.createElement('img');
		const attributes = {
			alt: 'Experian',
			src: `experian-logo.svg`
		};
		for (let key in attributes) img.setAttribute(key, attributes[key]);
		
		
		const style = document.createElement('style');
		style.textContent =
		`
			.${namespace}__wrapper { height: auto; width: 200px; }
			.${namespace}__img { height: auto; width: 100%; }
		`;
		
		shadow.appendChild(wrapper);
		shadow.appendChild(style);
		wrapper.appendChild(img);

	}
	
	setHomePageLink() {
		const dataAttr = 'data-is-homepage-link';
		const isHomePageLink = this.hasAttribute(dataAttr) && this.getAttribute(dataAttr) != 'false';
		if (!isHomePageLink) return;
		const parent = img.parentNode;
		const link = document.createElement('a');
		link.setAttribute('href', './');
		parent.replaceChild(link, img);
		link.appendChild(img);
	}
	
	connectedCallback() {
		this.setHomePageLink();
	}

}
customElements.define('expn-logo', ExpnLogo);
