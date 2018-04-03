
 document.head.insertAdjacentHTML('beforeend', `
	 <template id="search-input">
	 	<style> 
    :host{
        display: inline-block;
        white-space: nowrap;
        border: 2px solid CornflowerBlue;
        border-radius: 5px;
    }
    :host([hidden]){
        display: none;
    }
    svg{
        height: var(--height, 24px);
        fill: CornflowerBlue;
        vertical-align: bottom;
        margin: 3px;
    }
    input{
        height: var(--height, 24px);
        border: none;
        outline: 0;
        font-size: 24px;
        font-weight: 100;
    }
    input:focus{
        box-shadow: none;
    }

    span{
        color: silver;
        font-size: 24px;
        vertical-align: bottom;
    }
    span:hover{
        color: gray;
        cursor: pointer;
    }
</style>
	 	
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <g>
            <path d="M69.054,59.058l27.471,23.811c2.494,2.162,2.766,5.971,0.604,8.465l-0.981,1.132c-2.162,2.494-5.971,2.766-8.465,0.604   L60.418,69.438"/>
        </g>
        <path d="M2.358,41.458c0-19.744,16.005-35.749,35.751-35.749c19.744,0,35.749,16.005,35.749,35.749  c0,19.746-16.005,35.751-35.749,35.751C18.363,77.208,2.358,61.203,2.358,41.458z M38.563,67.583  c14.428,0,26.124-11.696,26.124-26.126c0-14.428-11.696-26.124-26.124-26.124c-14.43,0-26.126,11.696-26.126,26.124  C12.438,55.887,24.134,67.583,38.563,67.583z"/>
    </svg>
    <input>
    <span>&#xD7;</span>

	 </template>
 `);
 window.customElements.define('search-input', class extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'}).appendChild(document.querySelector('#search-input').content.cloneNode(true));
	}
 	
    show(){
        this.hidden=false;
    }
    hide(){
        this.hidden=true;
    }

 });
 