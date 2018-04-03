document.head.insertAdjacentHTML('beforeend', `<template id="spinning-x"><style>:host{display:inline-block;position:relative;font-size:var(--size, 100px);border-radius:100%}:host([hidden]){display:none}div{color:var(--color, CornflowerBlue);animation:spin infinite;animation-duration:var(--duration, 3s);animation-timing-function:var(--timing, linear)}@keyframes spin{100%{transform:rotate(360deg)}}</style><div>&#x2600;</div><div>&#x2605;</div><div>&#x2736;</div><div>&#x25B2;</div><div>&#x25A0;</div></template>`);
			window.customElements.define('spinning-x', class extends HTMLElement {
				constructor() {
					super();
					this.attachShadow({mode: 'open'}).appendChild(document.querySelector('template#spinning-x').content.cloneNode(true));
					
				}
				
				
			 	
    show(){
        this.hidden=false;
    }
    hide(){
        this.hidden=true;
    }

			});