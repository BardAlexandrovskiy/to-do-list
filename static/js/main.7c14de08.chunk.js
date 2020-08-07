(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{20:function(n,t,e){n.exports=e(32)},32:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),a=e(12),c=e.n(a),i=e(5),u=e(6),l=e(10),p=e(9),s=e(1),f=e(2);function d(){var n=Object(s.a)(["\n  list-style-type: none;\n"]);return d=function(){return n},n}function h(){var n=Object(s.a)(["\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n  position: relative;\n"]);return h=function(){return n},n}function b(){var n=Object(s.a)(["\n  font-size: 100px;\n  line-height: 100px;\n  font-weight: 100;\n  color: rgba(175, 47, 47, 0.15);\n  text-align: center;\n  margin-bottom: 10px;\n\n  @media (max-width: 736px) {\n    font-size: 80px;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(s.a)(["\n  max-width: 550px;\n  margin: 0 auto;\n"]);return v=function(){return n},n}var O=f.b.div(v()),x=f.b.h1(b()),g=f.b.div(h()),m=f.b.ul(d()),D=e(4);function E(){var n=Object(s.a)(["\n  position: absolute;\n  height: 34px;\n  width: 34px;\n  font-size: 22px;\n  transform: rotate(90deg);\n  top: calc(50% - 17px);\n  left: 10px;\n  line-height: 34px;\n  color: rgba(77, 77, 77, 0.5);\n  opacity: ",";\n"]);return E=function(){return n},n}function j(){var n=Object(s.a)(["\n  width: 100%;\n  font-size: 24px;\n  line-height: 24px;\n  color: #4d4d4d;\n  padding: 16px 16px 16px 50px;\n  background-color: #fff;\n\n  &::placeholder {\n    opacity: 0.5;\n    font-style: italic;\n  }\n\n  @media (max-width: 736px) {\n    font-size: 21px;\n  }\n"]);return j=function(){return n},n}function k(){var n=Object(s.a)(["\n  position: relative;\n"]);return k=function(){return n},n}var C=f.b.div(k()),y=f.b.input(j()),w=f.b.button(E(),(function(n){return n.opacity?"0.5":"1"})),L=function(n){Object(l.a)(e,n);var t=Object(p.a)(e);function e(){var n;Object(i.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))).handleChangeInput=function(t){(0,n.props.inputChangeValue)(t.target.value)},n.handlePressInput=function(t){var e=n.props,o=e.createNewToDo,r=e.value,a=e.inputChangeValue;13===t.keyCode&&r.trim()&&(o(r),a(""))},n.handleClickCheckAllButton=function(){(0,n.props.checkAllToDo)()},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this.props,t=n.value,e=n.toDoList,o=0,a=!1;return e.forEach((function(n){n.check&&(o+=1)})),o===e.length&&(a=!0),r.a.createElement(C,null,!!e.length&&r.a.createElement(w,{onClick:this.handleClickCheckAllButton,opacity:a},"\u276f"),r.a.createElement(y,{placeholder:"What needs to be done?",value:t,onChange:this.handleChangeInput,onKeyDown:this.handlePressInput}))}}]),e}(r.a.Component),T=Object(D.b)((function(n){return{value:n.input.value,toDoList:n.toDo.toDoList}}),(function(n){return{inputChangeValue:function(t){return n(function(n){return{type:"CHANGE_INPUT",data:n}}(t))},createNewToDo:function(t){return n(function(n){return{type:"CREATE_NEW_TO_DO",data:n}}(t))},checkAllToDo:function(){return n({type:"CHECK_ALL_TO_DO"})}}}))(L);function _(){var n=Object(s.a)(["\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  font-size: 24px;\n  color: #cc9a9a;\n  cursor: pointer;\n"]);return _=function(){return n},n}function A(){var n=Object(s.a)(["\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  font-size: 24px;\n  border-radius: 50%;\n  position: absolute;\n  border: 1px solid ",";\n  left: 10px;\n  top: 50%;\n  cursor: pointer;\n  transform: translateY(-50%);\n  color: ",";\n  transition: border 0.3s, color 0.3s;\n"]);return A=function(){return n},n}function z(){var n=Object(s.a)(["\n  padding: 16px 40px 16px 50px;\n  color: ",";\n  font-size: 24px;\n  line-height: 28px;\n  border-top: 1px solid #e6e6e6;\n  word-wrap: break-word;\n  position: relative;\n  transition: color 0.3s;\n  text-decoration: ",";\n\n  @media (max-width: 736px) {\n    font-size: 21px;\n  }\n"]);return z=function(){return n},n}var N=f.b.li(z(),(function(n){return n.check?"rgba(77,\t77,\t77, 0.5)":"rgba(77,\t77,\t77, 1)"}),(function(n){return n.check?"line-through":"none"})),I=f.b.button(A(),(function(n){return n.check?"#5dc2af":"#e6e6e6"}),(function(n){return n.check?"#5dc2af":"transparent"})),B=f.b.button(_()),H=function(n){Object(l.a)(e,n);var t=Object(p.a)(e);function e(){var n;Object(i.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))).handleClickDeleteButton=function(){var t=n.props,e=t.id;(0,t.deleteToDo)(e)},n.handleClickCheckButton=function(){var t=n.props,e=t.id;(0,t.checkToDo)(e)},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this.props,t=n.value,e=n.check;return r.a.createElement(N,{check:e},r.a.createElement(I,{check:e,onClick:this.handleClickCheckButton},"\u2713"),t,r.a.createElement(B,{onClick:this.handleClickDeleteButton},"\u2716"))}}]),e}(r.a.Component),P=Object(D.b)((function(n){return{toDoList:n.toDo.toDoList}}),(function(n){return{deleteToDo:function(t){return n(function(n){return{type:"DELETE_TO_DO",data:{id:n}}}(t))},checkToDo:function(t){return n(function(n){return{type:"CHECK_TO_DO",data:{id:n}}}(t))}}}))(H);function K(){var n=Object(s.a)(["\n  font-size: 16px;\n  color: #4d4d4d;\n  opacity: 0.7;\n"]);return K=function(){return n},n}function W(){var n=Object(s.a)(["\n  font-size: 16px;\n  cursor: pointer;\n  color: #4d4d4d;\n  opacity: 0.7;\n"]);return W=function(){return n},n}function J(){var n=Object(s.a)(["\n  padding: 16px 16px 16px 50px;\n  border-top: 1px solid #e6e6e6;\n  display: flex;\n  justify-content: space-between;\n"]);return J=function(){return n},n}var R=f.b.footer(J()),S=f.b.button(W()),U=f.b.p(K()),V=Object(D.b)((function(n){return{toDoList:n.toDo.toDoList}}),(function(n){return{deleteCompleted:function(){return n({type:"DELETE_COMPLETED"})}}}))((function(n){var t=n.deleteCompleted,e=n.toDoList,o=!1,a=0;return e.forEach((function(n){n.check?o=!0:a+=1})),!!e.length&&r.a.createElement(R,null,r.a.createElement(U,null,"tasks left: ",a),o&&r.a.createElement(S,{onClick:function(){return t()}},"delete completed"))})),G=function(n){Object(l.a)(e,n);var t=Object(p.a)(e);function e(){var n;Object(i.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))).componentDidUpdate=function(){var t=n.props.toDoList;localStorage.setItem("todos",JSON.stringify({toDoList:t}))},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this.props.toDoList;return r.a.createElement(O,null,r.a.createElement(x,null,"todos"),r.a.createElement(g,null,r.a.createElement(T,null),r.a.createElement(m,null,n.map((function(n){return r.a.createElement(P,{value:n.value,key:n.id,check:n.check,id:n.id})}))),r.a.createElement(V,null)))}}]),e}(r.a.Component),M=Object(D.b)((function(n){return{toDoList:n.toDo.toDoList}}))(G),Y=e(8),$=e(3),q={value:""};var F=JSON.parse(localStorage.getItem("todos"))||{toDoList:[]};var Q=Object(Y.b)({input:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_INPUT":return Object($.a)(Object($.a)({},n),{},{value:t.data});default:return n}},toDo:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,e=n.toDoList,o=t.data,r=t.type;switch(r){case"CREATE_NEW_TO_DO":return Object($.a)(Object($.a)({},n),{},{toDoList:e.concat({value:o,check:!1,id:Date.now()})});case"DELETE_TO_DO":return Object($.a)(Object($.a)({},n),{},{toDoList:e.filter((function(n){return n.id!==o.id}))});case"CHECK_TO_DO":return Object($.a)(Object($.a)({},n),{},{toDoList:e.map((function(n){return n.id===o.id?Object($.a)(Object($.a)({},n),{},{check:!n.check}):n}))});case"CHECK_ALL_TO_DO":var a=!1;return e.forEach((function(n){n.check||(a=!0)})),Object($.a)(Object($.a)({},n),{},{toDoList:e.map((function(n){return Object($.a)(Object($.a)({},n),{},{check:a})}))});case"DELETE_COMPLETED":return Object($.a)(Object($.a)({},n),{},{toDoList:e.filter((function(n){return!n.check}))});default:return n}}}),X=Object(Y.c)(Q);function Z(){var n=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  border: 0;\n  outline: 0;\n  background: transparent;\n}\n\nbody {\n  padding: 10px;\n  background: #f5f5f5;\n  min-width: 320px;\n}\n"]);return Z=function(){return n},n}var nn=Object(f.a)(Z()),tn=function(){return r.a.createElement(D.a,{store:X},r.a.createElement(nn,null),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(tn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7c14de08.chunk.js.map