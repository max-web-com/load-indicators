document.head.insertAdjacentHTML('beforeend', `<template id="moving-stripe"><style>:host{display:inline-block;position:relative;height:10px}:host([hidden]){display:none}.stripe{position:absolute;left:0;right:100%;height:100%;background:var(--color, CornflowerBlue);border-radius:var(--corners, 100px);animation:move infinite;animation-duration:var(--speed, 1s);animation-timing-function:var(--timing, linear)}@keyframes move{0%{left:0;right:100%}50%{left:0;right:0}100%{left:100%;right:0}}</style><div class="stripe"></div></template>`);
			window.customElements.define('moving-stripe', class extends HTMLElement {
				constructor() {
					super();
					this.attachShadow({mode: 'open'}).appendChild(document.querySelector('template#moving-stripe').content.cloneNode(true));
					
				}
				
				
			 	
    show(){ this.hidden = false }
    hide(){ this.hidden = true }

			});