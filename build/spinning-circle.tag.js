document.head.insertAdjacentHTML('beforeend', `<template id="spinning-circle"><style>:host{display:inline-block;animation:spin 2s linear infinite;border-radius:100%;width:100px}:host([hidden]){display:none}svg{background:transparent}@keyframes spin{100%{transform:rotate(360deg)}}svg path{stroke:var(--color, #333);stroke-width:30;stroke-linecap:round;fill:none}</style><svg viewbox="30 30 240 240" preserveaspectratio="xMinYMin"><path d="M 236 100 A 100 100 0 0 0 150 50"/><path d="M 150 250 A 100 100 0 0 0 236 200"/><path d="M 63 99 A 100 100 0 0 0 63 200"/></svg></template>`);
			window.customElements.define('spinning-circle', class extends HTMLElement {
				constructor() {
					super();
					this.attachShadow({mode: 'open'}).appendChild(document.querySelector('template#spinning-circle').content.cloneNode(true));
					
				}
				
				
			 	
    show(){
        this.hidden=false;
    }
    hide(){
        this.hidden=true;
    }
	

			});