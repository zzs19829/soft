(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69f07e5a"],{"30cc":function(t,e,i){t.exports=i.p+"static/img/scroll_1.8884dc16.jpg"},"32e0":function(t,e,i){},"3c93":function(t,e,i){},"62c5":function(t,e,i){t.exports=i.p+"static/img/scroll_3.a82fb5d9.jpg"},"63b7":function(t,e,i){},9427:function(t,e,i){"use strict";i("bf1f")},b38f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("div",{staticClass:"father"},[i("NavbarMenu"),i("v-carousel",{attrs:{cycle:"",height:"800px","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.items,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src}})})),1),i("v-card",{staticClass:"overlay",attrs:{height:"400",width:"300"}},[i("v-overlay",{attrs:{absolute:t.absolute,value:t.overlay,opacity:t.opacity}}),i("h1",{staticStyle:{color:"white"}},[t._v("Pet Hospital")]),i("p",{staticStyle:{color:"white"}},[t._v(" 虚拟宠物医院学习系统是一个虚拟宠物医院教学软件，可以使得宠物工作者不去实体医院就能系统地学习各种宠物诊疗专业知识。该软件主要针对相关专业毕业实习医生，能够使得毕业实习生了解宠物医院结构、科室、进行病例学习等。本软件设置不同岗位角色并配备约200个左右的真实病例。使用者可以通过选择如前台、医助等不同角色进行在线学习及考核等。 ")])],1)],1)])},a=[],r=(i("d3b7"),i("3ca3"),i("ddb0"),{name:"IndexHome",components:{NavbarMenu:function(){return i.e("chunk-01fca6ab").then(i.bind(null,"dfe6"))}},data:function(){return{opacity:.3,absolute:!0,overlay:!0,items:[{src:i("30cc")},{src:i("e018")},{src:i("62c5")},{src:i("e018")}]}}}),n=r,o=(i("9427"),i("cfca"),i("2877")),l=i("6544"),c=i.n(l),u=i("7496"),h=i("b0af"),d=i("5530"),m=(i("a9e3"),i("63b7"),i("f665")),p=i("afdd"),f=i("9d26"),v=i("37c6"),g=i("604c"),y=g["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return g["a"].options.computed.classes.call(this)}},methods:{genData:g["a"].options.methods.genData}}),b=i("80d2"),w=i("d9bd"),_=m["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},m["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(w["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:m["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],s=0;s<e;s++){var a=this.$createElement(p["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",s+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[s],s)}},[this.$createElement(f["a"],{props:{size:18}},this.delimiterIcon)]);i.push(a)}return this.$createElement(y,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(v["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=m["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(b["d"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),C=i("1e6c"),T=i("adda"),$=i("58df"),x=i("1c87"),D=Object($["a"])(C["a"],x["a"]),O=D.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(T["a"],{staticClass:"v-carousel__item",props:Object(d["a"])(Object(d["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(b["l"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),j=(i("3c93"),i("a9ad")),k=i("7560"),S=i("f2e7"),I=Object($["a"])(j["a"],k["a"],S["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(d["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),V=Object(o["a"])(n,s,a,!1,null,"16efa790",null);e["default"]=V.exports;c()(V,{VApp:u["a"],VCard:h["a"],VCarousel:_,VCarouselItem:O,VOverlay:I})},bf1f:function(t,e,i){},cfca:function(t,e,i){"use strict";i("32e0")},e018:function(t,e,i){t.exports=i.p+"static/img/scroll_2.fd15bd69.jpg"}}]);
//# sourceMappingURL=chunk-69f07e5a.03693ef0.js.map