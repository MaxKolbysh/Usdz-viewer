(function(e){function t(t){for(var r,o,s=t[0],l=t[1],d=t[2],h=0,p=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"188d":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Home")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"three-container",staticClass:"three-container",on:{dragover:e.dragover,drop:e.drop}},[n("div",{staticClass:"three-overlay"},[null!=e.error?n("div",{staticClass:"mb-3",staticStyle:{color:"red"}},[e._v(" An error occured when loading the USDZ file. Maybe this file is not supported or the loader is not supported on this device. ")]):e._e(),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",staticClass:"w-px h-px opacity-0 overflow-hidden absolute",attrs:{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",accept:".usdz"},on:{change:e.onChange}}),e.modelIsVisible?e._e():n("div",{staticClass:"drag-zone",on:{click:e.onClickDragZone}},[e._m(0)])]),n("div",{staticClass:"top-left"},[n("v-btn",{staticClass:"mx-2",attrs:{small:"",outlined:"",fab:"",dark:"",color:"indigo"},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{attrs:{dark:""}},[e._v(" mdi-help ")])],1)],1),e.modelIsVisible?n("div",{staticClass:"top-right",on:{click:e.onClickDragZone}},[n("v-btn",{staticClass:"mx-2",attrs:{outlined:"",rounded:"",dark:"",color:"indigo"}},[e._v(" Load another model ")])],1):e._e(),n("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Information about the player ")]),n("v-card-text",{staticClass:"mt-2"},[e._v(" This player is based on the "),n("a",{attrs:{href:"https://www.npmjs.com/package/three-usdz-loader"}},[e._v("three-usdz-loader")]),e._v(" package"),n("br"),e._v(" Contact: contact@usdz-viewer.net ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" OK ")])],1)],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex w-full h-screen items-center justify-center text-center",attrs:{id:"app"}},[n("div",[e._v(" Drag USDZ file here or "),n("span",{staticClass:"underline"},[e._v("click here")])])])}],l=n("9ab4"),d=n("1b40"),c=n("5a89"),h=n("4721"),p=n("2132"),u=n("8769");let f=class extends d["c"]{constructor(){super(...arguments),this.modelIsVisible=!1,this.modelIsLoading=!1,this.dialog=!1,this.loadedModels=[],this.error=null,this.loaderReady=null}async mounted(){this.camera=new c["p"](27,window.innerWidth/window.innerHeight,1,3500),this.camera.position.z=7,this.camera.position.y=7,this.camera.position.x=0,this.scene=new c["r"],this.scene.background=new c["d"](16777215);const e=new c["a"](1118481);e.intensity=1,this.scene.add(e),this.renderer=new c["x"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=c["c"],this.renderer.toneMappingExposure=2,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=c["u"],await new Promise(e=>{const t=new c["o"](this.renderer);t.compileCubemapShader(),(new p["a"]).load("studio_country_hall_1k.hdr",n=>{const r=t.fromEquirectangular(n);n.mapping=c["g"],n.needsUpdate=!0,window.envMap=r.texture,e(!0)})}),this.threeContainer.appendChild(this.renderer.domElement),this.controls=new h["a"](this.camera,this.renderer.domElement),this.controls.update(),this.animate(),this.loader=new u["USDZLoader"]("/wasm"),window.addEventListener("resize",this.onWindowResize)}async animate(){const e=(new Date).getTime()/1e3;await new Promise(e=>setTimeout(e,10));for(const t of this.loadedModels)t.update(e);this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(null))}async loadFile(e){if(this.modelIsLoading)return;this.modelIsLoading=!0,this.error=null;for(const a of this.loadedModels)a.clear();this.loadedModels=[];const t=new c["j"];this.scene.add(t);try{const n=await this.loader.loadFile(e,t);this.loadedModels.push(n)}catch(r){return this.error=r,console.error("An error occured when trying to load the model"+r),void(this.modelIsLoading=!1)}const n=this.loadedModels.map(e=>e.getGroup());this.fitCamera(this.camera,this.controls,n),this.modelIsLoading=!1,this.modelIsVisible=!0}fitCamera(e,t,n,r=1.5){const a=e,i=new c["w"],o=new c["w"],s=new c["b"];s.makeEmpty();for(const c of n)s.expandByObject(c);s.getSize(i),s.getCenter(o);const l=Math.max(i.x,i.y,i.z),d=l/(2*Math.atan(Math.PI*a.fov/360)),h=d/a.aspect,p=r*Math.max(d,h),u=t.target.clone().sub(a.position).normalize().multiplyScalar(p);t.maxDistance=10*p,t.target.copy(o),a.near=p/100,a.far=100*p,a.updateProjectionMatrix(),e.position.copy(t.target).sub(u),t.update()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}onChange(){null!=this.fileInput.files&&this.handleFilesUpload(this.fileInput.files)}onClickDragZone(){this.fileInput.click()}dragover(e){e.preventDefault()}drop(e){e.preventDefault(),null!=e.dataTransfer?this.handleFilesUpload(e.dataTransfer.files):console.error("Files are null")}handleFilesUpload(e){this.loadFile(e[0])}};Object(l["a"])([Object(d["b"])("three-container")],f.prototype,"threeContainer",void 0),Object(l["a"])([Object(d["b"])("file")],f.prototype,"fileInput",void 0),f=Object(l["a"])([d["a"]],f);var m=f,v=m,w=(n("cddc"),n("2877")),g=n("6544"),b=n.n(g),y=n("8336"),x=n("b0af"),C=n("99d9"),_=n("169a"),M=n("ce7e"),j=n("132d"),k=n("2fa4"),O=Object(w["a"])(v,o,s,!1,null,null,null),I=O.exports;b()(O,{VBtn:y["a"],VCard:x["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VDialog:_["a"],VDivider:M["a"],VIcon:j["a"],VSpacer:k["a"]});var S=r["a"].extend({name:"App",components:{Home:I}}),V=S,z=n("7496"),P=n("f6c4"),D=Object(w["a"])(V,a,i,!1,null,null,null),T=D.exports;b()(D,{VApp:z["a"],VMain:P["a"]});var E=n("f309");r["a"].use(E["a"]);var F=new E["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:F,render:e=>e(T)}).$mount("#app")},cddc:function(e,t,n){"use strict";n("188d")}});
//# sourceMappingURL=app.0354b1d0.js.map