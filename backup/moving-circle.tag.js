document.head.insertAdjacentHTML('beforeend', `<template id="moving-circle"><style>:host{display:inline-block}svg{transform-origin:50% 50%;transform:rotate(-90deg)}circle{fill:white;stroke:var(--color, #333);stroke-width:11;stroke-linecap:round;stroke-dasharray:250;stroke-dashoffset:1000;animation:rotate 4s linear infinite}@keyframes rotate{to{stroke-dashoffset:0}}</style><svg viewbox="0 0 100 100" preserveaspectratio="xMinYMin"><circle cx="50" cy="50" r="40"/></svg></template>`);
			window.customElements.define('moving-circle', class extends HTMLElement {
				constructor() {
					super();
					this.attachShadow({mode: 'open'}).appendChild(document.querySelector('template#moving-circle').content.cloneNode(true));
					
				}
				
				
			 	
			});