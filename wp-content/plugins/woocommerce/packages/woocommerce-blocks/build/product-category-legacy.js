this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-category"]=function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],b=0,g=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&g.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);g.length;)g.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={13:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;return c.push([618,2,0,1]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},108:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(6),c=Object(n.createElement)("img",{src:o.o+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},11:function(e,t){!function(){e.exports=this.React}()},12:function(e,t){!function(){e.exports=this.wp.url}()},13:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},14:function(e,t){!function(){e.exports=this.moment}()},15:function(e,t){!function(){e.exports=this.wp.blocks}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.blockEditor}()},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(13),o=r.n(n),c=r(24),i=r.n(c),u=function(){var e=i()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},27:function(e,t,r){"use strict";r.d(t,"g",(function(){return g})),r.d(t,"d",(function(){return p})),r.d(t,"a",(function(){return d})),r.d(t,"h",(function(){return f})),r.d(t,"e",(function(){return h})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return m})),r.d(t,"f",(function(){return j}));var n=r(8),o=r.n(n),c=r(12),i=r(9),u=r.n(i),a=r(5),s=r(6);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,l=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,a={per_page:s.f?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b(b({},a),u))];return s.f&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id").map((function(e){return b(b({},e),{},{parent:0})}))})).catch((function(e){throw e}))},p=function(e){return u()({path:"/wc/store/products/".concat(e)})},d=function(){return u()({path:"wc/store/products/attributes"})},f=function(e){return u()({path:"wc/store/products/attributes/".concat(e,"/terms")})},h=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:s.g?100:0,orderby:s.g?"count":"name",order:s.g?"desc":"asc",search:n})];return s.g&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id")}))},O=function(e){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},e))})},m=function(e){return u()({path:"wc/store/products/categories/".concat(e)})},j=function(e){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})}},28:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},30:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(28));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},36:function(e,t){!function(){e.exports=this.wp.keycodes}()},39:function(e,t){!function(){e.exports=this.wp.editor}()},4:function(e,t){!function(){e.exports=this.wp.components}()},42:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(6),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:n.a},rows:{type:"number",default:n.c},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},43:function(e,t,r){"use strict";var n=r(8),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title",'woocommerce'),help:l?Object(i.__)("Product title is visible.",'woocommerce'):Object(i.__)("Product title is hidden.",'woocommerce'),checked:l,onChange:function(){return t(s(s({},r),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price",'woocommerce'),help:o?Object(i.__)("Product price is visible.",'woocommerce'):Object(i.__)("Product price is hidden.",'woocommerce'),checked:o,onChange:function(){return t(s(s({},r),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating",'woocommerce'),help:a?Object(i.__)("Product rating is visible.",'woocommerce'):Object(i.__)("Product rating is hidden.",'woocommerce'),checked:a,onChange:function(){return t(s(s({},r),{},{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button",'woocommerce'),help:n?Object(i.__)("Add to Cart button is visible.",'woocommerce'):Object(i.__)("Add to Cart button is hidden.",'woocommerce'),checked:n,onChange:function(){return t(s(s({},r),{},{button:!n}))}}))}},45:function(e,t,r){"use strict";var n=r(16),o=r.n(n),c=r(0),i=r(1),u=r(5),a=(r(2),r(31)),s=r(4),l=r(13),b=r.n(l),g=r(24),p=r.n(g),d=r(18),f=r.n(d),h=r(19),O=r.n(h),m=r(17),j=r.n(m),w=r(20),y=r.n(w),v=r(21),_=r.n(v),k=r(10),E=r.n(k),S=r(22),P=r(27),C=r(26);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E()(e);if(t){var o=E()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _()(this,r)}}var x=Object(S.createHigherOrderComponent)((function(e){return function(t){y()(n,t);var r=A(n);function n(){var e;return f()(this,n),(e=r.apply(this,arguments)).state={error:null,loading:!1,categories:null},e.loadCategories=e.loadCategories.bind(j()(e)),e}return O()(n,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(P.b)().then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=p()(b.a.mark((function t(r){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(r);case 2:n=t.sent,e.setState({categories:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(c.createElement)(e,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),n}(c.Component)}),"withCategories"),D=r(30),R=(r(109),function(e){var t=e.categories,r=e.error,n=e.isLoading,l=e.onChange,b=e.onOperatorChange,g=e.operator,p=e.selected,d=e.isSingle,f=e.showReviewCount,h={clear:Object(i.__)("Clear all product categories",'woocommerce'),list:Object(i.__)("Product Categories",'woocommerce'),noItems:Object(i.__)("Your store doesn't have any product categories.",'woocommerce'),search:Object(i.__)("Search for product categories",'woocommerce'),selected:function(e){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",e,'woocommerce'),e)},updated:Object(i.__)("Category search results updated.",'woocommerce')};return r?Object(c.createElement)(D.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:p.map((function(e){return Object(u.find)(t,{id:e})})).filter(Boolean),onChange:l,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,u=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===u&&0!==t.parent&&s.push("is-skip-level");var l=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,b=f?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",t.review_count,'woocommerce'),l,t.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",t.count,'woocommerce'),l,t.count),g=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",t.review_count,'woocommerce'),t.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",t.count,'woocommerce'),t.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},e,{showCount:!0,countLabel:g,"aria-label":b}))},messages:h,isHierarchical:!0,isSingle:d}),!!b&&Object(c.createElement)("div",{className:p.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching",'woocommerce'),help:Object(i.__)("Pick at least two categories to use this setting.",'woocommerce'),value:g,onChange:b,options:[{label:Object(i.__)("Any selected categories",'woocommerce'),value:"any"},{label:Object(i.__)("All selected categories",'woocommerce'),value:"all"}]})))});R.defaultProps={operator:"any",isSingle:!1};t.a=x(R)},48:function(e,t){!function(){e.exports=this.ReactDOM}()},49:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(5),i=(r(2),r(4)),u=r(6);t.a=function(e){var t=e.columns,r=e.rows,a=e.setAttributes,s=e.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns",'woocommerce'),value:t,onChange:function(e){var t=Object(c.clamp)(e,u.j,u.h);a({columns:Object(c.isNaN)(t)?"":t})},min:u.j,max:u.h}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows",'woocommerce'),value:r,onChange:function(e){var t=Object(c.clamp)(e,u.l,u.i);a({rows:Object(c.isNaN)(t)?"":t})},min:u.l,max:u.i}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block",'woocommerce'),help:s?Object(o.__)("The last inner block will be aligned vertically.",'woocommerce'):Object(o.__)("The last inner block will follow other content.",'woocommerce'),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},5:function(e,t){!function(){e.exports=this.lodash}()},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),o=r(7),c=r.n(o),i=r(47),u=r.n(i),a=r(6);function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=function(e){return function(t){var r=t.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,g=r.columns||a.a,p=r.rows||a.c,d=new Map;switch(d.set("limit",p*g),d.set("columns",g),c&&c.length&&(d.set("category",c.join(",")),i&&"all"===i&&d.set("cat_operator","AND")),n&&n.length&&(d.set("terms",n.map((function(e){return e.id})).join(",")),d.set("attribute",n[0].attr_slug),o&&"all"===o&&d.set("terms_operator","AND")),l&&("price_desc"===l?(d.set("orderby","price"),d.set("order","DESC")):"price_asc"===l?(d.set("orderby","price"),d.set("order","ASC")):"date"===l?(d.set("orderby","date"),d.set("order","DESC")):d.set("orderby",l)),t){case"woocommerce/product-best-sellers":d.set("best_selling","1");break;case"woocommerce/product-top-rated":d.set("orderby","rating");break;case"woocommerce/product-on-sale":d.set("on_sale","1");break;case"woocommerce/product-new":d.set("orderby","date"),d.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";d.set("ids",b.join(",")),d.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,h="[products",O=s(d);try{for(O.s();!(f=O.n()).done;){var m=u()(f.value,2);h+=" "+m[0]+'="'+m[1]+'"'}}catch(e){O.e(e)}finally{O.f()}return h+="]"}(t,e))}}},51:function(e,t){!function(){e.exports=this.wp.viewport}()},56:function(e,t){!function(){e.exports=this.wp.hooks}()},594:function(e,t,r){},6:function(e,t,r){"use strict";r.d(t,"m",(function(){return o})),r.d(t,"n",(function(){return c})),r.d(t,"h",(function(){return i})),r.d(t,"j",(function(){return u})),r.d(t,"a",(function(){return a})),r.d(t,"i",(function(){return s})),r.d(t,"l",(function(){return l})),r.d(t,"c",(function(){return b})),r.d(t,"k",(function(){return g})),r.d(t,"b",(function(){return p})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return f})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return O})),r.d(t,"o",(function(){return m}));var n=r(3),o=(Object(n.getSetting)("currentUserIsAdmin",!1),Object(n.getSetting)("reviewRatingsEnabled",!0)),c=Object(n.getSetting)("showAvatars",!0),i=Object(n.getSetting)("max_columns",6),u=Object(n.getSetting)("min_columns",1),a=Object(n.getSetting)("default_columns",3),s=Object(n.getSetting)("max_rows",6),l=Object(n.getSetting)("min_rows",1),b=Object(n.getSetting)("default_rows",3),g=Object(n.getSetting)("min_height",500),p=Object(n.getSetting)("default_height",500),d=(Object(n.getSetting)("placeholderImgSrc",""),Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),f=Object(n.getSetting)("limitTags"),h=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0)),O=Object(n.getSetting)("homeUrl",""),m=(Object(n.getSetting)("couponsEnabled",!0),Object(n.getSetting)("shippingEnabled",!0),Object(n.getSetting)("taxesEnabled",!0),Object(n.getSetting)("displayItemizedTaxes",!1),Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1),Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[]),Object(n.getSetting)("isShippingCalculatorEnabled",!0),Object(n.getSetting)("isShippingCostHidden",!1),Object(n.getSetting)("woocommerceBlocksPhase",1),Object(n.getSetting)("wcBlocksAssetUrl","")),j=(Object(n.getSetting)("shippingCountries",{}),Object(n.getSetting)("allowedCountries",{}),Object(n.getSetting)("shippingStates",{}),Object(n.getSetting)("allowedStates",{}),Object(n.getSetting)("shippingMethodsExist",!1),Object(n.getSetting)("checkoutShowLoginReminder",!0),{id:0,title:"",permalink:""}),w=Object(n.getSetting)("storePages",{shop:j,cart:j,checkout:j,privacy:j,terms:j});w.shop.permalink,w.checkout.id,w.checkout.permalink,w.privacy.permalink,w.privacy.title,w.terms.permalink,w.terms.title,w.cart.id,w.cart.permalink,Object(n.getSetting)("checkoutAllowsGuest",!1),Object(n.getSetting)("checkoutAllowsSignup",!1),r(15)},61:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},618:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r.n(n),c=r(0),i=r(1),u=r(15),a=r(5),s=r(63),l=r(633),b=Object(c.createElement)(l.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"})),g=(r(594),r(18)),p=r.n(g),d=r(19),f=r.n(d),h=r(17),O=r.n(h),m=r(20),j=r.n(m),w=r(21),y=r.n(w),v=r(10),_=r.n(v),k=r(23),E=r(39),S=r(4),P=(r(2),r(43)),C=r(49),A=r(45),x=r(65),D=r(108);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_()(e);if(t){var o=_()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y()(this,r)}}var T=function(e){j()(r,e);var t=M(r);function r(){var e;p()(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),o()(O()(e),"state",{changedAttributes:{},isEditing:!1}),o()(O()(e),"startEditing",(function(){e.setState({isEditing:!0,changedAttributes:{}})})),o()(O()(e),"stopEditing",(function(){e.setState({isEditing:!1,changedAttributes:{}})})),o()(O()(e),"setChangedAttributes",(function(t){e.setState((function(e){return{changedAttributes:B(B({},e.changedAttributes),t)}}))})),o()(O()(e),"save",(function(){var t=e.state.changedAttributes;(0,e.props.setAttributes)(t),e.stopEditing()})),e}return f()(r,[{key:"componentDidMount",value:function(){this.props.attributes.categories.length||this.setState({isEditing:!0})}},{key:"getInspectorControls",value:function(){var e=this,t=this.props,r=t.attributes,n=t.setAttributes,o=this.state.isEditing,u=r.columns,a=r.catOperator,s=r.contentVisibility,l=r.orderby,b=r.rows,g=r.alignButtons;return Object(c.createElement)(k.InspectorControls,{key:"inspector"},Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Product Category",'woocommerce'),initialOpen:!r.categories.length&&!o},Object(c.createElement)(A.a,{selected:r.categories,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.map((function(e){return e.id})),o={categories:r};n(o),e.setChangedAttributes(o)},operator:a,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any",r={catOperator:t};n(r),e.setChangedAttributes(r)}})),Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Layout",'woocommerce'),initialOpen:!0},Object(c.createElement)(C.a,{columns:u,rows:b,alignButtons:g,setAttributes:n})),Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Content",'woocommerce'),initialOpen:!0},Object(c.createElement)(P.a,{settings:s,onChange:function(e){return n({contentVisibility:e})}})),Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Order By",'woocommerce'),initialOpen:!1},Object(c.createElement)(x.a,{setAttributes:n,value:l})))}},{key:"renderEditMode",value:function(){var e=this,t=this.props,r=t.attributes,n=t.debouncedSpeak,o=this.state.changedAttributes,u=B(B({},r),o);return Object(c.createElement)(S.Placeholder,{icon:Object(c.createElement)(s.a,{srcElement:b}),label:Object(i.__)("Products by Category",'woocommerce'),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("Display a grid of products from your selected categories.",'woocommerce'),Object(c.createElement)("div",{className:"wc-block-products-category__selection"},Object(c.createElement)(A.a,{selected:u.categories,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.map((function(e){return e.id}));e.setChangedAttributes({categories:r})},operator:u.catOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return e.setChangedAttributes({catOperator:t})}}),Object(c.createElement)(S.Button,{isPrimary:!0,onClick:function(){e.save(),n(Object(i.__)("Showing Products by Category block preview.",'woocommerce'))}},Object(i.__)("Done",'woocommerce')),Object(c.createElement)(S.Button,{className:"wc-block-products-category__cancel-button",isTertiary:!0,onClick:function(){e.stopEditing(),n(Object(i.__)("Showing Products by Category block preview.",'woocommerce'))}},Object(i.__)("Cancel",'woocommerce'))))}},{key:"renderViewMode",value:function(){var e=this.props,t=e.attributes,r=e.name,n=t.categories.length;return Object(c.createElement)(S.Disabled,null,n?Object(c.createElement)(E.ServerSideRender,{block:r,attributes:t,EmptyResponsePlaceholder:function(){return Object(c.createElement)(S.Placeholder,{icon:Object(c.createElement)(s.a,{srcElement:b}),label:Object(i.__)("Products by Category",'woocommerce'),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("No products were found that matched your selection.",'woocommerce'))}}):Object(i.__)("Select at least one category to display its products.",'woocommerce'))}},{key:"render",value:function(){var e=this,t=this.state.isEditing;return this.props.attributes.isPreview?D.a:Object(c.createElement)(c.Fragment,null,Object(c.createElement)(k.BlockControls,null,Object(c.createElement)(S.Toolbar,{controls:[{icon:"edit",title:Object(i.__)("Edit"),onClick:function(){return t?e.stopEditing():e.startEditing()},isActive:t}]})),this.getInspectorControls(),t?this.renderEditMode():this.renderViewMode())}}]),r}(c.Component),N=Object(S.withSpokenMessages)(T),I=r(50),L=r(42);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(u.registerBlockType)("woocommerce/product-category",{title:Object(i.__)("Products by Category",'woocommerce'),icon:{src:Object(c.createElement)(s.a,{srcElement:b}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce",'woocommerce')],description:Object(i.__)("Display a grid of products from your selected categories.",'woocommerce'),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:H(H({},L.a),{},{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),transforms:{from:[{type:"block",blocks:Object(a.without)(L.b,"woocommerce/product-category"),transform:function(e){return Object(u.createBlock)("woocommerce/product-category",H(H({},e),{},{editMode:!1}))}}]},deprecated:[{attributes:H(H({},L.a),{},{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),save:Object(I.a)("woocommerce/product-category")}],edit:function(e){return Object(c.createElement)(N,e)},save:function(){return null}})},62:function(e,t){!function(){e.exports=this.wp.date}()},63:function(e,t,r){"use strict";var n=r(8),o=r.n(n),c=r(37),i=r.n(c),u=r(11);r(2);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(u.isValidElement)(t)&&Object(u.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},65:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(4);r(2);t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by",'woocommerce'),value:t,options:[{label:Object(o.__)("Newness - newest first",'woocommerce'),value:"date"},{label:Object(o.__)("Price - low to high",'woocommerce'),value:"price_asc"},{label:Object(o.__)("Price - high to low",'woocommerce'),value:"price_desc"},{label:Object(o.__)("Rating - highest first",'woocommerce'),value:"rating"},{label:Object(o.__)("Sales - most first",'woocommerce'),value:"popularity"},{label:Object(o.__)("Title - alphabetical",'woocommerce'),value:"title"},{label:Object(o.__)("Menu Order",'woocommerce'),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},69:function(e,t){!function(){e.exports=this.wp.dom}()},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){},77:function(e,t){},79:function(e,t){},80:function(e,t){},81:function(e,t){},82:function(e,t){},84:function(e,t){},85:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},9:function(e,t){!function(){e.exports=this.wp.apiFetch}()}});
