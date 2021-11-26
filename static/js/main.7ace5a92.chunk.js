(this.webpackJsonplostcartridgejam3=this.webpackJsonplostcartridgejam3||[]).push([[0],{17:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var n,a=i(5),s=i.n(a),o=i(12),r=i.n(o),l=(i(17),i(4)),c=i.n(l),h=i(9),u=i(7),v=Object(a.createContext)(),d=function(e){var t=e.game,i=e.children,n=Object(a.useState)(),s=Object(h.a)(n,2),o=s[0],r=s[1];return Object(a.useEffect)((function(){r(!!t)}),[t]),Object(u.jsx)(v.Provider,{value:{game:t},children:o?i:null})},f=Object(a.forwardRef)((function(e,t){var i=e.args,n=e.children,s=Object(a.useRef)(),o=t||s,r=Object(a.useState)(),l=Object(h.a)(r,2),v=l[0],f=l[1],y=Object(a.useState)(),p=Object(h.a)(y,2),m=p[0],b=p[1];return i.callbacks={postBoot:function(e){f(e),e.scene.scenes[0].events.once(c.a.Scenes.Events.PRE_RENDER,(function(t){e.scene.scenes[0].load.on(c.a.Loader.Events.COMPLETE,(function(){return b(!0)}))}))}},Object(a.useEffect)((function(){var e=new c.a.Game(i);o.current=e}),[]),m?Object(u.jsx)(d,{game:v,children:n}):null})),y=i(0),p=i(1),m=i(3),b=i(2),g=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){return Object(y.a)(this,i),t.call(this,"MenuScene")}return Object(p.a)(i,[{key:"preload",value:function(){this.load.script("webfont","https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"),this.load.image("main-tiles","/lostcartridgejam3Gameassets/tilemaps/tilemap_20x20.png"),this.load.image("level_1","/lostcartridgejam3Gameassets/maps/level_1.png"),this.load.image("level_2","/lostcartridgejam3Gameassets/maps/level_2.png"),this.load.spritesheet("boulder","/lostcartridgejam3Gameassets/sprites/boulder_sprite.png",{frameWidth:26,frameHeight:26}),this.load.spritesheet("brave","/lostcartridgejam3Gameassets/sprites/brave_sprite.png",{frameWidth:26,frameHeight:26}),this.load.on(c.a.Loader.Events.PROGRESS,console.log)}},{key:"create",value:function(){var e=this;window.WebFont.load({custom:{families:["GameGirl"]},active:function(){e.events.emit("scene_ready",e.sys.config);var t=e.add.graphics({fillStyle:{color:16777215,alpha:1}});t.fillTriangle(0,0,5,5,0,10).setPosition(70,2);var i=0,n=[{label:"New Game",disabled:!1,onSelect:function(){return e.scene.start("IntroScene")}},{label:"Level 1",disabled:!1,onSelect:function(){return e.scene.start("GameScene",{level:1})}},{label:"Level 2",disabled:!1,onSelect:function(){return e.scene.start("GameScene",{level:2})}}];n.forEach((function(t,i){e.add.text(80,12*i+1,t.label,{fontFamily:"GameGirl",fontSize:"10px",fill:"#ffffff"}).setAlpha(t.disabled?.5:1)})),e.input.keyboard.on("keydown",(function(e){var a=!1;"ArrowUp"===e.key&&(a=i>0?i-1:n.length-1),"ArrowDown"===e.key&&(a=i<n.length-1?i+1:0),!1!==a&&(t.setPosition(70,12*a+2),i=a),"Enter"===e.key&&(n[i].disabled||n[i].onSelect())}))}})}}]),i}(c.a.Scene),O=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){return Object(y.a)(this,i),t.call(this,"IntroScene")}return Object(p.a)(i,[{key:"preload",value:function(){}},{key:"create",value:function(){var e=this.add.graphics({fillStyle:{color:65280,alpha:1}});e.fillRect(0,0,2*this.renderer.width,this.renderer.height);var t=this.add.text(80,10,"forest",{fontFamily:"GameGirl",fontSize:"10px",fill:"#ffffff"}),i=this.add.container();i.add(e),i.add(t),this.add.graphics({fillStyle:{color:6636321,alpha:1}}).fillRect(0,this.renderer.height-.3*this.renderer.height,2*this.renderer.width,.3*this.renderer.height),this.add.text(80,this.renderer.height-.3*this.renderer.height+10,"ground",{fontFamily:"GameGirl",fontSize:"10px",fill:"#ffffff"});var n=this.add.graphics({fillStyle:{color:0,alpha:1}});n.fillRect(this.renderer.width+100,this.renderer.height,200,.3*this.renderer.height),n.name="dark";var a=this.add.graphics({fillStyle:{color:12014385,alpha:1}});a.fillRect(this.renderer.width,this.renderer.height-.3*this.renderer.height-50,50,50),a.name="player";var s=this.add.graphics({fillStyle:{color:14332515,alpha:1}});s.fillRect(this.renderer.width+200,this.renderer.height-.3*this.renderer.height-50,50,50),s.name="partner",this.cameras.main.fadeIn(1e3,0,0,0),this.cameras.main.once("camerafadeincomplete",this.animateIntro.bind(this))}},{key:"animateIntro",value:function(){var e=this;this.cameras.main.pan(this.renderer.width,this.renderer.height/2,2e3,"Sine.easeInOut"),this.cameras.main.once(c.a.Cameras.Scene2D.Events.PAN_COMPLETE,(function(){e.cameras.main.shake(2e3,.02),e.tweens.add({targets:e.children.getByName("dark"),y:.3*-e.renderer.height,duration:2e3}),e.tweens.add({targets:e.children.getByName("partner"),y:e.renderer.height,delay:2e3,duration:2e3,ease:"Sine.in"}),e.tweens.add({targets:e.children.getByName("player"),y:e.renderer.height,x:{value:e.children.getByName("player").x+150,duration:1e3,ease:"Cubic.easeOut"},delay:4e3,duration:2e3,ease:"Back.easeInOut",onComplete:function(){e.cameras.main.fade(1e3,0,0,0),e.cameras.main.once("camerafadeoutcomplete",(function(){e.scene.start("GameScene",{level:1})}))}})}))}}]),i}(c.a.Scene),j=i(10),x=250,k={EMPTY:"000000",PLAYER:"ff00ff",GROUND:"663300",BOULDER:"999999",WALL:"0000ff",ENEMY:"ff0000",JEWEL:"ffff00",BARREL:"00ffff",EXPLOSION:"ffffff",INTERACTION:"00ff00"},E={DOWN:"ArrowDown",UP:"ArrowUp",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},T=(n={},Object(j.a)(n,k.EMPTY,0),Object(j.a)(n,k.WALL,1),Object(j.a)(n,k.GROUND,2),Object(j.a)(n,"calculateWallTileWithNeighbours",(function(e,t,i){var n=(i[e]||[])[t-1]===k.WALL?"W":"-",a=(i[e-1]||[])[t]===k.WALL?"N":"-",s=(i[e]||[])[t+1]===k.WALL?"E":"-",o=(i[e+1]||[])[t]===k.WALL?"S":"-";switch("".concat(a).concat(s).concat(o).concat(n)){case"----":default:return 11;case"NESW":return 12;case"N---":return 13;case"-E--":return 14;case"--S-":return 15;case"---W":return 16;case"NE--":return 17;case"-ES-":return 18;case"--SW":return 19;case"N--W":return 20;case"NES-":return 22;case"-ESW":return 23;case"N-SW":return 24;case"NE-W":return 25;case"N-S-":return 27;case"-E-W":return 26}})),n),w=i(8),P=i(6),S=function(){function e(t){var i=t.id,n=t.isRigid,a=t.isBreakable,s=t.isFlat,o=t.isPickable,r=t.isCrushable,l=t.level;Object(y.a)(this,e),this.id=i,this.isRigid=n,this.isBreakable=a,this.isFlat=s,this.isPickable=o,this.isCrushable=r,this.power=0,this.strength=0,this.force=0,this.weight=0,this.level=l,this.position=null,this.alien=null,this.isMoveable=!this.isRigid}return Object(p.a)(e,[{key:"setPosition",value:function(e){this.position=e}},{key:"canMove",value:function(){return this.isMoveable}},{key:"overrunBy",value:function(){}},{key:"runningOver",value:function(){}},{key:"canFallDown",value:function(){return!1}},{key:"canFallLeft",value:function(){return!1}},{key:"canFallRight",value:function(){return!1}}]),e}(),I=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(y.a)(this,i),(n=t.call(this,e)).inactive=!1,n}return Object(p.a)(i,[{key:"overrunBy",value:function(e){e.power>this.strength&&(this.level.onDestroy(this),this.inactive=!0)}}]),i}(S),R=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){return Object(y.a)(this,i),t.apply(this,arguments)}return Object(p.a)(i,[{key:"move",value:function(e){var t=e.x,n=e.y;Object(w.a)(Object(P.a)(i.prototype),"setPosition",this).call(this,{x:t,y:n})}}]),i}(I),W=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(y.a)(this,i),(n=t.call(this,e)).isFalling=0,n}return Object(p.a)(i,[{key:"canFallDown",value:function(){var e={x:this.position.x,y:this.position.y+1},t=this.level.isDestinationInBounds(e.x,e.y)&&this.level.getObjectAt(e.x,e.y),i=this.level.isDestinationEmpty(e.x,e.y),n=t.isCrushable&&this.isFalling;return i||n}},{key:"canRollTo",value:function(e,t){var i={x:e,y:t},n=this.level.isDestinationInBounds(i.x,i.y),a=n&&this.level.getObjectAt(i.x,this.position.y),s=n&&this.level.objectIsEmpty(a),o=n&&this.level.getObjectAt(i.x,i.y),r=this.level.objectIsEmpty(o),l=n&&this.level.getObjectAt(this.position.x,this.position.y+1),c=!this.level.isDestinationEmpty(this.position.x,this.position.y+1)&&l.isFlat;return n&&r&&s&&!c&&l&&!l.isFalling}},{key:"canFallRight",value:function(){return this.canRollTo(this.position.x+1,this.position.y+1)}},{key:"canFallLeft",value:function(){return this.canRollTo(this.position.x-1,this.position.y+1)}}]),i}(R),A=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){var a;return Object(y.a)(this,i),(a=t.call(this,{id:e,isRigid:!1,isBreakable:!0,isFlat:!1,isPickable:!1,isCrushable:!1,level:n})).strength=5,a}return i}(W),L=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){var a;return Object(y.a)(this,i),(a=t.call(this,{id:e,isRigid:!1,isBreakable:!0,isFlat:!0,isPickable:!1,isCrushable:!0,level:n})).pushingDirection=null,a}return Object(p.a)(i,[{key:"canMove",value:function(e,t){var i=this.level.getObjectAt(e,t),n=this.level.objectIsEmpty(i),a=(null===i||void 0===i?void 0:i.isBreakable)&&this.power>=i.strength;return!!(n||a||i.isPickable)&&i}},{key:"canMoveUp",value:function(){return this.canMove(this.position.x,this.position.y-1)}},{key:"canMoveDown",value:function(){return this.canMove(this.position.x,this.position.y+1)}},{key:"canMoveLeft",value:function(){var e=this.level.getObjectAt(this.position.x-1,this.position.y),t=this.level.isPositionClear(this.position.x-2,this.position.y),i=this.level.isPositionClear(this.position.x-1,this.position.y+1),n=(null===e||void 0===e?void 0:e.isMoveable)&&t&&!i,a=this.canMove(this.position.x-1,this.position.y);return!a&&n&&(this.pushingDirection===E.LEFT?(a=!0,this.level.moveObject(e,{x:this.position.x-2,y:this.position.y}),this.pushingDirection=""):this.pushingDirection=E.LEFT),a}},{key:"canMoveRight",value:function(){var e=this.level.getObjectAt(this.position.x+1,this.position.y),t=this.level.isPositionClear(this.position.x+2,this.position.y),i=this.level.isPositionClear(this.position.x+1,this.position.y+1),n=(null===e||void 0===e?void 0:e.isMoveable)&&t&&!i,a=this.canMove(this.position.x+1,this.position.y);return!a&&n&&(this.pushingDirection===E.RIGHT?(a=!0,this.level.moveObject(e,{x:this.position.x+2,y:this.position.y}),this.pushingDirection=""):this.pushingDirection=E.RIGHT),a}}]),i}(R),D=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){var a;return Object(y.a)(this,i),(a=t.call(this,e,n)).moveIntentDir=E.UP,a.anchorPosition=null,a}return Object(p.a)(i,[{key:"overrunBy",value:function(e){var t;e.constructor.name!==F.name&&(null===(t=this.alien)||void 0===t||t.destroy(),this.level.onCharacterDie(this))}}]),i}(L),F=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){var a;Object(y.a)(this,i),(a=t.call(this,e,n)).power=.5,a.moveIntentDir="";var s=n.scene;return s.input.keyboard.on("keydown",(function(e){!e.repeat&&[E.UP,E.DOWN,E.LEFT,E.RIGHT].includes(e.key)&&(a.moveIntentDir=e.key,a.isMoving||a.level.playerLoop())})),s.input.keyboard.on("keyup",(function(e){a.moveIntentDir===e.key&&(a.moveIntentDir="",a.pushingDirection=null)})),a}return Object(p.a)(i,[{key:"destroy",value:function(){var e=this.level.scene;e.input.keyboard.off("keydown"),e.input.keyboard.off("keyup")}},{key:"die",value:function(){this.inactive=!0,this.alien.alpha=.5,this.destroy()}},{key:"overrunBy",value:function(e){this.die()}},{key:"runningOver",value:function(e){e.constructor.name===D.name&&this.die()}}]),i}(L),N=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){return Object(y.a)(this,i),t.call(this,{id:e,isRigid:!0,isBreakable:!1,isFlat:!0,isPickable:!1,isCrushable:!1,level:n})}return i}(S),B=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){var a;return Object(y.a)(this,i),(a=t.call(this,{id:e,isRigid:!0,isBreakable:!0,isFlat:!0,isPickable:!1,isCrushable:!1,level:n})).strength=1,a}return Object(p.a)(i,[{key:"overrunBy",value:function(e){Object(w.a)(Object(P.a)(i.prototype),"overrunBy",this).call(this,e),this.level.scene.children.getByName("layer_1").tilemap.putTileAt(T[k.EMPTY],this.position.x,this.position.y)}}]),i}(I),M=function(){function e(t,i){Object(y.a)(this,e),this.id=t,this.level=i,this.isEmpty=!0}return Object(p.a)(e,[{key:"setPosition",value:function(e){this.position=e}}]),e}(),C=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){return Object(y.a)(this,i),t.apply(this,arguments)}return Object(p.a)(i,[{key:"overrunBy",value:function(e){console.log("Interactive overrunBy el",e),e.constructor.name===F.name&&this.level.onInteractWith(this)}}]),i}(M),_=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){return Object(y.a)(this,i),t.call(this,{id:e,isRigid:!1,isBreakable:!0,isFlat:!0,isPickable:!1,isCrushable:!0,level:n})}return Object(p.a)(i,[{key:"explode",value:function(){this.alien.destroy(),this.level.onExplode(this)}},{key:"overrunBy",value:function(e){this.explode()}}]),i}(W),G=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){var a;return Object(y.a)(this,i),(a=t.call(this,{id:e,isRigid:!1,isBreakable:!0,isFlat:!0,isPickable:!1,isCrushable:!0,level:n})).power=10,a}return Object(p.a)(i,[{key:"setPosition",value:function(e,t){var i=this;this.position={x:e,y:t};var n=this.level.scene.children.getByName("layer_1"),a=n.tilemap,s=this.level.scene.add.graphics({fillStyle:{color:16711680,alpha:1}});s.fillRect(0,0,a.tileWidth,a.tileHeight),s.setScale(n.scaleX),s.x=a.tileToWorldX(e),s.y=a.tileToWorldY(t),this.level.scene.tweens.add({targets:s,alpha:0,duration:x,onComplete:function(){s.destroy(),i.level.objects[t][e]=new M(k.EMPTY,i.level)}}),this.alien=s}}]),i}(S),Y=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(e,n){var a;return Object(y.a)(this,i),(a=t.call(this,{id:e,isRigid:!1,isBreakable:!0,isFlat:!1,isPickable:!0,isCrushable:!1,level:n})).strength=4,a}return Object(p.a)(i,[{key:"overrunBy",value:function(e){e.constructor.name===F.name?(this.alien.visible=!1,this.level.onJewelPick(this)):Object(w.a)(Object(P.a)(i.prototype),"overrunBy",this).call(this,e)}}]),i}(W),U=function(){function e(t){Object(y.a)(this,e),this.config=t,this.moveables=[],this.objects=[],this.scene=null,this.player=null,this.playerTimeoutId=0,this.isPaused=!1}return Object(p.a)(e,[{key:"connectToScene",value:function(e){var t=this;this.scene=e;var i=this.scene.children.getByName("layer_1"),n=i.tilemap;this.objects=this.config.map((function(e,a){return e.map((function(e,s){var o;switch(e){case k.WALL:(o=new N(e,t)).setPosition({x:s,y:a});break;case k.GROUND:(o=new B(e,t)).setPosition({x:s,y:a});break;case k.BOULDER:var r=t.scene.add.sprite(48,16).setOrigin(0,.25).play("boulder_idle");r.setScale(i.scaleX),r.x=n.tileToWorldX(s),r.y=n.tileToWorldY(a),(o=new A(e,t)).alien=r;break;case k.JEWEL:var l=t.scene.add.graphics({fillStyle:{color:16776960,alpha:1}});l.setScale(i.scaleX),l.fillRect(0,0,n.tileWidth,n.tileHeight),l.x=n.tileToWorldX(s),l.y=n.tileToWorldY(a),(o=new Y(e,t)).alien=l;break;case k.BARREL:var h=t.scene.add.graphics({fillStyle:{color:6697728,alpha:1}});h.setScale(i.scaleX),h.fillRect(0,0,n.tileWidth,n.tileHeight),h.x=n.tileToWorldX(s),h.y=n.tileToWorldY(a),(o=new _(e,t)).alien=h;break;case k.PLAYER:var u=t.scene.add.sprite(48,16).setOrigin(0,.25).play("brave_idle");u.setScale(i.scaleX),u.x=n.tileToWorldX(s),u.y=n.tileToWorldY(a),u.name="brave",u.on(c.a.Animations.Events.ANIMATION_COMPLETE,(function(){u.isMoving})),(o=new F(e,t)).alien=u,t.player=o;break;case k.ENEMY:var v=t.scene.add.graphics({fillStyle:{color:16711680,alpha:1}});v.fillRect(0,0,n.tileWidth,n.tileHeight),v.setScale(i.scaleX),t.scene.addToScalables(v,{x:s,y:a}),v.x=n.tileToWorldX(s),v.y=n.tileToWorldY(a),(o=new D(e,t)).alien=v;break;case k.INTERACTION:o=new C(e,t);break;default:o=new M(e,t)}return o.setPosition({x:s,y:a}),t.objectIsEmpty(o)||o.isRigid||t.moveables.push(o),t.onAddElement(o),o}))}))}},{key:"gravityLoop",value:function(){var e=this;this.isPaused||(this.moveables.sort((function(e,t){return e.position.y-t.position.y})).forEach((function(t){var i,n=t.canFallDown(),a=t.canFallLeft(),s=t.canFallRight();n&&(i={x:t.position.x,y:t.position.y+1},t.isFalling++),!n&&a&&(i={x:t.position.x-1,y:t.position.y},t.isFalling&&i.y++,t.isFalling++),n||a||!s||(i={x:t.position.x+1,y:t.position.y},t.isFalling&&i.y++,t.isFalling++),i?e.moveObject(t,i):(t.isFalling&&t.constructor.name===_.name&&t.explode(),t.isFalling=0)})),this.enemiesLoop())}},{key:"enemiesLoop",value:function(){var e=this;if(!this.isPaused){var t,i,n,a,s,o,r,l=function(t,s,o,r,l){var c,h;if(i=e.getObjectAt(s.x,s.y),(n=e.objectIsEmpty(i)||(null===(c=i)||void 0===c||null===(h=c.constructor)||void 0===h?void 0:h.name)===F.name)||t.anchorPosition||(t.anchorPosition=i.position,t.moveIntentDir=o),n&&i.constructor.name===F.name&&e.moveObject(t,s),n){if(!t.anchorPosition)return void(t.moveIntentDir=o);var u,v;if(t.position.x===t.anchorPosition.x||t.position.y===t.anchorPosition.y)a=e.getObjectAt(l.x,l.y),e.objectIsEmpty(a)||(null===(u=a)||void 0===u||null===(v=u.constructor)||void 0===v?void 0:v.name)===F.name?t.moveIntentDir=r:t.anchorPosition=a.position;e.moveObject(t,s)}else t.anchorPosition=i.position,t.moveIntentDir=o};this.moveables.filter((function(e){return e.constructor.name===D.name})).forEach((function(e){switch(e.moveIntentDir){case E.UP:t={x:e.position.x,y:e.position.y-1},s=E.LEFT,o=E.RIGHT,r={x:t.x+1,y:t.y},l(e,t,s,o,r);break;case E.RIGHT:t={x:e.position.x+1,y:e.position.y},s=E.UP,o=E.DOWN,r={x:t.x,y:t.y+1},l(e,t,s,o,r);break;case E.DOWN:t={x:e.position.x,y:e.position.y+1},s=E.RIGHT,o=E.LEFT,r={x:t.x-1,y:t.y},l(e,t,s,o,r);break;case E.LEFT:t={x:e.position.x-1,y:e.position.y},s=E.DOWN,o=E.UP,r={x:t.x,y:t.y-1},l(e,t,s,o,r)}}))}}},{key:"playerLoop",value:function(){var e=this;if(!this.isPaused&&!this.player.inactive){clearTimeout(this.playerTimeoutId);var t=this.player,i={x:t.position.x,y:t.position.y};switch(t.moveIntentDir){case E.UP:t.canMoveUp()&&(i.y-=1);break;case E.DOWN:t.canMoveDown()&&(i.y+=1);break;case E.LEFT:t.canMoveLeft()&&(i.x-=1);break;case E.RIGHT:t.canMoveRight()&&(i.x+=1)}t.position.x===i.x&&t.position.y===i.y||t.isMoving||(t.isMoving=!0,t.position.x<i.x&&(t.alien.setOrigin(0,.25),t.alien.setFlipX(!1)),t.position.x>i.x&&(t.alien.setFlipX(!0),t.alien.setOrigin(.25,.25)),t.alien.emit("player_moves",i),this.moveObject(t,i)),this.playerTimeoutId=setTimeout((function(){t.isMoving=!1,t.alien.play("brave_idle"),""!==t.moveIntentDir&&e.playerLoop()}),225)}}},{key:"moveObject",value:function(e,t){var i=this.scene.children.getByName("layer_1").tilemap,n={x:e.position.x,y:e.position.y},a=this.getObjectAt(t.x,t.y);this.objectIsEmpty(a)&&a.constructor.name!==C.name||(a.overrunBy(e),e.runningOver(a)),e.inactive||(this.setObjectAt(n.x,n.y,new M(k.EMPTY,this)),this.setObjectAt(t.x,t.y,e),e.move(t),e.constructor.name===F.name&&(this.scene.tweens.add({targets:e.alien,x:{value:i.tileToWorldX(t.x),duration:225},y:{value:i.tileToWorldY(t.y),duration:225}}),e.alien.play("brave_run")),e.constructor.name===D.name&&this.scene.tweens.add({targets:e.alien,x:{value:i.tileToWorldX(t.x),duration:x},y:{value:i.tileToWorldY(t.y),duration:x}}),e.constructor.name===Y.name&&this.scene.tweens.add({targets:e.alien,x:{value:i.tileToWorldX(t.x),duration:125},y:{value:i.tileToWorldY(t.y),delay:t.x!==n.x?125:0,duration:t.x!==n.x?125:x}}),e.constructor.name===_.name&&this.scene.tweens.add({targets:e.alien,x:{value:i.tileToWorldX(t.x),duration:125},y:{value:i.tileToWorldY(t.y),delay:t.x!==n.x?125:0,duration:t.x!==n.x?125:x}}),e.constructor.name===A.name&&(this.scene.tweens.add({targets:e.alien,x:{value:i.tileToWorldX(t.x),duration:125},y:{value:i.tileToWorldY(t.y),delay:t.x!==n.x?125:0,duration:t.x!==n.x?125:x}}),t.x!==n.x&&e.alien.play(t.x>n.x?"boulder_roll_right":"boulder_roll_left")))}},{key:"pause",value:function(){this.isPaused=!0}},{key:"resume",value:function(){this.isPaused=!1}},{key:"onCharacterDie",value:function(e){this.setObjectAt(e.position.x,e.position.y,new M(k.EMPTY,this)),this.moveables=this.moveables.filter((function(t){return t!==e})),e.constructor.name,F.name}},{key:"onJewelPick",value:function(e){this.setObjectAt(e.position.x,e.position.y,new M(k.EMPTY,this)),this.moveables=this.moveables.filter((function(t){return t!==e}))}},{key:"onDestroy",value:function(e){e.constructor.name,A.name,this.setObjectAt(e.position.x,e.position.y,new M(k.EMPTY,this)),this.moveables=this.moveables.filter((function(t){return t!==e}))}},{key:"onExplode",value:function(e){this.setObjectAt(e.position.x,e.position.y,new M(k.EMPTY,this)),this.moveables=this.moveables.filter((function(t){return t!==e}));for(var t=e.position.x-2;t<=e.position.x+2;t++)for(var i=e.position.y-2;i<e.position.y+2;i++){var n=this.getObjectAt(t,i),a=new G(k.EXPLOSION,this);(n.isBreakable||this.objectIsEmpty(n))&&(a.setPosition(t,i),this.objects[i][t]=a),n&&!this.objectIsEmpty(n)&&n.overrunBy(a)}}},{key:"onComplete",value:function(){var e=this;this.objects.forEach((function(t){return t.forEach((function(t){t!==e.player&&t.alien&&t.alien.destroy()}))})),this.pause(),this.scene.events.emit("levelcompleted",this)}},{key:"onInteractWith",value:function(e){console.warn("implement interaction for ".concat(this.id))}},{key:"onAddElement",value:function(e){console.warn("implement element added ".concat(this.id))}},{key:"getPlayerPos",value:function(){return this.player.position}},{key:"getConfigAt",value:function(e,t){return this.isDestinationInBounds(e,t)&&this.config[t][e]}},{key:"getCoords",value:function(e){for(var t=[],i=0;i<this.config.length;i++)for(var n=0;n<this.config[i].length;n++)this.config[i][n]===e&&t.push({x:n,y:i});return t}},{key:"getObjectAt",value:function(e,t){return this.isDestinationInBounds(e,t)&&this.objects[t][e]}},{key:"setObjectAt",value:function(e,t,i){this.objects[t][e]=i}},{key:"isPositionClear",value:function(e,t){return this.getObjectAt(e,t).isEmpty}},{key:"isDestinationInBounds",value:function(e,t){var i=e<this.config[0].length&&e>=0,n=t<this.config.length&&t>=0;return i&&n}},{key:"objectIsEmpty",value:function(e){return e.isEmpty}},{key:"isDestinationEmpty",value:function(e,t){return this.getObjectAt(e,t).isEmpty}}]),e}(),X=[new(function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){var e;return Object(y.a)(this,i),(e=t.call(this)).id="level_1",e.name="The beginning",e}return Object(p.a)(i,[{key:"connectToScene",value:function(e){Object(w.a)(Object(P.a)(i.prototype),"connectToScene",this).call(this,e),e.cameras.main.once("camerafadeincomplete",(function(){alert('INTRO MESSAGE, "Guess I can move those boulders"')}))}},{key:"onInteractWith",value:function(e){18===e.position.x&&14===e.position.y&&(alert(">>> Level 1 completed <<<"),this.onComplete())}}]),i}(U)),new(function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){var e;return Object(y.a)(this,i),(e=t.call(this)).id="level_2",e.name="The finding",e}return Object(p.a)(i,[{key:"onInteractWith",value:function(e){if(6===e.position.x&&6===e.position.y&&(this.player.moveIntentDir="",alert('FIRST CLUE, "Hmm, these walls looks different. Like someone have put them here."')),5===e.position.x&&12===e.position.y){var t=this.scene.children.getByName("layer_1").tilemap;this.player.moveIntentDir="",alert('FIRST TOOL, "Great! Now, with this pickaxe I can break all those clods"'),this.player.power=1,t.putTileAt(19,e.position.x,e.position.y)}19===e.position.x&&1===e.position.y&&(alert(">>> Level 2 completed <<<"),this.onComplete())}},{key:"onAddElement",value:function(e){e.constructor.name===C.name&&5===(null===e||void 0===e?void 0:e.position.x)&&12===(null===e||void 0===e?void 0:e.position.y)&&this.scene.children.getByName("layer_1").tilemap.putTileAt(54,e.position.x,e.position.y)}}]),i}(U))],H=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(y.a)(this,e),this.scene=t,this.currentIndex=i-1,this.current=X[this.currentIndex],this.start()}return Object(p.a)(e,[{key:"start",value:function(){this.current=X[this.currentIndex],this.current.config=this.generateConfig(),this.map=this.createMap(),this.current.connectToScene(this.scene)}},{key:"next",value:function(){this.currentIndex+=1,X.length[this.currentIndex]?this.start():(console.log(this.scene),this.scene.scene.start("MenuScene"))}},{key:"generateConfig",value:function(){for(var e=this.scene,t=this.current.id,i=e.textures.get(t).getSourceImage(),n=Array(i.height).fill("000000").map((function(e){return Array(i.width).fill("000000")})),a=0;a<i.width;a++)for(var s=0;s<i.height;s++){var o=e.textures.getPixel(a,s,t),r="".concat(c.a.Display.Color.ComponentToHex(o.r)).concat(c.a.Display.Color.ComponentToHex(o.g)).concat(c.a.Display.Color.ComponentToHex(o.b));n[s][a]=r}return n}},{key:"createMap",value:function(){var e=this.scene,t=this.current,i=e.data.get("custom_scale"),n=this.scene.cameras.main,a=this.map;a&&a.scene&&a.destroy();var s=(a=e.make.tilemap({tileWidth:20,tileHeight:20,width:t.config[0].length,height:t.config.length})).addTilesetImage("tiles","main-tiles",20,20,1,2),o=a.createBlankLayer("layer_1",s);return o.name="layer_1",o.depth=0,o.setScale(i),o.fill(1),t.config.forEach((function(e,i){e.forEach((function(e,n){var s=t.config[i][n];if([k.EMPTY,k.PLAYER,k.BOULDER,k.INTERACTION].includes(s))a.putTileAt(T[k.EMPTY],n,i);else if(s===k.WALL){var o=T.calculateWallTileWithNeighbours(i,n,t.config);a.putTileAt(o,n,i)}else a.putTileAt(T[s],n,i)}))})),n.setBounds(0,0,o.width*o.scaleX,o.height*o.scaleY),n.zoom=1,a}}]),e}(),J=function(){function e(t){var i=this;Object(y.a)(this,e),this.scene=t,this.timer=0,this.worldTickFreq=x,t.events.addListener(c.a.Scenes.Events.UPDATE,(function(){i.onSceneUpdate.apply(i,arguments)})),this.setUpPuseResumeGame(),this.setUpCameraFollowPlayer(),t.events.on("levelcompleted",(function(){t.cameras.main.fade(1e3,0,0),t.cameras.main.once("camerafadeoutcomplete",(function(){i.scene.levels.next(),t.cameras.main.fadeIn(1e3,0,0)}))}))}return Object(p.a)(e,[{key:"setUpCameraFollowPlayer",value:function(){var e=this;this.scene.events.addListener(c.a.Scenes.Events.UPDATE,(function(){var t=e.scene.cameras.main,i=e.scene.children.getByName("layer_1").tilemap,n=e.scene.levels.current.getPlayerPos(),a=n.x,s=n.y;if(t&&i){var o=.9;t.scrollX=o*t.scrollX+(1-o)*(i.tileToWorldX(a)-.5*t.width),t.scrollY=o*t.scrollY+(1-o)*(i.tileToWorldY(s)-.5*t.height)}}))}},{key:"setUpPuseResumeGame",value:function(){var e=this,t=function(){e.scene.levels.current.pause(),e.scene.events.emit("game_paused")},i=function(){e.scene.levels.current.resume(),e.scene.events.emit("game_resumed")};this.scene.input.keyboard.on("keydown",(function(n){"Escape"===n.key&&(e.scene.levels.current.isPaused?i:t)()}))}},{key:"onSceneUpdate",value:function(e,t){if(this.timer+=t,this.timer>=this.worldTickFreq){for(;this.timer>this.worldTickFreq;)this.timer-=this.worldTickFreq;this.scene.levels.current.gravityLoop()}}}]),e}(),z=function e(t){Object(y.a)(this,e),this.scene=t,this.scene.events.on("game_paused",(function(){return alert("Game paused, press ESC to resume")})),this.scene.events.on("game_resumed",(function(){return alert("Game resumes now")}))},q=Math.round(window.innerWidth/20*100/20/100*100)/100,Z=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){return Object(y.a)(this,i),t.call(this,"GameScene")}return Object(p.a)(i,[{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.data.set("custom_scale",q),this.game.scale.scaleMode=c.a.Scale.RESIZE,this.handleScales(),this.createAnimations(),this.levels=new H(this,e.level),this.cameras.main.fadeIn(1e3,0,0,0),new J(this),new z(this)}},{key:"handleScales",value:function(){var e=this,t=this.data.get("custom_scale"),i=new Map;this.clearScalables=function(){i.clear()},this.removeFromScalables=function(e){return i.delete(e)},this.addToScalables=function(e,n){e.setScale(t),i.set(e,n)},this.updateScale=function(e){i.forEach((function(t,i){return null===i||void 0===i?void 0:i.setScale(e)}))},window.addEventListener("resize",(function(){var t=Math.round(window.innerWidth/20*100/20/100*100)/100,i=e.scene.children.getByName("layer_1"),n=i.tilemap;i.setScale(t),e.data.get("level").objects.forEach((function(e,i){e.forEach((function(e,a){e.alien&&(e.alien.setScale(t),e.alien.x=n.tileToWorldX(a),e.alien.y=n.tileToWorldY(i))}))})),e.cameras.main.setBounds(0,0,i.width*i.scaleX,i.height*i.scaleY)}))}},{key:"createAnimations",value:function(){this.anims.create({key:"boulder_roll_right",frames:this.anims.generateFrameNumbers("boulder",{frames:[0,1,2,0]}),frameRate:12,repeat:0}),this.anims.create({key:"boulder_roll_left",frames:this.anims.generateFrameNumbers("boulder",{frames:[0,2,1,0]}),frameRate:12,repeat:0}),this.anims.create({key:"boulder_idle",frames:this.anims.generateFrameNumbers("boulder",{frames:[0]}),frameRate:1,repeat:0}),this.anims.create({key:"brave_idle",frames:this.anims.generateFrameNumbers("brave",{frames:[0,0,0,0,0,0,0,0,0,0,1,1,1,0,2,2,2,2,2,2,2,0]}),frameRate:4,repeat:-1}),this.anims.create({key:"brave_run",frames:this.anims.generateFrameNumbers("brave",{frames:[3,4,5,3]}),frameRate:16,repeat:0})}}]),i}(c.a.Scene),K={width:"100%",height:"100%",type:c.a.AUTO,backgroundColor:"#000000",disableContextMenu:!0,pixelArt:!0,roundPixels:!1,scene:[g,O,Z]};var Q=function(){return Object(u.jsx)(f,{args:K})},V=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),n(e),a(e),s(e),o(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Q,{})}),document.getElementById("root")),V()}},[[20,1,2]]]);
//# sourceMappingURL=main.7ace5a92.chunk.js.map