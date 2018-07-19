'use strict';

let icon, value, band;

class ExpnScoreDial extends HTMLElement {
	
	setValues() {
		value.textContent = this.getAttribute('value');
		band.textContent = this.getAttribute('band');
	}
	
	static get observedAttributes() { return ['value', 'band']; }
	
	constructor() {
		super();
		const namespace = 'expn-score-dial';
		
		const shadow = this.attachShadow({mode: 'open'});
		const wrapper = document.createElement('div');
		wrapper.classList.add(`${namespace}wrapper`);
		
		icon = document.createElement('span');
		icon.classList.add(`${namespace}__icon`);
		value = document.createElement('span');
		value.classList.add(`${namespace}__value`);
		band = document.createElement('span');
		band.classList.add(`${namespace}__band`);
		
		this.setValues();
		
		const style = document.createElement('style');
		style.textContent =
		`
			span { color: red; display: block; }
			.${namespace}__value { font-weight: bold; font-size: 30px; }
			.${namespace}__band {font-style: italic; }
		`;
		
		shadow.appendChild(wrapper);
		shadow.appendChild(style);
		wrapper.appendChild(icon);
		wrapper.appendChild(value);
		wrapper.appendChild(band);
	}
	attributeChangedCallback() {
		this.setValues();
	}
}
customElements.define('expn-score-dial', ExpnScoreDial);
