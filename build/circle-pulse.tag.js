document.head.insertAdjacentHTML('beforeend', `<template id="circle-pulse"><style>div{display:inline-block;margin:5px;border-radius:100%;background:#333;width:100px;height:100px;animation:pulse 2s ease infinite;opacity:.2}#c2{animation-delay:.3s}#c3{animation-delay:.6s}@keyframes pulse{from{opacity:.2}50%{opacity:.9}to{opacity:.2}}</style><div id="c1"></div><div id="c2"></div><div id="c3"></div></template>`);
			window.customElements.define('circle-pulse', class extends HTMLElement {
				constructor() {
					super();
					this.attachShadow({mode: 'open'}).appendChild(document.querySelector('template#circle-pulse').content.cloneNode(true));
					
				}
				
				
			 	
			});