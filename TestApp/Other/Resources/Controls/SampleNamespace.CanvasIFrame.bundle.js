/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var t={};(()=>{var e=t;Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasIFrame=void 0;var i=function(){function t(){}return t.prototype.init=function(t,e,i,r){this._container=r},t.prototype.updateView=function(t){this._context=t,this.refreshIsNecessary()&&(this.updateParameters(),this.clear(),this.render())},t.prototype.getOutputs=function(){return{}},t.prototype.destroy=function(){},t.prototype.refreshIsNecessary=function(){return this._src!=this._context.parameters.src.raw||this._heigth!=this._context.parameters.height.raw||this._width!=this._context.parameters.width.raw},t.prototype.updateParameters=function(){this._src=this._context.parameters.src.raw,this._heigth=this._context.parameters.height.raw,this._width=this._context.parameters.width.raw},t.prototype.render=function(){var t=this._src?this._src:"http://blanks";this._iframe=document.createElement("iframe"),this._iframe.id="iframe_4_canvas",this._iframe.style.minHeight="200px",this._iframe.style.minWidth="200px",this._iframe.height=this._heigth.toString()+"px",this._iframe.width=this._width.toString()+"px",this._iframe.setAttribute("src",t),this._container.appendChild(this._iframe)},t.prototype.clear=function(){for(;this._container.lastChild;)this._container.removeChild(this._container.lastChild)},t}();e.CanvasIFrame=i})(),pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=t})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('SampleNamespace.CanvasIFrame', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CanvasIFrame);
} else {
	var SampleNamespace = SampleNamespace || {};
	SampleNamespace.CanvasIFrame = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CanvasIFrame;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}