webpackJsonp([0xb64770f1ac27],{394:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var o=a(149),r=i(o),l=a(153),n=i(l),d=a(152),c=i(d),u=a(399),p=i(u),f=a(398),h=i(f),g=a(9),m=i(g),y=a(28),b=i(y),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],z=function(e,t){s().observe(e),L.push([e,t])},j=null,I=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",n=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+l+t+a+o+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+n+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},O=function(e){var t=e.style,a=e.onLoad,i=(0,p.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};O.propTypes={style:b.default.object,onLoad:b.default.func};var W=function(e){function t(a){(0,r.default)(this,t);var i=(0,n.default)(this,e.call(this,a)),s=!0,o=!0,l=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,o=!1,l=!0),"undefined"==typeof window&&(s=!1,o=!1),i.state={isVisible:s,imgLoaded:o,IOSupported:l},i.handleRef=i.handleRef.bind(i),i}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&z(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,s=t.className,o=t.outerWrapperClassName,r=t.style,l=void 0===r?{}:r,n=t.imgStyle,d=void 0===n?{}:n,c=t.placeholderStyle,u=void 0===c?{}:c,p=t.sizes,f=t.resolutions,g=t.backgroundColor,y=t.Tag,b=void 0;b="boolean"==typeof g?"lightgray":g;var w=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,u),S=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(p){var E=p;return E.srcWebp&&E.srcSetWebp&&I()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),m.default.createElement(y,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},m.default.createElement(y,{className:(s?s:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},m.default.createElement(y,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&m.default.createElement(O,{alt:i,title:a,src:E.base64,style:w}),E.tracedSVG&&m.default.createElement(O,{alt:i,title:a,src:E.tracedSVG,style:w}),b&&m.default.createElement(y,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(O,{alt:i,title:a,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:S,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:i,title:a},E))}})))}if(f){var L=f,z=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},l);return"inherit"===l.display&&delete z.display,L.srcWebp&&L.srcSetWebp&&I()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),m.default.createElement(y,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},m.default.createElement(y,{className:(s?s:"")+" gatsby-image-wrapper",style:z,ref:this.handleRef},L.base64&&m.default.createElement(O,{alt:i,title:a,src:L.base64,style:w}),L.tracedSVG&&m.default.createElement(O,{alt:i,title:a,src:L.tracedSVG,style:w}),b&&m.default.createElement(y,{title:a,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&m.default.createElement(O,{alt:i,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:S,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:i,title:a,width:L.width,height:L.height},L))}})))}return null},t}(m.default.Component);W.defaultProps={fadeIn:!0,alt:"",Tag:"div"},W.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=W},512:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(394),s=a(148),o=a(9),r=a(81),l=a(441),n=function(e){var t=e.data,a=t.allDirectory,n=t.allFile,d=e.i18nMessages,c=e.i18nMessages.pageNames.photos,u=e.langKey,p=a.edges.map(function(e){var t=e.node.fields.slug;return"images/"+t.slice(0,-1)}),f=[];p.forEach(function(e){return f.push(n.edges.filter(function(t){var a=t.node.relativeDirectory;return a===e}))});var h=f.map(function(e){var t=e[0].node,a=t.childImageSharp,r=a.original.src,n=a.sizes,d=t.relativeDirectory;return o.createElement(s.default,{className:l.photoAlbumCoverWithTitle,key:r,to:"photos"+d.replace(/images/,"")+"/"},o.createElement(i.default,{alt:d.replace(/images\//,"")+" cover",className:l.wrapper,fadeIn:!0,outerWrapperClassName:l.item,sizes:n,title:d.replace(/images\//,"")+" cover"}),o.createElement("div",{className:l.title},o.createElement("span",null,d.replace(/images\/\d\d\d\d-\d\d-\d\d-/,"").replace(/-/g," ")),o.createElement("span",null,e.length)))});return o.createElement("article",{className:l.article},o.createElement(r.default,{currentLanguage:u,i18nMessages:d,page:c}),h)};t.PhotosEnQuery="** extracted graphql fragment **",t.default=n},441:function(e,t){e.exports={article:"src-pages----photos-module---article---2OsQO",photoAlbumCoverWithTitle:"src-pages----photos-module---photoAlbumCoverWithTitle---1izwr",item:"src-pages----photos-module---item---3MOPg",title:"src-pages----photos-module---title---3r-dK",wrapper:"src-pages----photos-module---wrapper---3horv"}}});
//# sourceMappingURL=component---src-pages-photos-en-tsx-cdc19ece297614a824d7.js.map