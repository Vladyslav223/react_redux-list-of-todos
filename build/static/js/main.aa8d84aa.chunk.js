(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,r){e.exports=r(33)},24:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),s=r.n(o),c=(r(24),r(3)),i=r(7),u=r(16),l=r(13),d=r(14),p=r(17),m=r(15),f=r(18),h=(r(30),r(4));function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach(function(t){Object(i.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=function(e){return{type:"HANDLE_REMOVE",payload:e}},O={isLoading:!1,hasError:!1,disabled:!1,todosWithUsers:[]},g=(r(31),r(32),function(e){var t=e.user,r=t.username,n=t.name,o=t.phone,s=t.website,c=t.email;return a.a.createElement("div",{className:"user"},a.a.createElement("p",{className:"user__username"},r),a.a.createElement("p",{className:"user__name"},n),a.a.createElement("p",{className:"user__email"},c),a.a.createElement("p",{className:"user__phone"},o),a.a.createElement("p",{className:"user__website"},s))}),j=function(e){var t=e.todo,r=e.handleRemove,n=t.id,o=t.title,s=t.completed,c=t.user;return a.a.createElement("div",{className:s?"todo-item completed":"todo-item"},a.a.createElement("p",{className:"todo-item__title"},a.a.createElement("span",{className:"digit"},n),a.a.createElement("button",{onClick:function(){return r(n)},type:"button",className:"remove"},"\u2715")),a.a.createElement("p",{className:"todo-item__main-title"},o),a.a.createElement(g,{user:c}))},v=Object(c.b)(null,function(e){return{handleRemove:function(t){return e(y(t))}}})(j),w=function(e){var t=e.todos;return a.a.createElement("div",{className:"todos-list"},t.map(function(e){return a.a.createElement(v,{key:e.id,todo:e})}))};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var L=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).loadDatas=function(){var e=r.props,t=e.startLoading,n=e.handleSuccess,a=e.handleError;t(),Promise.all([fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}),fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()})]).then(function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1].map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach(function(t){Object(i.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{user:r.find(function(t){return t.id===e.userId})})});n(a)}).catch(function(){a()})},r}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todosWithUsers,r=e.isLoading,n=e.hasError,o=e.disabled,s=e.handleSort,c=t;return r?a.a.createElement("p",null,"Loading..."):n?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Error priexal!"),a.a.createElement("button",{type:"button",onClick:this.loadDatas},"Try again")):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"h1"},"Dynamic list of todos"),o?a.a.createElement("select",{onChange:function(e){s(e.target.value)}},a.a.createElement("option",{value:"Sorting",selected:!0,hidden:!0},"Sorting"),a.a.createElement("option",{value:"By user"},"By user"),a.a.createElement("option",{value:"By title"},"By title"),a.a.createElement("option",{value:"By status"},"By status")):a.a.createElement("button",{onClick:this.loadDatas,className:"button-start",type:"button"},"Load"),a.a.createElement(w,{todos:c}))}}]),t}(a.a.Component);L.defaultProps={hasError:!1,isLoading:!1,disabled:!1};var N=L,_=Object(c.b)(function(e){return{isLoading:e.isLoading,hasError:e.hasError,todosWithUsers:e.todosWithUsers,disabled:e.disabled,sortedTodos:e.sortedTodos}},function(e){return{startLoading:function(){return e({type:"LOAD"})},handleSuccess:function(t){return e(function(e){return{type:"HANDLE_SUCCESS",todosWithUsers:e}}(t))},handleError:function(){return e({type:"HANDLE_ERROR"})},handleRemove:function(t){return e(y(t))},handleSort:function(t){return e(function(e){return{type:"HANDLE_SORT",payload:e}}(t))}}})(N),P=r(6),S=Object(P.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOAD":return b({},e,{isLoading:!0,hasError:!1});case"HANDLE_SUCCESS":return b({},e,{todosWithUsers:t.todosWithUsers,isLoading:!1,hasError:!1,disabled:!0});case"HANDLE_ERROR":return b({},e,{isLoading:!1,hasError:!0});case"HANDLE_REMOVE":return{todosWithUsers:Object(h.a)(e.todosWithUsers).filter(function(e){return e.id!==t.payload})};case"HANDLE_SORT":switch(t.payload){case"By user":return b({},e,{todosWithUsers:Object(h.a)(e.todosWithUsers).sort(function(e,t){return e.user.username.localeCompare(t.user.username)})});case"By title":return b({},e,{todosWithUsers:Object(h.a)(e.todosWithUsers).sort(function(e,t){return e.title.localeCompare(t.title)})});case"By status":return b({},e,{todosWithUsers:Object(h.a)(e.todosWithUsers).sort(function(e,t){return e.completed-t.completed})});default:return e}default:return e}},O);s.a.render(a.a.createElement(c.a,{store:S},a.a.createElement(_,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.aa8d84aa.chunk.js.map