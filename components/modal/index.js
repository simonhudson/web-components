'use strict';

let overlay, content, closeBtn;
const openClass = 'is-open';

class ExpnModal extends HTMLElement {
	
	static get observedAttributes() { return ['state']; }
	
	setState() {
		const isOpen = overlay.classList.contains(openClass);
		const method = !isOpen ? 'add': 'remove';
		overlay.classList[method](openClass)
	}
	
	constructor() {
		super();
		const namespace = 'expn-modal';
		const shadow = this.attachShadow({mode: 'open'});
		
		const style = document.createElement('style');
		style.textContent =
		`
			.${namespace}__overlay {
				align-items: center;
				background: rgba(0, 0, 0, 0.5);
				display: none;
				height: 100vh;
				justify-content: center;
				left: 0;
				position: absolute;
				top: 0;
				width: 100vw;
				z-index: 1;
			}
			.${namespace}__overlay.${openClass} {
				display: flex;
			}
			.${namespace}__content {
				background: #fff;
				border-radius: 10px;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
				height: 50vh;
				padding: 30px;
				position: relative;
				width: 65%;
			}
			.${namespace}__close {
				color: #555;
				position: absolute;
				right: 15px;
				top: 15px;
			}
		`;
		shadow.appendChild(style);
				
		overlay = document.createElement('div');
		overlay.classList.add(`${namespace}__overlay`);
		
		content = document.createElement('div');
		content.classList.add(`${namespace}__content`);
		
		closeBtn = document.createElement('button');
		closeBtn.classList.add(`${namespace}__close`);
		closeBtn.classList.add('js-modal-control');
		closeBtn.setAttribute('data-operation', 'close');
		closeBtn.textContent = 'Close';
		
		shadow.appendChild(overlay);
		overlay.appendChild(content);
		content.appendChild(closeBtn);
		
	}
	attributeChangedCallback() {
		this.setState();
	}
}
customElements.define('expn-modal', ExpnModal);
