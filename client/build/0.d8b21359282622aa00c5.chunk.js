webpackJsonp([0,1],{"./app/containers/HomePage/ContentBody.js":function(e,t,n){"use strict";function o(e){return i(l,{},void 0,e.children)}var r=n("./node_modules/react/react.js"),a=(n.n(r),n("./node_modules/styled-components/dist/styled-components.es.js"));t.a=o;var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]),l=a.a.div(s)},"./app/containers/HomePage/ProductCard.js":function(e,t,n){"use strict";function o(){return v(P,{},void 0,v(i.a,{style:{width:"300px"}},void 0,T,_,j,x,O))}var r=n("./node_modules/react/react.js"),a=(n.n(r),n("./node_modules/react-toolbox/lib/card/Card.js")),i=n.n(a),s=n("./node_modules/react-toolbox/lib/card/CardMedia.js"),l=n.n(s),c=n("./node_modules/react-toolbox/lib/card/CardTitle.js"),d=n.n(c),u=n("./node_modules/react-toolbox/lib/card/CardText.js"),p=n.n(u),f=n("./node_modules/react-toolbox/lib/card/CardActions.js"),m=n.n(f),b=n("./node_modules/react-toolbox/lib/button/Button.js"),y=n.n(b),h=n("./node_modules/styled-components/dist/styled-components.es.js");t.a=o;var v=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),g=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  padding-bottom: 30px;\n"],["\n  padding-bottom: 30px;\n"]),P=h.a.div(g),T=v(d.a,{avatar:"https://placeimg.com/80/80/animals",title:"Avatar style title",subtitle:"Subtitle here"}),_=v(l.a,{aspectRatio:"wide",image:"https://placeimg.com/300/300/nature"}),j=v(d.a,{title:"Title goes here",subtitle:"Subtitle here"}),x=v(p.a,{},void 0,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),O=v(m.a,{},void 0,v(y.a,{label:"Action 1"}),v(y.a,{label:"Action 2"}))},"./app/containers/HomePage/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/react/react.js"),s=n.n(i),l=n("./node_modules/react-router/es/index.js"),c=n("./node_modules/ramda/dist/ramda.js"),d=(n.n(c),n("./node_modules/react-intl/lib/index.es.js")),u=n("./node_modules/react-toolbox/lib/tabs/Tab.js"),p=n.n(u),f=n("./node_modules/react-toolbox/lib/tabs/Tabs.js"),m=n.n(f),b=n("./node_modules/react-helmet/lib/Helmet.js"),y=n.n(b),h=n("./node_modules/styled-components/dist/styled-components.es.js"),v=n("./app/containers/HomePage/ContentBody.js"),g=n("./app/containers/HomePage/ProductCard.js"),P=n("./app/containers/HomePage/messages.js"),T=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),j=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  div > section {\n    outline: none;\n  }\n"],["\n  div > section {\n    outline: none;\n  }\n"]),x=["women","men","influencer","about"],O=h.a.div(j),w=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));C.call(n);var a=n.getIndexFromProps(e);return n.state={tabIndex:a},n}return a(t,e),_(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.getIndexFromProps(e);this.setState({tabIndex:t})}},{key:"getIndexFromProps",value:function(e){var t=e.routes,o=n.i(c.last)(t).path,r=n.i(c.findIndex)(n.i(c.equals)(o))(x);return-1===r?0:r}},{key:"render",value:function(){var e=this.props.intl.formatMessage,t=n.i(c.addIndex)(c.times);return T(O,{},void 0,T(y.a,{title:"Home Page",meta:[{name:"description",content:"A React/Redux/Rails Boilerplate application homepage"}]}),T(m.a,{index:this.state.tabIndex,onChange:this.handleTabChange},void 0,T(p.a,{label:e(P.a.tabs.shopWomen)},void 0,T(v.a,{},void 0,t(function(e){return T(g.a,{},e)},9))),T(p.a,{label:e(P.a.tabs.shopMen)},void 0,T(v.a,{},void 0,t(function(e){return T(g.a,{},e)},9))),T(p.a,{label:e(P.a.tabs.influencer)},void 0,"Some stuff about how to sign up."),T(p.a,{label:e(P.a.tabs.about)},void 0,"More about our company")))}}]),t}(s.a.Component),C=function(){var e=this;this.handleTabChange=function(t){e.setState({tabIndex:t}),l.a.push("/"+x[t])}};t.default=n.i(d.e)(w)},"./app/containers/HomePage/messages.js":function(e,t,n){"use strict";var o=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(o.d)({tabs:{shopWomen:{id:"boilerplate.containers.HomePage.tabs.shopWomen",defaultMessage:"Shop Women"},shopMen:{id:"boilerplate.containers.HomePage.tabs.shopMen",defaultMessage:"Shop Men"},influencer:{id:"boilerplate.containers.HomePage.tabs.influencer",defaultMessage:"Become an Influencer"},about:{id:"boilerplate.containers.HomePage.tabs.about",defaultMessage:"About Us"}}})},"./app/containers/HomePage/routes.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("./app/containers/HomePage/index.js");t.default=[{path:"women",component:o.default},{path:"men",component:o.default},{path:"influencer",component:o.default},{path:"about",component:o.default}]},"./node_modules/react-toolbox/lib/card/Card.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n("./node_modules/react/react.js"),l=o(s),c=n("./node_modules/react-css-themr/lib/index.js"),d=n("./node_modules/classnames/index.js"),u=o(d),p=n("./node_modules/react-toolbox/lib/identifiers.js"),f=function(e){var t=e.children,n=e.className,o=e.raised,s=e.theme,c=a(e,["children","className","raised","theme"]),d=(0,u.default)(s.card,r({},s.raised,o),n);return l.default.createElement("div",i({"data-react-toolbox":"card",className:d},c),t)};f.propTypes={children:s.PropTypes.node,className:s.PropTypes.string,raised:s.PropTypes.bool,theme:s.PropTypes.shape({card:s.PropTypes.string,raised:s.PropTypes.string})},t.default=(0,c.themr)(p.CARD)(f),t.Card=f},"./node_modules/react-toolbox/lib/card/CardActions.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.CardActions=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n("./node_modules/react/react.js"),s=o(i),l=n("./node_modules/react-css-themr/lib/index.js"),c=n("./node_modules/classnames/index.js"),d=o(c),u=n("./node_modules/react-toolbox/lib/identifiers.js"),p=function(e){var t=e.children,n=e.className,o=e.theme,i=r(e,["children","className","theme"]);return s.default.createElement("div",a({className:(0,d.default)(o.cardActions,n)},i),t)};p.propTypes={children:i.PropTypes.node,className:i.PropTypes.string,theme:i.PropTypes.shape({cardActions:i.PropTypes.string})},t.default=(0,l.themr)(u.CARD)(p),t.CardActions=p},"./node_modules/react-toolbox/lib/card/CardMedia.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.CardMedia=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n("./node_modules/react/react.js"),l=o(s),c=n("./node_modules/react-css-themr/lib/index.js"),d=n("./node_modules/classnames/index.js"),u=o(d),p=n("./node_modules/react-toolbox/lib/identifiers.js"),f=function(e){var t=e.aspectRatio,n=e.children,o=e.className,s=e.color,c=e.contentOverlay,d=e.image,p=e.theme,f=a(e,["aspectRatio","children","className","color","contentOverlay","image","theme"]),m=(0,u.default)(p.cardMedia,r({},p[t],t),o),b=(0,u.default)(p.content,r({},p.contentOverlay,c)),y={backgroundColor:s||void 0,backgroundImage:"string"==typeof d?"url('"+d+"')":void 0};return l.default.createElement("div",i({style:y,className:m},f),l.default.createElement("div",{className:b},n))};f.propTypes={aspectRatio:s.PropTypes.oneOf(["wide","square"]),children:s.PropTypes.node,className:s.PropTypes.string,color:s.PropTypes.string,contentOverlay:s.PropTypes.bool,image:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element]),theme:s.PropTypes.shape({cardMedia:s.PropTypes.string,content:s.PropTypes.string,contentOverlay:s.PropTypes.string,square:s.PropTypes.string,wide:s.PropTypes.string})},t.default=(0,c.themr)(p.CARD)(f),t.CardMedia=f},"./node_modules/react-toolbox/lib/card/CardText.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.CardText=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n("./node_modules/react/react.js"),s=o(i),l=n("./node_modules/react-css-themr/lib/index.js"),c=n("./node_modules/classnames/index.js"),d=o(c),u=n("./node_modules/react-toolbox/lib/identifiers.js"),p=function(e){var t=e.children,n=e.className,o=e.theme,i=r(e,["children","className","theme"]);return s.default.createElement("div",a({className:(0,d.default)(o.cardText,n)},i),"string"==typeof t?s.default.createElement("p",null,t):t)};p.propTypes={children:i.PropTypes.node,className:i.PropTypes.string,theme:i.PropTypes.shape({cardText:i.PropTypes.string})},t.default=(0,l.themr)(u.CARD)(p),t.CardText=p},"./node_modules/react-toolbox/lib/card/CardTitle.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.cardTitleFactory=t.CardTitle=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n("./node_modules/react/react.js"),l=o(s),c=n("./node_modules/classnames/index.js"),d=o(c),u=n("./node_modules/react-css-themr/lib/index.js"),p=n("./node_modules/react-toolbox/lib/identifiers.js"),f=n("./node_modules/react-toolbox/lib/avatar/Avatar.js"),m=o(f),b=function(e){var t=function(t){var n,o=t.avatar,s=t.children,c=t.className,u=t.subtitle,p=t.theme,f=t.title,m=a(t,["avatar","children","className","subtitle","theme","title"]),b=(0,d.default)(p.cardTitle,(n={},r(n,p.small,o),r(n,p.large,!o),n),c);return l.default.createElement("div",i({className:b},m),"string"==typeof o?l.default.createElement(e,{image:o,theme:p}):o,l.default.createElement("div",null,f&&l.default.createElement("h5",{className:p.title},f),s&&"string"==typeof s&&l.default.createElement("h5",{className:p.title},s),u&&l.default.createElement("p",{className:p.subtitle},u),s&&"string"!=typeof s&&s))};return t.propTypes={avatar:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element]),children:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element,s.PropTypes.array]),className:s.PropTypes.string,subtitle:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element]),theme:s.PropTypes.shape({large:s.PropTypes.string,title:s.PropTypes.string,small:s.PropTypes.string,subtitle:s.PropTypes.string}),title:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element])},t},y=b(m.default);t.default=(0,u.themr)(p.CARD)(y),t.CardTitle=y,t.cardTitleFactory=b},"./node_modules/react-toolbox/lib/font_icon/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FontIcon=void 0;var o=n("./node_modules/react-toolbox/lib/font_icon/FontIcon.js");t.default=o.FontIcon,t.FontIcon=o.FontIcon},"./node_modules/react-toolbox/lib/tabs/Tab.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=t.tabFactory=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),p=o(u),f=n("./node_modules/classnames/index.js"),m=o(f),b=n("./node_modules/react-css-themr/lib/index.js"),y=n("./node_modules/react-toolbox/lib/font_icon/index.js"),h=n("./node_modules/react-toolbox/lib/identifiers.js"),v=n("./node_modules/react-toolbox/lib/ripple/Ripple.js"),g=o(v),P=function(e){var t=function(e){function t(){var e,n,o,r;i(this,t);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.handleClick=function(e){!o.props.disabled&&o.props.onClick&&o.props.onClick(e,o.props.index)},r=n,s(o,r)}return l(t,e),d(t,[{key:"componentDidUpdate",value:function(e){!e.active&&this.props.active&&this.props.onActive&&this.props.onActive()}},{key:"render",value:function(){var e,t=this.props,n=(t.index,t.onActive,t.active),o=t.activeClassName,i=t.children,s=t.className,l=t.disabled,d=t.hidden,u=t.label,f=t.icon,b=t.theme,h=a(t,["index","onActive","active","activeClassName","children","className","disabled","hidden","label","icon","theme"]),v=(0,m.default)(b.label,(e={},r(e,b.active,n),r(e,b.hidden,d),r(e,b.withText,u),r(e,b.withIcon,f),r(e,b.disabled,l),r(e,o,n),e),s);return p.default.createElement("div",c({},h,{"data-react-toolbox":"tab",className:v,onClick:this.handleClick}),f&&p.default.createElement(y.FontIcon,{className:b.icon,value:f}),u,i)}}]),t}(u.Component);return t.propTypes={active:u.PropTypes.bool,activeClassName:u.PropTypes.string,children:u.PropTypes.node,className:u.PropTypes.string,disabled:u.PropTypes.bool,hidden:u.PropTypes.bool,icon:u.PropTypes.node,index:u.PropTypes.number,label:u.PropTypes.node,onActive:u.PropTypes.func,onClick:u.PropTypes.func,theme:u.PropTypes.shape({active:u.PropTypes.string,disabled:u.PropTypes.string,hidden:u.PropTypes.string,label:u.PropTypes.string,rippleWrapper:u.PropTypes.string,withIcon:u.PropTypes.string,withText:u.PropTypes.string})},t.defaultProps={active:!1,className:"",disabled:!1,hidden:!1},e(t)},T=P((0,g.default)({centered:!1}));t.default=(0,b.themr)(h.TABS)(T),t.tabFactory=P,t.Tab=T},"./node_modules/react-toolbox/lib/tabs/TabContent.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TabContent=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),d=o(c),u=n("./node_modules/classnames/index.js"),p=o(u),f=n("./node_modules/react-css-themr/lib/index.js"),m=n("./node_modules/react-toolbox/lib/identifiers.js"),b=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){var e=(0,p.default)(this.props.theme.tab,r({},this.props.theme.active,this.props.active),this.props.className);return d.default.createElement("section",{className:e,tabIndex:this.props.tabIndex},this.props.children)}}]),t}(c.Component);b.propTypes={active:c.PropTypes.bool,children:c.PropTypes.node,className:c.PropTypes.string,tabIndex:c.PropTypes.number,theme:c.PropTypes.shape({active:c.PropTypes.string,tab:c.PropTypes.string})},b.defaultProps={active:!1,className:""},t.default=(0,f.themr)(m.TABS)(b),t.TabContent=b},"./node_modules/react-toolbox/lib/tabs/Tabs.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=t.tabsFactory=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),d=o(c),u=n("./node_modules/classnames/index.js"),p=o(u),f=n("./node_modules/react-css-themr/lib/index.js"),m=n("./node_modules/react-toolbox/lib/identifiers.js"),b=n("./node_modules/react-toolbox/lib/font_icon/FontIcon.js"),y=o(b),h=n("./node_modules/react-toolbox/lib/utils/is-component-of-type.js"),v=o(h),g=n("./node_modules/react-toolbox/lib/tabs/Tab.js"),P=o(g),T=n("./node_modules/react-toolbox/lib/tabs/TabContent.js"),_=o(T),j=function(e,t,n){var o=function(t){return(0,v.default)(e,t)},u=function(e){return(0,v.default)(t,e)},f=function(e){function c(){var e,t,n,o;a(this,c);for(var r=arguments.length,s=Array(r),l=0;l<r;l++)s[l]=arguments[l];return t=n=i(this,(e=c.__proto__||Object.getPrototypeOf(c)).call.apply(e,[this].concat(s))),n.state={pointer:{},arrows:{}},n.handleHeaderClick=function(e){n.props.onChange&&n.props.onChange(e)},n.handleResize=function(){n.resizeTimeout&&clearTimeout(n.resizeTimeout),n.resizeTimeout=setTimeout(function(){n.updatePointer(n.props.index),n.updateArrows()},100)},n.updatePointer=function(e){if(n.navigationNode&&n.navigationNode.children[e]){var t=n.navigationNode.getBoundingClientRect(),o=n.navigationNode.children[e].getBoundingClientRect(),r=n.navigationNode.scrollLeft;n.setState({pointer:{top:t.height+"px",left:o.left-(t.left+r)+"px",width:o.width+"px"}})}},n.updateArrows=function(){var e=n.navigationNode.children.length-2;if(e>=0){var t=n.navigationNode.scrollLeft,o=n.navigationNode.getBoundingClientRect(),r=n.navigationNode.children[e].getBoundingClientRect();n.setState({arrows:{left:t>0,right:o.right<r.right-5}})}},n.scrollNavigation=function(e){var t=n.navigationNode.scrollLeft;n.navigationNode.scrollLeft+=e*n.navigationNode.clientWidth,n.navigationNode.scrollLeft!==t&&n.updateArrows()},n.scrollRight=function(){return n.scrollNavigation(-1)},n.scrollLeft=function(){return n.scrollNavigation(1)},o=t,i(n,o)}return s(c,e),l(c,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"componentWillReceiveProps",value:function(e){this.updatePointer(e.index)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),clearTimeout(this.resizeTimeout)}},{key:"parseChildren",value:function(){var e=this,n=[],r=[];return d.default.Children.forEach(this.props.children,function(a){o(a)?(n.push(a),a.props.children&&r.push(d.default.createElement(t,{theme:e.props.theme},a.props.children))):u(a)&&r.push(a)}),{headers:n,contents:r}}},{key:"renderHeaders",value:function(e){var t=this;return e.map(function(e,n){return d.default.cloneElement(e,{children:null,key:n,index:n,theme:t.props.theme,active:t.props.index===n,onClick:function(n,o){t.handleHeaderClick(o),e.props.onClick&&e.props.onClick(n)}})})}},{key:"renderContents",value:function(e){var t=this,n=e.map(function(e,n){return d.default.cloneElement(e,{key:n,theme:t.props.theme,active:t.props.index===n,hidden:t.props.index!==n&&"display"===t.props.hideMode,tabIndex:n})});return"display"===this.props.hideMode?n:n.filter(function(e,n){return n===t.props.index})}},{key:"render",value:function(){var e,t=this,o=this.props,a=o.className,i=o.disableAnimatedBottomBorder,s=o.theme,l=o.fixed,c=o.inverse,u=this.state.arrows,f=u.left,m=u.right,b=this.parseChildren(),y=b.headers,h=b.contents,v=(0,p.default)(s.pointer,r({},s.disableAnimation,i)),g=(0,p.default)(s.tabs,(e={},r(e,s.fixed,l),r(e,s.inverse,c),e),a);return d.default.createElement("div",{"data-react-toolbox":"tabs",className:g},d.default.createElement("div",{className:s.navigationContainer},f&&d.default.createElement("div",{className:s.arrowContainer,onClick:this.scrollRight},d.default.createElement(n,{className:s.arrow,value:"keyboard_arrow_left"})),d.default.createElement("nav",{className:s.navigation,ref:function(e){t.navigationNode=e}},this.renderHeaders(y),d.default.createElement("span",{className:v,style:this.state.pointer})),m&&d.default.createElement("div",{className:s.arrowContainer,onClick:this.scrollLeft},d.default.createElement(n,{className:s.arrow,value:"keyboard_arrow_right"}))),this.renderContents(h))}}]),c}(c.Component);return f.propTypes={children:c.PropTypes.node,className:c.PropTypes.string,disableAnimatedBottomBorder:c.PropTypes.bool,fixed:c.PropTypes.bool,hideMode:c.PropTypes.oneOf(["display","unmounted"]),index:c.PropTypes.number,inverse:c.PropTypes.bool,onChange:c.PropTypes.func,theme:c.PropTypes.shape({arrow:c.PropTypes.string,arrowContainer:c.PropTypes.string,disableAnimation:c.PropTypes.string,fixed:c.PropTypes.string,inverse:c.PropTypes.string,navigation:c.PropTypes.string,navigationContainer:c.PropTypes.string,pointer:c.PropTypes.string,tabs:c.PropTypes.string})},f.defaultProps={index:0,fixed:!1,inverse:!1,hideMode:"unmounted"},f},x=j(P.default,_.default,y.default);t.default=(0,f.themr)(m.TABS)(x),t.tabsFactory=j,t.Tabs=x},"./node_modules/react-toolbox/lib/utils/is-component-of-type.js":function(e,t,n){"use strict";function o(e){i=e}function r(e,t){return t&&t.type===e}function a(e,t){return i?i(e,t):r(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.overrideComponentTypeChecker=o,t.defaultChecker=r,t.default=a;var i=void 0}});