// Garden Gnome Software - Skin
// Pano2VR 6.1.15/18116
// Filename: lower_third.ggsk
// Generated 2022-06-16T13:01:07

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._con_lower_third=document.createElement('div');
		el.ggId="con_lower_third";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_lower_third.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._con_lower_third.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_green_stripe=document.createElement('div');
		els=me._svg_green_stripe__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0ODIgMTIwIi'+
			'B4PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI2dyZWVuX3g1Rl9sb25nXzFfKTt9Cgkuc3Qxe2ZpbGw6dXJsKCNncmVlbl94NUZfZ3JhZF8xXyk7fQo8L3N0eWxlPgogPGcgaWQ9IkdyZWVuX3g1Rl9Mb25nIj4KICA8bGluZWFyR3JhZGllbnQgeTE9Ii0wLjY0MzQiIHgxPSIyMjIuMTIyNiIgaWQ9ImdyZWVuX3g1Rl9sb25nXzFfIiB4Mj0iMjQzLjgwNjQiIHkyPSI2MS4zMTAyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTIwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICA8c3RvcCBvZmZzZXQ9IjAiIHN0eWxl'+
			'PSJzdG9wLWNvbG9yOiM0REFENTAiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjcyNTgiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNkQ0NEEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxwb2x5Z29uIGlkPSJncmVlbl94NUZfbG9uZyIgcG9pbnRzPSIxNi43LDg5LjMgNDQuNSwzMC42IDQ3MCwzMC42IDQ0NC42LDg5LjMgJiN4OTsiIGNsYXNzPSJzdDAiLz4KICA8bGluZWFyR3JhZGllbnQgeTE9Ijk1LjkyNzEiIHgxPSIyNTkuMjkyMSIgaWQ9ImdyZWVuX3g1Rl9ncmFkXzFfIiB4Mj0iMjYxLjM2MzkiIHkyPSI2Mi43NzcxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTIwKSIgZ3'+
			'JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICA8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM0REFENTAiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjcyNTgiIHN0eWxlPSJzdG9wLWNvbG9yOiNBNkQ0NEEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxwYXRoIGlkPSJncmVlbl94NUZfZ3JhZCIgY2xhc3M9InN0MSIgZD0iTTUxLDMwLjZjMCwwLDk2LjUsMjUuMywyMDAuNywyNS42czIxNi43LTI1LjYsMjE2LjctMjUuNkg1MXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_green_stripe__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_green_stripe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_green_stripe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_green_stripe.ggUpdatePosition=function (useTransition) {
		}
		me._con_lower_third.appendChild(me._svg_green_stripe);
		el=me._con_svg_black=document.createElement('div');
		el.ggId="con_svg_black";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_svg_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._con_svg_black.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_black_under=document.createElement('div');
		els=me._svg_black_under__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0ODIgMTIwIi'+
			'B4PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQo8L3N0eWxlPgogPGcgaWQ9IkJsYWNrIj4KICA8bGluZWFyR3JhZGllbnQgeTE9IjU2LjEzODkiIHgxPSI2Mi45NzQ2IiBpZD0iU1ZHSURfMV8iIHgyPSIyNzcuNTE3NiIgeTI9IjU2LjEzODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMTMxMzE4Ii8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzI0MzAzMCIvPgogIDwvbGlu'+
			'ZWFyR3JhZGllbnQ+CiAgPHBvbHlnb24gcG9pbnRzPSIxNTMsMTcuNSAyNzcuNSw5NC44IDE1OC40LDk0LjggNjMsMTcuNSAmI3g5OyIgY2xhc3M9InN0MCIvPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iNzguMjIwNSIgeDE9IjE5Ljg5NDUiIGlkPSJTVkdJRF8yXyIgeDI9IjQxLjI0MDIiIHkyPSI3OC4yMjA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzEzMTMxOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNDMwMzAiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxwb2x5Z29uIH'+
			'BvaW50cz0iMjYsOTQuMSAxOS45LDYyLjQgNDEuMiw2Mi40ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_black_under__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_black_under__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0ODIgMTIwIi'+
			'B4PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQo8L3N0eWxlPgogPGcgaWQ9IkJsYWNrIj4KICA8bGluZWFyR3JhZGllbnQgeTE9IjU2LjEzODkiIHgxPSI2Mi45NzQ2IiBpZD0iU1ZHSURfMV8iIHgyPSIyNzcuNTE3NiIgeTI9IjU2LjEzODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMTMxMzE4Ii8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzI0MzAzMCIvPgogIDwvbGlu'+
			'ZWFyR3JhZGllbnQ+CiAgPHBvbHlnb24gcG9pbnRzPSIxNTMsMTcuNSAyNzcuNSw5NC44IDE1OC40LDk0LjggNjMsMTcuNSAmI3g5OyIgY2xhc3M9InN0MCIvPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iNzguMjIwNSIgeDE9IjE5Ljg5NDUiIGlkPSJTVkdJRF8yXyIgeDI9IjQxLjI0MDIiIHkyPSI3OC4yMjA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzEzMTMxOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNDMwMzAiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxwb2x5Z29uIH'+
			'BvaW50cz0iMjYsOTQuMSAxOS45LDYyLjQgNDEuMiw2Mi40ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_black_under__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="svg_black_under";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_black_under.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_black_under.onmouseover=function (e) {
			me._svg_black_under__img.style.visibility='hidden';
			me._svg_black_under__imgo.style.visibility='inherit';
		}
		me._svg_black_under.onmouseout=function (e) {
			me._svg_black_under__img.style.visibility='inherit';
			me._svg_black_under__imgo.style.visibility='hidden';
		}
		me._svg_black_under.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_black.appendChild(me._svg_black_under);
		el=me._svg_black_over=document.createElement('div');
		els=me._svg_black_over__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0ODIgMTIwIi'+
			'B4PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MntmaWxsOnVybCgjU1ZHSURfM18pO30KCS5zdDN7ZmlsbDp1cmwoI1NWR0lEXzRfKTt9Cjwvc3R5bGU+CiA8ZyBpZD0iQmxhY2siPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iOTYuNTc5IiB4MT0iMjcuMzA1MSIgaWQ9IlNWR0lEXzFfIiB4Mj0iMTQ2LjQyNTYiIHkyPSIxNi4wNjI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDA0NiIvPgog'+
			'ICA8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNDMwMzAiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxwb2x5Z29uIHBvaW50cz0iNjMsMTcuNSAyNi4xLDk0LjEgMTEyLjMsOTQuMSAxNTMsMTcuNSAmI3g5OyIgY2xhc3M9InN0MCIvPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iNDMuMjA1MSIgeDE9IjI4NC4yMDA0IiBpZD0iU1ZHSURfMl8iIHgyPSIyMTUuMjQ1MiIgeTI9Ii0xLjA5MzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MDQ2Ii8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3R5bG'+
			'U9InN0b3AtY29sb3I6IzI0MzAzMCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHBvbHlnb24gcG9pbnRzPSIxNTguNCw5NC44IDE5Ni41LDI1LjEgNDYyLjEsMjUuMSA0MzEuNyw5NC44ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmVhckdyYWRpZW50IHkxPSIxMTYuMTUxMyIgeDE9IjQxNi41NDY1IiBpZD0iU1ZHSURfM18iIHgyPSIzMzYuNjM4MyIgeTI9IjczLjg5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICA8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNzQwNDYiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjQz'+
			'MDMwIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cG9seWdvbiBwb2ludHM9IjQ2Mi4xLDI1LjEgMTU4LjQsOTQuOCA0MzEuNyw5NC44ICYjeDk7IiBjbGFzcz0ic3QyIi8+CiAgPGxpbmVhckdyYWRpZW50IHkxPSI5Ny44MDE0IiB4MT0iMTE1LjY1NTMiIGlkPSJTVkdJRF80XyIgeDI9IjgzLjE4NTciIHkyPSI0NS41OTUzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDA0NiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyNDMwMzAiLz4KICA8L2xpbmVhckdyYWRpZW50PgogID'+
			'xwb2x5Z29uIHBvaW50cz0iMjYuMSw5NC4xIDE1MywxNy41IDExMi4zLDk0LjEgJiN4OTsiIGNsYXNzPSJzdDMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_black_over__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_black_over";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_black_over.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_black_over.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_black.appendChild(me._svg_black_over);
		me._con_lower_third.appendChild(me._con_svg_black);
		el=me._con_svg_yellow=document.createElement('div');
		el.ggId="con_svg_yellow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_svg_yellow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._con_svg_yellow.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_yellow_under=document.createElement('div');
		els=me._svg_yellow_under__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0ODIgMTIwIi'+
			'B4PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cjwvc3R5bGU+CiA8bGluZWFyR3JhZGllbnQgeTE9Ijg2Ljc2MzciIHgxPSIyMzcuMjc0OSIgaWQ9IlNWR0lEXzFfIiB4Mj0iMjI3LjYxNTEiIHkyPSIxMTIuOTgzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojNERBRDUwIi8+CiAgPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNTE2NTRBIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPHBvbHlnb24gcG9pbnRzPSIyMjAuMywxMDAuMyAxOTcu'+
			'OSw4NS44IDI3Miw4NS44IDI3MiwxMDAuMyAiIGNsYXNzPSJzdDAiLz4KPC9zdmc+Cg==';
		me._svg_yellow_under__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_yellow_under";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_yellow_under.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_yellow_under.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_yellow.appendChild(me._svg_yellow_under);
		el=me._svg_yellow_over=document.createElement('div');
		els=me._svg_yellow_over__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0ODIgMTIwIi'+
			'B4PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQo8L3N0eWxlPgogPGxpbmVhckdyYWRpZW50IHkxPSI4Ny44ODAxIiB4MT0iMjA1LjgwNDciIGlkPSJTVkdJRF8xXyIgeDI9IjQzOS44MzAxIiB5Mj0iODcuODgwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UxRTcyRiIvPgogIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0YyQ0UzQSIvPgogPC9saW5lYXJHcmFkaWVudD4KIDxwb2x5'+
			'Z29uIHBvaW50cz0iNDM5LjgsMTAwLjMgMjIwLjMsMTAwLjMgMjA1LjgsNzUuNSA0MjMuNSw3NS41ICIgY2xhc3M9InN0MCIvPgogPGxpbmVhckdyYWRpZW50IHkxPSI2Ni42ODA0IiB4MT0iMzE0Ljk3NDIiIGlkPSJTVkdJRF8yXyIgeDI9IjMxNC4yODQyIiB5Mj0iODYuMDAwMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogIDxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UxRTcyRiIvPgogIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0YyQ0UzQSIvPgogPC9saW5lYXJHcmFkaWVudD4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMDUuOCw3NS'+
			'41YzAsMCw3My42LDEyLjgsMTE3LDEyLjRjNDMuNC0wLjMsMTAwLjctMTIuNCwxMDAuNy0xMi40SDIwNS44eiIvPgo8L3N2Zz4K';
		me._svg_yellow_over__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_yellow_over";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_yellow_over.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_yellow_over.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_yellow.appendChild(me._svg_yellow_over);
		me._con_lower_third.appendChild(me._con_svg_yellow);
		el=me._con_text_links=document.createElement('div');
		el.ggId="con_text_links";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_text_links.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._con_text_links.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_link=document.createElement('div');
		els=me._txt_link__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 235px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Barlow\", sans-serif; font-style: italic; letter-spacing: 1px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 235px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 1px 4px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_link.ggUpdateText=function() {
			var hs=me.ggUserdata.source;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_link.ggUpdateText();
		player.addListener('changenode', function() {
			me._txt_link.ggUpdateText();
		});
		el.appendChild(els);
		me._txt_link.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_link.ggUpdatePosition=function (useTransition) {
		}
		me._con_text_links.appendChild(me._txt_link);
		el=me._txt_title=document.createElement('div');
		els=me._txt_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 57px;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 235px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Barlow\", sans-serif; font-size: 17px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 235px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(207,207,207,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title+" - "+me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._txt_title.ggUpdateText();
		});
		el.appendChild(els);
		me._txt_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_title.ggUpdatePosition=function (useTransition) {
		}
		me._con_text_links.appendChild(me._txt_title);
		el=me._txt_main=document.createElement('div');
		els=me._txt_main__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 34px;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 359px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Barlow Condensed\", sans-serif; font-size: 25px;line-height: 80%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 74px;';
		hs+='height: 52px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(133,181,57,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="360<br\/>tours";
		el.appendChild(els);
		me._txt_main.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_main.ggUpdatePosition=function (useTransition) {
		}
		me._con_text_links.appendChild(me._txt_main);
		el=me._url_link=document.createElement('div');
		el.ggId="url_link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 232px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._url_link.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_link.ggUpdatePosition=function (useTransition) {
		}
		me._con_text_links.appendChild(me._url_link);
		me._con_lower_third.appendChild(me._con_text_links);
		me.divSkin.appendChild(me._con_lower_third);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};