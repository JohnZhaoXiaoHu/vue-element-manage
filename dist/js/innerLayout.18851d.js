(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{597:function(t,e,n){},598:function(t,e,n){},599:function(t,e,n){},600:function(t,e,n){},601:function(t,e,n){},602:function(t,e,n){},603:function(t,e,n){},604:function(t,e,n){},680:function(t,e,n){"use strict";var a=n(597);n.n(a).a},681:function(t,e,n){"use strict";var a=n(598);n.n(a).a},682:function(t,e,n){"use strict";var a=n(599);n.n(a).a},683:function(t,e,n){"use strict";var a=n(600);n.n(a).a},684:function(t,e,n){"use strict";var a=n(601);n.n(a).a},685:function(t,e,n){"use strict";var a=n(602);n.n(a).a},686:function(t,e,n){"use strict";var a=n(603);n.n(a).a},687:function(t,e,n){"use strict";var a=n(604);n.n(a).a},782:function(t,e,n){"use strict";n.r(e);var a=n(584),i={data:function(){return{isFullScreen:!1}},methods:{handleFullScreen:function(){if(this.isFullScreen){var t=document,e=t.exitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;e&&e.call(t)}else{var n=document.documentElement,a=n.requestFullscreen||n.webkitRequestFullScreen||n.mozRequestFullScreen||n.msRequestFullscreen;a?a.call(n):this.$message({type:"warning",message:"您的浏览器不支持全屏浏览，请升级或更换浏览器！"})}this.isFullScreen=!this.isFullScreen}}},s=(n(680),n(67)),r=Object(s.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("el-tooltip",{attrs:{effect:"dark",content:this.isFullScreen?"取消全屏":"全屏浏览",placement:"bottom"}},[e("i",{staticClass:"el-icon-rank",on:{click:this.handleFullScreen}})])},[],!1,null,"c1abf736",null).exports,c=n(668),o=n(92),l=n(244),u={components:{FullScreen:r,ThemePicker:c.a},data:function(){return{avatar:""}},computed:{sideCollapse:function(){return this.$store.getters.sideCollapse}},created:function(){this.getAvatar()},methods:{handleCollapse:function(){this.$store.commit("SET_SIDE_COLLAPSE",!this.sideCollapse)},handleCommand:function(t){var e=this;"logout"===t&&this.$store.dispatch("logout").then(function(){Object(l.b)(),sessionStorage.clear(),e.$router.replace("/account/login")})},getAvatar:function(){var t=this;o.a.account.getUserInfo({username:sessionStorage.getItem("userId")}).then(function(e){t.avatar=e.data.userInfo.avatar})}}},h=(n(681),Object(s.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-bar"},[n("i",{staticClass:"header-bar__collapse",class:t.sideCollapse?"el-icon-s-fold":"el-icon-s-unfold",on:{click:t.handleCollapse}}),t._v(" "),n("div",{staticClass:"header-bar__menu"},[n("full-screen"),t._v(" "),n("theme-picker"),t._v(" "),n("el-dropdown",{on:{command:t.handleCommand}},[n("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:""}}),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/mine"}},[n("el-dropdown-item",[t._v("个人中心")])],1),t._v(" "),n("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("退出登录")])],1)],1)],1)])},[],!1,null,"1fee44cb",null).exports),d={name:"MenuItem",props:{config:{required:!0,default:{}}}},f=(n(682),{components:{MenuItem:Object(s.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.config.children?n("el-submenu",{attrs:{index:t.config.path}},[n("template",{slot:"title"},[t.config.icon?n("svg-icon",{attrs:{"icon-name":t.config.icon,"icon-class":"menu-icon"}}):t._e(),t._v(" "),n("span",[t._v(t._s(t.config.title))])],1),t._v(" "),t._l(t.config.children,function(t){return n("menu-item",{key:t.path,attrs:{config:t}})})],2):n("el-menu-item",{attrs:{index:t.config.path}},[t.config.icon?n("svg-icon",{attrs:{"icon-name":t.config.icon,"icon-class":"menu-icon"}}):t._e(),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.config.title))])],1)},[],!1,null,"2fe31cd4",null).exports},data:function(){return{menuRouteMap:[],menuList:[]}},computed:{sideCollapse:function(){return this.$store.getters.sideCollapse},routeMap:function(){return this.$store.getters.routeMap},activePath:function(){var t=this.$route,e=t.meta,n=t.path;return e.activePath?e.activePath:n}},created:function(){this.menuRouteMap=this.getMenuRouteMap(this.routeMap),this.menuList=this.getMenu(this.menuRouteMap)},methods:{getMenuRouteMap:function(t){var e=this;return t.filter(function(t){return!t.meta.hiddenInMenu&&(!t.children||(t.children=e.getMenuRouteMap(t.children),0!==t.children.length))})},getMenuItem:function(t){var e=this;return t.children&&1!==t.children.length?{title:t.meta.title,icon:t.meta.icon,path:t.path,children:t.children.map(function(t){return e.getMenuItem(t)})}:{title:t.meta.title,icon:t.meta.icon,path:t.path}},getMenu:function(t){var e=this;return this.menuRouteMap.map(function(t){return e.getMenuItem(t)})}}}),m=(n(683),n(684),Object(s.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-menu"},[e("el-scrollbar",[e("el-menu",{attrs:{"default-active":this.activePath,collapse:this.sideCollapse,"unique-opened":"",router:"","background-color":"#545c64","text-color":"#fff"}},this._l(this.menuList,function(t){return e("menu-item",{key:t.path,attrs:{config:t}})}),1)],1)],1)},[],!1,null,"6aea3eba",null).exports),p={computed:{sideCollapse:function(){return this.$store.getters.sideCollapse}}},v=(n(685),{components:{NavMenu:m,Logo:Object(s.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-bar-logo",class:{collapse:this.sideCollapse}},[e("router-link",{staticClass:"link",attrs:{to:"/"}},[e("svg-icon",{attrs:{"icon-name":"logo"}}),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!this.sideCollapse,expression:"!sideCollapse"}]},[this._v("后台管理系统")])],1)],1)},[],!1,null,"253fe4f1",null).exports},data:function(){return{}}}),g=Object(s.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-bar"},[e("logo"),this._v(" "),e("nav-menu")],1)},[],!1,null,null,null).exports,_={data:function(){return{tagList:[]}},watch:{$route:function(t){this.addTag(t)},tagList:function(){var t=this.tagList.map(function(t){if(t.name)return t.name});a.a.$emit("cachePage",t)}},created:function(){this.addTag(this.$route)},methods:{isTagActive:function(t){return this.$route.path==t},addTag:function(t){this.tagList.some(function(e){return e.path==t.path})||(this.tagList.length>=8&&this.tagList.shift(),this.tagList.push({title:t.meta.title,path:t.path,name:t.matched[1].components.default.name}))},closeTag:function(t){if(1==this.tagList.length&&"/dashboard"==this.tagList[0].path)return!1;var e=this.tagList.splice(t,1)[0],n=this.tagList[t]?this.tagList[t]:this.tagList[t-1];n?e.path==this.$route.path&&this.$router.push(n.path):this.$router.push("/dashboard")}}},C=(n(686),{components:{HeaderBar:h,SideBar:g,NavTag:Object(s.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-tag"},t._l(t.tagList,function(e,a){return n("div",{key:e.path,staticClass:"nav-tag__item",class:{active:t.isTagActive(e.path)}},[n("router-link",{staticClass:"link",attrs:{to:e.path}},[t._v(t._s(e.title))]),t._v(" "),n("i",{staticClass:"el-icon-circle-close icon",on:{click:function(e){return t.closeTag(a)}}})],1)}),0)},[],!1,null,"f2fa6040",null).exports},data:function(){return{cachePages:[]}},created:function(){var t=this;a.a.$on("cachePage",function(e){t.cachePages=e})}}),b=(n(687),Object(s.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inner-layout"},[e("side-bar"),this._v(" "),e("div",{staticClass:"inner-layout__main"},[e("header-bar"),this._v(" "),e("nav-tag"),this._v(" "),e("div",{staticClass:"inner-layout__page"},[e("transition",{attrs:{name:"page",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.cachePages}},[e("router-view")],1)],1)],1)],1)],1)},[],!1,null,"f19a5e62",null).exports);n.d(e,"default",function(){return b})}}]);