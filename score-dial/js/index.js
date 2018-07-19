'use strict';

var icon, value, band;
const namespace = 'expn-score-dial__';
class ExpnScoreDial extends HTMLElement {
	
	setValues() {
		value.textContent = this.getAttribute('value');
		band.textContent = this.getAttribute('band');
	}
	
	static get observedAttributes() { return ['value', 'band']; }
	
	constructor() {
		super();
		var shadow = this.attachShadow({mode: 'open'});
		
		var namespace = 'expn-score-dial__';
		var wrapper = document.createElement('div');
		wrapper.classList.add(`${namespace}wrapper`);
		
		icon = document.createElement('span');
		icon.classList.add(`${namespace}icon`);
		value = document.createElement('span');
		value.classList.add(`${namespace}value`);
		band = document.createElement('span');
		band.classList.add(`${namespace}band`);
		
		this.setValues();
		
		var style = document.createElement('style');
		style.textContent =
		`
			span { color: red; display: block; }
			.${namespace}value { font-weight: bold; font-size: 30px; }
			.${namespace}band {font-style: italic; }
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
