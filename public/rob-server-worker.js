(()=>{var H_=Object.create;var Fc=Object.defineProperty;var K_=Object.getOwnPropertyDescriptor;var W_=Object.getOwnPropertyNames;var B_=Object.getPrototypeOf,z_=Object.prototype.hasOwnProperty;var V_=(t,e)=>()=>(t&&(e=t(t=0)),e);var O=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),X_=(t,e)=>{for(var r in e)Fc(t,r,{get:e[r],enumerable:!0})},Jy=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of W_(e))!z_.call(t,i)&&i!==r&&Fc(t,i,{get:()=>e[i],enumerable:!(n=K_(e,i))||n.enumerable});return t};var se=(t,e,r)=>(r=t!=null?H_(B_(t)):{},Jy(e||!t||!t.__esModule?Fc(r,"default",{value:t,enumerable:!0}):r,t)),cp=t=>Jy(Fc({},"__esModule",{value:!0}),t);var go=O(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.stringArray=Ft.array=Ft.func=Ft.error=Ft.number=Ft.string=Ft.boolean=void 0;function Y_(t){return t===!0||t===!1}Ft.boolean=Y_;function Qy(t){return typeof t=="string"||t instanceof String}Ft.string=Qy;function J_(t){return typeof t=="number"||t instanceof Number}Ft.number=J_;function Q_(t){return t instanceof Error}Ft.error=Q_;function Z_(t){return typeof t=="function"}Ft.func=Z_;function Zy(t){return Array.isArray(t)}Ft.array=Zy;function e$(t){return Zy(t)&&t.every(e=>Qy(e))}Ft.stringArray=e$});var Ip=O(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.Message=G.NotificationType9=G.NotificationType8=G.NotificationType7=G.NotificationType6=G.NotificationType5=G.NotificationType4=G.NotificationType3=G.NotificationType2=G.NotificationType1=G.NotificationType0=G.NotificationType=G.RequestType9=G.RequestType8=G.RequestType7=G.RequestType6=G.RequestType5=G.RequestType4=G.RequestType3=G.RequestType2=G.RequestType1=G.RequestType=G.RequestType0=G.AbstractMessageSignature=G.ParameterStructures=G.ResponseError=G.ErrorCodes=void 0;var Li=go(),lp;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(lp||(G.ErrorCodes=lp={}));var up=class t extends Error{constructor(e,r,n){super(r),this.code=Li.number(e)?e:lp.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};G.ResponseError=up;var ar=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};G.ParameterStructures=ar;ar.auto=new ar("auto");ar.byPosition=new ar("byPosition");ar.byName=new ar("byName");var De=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return ar.auto}};G.AbstractMessageSignature=De;var fp=class extends De{constructor(e){super(e,0)}};G.RequestType0=fp;var dp=class extends De{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};G.RequestType=dp;var pp=class extends De{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};G.RequestType1=pp;var mp=class extends De{constructor(e){super(e,2)}};G.RequestType2=mp;var hp=class extends De{constructor(e){super(e,3)}};G.RequestType3=hp;var gp=class extends De{constructor(e){super(e,4)}};G.RequestType4=gp;var yp=class extends De{constructor(e){super(e,5)}};G.RequestType5=yp;var Tp=class extends De{constructor(e){super(e,6)}};G.RequestType6=Tp;var xp=class extends De{constructor(e){super(e,7)}};G.RequestType7=xp;var vp=class extends De{constructor(e){super(e,8)}};G.RequestType8=vp;var Rp=class extends De{constructor(e){super(e,9)}};G.RequestType9=Rp;var Sp=class extends De{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};G.NotificationType=Sp;var Ap=class extends De{constructor(e){super(e,0)}};G.NotificationType0=Ap;var bp=class extends De{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};G.NotificationType1=bp;var wp=class extends De{constructor(e){super(e,2)}};G.NotificationType2=wp;var kp=class extends De{constructor(e){super(e,3)}};G.NotificationType3=kp;var Cp=class extends De{constructor(e){super(e,4)}};G.NotificationType4=Cp;var Ep=class extends De{constructor(e){super(e,5)}};G.NotificationType5=Ep;var _p=class extends De{constructor(e){super(e,6)}};G.NotificationType6=_p;var $p=class extends De{constructor(e){super(e,7)}};G.NotificationType7=$p;var Np=class extends De{constructor(e){super(e,8)}};G.NotificationType8=Np;var Pp=class extends De{constructor(e){super(e,9)}};G.NotificationType9=Pp;var eT;(function(t){function e(i){let o=i;return o&&Li.string(o.method)&&(Li.string(o.id)||Li.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&Li.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(Li.string(o.id)||Li.number(o.id)||o.id===null)}t.isResponse=n})(eT||(G.Message=eT={}))});var Op=O(Jn=>{"use strict";var tT;Object.defineProperty(Jn,"__esModule",{value:!0});Jn.LRUCache=Jn.LinkedMap=Jn.Touch=void 0;var Ut;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Ut||(Jn.Touch=Ut={}));var Uc=class{constructor(){this[tT]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Ut.None){let n=this._map.get(e);if(n)return r!==Ut.None&&this.touch(n,r),n.value}set(e,r,n=Ut.None){let i=this._map.get(e);if(i)i.value=r,n!==Ut.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case Ut.None:this.addItemLast(i);break;case Ut.First:this.addItemFirst(i);break;case Ut.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(tT=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Ut.First&&r!==Ut.Last)){if(r===Ut.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Ut.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Jn.LinkedMap=Uc;var Dp=class extends Uc{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Ut.AsNew){return super.get(e,r)}peek(e){return super.get(e,Ut.None)}set(e,r){return super.set(e,r,Ut.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Jn.LRUCache=Dp});var nT=O(qc=>{"use strict";Object.defineProperty(qc,"__esModule",{value:!0});qc.Disposable=void 0;var rT;(function(t){function e(r){return{dispose:r}}t.create=e})(rT||(qc.Disposable=rT={}))});var Qn=O(Fp=>{"use strict";Object.defineProperty(Fp,"__esModule",{value:!0});var Lp;function Mp(){if(Lp===void 0)throw new Error("No runtime abstraction layer installed");return Lp}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Lp=r}t.install=e})(Mp||(Mp={}));Fp.default=Mp});var To=O(yo=>{"use strict";Object.defineProperty(yo,"__esModule",{value:!0});yo.Emitter=yo.Event=void 0;var t$=Qn(),iT;(function(t){let e={dispose(){}};t.None=function(){return e}})(iT||(yo.Event=iT={}));var Up=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,t$.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Gc=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Up),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};yo.Emitter=Gc;Gc._noop=function(){}});var Kc=O(xo=>{"use strict";Object.defineProperty(xo,"__esModule",{value:!0});xo.CancellationTokenSource=xo.CancellationToken=void 0;var r$=Qn(),n$=go(),qp=To(),jc;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:qp.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:qp.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||n$.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(jc||(xo.CancellationToken=jc={}));var i$=Object.freeze(function(t,e){let r=(0,r$.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Hc=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?i$:(this._emitter||(this._emitter=new qp.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Gp=class{get token(){return this._token||(this._token=new Hc),this._token}cancel(){this._token?this._token.cancel():this._token=jc.Cancelled}dispose(){this._token?this._token instanceof Hc&&this._token.dispose():this._token=jc.None}};xo.CancellationTokenSource=Gp});var oT=O(vo=>{"use strict";Object.defineProperty(vo,"__esModule",{value:!0});vo.SharedArrayReceiverStrategy=vo.SharedArraySenderStrategy=void 0;var o$=Kc(),da;(function(t){t.Continue=0,t.Cancelled=1})(da||(da={}));var jp=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=da.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let i=new Int32Array(n,0,1);Atomics.store(i,0,da.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};vo.SharedArraySenderStrategy=jp;var Hp=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===da.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Kp=class{constructor(e){this.token=new Hp(e)}cancel(){}dispose(){}},Wp=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new o$.CancellationTokenSource:new Kp(r)}};vo.SharedArrayReceiverStrategy=Wp});var zp=O(Wc=>{"use strict";Object.defineProperty(Wc,"__esModule",{value:!0});Wc.Semaphore=void 0;var s$=Qn(),Bp=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,s$.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Wc.Semaphore=Bp});var aT=O(Zn=>{"use strict";Object.defineProperty(Zn,"__esModule",{value:!0});Zn.ReadableStreamMessageReader=Zn.AbstractMessageReader=Zn.MessageReader=void 0;var Xp=Qn(),Ro=go(),Vp=To(),a$=zp(),sT;(function(t){function e(r){let n=r;return n&&Ro.func(n.listen)&&Ro.func(n.dispose)&&Ro.func(n.onError)&&Ro.func(n.onClose)&&Ro.func(n.onPartialMessage)}t.is=e})(sT||(Zn.MessageReader=sT={}));var Bc=class{constructor(){this.errorEmitter=new Vp.Emitter,this.closeEmitter=new Vp.Emitter,this.partialMessageEmitter=new Vp.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Ro.string(e.message)?e.message:"unknown"}`)}};Zn.AbstractMessageReader=Bc;var Yp;(function(t){function e(r){let n,i,o,s=new Map,a,c=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,s.set(o.name,o)),r.contentDecoders!==void 0)for(let l of r.contentDecoders)s.set(l.name,l);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,c.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let l of r.contentTypeDecoders)c.set(l.name,l)}return a===void 0&&(a=(0,Xp.default)().applicationJson.decoder,c.set(a.name,a)),{charset:n,contentDecoder:o,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:c}}t.fromOptions=e})(Yp||(Yp={}));var Jp=class extends Bc{constructor(e,r){super(),this.readable=e,this.options=Yp.fromOptions(r),this.buffer=(0,Xp.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new a$.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let i=n.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let o=parseInt(i);if(isNaN(o)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,i=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(i)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Xp.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Zn.ReadableStreamMessageReader=Jp});var dT=O(ei=>{"use strict";Object.defineProperty(ei,"__esModule",{value:!0});ei.WriteableStreamMessageWriter=ei.AbstractMessageWriter=ei.MessageWriter=void 0;var cT=Qn(),pa=go(),c$=zp(),lT=To(),l$="Content-Length: ",uT=`\r
`,fT;(function(t){function e(r){let n=r;return n&&pa.func(n.dispose)&&pa.func(n.onClose)&&pa.func(n.onError)&&pa.func(n.write)}t.is=e})(fT||(ei.MessageWriter=fT={}));var zc=class{constructor(){this.errorEmitter=new lT.Emitter,this.closeEmitter=new lT.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${pa.string(e.message)?e.message:"unknown"}`)}};ei.AbstractMessageWriter=zc;var Qp;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,cT.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,cT.default)().applicationJson.encoder}}t.fromOptions=e})(Qp||(Qp={}));var Zp=class extends zc{constructor(e,r){super(),this.writable=e,this.options=Qp.fromOptions(r),this.errorCount=0,this.writeSemaphore=new c$.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(l$,n.byteLength.toString(),uT),i.push(uT),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};ei.WriteableStreamMessageWriter=Zp});var pT=O(Vc=>{"use strict";Object.defineProperty(Vc,"__esModule",{value:!0});Vc.AbstractMessageBuffer=void 0;var u$=13,f$=10,d$=`\r
`,em=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,i=0,o=0;e:for(;n<this._chunks.length;){let l=this._chunks[n];for(i=0;i<l.length;){switch(l[i]){case u$:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case f$:switch(r){case 1:r=2;break;case 3:r=4,i++;break e;default:r=0}break;default:r=0}i++}o+=l.byteLength,n++}if(r!==4)return;let s=this._read(o+i),a=new Map,c=this.toString(s,"ascii").split(d$);if(c.length<2)return a;for(let l=0;l<c.length-2;l++){let u=c[l],f=u.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${u}`);let d=u.substr(0,f),p=u.substr(f+1).trim();a.set(e?d.toLowerCase():d,p)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],s=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let s=o.slice(0,e);r.set(s,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Vc.AbstractMessageBuffer=em});var TT=O(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.createMessageConnection=X.ConnectionOptions=X.MessageStrategy=X.CancellationStrategy=X.CancellationSenderStrategy=X.CancellationReceiverStrategy=X.RequestCancellationReceiverStrategy=X.IdCancellationReceiverStrategy=X.ConnectionStrategy=X.ConnectionError=X.ConnectionErrors=X.LogTraceNotification=X.SetTraceNotification=X.TraceFormat=X.TraceValues=X.Trace=X.NullLogger=X.ProgressType=X.ProgressToken=void 0;var mT=Qn(),Ke=go(),K=Ip(),hT=Op(),ma=To(),tm=Kc(),ya;(function(t){t.type=new K.NotificationType("$/cancelRequest")})(ya||(ya={}));var rm;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(rm||(X.ProgressToken=rm={}));var ha;(function(t){t.type=new K.NotificationType("$/progress")})(ha||(ha={}));var nm=class{constructor(){}};X.ProgressType=nm;var im;(function(t){function e(r){return Ke.func(r)}t.is=e})(im||(im={}));X.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var fe;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(fe||(X.Trace=fe={}));var gT;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(gT||(X.TraceValues=gT={}));(function(t){function e(n){if(!Ke.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(fe||(X.Trace=fe={}));var yr;(function(t){t.Text="text",t.JSON="json"})(yr||(X.TraceFormat=yr={}));(function(t){function e(r){return Ke.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(yr||(X.TraceFormat=yr={}));var om;(function(t){t.type=new K.NotificationType("$/setTrace")})(om||(X.SetTraceNotification=om={}));var Xc;(function(t){t.type=new K.NotificationType("$/logTrace")})(Xc||(X.LogTraceNotification=Xc={}));var ga;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(ga||(X.ConnectionErrors=ga={}));var So=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};X.ConnectionError=So;var sm;(function(t){function e(r){let n=r;return n&&Ke.func(n.cancelUndispatched)}t.is=e})(sm||(X.ConnectionStrategy=sm={}));var Yc;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&Ke.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Ke.func(n.dispose))}t.is=e})(Yc||(X.IdCancellationReceiverStrategy=Yc={}));var am;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&Ke.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Ke.func(n.dispose))}t.is=e})(am||(X.RequestCancellationReceiverStrategy=am={}));var Jc;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new tm.CancellationTokenSource}});function e(r){return Yc.is(r)||am.is(r)}t.is=e})(Jc||(X.CancellationReceiverStrategy=Jc={}));var Qc;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(ya.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&Ke.func(n.sendCancellation)&&Ke.func(n.cleanup)}t.is=e})(Qc||(X.CancellationSenderStrategy=Qc={}));var Zc;(function(t){t.Message=Object.freeze({receiver:Jc.Message,sender:Qc.Message});function e(r){let n=r;return n&&Jc.is(n.receiver)&&Qc.is(n.sender)}t.is=e})(Zc||(X.CancellationStrategy=Zc={}));var el;(function(t){function e(r){let n=r;return n&&Ke.func(n.handleMessage)}t.is=e})(el||(X.MessageStrategy=el={}));var yT;(function(t){function e(r){let n=r;return n&&(Zc.is(n.cancellationStrategy)||sm.is(n.connectionStrategy)||el.is(n.messageStrategy))}t.is=e})(yT||(X.ConnectionOptions=yT={}));var Kr;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(Kr||(Kr={}));function p$(t,e,r,n){let i=r!==void 0?r:X.NullLogger,o=0,s=0,a=0,c="2.0",l,u=new Map,f,d=new Map,p=new Map,T,R=new hT.LinkedMap,b=new Map,S=new Set,h=new Map,m=fe.Off,A=yr.Text,E,V=Kr.New,_t=new ma.Emitter,rt=new ma.Emitter,gr=new ma.Emitter,Xt=new ma.Emitter,P=new ma.Emitter,x=n&&n.cancellationStrategy?n.cancellationStrategy:Zc.Message;function I(y){if(y===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+y.toString()}function L(y){return y===null?"res-unknown-"+(++a).toString():"res-"+y.toString()}function ne(){return"not-"+(++s).toString()}function B(y,k){K.Message.isRequest(k)?y.set(I(k.id),k):K.Message.isResponse(k)?y.set(L(k.id),k):y.set(ne(),k)}function W(y){}function xt(){return V===Kr.Listening}function vt(){return V===Kr.Closed}function oe(){return V===Kr.Disposed}function en(){(V===Kr.New||V===Kr.Listening)&&(V=Kr.Closed,rt.fire(void 0))}function Oc(y){_t.fire([y,void 0,void 0])}function op(y){_t.fire(y)}t.onClose(en),t.onError(Oc),e.onClose(en),e.onError(op);function la(){T||R.size===0||(T=(0,mT.default)().timer.setImmediate(()=>{T=void 0,Lc()}))}function or(y){K.Message.isRequest(y)?sr(y):K.Message.isNotification(y)?Yt(y):K.Message.isResponse(y)?Xn(y):jr(y)}function Lc(){if(R.size===0)return;let y=R.shift();try{let k=n?.messageStrategy;el.is(k)?k.handleMessage(y,or):or(y)}finally{la()}}let Rt=y=>{try{if(K.Message.isNotification(y)&&y.method===ya.type.method){let k=y.params.id,$=I(k),q=R.get($);if(K.Message.isRequest(q)){let Se=n?.connectionStrategy,Xe=Se&&Se.cancelUndispatched?Se.cancelUndispatched(q,W):void 0;if(Xe&&(Xe.error!==void 0||Xe.result!==void 0)){R.delete($),h.delete(k),Xe.id=q.id,Yn(Xe,y.method,Date.now()),e.write(Xe).catch(()=>i.error("Sending response for canceled message failed."));return}}let Ie=h.get(k);if(Ie!==void 0){Ie.cancel(),sp(y);return}else S.add(k)}B(R,y)}finally{la()}};function sr(y){if(oe())return;function k(ie,He,ge){let mt={jsonrpc:c,id:y.id};ie instanceof K.ResponseError?mt.error=ie.toJson():mt.result=ie===void 0?null:ie,Yn(mt,He,ge),e.write(mt).catch(()=>i.error("Sending response failed."))}function $(ie,He,ge){let mt={jsonrpc:c,id:y.id,error:ie.toJson()};Yn(mt,He,ge),e.write(mt).catch(()=>i.error("Sending response failed."))}function q(ie,He,ge){ie===void 0&&(ie=null);let mt={jsonrpc:c,id:y.id,result:ie};Yn(mt,He,ge),e.write(mt).catch(()=>i.error("Sending response failed."))}Mc(y);let Ie=u.get(y.method),Se,Xe;Ie&&(Se=Ie.type,Xe=Ie.handler);let nt=Date.now();if(Xe||l){let ie=y.id??String(Date.now()),He=Yc.is(x.receiver)?x.receiver.createCancellationTokenSource(ie):x.receiver.createCancellationTokenSource(y);y.id!==null&&S.has(y.id)&&He.cancel(),y.id!==null&&h.set(ie,He);try{let ge;if(Xe)if(y.params===void 0){if(Se!==void 0&&Se.numberOfParams!==0){$(new K.ResponseError(K.ErrorCodes.InvalidParams,`Request ${y.method} defines ${Se.numberOfParams} params but received none.`),y.method,nt);return}ge=Xe(He.token)}else if(Array.isArray(y.params)){if(Se!==void 0&&Se.parameterStructures===K.ParameterStructures.byName){$(new K.ResponseError(K.ErrorCodes.InvalidParams,`Request ${y.method} defines parameters by name but received parameters by position`),y.method,nt);return}ge=Xe(...y.params,He.token)}else{if(Se!==void 0&&Se.parameterStructures===K.ParameterStructures.byPosition){$(new K.ResponseError(K.ErrorCodes.InvalidParams,`Request ${y.method} defines parameters by position but received parameters by name`),y.method,nt);return}ge=Xe(y.params,He.token)}else l&&(ge=l(y.method,y.params,He.token));let mt=ge;ge?mt.then?mt.then(Jt=>{h.delete(ie),k(Jt,y.method,nt)},Jt=>{h.delete(ie),Jt instanceof K.ResponseError?$(Jt,y.method,nt):Jt&&Ke.string(Jt.message)?$(new K.ResponseError(K.ErrorCodes.InternalError,`Request ${y.method} failed with message: ${Jt.message}`),y.method,nt):$(new K.ResponseError(K.ErrorCodes.InternalError,`Request ${y.method} failed unexpectedly without providing any details.`),y.method,nt)}):(h.delete(ie),k(ge,y.method,nt)):(h.delete(ie),q(ge,y.method,nt))}catch(ge){h.delete(ie),ge instanceof K.ResponseError?k(ge,y.method,nt):ge&&Ke.string(ge.message)?$(new K.ResponseError(K.ErrorCodes.InternalError,`Request ${y.method} failed with message: ${ge.message}`),y.method,nt):$(new K.ResponseError(K.ErrorCodes.InternalError,`Request ${y.method} failed unexpectedly without providing any details.`),y.method,nt)}}else $(new K.ResponseError(K.ErrorCodes.MethodNotFound,`Unhandled method ${y.method}`),y.method,nt)}function Xn(y){if(!oe())if(y.id===null)y.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(y.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let k=y.id,$=b.get(k);if(U_(y,$),$!==void 0){b.delete(k);try{if(y.error){let q=y.error;$.reject(new K.ResponseError(q.code,q.message,q.data))}else if(y.result!==void 0)$.resolve(y.result);else throw new Error("Should never happen.")}catch(q){q.message?i.error(`Response handler '${$.method}' failed with message: ${q.message}`):i.error(`Response handler '${$.method}' failed unexpectedly.`)}}}}function Yt(y){if(oe())return;let k,$;if(y.method===ya.type.method){let q=y.params.id;S.delete(q),sp(y);return}else{let q=d.get(y.method);q&&($=q.handler,k=q.type)}if($||f)try{if(sp(y),$)if(y.params===void 0)k!==void 0&&k.numberOfParams!==0&&k.parameterStructures!==K.ParameterStructures.byName&&i.error(`Notification ${y.method} defines ${k.numberOfParams} params but received none.`),$();else if(Array.isArray(y.params)){let q=y.params;y.method===ha.type.method&&q.length===2&&rm.is(q[0])?$({token:q[0],value:q[1]}):(k!==void 0&&(k.parameterStructures===K.ParameterStructures.byName&&i.error(`Notification ${y.method} defines parameters by name but received parameters by position`),k.numberOfParams!==y.params.length&&i.error(`Notification ${y.method} defines ${k.numberOfParams} params but received ${q.length} arguments`)),$(...q))}else k!==void 0&&k.parameterStructures===K.ParameterStructures.byPosition&&i.error(`Notification ${y.method} defines parameters by position but received parameters by name`),$(y.params);else f&&f(y.method,y.params)}catch(q){q.message?i.error(`Notification handler '${y.method}' failed with message: ${q.message}`):i.error(`Notification handler '${y.method}' failed unexpectedly.`)}else gr.fire(y)}function jr(y){if(!y){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(y,null,4)}`);let k=y;if(Ke.string(k.id)||Ke.number(k.id)){let $=k.id,q=b.get($);q&&q.reject(new Error("The received response has neither a result nor an error property."))}}function $t(y){if(y!=null)switch(m){case fe.Verbose:return JSON.stringify(y,null,4);case fe.Compact:return JSON.stringify(y);default:return}}function Hr(y){if(!(m===fe.Off||!E))if(A===yr.Text){let k;(m===fe.Verbose||m===fe.Compact)&&y.params&&(k=`Params: ${$t(y.params)}

`),E.log(`Sending request '${y.method} - (${y.id})'.`,k)}else mo("send-request",y)}function wn(y){if(!(m===fe.Off||!E))if(A===yr.Text){let k;(m===fe.Verbose||m===fe.Compact)&&(y.params?k=`Params: ${$t(y.params)}

`:k=`No parameters provided.

`),E.log(`Sending notification '${y.method}'.`,k)}else mo("send-notification",y)}function Yn(y,k,$){if(!(m===fe.Off||!E))if(A===yr.Text){let q;(m===fe.Verbose||m===fe.Compact)&&(y.error&&y.error.data?q=`Error data: ${$t(y.error.data)}

`:y.result?q=`Result: ${$t(y.result)}

`:y.error===void 0&&(q=`No result returned.

`)),E.log(`Sending response '${k} - (${y.id})'. Processing request took ${Date.now()-$}ms`,q)}else mo("send-response",y)}function Mc(y){if(!(m===fe.Off||!E))if(A===yr.Text){let k;(m===fe.Verbose||m===fe.Compact)&&y.params&&(k=`Params: ${$t(y.params)}

`),E.log(`Received request '${y.method} - (${y.id})'.`,k)}else mo("receive-request",y)}function sp(y){if(!(m===fe.Off||!E||y.method===Xc.type.method))if(A===yr.Text){let k;(m===fe.Verbose||m===fe.Compact)&&(y.params?k=`Params: ${$t(y.params)}

`:k=`No parameters provided.

`),E.log(`Received notification '${y.method}'.`,k)}else mo("receive-notification",y)}function U_(y,k){if(!(m===fe.Off||!E))if(A===yr.Text){let $;if((m===fe.Verbose||m===fe.Compact)&&(y.error&&y.error.data?$=`Error data: ${$t(y.error.data)}

`:y.result?$=`Result: ${$t(y.result)}

`:y.error===void 0&&($=`No result returned.

`)),k){let q=y.error?` Request failed: ${y.error.message} (${y.error.code}).`:"";E.log(`Received response '${k.method} - (${y.id})' in ${Date.now()-k.timerStart}ms.${q}`,$)}else E.log(`Received response ${y.id} without active response promise.`,$)}else mo("receive-response",y)}function mo(y,k){if(!E||m===fe.Off)return;let $={isLSPMessage:!0,type:y,message:k,timestamp:Date.now()};E.log($)}function ua(){if(vt())throw new So(ga.Closed,"Connection is closed.");if(oe())throw new So(ga.Disposed,"Connection is disposed.")}function q_(){if(xt())throw new So(ga.AlreadyListening,"Connection is already listening")}function G_(){if(!xt())throw new Error("Call listen() first.")}function fa(y){return y===void 0?null:y}function Vy(y){if(y!==null)return y}function Xy(y){return y!=null&&!Array.isArray(y)&&typeof y=="object"}function ap(y,k){switch(y){case K.ParameterStructures.auto:return Xy(k)?Vy(k):[fa(k)];case K.ParameterStructures.byName:if(!Xy(k))throw new Error("Received parameters by name but param is not an object literal.");return Vy(k);case K.ParameterStructures.byPosition:return[fa(k)];default:throw new Error(`Unknown parameter structure ${y.toString()}`)}}function Yy(y,k){let $,q=y.numberOfParams;switch(q){case 0:$=void 0;break;case 1:$=ap(y.parameterStructures,k[0]);break;default:$=[];for(let Ie=0;Ie<k.length&&Ie<q;Ie++)$.push(fa(k[Ie]));if(k.length<q)for(let Ie=k.length;Ie<q;Ie++)$.push(null);break}return $}let ho={sendNotification:(y,...k)=>{ua();let $,q;if(Ke.string(y)){$=y;let Se=k[0],Xe=0,nt=K.ParameterStructures.auto;K.ParameterStructures.is(Se)&&(Xe=1,nt=Se);let ie=k.length,He=ie-Xe;switch(He){case 0:q=void 0;break;case 1:q=ap(nt,k[Xe]);break;default:if(nt===K.ParameterStructures.byName)throw new Error(`Received ${He} parameters for 'by Name' notification parameter structure.`);q=k.slice(Xe,ie).map(ge=>fa(ge));break}}else{let Se=k;$=y.method,q=Yy(y,Se)}let Ie={jsonrpc:c,method:$,params:q};return wn(Ie),e.write(Ie).catch(Se=>{throw i.error("Sending notification failed."),Se})},onNotification:(y,k)=>{ua();let $;return Ke.func(y)?f=y:k&&(Ke.string(y)?($=y,d.set(y,{type:void 0,handler:k})):($=y.method,d.set(y.method,{type:y,handler:k}))),{dispose:()=>{$!==void 0?d.delete($):f=void 0}}},onProgress:(y,k,$)=>{if(p.has(k))throw new Error(`Progress handler for token ${k} already registered`);return p.set(k,$),{dispose:()=>{p.delete(k)}}},sendProgress:(y,k,$)=>ho.sendNotification(ha.type,{token:k,value:$}),onUnhandledProgress:Xt.event,sendRequest:(y,...k)=>{ua(),G_();let $,q,Ie;if(Ke.string(y)){$=y;let ie=k[0],He=k[k.length-1],ge=0,mt=K.ParameterStructures.auto;K.ParameterStructures.is(ie)&&(ge=1,mt=ie);let Jt=k.length;tm.CancellationToken.is(He)&&(Jt=Jt-1,Ie=He);let tn=Jt-ge;switch(tn){case 0:q=void 0;break;case 1:q=ap(mt,k[ge]);break;default:if(mt===K.ParameterStructures.byName)throw new Error(`Received ${tn} parameters for 'by Name' request parameter structure.`);q=k.slice(ge,Jt).map(j_=>fa(j_));break}}else{let ie=k;$=y.method,q=Yy(y,ie);let He=y.numberOfParams;Ie=tm.CancellationToken.is(ie[He])?ie[He]:void 0}let Se=o++,Xe;Ie&&(Xe=Ie.onCancellationRequested(()=>{let ie=x.sender.sendCancellation(ho,Se);return ie===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${Se}`),Promise.resolve()):ie.catch(()=>{i.log(`Sending cancellation messages for id ${Se} failed`)})}));let nt={jsonrpc:c,id:Se,method:$,params:q};return Hr(nt),typeof x.sender.enableCancellation=="function"&&x.sender.enableCancellation(nt),new Promise(async(ie,He)=>{let ge=tn=>{ie(tn),x.sender.cleanup(Se),Xe?.dispose()},mt=tn=>{He(tn),x.sender.cleanup(Se),Xe?.dispose()},Jt={method:$,timerStart:Date.now(),resolve:ge,reject:mt};try{await e.write(nt),b.set(Se,Jt)}catch(tn){throw i.error("Sending request failed."),Jt.reject(new K.ResponseError(K.ErrorCodes.MessageWriteError,tn.message?tn.message:"Unknown reason")),tn}})},onRequest:(y,k)=>{ua();let $=null;return im.is(y)?($=void 0,l=y):Ke.string(y)?($=null,k!==void 0&&($=y,u.set(y,{handler:k,type:void 0}))):k!==void 0&&($=y.method,u.set(y.method,{type:y,handler:k})),{dispose:()=>{$!==null&&($!==void 0?u.delete($):l=void 0)}}},hasPendingResponse:()=>b.size>0,trace:async(y,k,$)=>{let q=!1,Ie=yr.Text;$!==void 0&&(Ke.boolean($)?q=$:(q=$.sendNotification||!1,Ie=$.traceFormat||yr.Text)),m=y,A=Ie,m===fe.Off?E=void 0:E=k,q&&!vt()&&!oe()&&await ho.sendNotification(om.type,{value:fe.toString(y)})},onError:_t.event,onClose:rt.event,onUnhandledNotification:gr.event,onDispose:P.event,end:()=>{e.end()},dispose:()=>{if(oe())return;V=Kr.Disposed,P.fire(void 0);let y=new K.ResponseError(K.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let k of b.values())k.reject(y);b=new Map,h=new Map,S=new Set,R=new hT.LinkedMap,Ke.func(e.dispose)&&e.dispose(),Ke.func(t.dispose)&&t.dispose()},listen:()=>{ua(),q_(),V=Kr.Listening,t.listen(Rt)},inspect:()=>{(0,mT.default)().console.log("inspect")}};return ho.onNotification(Xc.type,y=>{if(m===fe.Off||!E)return;let k=m===fe.Verbose||m===fe.Compact;E.log(y.message,k?y.verbose:void 0)}),ho.onNotification(ha.type,y=>{let k=p.get(y.token);k?k(y.value):Xt.fire(y)}),ho}X.createMessageConnection=p$});var tl=O(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.ProgressType=w.ProgressToken=w.createMessageConnection=w.NullLogger=w.ConnectionOptions=w.ConnectionStrategy=w.AbstractMessageBuffer=w.WriteableStreamMessageWriter=w.AbstractMessageWriter=w.MessageWriter=w.ReadableStreamMessageReader=w.AbstractMessageReader=w.MessageReader=w.SharedArrayReceiverStrategy=w.SharedArraySenderStrategy=w.CancellationToken=w.CancellationTokenSource=w.Emitter=w.Event=w.Disposable=w.LRUCache=w.Touch=w.LinkedMap=w.ParameterStructures=w.NotificationType9=w.NotificationType8=w.NotificationType7=w.NotificationType6=w.NotificationType5=w.NotificationType4=w.NotificationType3=w.NotificationType2=w.NotificationType1=w.NotificationType0=w.NotificationType=w.ErrorCodes=w.ResponseError=w.RequestType9=w.RequestType8=w.RequestType7=w.RequestType6=w.RequestType5=w.RequestType4=w.RequestType3=w.RequestType2=w.RequestType1=w.RequestType0=w.RequestType=w.Message=w.RAL=void 0;w.MessageStrategy=w.CancellationStrategy=w.CancellationSenderStrategy=w.CancellationReceiverStrategy=w.ConnectionError=w.ConnectionErrors=w.LogTraceNotification=w.SetTraceNotification=w.TraceFormat=w.TraceValues=w.Trace=void 0;var ke=Ip();Object.defineProperty(w,"Message",{enumerable:!0,get:function(){return ke.Message}});Object.defineProperty(w,"RequestType",{enumerable:!0,get:function(){return ke.RequestType}});Object.defineProperty(w,"RequestType0",{enumerable:!0,get:function(){return ke.RequestType0}});Object.defineProperty(w,"RequestType1",{enumerable:!0,get:function(){return ke.RequestType1}});Object.defineProperty(w,"RequestType2",{enumerable:!0,get:function(){return ke.RequestType2}});Object.defineProperty(w,"RequestType3",{enumerable:!0,get:function(){return ke.RequestType3}});Object.defineProperty(w,"RequestType4",{enumerable:!0,get:function(){return ke.RequestType4}});Object.defineProperty(w,"RequestType5",{enumerable:!0,get:function(){return ke.RequestType5}});Object.defineProperty(w,"RequestType6",{enumerable:!0,get:function(){return ke.RequestType6}});Object.defineProperty(w,"RequestType7",{enumerable:!0,get:function(){return ke.RequestType7}});Object.defineProperty(w,"RequestType8",{enumerable:!0,get:function(){return ke.RequestType8}});Object.defineProperty(w,"RequestType9",{enumerable:!0,get:function(){return ke.RequestType9}});Object.defineProperty(w,"ResponseError",{enumerable:!0,get:function(){return ke.ResponseError}});Object.defineProperty(w,"ErrorCodes",{enumerable:!0,get:function(){return ke.ErrorCodes}});Object.defineProperty(w,"NotificationType",{enumerable:!0,get:function(){return ke.NotificationType}});Object.defineProperty(w,"NotificationType0",{enumerable:!0,get:function(){return ke.NotificationType0}});Object.defineProperty(w,"NotificationType1",{enumerable:!0,get:function(){return ke.NotificationType1}});Object.defineProperty(w,"NotificationType2",{enumerable:!0,get:function(){return ke.NotificationType2}});Object.defineProperty(w,"NotificationType3",{enumerable:!0,get:function(){return ke.NotificationType3}});Object.defineProperty(w,"NotificationType4",{enumerable:!0,get:function(){return ke.NotificationType4}});Object.defineProperty(w,"NotificationType5",{enumerable:!0,get:function(){return ke.NotificationType5}});Object.defineProperty(w,"NotificationType6",{enumerable:!0,get:function(){return ke.NotificationType6}});Object.defineProperty(w,"NotificationType7",{enumerable:!0,get:function(){return ke.NotificationType7}});Object.defineProperty(w,"NotificationType8",{enumerable:!0,get:function(){return ke.NotificationType8}});Object.defineProperty(w,"NotificationType9",{enumerable:!0,get:function(){return ke.NotificationType9}});Object.defineProperty(w,"ParameterStructures",{enumerable:!0,get:function(){return ke.ParameterStructures}});var cm=Op();Object.defineProperty(w,"LinkedMap",{enumerable:!0,get:function(){return cm.LinkedMap}});Object.defineProperty(w,"LRUCache",{enumerable:!0,get:function(){return cm.LRUCache}});Object.defineProperty(w,"Touch",{enumerable:!0,get:function(){return cm.Touch}});var m$=nT();Object.defineProperty(w,"Disposable",{enumerable:!0,get:function(){return m$.Disposable}});var xT=To();Object.defineProperty(w,"Event",{enumerable:!0,get:function(){return xT.Event}});Object.defineProperty(w,"Emitter",{enumerable:!0,get:function(){return xT.Emitter}});var vT=Kc();Object.defineProperty(w,"CancellationTokenSource",{enumerable:!0,get:function(){return vT.CancellationTokenSource}});Object.defineProperty(w,"CancellationToken",{enumerable:!0,get:function(){return vT.CancellationToken}});var RT=oT();Object.defineProperty(w,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return RT.SharedArraySenderStrategy}});Object.defineProperty(w,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return RT.SharedArrayReceiverStrategy}});var lm=aT();Object.defineProperty(w,"MessageReader",{enumerable:!0,get:function(){return lm.MessageReader}});Object.defineProperty(w,"AbstractMessageReader",{enumerable:!0,get:function(){return lm.AbstractMessageReader}});Object.defineProperty(w,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return lm.ReadableStreamMessageReader}});var um=dT();Object.defineProperty(w,"MessageWriter",{enumerable:!0,get:function(){return um.MessageWriter}});Object.defineProperty(w,"AbstractMessageWriter",{enumerable:!0,get:function(){return um.AbstractMessageWriter}});Object.defineProperty(w,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return um.WriteableStreamMessageWriter}});var h$=pT();Object.defineProperty(w,"AbstractMessageBuffer",{enumerable:!0,get:function(){return h$.AbstractMessageBuffer}});var Nt=TT();Object.defineProperty(w,"ConnectionStrategy",{enumerable:!0,get:function(){return Nt.ConnectionStrategy}});Object.defineProperty(w,"ConnectionOptions",{enumerable:!0,get:function(){return Nt.ConnectionOptions}});Object.defineProperty(w,"NullLogger",{enumerable:!0,get:function(){return Nt.NullLogger}});Object.defineProperty(w,"createMessageConnection",{enumerable:!0,get:function(){return Nt.createMessageConnection}});Object.defineProperty(w,"ProgressToken",{enumerable:!0,get:function(){return Nt.ProgressToken}});Object.defineProperty(w,"ProgressType",{enumerable:!0,get:function(){return Nt.ProgressType}});Object.defineProperty(w,"Trace",{enumerable:!0,get:function(){return Nt.Trace}});Object.defineProperty(w,"TraceValues",{enumerable:!0,get:function(){return Nt.TraceValues}});Object.defineProperty(w,"TraceFormat",{enumerable:!0,get:function(){return Nt.TraceFormat}});Object.defineProperty(w,"SetTraceNotification",{enumerable:!0,get:function(){return Nt.SetTraceNotification}});Object.defineProperty(w,"LogTraceNotification",{enumerable:!0,get:function(){return Nt.LogTraceNotification}});Object.defineProperty(w,"ConnectionErrors",{enumerable:!0,get:function(){return Nt.ConnectionErrors}});Object.defineProperty(w,"ConnectionError",{enumerable:!0,get:function(){return Nt.ConnectionError}});Object.defineProperty(w,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Nt.CancellationReceiverStrategy}});Object.defineProperty(w,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Nt.CancellationSenderStrategy}});Object.defineProperty(w,"CancellationStrategy",{enumerable:!0,get:function(){return Nt.CancellationStrategy}});Object.defineProperty(w,"MessageStrategy",{enumerable:!0,get:function(){return Nt.MessageStrategy}});var g$=Qn();w.RAL=g$.default});var AT=O(mm=>{"use strict";Object.defineProperty(mm,"__esModule",{value:!0});var rn=tl(),rl=class t extends rn.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};rl.emptyBuffer=new Uint8Array(0);var fm=class{constructor(e){this.socket=e,this._onData=new rn.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,rn.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),rn.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),rn.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),rn.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},dm=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),rn.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),rn.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),rn.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},y$=new TextEncoder,ST=Object.freeze({messageBuffer:Object.freeze({create:t=>new rl(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(y$.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new fm(t),asWritableStream:t=>new dm(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function pm(){return ST}(function(t){function e(){rn.RAL.install(ST)}t.install=e})(pm||(pm={}));mm.default=pm});var kn=O(Tr=>{"use strict";var T$=Tr&&Tr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),x$=Tr&&Tr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&T$(e,t,r)};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.createMessageConnection=Tr.BrowserMessageWriter=Tr.BrowserMessageReader=void 0;var v$=AT();v$.default.install();var Ao=tl();x$(tl(),Tr);var hm=class extends Ao.AbstractMessageReader{constructor(e){super(),this._onData=new Ao.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};Tr.BrowserMessageReader=hm;var gm=class extends Ao.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Tr.BrowserMessageWriter=gm;function R$(t,e,r,n){return r===void 0&&(r=Ao.NullLogger),Ao.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Ao.createMessageConnection)(t,e,r,n)}Tr.createMessageConnection=R$});var ym=O((Jj,bT)=>{"use strict";bT.exports=kn()});var fl={};X_(fl,{AnnotatedTextEdit:()=>Cn,ChangeAnnotation:()=>Mi,ChangeAnnotationIdentifier:()=>Pt,CodeAction:()=>Ym,CodeActionContext:()=>Xm,CodeActionKind:()=>Vm,CodeActionTriggerKind:()=>wa,CodeDescription:()=>km,CodeLens:()=>Jm,Color:()=>il,ColorInformation:()=>Rm,ColorPresentation:()=>Sm,Command:()=>Ui,CompletionItem:()=>Lm,CompletionItemKind:()=>Aa,CompletionItemLabelDetails:()=>Om,CompletionItemTag:()=>Pm,CompletionList:()=>Mm,CreateFile:()=>wo,DeleteFile:()=>Co,Diagnostic:()=>va,DiagnosticRelatedInformation:()=>ol,DiagnosticSeverity:()=>wm,DiagnosticTag:()=>Fi,DocumentHighlight:()=>jm,DocumentHighlightKind:()=>Gm,DocumentLink:()=>Zm,DocumentSymbol:()=>zm,DocumentUri:()=>Tm,EOL:()=>S$,FoldingRange:()=>bm,FoldingRangeKind:()=>Am,FormattingOptions:()=>Qm,Hover:()=>Fm,InlayHint:()=>ch,InlayHintKind:()=>ll,InlayHintLabelPart:()=>ul,InlineCompletionContext:()=>mh,InlineCompletionItem:()=>uh,InlineCompletionList:()=>fh,InlineCompletionTriggerKind:()=>dh,InlineValueContext:()=>ah,InlineValueEvaluatableExpression:()=>sh,InlineValueText:()=>ih,InlineValueVariableLookup:()=>oh,InsertReplaceEdit:()=>Im,InsertTextFormat:()=>Nm,InsertTextMode:()=>Dm,Location:()=>xa,LocationLink:()=>vm,MarkedString:()=>ba,MarkupContent:()=>Eo,MarkupKind:()=>cl,OptionalVersionedTextDocumentIdentifier:()=>Sa,ParameterInformation:()=>Um,Position:()=>Qt,Range:()=>Ye,RenameFile:()=>ko,SelectedCompletionInfo:()=>ph,SelectionRange:()=>eh,SemanticTokenModifiers:()=>rh,SemanticTokenTypes:()=>th,SemanticTokens:()=>nh,SignatureInformation:()=>qm,StringValue:()=>lh,SymbolInformation:()=>Wm,SymbolKind:()=>Hm,SymbolTag:()=>Km,TextDocument:()=>gh,TextDocumentEdit:()=>Ra,TextDocumentIdentifier:()=>Em,TextDocumentItem:()=>$m,TextEdit:()=>nn,URI:()=>nl,VersionedTextDocumentIdentifier:()=>_m,WorkspaceChange:()=>Cm,WorkspaceEdit:()=>sl,WorkspaceFolder:()=>hh,WorkspaceSymbol:()=>Bm,integer:()=>xm,uinteger:()=>Ta});var Tm,nl,xm,Ta,Qt,Ye,xa,vm,il,Rm,Sm,Am,bm,ol,wm,Fi,km,va,Ui,nn,Mi,Pt,Cn,Ra,wo,ko,Co,sl,bo,al,Cm,Em,_m,Sa,$m,cl,Eo,Aa,Nm,Pm,Im,Dm,Om,Lm,Mm,ba,Fm,Um,qm,Gm,jm,Hm,Km,Wm,Bm,zm,Vm,wa,Xm,Ym,Jm,Qm,Zm,eh,th,rh,nh,ih,oh,sh,ah,ll,ul,ch,lh,uh,fh,dh,ph,mh,hh,S$,gh,yh,v,qi=V_(()=>{"use strict";(function(t){function e(r){return typeof r=="string"}t.is=e})(Tm||(Tm={}));(function(t){function e(r){return typeof r=="string"}t.is=e})(nl||(nl={}));(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(xm||(xm={}));(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Ta||(Ta={}));(function(t){function e(n,i){return n===Number.MAX_VALUE&&(n=Ta.MAX_VALUE),i===Number.MAX_VALUE&&(i=Ta.MAX_VALUE),{line:n,character:i}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&v.uinteger(i.line)&&v.uinteger(i.character)}t.is=r})(Qt||(Qt={}));(function(t){function e(n,i,o,s){if(v.uinteger(n)&&v.uinteger(i)&&v.uinteger(o)&&v.uinteger(s))return{start:Qt.create(n,i),end:Qt.create(o,s)};if(Qt.is(n)&&Qt.is(i))return{start:n,end:i};throw new Error(`Range#create called with invalid arguments[${n}, ${i}, ${o}, ${s}]`)}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&Qt.is(i.start)&&Qt.is(i.end)}t.is=r})(Ye||(Ye={}));(function(t){function e(n,i){return{uri:n,range:i}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&Ye.is(i.range)&&(v.string(i.uri)||v.undefined(i.uri))}t.is=r})(xa||(xa={}));(function(t){function e(n,i,o,s){return{targetUri:n,targetRange:i,targetSelectionRange:o,originSelectionRange:s}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&Ye.is(i.targetRange)&&v.string(i.targetUri)&&Ye.is(i.targetSelectionRange)&&(Ye.is(i.originSelectionRange)||v.undefined(i.originSelectionRange))}t.is=r})(vm||(vm={}));(function(t){function e(n,i,o,s){return{red:n,green:i,blue:o,alpha:s}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&v.numberRange(i.red,0,1)&&v.numberRange(i.green,0,1)&&v.numberRange(i.blue,0,1)&&v.numberRange(i.alpha,0,1)}t.is=r})(il||(il={}));(function(t){function e(n,i){return{range:n,color:i}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&Ye.is(i.range)&&il.is(i.color)}t.is=r})(Rm||(Rm={}));(function(t){function e(n,i,o){return{label:n,textEdit:i,additionalTextEdits:o}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&v.string(i.label)&&(v.undefined(i.textEdit)||nn.is(i))&&(v.undefined(i.additionalTextEdits)||v.typedArray(i.additionalTextEdits,nn.is))}t.is=r})(Sm||(Sm={}));(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(Am||(Am={}));(function(t){function e(n,i,o,s,a,c){let l={startLine:n,endLine:i};return v.defined(o)&&(l.startCharacter=o),v.defined(s)&&(l.endCharacter=s),v.defined(a)&&(l.kind=a),v.defined(c)&&(l.collapsedText=c),l}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&v.uinteger(i.startLine)&&v.uinteger(i.startLine)&&(v.undefined(i.startCharacter)||v.uinteger(i.startCharacter))&&(v.undefined(i.endCharacter)||v.uinteger(i.endCharacter))&&(v.undefined(i.kind)||v.string(i.kind))}t.is=r})(bm||(bm={}));(function(t){function e(n,i){return{location:n,message:i}}t.create=e;function r(n){let i=n;return v.defined(i)&&xa.is(i.location)&&v.string(i.message)}t.is=r})(ol||(ol={}));(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(wm||(wm={}));(function(t){t.Unnecessary=1,t.Deprecated=2})(Fi||(Fi={}));(function(t){function e(r){let n=r;return v.objectLiteral(n)&&v.string(n.href)}t.is=e})(km||(km={}));(function(t){function e(n,i,o,s,a,c){let l={range:n,message:i};return v.defined(o)&&(l.severity=o),v.defined(s)&&(l.code=s),v.defined(a)&&(l.source=a),v.defined(c)&&(l.relatedInformation=c),l}t.create=e;function r(n){var i;let o=n;return v.defined(o)&&Ye.is(o.range)&&v.string(o.message)&&(v.number(o.severity)||v.undefined(o.severity))&&(v.integer(o.code)||v.string(o.code)||v.undefined(o.code))&&(v.undefined(o.codeDescription)||v.string((i=o.codeDescription)===null||i===void 0?void 0:i.href))&&(v.string(o.source)||v.undefined(o.source))&&(v.undefined(o.relatedInformation)||v.typedArray(o.relatedInformation,ol.is))}t.is=r})(va||(va={}));(function(t){function e(n,i,...o){let s={title:n,command:i};return v.defined(o)&&o.length>0&&(s.arguments=o),s}t.create=e;function r(n){let i=n;return v.defined(i)&&v.string(i.title)&&v.string(i.command)}t.is=r})(Ui||(Ui={}));(function(t){function e(o,s){return{range:o,newText:s}}t.replace=e;function r(o,s){return{range:{start:o,end:o},newText:s}}t.insert=r;function n(o){return{range:o,newText:""}}t.del=n;function i(o){let s=o;return v.objectLiteral(s)&&v.string(s.newText)&&Ye.is(s.range)}t.is=i})(nn||(nn={}));(function(t){function e(n,i,o){let s={label:n};return i!==void 0&&(s.needsConfirmation=i),o!==void 0&&(s.description=o),s}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&v.string(i.label)&&(v.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(v.string(i.description)||i.description===void 0)}t.is=r})(Mi||(Mi={}));(function(t){function e(r){let n=r;return v.string(n)}t.is=e})(Pt||(Pt={}));(function(t){function e(o,s,a){return{range:o,newText:s,annotationId:a}}t.replace=e;function r(o,s,a){return{range:{start:o,end:o},newText:s,annotationId:a}}t.insert=r;function n(o,s){return{range:o,newText:"",annotationId:s}}t.del=n;function i(o){let s=o;return nn.is(s)&&(Mi.is(s.annotationId)||Pt.is(s.annotationId))}t.is=i})(Cn||(Cn={}));(function(t){function e(n,i){return{textDocument:n,edits:i}}t.create=e;function r(n){let i=n;return v.defined(i)&&Sa.is(i.textDocument)&&Array.isArray(i.edits)}t.is=r})(Ra||(Ra={}));(function(t){function e(n,i,o){let s={kind:"create",uri:n};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="create"&&v.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||v.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||v.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Pt.is(i.annotationId))}t.is=r})(wo||(wo={}));(function(t){function e(n,i,o,s){let a={kind:"rename",oldUri:n,newUri:i};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(a.options=o),s!==void 0&&(a.annotationId=s),a}t.create=e;function r(n){let i=n;return i&&i.kind==="rename"&&v.string(i.oldUri)&&v.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||v.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||v.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Pt.is(i.annotationId))}t.is=r})(ko||(ko={}));(function(t){function e(n,i,o){let s={kind:"delete",uri:n};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),o!==void 0&&(s.annotationId=o),s}t.create=e;function r(n){let i=n;return i&&i.kind==="delete"&&v.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||v.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||v.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Pt.is(i.annotationId))}t.is=r})(Co||(Co={}));(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(i=>v.string(i.kind)?wo.is(i)||ko.is(i)||Co.is(i):Ra.is(i)))}t.is=e})(sl||(sl={}));bo=class{constructor(e,r){this.edits=e,this.changeAnnotations=r}insert(e,r,n){let i,o;if(n===void 0?i=nn.insert(e,r):Pt.is(n)?(o=n,i=Cn.insert(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),i=Cn.insert(e,r,o)),this.edits.push(i),o!==void 0)return o}replace(e,r,n){let i,o;if(n===void 0?i=nn.replace(e,r):Pt.is(n)?(o=n,i=Cn.replace(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),i=Cn.replace(e,r,o)),this.edits.push(i),o!==void 0)return o}delete(e,r){let n,i;if(r===void 0?n=nn.del(e):Pt.is(r)?(i=r,n=Cn.del(e,r)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(r),n=Cn.del(e,i)),this.edits.push(n),i!==void 0)return i}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},al=class{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,r){let n;if(Pt.is(e)?n=e:(n=this.nextId(),r=e),this._annotations[n]!==void 0)throw new Error(`Id ${n} is already in use.`);if(r===void 0)throw new Error(`No annotation provided for id ${n}`);return this._annotations[n]=r,this._size++,n}nextId(){return this._counter++,this._counter.toString()}},Cm=class{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new al(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(r=>{if(Ra.is(r)){let n=new bo(r.edits,this._changeAnnotations);this._textEditChanges[r.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(r=>{let n=new bo(e.changes[r]);this._textEditChanges[r]=n})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(Sa.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let r={uri:e.uri,version:e.version},n=this._textEditChanges[r.uri];if(!n){let i=[],o={textDocument:r,edits:i};this._workspaceEdit.documentChanges.push(o),n=new bo(i,this._changeAnnotations),this._textEditChanges[r.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let r=this._textEditChanges[e];if(!r){let n=[];this._workspaceEdit.changes[e]=n,r=new bo(n),this._textEditChanges[e]=r}return r}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new al,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;Mi.is(r)||Pt.is(r)?i=r:n=r;let o,s;if(i===void 0?o=wo.create(e,n):(s=Pt.is(i)?i:this._changeAnnotations.manage(i),o=wo.create(e,n,s)),this._workspaceEdit.documentChanges.push(o),s!==void 0)return s}renameFile(e,r,n,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;Mi.is(n)||Pt.is(n)?o=n:i=n;let s,a;if(o===void 0?s=ko.create(e,r,i):(a=Pt.is(o)?o:this._changeAnnotations.manage(o),s=ko.create(e,r,i,a)),this._workspaceEdit.documentChanges.push(s),a!==void 0)return a}deleteFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;Mi.is(r)||Pt.is(r)?i=r:n=r;let o,s;if(i===void 0?o=Co.create(e,n):(s=Pt.is(i)?i:this._changeAnnotations.manage(i),o=Co.create(e,n,s)),this._workspaceEdit.documentChanges.push(o),s!==void 0)return s}};(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let i=n;return v.defined(i)&&v.string(i.uri)}t.is=r})(Em||(Em={}));(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return v.defined(i)&&v.string(i.uri)&&v.integer(i.version)}t.is=r})(_m||(_m={}));(function(t){function e(n,i){return{uri:n,version:i}}t.create=e;function r(n){let i=n;return v.defined(i)&&v.string(i.uri)&&(i.version===null||v.integer(i.version))}t.is=r})(Sa||(Sa={}));(function(t){function e(n,i,o,s){return{uri:n,languageId:i,version:o,text:s}}t.create=e;function r(n){let i=n;return v.defined(i)&&v.string(i.uri)&&v.string(i.languageId)&&v.integer(i.version)&&v.string(i.text)}t.is=r})($m||($m={}));(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(cl||(cl={}));(function(t){function e(r){let n=r;return v.objectLiteral(r)&&cl.is(n.kind)&&v.string(n.value)}t.is=e})(Eo||(Eo={}));(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(Aa||(Aa={}));(function(t){t.PlainText=1,t.Snippet=2})(Nm||(Nm={}));(function(t){t.Deprecated=1})(Pm||(Pm={}));(function(t){function e(n,i,o){return{newText:n,insert:i,replace:o}}t.create=e;function r(n){let i=n;return i&&v.string(i.newText)&&Ye.is(i.insert)&&Ye.is(i.replace)}t.is=r})(Im||(Im={}));(function(t){t.asIs=1,t.adjustIndentation=2})(Dm||(Dm={}));(function(t){function e(r){let n=r;return n&&(v.string(n.detail)||n.detail===void 0)&&(v.string(n.description)||n.description===void 0)}t.is=e})(Om||(Om={}));(function(t){function e(r){return{label:r}}t.create=e})(Lm||(Lm={}));(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(Mm||(Mm={}));(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let i=n;return v.string(i)||v.objectLiteral(i)&&v.string(i.language)&&v.string(i.value)}t.is=r})(ba||(ba={}));(function(t){function e(r){let n=r;return!!n&&v.objectLiteral(n)&&(Eo.is(n.contents)||ba.is(n.contents)||v.typedArray(n.contents,ba.is))&&(r.range===void 0||Ye.is(r.range))}t.is=e})(Fm||(Fm={}));(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(Um||(Um={}));(function(t){function e(r,n,...i){let o={label:r};return v.defined(n)&&(o.documentation=n),v.defined(i)?o.parameters=i:o.parameters=[],o}t.create=e})(qm||(qm={}));(function(t){t.Text=1,t.Read=2,t.Write=3})(Gm||(Gm={}));(function(t){function e(r,n){let i={range:r};return v.number(n)&&(i.kind=n),i}t.create=e})(jm||(jm={}));(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(Hm||(Hm={}));(function(t){t.Deprecated=1})(Km||(Km={}));(function(t){function e(r,n,i,o,s){let a={name:r,kind:n,location:{uri:o,range:i}};return s&&(a.containerName=s),a}t.create=e})(Wm||(Wm={}));(function(t){function e(r,n,i,o){return o!==void 0?{name:r,kind:n,location:{uri:i,range:o}}:{name:r,kind:n,location:{uri:i}}}t.create=e})(Bm||(Bm={}));(function(t){function e(n,i,o,s,a,c){let l={name:n,detail:i,kind:o,range:s,selectionRange:a};return c!==void 0&&(l.children=c),l}t.create=e;function r(n){let i=n;return i&&v.string(i.name)&&v.number(i.kind)&&Ye.is(i.range)&&Ye.is(i.selectionRange)&&(i.detail===void 0||v.string(i.detail))&&(i.deprecated===void 0||v.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=r})(zm||(zm={}));(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(Vm||(Vm={}));(function(t){t.Invoked=1,t.Automatic=2})(wa||(wa={}));(function(t){function e(n,i,o){let s={diagnostics:n};return i!=null&&(s.only=i),o!=null&&(s.triggerKind=o),s}t.create=e;function r(n){let i=n;return v.defined(i)&&v.typedArray(i.diagnostics,va.is)&&(i.only===void 0||v.typedArray(i.only,v.string))&&(i.triggerKind===void 0||i.triggerKind===wa.Invoked||i.triggerKind===wa.Automatic)}t.is=r})(Xm||(Xm={}));(function(t){function e(n,i,o){let s={title:n},a=!0;return typeof i=="string"?(a=!1,s.kind=i):Ui.is(i)?s.command=i:s.edit=i,a&&o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return i&&v.string(i.title)&&(i.diagnostics===void 0||v.typedArray(i.diagnostics,va.is))&&(i.kind===void 0||v.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||Ui.is(i.command))&&(i.isPreferred===void 0||v.boolean(i.isPreferred))&&(i.edit===void 0||sl.is(i.edit))}t.is=r})(Ym||(Ym={}));(function(t){function e(n,i){let o={range:n};return v.defined(i)&&(o.data=i),o}t.create=e;function r(n){let i=n;return v.defined(i)&&Ye.is(i.range)&&(v.undefined(i.command)||Ui.is(i.command))}t.is=r})(Jm||(Jm={}));(function(t){function e(n,i){return{tabSize:n,insertSpaces:i}}t.create=e;function r(n){let i=n;return v.defined(i)&&v.uinteger(i.tabSize)&&v.boolean(i.insertSpaces)}t.is=r})(Qm||(Qm={}));(function(t){function e(n,i,o){return{range:n,target:i,data:o}}t.create=e;function r(n){let i=n;return v.defined(i)&&Ye.is(i.range)&&(v.undefined(i.target)||v.string(i.target))}t.is=r})(Zm||(Zm={}));(function(t){function e(n,i){return{range:n,parent:i}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&Ye.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=r})(eh||(eh={}));(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(th||(th={}));(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(rh||(rh={}));(function(t){function e(r){let n=r;return v.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(nh||(nh={}));(function(t){function e(n,i){return{range:n,text:i}}t.create=e;function r(n){let i=n;return i!=null&&Ye.is(i.range)&&v.string(i.text)}t.is=r})(ih||(ih={}));(function(t){function e(n,i,o){return{range:n,variableName:i,caseSensitiveLookup:o}}t.create=e;function r(n){let i=n;return i!=null&&Ye.is(i.range)&&v.boolean(i.caseSensitiveLookup)&&(v.string(i.variableName)||i.variableName===void 0)}t.is=r})(oh||(oh={}));(function(t){function e(n,i){return{range:n,expression:i}}t.create=e;function r(n){let i=n;return i!=null&&Ye.is(i.range)&&(v.string(i.expression)||i.expression===void 0)}t.is=r})(sh||(sh={}));(function(t){function e(n,i){return{frameId:n,stoppedLocation:i}}t.create=e;function r(n){let i=n;return v.defined(i)&&Ye.is(n.stoppedLocation)}t.is=r})(ah||(ah={}));(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(ll||(ll={}));(function(t){function e(n){return{value:n}}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&(i.tooltip===void 0||v.string(i.tooltip)||Eo.is(i.tooltip))&&(i.location===void 0||xa.is(i.location))&&(i.command===void 0||Ui.is(i.command))}t.is=r})(ul||(ul={}));(function(t){function e(n,i,o){let s={position:n,label:i};return o!==void 0&&(s.kind=o),s}t.create=e;function r(n){let i=n;return v.objectLiteral(i)&&Qt.is(i.position)&&(v.string(i.label)||v.typedArray(i.label,ul.is))&&(i.kind===void 0||ll.is(i.kind))&&i.textEdits===void 0||v.typedArray(i.textEdits,nn.is)&&(i.tooltip===void 0||v.string(i.tooltip)||Eo.is(i.tooltip))&&(i.paddingLeft===void 0||v.boolean(i.paddingLeft))&&(i.paddingRight===void 0||v.boolean(i.paddingRight))}t.is=r})(ch||(ch={}));(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(lh||(lh={}));(function(t){function e(r,n,i,o){return{insertText:r,filterText:n,range:i,command:o}}t.create=e})(uh||(uh={}));(function(t){function e(r){return{items:r}}t.create=e})(fh||(fh={}));(function(t){t.Invoked=0,t.Automatic=1})(dh||(dh={}));(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(ph||(ph={}));(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(mh||(mh={}));(function(t){function e(r){let n=r;return v.objectLiteral(n)&&nl.is(n.uri)&&v.string(n.name)}t.is=e})(hh||(hh={}));S$=[`
`,`\r
`,"\r"];(function(t){function e(o,s,a,c){return new yh(o,s,a,c)}t.create=e;function r(o){let s=o;return!!(v.defined(s)&&v.string(s.uri)&&(v.undefined(s.languageId)||v.string(s.languageId))&&v.uinteger(s.lineCount)&&v.func(s.getText)&&v.func(s.positionAt)&&v.func(s.offsetAt))}t.is=r;function n(o,s){let a=o.getText(),c=i(s,(u,f)=>{let d=u.range.start.line-f.range.start.line;return d===0?u.range.start.character-f.range.start.character:d}),l=a.length;for(let u=c.length-1;u>=0;u--){let f=c[u],d=o.offsetAt(f.range.start),p=o.offsetAt(f.range.end);if(p<=l)a=a.substring(0,d)+f.newText+a.substring(p,a.length);else throw new Error("Overlapping edit");l=d}return a}t.applyEdits=n;function i(o,s){if(o.length<=1)return o;let a=o.length/2|0,c=o.slice(0,a),l=o.slice(a);i(c,s),i(l,s);let u=0,f=0,d=0;for(;u<c.length&&f<l.length;)s(c[u],l[f])<=0?o[d++]=c[u++]:o[d++]=l[f++];for(;u<c.length;)o[d++]=c[u++];for(;f<l.length;)o[d++]=l[f++];return o}})(gh||(gh={}));yh=class{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let i=0;i<r.length;i++){n&&(e.push(i),n=!1);let o=r.charAt(i);n=o==="\r"||o===`
`,o==="\r"&&i+1<r.length&&r.charAt(i+1)===`
`&&i++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return Qt.create(0,e);for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return Qt.create(o,e-r[o])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}};(function(t){let e=Object.prototype.toString;function r(p){return typeof p<"u"}t.defined=r;function n(p){return typeof p>"u"}t.undefined=n;function i(p){return p===!0||p===!1}t.boolean=i;function o(p){return e.call(p)==="[object String]"}t.string=o;function s(p){return e.call(p)==="[object Number]"}t.number=s;function a(p,T,R){return e.call(p)==="[object Number]"&&T<=p&&p<=R}t.numberRange=a;function c(p){return e.call(p)==="[object Number]"&&-2147483648<=p&&p<=2147483647}t.integer=c;function l(p){return e.call(p)==="[object Number]"&&0<=p&&p<=2147483647}t.uinteger=l;function u(p){return e.call(p)==="[object Function]"}t.func=u;function f(p){return p!==null&&typeof p=="object"}t.objectLiteral=f;function d(p,T){return Array.isArray(p)&&p.every(T)}t.typedArray=d})(v||(v={}))});var Me=O(cr=>{"use strict";Object.defineProperty(cr,"__esModule",{value:!0});cr.ProtocolNotificationType=cr.ProtocolNotificationType0=cr.ProtocolRequestType=cr.ProtocolRequestType0=cr.RegistrationType=cr.MessageDirection=void 0;var _o=kn(),wT;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(wT||(cr.MessageDirection=wT={}));var Th=class{constructor(e){this.method=e}};cr.RegistrationType=Th;var xh=class extends _o.RequestType0{constructor(e){super(e)}};cr.ProtocolRequestType0=xh;var vh=class extends _o.RequestType{constructor(e){super(e,_o.ParameterStructures.byName)}};cr.ProtocolRequestType=vh;var Rh=class extends _o.NotificationType0{constructor(e){super(e)}};cr.ProtocolNotificationType0=Rh;var Sh=class extends _o.NotificationType{constructor(e){super(e,_o.ParameterStructures.byName)}};cr.ProtocolNotificationType=Sh});var dl=O(at=>{"use strict";Object.defineProperty(at,"__esModule",{value:!0});at.objectLiteral=at.typedArray=at.stringArray=at.array=at.func=at.error=at.number=at.string=at.boolean=void 0;function A$(t){return t===!0||t===!1}at.boolean=A$;function kT(t){return typeof t=="string"||t instanceof String}at.string=kT;function b$(t){return typeof t=="number"||t instanceof Number}at.number=b$;function w$(t){return t instanceof Error}at.error=w$;function k$(t){return typeof t=="function"}at.func=k$;function CT(t){return Array.isArray(t)}at.array=CT;function C$(t){return CT(t)&&t.every(e=>kT(e))}at.stringArray=C$;function E$(t,e){return Array.isArray(t)&&t.every(e)}at.typedArray=E$;function _$(t){return t!==null&&typeof t=="object"}at.objectLiteral=_$});var $T=O(pl=>{"use strict";Object.defineProperty(pl,"__esModule",{value:!0});pl.ImplementationRequest=void 0;var ET=Me(),_T;(function(t){t.method="textDocument/implementation",t.messageDirection=ET.MessageDirection.clientToServer,t.type=new ET.ProtocolRequestType(t.method)})(_T||(pl.ImplementationRequest=_T={}))});var IT=O(ml=>{"use strict";Object.defineProperty(ml,"__esModule",{value:!0});ml.TypeDefinitionRequest=void 0;var NT=Me(),PT;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=NT.MessageDirection.clientToServer,t.type=new NT.ProtocolRequestType(t.method)})(PT||(ml.TypeDefinitionRequest=PT={}))});var LT=O($o=>{"use strict";Object.defineProperty($o,"__esModule",{value:!0});$o.DidChangeWorkspaceFoldersNotification=$o.WorkspaceFoldersRequest=void 0;var hl=Me(),DT;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=hl.MessageDirection.serverToClient,t.type=new hl.ProtocolRequestType0(t.method)})(DT||($o.WorkspaceFoldersRequest=DT={}));var OT;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=hl.MessageDirection.clientToServer,t.type=new hl.ProtocolNotificationType(t.method)})(OT||($o.DidChangeWorkspaceFoldersNotification=OT={}))});var UT=O(gl=>{"use strict";Object.defineProperty(gl,"__esModule",{value:!0});gl.ConfigurationRequest=void 0;var MT=Me(),FT;(function(t){t.method="workspace/configuration",t.messageDirection=MT.MessageDirection.serverToClient,t.type=new MT.ProtocolRequestType(t.method)})(FT||(gl.ConfigurationRequest=FT={}))});var jT=O(No=>{"use strict";Object.defineProperty(No,"__esModule",{value:!0});No.ColorPresentationRequest=No.DocumentColorRequest=void 0;var yl=Me(),qT;(function(t){t.method="textDocument/documentColor",t.messageDirection=yl.MessageDirection.clientToServer,t.type=new yl.ProtocolRequestType(t.method)})(qT||(No.DocumentColorRequest=qT={}));var GT;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=yl.MessageDirection.clientToServer,t.type=new yl.ProtocolRequestType(t.method)})(GT||(No.ColorPresentationRequest=GT={}))});var WT=O(Po=>{"use strict";Object.defineProperty(Po,"__esModule",{value:!0});Po.FoldingRangeRefreshRequest=Po.FoldingRangeRequest=void 0;var Tl=Me(),HT;(function(t){t.method="textDocument/foldingRange",t.messageDirection=Tl.MessageDirection.clientToServer,t.type=new Tl.ProtocolRequestType(t.method)})(HT||(Po.FoldingRangeRequest=HT={}));var KT;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=Tl.MessageDirection.serverToClient,t.type=new Tl.ProtocolRequestType0(t.method)})(KT||(Po.FoldingRangeRefreshRequest=KT={}))});var VT=O(xl=>{"use strict";Object.defineProperty(xl,"__esModule",{value:!0});xl.DeclarationRequest=void 0;var BT=Me(),zT;(function(t){t.method="textDocument/declaration",t.messageDirection=BT.MessageDirection.clientToServer,t.type=new BT.ProtocolRequestType(t.method)})(zT||(xl.DeclarationRequest=zT={}))});var JT=O(vl=>{"use strict";Object.defineProperty(vl,"__esModule",{value:!0});vl.SelectionRangeRequest=void 0;var XT=Me(),YT;(function(t){t.method="textDocument/selectionRange",t.messageDirection=XT.MessageDirection.clientToServer,t.type=new XT.ProtocolRequestType(t.method)})(YT||(vl.SelectionRangeRequest=YT={}))});var tx=O(ti=>{"use strict";Object.defineProperty(ti,"__esModule",{value:!0});ti.WorkDoneProgressCancelNotification=ti.WorkDoneProgressCreateRequest=ti.WorkDoneProgress=void 0;var $$=kn(),Rl=Me(),QT;(function(t){t.type=new $$.ProgressType;function e(r){return r===t.type}t.is=e})(QT||(ti.WorkDoneProgress=QT={}));var ZT;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=Rl.MessageDirection.serverToClient,t.type=new Rl.ProtocolRequestType(t.method)})(ZT||(ti.WorkDoneProgressCreateRequest=ZT={}));var ex;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=Rl.MessageDirection.clientToServer,t.type=new Rl.ProtocolNotificationType(t.method)})(ex||(ti.WorkDoneProgressCancelNotification=ex={}))});var ox=O(ri=>{"use strict";Object.defineProperty(ri,"__esModule",{value:!0});ri.CallHierarchyOutgoingCallsRequest=ri.CallHierarchyIncomingCallsRequest=ri.CallHierarchyPrepareRequest=void 0;var Io=Me(),rx;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Io.MessageDirection.clientToServer,t.type=new Io.ProtocolRequestType(t.method)})(rx||(ri.CallHierarchyPrepareRequest=rx={}));var nx;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Io.MessageDirection.clientToServer,t.type=new Io.ProtocolRequestType(t.method)})(nx||(ri.CallHierarchyIncomingCallsRequest=nx={}));var ix;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Io.MessageDirection.clientToServer,t.type=new Io.ProtocolRequestType(t.method)})(ix||(ri.CallHierarchyOutgoingCallsRequest=ix={}))});var fx=O(lr=>{"use strict";Object.defineProperty(lr,"__esModule",{value:!0});lr.SemanticTokensRefreshRequest=lr.SemanticTokensRangeRequest=lr.SemanticTokensDeltaRequest=lr.SemanticTokensRequest=lr.SemanticTokensRegistrationType=lr.TokenFormat=void 0;var En=Me(),sx;(function(t){t.Relative="relative"})(sx||(lr.TokenFormat=sx={}));var ka;(function(t){t.method="textDocument/semanticTokens",t.type=new En.RegistrationType(t.method)})(ka||(lr.SemanticTokensRegistrationType=ka={}));var ax;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.ProtocolRequestType(t.method),t.registrationMethod=ka.method})(ax||(lr.SemanticTokensRequest=ax={}));var cx;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.ProtocolRequestType(t.method),t.registrationMethod=ka.method})(cx||(lr.SemanticTokensDeltaRequest=cx={}));var lx;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.ProtocolRequestType(t.method),t.registrationMethod=ka.method})(lx||(lr.SemanticTokensRangeRequest=lx={}));var ux;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=En.MessageDirection.serverToClient,t.type=new En.ProtocolRequestType0(t.method)})(ux||(lr.SemanticTokensRefreshRequest=ux={}))});var mx=O(Sl=>{"use strict";Object.defineProperty(Sl,"__esModule",{value:!0});Sl.ShowDocumentRequest=void 0;var dx=Me(),px;(function(t){t.method="window/showDocument",t.messageDirection=dx.MessageDirection.serverToClient,t.type=new dx.ProtocolRequestType(t.method)})(px||(Sl.ShowDocumentRequest=px={}))});var yx=O(Al=>{"use strict";Object.defineProperty(Al,"__esModule",{value:!0});Al.LinkedEditingRangeRequest=void 0;var hx=Me(),gx;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=hx.MessageDirection.clientToServer,t.type=new hx.ProtocolRequestType(t.method)})(gx||(Al.LinkedEditingRangeRequest=gx={}))});var wx=O(qt=>{"use strict";Object.defineProperty(qt,"__esModule",{value:!0});qt.WillDeleteFilesRequest=qt.DidDeleteFilesNotification=qt.DidRenameFilesNotification=qt.WillRenameFilesRequest=qt.DidCreateFilesNotification=qt.WillCreateFilesRequest=qt.FileOperationPatternKind=void 0;var _r=Me(),Tx;(function(t){t.file="file",t.folder="folder"})(Tx||(qt.FileOperationPatternKind=Tx={}));var xx;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolRequestType(t.method)})(xx||(qt.WillCreateFilesRequest=xx={}));var vx;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolNotificationType(t.method)})(vx||(qt.DidCreateFilesNotification=vx={}));var Rx;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolRequestType(t.method)})(Rx||(qt.WillRenameFilesRequest=Rx={}));var Sx;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolNotificationType(t.method)})(Sx||(qt.DidRenameFilesNotification=Sx={}));var Ax;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolNotificationType(t.method)})(Ax||(qt.DidDeleteFilesNotification=Ax={}));var bx;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolRequestType(t.method)})(bx||(qt.WillDeleteFilesRequest=bx={}))});var $x=O(ni=>{"use strict";Object.defineProperty(ni,"__esModule",{value:!0});ni.MonikerRequest=ni.MonikerKind=ni.UniquenessLevel=void 0;var kx=Me(),Cx;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Cx||(ni.UniquenessLevel=Cx={}));var Ex;(function(t){t.$import="import",t.$export="export",t.local="local"})(Ex||(ni.MonikerKind=Ex={}));var _x;(function(t){t.method="textDocument/moniker",t.messageDirection=kx.MessageDirection.clientToServer,t.type=new kx.ProtocolRequestType(t.method)})(_x||(ni.MonikerRequest=_x={}))});var Dx=O(ii=>{"use strict";Object.defineProperty(ii,"__esModule",{value:!0});ii.TypeHierarchySubtypesRequest=ii.TypeHierarchySupertypesRequest=ii.TypeHierarchyPrepareRequest=void 0;var Do=Me(),Nx;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Do.MessageDirection.clientToServer,t.type=new Do.ProtocolRequestType(t.method)})(Nx||(ii.TypeHierarchyPrepareRequest=Nx={}));var Px;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Do.MessageDirection.clientToServer,t.type=new Do.ProtocolRequestType(t.method)})(Px||(ii.TypeHierarchySupertypesRequest=Px={}));var Ix;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Do.MessageDirection.clientToServer,t.type=new Do.ProtocolRequestType(t.method)})(Ix||(ii.TypeHierarchySubtypesRequest=Ix={}))});var Mx=O(Oo=>{"use strict";Object.defineProperty(Oo,"__esModule",{value:!0});Oo.InlineValueRefreshRequest=Oo.InlineValueRequest=void 0;var bl=Me(),Ox;(function(t){t.method="textDocument/inlineValue",t.messageDirection=bl.MessageDirection.clientToServer,t.type=new bl.ProtocolRequestType(t.method)})(Ox||(Oo.InlineValueRequest=Ox={}));var Lx;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=bl.MessageDirection.serverToClient,t.type=new bl.ProtocolRequestType0(t.method)})(Lx||(Oo.InlineValueRefreshRequest=Lx={}))});var Gx=O(oi=>{"use strict";Object.defineProperty(oi,"__esModule",{value:!0});oi.InlayHintRefreshRequest=oi.InlayHintResolveRequest=oi.InlayHintRequest=void 0;var Lo=Me(),Fx;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Lo.MessageDirection.clientToServer,t.type=new Lo.ProtocolRequestType(t.method)})(Fx||(oi.InlayHintRequest=Fx={}));var Ux;(function(t){t.method="inlayHint/resolve",t.messageDirection=Lo.MessageDirection.clientToServer,t.type=new Lo.ProtocolRequestType(t.method)})(Ux||(oi.InlayHintResolveRequest=Ux={}));var qx;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Lo.MessageDirection.serverToClient,t.type=new Lo.ProtocolRequestType0(t.method)})(qx||(oi.InlayHintRefreshRequest=qx={}))});var Vx=O($r=>{"use strict";Object.defineProperty($r,"__esModule",{value:!0});$r.DiagnosticRefreshRequest=$r.WorkspaceDiagnosticRequest=$r.DocumentDiagnosticRequest=$r.DocumentDiagnosticReportKind=$r.DiagnosticServerCancellationData=void 0;var zx=kn(),N$=dl(),Mo=Me(),jx;(function(t){function e(r){let n=r;return n&&N$.boolean(n.retriggerRequest)}t.is=e})(jx||($r.DiagnosticServerCancellationData=jx={}));var Hx;(function(t){t.Full="full",t.Unchanged="unchanged"})(Hx||($r.DocumentDiagnosticReportKind=Hx={}));var Kx;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Mo.MessageDirection.clientToServer,t.type=new Mo.ProtocolRequestType(t.method),t.partialResult=new zx.ProgressType})(Kx||($r.DocumentDiagnosticRequest=Kx={}));var Wx;(function(t){t.method="workspace/diagnostic",t.messageDirection=Mo.MessageDirection.clientToServer,t.type=new Mo.ProtocolRequestType(t.method),t.partialResult=new zx.ProgressType})(Wx||($r.WorkspaceDiagnosticRequest=Wx={}));var Bx;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Mo.MessageDirection.serverToClient,t.type=new Mo.ProtocolRequestType0(t.method)})(Bx||($r.DiagnosticRefreshRequest=Bx={}))});var tv=O(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.DidCloseNotebookDocumentNotification=Je.DidSaveNotebookDocumentNotification=Je.DidChangeNotebookDocumentNotification=Je.NotebookCellArrayChange=Je.DidOpenNotebookDocumentNotification=Je.NotebookDocumentSyncRegistrationType=Je.NotebookDocument=Je.NotebookCell=Je.ExecutionSummary=Je.NotebookCellKind=void 0;var Ca=(qi(),cp(fl)),Wr=dl(),on=Me(),Ah;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(Ah||(Je.NotebookCellKind=Ah={}));var bh;(function(t){function e(i,o){let s={executionOrder:i};return(o===!0||o===!1)&&(s.success=o),s}t.create=e;function r(i){let o=i;return Wr.objectLiteral(o)&&Ca.uinteger.is(o.executionOrder)&&(o.success===void 0||Wr.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(bh||(Je.ExecutionSummary=bh={}));var wl;(function(t){function e(o,s){return{kind:o,document:s}}t.create=e;function r(o){let s=o;return Wr.objectLiteral(s)&&Ah.is(s.kind)&&Ca.DocumentUri.is(s.document)&&(s.metadata===void 0||Wr.objectLiteral(s.metadata))}t.is=r;function n(o,s){let a=new Set;return o.document!==s.document&&a.add("document"),o.kind!==s.kind&&a.add("kind"),o.executionSummary!==s.executionSummary&&a.add("executionSummary"),(o.metadata!==void 0||s.metadata!==void 0)&&!i(o.metadata,s.metadata)&&a.add("metadata"),(o.executionSummary!==void 0||s.executionSummary!==void 0)&&!bh.equals(o.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function i(o,s){if(o===s)return!0;if(o==null||s===null||s===void 0||typeof o!=typeof s||typeof o!="object")return!1;let a=Array.isArray(o),c=Array.isArray(s);if(a!==c)return!1;if(a&&c){if(o.length!==s.length)return!1;for(let l=0;l<o.length;l++)if(!i(o[l],s[l]))return!1}if(Wr.objectLiteral(o)&&Wr.objectLiteral(s)){let l=Object.keys(o),u=Object.keys(s);if(l.length!==u.length||(l.sort(),u.sort(),!i(l,u)))return!1;for(let f=0;f<l.length;f++){let d=l[f];if(!i(o[d],s[d]))return!1}}return!0}})(wl||(Je.NotebookCell=wl={}));var Xx;(function(t){function e(n,i,o,s){return{uri:n,notebookType:i,version:o,cells:s}}t.create=e;function r(n){let i=n;return Wr.objectLiteral(i)&&Wr.string(i.uri)&&Ca.integer.is(i.version)&&Wr.typedArray(i.cells,wl.is)}t.is=r})(Xx||(Je.NotebookDocument=Xx={}));var Fo;(function(t){t.method="notebookDocument/sync",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.RegistrationType(t.method)})(Fo||(Je.NotebookDocumentSyncRegistrationType=Fo={}));var Yx;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolNotificationType(t.method),t.registrationMethod=Fo.method})(Yx||(Je.DidOpenNotebookDocumentNotification=Yx={}));var Jx;(function(t){function e(n){let i=n;return Wr.objectLiteral(i)&&Ca.uinteger.is(i.start)&&Ca.uinteger.is(i.deleteCount)&&(i.cells===void 0||Wr.typedArray(i.cells,wl.is))}t.is=e;function r(n,i,o){let s={start:n,deleteCount:i};return o!==void 0&&(s.cells=o),s}t.create=r})(Jx||(Je.NotebookCellArrayChange=Jx={}));var Qx;(function(t){t.method="notebookDocument/didChange",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolNotificationType(t.method),t.registrationMethod=Fo.method})(Qx||(Je.DidChangeNotebookDocumentNotification=Qx={}));var Zx;(function(t){t.method="notebookDocument/didSave",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolNotificationType(t.method),t.registrationMethod=Fo.method})(Zx||(Je.DidSaveNotebookDocumentNotification=Zx={}));var ev;(function(t){t.method="notebookDocument/didClose",t.messageDirection=on.MessageDirection.clientToServer,t.type=new on.ProtocolNotificationType(t.method),t.registrationMethod=Fo.method})(ev||(Je.DidCloseNotebookDocumentNotification=ev={}))});var iv=O(kl=>{"use strict";Object.defineProperty(kl,"__esModule",{value:!0});kl.InlineCompletionRequest=void 0;var rv=Me(),nv;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=rv.MessageDirection.clientToServer,t.type=new rv.ProtocolRequestType(t.method)})(nv||(kl.InlineCompletionRequest=nv={}))});var yR=O(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.WorkspaceSymbolRequest=g.CodeActionResolveRequest=g.CodeActionRequest=g.DocumentSymbolRequest=g.DocumentHighlightRequest=g.ReferencesRequest=g.DefinitionRequest=g.SignatureHelpRequest=g.SignatureHelpTriggerKind=g.HoverRequest=g.CompletionResolveRequest=g.CompletionRequest=g.CompletionTriggerKind=g.PublishDiagnosticsNotification=g.WatchKind=g.RelativePattern=g.FileChangeType=g.DidChangeWatchedFilesNotification=g.WillSaveTextDocumentWaitUntilRequest=g.WillSaveTextDocumentNotification=g.TextDocumentSaveReason=g.DidSaveTextDocumentNotification=g.DidCloseTextDocumentNotification=g.DidChangeTextDocumentNotification=g.TextDocumentContentChangeEvent=g.DidOpenTextDocumentNotification=g.TextDocumentSyncKind=g.TelemetryEventNotification=g.LogMessageNotification=g.ShowMessageRequest=g.ShowMessageNotification=g.MessageType=g.DidChangeConfigurationNotification=g.ExitNotification=g.ShutdownRequest=g.InitializedNotification=g.InitializeErrorCodes=g.InitializeRequest=g.WorkDoneProgressOptions=g.TextDocumentRegistrationOptions=g.StaticRegistrationOptions=g.PositionEncodingKind=g.FailureHandlingKind=g.ResourceOperationKind=g.UnregistrationRequest=g.RegistrationRequest=g.DocumentSelector=g.NotebookCellTextDocumentFilter=g.NotebookDocumentFilter=g.TextDocumentFilter=void 0;g.MonikerRequest=g.MonikerKind=g.UniquenessLevel=g.WillDeleteFilesRequest=g.DidDeleteFilesNotification=g.WillRenameFilesRequest=g.DidRenameFilesNotification=g.WillCreateFilesRequest=g.DidCreateFilesNotification=g.FileOperationPatternKind=g.LinkedEditingRangeRequest=g.ShowDocumentRequest=g.SemanticTokensRegistrationType=g.SemanticTokensRefreshRequest=g.SemanticTokensRangeRequest=g.SemanticTokensDeltaRequest=g.SemanticTokensRequest=g.TokenFormat=g.CallHierarchyPrepareRequest=g.CallHierarchyOutgoingCallsRequest=g.CallHierarchyIncomingCallsRequest=g.WorkDoneProgressCancelNotification=g.WorkDoneProgressCreateRequest=g.WorkDoneProgress=g.SelectionRangeRequest=g.DeclarationRequest=g.FoldingRangeRefreshRequest=g.FoldingRangeRequest=g.ColorPresentationRequest=g.DocumentColorRequest=g.ConfigurationRequest=g.DidChangeWorkspaceFoldersNotification=g.WorkspaceFoldersRequest=g.TypeDefinitionRequest=g.ImplementationRequest=g.ApplyWorkspaceEditRequest=g.ExecuteCommandRequest=g.PrepareRenameRequest=g.RenameRequest=g.PrepareSupportDefaultBehavior=g.DocumentOnTypeFormattingRequest=g.DocumentRangesFormattingRequest=g.DocumentRangeFormattingRequest=g.DocumentFormattingRequest=g.DocumentLinkResolveRequest=g.DocumentLinkRequest=g.CodeLensRefreshRequest=g.CodeLensResolveRequest=g.CodeLensRequest=g.WorkspaceSymbolResolveRequest=void 0;g.InlineCompletionRequest=g.DidCloseNotebookDocumentNotification=g.DidSaveNotebookDocumentNotification=g.DidChangeNotebookDocumentNotification=g.NotebookCellArrayChange=g.DidOpenNotebookDocumentNotification=g.NotebookDocumentSyncRegistrationType=g.NotebookDocument=g.NotebookCell=g.ExecutionSummary=g.NotebookCellKind=g.DiagnosticRefreshRequest=g.WorkspaceDiagnosticRequest=g.DocumentDiagnosticRequest=g.DocumentDiagnosticReportKind=g.DiagnosticServerCancellationData=g.InlayHintRefreshRequest=g.InlayHintResolveRequest=g.InlayHintRequest=g.InlineValueRefreshRequest=g.InlineValueRequest=g.TypeHierarchySupertypesRequest=g.TypeHierarchySubtypesRequest=g.TypeHierarchyPrepareRequest=void 0;var C=Me(),ov=(qi(),cp(fl)),St=dl(),P$=$T();Object.defineProperty(g,"ImplementationRequest",{enumerable:!0,get:function(){return P$.ImplementationRequest}});var I$=IT();Object.defineProperty(g,"TypeDefinitionRequest",{enumerable:!0,get:function(){return I$.TypeDefinitionRequest}});var pR=LT();Object.defineProperty(g,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return pR.WorkspaceFoldersRequest}});Object.defineProperty(g,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return pR.DidChangeWorkspaceFoldersNotification}});var D$=UT();Object.defineProperty(g,"ConfigurationRequest",{enumerable:!0,get:function(){return D$.ConfigurationRequest}});var mR=jT();Object.defineProperty(g,"DocumentColorRequest",{enumerable:!0,get:function(){return mR.DocumentColorRequest}});Object.defineProperty(g,"ColorPresentationRequest",{enumerable:!0,get:function(){return mR.ColorPresentationRequest}});var hR=WT();Object.defineProperty(g,"FoldingRangeRequest",{enumerable:!0,get:function(){return hR.FoldingRangeRequest}});Object.defineProperty(g,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return hR.FoldingRangeRefreshRequest}});var O$=VT();Object.defineProperty(g,"DeclarationRequest",{enumerable:!0,get:function(){return O$.DeclarationRequest}});var L$=JT();Object.defineProperty(g,"SelectionRangeRequest",{enumerable:!0,get:function(){return L$.SelectionRangeRequest}});var _h=tx();Object.defineProperty(g,"WorkDoneProgress",{enumerable:!0,get:function(){return _h.WorkDoneProgress}});Object.defineProperty(g,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return _h.WorkDoneProgressCreateRequest}});Object.defineProperty(g,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return _h.WorkDoneProgressCancelNotification}});var $h=ox();Object.defineProperty(g,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return $h.CallHierarchyIncomingCallsRequest}});Object.defineProperty(g,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return $h.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(g,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return $h.CallHierarchyPrepareRequest}});var Uo=fx();Object.defineProperty(g,"TokenFormat",{enumerable:!0,get:function(){return Uo.TokenFormat}});Object.defineProperty(g,"SemanticTokensRequest",{enumerable:!0,get:function(){return Uo.SemanticTokensRequest}});Object.defineProperty(g,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Uo.SemanticTokensDeltaRequest}});Object.defineProperty(g,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Uo.SemanticTokensRangeRequest}});Object.defineProperty(g,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Uo.SemanticTokensRefreshRequest}});Object.defineProperty(g,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Uo.SemanticTokensRegistrationType}});var M$=mx();Object.defineProperty(g,"ShowDocumentRequest",{enumerable:!0,get:function(){return M$.ShowDocumentRequest}});var F$=yx();Object.defineProperty(g,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return F$.LinkedEditingRangeRequest}});var Gi=wx();Object.defineProperty(g,"FileOperationPatternKind",{enumerable:!0,get:function(){return Gi.FileOperationPatternKind}});Object.defineProperty(g,"DidCreateFilesNotification",{enumerable:!0,get:function(){return Gi.DidCreateFilesNotification}});Object.defineProperty(g,"WillCreateFilesRequest",{enumerable:!0,get:function(){return Gi.WillCreateFilesRequest}});Object.defineProperty(g,"DidRenameFilesNotification",{enumerable:!0,get:function(){return Gi.DidRenameFilesNotification}});Object.defineProperty(g,"WillRenameFilesRequest",{enumerable:!0,get:function(){return Gi.WillRenameFilesRequest}});Object.defineProperty(g,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return Gi.DidDeleteFilesNotification}});Object.defineProperty(g,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return Gi.WillDeleteFilesRequest}});var Nh=$x();Object.defineProperty(g,"UniquenessLevel",{enumerable:!0,get:function(){return Nh.UniquenessLevel}});Object.defineProperty(g,"MonikerKind",{enumerable:!0,get:function(){return Nh.MonikerKind}});Object.defineProperty(g,"MonikerRequest",{enumerable:!0,get:function(){return Nh.MonikerRequest}});var Ph=Dx();Object.defineProperty(g,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return Ph.TypeHierarchyPrepareRequest}});Object.defineProperty(g,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return Ph.TypeHierarchySubtypesRequest}});Object.defineProperty(g,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return Ph.TypeHierarchySupertypesRequest}});var gR=Mx();Object.defineProperty(g,"InlineValueRequest",{enumerable:!0,get:function(){return gR.InlineValueRequest}});Object.defineProperty(g,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return gR.InlineValueRefreshRequest}});var Ih=Gx();Object.defineProperty(g,"InlayHintRequest",{enumerable:!0,get:function(){return Ih.InlayHintRequest}});Object.defineProperty(g,"InlayHintResolveRequest",{enumerable:!0,get:function(){return Ih.InlayHintResolveRequest}});Object.defineProperty(g,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return Ih.InlayHintRefreshRequest}});var Ea=Vx();Object.defineProperty(g,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return Ea.DiagnosticServerCancellationData}});Object.defineProperty(g,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return Ea.DocumentDiagnosticReportKind}});Object.defineProperty(g,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return Ea.DocumentDiagnosticRequest}});Object.defineProperty(g,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return Ea.WorkspaceDiagnosticRequest}});Object.defineProperty(g,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return Ea.DiagnosticRefreshRequest}});var sn=tv();Object.defineProperty(g,"NotebookCellKind",{enumerable:!0,get:function(){return sn.NotebookCellKind}});Object.defineProperty(g,"ExecutionSummary",{enumerable:!0,get:function(){return sn.ExecutionSummary}});Object.defineProperty(g,"NotebookCell",{enumerable:!0,get:function(){return sn.NotebookCell}});Object.defineProperty(g,"NotebookDocument",{enumerable:!0,get:function(){return sn.NotebookDocument}});Object.defineProperty(g,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return sn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(g,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidOpenNotebookDocumentNotification}});Object.defineProperty(g,"NotebookCellArrayChange",{enumerable:!0,get:function(){return sn.NotebookCellArrayChange}});Object.defineProperty(g,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidChangeNotebookDocumentNotification}});Object.defineProperty(g,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidSaveNotebookDocumentNotification}});Object.defineProperty(g,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidCloseNotebookDocumentNotification}});var U$=iv();Object.defineProperty(g,"InlineCompletionRequest",{enumerable:!0,get:function(){return U$.InlineCompletionRequest}});var wh;(function(t){function e(r){let n=r;return St.string(n)||St.string(n.language)||St.string(n.scheme)||St.string(n.pattern)}t.is=e})(wh||(g.TextDocumentFilter=wh={}));var kh;(function(t){function e(r){let n=r;return St.objectLiteral(n)&&(St.string(n.notebookType)||St.string(n.scheme)||St.string(n.pattern))}t.is=e})(kh||(g.NotebookDocumentFilter=kh={}));var Ch;(function(t){function e(r){let n=r;return St.objectLiteral(n)&&(St.string(n.notebook)||kh.is(n.notebook))&&(n.language===void 0||St.string(n.language))}t.is=e})(Ch||(g.NotebookCellTextDocumentFilter=Ch={}));var Eh;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!St.string(n)&&!wh.is(n)&&!Ch.is(n))return!1;return!0}t.is=e})(Eh||(g.DocumentSelector=Eh={}));var sv;(function(t){t.method="client/registerCapability",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolRequestType(t.method)})(sv||(g.RegistrationRequest=sv={}));var av;(function(t){t.method="client/unregisterCapability",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolRequestType(t.method)})(av||(g.UnregistrationRequest=av={}));var cv;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(cv||(g.ResourceOperationKind=cv={}));var lv;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(lv||(g.FailureHandlingKind=lv={}));var uv;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(uv||(g.PositionEncodingKind=uv={}));var fv;(function(t){function e(r){let n=r;return n&&St.string(n.id)&&n.id.length>0}t.hasId=e})(fv||(g.StaticRegistrationOptions=fv={}));var dv;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||Eh.is(n.documentSelector))}t.is=e})(dv||(g.TextDocumentRegistrationOptions=dv={}));var pv;(function(t){function e(n){let i=n;return St.objectLiteral(i)&&(i.workDoneProgress===void 0||St.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&St.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(pv||(g.WorkDoneProgressOptions=pv={}));var mv;(function(t){t.method="initialize",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(mv||(g.InitializeRequest=mv={}));var hv;(function(t){t.unknownProtocolVersion=1})(hv||(g.InitializeErrorCodes=hv={}));var gv;(function(t){t.method="initialized",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})(gv||(g.InitializedNotification=gv={}));var yv;(function(t){t.method="shutdown",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType0(t.method)})(yv||(g.ShutdownRequest=yv={}));var Tv;(function(t){t.method="exit",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType0(t.method)})(Tv||(g.ExitNotification=Tv={}));var xv;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})(xv||(g.DidChangeConfigurationNotification=xv={}));var vv;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(vv||(g.MessageType=vv={}));var Rv;(function(t){t.method="window/showMessage",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolNotificationType(t.method)})(Rv||(g.ShowMessageNotification=Rv={}));var Sv;(function(t){t.method="window/showMessageRequest",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolRequestType(t.method)})(Sv||(g.ShowMessageRequest=Sv={}));var Av;(function(t){t.method="window/logMessage",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolNotificationType(t.method)})(Av||(g.LogMessageNotification=Av={}));var bv;(function(t){t.method="telemetry/event",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolNotificationType(t.method)})(bv||(g.TelemetryEventNotification=bv={}));var wv;(function(t){t.None=0,t.Full=1,t.Incremental=2})(wv||(g.TextDocumentSyncKind=wv={}));var kv;(function(t){t.method="textDocument/didOpen",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})(kv||(g.DidOpenTextDocumentNotification=kv={}));var Cv;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(Cv||(g.TextDocumentContentChangeEvent=Cv={}));var Ev;(function(t){t.method="textDocument/didChange",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})(Ev||(g.DidChangeTextDocumentNotification=Ev={}));var _v;(function(t){t.method="textDocument/didClose",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})(_v||(g.DidCloseTextDocumentNotification=_v={}));var $v;(function(t){t.method="textDocument/didSave",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})($v||(g.DidSaveTextDocumentNotification=$v={}));var Nv;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(Nv||(g.TextDocumentSaveReason=Nv={}));var Pv;(function(t){t.method="textDocument/willSave",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})(Pv||(g.WillSaveTextDocumentNotification=Pv={}));var Iv;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Iv||(g.WillSaveTextDocumentWaitUntilRequest=Iv={}));var Dv;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolNotificationType(t.method)})(Dv||(g.DidChangeWatchedFilesNotification=Dv={}));var Ov;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(Ov||(g.FileChangeType=Ov={}));var Lv;(function(t){function e(r){let n=r;return St.objectLiteral(n)&&(ov.URI.is(n.baseUri)||ov.WorkspaceFolder.is(n.baseUri))&&St.string(n.pattern)}t.is=e})(Lv||(g.RelativePattern=Lv={}));var Mv;(function(t){t.Create=1,t.Change=2,t.Delete=4})(Mv||(g.WatchKind=Mv={}));var Fv;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolNotificationType(t.method)})(Fv||(g.PublishDiagnosticsNotification=Fv={}));var Uv;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(Uv||(g.CompletionTriggerKind=Uv={}));var qv;(function(t){t.method="textDocument/completion",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(qv||(g.CompletionRequest=qv={}));var Gv;(function(t){t.method="completionItem/resolve",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Gv||(g.CompletionResolveRequest=Gv={}));var jv;(function(t){t.method="textDocument/hover",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(jv||(g.HoverRequest=jv={}));var Hv;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(Hv||(g.SignatureHelpTriggerKind=Hv={}));var Kv;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Kv||(g.SignatureHelpRequest=Kv={}));var Wv;(function(t){t.method="textDocument/definition",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Wv||(g.DefinitionRequest=Wv={}));var Bv;(function(t){t.method="textDocument/references",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Bv||(g.ReferencesRequest=Bv={}));var zv;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(zv||(g.DocumentHighlightRequest=zv={}));var Vv;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Vv||(g.DocumentSymbolRequest=Vv={}));var Xv;(function(t){t.method="textDocument/codeAction",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Xv||(g.CodeActionRequest=Xv={}));var Yv;(function(t){t.method="codeAction/resolve",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Yv||(g.CodeActionResolveRequest=Yv={}));var Jv;(function(t){t.method="workspace/symbol",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Jv||(g.WorkspaceSymbolRequest=Jv={}));var Qv;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Qv||(g.WorkspaceSymbolResolveRequest=Qv={}));var Zv;(function(t){t.method="textDocument/codeLens",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(Zv||(g.CodeLensRequest=Zv={}));var eR;(function(t){t.method="codeLens/resolve",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(eR||(g.CodeLensResolveRequest=eR={}));var tR;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolRequestType0(t.method)})(tR||(g.CodeLensRefreshRequest=tR={}));var rR;(function(t){t.method="textDocument/documentLink",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(rR||(g.DocumentLinkRequest=rR={}));var nR;(function(t){t.method="documentLink/resolve",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(nR||(g.DocumentLinkResolveRequest=nR={}));var iR;(function(t){t.method="textDocument/formatting",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(iR||(g.DocumentFormattingRequest=iR={}));var oR;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(oR||(g.DocumentRangeFormattingRequest=oR={}));var sR;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(sR||(g.DocumentRangesFormattingRequest=sR={}));var aR;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(aR||(g.DocumentOnTypeFormattingRequest=aR={}));var cR;(function(t){t.Identifier=1})(cR||(g.PrepareSupportDefaultBehavior=cR={}));var lR;(function(t){t.method="textDocument/rename",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(lR||(g.RenameRequest=lR={}));var uR;(function(t){t.method="textDocument/prepareRename",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(uR||(g.PrepareRenameRequest=uR={}));var fR;(function(t){t.method="workspace/executeCommand",t.messageDirection=C.MessageDirection.clientToServer,t.type=new C.ProtocolRequestType(t.method)})(fR||(g.ExecuteCommandRequest=fR={}));var dR;(function(t){t.method="workspace/applyEdit",t.messageDirection=C.MessageDirection.serverToClient,t.type=new C.ProtocolRequestType("workspace/applyEdit")})(dR||(g.ApplyWorkspaceEditRequest=dR={}))});var xR=O(Cl=>{"use strict";Object.defineProperty(Cl,"__esModule",{value:!0});Cl.createProtocolConnection=void 0;var TR=kn();function q$(t,e,r,n){return TR.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,TR.createMessageConnection)(t,e,r,n)}Cl.createProtocolConnection=q$});var RR=O(ur=>{"use strict";var G$=ur&&ur.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),El=ur&&ur.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&G$(e,t,r)};Object.defineProperty(ur,"__esModule",{value:!0});ur.LSPErrorCodes=ur.createProtocolConnection=void 0;El(kn(),ur);El((qi(),cp(fl)),ur);El(Me(),ur);El(yR(),ur);var j$=xR();Object.defineProperty(ur,"createProtocolConnection",{enumerable:!0,get:function(){return j$.createProtocolConnection}});var vR;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(vR||(ur.LSPErrorCodes=vR={}))});var Qe=O(an=>{"use strict";var H$=an&&an.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),SR=an&&an.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&H$(e,t,r)};Object.defineProperty(an,"__esModule",{value:!0});an.createProtocolConnection=void 0;var K$=ym();SR(ym(),an);SR(RR(),an);function W$(t,e,r,n){return(0,K$.createMessageConnection)(t,e,r,n)}an.createProtocolConnection=W$});var Oh=O(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.SemanticTokensBuilder=si.SemanticTokensDiff=si.SemanticTokensFeature=void 0;var _l=Qe(),B$=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(_l.SemanticTokensRefreshRequest.type),on:e=>{let r=_l.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=_l.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=_l.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};si.SemanticTokensFeature=B$;var $l=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let s=i-n+1,a=this.modifiedSequence.slice(n,o+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};si.SemanticTokensDiff=$l;var Dh=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new $l(this._prevData,this._data).computeDiff()}:this.build()}};si.SemanticTokensBuilder=Dh});var AR=O(Nl=>{"use strict";Object.defineProperty(Nl,"__esModule",{value:!0});Nl.InlineCompletionFeature=void 0;var z$=Qe(),V$=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(z$.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Nl.InlineCompletionFeature=V$});var Mh=O(Pl=>{"use strict";Object.defineProperty(Pl,"__esModule",{value:!0});Pl.TextDocuments=void 0;var ji=Qe(),Lh=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new ji.Emitter,this._onDidOpen=new ji.Emitter,this._onDidClose=new ji.Emitter,this._onDidSave=new ji.Emitter,this._onWillSave=new ji.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=ji.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let s=Object.freeze({document:o});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,o,s),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),ji.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};Pl.TextDocuments=Lh});var Uh=O(qo=>{"use strict";Object.defineProperty(qo,"__esModule",{value:!0});qo.NotebookDocuments=qo.NotebookSyncFeature=void 0;var Nr=Qe(),bR=Mh(),X$=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Nr.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Nr.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Nr.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Nr.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};qo.NotebookSyncFeature=X$;var Il=class t{onDidOpenTextDocument(e){return this.openHandler=e,Nr.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Nr.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Nr.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};Il.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var Fh=class{constructor(e){e instanceof bR.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new bR.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Nr.Emitter,this._onDidChange=new Nr.Emitter,this._onDidSave=new Nr.Emitter,this._onDidClose=new Nr.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new Il,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let s=o.metadata,a=!1,c=i.change;c.metadata!==void 0&&(a=!0,o.metadata=c.metadata);let l=[],u=[],f=[],d=[];if(c.cells!==void 0){let S=c.cells;if(S.structure!==void 0){let h=S.structure.array;if(o.cells.splice(h.start,h.deleteCount,...h.cells!==void 0?h.cells:[]),S.structure.didOpen!==void 0)for(let m of S.structure.didOpen)r.openTextDocument({textDocument:m}),l.push(m.uri);if(S.structure.didClose)for(let m of S.structure.didClose)r.closeTextDocument({textDocument:m}),u.push(m.uri)}if(S.data!==void 0){let h=new Map(S.data.map(m=>[m.document,m]));for(let m=0;m<=o.cells.length;m++){let A=h.get(o.cells[m].document);if(A!==void 0){let E=o.cells.splice(m,1,A);if(f.push({old:E[0],new:A}),h.delete(A.document),h.size===0)break}}}if(S.textContent!==void 0)for(let h of S.textContent)r.changeTextDocument({textDocument:h.document,contentChanges:h.changes}),d.push(h.document.uri)}this.updateCellMap(o);let p={notebookDocument:o};a&&(p.metadata={old:s,new:o.metadata});let T=[];for(let S of l)T.push(this.getNotebookCell(S));let R=[];for(let S of u)R.push(this.getNotebookCell(S));let b=[];for(let S of d)b.push(this.getNotebookCell(S));(T.length>0||R.length>0||f.length>0||b.length>0)&&(p.cells={added:T,removed:R,changed:{data:f,textContent:b}}),(p.metadata!==void 0||p.cells!==void 0)&&this._onDidChange.fire(p)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let s of i.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of o.cells)this.notebookCellMap.delete(s.document)}})),Nr.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};qo.NotebookDocuments=Fh});var qh=O(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.thenable=ct.typedArray=ct.stringArray=ct.array=ct.func=ct.error=ct.number=ct.string=ct.boolean=void 0;function Y$(t){return t===!0||t===!1}ct.boolean=Y$;function wR(t){return typeof t=="string"||t instanceof String}ct.string=wR;function J$(t){return typeof t=="number"||t instanceof Number}ct.number=J$;function Q$(t){return t instanceof Error}ct.error=Q$;function kR(t){return typeof t=="function"}ct.func=kR;function CR(t){return Array.isArray(t)}ct.array=CR;function Z$(t){return CR(t)&&t.every(e=>wR(e))}ct.stringArray=Z$;function eN(t,e){return Array.isArray(t)&&t.every(e)}ct.typedArray=eN;function tN(t){return t&&kR(t.then)}ct.thenable=tN});var Gh=O(Pr=>{"use strict";Object.defineProperty(Pr,"__esModule",{value:!0});Pr.generateUuid=Pr.parse=Pr.isUUID=Pr.v4=Pr.empty=void 0;var _a=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},$a=class t extends _a{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};$a._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];$a._timeHighBits=["8","9","a","b"];Pr.empty=new _a("00000000-0000-0000-0000-000000000000");function ER(){return new $a}Pr.v4=ER;var rN=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function _R(t){return rN.test(t)}Pr.isUUID=_R;function nN(t){if(!_R(t))throw new Error("invalid uuid");return new _a(t)}Pr.parse=nN;function iN(){return ER().asHex()}Pr.generateUuid=iN});var $R=O(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.attachPartialResult=ci.ProgressFeature=ci.attachWorkDone=void 0;var ai=Qe(),oN=Gh(),Hi=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(ai.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(ai.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(ai.WorkDoneProgress.type,this._token,{kind:"end"})}};Hi.Instances=new Map;var Dl=class extends Hi{constructor(e,r){super(e,r),this._source=new ai.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},Na=class{constructor(){}begin(){}report(){}done(){}},Ol=class extends Na{constructor(){super(),this._source=new ai.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function sN(t,e){if(e===void 0||e.workDoneToken===void 0)return new Na;let r=e.workDoneToken;return delete e.workDoneToken,new Hi(t,r)}ci.attachWorkDone=sN;var aN=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(ai.WorkDoneProgressCancelNotification.type,r=>{let n=Hi.Instances.get(r.token);(n instanceof Dl||n instanceof Ol)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Na:new Hi(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,oN.generateUuid)();return this.connection.sendRequest(ai.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Dl(this.connection,e))}else return Promise.resolve(new Ol)}};ci.ProgressFeature=aN;var jh;(function(t){t.type=new ai.ProgressType})(jh||(jh={}));var Hh=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(jh.type,this._token,e)}};function cN(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new Hh(t,r)}ci.attachPartialResult=cN});var NR=O(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.ConfigurationFeature=void 0;var lN=Qe(),uN=qh(),fN=t=>class extends t{getConfiguration(e){return e?uN.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(lN.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Ll.ConfigurationFeature=fN});var PR=O(Fl=>{"use strict";Object.defineProperty(Fl,"__esModule",{value:!0});Fl.WorkspaceFoldersFeature=void 0;var Ml=Qe(),dN=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Ml.Emitter,this.connection.onNotification(Ml.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Ml.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Ml.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Fl.WorkspaceFoldersFeature=dN});var IR=O(Ul=>{"use strict";Object.defineProperty(Ul,"__esModule",{value:!0});Ul.CallHierarchyFeature=void 0;var Kh=Qe(),pN=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Kh.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Kh.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Kh.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ul.CallHierarchyFeature=pN});var DR=O(ql=>{"use strict";Object.defineProperty(ql,"__esModule",{value:!0});ql.ShowDocumentFeature=void 0;var mN=Qe(),hN=t=>class extends t{showDocument(e){return this.connection.sendRequest(mN.ShowDocumentRequest.type,e)}};ql.ShowDocumentFeature=hN});var OR=O(Gl=>{"use strict";Object.defineProperty(Gl,"__esModule",{value:!0});Gl.FileOperationsFeature=void 0;var Go=Qe(),gN=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Go.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Go.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Go.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Go.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Go.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Go.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Gl.FileOperationsFeature=gN});var LR=O(jl=>{"use strict";Object.defineProperty(jl,"__esModule",{value:!0});jl.LinkedEditingRangeFeature=void 0;var yN=Qe(),TN=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(yN.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};jl.LinkedEditingRangeFeature=TN});var MR=O(Hl=>{"use strict";Object.defineProperty(Hl,"__esModule",{value:!0});Hl.TypeHierarchyFeature=void 0;var Wh=Qe(),xN=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Wh.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Wh.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Wh.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Hl.TypeHierarchyFeature=xN});var UR=O(Kl=>{"use strict";Object.defineProperty(Kl,"__esModule",{value:!0});Kl.InlineValueFeature=void 0;var FR=Qe(),vN=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(FR.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(FR.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Kl.InlineValueFeature=vN});var GR=O(Wl=>{"use strict";Object.defineProperty(Wl,"__esModule",{value:!0});Wl.FoldingRangeFeature=void 0;var qR=Qe(),RN=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(qR.FoldingRangeRefreshRequest.type),on:e=>{let r=qR.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Wl.FoldingRangeFeature=RN});var jR=O(Bl=>{"use strict";Object.defineProperty(Bl,"__esModule",{value:!0});Bl.InlayHintFeature=void 0;var Bh=Qe(),SN=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Bh.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Bh.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Bh.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Bl.InlayHintFeature=SN});var HR=O(zl=>{"use strict";Object.defineProperty(zl,"__esModule",{value:!0});zl.DiagnosticFeature=void 0;var Pa=Qe(),AN=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(Pa.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(Pa.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Pa.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(Pa.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Pa.WorkspaceDiagnosticRequest.partialResult,r)))}}};zl.DiagnosticFeature=AN});var KR=O(Vl=>{"use strict";Object.defineProperty(Vl,"__esModule",{value:!0});Vl.MonikerFeature=void 0;var bN=Qe(),wN=t=>class extends t{get moniker(){return{on:e=>{let r=bN.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Vl.MonikerFeature=wN});var oS=O(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.createConnection=ae.combineFeatures=ae.combineNotebooksFeatures=ae.combineLanguagesFeatures=ae.combineWorkspaceFeatures=ae.combineWindowFeatures=ae.combineClientFeatures=ae.combineTracerFeatures=ae.combineTelemetryFeatures=ae.combineConsoleFeatures=ae._NotebooksImpl=ae._LanguagesImpl=ae.BulkUnregistration=ae.BulkRegistration=ae.ErrorMessageTracker=void 0;var N=Qe(),Ir=qh(),Vh=Gh(),z=$R(),kN=NR(),CN=PR(),EN=IR(),_N=Oh(),$N=DR(),NN=OR(),PN=LR(),IN=MR(),DN=UR(),ON=GR(),LN=jR(),MN=HR(),FN=Uh(),UN=KR();function zh(t){if(t!==null)return t}var Xh=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};ae.ErrorMessageTracker=Xh;var Xl=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(N.MessageType.Error,e)}warn(e){this.send(N.MessageType.Warning,e)}info(e){this.send(N.MessageType.Info,e)}log(e){this.send(N.MessageType.Log,e)}debug(e){this.send(N.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(N.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,N.RAL)().console.error("Sending log message failed")})}},Yh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:N.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(N.ShowMessageRequest.type,n).then(zh)}showWarningMessage(e,...r){let n={type:N.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(N.ShowMessageRequest.type,n).then(zh)}showInformationMessage(e,...r){let n={type:N.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(N.ShowMessageRequest.type,n).then(zh)}},WR=(0,$N.ShowDocumentFeature)((0,z.ProgressFeature)(Yh)),BR;(function(t){function e(){return new Yl}t.create=e})(BR||(ae.BulkRegistration=BR={}));var Yl=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=Ir.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=Vh.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},zR;(function(t){function e(){return new Ia(void 0,[])}t.create=e})(zR||(ae.BulkUnregistration=zR={}));var Ia=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(N.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=Ir.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(N.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Jl=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Yl?this.registerMany(e):e instanceof Ia?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=Ir.string(r)?r:r.method,o=Vh.generateUuid(),s={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(N.RegistrationRequest.type,s).then(a=>(e.add({id:o,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=Ir.string(e)?e:e.method,i=Vh.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(N.RegistrationRequest.type,o).then(s=>N.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(N.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(N.RegistrationRequest.type,r).then(()=>new Ia(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Jh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(N.ApplyWorkspaceEditRequest.type,n)}},VR=(0,NN.FileOperationsFeature)((0,CN.WorkspaceFoldersFeature)((0,kN.ConfigurationFeature)(Jh))),Ql=class{constructor(){this._trace=N.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==N.Trace.Off&&this.connection.sendNotification(N.LogTraceNotification.type,{message:e,verbose:this._trace===N.Trace.Verbose?r:void 0}).catch(()=>{})}},Zl=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(N.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},eu=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,z.attachPartialResult)(this.connection,r)}};ae._LanguagesImpl=eu;var XR=(0,ON.FoldingRangeFeature)((0,UN.MonikerFeature)((0,MN.DiagnosticFeature)((0,LN.InlayHintFeature)((0,DN.InlineValueFeature)((0,IN.TypeHierarchyFeature)((0,PN.LinkedEditingRangeFeature)((0,_N.SemanticTokensFeature)((0,EN.CallHierarchyFeature)(eu))))))))),tu=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,z.attachPartialResult)(this.connection,r)}};ae._NotebooksImpl=tu;var YR=(0,FN.NotebookSyncFeature)(tu);function JR(t,e){return function(r){return e(t(r))}}ae.combineConsoleFeatures=JR;function QR(t,e){return function(r){return e(t(r))}}ae.combineTelemetryFeatures=QR;function ZR(t,e){return function(r){return e(t(r))}}ae.combineTracerFeatures=ZR;function eS(t,e){return function(r){return e(t(r))}}ae.combineClientFeatures=eS;function tS(t,e){return function(r){return e(t(r))}}ae.combineWindowFeatures=tS;function rS(t,e){return function(r){return e(t(r))}}ae.combineWorkspaceFeatures=rS;function nS(t,e){return function(r){return e(t(r))}}ae.combineLanguagesFeatures=nS;function iS(t,e){return function(r){return e(t(r))}}ae.combineNotebooksFeatures=iS;function qN(t,e){function r(i,o,s){return i&&o?s(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,JR),tracer:r(t.tracer,e.tracer,ZR),telemetry:r(t.telemetry,e.telemetry,QR),client:r(t.client,e.client,eS),window:r(t.window,e.window,tS),workspace:r(t.workspace,e.workspace,rS),languages:r(t.languages,e.languages,nS),notebooks:r(t.notebooks,e.notebooks,iS)}}ae.combineFeatures=qN;function GN(t,e,r){let n=r&&r.console?new(r.console(Xl)):new Xl,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(Ql)):new Ql,s=r&&r.telemetry?new(r.telemetry(Zl)):new Zl,a=r&&r.client?new(r.client(Jl)):new Jl,c=r&&r.window?new(r.window(WR)):new WR,l=r&&r.workspace?new(r.workspace(VR)):new VR,u=r&&r.languages?new(r.languages(XR)):new XR,f=r&&r.notebooks?new(r.notebooks(YR)):new YR,d=[n,o,s,a,c,l,u,f];function p(h){return h instanceof Promise?h:Ir.thenable(h)?new Promise((m,A)=>{h.then(E=>m(E),E=>A(E))}):Promise.resolve(h)}let T,R,b,S={listen:()=>i.listen(),sendRequest:(h,...m)=>i.sendRequest(Ir.string(h)?h:h.method,...m),onRequest:(h,m)=>i.onRequest(h,m),sendNotification:(h,m)=>{let A=Ir.string(h)?h:h.method;return i.sendNotification(A,m)},onNotification:(h,m)=>i.onNotification(h,m),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:h=>(R=h,{dispose:()=>{R=void 0}}),onInitialized:h=>i.onNotification(N.InitializedNotification.type,h),onShutdown:h=>(T=h,{dispose:()=>{T=void 0}}),onExit:h=>(b=h,{dispose:()=>{b=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return o},get client(){return a},get window(){return c},get workspace(){return l},get languages(){return u},get notebooks(){return f},onDidChangeConfiguration:h=>i.onNotification(N.DidChangeConfigurationNotification.type,h),onDidChangeWatchedFiles:h=>i.onNotification(N.DidChangeWatchedFilesNotification.type,h),__textDocumentSync:void 0,onDidOpenTextDocument:h=>i.onNotification(N.DidOpenTextDocumentNotification.type,h),onDidChangeTextDocument:h=>i.onNotification(N.DidChangeTextDocumentNotification.type,h),onDidCloseTextDocument:h=>i.onNotification(N.DidCloseTextDocumentNotification.type,h),onWillSaveTextDocument:h=>i.onNotification(N.WillSaveTextDocumentNotification.type,h),onWillSaveTextDocumentWaitUntil:h=>i.onRequest(N.WillSaveTextDocumentWaitUntilRequest.type,h),onDidSaveTextDocument:h=>i.onNotification(N.DidSaveTextDocumentNotification.type,h),sendDiagnostics:h=>i.sendNotification(N.PublishDiagnosticsNotification.type,h),onHover:h=>i.onRequest(N.HoverRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),void 0)),onCompletion:h=>i.onRequest(N.CompletionRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onCompletionResolve:h=>i.onRequest(N.CompletionResolveRequest.type,h),onSignatureHelp:h=>i.onRequest(N.SignatureHelpRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),void 0)),onDeclaration:h=>i.onRequest(N.DeclarationRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onDefinition:h=>i.onRequest(N.DefinitionRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onTypeDefinition:h=>i.onRequest(N.TypeDefinitionRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onImplementation:h=>i.onRequest(N.ImplementationRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onReferences:h=>i.onRequest(N.ReferencesRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onDocumentHighlight:h=>i.onRequest(N.DocumentHighlightRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onDocumentSymbol:h=>i.onRequest(N.DocumentSymbolRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onWorkspaceSymbol:h=>i.onRequest(N.WorkspaceSymbolRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onWorkspaceSymbolResolve:h=>i.onRequest(N.WorkspaceSymbolResolveRequest.type,h),onCodeAction:h=>i.onRequest(N.CodeActionRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onCodeActionResolve:h=>i.onRequest(N.CodeActionResolveRequest.type,(m,A)=>h(m,A)),onCodeLens:h=>i.onRequest(N.CodeLensRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onCodeLensResolve:h=>i.onRequest(N.CodeLensResolveRequest.type,(m,A)=>h(m,A)),onDocumentFormatting:h=>i.onRequest(N.DocumentFormattingRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),void 0)),onDocumentRangeFormatting:h=>i.onRequest(N.DocumentRangeFormattingRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),void 0)),onDocumentOnTypeFormatting:h=>i.onRequest(N.DocumentOnTypeFormattingRequest.type,(m,A)=>h(m,A)),onRenameRequest:h=>i.onRequest(N.RenameRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),void 0)),onPrepareRename:h=>i.onRequest(N.PrepareRenameRequest.type,(m,A)=>h(m,A)),onDocumentLinks:h=>i.onRequest(N.DocumentLinkRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onDocumentLinkResolve:h=>i.onRequest(N.DocumentLinkResolveRequest.type,(m,A)=>h(m,A)),onDocumentColor:h=>i.onRequest(N.DocumentColorRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onColorPresentation:h=>i.onRequest(N.ColorPresentationRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onFoldingRanges:h=>i.onRequest(N.FoldingRangeRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onSelectionRanges:h=>i.onRequest(N.SelectionRangeRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),(0,z.attachPartialResult)(i,m))),onExecuteCommand:h=>i.onRequest(N.ExecuteCommandRequest.type,(m,A)=>h(m,A,(0,z.attachWorkDone)(i,m),void 0)),dispose:()=>i.dispose()};for(let h of d)h.attach(S);return i.onRequest(N.InitializeRequest.type,h=>{e.initialize(h),Ir.string(h.trace)&&(o.trace=N.Trace.fromString(h.trace));for(let m of d)m.initialize(h.capabilities);if(R){let m=R(h,new N.CancellationTokenSource().token,(0,z.attachWorkDone)(i,h),void 0);return p(m).then(A=>{if(A instanceof N.ResponseError)return A;let E=A;E||(E={capabilities:{}});let V=E.capabilities;V||(V={},E.capabilities=V),V.textDocumentSync===void 0||V.textDocumentSync===null?V.textDocumentSync=Ir.number(S.__textDocumentSync)?S.__textDocumentSync:N.TextDocumentSyncKind.None:!Ir.number(V.textDocumentSync)&&!Ir.number(V.textDocumentSync.change)&&(V.textDocumentSync.change=Ir.number(S.__textDocumentSync)?S.__textDocumentSync:N.TextDocumentSyncKind.None);for(let _t of d)_t.fillServerCapabilities(V);return E})}else{let m={capabilities:{textDocumentSync:N.TextDocumentSyncKind.None}};for(let A of d)A.fillServerCapabilities(m.capabilities);return m}}),i.onRequest(N.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,T)return T(new N.CancellationTokenSource().token)}),i.onNotification(N.ExitNotification.type,()=>{try{b&&b()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(N.SetTraceNotification.type,h=>{o.trace=N.Trace.fromString(h.value)}),S}ae.createConnection=GN});var Qh=O(Gt=>{"use strict";var jN=Gt&&Gt.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),aS=Gt&&Gt.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&jN(e,t,r)};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.ProposedFeatures=Gt.NotebookDocuments=Gt.TextDocuments=Gt.SemanticTokensBuilder=void 0;var HN=Oh();Object.defineProperty(Gt,"SemanticTokensBuilder",{enumerable:!0,get:function(){return HN.SemanticTokensBuilder}});var KN=AR();aS(Qe(),Gt);var WN=Mh();Object.defineProperty(Gt,"TextDocuments",{enumerable:!0,get:function(){return WN.TextDocuments}});var BN=Uh();Object.defineProperty(Gt,"NotebookDocuments",{enumerable:!0,get:function(){return BN.NotebookDocuments}});aS(oS(),Gt);var sS;(function(t){t.all={__brand:"features",languages:KN.InlineCompletionFeature}})(sS||(Gt.ProposedFeatures=sS={}))});var lS=O((cK,cS)=>{"use strict";cS.exports=Qe()});var de=O(cn=>{"use strict";var zN=cn&&cn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),fS=cn&&cn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&zN(e,t,r)};Object.defineProperty(cn,"__esModule",{value:!0});cn.createConnection=void 0;var ru=Qh();fS(lS(),cn);fS(Qh(),cn);var uS=!1,VN={initialize:t=>{},get shutdownReceived(){return uS},set shutdownReceived(t){uS=t},exit:t=>{}};function XN(t,e,r,n){let i,o,s,a;t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),ru.ConnectionStrategy.is(t)||ru.ConnectionOptions.is(t)?a=t:(o=t,s=e,a=r);let c=l=>(0,ru.createProtocolConnection)(o,s,l,a);return(0,ru.createConnection)(c,VN,i)}cn.createConnection=XN});var __=O((qle,E_)=>{"use strict";E_.exports=de()});var k_=se(de(),1);var nu=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=pS(n.range),o=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(s,this._content.length);let a=Math.max(i.start.line,0),c=Math.max(i.end.line,0),l=this._lineOffsets,u=dS(n.text,!1,o);if(c-a===u.length)for(let d=0,p=u.length;d<p;d++)l[d+a+1]=u[d];else u.length<1e4?l.splice(a+1,c-a,...u):this._lineOffsets=l=l.slice(0,a+1).concat(u,l.slice(c+1));let f=n.text.length-(s-o);if(f!==0)for(let d=a+1+u.length,p=l.length;d<p;d++)l[d]=l[d]+f}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=dS(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},jo;(function(t){function e(i,o,s,a){return new nu(i,o,s,a)}t.create=e;function r(i,o,s){if(i instanceof nu)return i.update(o,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let s=i.getText(),a=Zh(o.map(YN),(u,f)=>{let d=u.range.start.line-f.range.start.line;return d===0?u.range.start.character-f.range.start.character:d}),c=0,l=[];for(let u of a){let f=i.offsetAt(u.range.start);if(f<c)throw new Error("Overlapping edit");f>c&&l.push(s.substring(c,f)),u.newText.length&&l.push(u.newText),c=i.offsetAt(u.range.end)}return l.push(s.substr(c)),l.join("")}t.applyEdits=n})(jo||(jo={}));function Zh(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);Zh(n,e),Zh(i,e);let o=0,s=0,a=0;for(;o<n.length&&s<i.length;)e(n[o],i[s])<=0?t[a++]=n[o++]:t[a++]=i[s++];for(;o<n.length;)t[a++]=n[o++];for(;s<i.length;)t[a++]=i[s++];return t}function dS(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function pS(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function YN(t){let e=pS(t.range);return e!==t.range?{newText:t.newText,range:e}:t}function lt(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function _n(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function mS(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function Ho(t){return typeof t=="object"&&t!==null&&lt(t.container)&&_n(t.reference)&&typeof t.message=="string"}var Ki=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return lt(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),i=[];for(let o of n)this.isSubtype(o,e)&&i.push(o);return this.allSubtypes[e]=i,i}}};function Br(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function li(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function hS(t){return Br(t)&&typeof t.fullText=="string"}var xr=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return Zt})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=JN(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?Zt:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return Zt})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(iu(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return Zt})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(iu(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return Zt})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?Zt:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};function JN(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function iu(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Ko=new xr(()=>{},()=>Zt),Zt=Object.freeze({done:!0,value:void 0});function J(...t){if(t.length===1){let e=t[0];if(e instanceof xr)return e;if(iu(e))return new xr(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new xr(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:Zt)}return t.length>1?new xr(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];iu(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return Zt}):Ko}var Dr=class extends xr{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let s=i.iterators[i.iterators.length-1].next();if(s.done)i.iterators.pop();else return i.iterators.push(r(s.value)[Symbol.iterator]()),s}return Zt})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},ou;(function(t){function e(o){return o.reduce((s,a)=>s+a,0)}t.sum=e;function r(o){return o.reduce((s,a)=>s*a,0)}t.product=r;function n(o){return o.reduce((s,a)=>Math.min(s,a))}t.min=n;function i(o){return o.reduce((s,a)=>Math.max(s,a))}t.max=i})(ou||(ou={}));function eg(t){return new Dr(t,e=>Br(e)?e.content:[],{includeRoot:!0})}function TS(t){return eg(t).filter(li)}function xS(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function Da(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function jt(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var ui;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(ui||(ui={}));function QN(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return ui.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return ui.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?ui.Inside:r?ui.OverlapBack:ui.OverlapFront}function su(t,e){return QN(t,e)>ui.After}var tg=/^[\w\p{L}]$/u;function ht(t,e,r=tg){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return fi(t,e)}}function vS(t,e){if(t){let r=ZN(t,!0);if(r&&gS(r,e))return r;if(hS(t)){let n=t.content.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.content[i];if(gS(o,e))return o}}}}function gS(t,e){return li(t)&&e.includes(t.tokenType.name)}function fi(t,e){if(li(t))return t;if(Br(t)){let r=RS(t,e,!1);if(r)return fi(r,e)}}function au(t,e){if(li(t))return t;if(Br(t)){let r=RS(t,e,!0);if(r)return au(r,e)}}function RS(t,e,r){let n=0,i=t.content.length-1,o;for(;n<=i;){let s=Math.floor((n+i)/2),a=t.content[s];if(a.offset<=e&&a.end>e)return a;a.end<=e?(o=r?a:void 0,n=s+1):i=s-1}return o}function ZN(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let i=r.content[n];if(e||!i.hidden)return i}t=r}}function SS(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),i=r.content.length-1;for(;n<i;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function AS(t,e){let r=eP(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function eP(t,e){let r=yS(t),n=yS(e),i;for(let o=0;o<r.length&&o<n.length;o++){let s=r[o],a=n[o];if(s.parent===a.parent)i={parent:s.parent,a:s.index,b:a.index};else break}return i}function yS(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}function Wi(t,e,r,n){let i=[t,e,r,n].reduce(CS,{});return kS(i)}var rg=Symbol("isProxy");function cu(t){if(t&&t[rg])for(let e of Object.values(t))cu(e);return t}function kS(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>wS(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(wS(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),rg]});return r[rg]=!0,r}var bS=Symbol();function wS(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===bS)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=bS;try{t[e]=typeof i=="function"?i(n):kS(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function CS(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=CS(i,n):t[r]=n}}return t}var Ae=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return ou.sum(J(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return J(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return J(this.map.keys())}values(){return J(this.map.values()).flat()}entriesGroupedByKey(){return J(this.map.entries())}};var ng="AbstractRule";var Bi="AbstractType";var tP="Condition";var rP="TypeDefinition";var ig="AbstractElement";function Wo(t){return te.isInstance(t,ig)}var ES="ArrayType";function zi(t){return te.isInstance(t,ES)}var _S="Conjunction";function $S(t){return te.isInstance(t,_S)}var NS="Disjunction";function PS(t){return te.isInstance(t,NS)}var IS="Grammar";function di(t){return te.isInstance(t,IS)}var nP="GrammarImport";function lu(t){return te.isInstance(t,nP)}var iP="InferredType";function Bo(t){return te.isInstance(t,iP)}var La="Interface";function Ht(t){return te.isInstance(t,La)}var DS="LiteralCondition";function OS(t){return te.isInstance(t,DS)}var LS="Negation";function MS(t){return te.isInstance(t,LS)}var FS="Parameter";function US(t){return te.isInstance(t,FS)}var qS="ParameterReference";function zo(t){return te.isInstance(t,qS)}var GS="ParserRule";function M(t){return te.isInstance(t,GS)}var jS="ReferenceType";function Vi(t){return te.isInstance(t,jS)}var oP="ReturnType";function Vo(t){return te.isInstance(t,oP)}var HS="SimpleType";function Kt(t){return te.isInstance(t,HS)}var og="TerminalRule";function pe(t){return te.isInstance(t,og)}var Ma="Type";function ut(t){return te.isInstance(t,Ma)}var sP="TypeAttribute";function uu(t){return te.isInstance(t,sP)}var KS="UnionType";function Or(t){return te.isInstance(t,KS)}var WS="Action";function ye(t){return te.isInstance(t,WS)}var BS="Alternatives";function vr(t){return te.isInstance(t,BS)}var zS="Assignment";function ce(t){return te.isInstance(t,zS)}var VS="CharacterRange";function fu(t){return te.isInstance(t,VS)}var XS="CrossReference";function It(t){return te.isInstance(t,XS)}var YS="EndOfFile";function JS(t){return te.isInstance(t,YS)}var QS="Group";function At(t){return te.isInstance(t,QS)}var ZS="Keyword";function Ze(t){return te.isInstance(t,ZS)}var eA="NegatedToken";function tA(t){return te.isInstance(t,eA)}var rA="RegexToken";function nA(t){return te.isInstance(t,rA)}var iA="RuleCall";function Te(t){return te.isInstance(t,iA)}var oA="TerminalAlternatives";function sA(t){return te.isInstance(t,oA)}var aA="TerminalGroup";function cA(t){return te.isInstance(t,aA)}var lA="TerminalRuleCall";function du(t){return te.isInstance(t,lA)}var uA="UnorderedGroup";function Rr(t){return te.isInstance(t,uA)}var fA="UntilToken";function dA(t){return te.isInstance(t,fA)}var pA="Wildcard";function mA(t){return te.isInstance(t,pA)}var Oa=class extends Ki{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayType","Assignment","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","LiteralCondition","NamedArgument","NegatedToken","Negation","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","Wildcard"]}computeIsSubtype(e,r){switch(e){case WS:return this.isSubtype(ig,r)||this.isSubtype(Bi,r);case BS:case zS:case VS:case XS:case YS:case QS:case ZS:case eA:case rA:case iA:case oA:case aA:case lA:case uA:case fA:case pA:return this.isSubtype(ig,r);case ES:case jS:case HS:case KS:return this.isSubtype(rP,r);case _S:case NS:case DS:case LS:case qS:return this.isSubtype(tP,r);case La:case Ma:return this.isSubtype(Bi,r);case GS:return this.isSubtype(ng,r)||this.isSubtype(Bi,r);case og:return this.isSubtype(ng,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return Bi;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return ng;case"Grammar:usedGrammars":return IS;case"NamedArgument:parameter":case"ParameterReference:parameter":return FS;case"TerminalRuleCall:rule":return og;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Grammar":return{name:"Grammar",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"imports",type:"array"},{name:"interfaces",type:"array"},{name:"isDeclared",type:"boolean"},{name:"rules",type:"array"},{name:"types",type:"array"},{name:"usedGrammars",type:"array"}]};case"Interface":return{name:"Interface",mandatory:[{name:"attributes",type:"array"},{name:"superTypes",type:"array"}]};case"LiteralCondition":return{name:"LiteralCondition",mandatory:[{name:"true",type:"boolean"}]};case"NamedArgument":return{name:"NamedArgument",mandatory:[{name:"calledByName",type:"boolean"}]};case"ParserRule":return{name:"ParserRule",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"entry",type:"boolean"},{name:"fragment",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"parameters",type:"array"},{name:"wildcard",type:"boolean"}]};case"TerminalRule":return{name:"TerminalRule",mandatory:[{name:"fragment",type:"boolean"},{name:"hidden",type:"boolean"}]};case"TypeAttribute":return{name:"TypeAttribute",mandatory:[{name:"isOptional",type:"boolean"}]};case"UnionType":return{name:"UnionType",mandatory:[{name:"types",type:"array"}]};case"Alternatives":return{name:"Alternatives",mandatory:[{name:"elements",type:"array"}]};case"CrossReference":return{name:"CrossReference",mandatory:[{name:"deprecatedSyntax",type:"boolean"}]};case"Group":return{name:"Group",mandatory:[{name:"elements",type:"array"}]};case"RuleCall":return{name:"RuleCall",mandatory:[{name:"arguments",type:"array"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",mandatory:[{name:"elements",type:"array"}]};case"TerminalGroup":return{name:"TerminalGroup",mandatory:[{name:"elements",type:"array"}]};case"UnorderedGroup":return{name:"UnorderedGroup",mandatory:[{name:"elements",type:"array"}]};default:return{name:e,mandatory:[]}}}},te=new Oa;function hA(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{lt(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):lt(r)&&(r.$container=t,r.$containerProperty=e))}function xe(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function Y(t){let r=pu(t).$document;if(!r)throw new Error("AST node has no document.");return r}function pu(t){for(;t.$container;)t=t.$container;return t}function pi(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e?.range;return new xr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let i=n.keys[n.keyIndex];if(!i.startsWith("$")){let o=t[i];if(lt(o)){if(n.keyIndex++,sg(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let s=n.arrayIndex++,a=o[s];if(lt(a)&&sg(a,r))return{done:!1,value:a}}n.arrayIndex=0}}n.keyIndex++}return Zt})}function Fe(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new Dr(t,r=>pi(r,e))}function Nn(t,e){if(t){if(e?.range&&!sg(t,e.range))return new Dr(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new Dr(t,r=>pi(r,e),{includeRoot:!0})}function sg(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?su(n,e):!1}function mu(t){return new xr(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(_n(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(_n(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return Zt})}function hu(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let i of r.mandatory){let o=n[i.name];i.type==="array"&&!Array.isArray(o)?n[i.name]=[]:i.type==="boolean"&&o===void 0&&(n[i.name]=!1)}}function gA(t){var e,r;if(t){if("astNode"in t)return lP(t);if(Array.isArray(t))return t.reduce(yA,void 0);{let n=t,i=aP(n)?cP((r=(e=n?.root)===null||e===void 0?void 0:e.astNode)!==null&&r!==void 0?r:n?.astNode):void 0;return Xo(n,i)}}else return}function aP(t){return typeof t<"u"&&"element"in t&&"text"in t}function cP(t){try{return Y(t).uri.toString()}catch{return}}function lP(t){var e,r;let{astNode:n,property:i,index:o}=t??{},s=(e=n?.$cstNode)!==null&&e!==void 0?e:n?.$textRegion;if(!(n===void 0||s===void 0)){if(i===void 0)return Xo(s,ag(n));{let a=c=>o!==void 0&&o>-1&&Array.isArray(n[i])?o<c.length?c[o]:void 0:c.reduce(yA,void 0);if(!((r=s.assignments)===null||r===void 0)&&r[i]){let c=a(s.assignments[i]);return c&&Xo(c,ag(n))}else if(n.$cstNode){let c=a(mi(n.$cstNode,i));return c&&Xo(c,ag(n))}else return}}}function ag(t){var e,r,n,i;return t.$cstNode?(r=(e=Y(t))===null||e===void 0?void 0:e.uri)===null||r===void 0?void 0:r.toString():t.$textRegion?t.$textRegion.documentURI||((i=(n=new Dr(t,o=>o.$container?[o.$container]:[]).find(o=>{var s;return(s=o.$textRegion)===null||s===void 0?void 0:s.documentURI}))===null||n===void 0?void 0:n.$textRegion)===null||i===void 0?void 0:i.documentURI):void 0}function Xo(t,e){var r,n;let i={offset:t.offset,end:(r=t.end)!==null&&r!==void 0?r:t.offset+t.length,length:(n=t.length)!==null&&n!==void 0?n:t.end-t.offset};return t.range&&(i.range=t.range),e??(e=t.fileURI),e&&(i.fileURI=e),i}function yA(t,e){var r,n;if(t){if(!e)return t&&Xo(t)}else return e&&Xo(e);let i=(r=t.end)!==null&&r!==void 0?r:t.offset+t.length,o=(n=e.end)!==null&&n!==void 0?n:e.offset+e.length,s=Math.min(t.offset,e.offset),a=Math.max(i,o),c=a-s,l={offset:s,end:a,length:c};if(t.range&&e.range&&(l.range={start:e.range.start.line<t.range.start.line||e.range.start.line===t.range.start.line&&e.range.start.character<t.range.start.character?e.range.start:t.range.start,end:e.range.end.line>t.range.end.line||e.range.end.line===t.range.end.line&&e.range.end.character>t.range.end.character?e.range.end:t.range.end}),t.fileURI||e.fileURI){let u=t.fileURI,f=e.fileURI,d=u&&f&&u!==f?`<unmergable text regions of ${u}, ${f}>`:u??f;l.fileURI=d}return l}var cg=class{constructor(e){this.defaultIndentation="    ",this.pendingIndent=!0,this.currentIndents=[],this.recentNonImmediateIndents=[],this.traceData=[],this.lines=[[]],this.length=0,typeof e=="string"?this.defaultIndentation=e:typeof e=="number"&&(this.defaultIndentation="".padStart(e))}get content(){return this.lines.map(e=>e.join("")).join("")}get contentLength(){return this.length}get currentLineNumber(){return this.lines.length-1}get currentLineContent(){return this.lines[this.currentLineNumber].join("")}get currentPosition(){return{offset:this.contentLength,line:this.currentLineNumber,character:this.currentLineContent.length}}append(e,r){if(e.length>0){let n=r&&this.currentPosition;this.lines[this.currentLineNumber].push(e),this.length+=e.length,n&&this.indentPendingTraceRegions(n)}}indentPendingTraceRegions(e){for(let r=this.traceData.length-1;r>=0;r--){let n=this.traceData[r];n.targetStart&&n.targetStart.offset===e.offset&&(n.targetStart=this.currentPosition)}}increaseIndent(e){this.currentIndents.push(e),e.indentImmediately||this.recentNonImmediateIndents.push(e)}decreaseIndent(){this.currentIndents.pop()}get relevantIndents(){return this.currentIndents.filter(e=>!this.recentNonImmediateIndents.includes(e))}resetCurrentLine(){this.length-=this.lines[this.currentLineNumber].join("").length,this.lines[this.currentLineNumber]=[],this.pendingIndent=!0}addNewLine(){this.pendingIndent=!0,this.lines.push([]),this.recentNonImmediateIndents.length=0}pushTraceRegion(e){let r=uP(e,this.currentPosition,n=>{var i,o;return(o=(i=this.traceData[this.traceData.length-1])===null||i===void 0?void 0:i.children)===null||o===void 0?void 0:o.push(n)});return this.traceData.push(r),r}popTraceRegion(e){let r=this.traceData.pop();return this.assertTrue(r===e,"Trace region mismatch!"),r}getParentTraceSourceFileURI(){var e;for(let r=this.traceData.length-1;r>-1;r--){let n=(e=this.traceData[r].sourceRegion)===null||e===void 0?void 0:e.fileURI;if(n)return n}}assertTrue(e,r){if(!e)throw new Error(r)}};function uP(t,e,r){let n={sourceRegion:t,targetRegion:void 0,children:[],targetStart:e,complete:i=>{var o,s;return n.targetRegion={offset:n.targetStart.offset,end:i.offset,length:i.offset-n.targetStart.offset,range:{start:{line:n.targetStart.line,character:n.targetStart.character},end:{line:i.line,character:i.character}}},delete n.targetStart,((o=n.children)===null||o===void 0?void 0:o.length)===0&&delete n.children,!((s=n.targetRegion)===null||s===void 0)&&s.length&&r(n),delete n.complete,n}};return n}function TA(t,e){let r=new cg(e),n=r.pushTraceRegion(void 0);xA(t,r),r.popTraceRegion(n),n.complete&&n.complete(r.currentPosition);let i=n.children&&n.children.length===1?n.children[0]:void 0,o=i?.targetRegion,s=n.targetRegion;return o&&i.sourceRegion&&o.offset===s.offset&&o.length===s.length?{text:r.content,trace:i}:{text:r.content,trace:n}}function xA(t,e){typeof t=="string"?fP(t,e):t instanceof Yo?dP(t,e):t instanceof Dt?SA(t,e):t instanceof hi&&pP(t,e)}function vA(t,e){return typeof t=="string"?t.length!==0:t instanceof Dt?t.contents.some(r=>vA(r,e)):t instanceof hi?!(t.ifNotEmpty&&e.currentLineContent.length===0):!1}function fP(t,e){t&&(e.pendingIndent&&RA(e,!1),e.append(t))}function RA(t,e){var r;let n="";for(let i of t.relevantIndents.filter(o=>o.indentEmptyLines||!e))n+=(r=i.indentation)!==null&&r!==void 0?r:t.defaultIndentation;t.append(n,!0),t.pendingIndent=!1}function SA(t,e){let r,n=gA(t.tracedSource);n&&(r=e.pushTraceRegion(n));for(let i of t.contents)xA(i,e);if(r){e.popTraceRegion(r);let i=e.getParentTraceSourceFileURI();i&&n?.fileURI===i&&delete n.fileURI,r.complete&&r.complete(e.currentPosition)}}function dP(t,e){var r;if(vA(t,e)){t.indentImmediately&&!e.pendingIndent&&e.append((r=t.indentation)!==null&&r!==void 0?r:e.defaultIndentation,!0);try{e.increaseIndent(t),SA(t,e)}finally{e.decreaseIndent()}}}function pP(t,e){t.ifNotEmpty&&!mP(e.currentLineContent)?e.resetCurrentLine():(e.pendingIndent&&RA(e,!0),e.append(t.lineDelimiter),e.addNewLine())}function mP(t){return t.trimStart()!==""}var PK=Object.freeze("__\xABSKIP^NEW^LINE^IF^EMPTY\xBB__"),Fa=/\r?\n/gm,hP=/\S|$/;function AA(t){let e=t.filter(n=>n.length>0).map(n=>n.search(hP)),r=e.length===0?0:Math.min(...e);return Math.max(0,r)}function ug(t,...e){let r=gP(t),n=yP(t,e,r);return xP(n)}function kA(t,e,r){return(n,...i)=>fg(t,e,r)(ug(n,...i))}function gP(t){let e=t.join("_").split(Fa),r=e.length>1&&e[0].trim().length===0,n=r&&e.length>1&&e[e.length-1].trim().length===0;if(e.length===1||e.length!==0&&e[0].trim().length!==0||e.length===2&&e[1].trim().length===0)return{indentation:0,omitFirstLine:r,omitLastLine:n,trimLastLine:e.length!==1&&e[e.length-1].trim().length===0};{let i=r?e.slice(1):e;i=n?i.slice(0,i.length-1):i,i=i.filter(s=>s.length!==0);let o=AA(i);return{indentation:o,omitFirstLine:r,omitLastLine:n&&(e[e.length-1].length<o||!e[e.length-1].startsWith(i[0].substring(0,o)))}}}function yP(t,e,{indentation:r,omitFirstLine:n,omitLastLine:i,trimLastLine:o}){let s=[];t.forEach((l,u)=>{s.push(...l.split(Fa).map((f,d)=>d===0||f.length<r?f:f.substring(r)).reduce(u===0?(f,d,p)=>p===0?n?[]:[d]:p===1&&f.length===0?[d]:f.concat(gu,d):(f,d,p)=>p===0?[d]:f.concat(gu,d),[]).filter(f=>!(typeof f=="string"&&f.length===0)).concat(Qo(e[u])?e[u]:e[u]!==void 0?{content:String(e[u])}:u<e.length?CA:[]))});let a=s.length,c=a!==0?s[a-1]:void 0;return(i||o)&&typeof c=="string"&&c.trim().length===0?n&&a!==1&&s[a-2]===gu?s.slice(0,a-2):s.slice(0,a-1):s}var gu={isNewLine:!0},CA={isUndefinedSegment:!0},wA=t=>t===gu,lg=t=>t===CA,TP=t=>t.content!==void 0;function xP(t){return t.reduce((r,n,i)=>lg(n)?r:wA(n)?{node:i!==0&&(lg(t[i-1])||Qo(t[i-1]))||i>1&&typeof t[i-1]=="string"&&(lg(t[i-2])||Qo(t[i-2]))?r.node.appendNewLineIfNotEmpty():r.node.appendNewLine()}:(()=>{var o;let s=(i===0||wA(t[i-1]))&&typeof n=="string"&&n.length!==0?"".padStart(n.length-n.trimStart().length):"",a=TP(n)?n.content:n,c;return{node:r.indented?r.node:s.length!==0?r.node.indent({indentation:s,indentImmediately:!1,indentedChildren:l=>c=l.append(a)}):r.node.append(a),indented:c??((o=r.indented)===null||o===void 0?void 0:o.append(a))}})(),{node:new Dt}).node}var bA=typeof process>"u"?`
`:process.platform==="win32"?`\r
`:`
`;function Qo(t){return t instanceof Dt||t instanceof Yo||t instanceof hi}function Jo(t,e){return Qo(t)?TA(t,e).text:String(t)}var Dt=class t{constructor(...e){this.contents=[],this.append(...e)}isEmpty(){return this.contents.length===0}trace(e,r,n){if(lt(e)){if(this.tracedSource={astNode:e,property:r,index:n},this.tracedSource.property===void 0&&this.tracedSource.index!==void 0&&this.tracedSource.index>-1)throw new Error("Generation support: 'property' argument must not be 'undefined' if a non-negative value is assigned to 'index' in 'CompositeGeneratorNode.trace(...)'.")}else this.tracedSource=e;return this}append(...e){for(let r of e)typeof r=="function"?r(this):r&&this.contents.push(r);return this}appendIf(e,...r){return e?this.append(...r):this}appendNewLine(){return this.append(We)}appendNewLineIf(e){return e?this.append(We):this}appendNewLineIfNotEmpty(){return this.append(vP)}appendNewLineIfNotEmptyIf(e){return e?this.appendNewLineIfNotEmpty():this}appendTemplate(e,...r){return this.append(ug(e,...r))}appendTemplateIf(e){return e?(r,...n)=>this.appendTemplate(r,...n):()=>this}indent(e){let{indentedChildren:r,indentation:n,indentEmptyLines:i,indentImmediately:o}=Array.isArray(e)||typeof e=="function"?{indentedChildren:e}:typeof e=="object"?e:{},s=new Yo(n,o,i);return this.contents.push(s),Array.isArray(r)?s.append(...r):r&&s.append(r),this}appendTraced(e,r,n){return i=>this.append(new t().trace(e,r,n).append(i))}appendTracedIf(e,r,n,i){return e?this.appendTraced(typeof r=="function"?r():r,n,i):()=>this}appendTracedTemplate(e,r,n){return(i,...o)=>this.append(kA(e,r,n)(i,...o))}appendTracedTemplateIf(e,r,n,i){return e?this.appendTracedTemplate(typeof r=="function"?r():r,n,i):()=>this}};function fg(t,e,r){return n=>n instanceof Dt&&n.tracedSource===void 0?n.trace(t,e,r):new Dt().trace(t,e,r).append(n)}var Yo=class extends Dt{constructor(e,r=!0,n=!1){super(),this.indentImmediately=!0,this.indentEmptyLines=!1,typeof e=="string"?this.indentation=e:typeof e=="number"&&(this.indentation="".padStart(e)),this.indentImmediately=r,this.indentEmptyLines=n}},hi=class{constructor(e,r=!1){this.ifNotEmpty=!1,this.lineDelimiter=e??bA,this.ifNotEmpty=r}},We=new hi,vP=new hi(void 0,!0);function Pn(t){return"referenceType"in t}function In(t){return"elementType"in t}function gt(t){return"types"in t}function mg(t){if(gt(t)){let e=[];for(let r of t.types)e.push(...mg(r));return e}else return[t]}function Sr(t){return"value"in t}function Ar(t){return"primitive"in t}function ln(t){return"string"in t}function zr(t){return t&&"type"in t}function Xr(t){return t&&"properties"in t}var Tu=class{constructor(e,r){var n;this.superTypes=new Set,this.subTypes=new Set,this.typeNames=new Set,this.name=e,this.declared=(n=r?.declared)!==null&&n!==void 0?n:!1,this.dataType=r?.dataType}toAstTypesString(e){let r=new Dt;return r.append(`export type ${this.name} = ${Vr(this.type,"AstType")};`,We),e&&(r.append(We),$A(r,this.name)),this.dataType&&RP(r,this),Jo(r)}toDeclaredTypesString(e){let r=new Dt;return r.append(`type ${hg(this.name,e)} = ${Vr(this.type,"DeclaredType")};`,We),Jo(r)}},Zo=class t{get superProperties(){return this.getSuperProperties(new Set)}getSuperProperties(e){if(e.has(this.name))return[];e.add(this.name);let r=new Map;for(let n of this.properties)r.set(n.name,n);for(let n of this.interfaceSuperTypes){let i=n.getSuperProperties(e);for(let o of i)r.has(o.name)||r.set(o.name,o)}return Array.from(r.values())}get allProperties(){let e=new Map(this.superProperties.map(n=>[n.name,n]));for(let n of this.subTypes)this.getSubTypeProperties(n,e,new Set);return Array.from(e.values())}getSubTypeProperties(e,r,n){if(n.has(this.name))return;n.add(this.name);let i=Xr(e)?e.properties:[];for(let o of i)r.has(o.name)||r.set(o.name,o);for(let o of e.subTypes)this.getSubTypeProperties(o,r,n)}get interfaceSuperTypes(){return Array.from(this.superTypes).filter(e=>e instanceof t)}constructor(e,r,n){this.superTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeNames=new Set,this.declared=!1,this.abstract=!1,this.properties=[],this.name=e,this.declared=r,this.abstract=n}toAstTypesString(e){let r=new Dt,n=this.interfaceSuperTypes.map(o=>o.name),i=n.length>0?Xi([...n]):["AstNode"];return r.append(`export interface ${this.name} extends ${i.join(", ")} {`,We),r.indent(o=>{this.containerTypes.size>0&&o.append(`readonly $container: ${Xi([...this.containerTypes].map(s=>s.name)).join(" | ")};`,We),this.typeNames.size>0&&o.append(`readonly $type: ${Xi([...this.typeNames]).map(s=>`'${s}'`).join(" | ")};`,We),EA(o,this.properties,"AstType")}),r.append("}",We),e&&(r.append(We),$A(r,this.name)),Jo(r)}toDeclaredTypesString(e){let r=new Dt,n=hg(this.name,e),i=Xi(this.interfaceSuperTypes.map(o=>o.name)).join(", ");return r.append(`interface ${n}${i.length>0?` extends ${i}`:""} {`,We),r.indent(o=>EA(o,this.properties,"DeclaredType",e)),r.append("}",We),Jo(r)}},xu=class extends Error{constructor(e,r){super(e),this.name="TypeResolutionError",this.target=r}};function qa(t,e){return gi(t,e,new Map)}function gi(t,e,r){let n=`${Ua(t)}\xBB${Ua(e)}`,i=r.get(n);return i!==void 0||(r.set(n,!1),i=!1,gt(t)?i=t.types.every(o=>gi(o,e,r)):gt(e)?i=e.types.some(o=>gi(t,o,r)):Sr(e)&&zr(e.value)?Sr(t)&&zr(t.value)&&e.value.name===t.value.name?i=!0:i=gi(t,e.value.type,r):Pn(t)?i=Pn(e)&&gi(t.referenceType,e.referenceType,r):In(t)?i=In(e)&&gi(t.elementType,e.elementType,r):Sr(t)?zr(t.value)?i=gi(t.value.type,e,r):Sr(e)?zr(e.value)?i=gi(t,e.value.type,r):i=_A(t.value,e.value,new Set):i=!1:Ar(t)?i=Ar(e)&&t.primitive===e.primitive:ln(t)&&(i=Ar(e)&&e.primitive==="string"||ln(e)&&e.string===t.string),i&&r.set(n,i)),i}function _A(t,e,r){let n=t.name;if(r.has(n))return!1;if(r.add(n),t.name===e.name)return!0;for(let i of t.superTypes)if(Xr(i)&&_A(i,e,r))return!0;return!1}function Ua(t){if(Pn(t))return`@(${Ua(t.referenceType)})}`;if(In(t))return`(${Ua(t.elementType)})[]`;if(gt(t)){let e=t.types.map(r=>Ua(r)).join(" | ");return t.types.length<=1?`Union<${e}>`:e}else{if(Sr(t))return`Value<${t.value.name}>`;if(Ar(t))return t.primitive;if(ln(t))return`'${t.string}'`}throw new Error("Invalid type")}function Vr(t,e="AstType"){if(Pn(t)){let r=Vr(t.referenceType,e);return e==="AstType"?`Reference<${r}>`:`@${dg(t.referenceType,r)}`}else if(In(t)){let r=Vr(t.elementType,e);return e==="AstType"?`Array<${r}>`:`${dg(t.elementType,r)}[]`}else if(gt(t)){let r=t.types.map(n=>dg(n,Vr(n,e)));return Xi(r).join(" | ")}else{if(Sr(t))return t.value.name;if(Ar(t))return t.primitive;if(ln(t)){let r=e==="AstType"?"'":'"';return`${r}${t.string}${r}`}}throw new Error("Invalid type")}function dg(t,e){return gt(t)&&(e=`(${e})`),e}function EA(t,e,r,n=new Set){function i(o){let s=r==="AstType"?o.name:hg(o.name,n),a=o.optional&&!vu(o.type),c=Vr(o.type,r);return`${s}${a?"?":""}: ${c}`}Xi(e,(o,s)=>o.name.localeCompare(s.name)).forEach(o=>t.append(i(o),We))}function vu(t){return In(t)?!0:Pn(t)?!1:gt(t)?t.types.every(e=>vu(e)):Ar(t)?t.primitive==="boolean":!1}function $A(t,e){t.append(`export const ${e} = '${e}';`,We),t.append(We),t.append(`export function is${e}(item: unknown): item is ${e} {`,We),t.indent(r=>r.append(`return reflection.isInstance(item, ${e});`,We)),t.append("}",We)}function RP(t,e){switch(e.dataType){case"string":if(pg(e.type)){let r=Array.from(e.subTypes).map(o=>o.name),n=NA(e.type),i=PA(e.type);if(r.length===0&&n.length===0&&i.length===0)yu(t,e.name,`typeof item === '${e.dataType}'`);else{let o=SP(r,n,i);yu(t,e.name,o)}}break;case"number":case"boolean":case"bigint":yu(t,e.name,`typeof item === '${e.dataType}'`);break;case"Date":yu(t,e.name,"item instanceof Date");break;default:return}}function pg(t){let e=!0;if(Ar(t))return t.primitive==="string";if(ln(t))return!0;if(gt(t)){for(let r of t.types)if(Sr(r))if(zr(r.value)){if(!pg(r.value.type))return!1}else return!1;else if(Ar(r)){if(r.primitive!=="string"||!r.regex)return!1}else if(gt(r))e=pg(r);else if(!ln(r))return!1}else return!1;return e}function SP(t,e,r){let n=[...t.map(i=>`is${i}(item)`),...e.map(i=>`item === '${i}'`)];if(r.length>0){let i=r.map(o=>`${o}.test(item)`).join(" || ");n.push(`(typeof item === 'string' && (${i}))`)}return n.join(" || ")}function hg(t,e){return e.has(t)?`^${t}`:t}function NA(t){let e=[];if(ln(t))return[t.string];if(gt(t))for(let r of t.types)ln(r)?e.push(r.string):gt(r)&&e.push(...NA(r));return e}function PA(t){let e=[];if(Ar(t)&&t.primitive==="string"&&t.regex&&e.push(t.regex),gt(t))for(let r of t.types)Ar(r)&&r.primitive==="string"&&r.regex?e.push(r.regex):gt(r)&&e.push(...PA(r));return e}function yu(t,e,r){t.append(We,`export function is${e}(item: unknown): item is ${e} {`,We),t.indent(n=>n.append(`return ${r};`,We)),t.append("}",We)}function Xi(t,e){return Array.from(new Set(t)).sort(e)}function gg(t,e,r,n){let i=new Set;return i.add(t),e.findReferences(t,{}).forEach(s=>{let a=r.getOrCreateDocument(s.sourceUri),c=n.getAstNode(a.parseResult.value,s.sourcePath);Ht(c)?(i.add(c),gg(c,e,r,n).forEach(u=>i.add(u))):c&&ut(c.$container)&&i.add(c.$container)}),i}function Ga(t){let e=new Set;if(Ht(t))e.add(t),t.superTypes.forEach(r=>{if(Ht(r.ref)){e.add(r.ref);let n=Ga(r.ref);for(let i of n)e.add(i)}});else if(ut(t)){let r=IA(t.type);for(let n of r){let i=Ga(n);for(let o of i)e.add(o)}}return e}function IA(t){var e;if(Or(t))return t.types.flatMap(r=>IA(r));if(Kt(t)){let r=(e=t.typeRef)===null||e===void 0?void 0:e.ref;if(ut(r)||Ht(r))return[r]}return[]}function yg(t,e){return t.interfaces.concat(e.interfaces)}function Su(t){return t.interfaces.concat(t.unions)}function DA(t){let e=t.sort((i,o)=>i.name.localeCompare(o.name)).map(i=>({value:i,nodes:[]}));for(let i of e)i.nodes=e.filter(o=>i.value.superTypes.has(o.value.name));let r=[],n=e.filter(i=>i.nodes.length===0);for(;n.length>0;){let i=n.shift();r.includes(i)||(r.push(i),e.filter(o=>o.nodes.includes(i)).forEach(o=>n.push(o)))}return r.map(i=>i.value)}function OA(t){return Ru(t,new Set)}function Ru(t,e){if(e.has(t))return[];if(e.add(t),gt(t))return t.types.flatMap(r=>Ru(r,e));if(Sr(t)){let r=t.value;return"type"in r?Ru(r.type,e):[r.name]}else if(In(t))return Ru(t.elementType,e);return[]}function ja(t){return typeof t.name=="string"}var es=class{getName(e){if(ja(e))return e.name}getNameNode(e){return Ot(e.$cstNode,"name")}};function H(t){return t.charCodeAt(0)}function Au(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function ts(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function Yi(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function Ha(){throw Error("Internal Error - Should never get here!")}function Tg(t){return t.type==="Character"}var Ka=[];for(let t=H("0");t<=H("9");t++)Ka.push(t);var Wa=[H("_")].concat(Ka);for(let t=H("a");t<=H("z");t++)Wa.push(t);for(let t=H("A");t<=H("Z");t++)Wa.push(t);var xg=[H(" "),H("\f"),H(`
`),H("\r"),H("	"),H("\v"),H("	"),H("\xA0"),H("\u1680"),H("\u2000"),H("\u2001"),H("\u2002"),H("\u2003"),H("\u2004"),H("\u2005"),H("\u2006"),H("\u2007"),H("\u2008"),H("\u2009"),H("\u200A"),H("\u2028"),H("\u2029"),H("\u202F"),H("\u205F"),H("\u3000"),H("\uFEFF")];var AP=/[0-9a-fA-F]/,bu=/[0-9]/,bP=/[1-9]/,Ji=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":ts(n,"global");break;case"i":ts(n,"ignoreCase");break;case"m":ts(n,"multiLine");break;case"u":ts(n,"unicode");break;case"y":ts(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}Yi(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return Ha()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:i,atMost:i};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:i,atMost:o}):r={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;Yi(r);break}if(!(e===!0&&r===void 0)&&Yi(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Yi(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):Ha()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[H(`
`),H("\r"),H("\u2028"),H("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=Ka;break;case"D":e=Ka,r=!0;break;case"s":e=xg;break;case"S":e=xg,r=!0;break;case"w":e=Wa;break;case"W":e=Wa,r=!0;break}return Yi(e)?{type:"Set",value:e,complement:r}:Ha()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=H("\f");break;case"n":e=H(`
`);break;case"r":e=H("\r");break;case"t":e=H("	");break;case"v":e=H("\v");break}return Yi(e)?{type:"Character",value:e}:Ha()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:H("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:H(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:H(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),i=n.type==="Character";if(Tg(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),s=o.type==="Character";if(Tg(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else Au(n.value,e),e.push(H("-")),Au(o.value,e)}else Au(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:H("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(bP.test(e)===!1)throw Error("Expecting a positive integer");for(;bu.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(bu.test(e)===!1)throw Error("Expecting an integer");for(;bu.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:H(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return bu.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let i=0;i<e;i++){let o=this.popChar();if(AP.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var un=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var wP=new Ji,Rg=class extends un{constructor(){super(...arguments),this.isStarting=!0,this.endRegexStack=[],this.multiline=!1}get endRegex(){return this.endRegexStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegex="",this.isStarting=!0,this.endRegexStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let n=Dn(r);this.endRegexStack.push(n),this.isStarting&&(this.startRegex+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexStack.push(r),this.isStarting&&(this.startRegex+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},vg=new Rg;function LA(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),vg.reset(t),vg.visit(wP.pattern(t)),vg.multiline}catch{return!1}}function Sg(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function Dn(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function MA(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:Dn(e)).join("")}function FA(t,e){let r=kP(t),n=e.match(r);return!!n&&n[0].length>0}function kP(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",s;function a(l){o+=r.substr(n,l),n+=l}function c(l){o+="(?:"+r.substr(n,l)+"|$)",n+=l}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":c(3);break;case"x":c(4);break;case"u":e.unicode?r[n+2]==="{"?c(r.indexOf("}",n)-n+1):c(6):c(2);break;case"p":case"P":e.unicode?c(r.indexOf("}",n)-n+1):c(2);break;case"k":c(r.indexOf(">",n)-n+1);break;default:c(2);break}break;case"[":s=/\[(?:\\.|.)*?\]/g,s.lastIndex=n,s=s.exec(r)||[],c(s[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":s=/\{\d+,?\d*\}/g,s.lastIndex=n,s=s.exec(r),s?a(s[0].length):c(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":s=n,n+=3,i(),o+=r.substr(s,n-s);break;case"<":switch(r[n+3]){case"=":case"!":s=n,n+=4,i(),o+=r.substr(s,n-s);break;default:a(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else a(1),o+=i()+"|$)";break;case")":return++n,o;default:c(1);break}return o}return new RegExp(i(),t.flags)}var UA;(()=>{"use strict";var t={470:i=>{function o(c){if(typeof c!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(c))}function s(c,l){for(var u,f="",d=0,p=-1,T=0,R=0;R<=c.length;++R){if(R<c.length)u=c.charCodeAt(R);else{if(u===47)break;u=47}if(u===47){if(!(p===R-1||T===1))if(p!==R-1&&T===2){if(f.length<2||d!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var b=f.lastIndexOf("/");if(b!==f.length-1){b===-1?(f="",d=0):d=(f=f.slice(0,b)).length-1-f.lastIndexOf("/"),p=R,T=0;continue}}else if(f.length===2||f.length===1){f="",d=0,p=R,T=0;continue}}l&&(f.length>0?f+="/..":f="..",d=2)}else f.length>0?f+="/"+c.slice(p+1,R):f=c.slice(p+1,R),d=R-p-1;p=R,T=0}else u===46&&T!==-1?++T:T=-1}return f}var a={resolve:function(){for(var c,l="",u=!1,f=arguments.length-1;f>=-1&&!u;f--){var d;f>=0?d=arguments[f]:(c===void 0&&(c=process.cwd()),d=c),o(d),d.length!==0&&(l=d+"/"+l,u=d.charCodeAt(0)===47)}return l=s(l,!u),u?l.length>0?"/"+l:"/":l.length>0?l:"."},normalize:function(c){if(o(c),c.length===0)return".";var l=c.charCodeAt(0)===47,u=c.charCodeAt(c.length-1)===47;return(c=s(c,!l)).length!==0||l||(c="."),c.length>0&&u&&(c+="/"),l?"/"+c:c},isAbsolute:function(c){return o(c),c.length>0&&c.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var c,l=0;l<arguments.length;++l){var u=arguments[l];o(u),u.length>0&&(c===void 0?c=u:c+="/"+u)}return c===void 0?".":a.normalize(c)},relative:function(c,l){if(o(c),o(l),c===l||(c=a.resolve(c))===(l=a.resolve(l)))return"";for(var u=1;u<c.length&&c.charCodeAt(u)===47;++u);for(var f=c.length,d=f-u,p=1;p<l.length&&l.charCodeAt(p)===47;++p);for(var T=l.length-p,R=d<T?d:T,b=-1,S=0;S<=R;++S){if(S===R){if(T>R){if(l.charCodeAt(p+S)===47)return l.slice(p+S+1);if(S===0)return l.slice(p+S)}else d>R&&(c.charCodeAt(u+S)===47?b=S:S===0&&(b=0));break}var h=c.charCodeAt(u+S);if(h!==l.charCodeAt(p+S))break;h===47&&(b=S)}var m="";for(S=u+b+1;S<=f;++S)S!==f&&c.charCodeAt(S)!==47||(m.length===0?m+="..":m+="/..");return m.length>0?m+l.slice(p+b):(p+=b,l.charCodeAt(p)===47&&++p,l.slice(p))},_makeLong:function(c){return c},dirname:function(c){if(o(c),c.length===0)return".";for(var l=c.charCodeAt(0),u=l===47,f=-1,d=!0,p=c.length-1;p>=1;--p)if((l=c.charCodeAt(p))===47){if(!d){f=p;break}}else d=!1;return f===-1?u?"/":".":u&&f===1?"//":c.slice(0,f)},basename:function(c,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');o(c);var u,f=0,d=-1,p=!0;if(l!==void 0&&l.length>0&&l.length<=c.length){if(l.length===c.length&&l===c)return"";var T=l.length-1,R=-1;for(u=c.length-1;u>=0;--u){var b=c.charCodeAt(u);if(b===47){if(!p){f=u+1;break}}else R===-1&&(p=!1,R=u+1),T>=0&&(b===l.charCodeAt(T)?--T==-1&&(d=u):(T=-1,d=R))}return f===d?d=R:d===-1&&(d=c.length),c.slice(f,d)}for(u=c.length-1;u>=0;--u)if(c.charCodeAt(u)===47){if(!p){f=u+1;break}}else d===-1&&(p=!1,d=u+1);return d===-1?"":c.slice(f,d)},extname:function(c){o(c);for(var l=-1,u=0,f=-1,d=!0,p=0,T=c.length-1;T>=0;--T){var R=c.charCodeAt(T);if(R!==47)f===-1&&(d=!1,f=T+1),R===46?l===-1?l=T:p!==1&&(p=1):l!==-1&&(p=-1);else if(!d){u=T+1;break}}return l===-1||f===-1||p===0||p===1&&l===f-1&&l===u+1?"":c.slice(l,f)},format:function(c){if(c===null||typeof c!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof c);return function(l,u){var f=u.dir||u.root,d=u.base||(u.name||"")+(u.ext||"");return f?f===u.root?f+d:f+"/"+d:d}(0,c)},parse:function(c){o(c);var l={root:"",dir:"",base:"",ext:"",name:""};if(c.length===0)return l;var u,f=c.charCodeAt(0),d=f===47;d?(l.root="/",u=1):u=0;for(var p=-1,T=0,R=-1,b=!0,S=c.length-1,h=0;S>=u;--S)if((f=c.charCodeAt(S))!==47)R===-1&&(b=!1,R=S+1),f===46?p===-1?p=S:h!==1&&(h=1):p!==-1&&(h=-1);else if(!b){T=S+1;break}return p===-1||R===-1||h===0||h===1&&p===R-1&&p===T+1?R!==-1&&(l.base=l.name=T===0&&d?c.slice(1,R):c.slice(T,R)):(T===0&&d?(l.name=c.slice(1,p),l.base=c.slice(1,R)):(l.name=c.slice(T,p),l.base=c.slice(T,R)),l.ext=c.slice(p,R)),T>0?l.dir=c.slice(0,T-1):d&&(l.dir="/"),l},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.d=(i,o)=>{for(var s in o)r.o(o,s)&&!r.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:o[s]})},r.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),r.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};(()=>{let i;r.r(n),r.d(n,{URI:()=>d,Utils:()=>Xt}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,s=/^\//,a=/^\/\//;function c(P,x){if(!P.scheme&&x)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${P.authority}", path: "${P.path}", query: "${P.query}", fragment: "${P.fragment}"}`);if(P.scheme&&!o.test(P.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(P.path){if(P.authority){if(!s.test(P.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(P.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let l="",u="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class d{static isUri(x){return x instanceof d||!!x&&typeof x.authority=="string"&&typeof x.fragment=="string"&&typeof x.path=="string"&&typeof x.query=="string"&&typeof x.scheme=="string"&&typeof x.fsPath=="string"&&typeof x.with=="function"&&typeof x.toString=="function"}scheme;authority;path;query;fragment;constructor(x,I,L,ne,B,W=!1){typeof x=="object"?(this.scheme=x.scheme||l,this.authority=x.authority||l,this.path=x.path||l,this.query=x.query||l,this.fragment=x.fragment||l):(this.scheme=function(xt,vt){return xt||vt?xt:"file"}(x,W),this.authority=I||l,this.path=function(xt,vt){switch(xt){case"https":case"http":case"file":vt?vt[0]!==u&&(vt=u+vt):vt=u}return vt}(this.scheme,L||l),this.query=ne||l,this.fragment=B||l,c(this,W))}get fsPath(){return h(this,!1)}with(x){if(!x)return this;let{scheme:I,authority:L,path:ne,query:B,fragment:W}=x;return I===void 0?I=this.scheme:I===null&&(I=l),L===void 0?L=this.authority:L===null&&(L=l),ne===void 0?ne=this.path:ne===null&&(ne=l),B===void 0?B=this.query:B===null&&(B=l),W===void 0?W=this.fragment:W===null&&(W=l),I===this.scheme&&L===this.authority&&ne===this.path&&B===this.query&&W===this.fragment?this:new T(I,L,ne,B,W)}static parse(x,I=!1){let L=f.exec(x);return L?new T(L[2]||l,V(L[4]||l),V(L[5]||l),V(L[7]||l),V(L[9]||l),I):new T(l,l,l,l,l)}static file(x){let I=l;if(i&&(x=x.replace(/\\/g,u)),x[0]===u&&x[1]===u){let L=x.indexOf(u,2);L===-1?(I=x.substring(2),x=u):(I=x.substring(2,L),x=x.substring(L)||u)}return new T("file",I,x,l,l)}static from(x){let I=new T(x.scheme,x.authority,x.path,x.query,x.fragment);return c(I,!0),I}toString(x=!1){return m(this,x)}toJSON(){return this}static revive(x){if(x){if(x instanceof d)return x;{let I=new T(x);return I._formatted=x.external,I._fsPath=x._sep===p?x.fsPath:null,I}}return x}}let p=i?1:void 0;class T extends d{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=h(this,!1)),this._fsPath}toString(x=!1){return x?m(this,!0):(this._formatted||(this._formatted=m(this,!1)),this._formatted)}toJSON(){let x={$mid:1};return this._fsPath&&(x.fsPath=this._fsPath,x._sep=p),this._formatted&&(x.external=this._formatted),this.path&&(x.path=this.path),this.scheme&&(x.scheme=this.scheme),this.authority&&(x.authority=this.authority),this.query&&(x.query=this.query),this.fragment&&(x.fragment=this.fragment),x}}let R={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function b(P,x,I){let L,ne=-1;for(let B=0;B<P.length;B++){let W=P.charCodeAt(B);if(W>=97&&W<=122||W>=65&&W<=90||W>=48&&W<=57||W===45||W===46||W===95||W===126||x&&W===47||I&&W===91||I&&W===93||I&&W===58)ne!==-1&&(L+=encodeURIComponent(P.substring(ne,B)),ne=-1),L!==void 0&&(L+=P.charAt(B));else{L===void 0&&(L=P.substr(0,B));let xt=R[W];xt!==void 0?(ne!==-1&&(L+=encodeURIComponent(P.substring(ne,B)),ne=-1),L+=xt):ne===-1&&(ne=B)}}return ne!==-1&&(L+=encodeURIComponent(P.substring(ne))),L!==void 0?L:P}function S(P){let x;for(let I=0;I<P.length;I++){let L=P.charCodeAt(I);L===35||L===63?(x===void 0&&(x=P.substr(0,I)),x+=R[L]):x!==void 0&&(x+=P[I])}return x!==void 0?x:P}function h(P,x){let I;return I=P.authority&&P.path.length>1&&P.scheme==="file"?`//${P.authority}${P.path}`:P.path.charCodeAt(0)===47&&(P.path.charCodeAt(1)>=65&&P.path.charCodeAt(1)<=90||P.path.charCodeAt(1)>=97&&P.path.charCodeAt(1)<=122)&&P.path.charCodeAt(2)===58?x?P.path.substr(1):P.path[1].toLowerCase()+P.path.substr(2):P.path,i&&(I=I.replace(/\//g,"\\")),I}function m(P,x){let I=x?S:b,L="",{scheme:ne,authority:B,path:W,query:xt,fragment:vt}=P;if(ne&&(L+=ne,L+=":"),(B||ne==="file")&&(L+=u,L+=u),B){let oe=B.indexOf("@");if(oe!==-1){let en=B.substr(0,oe);B=B.substr(oe+1),oe=en.lastIndexOf(":"),oe===-1?L+=I(en,!1,!1):(L+=I(en.substr(0,oe),!1,!1),L+=":",L+=I(en.substr(oe+1),!1,!0)),L+="@"}B=B.toLowerCase(),oe=B.lastIndexOf(":"),oe===-1?L+=I(B,!1,!0):(L+=I(B.substr(0,oe),!1,!0),L+=B.substr(oe))}if(W){if(W.length>=3&&W.charCodeAt(0)===47&&W.charCodeAt(2)===58){let oe=W.charCodeAt(1);oe>=65&&oe<=90&&(W=`/${String.fromCharCode(oe+32)}:${W.substr(3)}`)}else if(W.length>=2&&W.charCodeAt(1)===58){let oe=W.charCodeAt(0);oe>=65&&oe<=90&&(W=`${String.fromCharCode(oe+32)}:${W.substr(2)}`)}L+=I(W,!0,!1)}return xt&&(L+="?",L+=I(xt,!1,!1)),vt&&(L+="#",L+=x?vt:b(vt,!1,!1)),L}function A(P){try{return decodeURIComponent(P)}catch{return P.length>3?P.substr(0,3)+A(P.substr(3)):P}}let E=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function V(P){return P.match(E)?P.replace(E,x=>A(x)):P}var _t=r(470);let rt=_t.posix||_t,gr="/";var Xt;(function(P){P.joinPath=function(x,...I){return x.with({path:rt.join(x.path,...I)})},P.resolvePath=function(x,...I){let L=x.path,ne=!1;L[0]!==gr&&(L=gr+L,ne=!0);let B=rt.resolve(L,...I);return ne&&B[0]===gr&&!x.authority&&(B=B.substring(1)),x.with({path:B})},P.dirname=function(x){if(x.path.length===0||x.path===gr)return x;let I=rt.dirname(x.path);return I.length===1&&I.charCodeAt(0)===46&&(I=""),x.with({path:I})},P.basename=function(x){return rt.basename(x.path)},P.extname=function(x){return rt.extname(x.path)}})(Xt||(Xt={}))})(),UA=n})();var{URI:bt,Utils:rs}=UA;var le;(function(t){t.basename=rs.basename,t.dirname=rs.dirname,t.extname=rs.extname,t.joinPath=rs.joinPath,t.resolvePath=rs.resolvePath;function e(n,i){return n?.toString()===i?.toString()}t.equals=e;function r(n,i){let o=typeof n=="string"?n:n.path,s=typeof i=="string"?i:i.path,a=o.split("/").filter(d=>d.length>0),c=s.split("/").filter(d=>d.length>0),l=0;for(;l<a.length&&a[l]===c[l];l++);let u="../".repeat(a.length-l),f=c.slice(l).join("/");return u+f}t.relative=r})(le||(le={}));var uW=le.equals,fW=le.relative;var wu,qA=()=>wu??(wu=ku(`{"$type":"Grammar","isDeclared":true,"name":"LangiumGrammar","rules":[{"$type":"ParserRule","name":"Grammar","entry":true,"definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"isDeclared","operator":"?=","terminal":{"$type":"Keyword","value":"grammar"}},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"with"},{"$type":"Assignment","feature":"usedGrammars","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"usedGrammars","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Assignment","feature":"definesHiddenTokens","operator":"?=","terminal":{"$type":"Keyword","value":"hidden"}},{"$type":"Keyword","value":"("},{"$type":"Group","elements":[{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Keyword","value":")"}],"cardinality":"?"}],"cardinality":"?"},{"$type":"Assignment","feature":"imports","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"rules","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"interfaces","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"types","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"+"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Interface","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"interface"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"extends"},{"$type":"Assignment","feature":"superTypes","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"superTypes","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"SchemaType","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"{"},{"$type":"Assignment","feature":"attributes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},"cardinality":"*"},{"$type":"Keyword","value":"}"},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TypeAttribute","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Assignment","feature":"isOptional","operator":"?=","terminal":{"$type":"Keyword","value":"?"},"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TypeDefinition","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"UnionType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"UnionType"},"feature":"types","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"types","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ArrayType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"ArrayType"},"feature":"elementType","operator":"="},{"$type":"Keyword","value":"["},{"$type":"Keyword","value":"]"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ReferenceType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"ReferenceType"}},{"$type":"Keyword","value":"@"},{"$type":"Assignment","feature":"referenceType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"SimpleType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":")"}]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"SimpleType"}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"typeRef","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"primitiveType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"stringType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@61"},"arguments":[]}}]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PrimitiveType","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"string"},{"$type":"Keyword","value":"number"},{"$type":"Keyword","value":"boolean"},{"$type":"Keyword","value":"Date"},{"$type":"Keyword","value":"bigint"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Type","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"type"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},{"$type":"Keyword","value":"="},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractRule","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@47"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"GrammarImport","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"import"},{"$type":"Assignment","feature":"path","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@61"},"arguments":[]}},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParserRule","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"entry","operator":"?=","terminal":{"$type":"Keyword","value":"entry"}},{"$type":"Assignment","feature":"fragment","operator":"?=","terminal":{"$type":"Keyword","value":"fragment"}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"wildcard","operator":"?=","terminal":{"$type":"Keyword","value":"*"}},{"$type":"Group","elements":[{"$type":"Keyword","value":"returns"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"returnType","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"dataType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Assignment","feature":"inferredType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[{"$type":"NamedArgument","value":{"$type":"LiteralCondition","true":false},"calledByName":false}]}}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Assignment","feature":"definesHiddenTokens","operator":"?=","terminal":{"$type":"Keyword","value":"hidden"}},{"$type":"Keyword","value":"("},{"$type":"Group","elements":[{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Keyword","value":")"}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"definition","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Keyword","value":";"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"InferredType","parameters":[{"$type":"Parameter","name":"imperative"}],"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","guardCondition":{"$type":"ParameterReference","parameter":{"$ref":"#/rules@14/parameters@0"}},"elements":[{"$type":"Keyword","value":"infer"}]},{"$type":"Group","guardCondition":{"$type":"Negation","value":{"$type":"ParameterReference","parameter":{"$ref":"#/rules@14/parameters@0"}}},"elements":[{"$type":"Keyword","value":"infers"}]}]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"wildcard":false},{"$type":"ParserRule","name":"RuleNameAndParams","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"<"},{"$type":"Group","elements":[{"$type":"Assignment","feature":"parameters","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"parameters","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Keyword","value":">"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Parameter","definition":{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Alternatives","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Alternatives"},"feature":"elements","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ConditionalBranch","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Group"}},{"$type":"Keyword","value":"<"},{"$type":"Assignment","feature":"guardCondition","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]}},{"$type":"Keyword","value":">"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"+"}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"UnorderedGroup","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"UnorderedGroup"},"feature":"elements","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"&"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Group"},"feature":"elements","operator":"+="},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractTokenWithCardinality","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]}]},{"$type":"Assignment","feature":"cardinality","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"?"},{"$type":"Keyword","value":"*"},{"$type":"Keyword","value":"+"}]},"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Action","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Action"}},{"$type":"Keyword","value":"{"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"inferredType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[{"$type":"NamedArgument","value":{"$type":"LiteralCondition","true":true},"calledByName":false}]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"."},{"$type":"Assignment","feature":"feature","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Assignment","feature":"operator","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"="},{"$type":"Keyword","value":"+="}]}},{"$type":"Keyword","value":"current"}],"cardinality":"?"},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractTerminal","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@44"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@36"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@37"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@45"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"EndOfFile","definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"EndOfFile"}},{"$type":"Keyword","value":"EOF"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Keyword","definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@61"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"RuleCall","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rule","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":"<"},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"*"},{"$type":"Keyword","value":">"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NamedArgument","definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"parameter","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@16"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"calledByName","operator":"?=","terminal":{"$type":"Keyword","value":"="}}],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"LiteralCondition","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"true","operator":"?=","terminal":{"$type":"Keyword","value":"true"}},{"$type":"Keyword","value":"false"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Disjunction","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Disjunction"},"feature":"left","operator":"="},{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"right","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Conjunction","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Conjunction"},"feature":"left","operator":"="},{"$type":"Keyword","value":"&"},{"$type":"Assignment","feature":"right","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Negation","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@33"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Negation"}},{"$type":"Keyword","value":"!"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Atom","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@35"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@34"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedCondition","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParameterReference","definition":{"$type":"Assignment","feature":"parameter","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@16"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PredicatedKeyword","inferredType":{"$type":"InferredType","name":"Keyword"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}]},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@61"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PredicatedRuleCall","inferredType":{"$type":"InferredType","name":"RuleCall"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}]},{"$type":"Assignment","feature":"rule","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":"<"},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"*"},{"$type":"Keyword","value":">"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Assignment","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Assignment"}},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}],"cardinality":"?"},{"$type":"Assignment","feature":"feature","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Assignment","feature":"operator","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"+="},{"$type":"Keyword","value":"="},{"$type":"Keyword","value":"?="}]}},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AssignableTerminal","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@40"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@42"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedAssignableElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AssignableAlternatives","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Alternatives"},"feature":"elements","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CrossReference","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"CrossReference"}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"deprecatedSyntax","operator":"?=","terminal":{"$type":"Keyword","value":"|"}},{"$type":"Keyword","value":":"}]},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@43"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CrossReferenceableTerminal","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PredicatedGroup","inferredType":{"$type":"InferredType","name":"Group"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}]},{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ReturnType","definition":{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalRule","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"hidden","operator":"?=","terminal":{"$type":"Keyword","value":"hidden"},"cardinality":"?"},{"$type":"Keyword","value":"terminal"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"fragment","operator":"?=","terminal":{"$type":"Keyword","value":"fragment"}},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"returns"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@46"},"arguments":[]}}],"cardinality":"?"}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"definition","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":";"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalAlternatives","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@49"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"TerminalAlternatives"},"feature":"elements","operator":"+="},{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@49"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalGroup","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"TerminalGroup"},"feature":"elements","operator":"+="},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"Assignment","feature":"cardinality","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"?"},{"$type":"Keyword","value":"*"},{"$type":"Keyword","value":"+"}]},"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalTokenElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@58"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@53"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@54"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@55"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@56"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@57"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedTerminalElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"lookahead","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"?="},{"$type":"Keyword","value":"?!"}]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalRuleCall","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"TerminalRuleCall"}},{"$type":"Assignment","feature":"rule","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@47"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]},"deprecatedSyntax":false}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NegatedToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"NegatedToken"}},{"$type":"Keyword","value":"!"},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"UntilToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"UntilToken"}},{"$type":"Keyword","value":"->"},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"RegexToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"RegexToken"}},{"$type":"Assignment","feature":"regex","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@62"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Wildcard","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Wildcard"}},{"$type":"Keyword","value":"."}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CharacterRange","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"CharacterRange"}},{"$type":"Assignment","feature":"left","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":".."},{"$type":"Assignment","feature":"right","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"FeatureName","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"current"},{"$type":"Keyword","value":"entry"},{"$type":"Keyword","value":"extends"},{"$type":"Keyword","value":"false"},{"$type":"Keyword","value":"fragment"},{"$type":"Keyword","value":"grammar"},{"$type":"Keyword","value":"hidden"},{"$type":"Keyword","value":"import"},{"$type":"Keyword","value":"interface"},{"$type":"Keyword","value":"returns"},{"$type":"Keyword","value":"terminal"},{"$type":"Keyword","value":"true"},{"$type":"Keyword","value":"type"},{"$type":"Keyword","value":"infer"},{"$type":"Keyword","value":"infers"},{"$type":"Keyword","value":"with"},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ID","definition":{"$type":"RegexToken","regex":"/\\\\^?[_a-zA-Z][\\\\w_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"(\\\\\\\\.|[^\\"\\\\\\\\])*\\"|'(\\\\\\\\.|[^'\\\\\\\\])*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"RegexLiteral","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\/(?![*+?])(?:[^\\\\r\\\\n\\\\[/\\\\\\\\]|\\\\\\\\.|\\\\[(?:[^\\\\r\\\\n\\\\]\\\\\\\\]|\\\\\\\\.)*\\\\])+\\\\/[a-z]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/\\\\s+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SL_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\/[^\\\\n\\\\r]*/"},"fragment":false}],"types":[{"$type":"Type","name":"AbstractType","type":{"$type":"UnionType","types":[{"$type":"SimpleType","typeRef":{"$ref":"#/rules@1"}},{"$type":"SimpleType","typeRef":{"$ref":"#/rules@10"}},{"$type":"SimpleType","typeRef":{"$ref":"#/rules@23/definition/elements@0"}},{"$type":"SimpleType","typeRef":{"$ref":"#/rules@13"}}]}}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"interfaces":[],"usedGrammars":[]}`));qi();var Ba=se(kn(),1);function CP(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}var GA=0,EP=10;var jA=Symbol("OperationCancelled");function Qi(t){return t===jA}async function Ue(t){if(t===Ba.CancellationToken.None)return;let e=Date.now();if(e-GA>=EP&&(GA=e,await CP()),t.isCancellationRequested)throw jA}var Cu=class{constructor(){this.previousAction=Promise.resolve(),this.previousTokenSource=new Ba.CancellationTokenSource}lock(e){this.cancel();let r=new Ba.CancellationTokenSource;return this.previousTokenSource=r,this.previousAction=this.previousAction.then(()=>e(r.token).catch(n=>{Qi(n)||console.error("Error: ",n)}))}cancel(){this.previousTokenSource.cancel()}};function br(t){return{code:t}}var za;(function(t){t.all=["fast","slow","built-in"]})(za||(za={}));var Eu=class{constructor(e){this.entries=new Ae,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[i,o]of Object.entries(e)){let s=o;if(Array.isArray(s))for(let a of s){let c={check:this.wrapValidationException(a,r),category:n};this.addEntry(i,c)}else if(typeof s=="function"){let a={check:this.wrapValidationException(s,r),category:n};this.addEntry(i,a)}}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(s){if(Qi(s))throw s;console.error("An error occurred during validation:",s);let a=s instanceof Error?s.message:String(s);s instanceof Error&&s.stack&&console.error(s.stack),i("error","An error occurred during validation: "+a,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=J(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(i=>r.includes(i.category))),n.map(i=>i.check)}};function HA(t,e){let r={unions:[],interfaces:[]};for(let n of t){let i=[];for(let a of n.attributes)i.push({name:a.name,optional:a.isOptional,astNodes:new Set([a]),type:Zi(a.type)});let o=new Set;for(let a of n.superTypes)a.ref&&o.add(Yr(a.ref));let s={name:n.name,declared:!0,abstract:!1,properties:i,superTypes:o,subTypes:new Set};r.interfaces.push(s)}for(let n of e){let i={name:n.name,declared:!0,type:Zi(n.type),superTypes:new Set,subTypes:new Set};r.unions.push(i)}return r}function Zi(t){if(zi(t))return{elementType:Zi(t.elementType)};if(Vi(t))return{referenceType:Zi(t.referenceType)};if(Or(t))return{types:t.types.map(Zi)};if(Kt(t)){let e;if(t.primitiveType)return e=t.primitiveType,{primitive:e};if(t.stringType)return e=t.stringType,{string:e};if(t.typeRef){let r=t.typeRef.ref,n=fn(r);if(n)return ns(n)?{primitive:n}:{value:n}}}return{primitive:"unknown"}}function is(t){return"referenceType"in t}function Ag(t){return"elementType"in t}function KA(t){return"types"in t}function bg(t){return"value"in t}function _P(t){return"primitive"in t}function $P(t){return"string"in t}function WA(t){let e=new Map,r=new Map;for(let n of t.interfaces){let i=new Zo(n.name,n.declared,n.abstract);e.set(n.name,i)}for(let n of t.unions){let i=new Tu(n.name,{declared:n.declared,dataType:n.dataType});r.set(n.name,i)}for(let n of t.interfaces){let i=e.get(n.name);for(let o of n.superTypes){let s=e.get(o)||r.get(o);s&&i.superTypes.add(s)}for(let o of n.subTypes){let s=e.get(o)||r.get(o);s&&i.subTypes.add(s)}for(let o of n.properties){let s=NP(o,e,r);i.properties.push(s)}}for(let n of t.unions){let i=r.get(n.name);i.type=Va(n.type,i,e,r)}return{interfaces:Array.from(e.values()),unions:Array.from(r.values())}}function NP(t,e,r){return{name:t.name,optional:t.optional,astNodes:t.astNodes,type:Va(t.type,void 0,e,r)}}function Va(t,e,r,n){if(Ag(t))return{elementType:Va(t.elementType,e,r,n)};if(is(t))return{referenceType:Va(t.referenceType,void 0,r,n)};if(KA(t))return{types:t.types.map(i=>Va(i,e,r,n))};if($P(t))return{string:t.string};if(_P(t))return{primitive:t.primitive,regex:t.regex};if(bg(t)){let i=r.get(t.value)||n.get(t.value);return i?(e&&e.subTypes.add(i),{value:i}):{primitive:"unknown"}}else throw new Error("Invalid property type")}function kg(t,e){let r=Xa(t),n=Xa(e);for(let i of n)PP(r,i)||r.push(i);return r.length===1?r[0]:{types:r}}function PP(t,e){return t.some(r=>wg(r,e))}function wg(t,e){return Ag(t)&&Ag(e)?wg(t.elementType,e.elementType):is(t)&&is(e)?wg(t.referenceType,e.referenceType):bg(t)&&bg(e)?t.value===e.value:!1}function Xa(t){return KA(t)?t.types.flatMap(e=>Xa(e)):[t]}function BA(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarValidator,n={Action:[r.checkAssignmentReservedName],AbstractRule:r.checkRuleName,Assignment:[r.checkAssignmentWithFeatureName,r.checkAssignmentToFragmentRule,r.checkAssignmentTypes,r.checkAssignmentReservedName],ParserRule:[r.checkParserRuleDataType,r.checkRuleParametersUsed,r.checkParserRuleReservedName],TerminalRule:[r.checkTerminalRuleReturnType,r.checkHiddenTerminalRule,r.checkEmptyTerminalRule],InferredType:r.checkTypeReservedName,Keyword:r.checkKeyword,UnorderedGroup:r.checkUnorderedGroup,Grammar:[r.checkGrammarName,r.checkEntryGrammarRule,r.checkUniqueRuleName,r.checkUniqueTypeName,r.checkUniqueImportedRules,r.checkDuplicateImportedGrammar,r.checkGrammarHiddenTokens,r.checkGrammarForUnusedRules,r.checkGrammarTypeInfer,r.checkClashingTerminalNames],GrammarImport:r.checkPackageImport,CharacterRange:r.checkInvalidCharacterRange,Interface:[r.checkTypeReservedName,r.checkInterfacePropertyTypes],Type:[r.checkTypeReservedName],TypeAttribute:r.checkTypeReservedName,RuleCall:[r.checkUsedHiddenTerminalRule,r.checkUsedFragmentTerminalRule,r.checkRuleCallParameters],TerminalRuleCall:r.checkUsedHiddenTerminalRule,CrossReference:[r.checkCrossReferenceSyntax,r.checkCrossRefNameAssignment,r.checkCrossRefTerminalType,r.checkCrossRefType,r.checkCrossReferenceToTypeUnion],SimpleType:r.checkFragmentsInTypes,ReferenceType:r.checkReferenceTypeUnion,RegexToken:[r.checkInvalidRegexFlags,r.checkDirectlyUsedRegexFlags]};e.register(n,r)}var ve;(function(t){t.GrammarNameUppercase="grammar-name-uppercase",t.RuleNameUppercase="rule-name-uppercase",t.HiddenGrammarTokens="hidden-grammar-tokens",t.UseRegexTokens="use-regex-tokens",t.EntryRuleTokenSyntax="entry-rule-token-syntax",t.CrossRefTokenSyntax="cross-ref-token-syntax",t.UnnecessaryFileExtension="unnecessary-file-extension",t.InvalidReturns="invalid-returns",t.InvalidInfers="invalid-infers",t.MissingInfer="missing-infer",t.MissingReturns="missing-returns",t.SuperfluousInfer="superfluous-infer",t.OptionalUnorderedGroup="optional-unordered-group"})(ve||(ve={}));var _u=class{constructor(e){this.references=e.references.References,this.documents=e.shared.workspace.LangiumDocuments}checkGrammarName(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Grammar name should start with an upper case letter.",{node:e,property:"name",data:br(ve.GrammarNameUppercase)})}}checkEntryGrammarRule(e,r){if(e.isDeclared&&!e.name)return;let n=e.rules.filter(i=>M(i)&&i.entry);if(e.isDeclared&&n.length===0){let i=e.rules.find(o=>M(o)&&!wr(o));i?r("error","The grammar is missing an entry parser rule. This rule can be an entry one.",{node:i,property:"name",data:br(ve.EntryRuleTokenSyntax)}):r("error","This grammar is missing an entry parser rule.",{node:e,property:"name"})}else!e.isDeclared&&n.length>=1?n.forEach(i=>r("error","Cannot declare entry rules for unnamed grammars.",{node:i,property:"name"})):n.length>1?n.forEach(i=>r("error","The entry rule has to be unique.",{node:i,property:"name"})):n.length===1&&wr(n[0])&&r("error","The entry rule cannot be a data type rule.",{node:n[0],property:"name"})}checkUniqueRuleName(e,r){let n=i=>J(i.rules).filter(o=>!Ya(o));this.checkUniqueName(e,r,n,"rule")}checkUniqueTypeName(e,r){let n=i=>J(i.types).concat(i.interfaces);this.checkUniqueName(e,r,n,"type")}checkUniqueName(e,r,n,i){let o=new Ae;n(e).forEach(c=>o.add(c.name,c));for(let[,c]of o.entriesGroupedByKey())c.length>1&&c.forEach(l=>{r("error",`A ${i}'s name has to be unique.`,{node:l,property:"name"})});let s=new Set,a=Ja(this.documents,e);for(let c of a)n(c).forEach(l=>s.add(l.name));for(let c of o.keys())s.has(c)&&o.get(c).forEach(u=>{r("error",`A ${i} with the name '${u.name}' already exists in an imported grammar.`,{node:u,property:"name"})})}checkDuplicateImportedGrammar(e,r){let n=new Ae;for(let i of e.imports){let o=On(this.documents,i);o&&n.add(o,i)}for(let[,i]of n.entriesGroupedByKey())i.length>1&&i.forEach((o,s)=>{s>0&&r("warning","The grammar is already being directly imported.",{node:o,tags:[Fi.Unnecessary]})})}checkUniqueImportedRules(e,r){let n=new Map;for(let o of e.imports){let s=Ja(this.documents,o);n.set(o,s)}let i=new Ae;for(let o of e.imports){let s=n.get(o);for(let a of e.imports){if(o===a)continue;let c=n.get(a),l=this.getDuplicateExportedRules(s,c);for(let u of l)i.add(o,u)}}for(let o of e.imports){let s=i.get(o);s.length>0&&r("error","Some rules exported by this grammar are also included in other imports: "+J(s).distinct().join(", "),{node:o,property:"path"})}}getDuplicateExportedRules(e,r){let i=e.filter(a=>!r.includes(a)).flatMap(a=>a.rules),o=r.flatMap(a=>a.rules),s=new Set;for(let a of i){let c=a.name;for(let l of o){let u=l.name;c===u&&s.add(l.name)}}return s}checkGrammarTypeInfer(e,r){var n,i,o;let s=new Set;for(let c of e.types)s.add(c.name);for(let c of e.interfaces)s.add(c.name);for(let c of Ja(this.documents,e))c.types.forEach(l=>s.add(l.name)),c.interfaces.forEach(l=>s.add(l.name));for(let c of e.rules.filter(M)){if(Ya(c))continue;let l=wr(c),u=!c.returnType&&!c.dataType,f=fn(c);if(!l&&f&&s.has(f)===u){if((u||((n=c.returnType)===null||n===void 0?void 0:n.ref)!==void 0)&&c.inferredType===void 0)r("error",a(f,u),{node:c,property:"name",data:br(ve.MissingReturns)});else if(u||((i=c.returnType)===null||i===void 0?void 0:i.ref)!==void 0){let d=Lr(c.inferredType.$cstNode,"infers");r("error",a(f,u),{node:c.inferredType,property:"name",data:{code:ve.InvalidInfers,actionSegment:jt(d)}})}}else if(l&&u){let d=Lr(c.$cstNode,"infer");r("error","Data type rules cannot infer a type.",{node:c,property:"inferredType",data:{code:ve.InvalidInfers,actionSegment:jt(d)}})}}for(let c of Fe(e).filter(ye)){let l=this.getActionType(c);if(l){let u=!!c.inferredType,f=fn(c);if(c.type&&f&&s.has(f)===u){let d=u?Lr(c.$cstNode,"infer"):Lr(c.$cstNode,"{");r("error",a(f,u),{node:c,property:"type",data:{code:u?ve.SuperfluousInfer:ve.MissingInfer,actionSegment:jt(d)}})}else if(l&&f&&s.has(f)&&u&&c.$cstNode){let d=Ot((o=c.inferredType)===null||o===void 0?void 0:o.$cstNode,"name"),p=Lr(c.$cstNode,"{");d&&p&&r("error",`${f} is a declared type and cannot be redefined.`,{node:c,property:"type",data:{code:ve.SuperfluousInfer,actionRange:{start:p.range.end,end:d.range.start}}})}}}function a(c,l){return l?`The type '${c}' is already explicitly declared and cannot be inferred.`:`The type '${c}' is not explicitly declared and must be inferred.`}}getActionType(e){var r;if(e.type)return(r=e.type)===null||r===void 0?void 0:r.ref;if(e.inferredType)return e.inferredType}checkGrammarHiddenTokens(e,r){e.definesHiddenTokens&&r("error","Hidden terminals are declared at the terminal definition.",{node:e,property:"definesHiddenTokens",data:br(ve.HiddenGrammarTokens)})}checkHiddenTerminalRule(e,r){e.hidden&&e.fragment&&r("error","Cannot use terminal fragments as hidden tokens.",{node:e,property:"hidden"})}checkEmptyTerminalRule(e,r){try{let n=Fr(e);new RegExp(n).test("")&&r("error","This terminal could match an empty string.",{node:e,property:"name"})}catch{}}checkInvalidRegexFlags(e,r){let n=e.regex;if(n){let i=n.lastIndexOf("/"),o=n.substring(i+1),s="gmy",c=s+"isu",l=new Set,u=new Set;for(let d=0;d<o.length;d++){let p=o.charAt(d);c.includes(p)?s.includes(p)&&u.add(p):l.add(p)}let f=this.getFlagRange(e);f&&(l.size>0?r("error",`'${Array.from(l).join("")}' ${l.size>1?"are":"is"} not valid regular expression flag${l.size>1?"s":""}.`,{node:e,range:f}):u.size>0&&r("warning",`'${Array.from(u).join("")}' regular expression flag${u.size>1?"s":""} will be ignored by Langium.`,{node:e,range:f}))}}checkDirectlyUsedRegexFlags(e,r){if(!pe(e.$container)){let n=this.getFlagRange(e);n&&r("warning","Regular expression flags are only applied if the terminal is not a composition",{node:e,range:n})}}getFlagRange(e){let r=Ot(e.$cstNode,"regex");if(!r||!e.regex)return;let n=e.regex,i=n.lastIndexOf("/")+1;return{start:{line:r.range.end.line,character:r.range.end.character-n.length+i},end:r.range.end}}checkUsedHiddenTerminalRule(e,r){let n=xe(e,i=>pe(i)||M(i));if(n){if("hidden"in n&&n.hidden)return;let i=e.rule.ref;pe(i)&&i.hidden&&r("error","Cannot use hidden terminal in non-hidden rule",{node:e,property:"rule"})}}checkUsedFragmentTerminalRule(e,r){let n=e.rule.ref;pe(n)&&n.fragment&&xe(e,M)&&r("error","Cannot use terminal fragments as part of parser rules.",{node:e,property:"rule"})}checkCrossReferenceSyntax(e,r){e.deprecatedSyntax&&r("error","'|' is deprecated. Please, use ':' instead.",{node:e,property:"deprecatedSyntax",data:br(ve.CrossRefTokenSyntax)})}checkPackageImport(e,r){On(this.documents,e)===void 0?r("error","Import cannot be resolved.",{node:e,property:"path"}):e.path.endsWith(".langium")&&r("warning","Imports do not need file extensions.",{node:e,property:"path",data:br(ve.UnnecessaryFileExtension)})}checkInvalidCharacterRange(e,r){if(e.right){let n="Character ranges cannot use more than one character",i=!1;e.left.value.length>1&&(i=!0,r("error",n,{node:e.left,property:"value"})),e.right.value.length>1&&(i=!0,r("error",n,{node:e.right,property:"value"})),i||r("hint","Consider using regex instead of character ranges",{node:e,data:br(ve.UseRegexTokens)})}}checkGrammarForUnusedRules(e,r){let n=os(e,!0);for(let i of e.rules)pe(i)&&i.hidden||Ya(i)||n.has(i)||r("hint","This rule is declared but never referenced.",{node:i,property:"name",tags:[Fi.Unnecessary]})}checkClashingTerminalNames(e,r){let n=new Ae,i=new Set;for(let l of e.rules)pe(l)&&l.name&&n.add(l.name,l),M(l)&&Fe(l).filter(Ze).forEach(f=>i.add(f.value));let o=new Ae,s=new Ae;for(let l of e.imports){let u=Ja(this.documents,l);for(let f of u)for(let d of f.rules)pe(d)&&d.name?o.add(d.name,l):M(d)&&d.name&&Fe(d).filter(Ze).forEach(T=>s.add(T.value,l))}for(let l of n.values())if(i.has(l.name))r("error","Terminal name clashes with existing keyword.",{node:l,property:"name"});else if(s.has(l.name)){let u=s.get(l.name);r("error",`Terminal name clashes with imported keyword from "${u[0].path}".`,{node:l,property:"name"})}let a=new Ae;for(let l of i)for(let u of o.get(l))a.add(u,l);for(let[l,u]of a.entriesGroupedByKey())u.length>0&&r("error",`Imported terminals (${u.join(", ")}) clash with locally defined keywords.`,{node:l,property:"path"});let c=new Ae;for(let[l,u]of o.entriesGroupedByKey()){let f=s.get(l);f.length>0&&u.filter(d=>!f.includes(d)).forEach(d=>c.add(d,l))}for(let[l,u]of c.entriesGroupedByKey())u.length>0&&r("error",`Imported terminals (${u.join(", ")}) clash with imported keywords.`,{node:l,property:"path"})}checkRuleName(e,r){if(e.name&&!Ya(e)){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Rule name should start with an upper case letter.",{node:e,property:"name",data:br(ve.RuleNameUppercase)})}}checkTypeReservedName(e,r){this.checkReservedName(e,"name",r)}checkAssignmentReservedName(e,r){this.checkReservedName(e,"feature",r)}checkParserRuleReservedName(e,r){e.inferredType||this.checkReservedName(e,"name",r)}checkReservedName(e,r,n){let i=e[r];typeof i=="string"&&IP.has(i)&&n("error",`'${i}' is a reserved name of the JavaScript runtime.`,{node:e,property:r})}checkKeyword(e,r){xe(e,M)&&(e.value.length===0?r("error","Keywords cannot be empty.",{node:e}):e.value.trim().length===0?r("error","Keywords cannot only consist of whitespace characters.",{node:e}):/\s/g.test(e.value)&&r("warning","Keywords should not contain whitespace characters.",{node:e}))}checkUnorderedGroup(e,r){e.elements.forEach(n=>{Mr(n.cardinality)&&r("error","Optional elements in Unordered groups are currently not supported",{node:n,data:br(ve.OptionalUnorderedGroup)})})}checkRuleParametersUsed(e,r){let n=e.parameters;if(n.length>0){let i=Fe(e).filter(zo);for(let o of n)i.some(s=>s.parameter.ref===o)||r("hint",`Parameter '${o.name}' is unused.`,{node:o,tags:[Fi.Unnecessary]})}}checkParserRuleDataType(e,r){if(Ya(e))return;let n=VA(e),i=wr(e);!n&&i?r("error","This parser rule does not create an object. Add a primitive return type or an action to the start of the rule to force object instantiation.",{node:e,property:"name"}):n&&!i&&r("error","Normal parser rules are not allowed to return a primitive value. Use a datatype rule for that.",{node:e,property:e.dataType?"dataType":"returnType"})}checkAssignmentToFragmentRule(e,r){e.terminal&&Te(e.terminal)&&M(e.terminal.rule.ref)&&e.terminal.rule.ref.fragment&&r("error",`Cannot use fragment rule '${e.terminal.rule.ref.name}' for assignment of property '${e.feature}'.`,{node:e,property:"terminal"})}checkAssignmentTypes(e,r){if(!e.terminal)return;let n;Fe(e.terminal).map(o=>It(o)?"ref":"other").find(o=>n?o!==n:(n=o,!1))&&r("error",this.createMixedTypeError(e.feature),{node:e,property:"terminal"})}checkInterfacePropertyTypes(e,r){for(let n of e.attributes)if(n.type){let i=Zi(n.type),o=Xa(i),s=!1,a=!1;for(let c of o)is(c)?s=!0:is(c)||(a=!0);s&&a&&r("error",this.createMixedTypeError(n.name),{node:n,property:"type"})}}createMixedTypeError(e){return`Mixing a cross-reference with other types is not supported. Consider splitting property "${e}" into two or more different properties.`}checkTerminalRuleReturnType(e,r){var n;!((n=e.type)===null||n===void 0)&&n.name&&!ns(e.type.name)&&r("error","Terminal rules can only return primitive types like 'string', 'boolean', 'number', 'Date' or 'bigint'.",{node:e.type,property:"name"})}checkRuleCallParameters(e,r){let n=e.rule.ref;if(M(n)){let i=n.parameters.length,o=e.arguments.length;i!==o&&r("error",`Rule '${n.name}' expects ${i} arguments, but got ${o}.`,{node:e})}else pe(n)&&e.arguments.length>0&&r("error","Terminal rules do not accept any arguments",{node:e})}checkCrossRefNameAssignment(e,r){!e.terminal&&e.type.ref&&!Qa(e.type.ref)&&r("error","Cannot infer terminal or data type rule for cross-reference.",{node:e,property:"type"})}checkCrossRefTerminalType(e,r){var n;let i=e.terminal;if(Te(i)){let o=i.rule.ref;M(o)&&!wr(o)?r("error","Parser rules cannot be used for cross-references.",{node:i,property:"rule"}):M(o)&&!XA(o)?r("error","Data type rules for cross-references must be of type string.",{node:i,property:"rule"}):pe(o)&&(!((n=o.type)===null||n===void 0)&&n.name)&&o.type.name!=="string"&&r("error","Terminal rules for cross-references must be of type string.",{node:i,property:"rule"})}}checkCrossRefType(e,r){let n=this.checkReferenceToRuleButNotType(e?.type);n&&r("error",n,{node:e,property:"type"})}checkCrossReferenceToTypeUnion(e,r){if(ut(e.type.ref)&&Or(e.type.ref.type)){let n=zA(e.type.ref.type);n.length>0&&r("error",`Cross-reference on type union is only valid if all alternatives are AST nodes. ${n.join(", ")} ${n.length>1?"are":"is"} not ${n.length>1?"":"an "}AST node${n.length>1?"s":""}.`,{node:e,property:"type"})}}checkFragmentsInTypes(e,r){var n,i;M((n=e.typeRef)===null||n===void 0?void 0:n.ref)&&(!((i=e.typeRef)===null||i===void 0)&&i.ref.fragment)&&r("error","Cannot use rule fragments in types.",{node:e,property:"typeRef"})}checkReferenceTypeUnion(e,r){Kt(e.referenceType)||r("error","Only direct rule references are allowed in reference types.",{node:e,property:"referenceType"})}checkReferenceToRuleButNotType(e){if(e&&M(e.ref)&&!wr(e.ref)&&(e.ref.returnType||e.ref.inferredType)){let r=fn(e.ref);if(r)return`Use the rule type '${r}' instead of the typed rule name '${e.ref.name}' for cross-references.`}}checkAssignmentWithFeatureName(e,r){e.feature==="name"&&It(e.terminal)&&r("warning",'The "name" property is not recommended for cross-references.',{node:e,property:"feature"})}};function Ya(t){return!t.definition||!t.definition.$cstNode||t.definition.$cstNode.length===0}var IP=new Set(["Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array","Map","Set","WeakMap","WeakSet","Error","AggregateError","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","BigInt","RegExp","Number","Object","Function","Symbol","String","Math","NaN","Infinity","isFinite","isNaN","Buffer","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","globalThis","decodeURIComponent","decodeURI","encodeURIComponent","encodeURI","parseInt","parseFloat","Promise","Generator","GeneratorFunction","AsyncFunction","AsyncGenerator","AsyncGeneratorFunction","Reflect","Proxy","Date","Intl","eval","undefined"]);function zA(t){let e=[];return t.types.forEach(r=>{var n;Kt(r)&&(!((n=r.typeRef)===null||n===void 0)&&n.ref?ut(r.typeRef.ref)&&(Or(r.typeRef.ref.type)?e.push(...zA(r.typeRef.ref.type)):e.push(r.typeRef.ref.name)):r.stringType?e.push(`"${r.stringType}"`):r.primitiveType&&e.push(r.primitiveType))}),Array.from(new Set(e))}function Mr(t,e){return t==="?"||t==="*"||At(e)&&!!e.guardCondition}function YA(t){return t==="*"||t==="+"}function wr(t){return JA(t,new Set)}function JA(t,e){if(e.has(t))return!0;e.add(t);for(let r of Fe(t))if(Te(r)){if(!r.rule.ref||M(r.rule.ref)&&!JA(r.rule.ref,e))return!1}else{if(ce(r))return!1;if(ye(r))return!1}return!!t.definition}function VA(t){var e;let r=(e=t.returnType)===null||e===void 0?void 0:e.ref;return t.dataType!==void 0||ut(r)&&DP(r)}function DP(t){return Eg(t.type,new Set)}function Eg(t,e){if(e.has(t))return!0;if(e.add(t),zi(t))return!1;if(Vi(t))return!1;if(Or(t))return t.types.every(r=>Eg(r,e));if(Kt(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return ut(r)?Eg(r.type,e):!1}else return!1}else return!1}function XA(t){return Za(t,new Set)}function Za(t,e){var r,n;if(e.has(t))return!0;if(e.add(t),M(t)){if(t.dataType)return t.dataType==="string";if(!((r=t.returnType)===null||r===void 0)&&r.ref)return Za(t.returnType.ref,e)}else{if(ut(t))return Za(t.type,e);if(zi(t))return!1;if(Vi(t))return!1;if(Or(t))return t.types.every(i=>Za(i,e));if(Kt(t)){if(t.primitiveType==="string")return!0;if(t.stringType)return!0;if(!((n=t.typeRef)===null||n===void 0)&&n.ref)return Za(t.typeRef.ref,e)}}return!1}function $g(t){let e=t.$container;if(At(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(ye(o))return o;{let s=Fe(r[i]).find(ye);if(s)return s}}}if(Wo(e))return $g(e)}function Yr(t){var e;if(M(t))return wr(t)?t.name:(e=as(t))!==null&&e!==void 0?e:t.name;if(Ht(t)||ut(t)||Vo(t))return t.name;if(ye(t)){let r=cs(t);if(r)return r}else if(Bo(t))return t.name;throw new xu("Cannot get name of Unknown Type",t.$cstNode)}function fn(t){if(t)try{return Yr(t)}catch{return}}function as(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(M(e))return e.name;if(Ht(e)||ut(e))return e.name}}}function cs(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return Yr(t.type.ref)}function eo(t){var e,r,n;return pe(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":wr(t)?t.name:(n=as(t))!==null&&n!==void 0?n:t.name}function Fr(t){let e={s:!1,i:!1,u:!1},r=ls(t.definition,e),n=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(r,n)}var Ng=/[\s\S]/.source;function ls(t,e){if(sA(t))return OP(t);if(cA(t))return LP(t);if(fu(t))return UP(t);if(du(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return Ln(ls(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(tA(t))return FP(t);if(dA(t))return MP(t);if(nA(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),i=t.regex.substring(r+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),Ln(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(mA(t))return Ln(Ng,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t?.$type}`)}}}function OP(t){return Ln(t.elements.map(e=>ls(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function LP(t){return Ln(t.elements.map(e=>ls(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function MP(t){return Ln(`${Ng}*?${ls(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function FP(t){return Ln(`(?!${ls(t.terminal)})${Ng}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function UP(t){return t.right?Ln(`[${Cg(t.left)}-${Cg(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):Ln(Cg(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Cg(t){return Dn(t.value)}function Ln(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function Pg(t){if(t.path===void 0||t.path.length===0)return;let e=le.dirname(Y(t).uri),r=t.path;return r.endsWith(".langium")||(r+=".langium"),le.resolvePath(e,r)}function On(t,e){let r=Pg(e);try{if(r){let i=t.getOrCreateDocument(r).parseResult.value;if(di(i))return i}}catch{}}function Ja(t,e){if(lu(e)){let r=On(t,e);if(r){let n=_g(t,r);return n.push(r),n}return[]}else return _g(t,e)}function _g(t,e,r=e,n=new Set,i=new Set){let o=Y(e);if(r!==e&&i.add(e),!n.has(o.uri)){n.add(o.uri);for(let s of e.imports){let a=On(t,s);a&&_g(t,a,r,n,i)}}return Array.from(i)}function ss(t){return ce(t)?[t]:vr(t)||At(t)||Rr(t)?t.elements.flatMap(e=>ss(e)):Te(t)&&t.rule.ref?ss(t.rule.ref.definition):[]}var qP=["string","number","boolean","Date","bigint"];function ns(t){return qP.includes(t)}var Ig=class{constructor(e,r){this.context=e,this.root=r}getTypes(){let e={name:this.root.name,properties:this.root.properties,ruleCalls:this.root.ruleCalls,super:[]};return this.root.children.length===0?[{alt:e,next:[]}]:this.applyNext(this.root,{alt:e,next:this.root.children})}applyNext(e,r){let n=this.splitType(r.alt,r.next.length),i=[];for(let o=0;o<r.next.length;o++){let s=n[o],a=r.next[o];a.actionWithAssignment&&i.push({alt:QA(s),next:[]}),a.name!==void 0&&a.name!==s.name&&(a.actionWithAssignment?(s.properties=[],s.ruleCalls=[],s.super=[e.name],s.name=a.name):(s.super=[s.name,...s.ruleCalls],s.properties=[],s.ruleCalls=[],s.name=a.name)),s.properties.push(...a.properties),s.ruleCalls.push(...a.ruleCalls);let c={alt:s,next:a.children};c.next.length===0?(c.alt.super=c.alt.super.filter(l=>l!==c.alt.name),i.push(c)):i.push(...this.applyNext(e,c))}return nb(i)}splitType(e,r){let n=[];for(let i=0;i<r;i++)n.push(QA(e));return n}getSuperTypes(e){let r=new Set;return this.collectSuperTypes(e,e,r),Array.from(r)}collectSuperTypes(e,r,n){if(r.ruleCalls.length>0){for(let i of r.ruleCalls)n.add(i);return}for(let i of r.parents)e.name===void 0?this.collectSuperTypes(i,i,n):i.name!==void 0&&i.name!==e.name?n.add(i.name):this.collectSuperTypes(e,i,n);r.parents.length===0&&r.name&&n.add(r.name)}connect(e,r){return r.parents.push(e),e.children.push(r),r}merge(...e){if(e.length===1)return e[0];if(e.length===0)throw new Error("No parts to merge");let r=to();r.parents=e;for(let n of e)n.children.push(r);return r}hasLeafNode(e){return this.partHasLeafNode(e)}partHasLeafNode(e,r){return e.children.some(n=>n!==r)?!0:e.name?!1:e.parents.some(n=>this.partHasLeafNode(n,e))}};function GP(t){return{name:t.name,children:[],parents:[],actionWithAssignment:t.actionWithAssignment,ruleCalls:[...t.ruleCalls],properties:t.properties.map(ZA)}}function QA(t){return{name:t.name,super:t.super,ruleCalls:t.ruleCalls,properties:t.properties.map(e=>ZA(e))}}function ZA(t){return{name:t.name,optional:t.optional,type:t.type,astNodes:t.astNodes}}function eb(t,e,r){let n=[],i={fragments:new Map};for(let c of t)n.push(...tb(i,c));let o=zP(n),s=VP(o),a=XP(o,s,r);for(let c of e){let l=jP(c);a.unions.push({name:c.name,declared:!1,type:l,subTypes:new Set,superTypes:new Set,dataType:c.dataType})}return a}function jP(t){if(t.dataType&&t.dataType!=="string")return{primitive:t.dataType};let e=!1,r=()=>(e=!0,{primitive:"unknown"}),n=Dg(t.definition,r);return e?{primitive:"string"}:n}function Dg(t,e){var r,n,i;if(t.cardinality)return e();if(vr(t))return{types:t.elements.map(o=>Dg(o,e))};if(At(t)||Rr(t))return t.elements.length!==1?e():Dg(t.elements[0],e);if(Te(t)){let o=(r=t.rule)===null||r===void 0?void 0:r.ref;return o?pe(o)?{primitive:(i=(n=o.type)===null||n===void 0?void 0:n.name)!==null&&i!==void 0?i:"string",regex:Fr(o).toString()}:{value:o.name}:e()}else if(Ze(t))return{string:t.value};return e()}function tb(t,e){let r=to(e),n=new Ig(t,r);return e.definition&&Og(n,n.root,e.definition),n.getTypes()}function to(t){return{name:M(t)||ye(t)?fn(t):t,properties:[],ruleCalls:[],children:[],parents:[],actionWithAssignment:!1}}function Og(t,e,r){let n=Mr(r.cardinality,r);if(vr(r)){let i=[];n&&i.push(t.connect(e,to()));for(let o of r.elements){let s=t.connect(e,to());i.push(Og(t,s,o))}return t.merge(...i)}else if(At(r)||Rr(r)){let i=t.connect(e,to()),o;n&&(o=t.connect(e,to()));for(let s of r.elements)i=Og(t,i,s);return o?t.merge(o,i):i}else{if(ye(r))return HP(t,e,r);ce(r)?KP(e,r):Te(r)&&WP(t,e,r)}return e}function HP(t,e,r){var n;if(!t.hasLeafNode(e)){let o=GP(e);t.connect(e,o)}let i=t.connect(e,to(r));if(r.type){let o=(n=r.type)===null||n===void 0?void 0:n.ref;o&&ja(o)&&(i.name=o.name)}return r.feature&&r.operator&&(i.actionWithAssignment=!0,i.properties.push({name:r.feature,optional:!1,type:ro(r.operator==="+=",!1,t.root.ruleCalls.length!==0?t.root.ruleCalls:t.getSuperTypes(i)),astNodes:new Set([r])})),i}function KP(t,e){let r={types:new Set,reference:!1};rb(e.terminal,r);let n=ro(e.operator==="+=",r.reference,e.operator==="?="?["boolean"]:Array.from(r.types));t.properties.push({name:e.feature,optional:Mr(e.cardinality),type:n,astNodes:new Set([e])})}function rb(t,e){if(vr(t)||Rr(t)||At(t))for(let r of t.elements)rb(r,e);else if(Ze(t))e.types.add(`'${t.value}'`);else if(Te(t)&&t.rule.ref)e.types.add(eo(t.rule.ref));else if(It(t)&&t.type.ref){let r=fn(t.type.ref);r&&e.types.add(r),e.reference=!0}}function WP(t,e,r){let n=r.rule.ref;if(M(n)&&n.fragment){let i=BP(n,t.context);Mr(r.cardinality)?e.properties.push(...i.map(o=>Object.assign(Object.assign({},o),{optional:!0}))):e.properties.push(...i)}else M(n)&&e.ruleCalls.push(eo(n))}function BP(t,e){let r=e.fragments.get(t);if(r)return r;let n=[];e.fragments.set(t,n);let i=fn(t),o=tb(e,t).filter(s=>s.alt.name===i);return n.push(...o.flatMap(s=>s.alt.properties)),n}function zP(t){let e=new Map,r=[],n=nb(t).map(i=>i.alt);for(let i of n){let o={name:i.name,properties:i.properties,superTypes:new Set(i.super),subTypes:new Set,declared:!1,abstract:!1};e.set(o.name,o),i.ruleCalls.length>0&&(r.push(i),i.ruleCalls.forEach(s=>{s!==o.name&&o.subTypes.add(s)}))}for(let i of r)for(let o of i.ruleCalls){let s=e.get(o);s&&s.name!==i.name&&s.superTypes.add(i.name)}return Array.from(e.values())}function nb(t){let e=t.reduce((n,i)=>n.add(i.alt.name,i),new Ae),r=[];for(let[n,i]of e.entriesGroupedByKey()){let o=[],s=new Set,a={alt:{name:n,properties:o,ruleCalls:[],super:[]},next:[]};for(let c of i){let l=c.alt;a.alt.super.push(...l.super),a.next.push(...c.next);let u=l.properties;for(let f of u){let d=o.find(p=>p.name===f.name);d?(d.type=kg(d.type,f.type),f.astNodes.forEach(p=>d.astNodes.add(p))):o.push(Object.assign({},f))}l.ruleCalls.forEach(f=>s.add(f))}for(let c of i){let l=c.alt;if(l.ruleCalls.length===0)for(let u of o)l.properties.find(f=>f.name===u.name)||(u.optional=!0)}a.alt.ruleCalls=Array.from(s),r.push(a)}return r}function VP(t){let e=new Map(t.map(i=>[i.name,i])),r=[],n=new Ae;for(let i of t)for(let o of i.superTypes)n.add(o,i.name);for(let[i,o]of n.entriesGroupedByKey())if(!e.has(i)){let s={declared:!1,name:i,subTypes:new Set,superTypes:new Set,type:ro(!1,!1,o)};r.push(s)}return r}function XP(t,e,r){let n=new Ae;for(let a of t)for(let c of a.superTypes)n.add(c,a.name);let i=new Set(r.interfaces.map(a=>a.name)),o={interfaces:[],unions:e},s=new Map(e.map(a=>[a.name,a]));for(let a of t){let c=new Set(n.get(a.name));if(a.properties.length===0&&c.size>0)if(i.has(a.name))a.abstract=!0,o.interfaces.push(a);else{let l=ro(!1,!1,Array.from(c)),u=s.get(a.name);if(u)u.type=kg(u.type,l);else{let f={name:a.name,declared:!1,subTypes:c,superTypes:a.superTypes,type:l};o.unions.push(f),s.set(a.name,f)}}else o.interfaces.push(a)}for(let a of o.interfaces)a.superTypes=new Set([...a.superTypes].filter(c=>!s.has(c)));return o}function ro(t,e,r){if(t)return{elementType:ro(!1,e,r)};if(e)return{referenceType:ro(!1,!1,r)};if(r.length===1){let n=r[0];return n.startsWith("'")?{string:n.substring(1,n.length-1)}:ns(n)?{primitive:n}:{value:n}}else return{types:r.map(n=>ro(!1,!1,[n]))}}function ib(t,e){let r=ob(t,e),n=HA(r.interfaces,r.types),i=eb(r.parserRules,r.datatypeRules,n);return{astResources:r,inferred:i,declared:n}}function ob(t,e,r=new Set,n={parserRules:[],datatypeRules:[],interfaces:[],types:[]}){Array.isArray(t)||(t=[t]);for(let i of t){let o=Y(i);if(!r.has(o.uri)){r.add(o.uri);for(let s of i.rules)M(s)&&!s.fragment&&(wr(s)?n.datatypeRules.push(s):n.parserRules.push(s));if(i.interfaces.forEach(s=>n.interfaces.push(s)),i.types.forEach(s=>n.types.push(s)),e){let s=i.imports.map(a=>On(e,a)).filter(a=>a!==void 0);ob(s,e,r,n)}}}return n}function cb(t,e){let{inferred:r,declared:n,astResources:i}=ib(t,e);return{astResources:i,inferred:sb(n,r),declared:sb(r,n)}}function sb(t,e){var r,n;let i={interfaces:DA(ab(...t.interfaces,...(r=e?.interfaces)!==null&&r!==void 0?r:[])),unions:ab(...t.unions,...(n=e?.unions)!==null&&n!==void 0?n:[])},o=WA(i);return YP(o),o}function ab(...t){return Array.from(t.reduce((e,r)=>(e.set(r.name,r),e),new Map).values()).sort((e,r)=>e.name.localeCompare(r.name))}function YP(t){let e=QP(t),r=Array.from(e.values());ZP(r),eI(t.interfaces),JP(r)}function JP(t){let e=new Set,r=n=>{if(!e.has(n)){e.add(n),n.typeNames.add(n.name);for(let i of n.subTypes)r(i),i.typeNames.forEach(o=>n.typeNames.add(o))}};t.forEach(r)}function QP({interfaces:t,unions:e}){let r=t.concat(e).reduce((i,o)=>(i.set(o.name,o),i),new Map),n=new Map;for(let i of e)n.set(i,Lg(i.type,new Set));for(let[i,o]of n)o&&r.delete(i.name);return r}function Lg(t,e){if(e.has(t))return!0;if(e.add(t),gt(t))return t.types.every(r=>Lg(r,e));if(Sr(t)){let r=t.value;return zr(r)?Lg(r.type,e):!1}else return Ar(t)||ln(t)}function ZP(t){for(let e of t)for(let r of e.superTypes)r.subTypes.add(e)}function eI(t){var e;let r=t.reduce((s,a)=>(s.set(a.name,a),s),new Map);for(let s of t){let a=s.properties.flatMap(c=>OA(c.type));for(let c of a)(e=r.get(c))===null||e===void 0||e.containerTypes.add(s)}let n=new Set,i=t.filter(s=>s.subTypes.size===0),o=new Set(i);for(;i.length>0;){let s=i.shift();if(s)for(let a of s.superTypes)Xr(a)&&(s.containerTypes.size===0?(n.add(a.name),a.containerTypes.clear()):n.has(a.name)||s.containerTypes.forEach(c=>a.containerTypes.add(c)),o.has(a)||(o.add(a),i.push(a)))}}var tI={languageId:"langium",fileExtensions:[".langium"],caseInsensitive:!1},rI={maxLookahead:3},lb={AstReflection:()=>new Oa},ub={Grammar:()=>qA(),LanguageMetaData:()=>tI,parser:{ParserConfig:()=>rI}};var ec=class{constructor(e,r,n){var i;this.elements=e,this.outerScope=r,this.caseInsensitive=(i=n?.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},us=class{constructor(e,r,n){var i;this.elements=new Map,this.caseInsensitive=(i=n?.caseInsensitive)!==null&&i!==void 0?i:!1;for(let o of e){let s=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(s,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=J(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},fb={getElement(){},getAllElements(){return Ko}};var $u=se(kn(),1);var fs=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=$u.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=pi,i=$u.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let s of n(e))await Ue(i),this.exportNode(s,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=$u.CancellationToken.None){let n=e.parseResult.value,i=new Ae;for(let o of Fe(n))await Ue(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};var Nu=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},Mg=class extends Nu{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},Pu=class extends Nu{constructor(e){super(),this.cache=new Map,this.converter=e??(r=>r)}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let i=this.cacheForContext(e);if(i.has(r))return i.get(r);if(n){let o=n();return i.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}};var Iu=class extends Mg{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var ds=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new Iu(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=Y(e.container).precomputedScopes;if(i){let s=e.container;do{let a=i.get(s);a.length>0&&r.push(J(a).filter(c=>this.reflection.isSubtype(c.type,n))),s=s.$container}while(s)}let o=this.getGlobalScope(n,e);for(let s=r.length-1;s>=0;s--)o=this.createScope(r[s],o);return o}createScope(e,r,n){return new ec(J(e),r,n)}createScopeForNodes(e,r,n){let i=J(e).map(o=>{let s=this.nameProvider.getName(o);if(s)return this.descriptions.createDescription(o,s)}).nonNullable();return new ec(i,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new us(this.indexManager.allElements(e)))}};var Du=class extends ds{constructor(e){super(e),this.langiumDocuments=e.shared.workspace.LangiumDocuments}getScope(e){let r=this.reflection.getReferenceType(e);return r===Bi?this.getTypeScope(r,e):super.getScope(e)}getTypeScope(e,r){let n,i=Y(r.container).precomputedScopes,o=pu(r.container);if(i&&o){let a=i.get(o);a.length>0&&(n=J(a).filter(c=>c.type===La||c.type===Ma))}let s=this.getGlobalScope(e,r);return n?this.createScope(n,s):s}getGlobalScope(e,r){let n=xe(r.container,di);if(!n)return fb;let i=new Set;this.gatherImports(n,i);let o=this.indexManager.allElements(e,i);return e===Bi&&(o=o.filter(s=>s.type===La||s.type===Ma)),new us(o)}gatherImports(e,r){for(let n of e.imports){let i=Pg(n);if(i&&!r.has(i.toString())&&(r.add(i.toString()),this.langiumDocuments.hasDocument(i))){let s=this.langiumDocuments.getOrCreateDocument(i).parseResult.value;di(s)&&this.gatherImports(s,r)}}}},Ou=class extends fs{constructor(e){super(e),this.astNodeLocator=e.workspace.AstNodeLocator}exportNode(e,r,n){var i;if(super.exportNode(e,r,n),M(e)){if(!e.returnType&&!e.dataType){let o=(i=e.inferredType)!==null&&i!==void 0?i:e;r.push(this.createInterfaceDescription(o,o.name,n))}Fe(e).forEach(o=>{if(ye(o)&&o.inferredType){let s=cs(o);s&&r.push(this.createInterfaceDescription(o,s,n))}})}}processNode(e,r,n){Vo(e)||(this.processTypeNode(e,r,n),this.processActionNode(e,r,n),super.processNode(e,r,n))}processTypeNode(e,r,n){var i;let o=e.$container;if(o&&M(e)&&!e.returnType&&!e.dataType){let s=(i=e.inferredType)!==null&&i!==void 0?i:e;n.add(o,this.createInterfaceDescription(s,s.name,r))}}processActionNode(e,r,n){let i=pu(e);if(i&&ye(e)&&e.inferredType){let o=cs(e);o&&n.add(i,this.createInterfaceDescription(e,o,r))}}createInterfaceDescription(e,r,n=Y(e)){let i,o=()=>{var s;return i??(i=jt((s=this.nameProvider.getNameNode(e))!==null&&s!==void 0?s:e.$cstNode))};return{node:e,name:r,get nameSegment(){return o()},selectionSegment:jt(e.$cstNode),type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)}}};var kr=se(de(),1);var Wt=se(de(),1);var Lu=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=Wt.CancellationToken.None){let i=e.parseResult,o=[];if(await Ue(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(i,o,r),r.stopAfterLexingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===dn.LexingError})||(this.processParsingErrors(i,o,r),r.stopAfterParsingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===dn.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===dn.LinkingError}))))return o;try{o.push(...await this.validateAst(i.value,r,n))}catch(s){if(Qi(s))throw s;console.error("An error occurred during validation:",s)}return await Ue(n),o}processLexingErrors(e,r,n){for(let i of e.lexerErrors){let o={severity:Wt.DiagnosticSeverity.Error,range:{start:{line:i.line-1,character:i.column-1},end:{line:i.line-1,character:i.column+i.length-1}},message:i.message,data:br(dn.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let i of e.parserErrors){let o;if(isNaN(i.token.startOffset)){if("previousToken"in i){let s=i.previousToken;if(isNaN(s.startOffset))o=Wt.Range.create(0,0,0,0);else{let a=Wt.Position.create(s.endLine-1,s.endColumn);o=Wt.Range.create(a,a)}}}else o=Da(i.token);if(o){let s={severity:Wt.DiagnosticSeverity.Error,range:o,message:i.message,data:br(dn.ParsingError),source:this.getSource()};r.push(s)}}}processLinkingErrors(e,r,n){for(let i of e.references){let o=i.error;if(o){let s={node:o.container,property:o.property,index:o.index,data:{code:dn.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,s))}}}async validateAst(e,r,n=Wt.CancellationToken.None){let i=[],o=(s,a,c)=>{i.push(this.toDiagnostic(s,a,c))};return await Promise.all(Nn(e).map(async s=>{await Ue(n);let a=this.validationRegistry.getChecks(s.$type,r.categories);for(let c of a)await c(s,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:nI(n),severity:iI(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function nI(t){if(Wt.Range.is(t.range))return t.range;let e;return typeof t.property=="string"?e=Ot(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Lr(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function iI(t){switch(t){case"error":return Wt.DiagnosticSeverity.Error;case"warning":return Wt.DiagnosticSeverity.Warning;case"info":return Wt.DiagnosticSeverity.Information;case"hint":return Wt.DiagnosticSeverity.Hint;default:throw new Error("Invalid diagnostic severity: "+t)}}var dn;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(dn||(dn={}));var Mu=class{constructor(e){this.reflection=e.shared.AstReflection,this.indexManager=e.shared.workspace.IndexManager}getCodeActions(e,r){let n=[],i=o=>o&&n.push(o);for(let o of r.context.diagnostics)this.createCodeActions(o,e,i);return n}createCodeActions(e,r,n){var i;switch((i=e.data)===null||i===void 0?void 0:i.code){case ve.GrammarNameUppercase:case ve.RuleNameUppercase:n(this.makeUpperCase(e,r));break;case ve.HiddenGrammarTokens:n(this.fixHiddenTerminals(e,r));break;case ve.UseRegexTokens:n(this.fixRegexTokens(e,r));break;case ve.EntryRuleTokenSyntax:n(this.addEntryKeyword(e,r));break;case ve.CrossRefTokenSyntax:n(this.fixCrossRefSyntax(e,r));break;case ve.UnnecessaryFileExtension:n(this.fixUnnecessaryFileExtension(e,r));break;case ve.MissingReturns:n(this.fixMissingReturns(e,r));break;case ve.InvalidInfers:case ve.InvalidReturns:n(this.fixInvalidReturnsInfers(e,r));break;case ve.MissingInfer:n(this.fixMissingInfer(e,r));break;case ve.SuperfluousInfer:n(this.fixSuperfluousInfer(e,r));break;case dn.LinkingError:{let o=e.data;o&&o.containerType==="RuleCall"&&o.property==="rule"&&n(this.addNewRule(e,o,r)),o&&this.lookInGlobalScope(e,o,r).forEach(n);break}}}fixMissingReturns(e,r){let n=r.textDocument.getText(e.range);if(n)return{title:`Add explicit return type for parser rule ${n}`,kind:kr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:`${n} returns ${n}`}]}}}}fixInvalidReturnsInfers(e,r){let n=e.data;if(n&&n.actionSegment){let i=r.textDocument.getText(n.actionSegment.range);return{title:`Correct ${i} usage`,kind:kr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.actionSegment.range,newText:i==="infers"?"returns":"infers"}]}}}}}fixMissingInfer(e,r){let n=e.data;if(n&&n.actionSegment)return{title:"Correct 'infer' usage",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:{start:n.actionSegment.range.end,end:n.actionSegment.range.end},newText:"infer "}]}}}}fixSuperfluousInfer(e,r){let n=e.data;if(n&&n.actionRange)return{title:"Remove the 'infer' keyword",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.actionRange,newText:""}]}}}}fixUnnecessaryFileExtension(e,r){let n=Object.assign({},e.range.end);n.character-=1;let i=Object.assign({},n);return i.character-=8,{title:"Remove file extension",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:i,end:n},newText:""}]}}}}makeUpperCase(e,r){let n={start:e.range.start,end:{line:e.range.start.line,character:e.range.start.character+1}};return{title:"First letter to upper case",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:n,newText:r.textDocument.getText(n).toUpperCase()}]}}}}addEntryKeyword(e,r){return{title:"Add entry keyword",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:e.range.start,end:e.range.start},newText:"entry "}]}}}}fixRegexTokens(e,r){let n=r.textDocument.offsetAt(e.range.start),i=r.parseResult.value.$cstNode;if(i){let o=fi(i,n),s=xe(o?.astNode,fu);if(s&&s.right&&s.$cstNode){let a=s.left.value,c=s.right.value;return{title:"Refactor into regular expression",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:s.$cstNode.range,newText:`/[${Dn(a)}-${Dn(c)}]/`}]}}}}}}fixCrossRefSyntax(e,r){return{title:"Replace '|' with ':'",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:":"}]}}}}fixHiddenTerminals(e,r){let n=r.parseResult.value,i=n.hiddenTokens,o=[],s=Ot(n.$cstNode,"definesHiddenTokens");if(s){let a=s.range.start,c=s.offset,l=n.$cstNode.text.indexOf(")",c)+1;o.push({newText:"",range:{start:a,end:r.textDocument.positionAt(l)}})}for(let a of i){let c=a.ref;if(c&&pe(c)&&!c.hidden&&c.$cstNode){let l=c.$cstNode.range.start;o.push({newText:"hidden ",range:{start:l,end:l}})}}return{title:"Fix hidden terminals",kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:o}}}}addNewRule(e,r,n){let i=n.textDocument.offsetAt(e.range.start),o=n.parseResult.value.$cstNode;if(o){let s=fi(o,i),a=xe(s?.astNode,M);if(a&&a.$cstNode)return{title:`Add new rule '${r.refText}'`,kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:a.$cstNode.range.end,end:a.$cstNode.range.end},newText:`

`+r.refText+`:
    /* TODO implement rule */ {infer `+r.refText+"};"}]}}}}}lookInGlobalScope(e,r,n){var i,o;let s={container:{$type:r.containerType},property:r.property,reference:{$refText:r.refText}},a=this.reflection.getReferenceType(s),c=this.indexManager.allElements(a).filter(d=>d.name===r.refText),l=[],u=-1,f=-1;for(let d of c){if(le.equals(d.documentUri,n.uri))continue;let p=oI(n.uri,d.documentUri),T,R="",b=n.parseResult.value,S=b.imports.find(h=>h.path&&p<h.path);if(S)T=(i=S.$cstNode)===null||i===void 0?void 0:i.range.start;else if(b.imports.length>0){let h=b.imports[b.imports.length-1].$cstNode.range.end;h&&(T={line:h.line+1,character:0})}else b.rules.length>0&&(T=(o=b.rules[0].$cstNode)===null||o===void 0?void 0:o.range.start,R=`
`);T&&((u<0||p.length<f)&&(u=l.length,f=p.length),l.push({title:`Add import to '${p}'`,kind:kr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:T,end:T},newText:`import '${p}'
${R}`}]}}}))}return u>=0&&(l[u].isPreferred=!0),l}};function oI(t,e){let r=le.dirname(t),n=le.relative(r,e);return!n.startsWith("./")&&!n.startsWith("../")&&(n="./"+n),n.endsWith(".langium")&&(n=n.substring(0,n.length-8)),n}qi();var hs=se(de(),1);function Fg(t,e){let r={stacks:t,tokens:e};return sI(r),r.stacks.flat().forEach(i=>{i.property=void 0}),pb(r.stacks).map(i=>i[i.length-1])}function Ug(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],s=e.feature;if(n.has(s))return[];n.add(s);let a,c=s;for(;c.$container;)if(At(c.$container)){a=c.$container;break}else if(Wo(c.$container))c=c.$container;else break;if(YA(c.cardinality)){let l=ps({next:{feature:c,type:e.type},cardinalities:r,visited:n,plus:i});for(let u of l)i.add(u.feature);o.push(...l)}if(a){let l=a.elements.indexOf(c);l!==void 0&&l<a.elements.length-1&&o.push(...db({feature:a,type:e.type},l+1,r,n,i)),o.every(u=>Mr(u.feature.cardinality,u.feature)||Mr(r.get(u.feature))||i.has(u.feature))&&o.push(...Ug({next:{feature:a,type:e.type},cardinalities:r,visited:n,plus:i}))}return o}function Uu(t){return lt(t)&&(t={feature:t}),ps({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function ps(t){var e,r,n;let{next:i,cardinalities:o,visited:s,plus:a}=t;if(i===void 0)return[];let{feature:c,type:l}=i;if(At(c)){if(s.has(c))return[];s.add(c)}if(At(c))return db(i,0,o,s,a).map(u=>Fu(u,c.cardinality,o));if(vr(c)||Rr(c))return c.elements.flatMap(u=>ps({next:{feature:u,type:l,property:i.property},cardinalities:o,visited:s,plus:a})).map(u=>Fu(u,c.cardinality,o));if(ce(c)){let u={feature:c.terminal,type:l,property:(e=i.property)!==null&&e!==void 0?e:c.feature};return ps({next:u,cardinalities:o,visited:s,plus:a}).map(f=>Fu(f,c.cardinality,o))}else{if(ye(c))return Ug({next:{feature:c,type:Yr(c),property:(r=i.property)!==null&&r!==void 0?r:c.feature},cardinalities:o,visited:s,plus:a});if(Te(c)&&M(c.rule.ref)){let u=c.rule.ref,f={feature:u.definition,type:u.fragment||u.dataType?void 0:(n=as(u))!==null&&n!==void 0?n:u.name,property:i.property};return ps({next:f,cardinalities:o,visited:s,plus:a}).map(d=>Fu(d,c.cardinality,o))}else return[i]}}function Fu(t,e,r){return r.set(t.feature,e),t}function db(t,e,r,n,i){var o;let s=[],a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},s.push(...ps({next:a,cardinalities:r,visited:n,plus:i})),!!Mr((o=a.feature.cardinality)!==null&&o!==void 0?o:r.get(a.feature),a.feature)););return s}function sI(t){for(let e of t.tokens){let r=pb(t.stacks,e);t.stacks=r}}function pb(t,e){let r=[];for(let n of t)r.push(...aI(n,e));return r}function aI(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(cI)),i=[];for(;t.length>0;){let o=t.pop(),s=Ug({next:o,cardinalities:r,plus:n,visited:new Set}).filter(a=>e?qg(a.feature,e):!0);for(let a of s)i.push([...t,a]);if(!s.every(a=>Mr(a.feature.cardinality,a.feature)||Mr(r.get(a.feature))))break}return i}function cI(t){if(t.cardinality==="+")return!0;let e=xe(t,ce);return!!(e&&e.cardinality==="+")}function qg(t,e){if(Ze(t))return t.value===e.image;if(Te(t))return lI(t.rule.ref,e);if(It(t)){let r=qu(t);if(r)return qg(r,e)}return!1}function lI(t,e){return M(t)?Uu(t.definition).some(n=>qg(n.feature,e)):pe(t)?Fr(t).test(e.image):!1}function mb(t){let e=Array.from(new Set(t.flatMap(n=>{var i;return(i=n?.triggerCharacters)!==null&&i!==void 0?i:[]}))),r=Array.from(new Set(t.flatMap(n=>{var i;return(i=n?.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var ms=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],i=this.buildContexts(e,r.position),o=(c,l)=>{let u=this.fillCompletionItem(c,l);u&&n.push(u)},s=c=>Ze(c.feature)?c.feature.value:c.feature,a=[];for(let c of i)if(await Promise.all(J(c.features).distinct(s).exclude(a).map(l=>this.completionFor(c,l,o))),a.push(...c.features),!this.continueCompletion(n))break;return hs.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return J(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:hs.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let c=Gu(this.grammar),l=Uu({feature:c.definition,type:as(c)});return o.length>0?(o.shift(),Fg(l.map(u=>[u]),o)):l}let s=[...o].splice(i.tokenIndex);return Fg([i.elementStack.map(c=>({feature:c}))],s)}*buildContexts(e,r){var n,i;let o=e.parseResult.value.$cstNode;if(!o)return;let s=e.textDocument,a=s.getText(),c=s.offsetAt(r),l={document:e,textDocument:s,offset:c,position:r},u=this.findDataTypeRuleStart(o,c);if(u){let[h,m]=u,A=(n=au(o,h))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},l),{node:A,tokenOffset:h,tokenEndOffset:m,features:this.findFeaturesAt(s,h)})}let{nextTokenStart:f,nextTokenEnd:d,previousTokenStart:p,previousTokenEnd:T}=this.backtrackToAnyToken(a,c),R=f;c<=f&&p!==void 0&&(R=p);let b=(i=au(o,R))===null||i===void 0?void 0:i.astNode,S=!0;if(p!==void 0&&T!==void 0&&T===c&&(yield Object.assign(Object.assign({},l),{node:b,tokenOffset:p,tokenEndOffset:T,features:this.findFeaturesAt(s,p)}),S=this.performNextTokenCompletion(e,a.substring(p,T),p,T),S&&(yield Object.assign(Object.assign({},l),{node:b,tokenOffset:T,tokenEndOffset:T,features:this.findFeaturesAt(s,T)}))),b)S&&(yield Object.assign(Object.assign({},l),{node:b,tokenOffset:f,tokenEndOffset:d,features:this.findFeaturesAt(s,f)}));else{let h=Gu(this.grammar);if(!h)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},l),{tokenOffset:f,tokenEndOffset:d,features:Uu(h.definition)})}}performNextTokenCompletion(e,r,n,i){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,i;let o=ht(e,r,this.grammarConfig.nameRegexp),s=!!(!((n=xe(o?.grammarSource,M))===null||n===void 0)&&n.dataType);if(s){for(;s;)o=o?.container,s=!!(!((i=xe(o?.grammarSource,M))===null||i===void 0)&&i.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let i;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,r,n){if(Ze(r.feature))return this.completionForKeyword(e,r.feature,n);if(It(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=xe(r.feature,ce),o=e.node;if(i&&o){r.type&&(o={$type:r.type,$container:o,$containerProperty:r.property},hu(this.astReflection,o));let s={reference:{$refText:""},container:o,property:i.feature};try{this.scopeProvider.getScope(s).getAllElements().forEach(c=>{this.filterCrossReference(e,c)&&n(e,this.createReferenceCompletionItem(c))})}catch(a){console.error(a)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}filterCrossReference(e,r){return!0}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:hs.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,i;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let l=this.nameProvider.getName(r.node);if(!l)return;o=l}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let s;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?s=r.textEdit.newText:typeof r.insertText=="string"?s=r.insertText:s=o;let a=(i=r.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,o,s);return a?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:a,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let s=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:n,range:{start:s,end:a}}}else return}};var ju=class extends ms{constructor(e){super(e),this.documents=()=>e.shared.workspace.LangiumDocuments}completionFor(e,r,n){let i=xe(r.feature,ce);if(i?.feature==="path")this.completeImportPath(e,n);else return super.completionFor(e,r,n)}completeImportPath(e,r){let i=e.textDocument.getText().substring(e.tokenOffset,e.offset),o=this.getAllFiles(e.document),s={start:e.position,end:e.position};if(i.length>0){let a=i.substring(1);o=o.filter(u=>u.startsWith(a));let c=e.textDocument.positionAt(e.tokenOffset+1),l=e.textDocument.positionAt(e.tokenEndOffset-1);s={start:c,end:l}}for(let a of o){let c=i.length>0?"":'"',l=`${c}${a}${c}`;r(e,{label:a,textEdit:{newText:l,range:s},kind:Aa.File,sortText:"0"})}}getAllFiles(e){let r=this.documents().all,n=e.uri.toString(),i=le.dirname(e.uri).toString(),o=[];for(let s of r)if(!le.equals(s.uri,n)){let a=s.uri.toString(),c=a.substring(0,a.length-le.extname(s.uri).length),l=le.relative(i,c);l.startsWith(".")||(l=`./${l}`),o.push(l)}return o}};var tc=se(de(),1);var gs=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=Fe(i).iterator(),s;do if(s=o.next(),!s.done){let a=s.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,r),this.shouldProcessContent(a)||o.prune()}while(!s.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of TS(i))if(this.commentNames.includes(o.tokenType.name)){let s=this.toFoldingRange(e,o,tc.FoldingRangeKind.Comment);s&&n(s)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,s=i.end;if(!(s.line-o.line<2))return this.includeLastFoldingLine(r,n)||(s=e.textDocument.positionAt(e.textDocument.offsetAt({line:s.line,character:0})-1)),tc.FoldingRange.create(o.line,s.line,o.character,s.character,n)}includeLastFoldingLine(e,r){if(r===tc.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};var Hu=class extends gs{shouldProcessContent(e){return!M(e)}};var Ku=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Gg(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(o=>{var s;return(s=o.line)!==null&&s!==void 0?s:Number.MAX_VALUE}),...n.parserErrors.map(o=>{var s;return(s=o.token.startLine)!==null&&s!==void 0?s:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(a,c,l)=>{var u,f;let d=this.nodeModeToKey(a,c),p=i.get(d),T=(u=l.options.priority)!==null&&u!==void 0?u:0,R=(f=p?.options.priority)!==null&&f!==void 0?f:0;(!p||R<=T)&&i.set(d,l)};this.collector=o,this.iterateAstFormatting(e,n);let s=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,s)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let s=e.offsetAt(i.range.start),a=e.offsetAt(o.range.end);s<a&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=Fe(n).iterator(),o;do if(o=i.next(),!o.done){let s=o.value;this.insideRange(s.$cstNode.range,r)?this.format(s):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},s=[],c=this.iterateCstTree(e,o).iterator(),l,u;do if(u=c.next(),!u.done){let f=u.value,d=li(f),p=this.nodeModeToKey(f,"prepend"),T=r.get(p);if(r.delete(p),T){let S=this.createTextEdit(l,f,T,o);for(let h of S)h&&this.insideRange(h.range,i)&&this.isNecessary(h,e.textDocument)&&s.push(h)}let R=this.nodeModeToKey(f,"append"),b=r.get(R);if(r.delete(R),b){let S=SS(f);if(S){let h=this.createTextEdit(f,S,b,o);for(let m of h)m&&this.insideRange(m.range,i)&&this.isNecessary(m,e.textDocument)&&s.push(m)}}if(!T&&f.hidden){let S=this.createHiddenTextEdits(l,f,void 0,o);for(let h of S)h&&this.insideRange(h.range,i)&&this.isNecessary(h,e.textDocument)&&s.push(h)}d&&(l=f)}while(!u.done);return s}createHiddenTextEdits(e,r,n,i){var o;let s=r.range.start.line;if(e&&e.range.end.line===s)return[];let a=[],c={start:{character:0,line:s},end:r.range.start},l=i.document.getText(c),u=this.findFittingMove(c,(o=n?.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(l,i),p=this.getIndentationCharacterCount(i,u)-f;if(p===0)return[];let T="";p>0&&(T=(i.options.insertSpaces?" ":"	").repeat(p));let R=r.text.split(`
`);R[0]=l+R[0];for(let b=0;b<R.length;b++){let S=s+b,h={character:0,line:S};if(p>0)a.push({newText:T,range:{start:h,end:h}});else{let m=R[b],A=0;for(;A<m.length;A++){let E=m.charAt(A);if(E!==" "&&E!=="	")break}a.push({newText:"",range:{start:h,end:{line:S,character:Math.min(A,Math.abs(p))}}})}}return a}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let s={start:(o=e?.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},a=this.findFittingMove(s,n.moves,i);if(!a)return[];let c=a.characters,l=a.lines,u=a.tabs,f=i.indentation;i.indentation+=u??0;let d=[];return c!==void 0?d.push(this.createSpaceTextEdit(s,c,n.options)):l!==void 0?d.push(this.createLineTextEdit(s,l,i,n.options)):u!==void 0&&d.push(this.createTabTextEdit(s,!!e,i)),li(r)&&(i.indentation=f),d}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${a}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),s=r?1:0,a=Math.max(e.end.line-e.start.line,s);return{newText:`${`
`.repeat(a)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new Dr(i,o=>this.iterateCst(o,r)):Ko}iterateCst(e,r){if(!Br(e))return Ko;let n=r.indentation;return new xr(()=>({index:0}),i=>i.index<e.content.length?{done:!1,value:e.content[i.index++]}:(r.indentation=n,Zt))}},Gg=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new Jr(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new Jr(r,this.collector)}property(e,r){let n=Ot(this.astNode.$cstNode,e,r);return new Jr(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=mi(this.astNode.$cstNode,n);r.push(...i)}return new Jr(r,this.collector)}keyword(e,r){let n=Lr(this.astNode.$cstNode,e,r);return new Jr(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=Wu(this.astNode.$cstNode,n);r.push(...i)}return new Jr(r,this.collector)}cst(e){return new Jr([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new Jr([],this.collector);let o=n[0],s=i[0];if(o.offset>s.offset){let a=o;o=s,s=a}return new Jr(AS(o,s),this.collector)}},Jr=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},j;(function(t){function e(...u){return{options:{},moves:u.flatMap(f=>f.moves).sort(l)}}t.fit=e;function r(u){return i(0,u)}t.noSpace=r;function n(u){return i(1,u)}t.oneSpace=n;function i(u,f){return{options:f??{},moves:[{characters:u}]}}t.spaces=i;function o(u){return s(1,u)}t.newLine=o;function s(u,f){return{options:f??{},moves:[{lines:u}]}}t.newLines=s;function a(u){return{options:u??{},moves:[{tabs:1,lines:1}]}}t.indent=a;function c(u){return{options:u??{},moves:[{tabs:0}]}}t.noIndent=c;function l(u,f){var d,p,T,R,b,S;let h=(d=u.lines)!==null&&d!==void 0?d:0,m=(p=f.lines)!==null&&p!==void 0?p:0,A=(T=u.tabs)!==null&&T!==void 0?T:0,E=(R=f.tabs)!==null&&R!==void 0?R:0,V=(b=u.characters)!==null&&b!==void 0?b:0,_t=(S=f.characters)!==null&&S!==void 0?S:0;return h<m?-1:h>m?1:A<E?-1:A>E?1:V<_t?-1:V>_t?1:0}})(j||(j={}));var jg=j.fit(j.oneSpace(),j.indent()),Bu=class extends Ku{format(e){if(It(e))this.getNodeFormatter(e).properties("type","terminal").surround(j.noSpace());else if(M(e)){let r=this.getNodeFormatter(e);r.keywords("entry","fragment","returns").append(j.oneSpace()),(e.inferredType||e.returnType||e.dataType)&&e.parameters.length===0?r.property("name").append(j.oneSpace()):r.property("name").append(j.noSpace()),r.properties("parameters").append(j.noSpace()),r.keywords(",").append(j.oneSpace()),r.keywords("<").append(j.noSpace());let n=r.keyword(";"),i=r.keyword(":");i.prepend(j.noSpace()),r.interior(i,n).prepend(j.indent()),n.prepend(j.fit(j.noSpace(),j.newLine())),r.node(e).prepend(j.noIndent())}else if(pe(e)){let r=this.getNodeFormatter(e);e.type&&(r.property("name").append(j.oneSpace()),r.keyword("returns").append(j.oneSpace())),r.keywords("hidden","terminal","fragment").append(j.oneSpace()),r.keyword(":").prepend(j.noSpace()),r.keyword(";").prepend(j.fit(j.noSpace(),j.newLine())),r.node(e).prepend(j.noIndent())}else if(ye(e)){let r=this.getNodeFormatter(e);r.keyword("{").append(j.noSpace()),r.keywords(".","+=","=").surround(j.noSpace()),r.keyword("}").prepend(j.noSpace())}else if(Bo(e))this.getNodeFormatter(e).keywords("infer","infers").append(j.oneSpace());else if(ce(e))this.getNodeFormatter(e).keywords("=","+=","?=").surround(j.noSpace());else if(Te(e)){let r=this.getNodeFormatter(e);r.keyword("<").surround(j.noSpace()),r.keyword(",").append(j.oneSpace()),r.properties("arguments").append(j.noSpace())}else if(Ht(e)){let r=this.getNodeFormatter(e);r.keyword("interface").append(j.oneSpace()),r.keyword("extends").prepend(j.oneSpace()).append(jg),r.keywords(",").prepend(j.noSpace()).append(jg);let n=r.keyword("{");n.prepend(j.fit(j.oneSpace(),j.newLine()));let i=r.keyword("}");i.prepend(j.newLine()),r.interior(n,i).prepend(j.indent())}else if(ut(e)){let r=this.getNodeFormatter(e);r.keyword("type").append(j.oneSpace()),r.keyword("=").prepend(j.oneSpace()).append(jg),r.keyword(";").prepend(j.noSpace()).append(j.newLine())}else if(di(e)){let r=this.getNodeFormatter(e);r.nodes(...e.rules,...e.interfaces,...e.types,...e.imports).prepend(j.noIndent()),r.keyword("grammar").prepend(j.noSpace()).append(j.oneSpace())}Wo(e)&&this.getNodeFormatter(e).property("cardinality").prepend(j.noSpace())}};var Mn=se(de(),1);var Q=se(de(),1);var Kg={[Q.SemanticTokenTypes.class]:0,[Q.SemanticTokenTypes.comment]:1,[Q.SemanticTokenTypes.enum]:2,[Q.SemanticTokenTypes.enumMember]:3,[Q.SemanticTokenTypes.event]:4,[Q.SemanticTokenTypes.function]:5,[Q.SemanticTokenTypes.interface]:6,[Q.SemanticTokenTypes.keyword]:7,[Q.SemanticTokenTypes.macro]:8,[Q.SemanticTokenTypes.method]:9,[Q.SemanticTokenTypes.modifier]:10,[Q.SemanticTokenTypes.namespace]:11,[Q.SemanticTokenTypes.number]:12,[Q.SemanticTokenTypes.operator]:13,[Q.SemanticTokenTypes.parameter]:14,[Q.SemanticTokenTypes.property]:15,[Q.SemanticTokenTypes.regexp]:16,[Q.SemanticTokenTypes.string]:17,[Q.SemanticTokenTypes.struct]:18,[Q.SemanticTokenTypes.type]:19,[Q.SemanticTokenTypes.typeParameter]:20,[Q.SemanticTokenTypes.variable]:21,[Q.SemanticTokenTypes.decorator]:22},gb={[Q.SemanticTokenModifiers.abstract]:1,[Q.SemanticTokenModifiers.async]:2,[Q.SemanticTokenModifiers.declaration]:4,[Q.SemanticTokenModifiers.defaultLibrary]:8,[Q.SemanticTokenModifiers.definition]:16,[Q.SemanticTokenModifiers.deprecated]:32,[Q.SemanticTokenModifiers.documentation]:64,[Q.SemanticTokenModifiers.modification]:128,[Q.SemanticTokenModifiers.readonly]:256,[Q.SemanticTokenModifiers.static]:512},yb={legend:{tokenTypes:Object.keys(Kg),tokenModifiers:Object.keys(gb)},full:{delta:!0},range:!0},Hg=class extends Q.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,r,n,i,o){this._tokens.push({line:e,char:r,length:n,tokenType:i,tokenModifiers:o})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}flush(){this.previousResult(this.id)}applyTokens(){for(let e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,r){return e.line===r.line?e.char-r.char:e.line-r.line}},zu=class{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(r=>{this.tokensBuilders.delete(r.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(r=>{var n;this.initialize((n=r.capabilities.textDocument)===null||n===void 0?void 0:n.semanticTokens)})}initialize(e){this.clientCapabilities=e}async semanticHighlight(e,r,n=Q.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}async semanticHighlightRange(e,r,n=Q.CancellationToken.None){return this.currentRange=r.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}async semanticHighlightDelta(e,r,n=Q.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(r.previousResultId),await this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.buildEdits()}createAcceptor(){return r=>{"line"in r?this.highlightToken({range:{start:{line:r.line,character:r.char},end:{line:r.line,character:r.char+r.length}},type:r.type,modifier:r.modifier}):"range"in r?this.highlightToken(r):"keyword"in r?this.highlightKeyword(r):"property"in r?this.highlightProperty(r):this.highlightNode({node:r.cst,type:r.type,modifier:r.modifier})}}getDocumentTokensBuilder(e){let r=this.tokensBuilders.get(e.uri.toString());if(r)return r;let n=new Hg;return this.tokensBuilders.set(e.uri.toString(),n),n}async computeHighlighting(e,r,n){let i=e.parseResult.value,o=Nn(i,{range:this.currentRange}).iterator(),s;do if(s=o.next(),!s.done){await Ue(n);let a=s.value;this.highlightElement(a,r)==="prune"&&o.prune()}while(!s.done)}highlightToken(e){var r;let{range:n,type:i}=e,o=e.modifier;if(this.currentRange&&!su(n,this.currentRange)||!this.currentDocument||!this.currentTokensBuilder)return;let s=Kg[i],a=0;if(o!==void 0){typeof o=="string"&&(o=[o]);for(let u of o){let f=gb[u];a|=f}}let c=n.start.line,l=n.end.line;if(c===l){let u=n.start.character,f=n.end.character-u;this.currentTokensBuilder.push(c,u,f,s,a)}else if(!((r=this.clientCapabilities)===null||r===void 0)&&r.multilineTokenSupport){let u=n.start.character,f=this.currentDocument.textDocument.offsetAt(n.start),d=this.currentDocument.textDocument.offsetAt(n.end);this.currentTokensBuilder.push(c,u,d-f,s,a)}else{let u=n.start,f=this.currentDocument.textDocument.offsetAt({line:c+1,character:0});this.currentTokensBuilder.push(u.line,u.character,f-u.character-1,s,a);for(let d=c+1;d<l;d++){let p=f;f=this.currentDocument.textDocument.offsetAt({line:d+1,character:0}),this.currentTokensBuilder.push(d,0,f-p-1,s,a)}this.currentTokensBuilder.push(l,0,n.end.character,s,a)}}highlightProperty(e){let r=[];if(typeof e.index=="number"){let o=Ot(e.node.$cstNode,e.property,e.index);o&&r.push(o)}else r.push(...mi(e.node.$cstNode,e.property));let{type:n,modifier:i}=e;for(let o of r)this.highlightNode({node:o,type:n,modifier:i})}highlightKeyword(e){let{node:r,keyword:n,type:i,index:o,modifier:s}=e,a=[];if(typeof o=="number"){let c=Lr(r.$cstNode,n,o);c&&a.push(c)}else a.push(...Wu(r.$cstNode,n));for(let c of a)this.highlightNode({node:c,type:i,modifier:s})}highlightNode(e){let{node:r,type:n,modifier:i}=e,o=r.range;this.highlightToken({range:o,type:n,modifier:i})}},hb;(function(t){function e(n,i){let o=new Map;Object.entries(Kg).forEach(([c,l])=>o.set(l,c));let s=0,a=0;return r(n.data,5).map(c=>{s+=c[0],c[0]!==0&&(a=0),a+=c[1];let l=c[2];return{offset:i.textDocument.offsetAt({line:s,character:a}),tokenType:o.get(c[3]),tokenModifiers:c[4],text:i.textDocument.getText({start:{line:s,character:a},end:{line:s,character:a+l}})}})}t.decode=e;function r(n,i){let o=[];for(let s=0;s<n.length;s+=i){let a=n.slice(s,s+i);o.push(a)}return o}})(hb||(hb={}));var Vu=class extends zu{highlightElement(e,r){var n;ce(e)?r({node:e,property:"feature",type:Mn.SemanticTokenTypes.property}):ye(e)?e.feature&&r({node:e,property:"feature",type:Mn.SemanticTokenTypes.property}):Vo(e)?r({node:e,property:"name",type:Mn.SemanticTokenTypes.type}):Kt(e)?(e.primitiveType||e.typeRef)&&r({node:e,property:e.primitiveType?"primitiveType":"typeRef",type:Mn.SemanticTokenTypes.type}):US(e)?r({node:e,property:"name",type:Mn.SemanticTokenTypes.parameter}):zo(e)?r({node:e,property:"parameter",type:Mn.SemanticTokenTypes.parameter}):Te(e)?!((n=e.rule.ref)===null||n===void 0)&&n.fragment&&r({node:e,property:"rule",type:Mn.SemanticTokenTypes.type}):uu(e)&&r({node:e,property:"name",type:Mn.SemanticTokenTypes.property})}};var Xu=class extends es{getName(e){return ce(e)?e.feature:super.getName(e)}getNameNode(e){return ce(e)?Ot(e.$cstNode,"feature"):super.getNameNode(e)}};var ys=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=Ts(e),n=e.astNode;if(r&&n){let i=n[r.feature];if(_n(i))return i.ref;if(Array.isArray(i)){for(let o of i)if(_n(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||xS(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n??r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(i=i.filter(o=>le.equals(o.sourceUri,r.documentUri))),n.push(...i),J(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=Y(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:jt(r),local:!0}}}};var Yu=class extends ys{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}findDeclaration(e){let r=e.astNode,n=Ts(e);if(n&&n.feature==="feature"){if(ce(r))return this.findAssignmentDeclaration(r);if(ye(r))return this.findActionDeclaration(r)}return super.findDeclaration(e)}findReferences(e,r){var n;return uu(e)?this.findReferencesToTypeAttribute(e,(n=r.includeDeclaration)!==null&&n!==void 0?n:!1):super.findReferences(e,r)}findReferencesToTypeAttribute(e,r){let n=[],i=xe(e,Ht);if(i){if(r){let a=this.getReferenceToSelf(e);a&&n.push(a)}let o=gg(i,this,this.documents,this.nodeLocator),s=[];o.forEach(a=>{let c=this.findRulesWithReturnType(a);s.push(...c)}),s.forEach(a=>{let c=this.createReferencesToAttribute(a,e);n.push(...c)})}return J(n)}createReferencesToAttribute(e,r){let n=[];if(M(e)){let i=ss(e.definition).find(o=>o.feature===r.name);if(i?.$cstNode){let o=this.nameProvider.getNameNode(i);o&&n.push({sourceUri:Y(i).uri,sourcePath:this.nodeLocator.getAstNodePath(i),targetUri:Y(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:jt(o),local:le.equals(Y(i).uri,Y(r).uri)})}}else{if(e.feature===r.name){let o=Ot(e.$cstNode,"feature");o&&n.push({sourceUri:Y(e).uri,sourcePath:this.nodeLocator.getAstNodePath(e),targetUri:Y(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:jt(o),local:le.equals(Y(e).uri,Y(r).uri)})}let i=xe(e,M);n.push(...this.createReferencesToAttribute(i,r))}return n}findAssignmentDeclaration(e){var r;let n=xe(e,M),i=$g(e);if(i){let o=this.findActionDeclaration(i,e.feature);if(o)return o}if(!((r=n?.returnType)===null||r===void 0)&&r.ref&&(Ht(n.returnType.ref)||ut(n.returnType.ref))){let o=Ga(n.returnType.ref);for(let s of o){let a=s.attributes.find(c=>c.name===e.feature);if(a)return a}}return e}findActionDeclaration(e,r){var n;if(!((n=e.type)===null||n===void 0)&&n.ref){let i=r??e.feature,o=Ga(e.type.ref);for(let s of o){let a=s.attributes.find(c=>c.name===i);if(a)return a}}}findRulesWithReturnType(e){let r=[];return this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e)).forEach(i=>{let o=this.documents.getOrCreateDocument(i.sourceUri),s=this.nodeLocator.getAstNode(o.parseResult.value,i.sourcePath);(M(s)||ye(s))&&r.push(s)}),r}};var rc=se(de(),1);var Tb=se(de(),1);var Ju=class{constructor(e){this.grammarConfig=e.parser.GrammarConfig,this.nameProvider=e.references.NameProvider,this.documents=e.shared.workspace.LangiumDocuments,this.references=e.references.References}prepareCallHierarchy(e,r){let n=e.parseResult.value,i=ht(n.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclarationNode(i);if(o)return this.getCallHierarchyItems(o.astNode,e)}getCallHierarchyItems(e,r){let n=this.nameProvider.getNameNode(e),i=this.nameProvider.getName(e);if(!(!n||!e.$cstNode||i===void 0))return[Object.assign({kind:Tb.SymbolKind.Method,name:i,range:e.$cstNode.range,selectionRange:n.range,uri:r.uri.toString()},this.getCallHierarchyItem(e))]}getCallHierarchyItem(e){}incomingCalls(e){let r=this.documents.getOrCreateDocument(bt.parse(e.item.uri)),n=r.parseResult.value,i=ht(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findReferences(i.astNode,{includeDeclaration:!1});return this.getIncomingCalls(i.astNode,o)}outgoingCalls(e){let r=this.documents.getOrCreateDocument(bt.parse(e.item.uri)),n=r.parseResult.value,i=ht(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(i)return this.getOutgoingCalls(i.astNode)}};var xb=se(de(),1);var xs=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=ht(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[xb.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.astNode.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.astNode){let n=Y(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var vb=se(de(),1);var Qu=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=ht(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let s=le.equals(Y(o).uri,e.uri),a={documentUri:e.uri,includeDeclaration:s};return this.references.findReferences(o,a).map(l=>this.createDocumentHighlight(l)).toArray()}}createDocumentHighlight(e){return vb.DocumentHighlight.create(e.segment.range)}};var Zu=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o??i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of pi(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}};var uI=se(de(),1);var ef=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,s=r.length;for(let a=0;a<s;a++){let c=r.charCodeAt(a),l=e.charCodeAt(o);if((c===l||this.toUpperCharCode(c)===this.toUpperCharCode(l))&&(n||(n=i===void 0||this.isWordTransition(i,c)),n&&o++,o===e.length))return!0;i=c}return!1}isWordTransition(e,r){return Rb<=e&&e<=Sb&&fI<=r&&r<=dI||e===Ab&&r!==Ab}toUpperCharCode(e){return Rb<=e&&e<=Sb?e-32:e}},Rb=97,Sb=122,fI=65,dI=90,Ab=95;var Wg=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let s=e.textDocument.offsetAt(r.position),a=ht(o,s,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>s){let c=this.references.findDeclaration(a);if(c)return this.getAstNodeHoverContent(c)}}}},tf=class extends Wg{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var pI=se(de(),1);var mI=se(de(),1);var Ur=se(de(),1);var Oe;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(Oe||(Oe={}));var rf=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}fromTextDocument(e,r){return this.create(r??bt.parse(e.uri),e)}fromString(e,r){return this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(r??(r=this.textDocuments.get(e.toString())),r??(r=this.getContentFromFileSystem(e)),typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:Oe.Parsed,references:[],textDocument:n};else{let s=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:Oe.Parsed,references:[],get textDocument(){return s()}}}return e.value.$document=o,o}update(e){let r=this.textDocuments.get(e.uri.toString()),n=r?r.getText():this.getContentFromFileSystem(e.uri);if(r)Object.defineProperty(e,"textDocument",{value:r});else{let i=this.createTextDocumentGetter(e.uri,n);Object.defineProperty(e,"textDocument",{get:i})}return e.parseResult=this.parse(e.uri,n),e.parseResult.value.$document=e,e}getContentFromFileSystem(e){return this.fileSystemProvider.readFileSync(e)}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i??(i=jo.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}},nf=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return J(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getOrCreateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n||(n=this.langiumDocumentFactory.create(e),this.documentMap.set(r,n),n)}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=Oe.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=Oe.Changed,this.documentMap.delete(r)),n}};var hI=se(de(),1);function bb(t){let e=[],r=[];t.forEach(i=>{i?.triggerCharacters&&e.push(...i.triggerCharacters),i?.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var of=class{constructor(e){this.onInitializeEmitter=new Ur.Emitter,this.onInitializedEmitter=new Ur.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){cu(this.services),this.services.ServiceRegistry.all.forEach(e=>cu(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var r;let n=this.services.ServiceRegistry.all,i=this.hasService(x=>x.lsp.Formatter),o=n.map(x=>{var I;return(I=x.lsp.Formatter)===null||I===void 0?void 0:I.formatOnTypeOptions}).find(x=>!!x),s=this.hasService(x=>x.lsp.CodeActionProvider),a=this.hasService(x=>x.lsp.SemanticTokenProvider),c=(r=this.services.lsp.ExecuteCommandHandler)===null||r===void 0?void 0:r.commands,l=this.hasService(x=>x.lsp.DocumentLinkProvider),u=bb(n.map(x=>{var I;return(I=x.lsp.SignatureHelp)===null||I===void 0?void 0:I.signatureHelpOptions})),f=this.hasService(x=>x.lsp.TypeProvider),d=this.hasService(x=>x.lsp.ImplementationProvider),p=this.hasService(x=>x.lsp.CompletionProvider),T=mb(n.map(x=>{var I;return(I=x.lsp.CompletionProvider)===null||I===void 0?void 0:I.completionOptions})),R=this.hasService(x=>x.lsp.ReferencesProvider),b=this.hasService(x=>x.lsp.DocumentSymbolProvider),S=this.hasService(x=>x.lsp.DefinitionProvider),h=this.hasService(x=>x.lsp.DocumentHighlightProvider),m=this.hasService(x=>x.lsp.FoldingRangeProvider),A=this.hasService(x=>x.lsp.HoverProvider),E=this.hasService(x=>x.lsp.RenameProvider),V=this.hasService(x=>x.lsp.CallHierarchyProvider),_t=this.hasService(x=>x.lsp.CodeLensProvider),rt=this.hasService(x=>x.lsp.DeclarationProvider),gr=this.hasService(x=>x.lsp.InlayHintProvider),Xt=this.services.lsp.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0}},executeCommandProvider:c&&{commands:c},textDocumentSync:Ur.TextDocumentSyncKind.Incremental,completionProvider:p?T:void 0,referencesProvider:R,documentSymbolProvider:b,definitionProvider:S,typeDefinitionProvider:f,documentHighlightProvider:h,codeActionProvider:s,documentFormattingProvider:i,documentRangeFormattingProvider:i,documentOnTypeFormattingProvider:o,foldingRangeProvider:m,hoverProvider:A,renameProvider:E?{prepareProvider:!0}:void 0,semanticTokensProvider:a?yb:void 0,signatureHelpProvider:u,implementationProvider:d,callHierarchyProvider:V?{}:void 0,documentLinkProvider:l?{resolveProvider:!1}:void 0,codeLensProvider:_t?{resolveProvider:!1}:void 0,declarationProvider:rt,inlayHintProvider:gr?{resolveProvider:!1}:void 0,workspaceSymbolProvider:Xt?{resolveProvider:!!Xt.resolveSymbol}:void 0}}}async initialized(e){this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}};function kb(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");gI(e,t),yI(e,t),TI(e,t),xI(e,t),RI(e,t),SI(e,t),AI(e,t),bI(e,t),kI(e,t),EI(e,t),_I(e,t),vI(e,t),$I(e,t),CI(e,t),NI(e,t),PI(e,t),DI(e,t),LI(e,t),UI(e,t),MI(e,t),OI(e,t),II(e,t),wI(e,t),FI(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}function gI(t,e){let r=e.workspace.DocumentBuilder,n=e.workspace.MutexLock;function i(s,a){n.lock(c=>r.update(s,a,c))}e.workspace.TextDocuments.onDidChangeContent(s=>{i([bt.parse(s.document.uri)],[])}),t.onDidChangeWatchedFiles(s=>{let a=[],c=[];for(let l of s.changes){let u=bt.parse(l.uri);l.type===Ur.FileChangeType.Deleted?c.push(u):a.push(u)}i(a,c)})}function yI(t,e){e.workspace.DocumentBuilder.onBuildPhase(Oe.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}function TI(t,e){t.onCompletion(Bt((r,n,i,o)=>{var s;return(s=r.lsp.CompletionProvider)===null||s===void 0?void 0:s.getCompletion(n,i,o)},e))}function xI(t,e){t.onReferences(Bt((r,n,i,o)=>{var s;return(s=r.lsp.ReferencesProvider)===null||s===void 0?void 0:s.findReferences(n,i,o)},e))}function vI(t,e){t.onCodeAction(Bt((r,n,i,o)=>{var s;return(s=r.lsp.CodeActionProvider)===null||s===void 0?void 0:s.getCodeActions(n,i,o)},e))}function RI(t,e){t.onDocumentSymbol(Bt((r,n,i,o)=>{var s;return(s=r.lsp.DocumentSymbolProvider)===null||s===void 0?void 0:s.getSymbols(n,i,o)},e))}function SI(t,e){t.onDefinition(Bt((r,n,i,o)=>{var s;return(s=r.lsp.DefinitionProvider)===null||s===void 0?void 0:s.getDefinition(n,i,o)},e))}function AI(t,e){t.onTypeDefinition(Bt((r,n,i,o)=>{var s;return(s=r.lsp.TypeProvider)===null||s===void 0?void 0:s.getTypeDefinition(n,i,o)},e))}function bI(t,e){t.onImplementation(Bt((r,n,i,o)=>{var s;return(s=r.lsp.ImplementationProvider)===null||s===void 0?void 0:s.getImplementation(n,i,o)},e))}function wI(t,e){t.onDeclaration(Bt((r,n,i,o)=>{var s;return(s=r.lsp.DeclarationProvider)===null||s===void 0?void 0:s.getDeclaration(n,i,o)},e))}function kI(t,e){t.onDocumentHighlight(Bt((r,n,i,o)=>{var s;return(s=r.lsp.DocumentHighlightProvider)===null||s===void 0?void 0:s.getDocumentHighlight(n,i,o)},e))}function CI(t,e){t.onHover(Bt((r,n,i,o)=>{var s;return(s=r.lsp.HoverProvider)===null||s===void 0?void 0:s.getHoverContent(n,i,o)},e))}function EI(t,e){t.onFoldingRanges(Bt((r,n,i,o)=>{var s;return(s=r.lsp.FoldingRangeProvider)===null||s===void 0?void 0:s.getFoldingRanges(n,i,o)},e))}function _I(t,e){t.onDocumentFormatting(Bt((r,n,i,o)=>{var s;return(s=r.lsp.Formatter)===null||s===void 0?void 0:s.formatDocument(n,i,o)},e)),t.onDocumentRangeFormatting(Bt((r,n,i,o)=>{var s;return(s=r.lsp.Formatter)===null||s===void 0?void 0:s.formatDocumentRange(n,i,o)},e)),t.onDocumentOnTypeFormatting(Bt((r,n,i,o)=>{var s;return(s=r.lsp.Formatter)===null||s===void 0?void 0:s.formatDocumentOnType(n,i,o)},e))}function $I(t,e){t.onRenameRequest(Bt((r,n,i,o)=>{var s;return(s=r.lsp.RenameProvider)===null||s===void 0?void 0:s.rename(n,i,o)},e)),t.onPrepareRename(Bt((r,n,i,o)=>{var s;return(s=r.lsp.RenameProvider)===null||s===void 0?void 0:s.prepareRename(n,i,o)},e))}function NI(t,e){t.languages.inlayHint.on(yi((r,n,i,o)=>{var s;return(s=r.lsp.InlayHintProvider)===null||s===void 0?void 0:s.getInlayHints(n,i,o)},e))}function PI(t,e){let r={data:[]};t.languages.semanticTokens.on(yi((n,i,o,s)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,s):r,e)),t.languages.semanticTokens.onDelta(yi((n,i,o,s)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,s):r,e)),t.languages.semanticTokens.onRange(yi((n,i,o,s)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,s):r,e))}function II(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function DI(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(s){return vs(s)}})}function OI(t,e){t.onDocumentLinks(yi((r,n,i,o)=>{var s;return(s=r.lsp.DocumentLinkProvider)===null||s===void 0?void 0:s.getDocumentLinks(n,i,o)},e))}function LI(t,e){t.onSignatureHelp(yi((r,n,i,o)=>{var s;return(s=r.lsp.SignatureHelp)===null||s===void 0?void 0:s.provideSignatureHelp(n,i,o)},e))}function MI(t,e){t.onCodeLens(yi((r,n,i,o)=>{var s;return(s=r.lsp.CodeLensProvider)===null||s===void 0?void 0:s.provideCodeLens(n,i,o)},e))}function FI(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){t.onWorkspaceSymbol(async(o,s)=>{try{return await n.getSymbols(o,s)}catch(a){return vs(a)}});let i=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);i&&t.onWorkspaceSymbolResolve(async(o,s)=>{try{return await i(o,s)}catch(a){return vs(a)}})}}function UI(t,e){t.languages.callHierarchy.onPrepare(yi((r,n,i,o)=>{var s;return r.lsp.CallHierarchyProvider&&(s=r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,i,o))!==null&&s!==void 0?s:null},e)),t.languages.callHierarchy.onIncomingCalls(wb((r,n,i)=>{var o;return r.lsp.CallHierarchyProvider&&(o=r.lsp.CallHierarchyProvider.incomingCalls(n,i))!==null&&o!==void 0?o:null},e)),t.languages.callHierarchy.onOutgoingCalls(wb((r,n,i)=>{var o;return r.lsp.CallHierarchyProvider&&(o=r.lsp.CallHierarchyProvider.outgoingCalls(n,i))!==null&&o!==void 0?o:null},e))}function wb(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=bt.parse(n.item.uri),s=r.getServices(o);if(!s){let a=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(a),new Error(a)}try{return await t(s,n,i)}catch(a){return vs(a)}}}function yi(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let s=bt.parse(i.textDocument.uri),a=n.getServices(s);if(!a)throw console.error(`Could not find service instance for uri: '${s.toString()}'`),new Error;let c=r.getOrCreateDocument(s);if(!c)throw new Error;try{return await t(a,c,i,o)}catch(l){return vs(l)}}}function Bt(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let s=bt.parse(i.textDocument.uri),a=n.getServices(s);if(!a)return console.error(`Could not find service instance for uri: '${s.toString()}'`),null;let c=r.getOrCreateDocument(s);if(!c)return null;try{return await t(a,c,i,o)}catch(l){return vs(l)}}}function vs(t){if(Qi(t))return new Ur.ResponseError(Ur.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof Ur.ResponseError)return t;throw t}var af=se(de(),1),sf=class{getSymbolKind(){return af.SymbolKind.Field}getCompletionItemKind(){return af.CompletionItemKind.Reference}};var Cb=se(de(),1);var cf=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=ht(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let s={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,s).forEach(a=>{i.push(Cb.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}};var Eb=se(de(),1);var lf=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),s=ht(i,o,this.grammarConfig.nameRegexp);if(!s)return;let a=this.references.findDeclaration(s);if(!a)return;let c={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(a,c).forEach(u=>{let f=Eb.TextEdit.replace(u.segment.range,r.newName),d=u.sourceUri.toString();n[d]?n[d].push(f):n[d]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=ht(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.astNode&&ja(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var qI=se(de(),1);var _b=se(de(),1);var uf=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=_b.CancellationToken.None){let n=[],i=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await Ue(r),this.fuzzyMatcher.match(i,o.name)){let s=this.getWorkspaceSymbol(o);s&&n.push(s)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};var ff=class extends xs{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}collectLocationLinks(e,r){var n,i,o,s,a,c;let l="path";if(lu(e.astNode)&&((n=Ts(e))===null||n===void 0?void 0:n.feature)===l){let u=On(this.documents,e.astNode);if(u?.$document){let f=(i=this.findTargetObject(u))!==null&&i!==void 0?i:u,d=(s=(o=this.nameProvider.getNameNode(f))===null||o===void 0?void 0:o.range)!==null&&s!==void 0?s:rc.Range.create(0,0,0,0),p=(c=(a=f.$cstNode)===null||a===void 0?void 0:a.range)!==null&&c!==void 0?c:rc.Range.create(0,0,0,0);return[rc.LocationLink.create(u.$document.uri.toString(),p,d,e.range)]}return}return super.collectLocationLinks(e,r)}findTargetObject(e){return e.isDeclared?e:pi(e).head()}};var Bg=se(de(),1);var df=class extends Ju{getIncomingCalls(e,r){if(!M(e))return;let n=new Map;if(r.forEach(i=>{let s=this.documents.getOrCreateDocument(i.sourceUri).parseResult.value;if(!s.$cstNode)return;let a=fi(s.$cstNode,i.segment.offset);if(!a)return;let c=xe(a.astNode,M);if(!c||!c.$cstNode)return;let l=this.nameProvider.getNameNode(c);if(!l)return;let u=i.sourceUri.toString(),f=u+"@"+l.text;n.has(f)?n.set(f,{parserRule:c.$cstNode,nameNode:l,targetNodes:[...n.get(f).targetNodes,a],docUri:u}):n.set(f,{parserRule:c.$cstNode,nameNode:l,targetNodes:[a],docUri:u})}),n.size!==0)return Array.from(n.values()).map(i=>({from:{kind:Bg.SymbolKind.Method,name:i.nameNode.text,range:i.parserRule.range,selectionRange:i.nameNode.range,uri:i.docUri},fromRanges:i.targetNodes.map(o=>o.range)}))}getOutgoingCalls(e){if(!M(e))return;let r=Fe(e).filter(Te).toArray(),n=new Map;if(r.forEach(i=>{var o;let s=i.$cstNode;if(!s)return;let a=(o=i.rule.ref)===null||o===void 0?void 0:o.$cstNode;if(!a)return;let c=this.nameProvider.getNameNode(a.astNode);if(!c)return;let l=Y(a.astNode).uri.toString(),u=l+"@"+c.text;n.has(u)?n.set(u,{refCstNode:a,to:c,from:[...n.get(u).from,s.range],docUri:l}):n.set(u,{refCstNode:a,to:c,from:[s.range],docUri:l})}),n.size!==0)return Array.from(n.values()).map(i=>({to:{kind:Bg.SymbolKind.Method,name:i.to.text,range:i.refCstNode.range,selectionRange:i.to.range,uri:i.docUri},fromRanges:i.from}))}};var pf=class{constructor(e){this.documents=e.shared.workspace.LangiumDocuments}collectValidationResources(e){let r=cb(e,this.documents);return{typeToValidationInfo:this.collectValidationInfo(r),typeToSuperProperties:this.collectSuperProperties(r)}}collectValidationInfo({astResources:e,inferred:r,declared:n}){let i=new Map,o=GI(e);for(let a of Su(r))i.set(a.name,{inferred:a,inferredNodes:o.get(a.name)});let s=J(e.interfaces).concat(e.types).reduce((a,c)=>a.set(c.name,c),new Map);for(let a of Su(n)){let c=s.get(a.name);if(c){let l=i.get(a.name);i.set(a.name,Object.assign(Object.assign({},l??{}),{declared:a,declaredNode:c}))}}return i}collectSuperProperties({inferred:e,declared:r}){let n=new Map,i=yg(e,r),o=new Map(i.map(s=>[s.name,s]));for(let s of yg(e,r))n.set(s.name,this.addSuperProperties(s,o,new Set));return n}addSuperProperties(e,r,n){if(n.has(e.name))return[];n.add(e.name);let i=[...e.properties];for(let o of e.superTypes){let s=r.get(o.name);s&&i.push(...this.addSuperProperties(s,r,n))}return i}};function GI({parserRules:t,datatypeRules:e}){let r=new Ae;J(t).concat(e).forEach(i=>r.add(eo(i),i));function n(i){if(ye(i)){let o=cs(i);o&&r.add(o,i)}(vr(i)||At(i)||Rr(i))&&i.elements.forEach(o=>n(o))}return t.forEach(i=>n(i.definition)),r}function $b(t){return t&&"declared"in t}function Nb(t){return t&&"inferred"in t}function Pb(t){return t&&"inferred"in t&&"declared"in t}function Db(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarTypesValidator,n={Action:[r.checkActionIsNotUnionType],Grammar:[r.checkDeclaredTypesConsistency,r.checkDeclaredAndInferredTypesConsistency],Interface:[r.checkCyclicInterface],Type:[r.checkCyclicType]};e.register(n,r)}var mf=class{checkCyclicType(e,r){Ti(e,new Set)&&r("error",`Type alias '${e.name}' circularly references itself.`,{node:e,property:"name"})}checkCyclicInterface(e,r){Ti(e,new Set)&&r("error",`Type '${e.name}' recursively references itself as a base type.`,{node:e,property:"name"})}checkDeclaredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i){for(let o of i.typeToValidationInfo.values())if($b(o)&&Xr(o.declared)&&Ht(o.declaredNode)){let s=o;HI(s,r),KI(s,r)}}}checkDeclaredAndInferredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i)for(let o of i.typeToValidationInfo.values())Nb(o)&&o.inferred instanceof Zo&&jI(o.inferred,r),Pb(o)&&zI(o,i,r)}checkActionIsNotUnionType(e,r){ut(e.type)&&r("error","Actions cannot create union types.",{node:e,property:"type"})}};function Ti(t,e){var r;if(e.has(t))return!0;if(e.add(t),ut(t))return Ti(t.type,e);if(Ht(t))return t.superTypes.some(n=>n.ref&&Ti(n.ref,new Set(e)));if(Kt(t)){if(!((r=t.typeRef)===null||r===void 0)&&r.ref)return Ti(t.typeRef.ref,e)}else{if(Vi(t))return Ti(t.referenceType,e);if(zi(t))return Ti(t.elementType,e);if(Or(t))return t.types.some(n=>Ti(n,new Set(e)))}return!1}function jI(t,e){t.properties.forEach(r=>{var n;let i=mg(r.type);if(i.length>1){let o=a=>Pn(a)?"ref":"other",s=o(i[0]);if(i.slice(1).some(a=>o(a)!==s)){let a=(n=r.astNodes.values().next())===null||n===void 0?void 0:n.value;a&&e("error",`Mixing a cross-reference with other types is not supported. Consider splitting property "${r.name}" into two or more different properties.`,{node:a})}}})}function HI({declared:t,declaredNode:e},r){Array.from(t.superTypes).forEach((n,i)=>{n&&(zr(n)&&r("error","Interfaces cannot extend union types.",{node:e,property:"superTypes",index:i}),n.declared||r("error","Extending an inferred type is discouraged.",{node:e,property:"superTypes",index:i}))})}function KI({declared:t,declaredNode:e},r){let n=t.properties.reduce((s,a)=>s.add(a.name,a),new Ae);for(let[s,a]of n.entriesGroupedByKey())if(a.length>1)for(let c of a)r("error",`Cannot have two properties with the same name '${s}'.`,{node:Array.from(c.astNodes)[0],property:"name"});let i=Array.from(t.superTypes);for(let s=0;s<i.length;s++)for(let a=s+1;a<i.length;a++){let c=i[s],l=i[a],u=Xr(c)?c.superProperties:[],f=Xr(l)?l.superProperties:[],d=WI(u,f);d.length>0&&r("error",`Cannot simultaneously inherit from '${c}' and '${l}'. Their ${d.map(p=>"'"+p+"'").join(", ")} properties are not identical.`,{node:e,property:"name"})}let o=new Set;for(let s of i){let a=Xr(s)?s.superProperties:[];for(let c of a)o.add(c.name)}for(let s of t.properties)if(o.has(s.name)){let a=e.attributes.find(c=>c.name===s.name);a&&r("error",`Cannot redeclare property '${s.name}'. It is already inherited from another interface.`,{node:a,property:"name"})}}function WI(t,e){let r=[];for(let n of t){let i=e.find(o=>o.name===n.name);i&&!BI(n,i)&&r.push(n.name)}return r}function BI(t,e){return qa(t.type,e.type)&&qa(e.type,t.type)}function zI(t,e,r){let{inferred:n,declared:i,declaredNode:o,inferredNodes:s}=t,a=i.name,c=f=>d=>s.forEach(p=>r("error",`${d}${f?` ${f}`:""}.`,p?.inferredType?{node:p?.inferredType,property:"name"}:{node:p,property:ye(p)?"type":"name"})),l=(f,d)=>f.forEach(p=>r("error",d,{node:p,property:ce(p)||ye(p)?"feature":"name"})),u=f=>{s.forEach(d=>{M(d)&&ss(d.definition).find(T=>T.feature===f)===void 0&&r("error",`Property '${f}' is missing in a rule '${d.name}', but is required in type '${a}'.`,{node:d,property:"parameters"})})};if(zr(n)&&zr(i))VI(n.type,i.type,c(`in a rule that returns type '${a}'`));else if(Xr(n)&&Xr(i))XI(n,i,e,c(`in a rule that returns type '${a}'`),l,u);else{let f=`Inferred and declared versions of type '${a}' both have to be interfaces or unions.`;c()(f),r("error",f,{node:o,property:"name"})}}function VI(t,e,r){qa(t,e)||r(`Cannot assign type '${Vr(t,"DeclaredType")}' to '${Vr(e,"DeclaredType")}'`)}function Ib(t){return t.optional||vu(t.type)}function XI(t,e,r,n,i,o){let s=new Set(t.properties.map(f=>f.name)),a=new Map(t.allProperties.map(f=>[f.name,f])),c=new Map(e.superProperties.map(f=>[f.name,f])),l=f=>{if(gt(f))return{types:f.types.map(d=>l(d))};if(Pn(f))return{referenceType:l(f.referenceType)};if(In(f))return{elementType:l(f.elementType)};if(Sr(f)){let d=r.typeToValidationInfo.get(f.value.name);return d?{value:"declared"in d?d.declared:d.inferred}:f}return f};for(let[f,d]of a.entries()){let p=c.get(f);if(p){let T=Vr(d.type,"DeclaredType"),R=Vr(p.type,"DeclaredType");if(!qa(l(d.type),p.type)&&R!=="unknown"){let S=`The assigned type '${T}' is not compatible with the declared property '${f}' of type '${R}'.`;i(d.astNodes,S)}d.optional&&!Ib(p)&&o(f)}else s.has(f)&&i(d.astNodes,`A property '${f}' is not expected.`)}let u=new Set;for(let[f,d]of c.entries())!a.get(f)&&!Ib(d)&&u.add(f);if(u.size>0){let f=u.size>1?"Properties":"A property",d=u.size>1?"are expected":"is expected",p=Array.from(u).map(T=>`'${T}'`).sort().join(", ");n(`${f} ${p} ${d}.`)}}var YI={validation:{LangiumGrammarValidator:t=>new _u(t),ValidationResourcesCollector:t=>new pf(t),LangiumGrammarTypesValidator:()=>new mf},lsp:{FoldingRangeProvider:t=>new Hu(t),CodeActionProvider:t=>new Mu(t),SemanticTokenProvider:t=>new Vu(t),Formatter:()=>new Bu,DefinitionProvider:t=>new ff(t),CallHierarchyProvider:t=>new df(t),CompletionProvider:t=>new ju(t)},references:{ScopeComputation:t=>new Ou(t),ScopeProvider:t=>new Du(t),References:t=>new Yu(t),NameProvider:()=>new Xu}};function Ob(t,e){let r=Wi(ic(t),lb,e),n=Wi(nc({shared:r}),ub,YI);return JI(r,n),r.ServiceRegistry.register(n),BA(n),Db(n),{shared:r,grammar:n}}function JI(t,e){t.workspace.DocumentBuilder.onBuildPhase(Oe.IndexedReferences,async(n,i)=>{for(let o of n){await Ue(i);let s=e.validation.ValidationResourcesCollector,a=o.parseResult.value;o.validationResources=s.collectValidationResources(a)}})}var zg=class{readFile(){throw new Error("Method not implemented.")}readFileSync(){throw new Error("Method not implemented.")}async readDirectory(){return[]}},hf={fileSystemProvider:()=>new zg};function Gu(t){return t.rules.find(e=>M(e)&&e.entry)}function QI(t){return t.rules.filter(e=>pe(e)&&e.hidden)}function os(t,e){let r=new Set,n=Gu(t);if(!n)return new Set(t.rules);let i=[n].concat(QI(t));for(let s of i)Lb(s,r,e);let o=new Set;for(let s of t.rules)(r.has(s.name)||pe(s)&&s.hidden)&&o.add(s);return o}function Lb(t,e,r){e.add(t.name),Fe(t).forEach(n=>{if(Te(n)||r&&du(n)){let i=n.rule.ref;i&&!e.has(i.name)&&Lb(i,e,r)}})}function qu(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=Qa(t.type.ref);return e?.terminal}}function Mb(t){return t.hidden&&!Fr(t).test(" ")}function mi(t,e){return!t||!e?[]:Vg(t,e,t.astNode,!0)}function Ot(t,e,r){if(!t||!e)return;let n=Vg(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Vg(t,e,r,n){if(!n){let i=xe(t.grammarSource,ce);if(i&&i.feature===e)return[t]}return Br(t)&&t.astNode===r?t.content.flatMap(i=>Vg(i,e,r,!1)):[]}function Wu(t,e){return t?Fb(t,e,t?.astNode):[]}function Lr(t,e,r){if(!t)return;let n=Fb(t,e,t?.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Fb(t,e,r){if(t.astNode!==r)return[];if(Ze(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=eg(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let s=i.value;s.astNode===r?Ze(s.grammarSource)&&s.grammarSource.value===e&&o.push(s):n.prune()}while(!i.done);return o}function Ts(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=xe(t.grammarSource,ce);if(n)return n;t=t.container}}function Qa(t){return Bo(t)&&(t=t.$container),Ub(t,new Map)}function Ub(t,e){var r;function n(i,o){let s;return xe(i,ce)||(s=Ub(o,e)),e.set(t,s),s}if(e.has(t))return e.get(t);e.set(t,void 0);for(let i of Fe(t)){if(ce(i)&&i.feature.toLowerCase()==="name")return e.set(t,i),i;if(Te(i)&&M(i.rule.ref))return n(i,i.rule.ref);if(Kt(i)&&(!((r=i.typeRef)===null||r===void 0)&&r.ref))return n(i,i.typeRef.ref)}}function ku(t){var e;let r=Ob(hf).grammar,n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,bt.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}function qb(t){let e=[],r=t.Grammar;for(let n of r.rules)pe(n)&&Mb(n)&&LA(Fr(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:tg}}var ZI=typeof global=="object"&&global&&global.Object===Object&&global,gf=ZI;var e0=typeof self=="object"&&self&&self.Object===Object&&self,t0=gf||e0||Function("return this")(),ft=t0;var r0=ft.Symbol,wt=r0;var Gb=Object.prototype,n0=Gb.hasOwnProperty,i0=Gb.toString,oc=wt?wt.toStringTag:void 0;function o0(t){var e=n0.call(t,oc),r=t[oc];try{t[oc]=void 0;var n=!0}catch{}var i=i0.call(t);return n&&(e?t[oc]=r:delete t[oc]),i}var jb=o0;var s0=Object.prototype,a0=s0.toString;function c0(t){return a0.call(t)}var Hb=c0;var l0="[object Null]",u0="[object Undefined]",Kb=wt?wt.toStringTag:void 0;function f0(t){return t==null?t===void 0?u0:l0:Kb&&Kb in Object(t)?jb(t):Hb(t)}var er=f0;function d0(t){return t!=null&&typeof t=="object"}var it=d0;var p0="[object Symbol]";function m0(t){return typeof t=="symbol"||it(t)&&er(t)==p0}var pn=m0;function h0(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var mn=h0;var g0=Array.isArray,U=g0;var y0=1/0,Wb=wt?wt.prototype:void 0,Bb=Wb?Wb.toString:void 0;function zb(t){if(typeof t=="string")return t;if(U(t))return mn(t,zb)+"";if(pn(t))return Bb?Bb.call(t):"";var e=t+"";return e=="0"&&1/t==-y0?"-0":e}var Vb=zb;var T0=/\s/;function x0(t){for(var e=t.length;e--&&T0.test(t.charAt(e)););return e}var Xb=x0;var v0=/^\s+/;function R0(t){return t&&t.slice(0,Xb(t)+1).replace(v0,"")}var Yb=R0;function S0(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Be=S0;var Jb=NaN,A0=/^[-+]0x[0-9a-f]+$/i,b0=/^0b[01]+$/i,w0=/^0o[0-7]+$/i,k0=parseInt;function C0(t){if(typeof t=="number")return t;if(pn(t))return Jb;if(Be(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Be(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Yb(t);var r=b0.test(t);return r||w0.test(t)?k0(t.slice(2),r?2:8):A0.test(t)?Jb:+t}var Qb=C0;var Zb=1/0,E0=17976931348623157e292;function _0(t){if(!t)return t===0?t:0;if(t=Qb(t),t===Zb||t===-Zb){var e=t<0?-1:1;return e*E0}return t===t?t:0}var ew=_0;function $0(t){var e=ew(t),r=e%1;return e===e?r?e-r:e:0}var hn=$0;function N0(t){return t}var fr=N0;var P0="[object AsyncFunction]",I0="[object Function]",D0="[object GeneratorFunction]",O0="[object Proxy]";function L0(t){if(!Be(t))return!1;var e=er(t);return e==I0||e==D0||e==P0||e==O0}var tr=L0;var M0=ft["__core-js_shared__"],yf=M0;var tw=function(){var t=/[^.]+$/.exec(yf&&yf.keys&&yf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function F0(t){return!!tw&&tw in t}var rw=F0;var U0=Function.prototype,q0=U0.toString;function G0(t){if(t!=null){try{return q0.call(t)}catch{}try{return t+""}catch{}}return""}var Fn=G0;var j0=/[\\^$.*+?()[\]{}|]/g,H0=/^\[object .+?Constructor\]$/,K0=Function.prototype,W0=Object.prototype,B0=K0.toString,z0=W0.hasOwnProperty,V0=RegExp("^"+B0.call(z0).replace(j0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function X0(t){if(!Be(t)||rw(t))return!1;var e=tr(t)?V0:H0;return e.test(Fn(t))}var nw=X0;function Y0(t,e){return t?.[e]}var iw=Y0;function J0(t,e){var r=iw(t,e);return nw(r)?r:void 0}var dr=J0;var Q0=dr(ft,"WeakMap"),Tf=Q0;var ow=Object.create,Z0=function(){function t(){}return function(e){if(!Be(e))return{};if(ow)return ow(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),sw=Z0;function eD(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var aw=eD;function tD(){}var ze=tD;function rD(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var cw=rD;var nD=800,iD=16,oD=Date.now;function sD(t){var e=0,r=0;return function(){var n=oD(),i=iD-(n-r);if(r=n,i>0){if(++e>=nD)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var lw=sD;function aD(t){return function(){return t}}var uw=aD;var cD=function(){try{var t=dr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Rs=cD;var lD=Rs?function(t,e){return Rs(t,"toString",{configurable:!0,enumerable:!1,value:uw(e),writable:!0})}:fr,fw=lD;var uD=lw(fw),dw=uD;function fD(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var xf=fD;function dD(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}var vf=dD;function pD(t){return t!==t}var pw=pD;function mD(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}var mw=mD;function hD(t,e,r){return e===e?mw(t,e,r):vf(t,pw,r)}var Ss=hD;function gD(t,e){var r=t==null?0:t.length;return!!r&&Ss(t,e,0)>-1}var Rf=gD;var yD=9007199254740991,TD=/^(?:0|[1-9]\d*)$/;function xD(t,e){var r=typeof t;return e=e??yD,!!e&&(r=="number"||r!="symbol"&&TD.test(t))&&t>-1&&t%1==0&&t<e}var xi=xD;function vD(t,e,r){e=="__proto__"&&Rs?Rs(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var As=vD;function RD(t,e){return t===e||t!==t&&e!==e}var gn=RD;var SD=Object.prototype,AD=SD.hasOwnProperty;function bD(t,e,r){var n=t[e];(!(AD.call(t,e)&&gn(n,r))||r===void 0&&!(e in t))&&As(t,e,r)}var vi=bD;function wD(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;c===void 0&&(c=t[a]),i?As(r,a,c):vi(r,a,c)}return r}var yn=wD;var hw=Math.max;function kD(t,e,r){return e=hw(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=hw(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),aw(t,this,a)}}var gw=kD;function CD(t,e){return dw(gw(t,e,fr),t+"")}var bs=CD;var ED=9007199254740991;function _D(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ED}var ws=_D;function $D(t){return t!=null&&ws(t.length)&&!tr(t)}var dt=$D;function ND(t,e,r){if(!Be(r))return!1;var n=typeof e;return(n=="number"?dt(r)&&xi(e,r.length):n=="string"&&e in r)?gn(r[e],t):!1}var Ri=ND;function PD(t){return bs(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,s&&Ri(r[0],r[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var a=r[n];a&&t(e,a,n,o)}return e})}var yw=PD;var ID=Object.prototype;function DD(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||ID;return t===r}var Tn=DD;function OD(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Tw=OD;var LD="[object Arguments]";function MD(t){return it(t)&&er(t)==LD}var Xg=MD;var xw=Object.prototype,FD=xw.hasOwnProperty,UD=xw.propertyIsEnumerable,qD=Xg(function(){return arguments}())?Xg:function(t){return it(t)&&FD.call(t,"callee")&&!UD.call(t,"callee")},Si=qD;function GD(){return!1}var vw=GD;var Aw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Rw=Aw&&typeof module=="object"&&module&&!module.nodeType&&module,jD=Rw&&Rw.exports===Aw,Sw=jD?ft.Buffer:void 0,HD=Sw?Sw.isBuffer:void 0,KD=HD||vw,Un=KD;var WD="[object Arguments]",BD="[object Array]",zD="[object Boolean]",VD="[object Date]",XD="[object Error]",YD="[object Function]",JD="[object Map]",QD="[object Number]",ZD="[object Object]",eO="[object RegExp]",tO="[object Set]",rO="[object String]",nO="[object WeakMap]",iO="[object ArrayBuffer]",oO="[object DataView]",sO="[object Float32Array]",aO="[object Float64Array]",cO="[object Int8Array]",lO="[object Int16Array]",uO="[object Int32Array]",fO="[object Uint8Array]",dO="[object Uint8ClampedArray]",pO="[object Uint16Array]",mO="[object Uint32Array]",Le={};Le[sO]=Le[aO]=Le[cO]=Le[lO]=Le[uO]=Le[fO]=Le[dO]=Le[pO]=Le[mO]=!0;Le[WD]=Le[BD]=Le[iO]=Le[zD]=Le[oO]=Le[VD]=Le[XD]=Le[YD]=Le[JD]=Le[QD]=Le[ZD]=Le[eO]=Le[tO]=Le[rO]=Le[nO]=!1;function hO(t){return it(t)&&ws(t.length)&&!!Le[er(t)]}var bw=hO;function gO(t){return function(e){return t(e)}}var xn=gO;var ww=typeof exports=="object"&&exports&&!exports.nodeType&&exports,sc=ww&&typeof module=="object"&&module&&!module.nodeType&&module,yO=sc&&sc.exports===ww,Yg=yO&&gf.process,TO=function(){try{var t=sc&&sc.require&&sc.require("util").types;return t||Yg&&Yg.binding&&Yg.binding("util")}catch{}}(),qr=TO;var kw=qr&&qr.isTypedArray,xO=kw?xn(kw):bw,ks=xO;var vO=Object.prototype,RO=vO.hasOwnProperty;function SO(t,e){var r=U(t),n=!r&&Si(t),i=!r&&!n&&Un(t),o=!r&&!n&&!i&&ks(t),s=r||n||i||o,a=s?Tw(t.length,String):[],c=a.length;for(var l in t)(e||RO.call(t,l))&&!(s&&(l=="length"||i&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||xi(l,c)))&&a.push(l);return a}var Sf=SO;function AO(t,e){return function(r){return t(e(r))}}var Af=AO;var bO=Af(Object.keys,Object),Cw=bO;var wO=Object.prototype,kO=wO.hasOwnProperty;function CO(t){if(!Tn(t))return Cw(t);var e=[];for(var r in Object(t))kO.call(t,r)&&r!="constructor"&&e.push(r);return e}var bf=CO;function EO(t){return dt(t)?Sf(t):bf(t)}var Ce=EO;var _O=Object.prototype,$O=_O.hasOwnProperty,NO=yw(function(t,e){if(Tn(e)||dt(e)){yn(e,Ce(e),t);return}for(var r in e)$O.call(e,r)&&vi(t,r,e[r])}),Lt=NO;function PO(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Ew=PO;var IO=Object.prototype,DO=IO.hasOwnProperty;function OO(t){if(!Be(t))return Ew(t);var e=Tn(t),r=[];for(var n in t)n=="constructor"&&(e||!DO.call(t,n))||r.push(n);return r}var _w=OO;function LO(t){return dt(t)?Sf(t,!0):_w(t)}var Ai=LO;var MO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,FO=/^\w*$/;function UO(t,e){if(U(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||pn(t)?!0:FO.test(t)||!MO.test(t)||e!=null&&t in Object(e)}var Cs=UO;var qO=dr(Object,"create"),qn=qO;function GO(){this.__data__=qn?qn(null):{},this.size=0}var $w=GO;function jO(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Nw=jO;var HO="__lodash_hash_undefined__",KO=Object.prototype,WO=KO.hasOwnProperty;function BO(t){var e=this.__data__;if(qn){var r=e[t];return r===HO?void 0:r}return WO.call(e,t)?e[t]:void 0}var Pw=BO;var zO=Object.prototype,VO=zO.hasOwnProperty;function XO(t){var e=this.__data__;return qn?e[t]!==void 0:VO.call(e,t)}var Iw=XO;var YO="__lodash_hash_undefined__";function JO(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=qn&&e===void 0?YO:e,this}var Dw=JO;function Es(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Es.prototype.clear=$w;Es.prototype.delete=Nw;Es.prototype.get=Pw;Es.prototype.has=Iw;Es.prototype.set=Dw;var Jg=Es;function QO(){this.__data__=[],this.size=0}var Ow=QO;function ZO(t,e){for(var r=t.length;r--;)if(gn(t[r][0],e))return r;return-1}var bi=ZO;var eL=Array.prototype,tL=eL.splice;function rL(t){var e=this.__data__,r=bi(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():tL.call(e,r,1),--this.size,!0}var Lw=rL;function nL(t){var e=this.__data__,r=bi(e,t);return r<0?void 0:e[r][1]}var Mw=nL;function iL(t){return bi(this.__data__,t)>-1}var Fw=iL;function oL(t,e){var r=this.__data__,n=bi(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var Uw=oL;function _s(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}_s.prototype.clear=Ow;_s.prototype.delete=Lw;_s.prototype.get=Mw;_s.prototype.has=Fw;_s.prototype.set=Uw;var wi=_s;var sL=dr(ft,"Map"),ki=sL;function aL(){this.size=0,this.__data__={hash:new Jg,map:new(ki||wi),string:new Jg}}var qw=aL;function cL(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Gw=cL;function lL(t,e){var r=t.__data__;return Gw(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Ci=lL;function uL(t){var e=Ci(this,t).delete(t);return this.size-=e?1:0,e}var jw=uL;function fL(t){return Ci(this,t).get(t)}var Hw=fL;function dL(t){return Ci(this,t).has(t)}var Kw=dL;function pL(t,e){var r=Ci(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var Ww=pL;function $s(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}$s.prototype.clear=qw;$s.prototype.delete=jw;$s.prototype.get=Hw;$s.prototype.has=Kw;$s.prototype.set=Ww;var no=$s;var mL="Expected a function";function Qg(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(mL);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Qg.Cache||no),r}Qg.Cache=no;var Bw=Qg;var hL=500;function gL(t){var e=Bw(t,function(n){return r.size===hL&&r.clear(),n}),r=e.cache;return e}var zw=gL;var yL=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,TL=/\\(\\)?/g,xL=zw(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(yL,function(r,n,i,o){e.push(i?o.replace(TL,"$1"):n||r)}),e}),Vw=xL;function vL(t){return t==null?"":Vb(t)}var Xw=vL;function RL(t,e){return U(t)?t:Cs(t,e)?[t]:Vw(Xw(t))}var Ei=RL;var SL=1/0;function AL(t){if(typeof t=="string"||pn(t))return t;var e=t+"";return e=="0"&&1/t==-SL?"-0":e}var vn=AL;function bL(t,e){e=Ei(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[vn(e[r++])];return r&&r==n?t:void 0}var Ns=bL;function wL(t,e,r){var n=t==null?void 0:Ns(t,e);return n===void 0?r:n}var Yw=wL;function kL(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var Ps=kL;var Jw=wt?wt.isConcatSpreadable:void 0;function CL(t){return U(t)||Si(t)||!!(Jw&&t&&t[Jw])}var Qw=CL;function Zw(t,e,r,n,i){var o=-1,s=t.length;for(r||(r=Qw),i||(i=[]);++o<s;){var a=t[o];e>0&&r(a)?e>1?Zw(a,e-1,r,n,i):Ps(i,a):n||(i[i.length]=a)}return i}var Is=Zw;function EL(t){var e=t==null?0:t.length;return e?Is(t,1):[]}var ot=EL;var _L=Af(Object.getPrototypeOf,Object),wf=_L;function $L(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}var kf=$L;function NL(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}var ek=NL;function PL(){this.__data__=new wi,this.size=0}var tk=PL;function IL(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var rk=IL;function DL(t){return this.__data__.get(t)}var nk=DL;function OL(t){return this.__data__.has(t)}var ik=OL;var LL=200;function ML(t,e){var r=this.__data__;if(r instanceof wi){var n=r.__data__;if(!ki||n.length<LL-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new no(n)}return r.set(t,e),this.size=r.size,this}var ok=ML;function Ds(t){var e=this.__data__=new wi(t);this.size=e.size}Ds.prototype.clear=tk;Ds.prototype.delete=rk;Ds.prototype.get=nk;Ds.prototype.has=ik;Ds.prototype.set=ok;var _i=Ds;function FL(t,e){return t&&yn(e,Ce(e),t)}var sk=FL;function UL(t,e){return t&&yn(e,Ai(e),t)}var ak=UL;var fk=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ck=fk&&typeof module=="object"&&module&&!module.nodeType&&module,qL=ck&&ck.exports===fk,lk=qL?ft.Buffer:void 0,uk=lk?lk.allocUnsafe:void 0;function GL(t,e){if(e)return t.slice();var r=t.length,n=uk?uk(r):new t.constructor(r);return t.copy(n),n}var dk=GL;function jL(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o}var Os=jL;function HL(){return[]}var Cf=HL;var KL=Object.prototype,WL=KL.propertyIsEnumerable,pk=Object.getOwnPropertySymbols,BL=pk?function(t){return t==null?[]:(t=Object(t),Os(pk(t),function(e){return WL.call(t,e)}))}:Cf,Ls=BL;function zL(t,e){return yn(t,Ls(t),e)}var mk=zL;var VL=Object.getOwnPropertySymbols,XL=VL?function(t){for(var e=[];t;)Ps(e,Ls(t)),t=wf(t);return e}:Cf,Ef=XL;function YL(t,e){return yn(t,Ef(t),e)}var hk=YL;function JL(t,e,r){var n=e(t);return U(t)?n:Ps(n,r(t))}var _f=JL;function QL(t){return _f(t,Ce,Ls)}var ac=QL;function ZL(t){return _f(t,Ai,Ef)}var $f=ZL;var eM=dr(ft,"DataView"),Nf=eM;var tM=dr(ft,"Promise"),Pf=tM;var rM=dr(ft,"Set"),$i=rM;var gk="[object Map]",nM="[object Object]",yk="[object Promise]",Tk="[object Set]",xk="[object WeakMap]",vk="[object DataView]",iM=Fn(Nf),oM=Fn(ki),sM=Fn(Pf),aM=Fn($i),cM=Fn(Tf),io=er;(Nf&&io(new Nf(new ArrayBuffer(1)))!=vk||ki&&io(new ki)!=gk||Pf&&io(Pf.resolve())!=yk||$i&&io(new $i)!=Tk||Tf&&io(new Tf)!=xk)&&(io=function(t){var e=er(t),r=e==nM?t.constructor:void 0,n=r?Fn(r):"";if(n)switch(n){case iM:return vk;case oM:return gk;case sM:return yk;case aM:return Tk;case cM:return xk}return e});var Qr=io;var lM=Object.prototype,uM=lM.hasOwnProperty;function fM(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&uM.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var Rk=fM;var dM=ft.Uint8Array,Ms=dM;function pM(t){var e=new t.constructor(t.byteLength);return new Ms(e).set(new Ms(t)),e}var Fs=pM;function mM(t,e){var r=e?Fs(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Sk=mM;var hM=/\w*$/;function gM(t){var e=new t.constructor(t.source,hM.exec(t));return e.lastIndex=t.lastIndex,e}var Ak=gM;var bk=wt?wt.prototype:void 0,wk=bk?bk.valueOf:void 0;function yM(t){return wk?Object(wk.call(t)):{}}var kk=yM;function TM(t,e){var r=e?Fs(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Ck=TM;var xM="[object Boolean]",vM="[object Date]",RM="[object Map]",SM="[object Number]",AM="[object RegExp]",bM="[object Set]",wM="[object String]",kM="[object Symbol]",CM="[object ArrayBuffer]",EM="[object DataView]",_M="[object Float32Array]",$M="[object Float64Array]",NM="[object Int8Array]",PM="[object Int16Array]",IM="[object Int32Array]",DM="[object Uint8Array]",OM="[object Uint8ClampedArray]",LM="[object Uint16Array]",MM="[object Uint32Array]";function FM(t,e,r){var n=t.constructor;switch(e){case CM:return Fs(t);case xM:case vM:return new n(+t);case EM:return Sk(t,r);case _M:case $M:case NM:case PM:case IM:case DM:case OM:case LM:case MM:return Ck(t,r);case RM:return new n;case SM:case wM:return new n(t);case AM:return Ak(t);case bM:return new n;case kM:return kk(t)}}var Ek=FM;function UM(t){return typeof t.constructor=="function"&&!Tn(t)?sw(wf(t)):{}}var _k=UM;var qM="[object Map]";function GM(t){return it(t)&&Qr(t)==qM}var $k=GM;var Nk=qr&&qr.isMap,jM=Nk?xn(Nk):$k,Pk=jM;var HM="[object Set]";function KM(t){return it(t)&&Qr(t)==HM}var Ik=KM;var Dk=qr&&qr.isSet,WM=Dk?xn(Dk):Ik,Ok=WM;var BM=1,zM=2,VM=4,Lk="[object Arguments]",XM="[object Array]",YM="[object Boolean]",JM="[object Date]",QM="[object Error]",Mk="[object Function]",ZM="[object GeneratorFunction]",e1="[object Map]",t1="[object Number]",Fk="[object Object]",r1="[object RegExp]",n1="[object Set]",i1="[object String]",o1="[object Symbol]",s1="[object WeakMap]",a1="[object ArrayBuffer]",c1="[object DataView]",l1="[object Float32Array]",u1="[object Float64Array]",f1="[object Int8Array]",d1="[object Int16Array]",p1="[object Int32Array]",m1="[object Uint8Array]",h1="[object Uint8ClampedArray]",g1="[object Uint16Array]",y1="[object Uint32Array]",Ee={};Ee[Lk]=Ee[XM]=Ee[a1]=Ee[c1]=Ee[YM]=Ee[JM]=Ee[l1]=Ee[u1]=Ee[f1]=Ee[d1]=Ee[p1]=Ee[e1]=Ee[t1]=Ee[Fk]=Ee[r1]=Ee[n1]=Ee[i1]=Ee[o1]=Ee[m1]=Ee[h1]=Ee[g1]=Ee[y1]=!0;Ee[QM]=Ee[Mk]=Ee[s1]=!1;function If(t,e,r,n,i,o){var s,a=e&BM,c=e&zM,l=e&VM;if(r&&(s=i?r(t,n,i,o):r(t)),s!==void 0)return s;if(!Be(t))return t;var u=U(t);if(u){if(s=Rk(t),!a)return cw(t,s)}else{var f=Qr(t),d=f==Mk||f==ZM;if(Un(t))return dk(t,a);if(f==Fk||f==Lk||d&&!i){if(s=c||d?{}:_k(t),!a)return c?hk(t,ak(s,t)):mk(t,sk(s,t))}else{if(!Ee[f])return i?t:{};s=Ek(t,f,a)}}o||(o=new _i);var p=o.get(t);if(p)return p;o.set(t,s),Ok(t)?t.forEach(function(b){s.add(If(b,e,r,b,t,o))}):Pk(t)&&t.forEach(function(b,S){s.set(S,If(b,e,r,S,t,o))});var T=l?c?$f:ac:c?Ai:Ce,R=u?void 0:T(t);return xf(R||t,function(b,S){R&&(S=b,b=t[S]),vi(s,S,If(b,e,r,S,t,o))}),s}var Uk=If;var T1=4;function x1(t){return Uk(t,T1)}var _e=x1;function v1(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}var Rn=v1;var R1="__lodash_hash_undefined__";function S1(t){return this.__data__.set(t,R1),this}var qk=S1;function A1(t){return this.__data__.has(t)}var Gk=A1;function Df(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new no;++e<r;)this.add(t[e])}Df.prototype.add=Df.prototype.push=qk;Df.prototype.has=Gk;var Us=Df;function b1(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var Of=b1;function w1(t,e){return t.has(e)}var qs=w1;var k1=1,C1=2;function E1(t,e,r,n,i,o){var s=r&k1,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=o.get(t),u=o.get(e);if(l&&u)return l==e&&u==t;var f=-1,d=!0,p=r&C1?new Us:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var T=t[f],R=e[f];if(n)var b=s?n(R,T,f,e,t,o):n(T,R,f,t,e,o);if(b!==void 0){if(b)continue;d=!1;break}if(p){if(!Of(e,function(S,h){if(!qs(p,h)&&(T===S||i(T,S,r,n,o)))return p.push(h)})){d=!1;break}}else if(!(T===R||i(T,R,r,n,o))){d=!1;break}}return o.delete(t),o.delete(e),d}var Lf=E1;function _1(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}var jk=_1;function $1(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Gs=$1;var N1=1,P1=2,I1="[object Boolean]",D1="[object Date]",O1="[object Error]",L1="[object Map]",M1="[object Number]",F1="[object RegExp]",U1="[object Set]",q1="[object String]",G1="[object Symbol]",j1="[object ArrayBuffer]",H1="[object DataView]",Hk=wt?wt.prototype:void 0,Zg=Hk?Hk.valueOf:void 0;function K1(t,e,r,n,i,o,s){switch(r){case H1:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j1:return!(t.byteLength!=e.byteLength||!o(new Ms(t),new Ms(e)));case I1:case D1:case M1:return gn(+t,+e);case O1:return t.name==e.name&&t.message==e.message;case F1:case q1:return t==e+"";case L1:var a=jk;case U1:var c=n&N1;if(a||(a=Gs),t.size!=e.size&&!c)return!1;var l=s.get(t);if(l)return l==e;n|=P1,s.set(t,e);var u=Lf(a(t),a(e),n,i,o,s);return s.delete(t),u;case G1:if(Zg)return Zg.call(t)==Zg.call(e)}return!1}var Kk=K1;var W1=1,B1=Object.prototype,z1=B1.hasOwnProperty;function V1(t,e,r,n,i,o){var s=r&W1,a=ac(t),c=a.length,l=ac(e),u=l.length;if(c!=u&&!s)return!1;for(var f=c;f--;){var d=a[f];if(!(s?d in e:z1.call(e,d)))return!1}var p=o.get(t),T=o.get(e);if(p&&T)return p==e&&T==t;var R=!0;o.set(t,e),o.set(e,t);for(var b=s;++f<c;){d=a[f];var S=t[d],h=e[d];if(n)var m=s?n(h,S,d,e,t,o):n(S,h,d,t,e,o);if(!(m===void 0?S===h||i(S,h,r,n,o):m)){R=!1;break}b||(b=d=="constructor")}if(R&&!b){var A=t.constructor,E=e.constructor;A!=E&&"constructor"in t&&"constructor"in e&&!(typeof A=="function"&&A instanceof A&&typeof E=="function"&&E instanceof E)&&(R=!1)}return o.delete(t),o.delete(e),R}var Wk=V1;var X1=1,Bk="[object Arguments]",zk="[object Array]",Mf="[object Object]",Y1=Object.prototype,Vk=Y1.hasOwnProperty;function J1(t,e,r,n,i,o){var s=U(t),a=U(e),c=s?zk:Qr(t),l=a?zk:Qr(e);c=c==Bk?Mf:c,l=l==Bk?Mf:l;var u=c==Mf,f=l==Mf,d=c==l;if(d&&Un(t)){if(!Un(e))return!1;s=!0,u=!1}if(d&&!u)return o||(o=new _i),s||ks(t)?Lf(t,e,r,n,i,o):Kk(t,e,c,r,n,i,o);if(!(r&X1)){var p=u&&Vk.call(t,"__wrapped__"),T=f&&Vk.call(e,"__wrapped__");if(p||T){var R=p?t.value():t,b=T?e.value():e;return o||(o=new _i),i(R,b,r,n,o)}}return d?(o||(o=new _i),Wk(t,e,r,n,i,o)):!1}var Xk=J1;function Yk(t,e,r,n,i){return t===e?!0:t==null||e==null||!it(t)&&!it(e)?t!==t&&e!==e:Xk(t,e,r,n,Yk,i)}var Ff=Yk;var Q1=1,Z1=2;function eF(t,e,r,n){var i=r.length,o=i,s=!n;if(t==null)return!o;for(t=Object(t);i--;){var a=r[i];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){a=r[i];var c=a[0],l=t[c],u=a[1];if(s&&a[2]){if(l===void 0&&!(c in t))return!1}else{var f=new _i;if(n)var d=n(l,u,c,t,e,f);if(!(d===void 0?Ff(u,l,Q1|Z1,n,f):d))return!1}}return!0}var Jk=eF;function tF(t){return t===t&&!Be(t)}var Uf=tF;function rF(t){for(var e=Ce(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,Uf(i)]}return e}var Qk=rF;function nF(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var qf=nF;function iF(t){var e=Qk(t);return e.length==1&&e[0][2]?qf(e[0][0],e[0][1]):function(r){return r===t||Jk(r,t,e)}}var Zk=iF;function oF(t,e){return t!=null&&e in Object(t)}var eC=oF;function sF(t,e,r){e=Ei(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var s=vn(e[n]);if(!(o=t!=null&&r(t,s)))break;t=t[s]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&ws(i)&&xi(s,i)&&(U(t)||Si(t)))}var Gf=sF;function aF(t,e){return t!=null&&Gf(t,e,eC)}var tC=aF;var cF=1,lF=2;function uF(t,e){return Cs(t)&&Uf(e)?qf(vn(t),e):function(r){var n=Yw(r,t);return n===void 0&&n===e?tC(r,t):Ff(e,n,cF|lF)}}var rC=uF;function fF(t){return function(e){return e?.[t]}}var nC=fF;function dF(t){return function(e){return Ns(e,t)}}var iC=dF;function pF(t){return Cs(t)?nC(vn(t)):iC(t)}var oC=pF;function mF(t){return typeof t=="function"?t:t==null?fr:typeof t=="object"?U(t)?rC(t[0],t[1]):Zk(t):oC(t)}var et=mF;function hF(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var s=t[i];e(n,s,r(s),t)}return n}var sC=hF;function gF(t){return function(e,r,n){for(var i=-1,o=Object(e),s=n(e),a=s.length;a--;){var c=s[t?a:++i];if(r(o[c],c,o)===!1)break}return e}}var aC=gF;var yF=aC(),cC=yF;function TF(t,e){return t&&cC(t,e,Ce)}var lC=TF;function xF(t,e){return function(r,n){if(r==null)return r;if(!dt(r))return t(r,n);for(var i=r.length,o=e?i:-1,s=Object(r);(e?o--:++o<i)&&n(s[o],o,s)!==!1;);return r}}var uC=xF;var vF=uC(lC),pr=vF;function RF(t,e,r,n){return pr(t,function(i,o,s){e(n,i,r(i),s)}),n}var fC=RF;function SF(t,e){return function(r,n){var i=U(r)?sC:fC,o=e?e():{};return i(r,t,et(n,2),o)}}var dC=SF;var pC=Object.prototype,AF=pC.hasOwnProperty,bF=bs(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&Ri(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],s=Ai(o),a=-1,c=s.length;++a<c;){var l=s[a],u=t[l];(u===void 0||gn(u,pC[l])&&!AF.call(t,l))&&(t[l]=o[l])}return t}),js=bF;function wF(t){return it(t)&&dt(t)}var ey=wF;function kF(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}var jf=kF;var CF=200;function EF(t,e,r,n){var i=-1,o=Rf,s=!0,a=t.length,c=[],l=e.length;if(!a)return c;r&&(e=mn(e,xn(r))),n?(o=jf,s=!1):e.length>=CF&&(o=qs,s=!1,e=new Us(e));e:for(;++i<a;){var u=t[i],f=r==null?u:r(u);if(u=n||u!==0?u:0,s&&f===f){for(var d=l;d--;)if(e[d]===f)continue e;c.push(u)}else o(e,f,n)||c.push(u)}return c}var mC=EF;var _F=bs(function(t,e){return ey(t)?mC(t,Is(e,1,ey,!0)):[]}),Ni=_F;function $F(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var Sn=$F;function NF(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:hn(e),kf(t,e<0?0:e,n)):[]}var st=NF;function PF(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:hn(e),e=n-e,kf(t,0,e<0?0:e)):[]}var Gn=PF;function IF(t){return typeof t=="function"?t:fr}var hC=IF;function DF(t,e){var r=U(t)?xf:pr;return r(t,hC(e))}var D=DF;function OF(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var gC=OF;function LF(t,e){var r=!0;return pr(t,function(n,i,o){return r=!!e(n,i,o),r}),r}var yC=LF;function MF(t,e,r){var n=U(t)?gC:yC;return r&&Ri(t,e,r)&&(e=void 0),n(t,et(e,3))}var zt=MF;function FF(t,e){var r=[];return pr(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}var Hf=FF;function UF(t,e){var r=U(t)?Os:Hf;return r(t,et(e,3))}var kt=UF;function qF(t){return function(e,r,n){var i=Object(e);if(!dt(e)){var o=et(r,3);e=Ce(e),r=function(a){return o(i[a],a,i)}}var s=t(e,r,n);return s>-1?i[o?e[s]:s]:void 0}}var TC=qF;var GF=Math.max;function jF(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:hn(r);return i<0&&(i=GF(n+i,0)),vf(t,et(e,3),i)}var xC=jF;var HF=TC(xC),An=HF;function KF(t){return t&&t.length?t[0]:void 0}var Ct=KF;function WF(t,e){var r=-1,n=dt(t)?Array(t.length):[];return pr(t,function(i,o,s){n[++r]=e(i,o,s)}),n}var vC=WF;function BF(t,e){var r=U(t)?mn:vC;return r(t,et(e,3))}var _=BF;function zF(t,e){return Is(_(t,e),1)}var Mt=zF;var VF=Object.prototype,XF=VF.hasOwnProperty,YF=dC(function(t,e,r){XF.call(t,r)?t[r].push(e):As(t,r,[e])}),ty=YF;var JF=Object.prototype,QF=JF.hasOwnProperty;function ZF(t,e){return t!=null&&QF.call(t,e)}var RC=ZF;function eU(t,e){return t!=null&&Gf(t,e,RC)}var F=eU;var tU="[object String]";function rU(t){return typeof t=="string"||!U(t)&&it(t)&&er(t)==tU}var yt=rU;function nU(t,e){return mn(e,function(r){return t[r]})}var SC=nU;function iU(t){return t==null?[]:SC(t,Ce(t))}var Re=iU;var oU=Math.max;function sU(t,e,r,n){t=dt(t)?t:Re(t),r=r&&!n?hn(r):0;var i=t.length;return r<0&&(r=oU(i+r,0)),yt(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&Ss(t,e,r)>-1}var qe=sU;var aU=Math.max;function cU(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:hn(r);return i<0&&(i=aU(n+i,0)),Ss(t,e,i)}var Kf=cU;var lU="[object Map]",uU="[object Set]",fU=Object.prototype,dU=fU.hasOwnProperty;function pU(t){if(t==null)return!0;if(dt(t)&&(U(t)||typeof t=="string"||typeof t.splice=="function"||Un(t)||ks(t)||Si(t)))return!t.length;var e=Qr(t);if(e==lU||e==uU)return!t.size;if(Tn(t))return!bf(t).length;for(var r in t)if(dU.call(t,r))return!1;return!0}var Z=pU;var mU="[object RegExp]";function hU(t){return it(t)&&er(t)==mU}var AC=hU;var bC=qr&&qr.isRegExp,gU=bC?xn(bC):AC,Gr=gU;function yU(t){return t===void 0}var Vt=yU;function TU(t,e){return t<e}var wC=TU;function xU(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],s=e(o);if(s!=null&&(a===void 0?s===s&&!pn(s):r(s,a)))var a=s,c=o}return c}var kC=xU;function vU(t){return t&&t.length?kC(t,fr,wC):void 0}var CC=vU;var RU="Expected a function";function SU(t){if(typeof t!="function")throw new TypeError(RU);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var EC=SU;function AU(t,e,r,n){if(!Be(t))return t;e=Ei(e,t);for(var i=-1,o=e.length,s=o-1,a=t;a!=null&&++i<o;){var c=vn(e[i]),l=r;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(i!=s){var u=a[c];l=n?n(u,c,a):void 0,l===void 0&&(l=Be(u)?u:xi(e[i+1])?[]:{})}vi(a,c,l),a=a[c]}return t}var _C=AU;function bU(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var s=e[n],a=Ns(t,s);r(a,s)&&_C(o,Ei(s,t),a)}return o}var $C=bU;function wU(t,e){if(t==null)return{};var r=mn($f(t),function(n){return[n]});return e=et(e),$C(t,r,function(n,i){return e(n,i[0])})}var mr=wU;function kU(t,e,r,n,i){return i(t,function(o,s,a){r=n?(n=!1,o):e(r,o,s,a)}),r}var NC=kU;function CU(t,e,r){var n=U(t)?ek:NC,i=arguments.length<3;return n(t,et(e,4),r,i,pr)}var Ve=CU;function EU(t,e){var r=U(t)?Os:Hf;return r(t,EC(et(e,3)))}var Pi=EU;function _U(t,e){var r;return pr(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}var PC=_U;function $U(t,e,r){var n=U(t)?Of:PC;return r&&Ri(t,e,r)&&(e=void 0),n(t,et(e,3))}var cc=$U;var NU=1/0,PU=$i&&1/Gs(new $i([,-0]))[1]==NU?function(t){return new $i(t)}:ze,IC=PU;var IU=200;function DU(t,e,r){var n=-1,i=Rf,o=t.length,s=!0,a=[],c=a;if(r)s=!1,i=jf;else if(o>=IU){var l=e?null:IC(t);if(l)return Gs(l);s=!1,i=qs,c=new Us}else c=e?[]:a;e:for(;++n<o;){var u=t[n],f=e?e(u):u;if(u=r||u!==0?u:0,s&&f===f){for(var d=c.length;d--;)if(c[d]===f)continue e;e&&c.push(f),a.push(u)}else i(c,f,r)||(c!==a&&c.push(f),a.push(u))}return a}var Wf=DU;function OU(t){return t&&t.length?Wf(t):[]}var Hs=OU;function LU(t,e){return t&&t.length?Wf(t,et(e,2)):[]}var DC=LU;function Ks(t){console&&console.error&&console.error(`Error: ${t}`)}function lc(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function uc(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function fc(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function MU(t){return FU(t)?t.LABEL:t.name}function FU(t){return yt(t.LABEL)&&t.LABEL!==""}var Cr=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),D(this.definition,r=>{r.accept(e)})}},me=class extends Cr{constructor(e){super([]),this.idx=1,Lt(this,mr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},rr=class extends Cr{constructor(e){super(e.definition),this.orgText="",Lt(this,mr(e,r=>r!==void 0))}},$e=class extends Cr{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Lt(this,mr(e,r=>r!==void 0))}},he=class extends Cr{constructor(e){super(e.definition),this.idx=1,Lt(this,mr(e,r=>r!==void 0))}},Ne=class extends Cr{constructor(e){super(e.definition),this.idx=1,Lt(this,mr(e,r=>r!==void 0))}},Pe=class extends Cr{constructor(e){super(e.definition),this.idx=1,Lt(this,mr(e,r=>r!==void 0))}},re=class extends Cr{constructor(e){super(e.definition),this.idx=1,Lt(this,mr(e,r=>r!==void 0))}},be=class extends Cr{constructor(e){super(e.definition),this.idx=1,Lt(this,mr(e,r=>r!==void 0))}},we=class extends Cr{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Lt(this,mr(e,r=>r!==void 0))}},ee=class{constructor(e){this.idx=1,Lt(this,mr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function Bf(t){return _(t,Ws)}function Ws(t){function e(r){return _(r,Ws)}if(t instanceof me){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return yt(t.label)&&(r.label=t.label),r}else{if(t instanceof $e)return{type:"Alternative",definition:e(t.definition)};if(t instanceof he)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof Ne)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof Pe)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:Ws(new ee({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof be)return{type:"RepetitionWithSeparator",idx:t.idx,separator:Ws(new ee({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof re)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof we)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ee){let r={type:"Terminal",name:t.terminalType.name,label:MU(t.terminalType),idx:t.idx};yt(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=Gr(n)?n.source:n),r}else{if(t instanceof rr)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var nr=class{visit(e){let r=e;switch(r.constructor){case me:return this.visitNonTerminal(r);case $e:return this.visitAlternative(r);case he:return this.visitOption(r);case Ne:return this.visitRepetitionMandatory(r);case Pe:return this.visitRepetitionMandatoryWithSeparator(r);case be:return this.visitRepetitionWithSeparator(r);case re:return this.visitRepetition(r);case we:return this.visitAlternation(r);case ee:return this.visitTerminal(r);case rr:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function ry(t){return t instanceof $e||t instanceof he||t instanceof re||t instanceof Ne||t instanceof Pe||t instanceof be||t instanceof ee||t instanceof rr}function oo(t,e=[]){return t instanceof he||t instanceof re||t instanceof be?!0:t instanceof we?cc(t.definition,n=>oo(n,e)):t instanceof me&&qe(e,t)?!1:t instanceof Cr?(t instanceof me&&e.push(t),zt(t.definition,n=>oo(n,e))):!1}function ny(t){return t instanceof we}function hr(t){if(t instanceof me)return"SUBRULE";if(t instanceof he)return"OPTION";if(t instanceof we)return"OR";if(t instanceof Ne)return"AT_LEAST_ONE";if(t instanceof Pe)return"AT_LEAST_ONE_SEP";if(t instanceof be)return"MANY_SEP";if(t instanceof re)return"MANY";if(t instanceof ee)return"CONSUME";throw Error("non exhaustive match")}var jn=class{walk(e,r=[]){D(e.definition,(n,i)=>{let o=st(e.definition,i+1);if(n instanceof me)this.walkProdRef(n,o,r);else if(n instanceof ee)this.walkTerminal(n,o,r);else if(n instanceof $e)this.walkFlat(n,o,r);else if(n instanceof he)this.walkOption(n,o,r);else if(n instanceof Ne)this.walkAtLeastOne(n,o,r);else if(n instanceof Pe)this.walkAtLeastOneSep(n,o,r);else if(n instanceof be)this.walkManySep(n,o,r);else if(n instanceof re)this.walkMany(n,o,r);else if(n instanceof we)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let i=r.concat(n);this.walk(e,i)}walkOption(e,r,n){let i=r.concat(n);this.walk(e,i)}walkAtLeastOne(e,r,n){let i=[new he({definition:e.definition})].concat(r,n);this.walk(e,i)}walkAtLeastOneSep(e,r,n){let i=OC(e,r,n);this.walk(e,i)}walkMany(e,r,n){let i=[new he({definition:e.definition})].concat(r,n);this.walk(e,i)}walkManySep(e,r,n){let i=OC(e,r,n);this.walk(e,i)}walkOr(e,r,n){let i=r.concat(n);D(e.definition,o=>{let s=new $e({definition:[o]});this.walk(s,i)})}};function OC(t,e,r){return[new he({definition:[new ee({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function so(t){if(t instanceof me)return so(t.referencedRule);if(t instanceof ee)return GU(t);if(ry(t))return UU(t);if(ny(t))return qU(t);throw Error("non exhaustive match")}function UU(t){let e=[],r=t.definition,n=0,i=r.length>n,o,s=!0;for(;i&&s;)o=r[n],s=oo(o),e=e.concat(so(o)),n=n+1,i=r.length>n;return Hs(e)}function qU(t){let e=_(t.definition,r=>so(r));return Hs(ot(e))}function GU(t){return[t.terminalType]}var zf="_~IN~_";var iy=class extends jn{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let i=jU(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),s=new $e({definition:o}),a=so(s);this.follows[i]=a}};function LC(t){let e={};return D(t,r=>{let n=new iy(r).startWalking();Lt(e,n)}),e}function jU(t,e){return t.name+e+zf}var Vf={},HU=new Ji;function Bs(t){let e=t.toString();if(Vf.hasOwnProperty(e))return Vf[e];{let r=HU.pattern(e);return Vf[e]=r,r}}function MC(){Vf={}}var UC="Complement Sets are not supported for first char optimization",dc=`Unable to use "first char" lexer optimizations:
`;function qC(t,e=!1){try{let r=Bs(t);return oy(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===UC)e&&lc(`${dc}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Ks(`${dc}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function oy(t,e,r){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)oy(t.value[i],e,r);break;case"Alternative":let n=t.value;for(let i=0;i<n.length;i++){let o=n[i];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=o;switch(s.type){case"Character":Xf(s.value,e,r);break;case"Set":if(s.complement===!0)throw Error(UC);D(s.value,c=>{if(typeof c=="number")Xf(c,e,r);else{let l=c;if(r===!0)for(let u=l.from;u<=l.to;u++)Xf(u,e,r);else{for(let u=l.from;u<=l.to&&u<zs;u++)Xf(u,e,r);if(l.to>=zs){let u=l.from>=zs?l.from:zs,f=l.to,d=bn(u),p=bn(f);for(let T=d;T<=p;T++)e[T]=T}}}});break;case"Group":oy(s.value,e,r);break;default:throw Error("Non Exhaustive Match")}let a=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&sy(s)===!1||s.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Re(e)}function Xf(t,e,r){let n=bn(t);e[n]=n,r===!0&&KU(t,e)}function KU(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let i=bn(n.charCodeAt(0));e[i]=i}else{let i=r.toLowerCase();if(i!==r){let o=bn(i.charCodeAt(0));e[o]=o}}}function FC(t,e){return An(t.value,r=>{if(typeof r=="number")return qe(e,r);{let n=r;return An(e,i=>n.from<=i&&i<=n.to)!==void 0}})}function sy(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?U(t.value)?zt(t.value,sy):sy(t.value):!1}var ay=class extends un{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){qe(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?FC(e,this.targetCharCodes)===void 0&&(this.found=!0):FC(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Yf(t,e){if(e instanceof RegExp){let r=Bs(e),n=new ay(t);return n.visit(r),n.found}else return An(e,r=>qe(t,r.charCodeAt(0)))!==void 0}var ao="PATTERN",Vs="defaultMode",Jf="modes",ly=typeof new RegExp("(?:)").sticky=="boolean";function HC(t,e){e=js(e,{useSticky:ly,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(h,m)=>m()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{cq()});let n;r("Reject Lexer.NA",()=>{n=Pi(t,h=>h[ao]===tt.NA)});let i=!1,o;r("Transform Patterns",()=>{i=!1,o=_(n,h=>{let m=h[ao];if(Gr(m)){let A=m.source;return A.length===1&&A!=="^"&&A!=="$"&&A!=="."&&!m.ignoreCase?A:A.length===2&&A[0]==="\\"&&!qe(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],A[1])?A[1]:e.useSticky?jC(m):GC(m)}else{if(tr(m))return i=!0,{exec:m};if(typeof m=="object")return i=!0,m;if(typeof m=="string"){if(m.length===1)return m;{let A=m.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),E=new RegExp(A);return e.useSticky?jC(E):GC(E)}}else throw Error("non exhaustive match")}})});let s,a,c,l,u;r("misc mapping",()=>{s=_(n,h=>h.tokenTypeIdx),a=_(n,h=>{let m=h.GROUP;if(m!==tt.SKIPPED){if(yt(m))return m;if(Vt(m))return!1;throw Error("non exhaustive match")}}),c=_(n,h=>{let m=h.LONGER_ALT;if(m)return U(m)?_(m,E=>Kf(n,E)):[Kf(n,m)]}),l=_(n,h=>h.PUSH_MODE),u=_(n,h=>F(h,"POP_MODE"))});let f;r("Line Terminator Handling",()=>{let h=JC(e.lineTerminatorCharacters);f=_(n,m=>!1),e.positionTracking!=="onlyOffset"&&(f=_(n,m=>F(m,"LINE_BREAKS")?!!m.LINE_BREAKS:YC(m,h)===!1&&Yf(h,m.PATTERN)))});let d,p,T,R;r("Misc Mapping #2",()=>{d=_(n,VC),p=_(o,sq),T=Ve(n,(h,m)=>{let A=m.GROUP;return yt(A)&&A!==tt.SKIPPED&&(h[A]=[]),h},{}),R=_(o,(h,m)=>({pattern:o[m],longerAlt:c[m],canLineTerminator:f[m],isCustom:d[m],short:p[m],group:a[m],push:l[m],pop:u[m],tokenTypeIdx:s[m],tokenType:n[m]}))});let b=!0,S=[];return e.safeMode||r("First Char Optimization",()=>{S=Ve(n,(h,m,A)=>{if(typeof m.PATTERN=="string"){let E=m.PATTERN.charCodeAt(0),V=bn(E);cy(h,V,R[A])}else if(U(m.START_CHARS_HINT)){let E;D(m.START_CHARS_HINT,V=>{let _t=typeof V=="string"?V.charCodeAt(0):V,rt=bn(_t);E!==rt&&(E=rt,cy(h,rt,R[A]))})}else if(Gr(m.PATTERN))if(m.PATTERN.unicode)b=!1,e.ensureOptimizations&&Ks(`${dc}	Unable to analyze < ${m.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let E=qC(m.PATTERN,e.ensureOptimizations);Z(E)&&(b=!1),D(E,V=>{cy(h,V,R[A])})}else e.ensureOptimizations&&Ks(`${dc}	TokenType: <${m.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),b=!1;return h},[])}),{emptyGroups:T,patternIdxToConfig:R,charCodeToPatternIdxToConfig:S,hasCustom:i,canBeOptimized:b}}function KC(t,e){let r=[],n=BU(t);r=r.concat(n.errors);let i=zU(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(WU(o)),r=r.concat(tq(o)),r=r.concat(rq(o,e)),r=r.concat(nq(o)),r}function WU(t){let e=[],r=kt(t,n=>Gr(n[ao]));return e=e.concat(XU(r)),e=e.concat(QU(r)),e=e.concat(ZU(r)),e=e.concat(eq(r)),e=e.concat(YU(r)),e}function BU(t){let e=kt(t,i=>!F(i,ao)),r=_(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Ge.MISSING_PATTERN,tokenTypes:[i]})),n=Ni(t,e);return{errors:r,valid:n}}function zU(t){let e=kt(t,i=>{let o=i[ao];return!Gr(o)&&!tr(o)&&!F(o,"exec")&&!yt(o)}),r=_(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Ge.INVALID_PATTERN,tokenTypes:[i]})),n=Ni(t,e);return{errors:r,valid:n}}var VU=/[^\\][$]/;function XU(t){class e extends un{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=kt(t,i=>{let o=i.PATTERN;try{let s=Bs(o),a=new e;return a.visit(s),a.found}catch{return VU.test(o.source)}});return _(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ge.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function YU(t){let e=kt(t,n=>n.PATTERN.test(""));return _(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:Ge.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var JU=/[^\\[][\^]|^\^/;function QU(t){class e extends un{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=kt(t,i=>{let o=i.PATTERN;try{let s=Bs(o),a=new e;return a.visit(s),a.found}catch{return JU.test(o.source)}});return _(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ge.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function ZU(t){let e=kt(t,n=>{let i=n[ao];return i instanceof RegExp&&(i.multiline||i.global)});return _(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Ge.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function eq(t){let e=[],r=_(t,o=>Ve(t,(s,a)=>(o.PATTERN.source===a.PATTERN.source&&!qe(e,a)&&a.PATTERN!==tt.NA&&(e.push(a),s.push(a)),s),[]));r=Rn(r);let n=kt(r,o=>o.length>1);return _(n,o=>{let s=_(o,c=>c.name);return{message:`The same RegExp pattern ->${Ct(o).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:Ge.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function tq(t){let e=kt(t,n=>{if(!F(n,"GROUP"))return!1;let i=n.GROUP;return i!==tt.SKIPPED&&i!==tt.NA&&!yt(i)});return _(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Ge.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function rq(t,e){let r=kt(t,i=>i.PUSH_MODE!==void 0&&!qe(e,i.PUSH_MODE));return _(r,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Ge.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function nq(t){let e=[],r=Ve(t,(n,i,o)=>{let s=i.PATTERN;return s===tt.NA||(yt(s)?n.push({str:s,idx:o,tokenType:i}):Gr(s)&&oq(s)&&n.push({str:s.source,idx:o,tokenType:i})),n},[]);return D(t,(n,i)=>{D(r,({str:o,idx:s,tokenType:a})=>{if(i<s&&iq(o,n.PATTERN)){let c=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:c,type:Ge.UNREACHABLE_PATTERN,tokenTypes:[n,a]})}})}),e}function iq(t,e){if(Gr(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(tr(e))return e(t,0,[],{});if(F(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function oq(t){return An([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function GC(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function jC(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function WC(t,e,r){let n=[];return F(t,Vs)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Vs+`> property in its definition
`,type:Ge.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),F(t,Jf)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Jf+`> property in its definition
`,type:Ge.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),F(t,Jf)&&F(t,Vs)&&!F(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${Vs}: <${t.defaultMode}>which does not exist
`,type:Ge.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),F(t,Jf)&&D(t.modes,(i,o)=>{D(i,(s,a)=>{if(Vt(s))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${a}>
`,type:Ge.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(F(s,"LONGER_ALT")){let c=U(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];D(c,l=>{!Vt(l)&&!qe(i,l)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${l.name}> on token <${s.name}> outside of mode <${o}>
`,type:Ge.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function BC(t,e,r){let n=[],i=!1,o=Rn(ot(Re(t.modes))),s=Pi(o,c=>c[ao]===tt.NA),a=JC(r);return e&&D(s,c=>{let l=YC(c,a);if(l!==!1){let f={message:aq(c,l),type:l.issue,tokenType:c};n.push(f)}else F(c,"LINE_BREAKS")?c.LINE_BREAKS===!0&&(i=!0):Yf(a,c.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Ge.NO_LINE_BREAKS_FLAGS}),n}function zC(t){let e={},r=Ce(t);return D(r,n=>{let i=t[n];if(U(i))e[n]=[];else throw Error("non exhaustive match")}),e}function VC(t){let e=t.PATTERN;if(Gr(e))return!1;if(tr(e))return!0;if(F(e,"exec"))return!0;if(yt(e))return!1;throw Error("non exhaustive match")}function sq(t){return yt(t)&&t.length===1?t.charCodeAt(0):!1}var XC={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function YC(t,e){if(F(t,"LINE_BREAKS"))return!1;if(Gr(t.PATTERN)){try{Yf(e,t.PATTERN)}catch(r){return{issue:Ge.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(yt(t.PATTERN))return!1;if(VC(t))return{issue:Ge.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function aq(t,e){if(e.issue===Ge.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===Ge.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function JC(t){return _(t,r=>yt(r)?r.charCodeAt(0):r)}function cy(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var zs=256,Qf=[];function bn(t){return t<zs?t:Qf[t]}function cq(){if(Z(Qf)){Qf=new Array(65536);for(let t=0;t<65536;t++)Qf[t]=t>255?255+~~(t/255):t}}function Hn(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function Xs(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var QC=1,eE={};function Kn(t){let e=lq(t);uq(e),dq(e),fq(e),D(e,r=>{r.isParent=r.categoryMatches.length>0})}function lq(t){let e=_e(t),r=t,n=!0;for(;n;){r=Rn(ot(_(r,o=>o.CATEGORIES)));let i=Ni(r,e);e=e.concat(i),Z(i)?n=!1:r=i}return e}function uq(t){D(t,e=>{uy(e)||(eE[QC]=e,e.tokenTypeIdx=QC++),ZC(e)&&!U(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),ZC(e)||(e.CATEGORIES=[]),pq(e)||(e.categoryMatches=[]),mq(e)||(e.categoryMatchesMap={})})}function fq(t){D(t,e=>{e.categoryMatches=[],D(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(eE[n].tokenTypeIdx)})})}function dq(t){D(t,e=>{tE([],e)})}function tE(t,e){D(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),D(e.CATEGORIES,r=>{let n=t.concat(e);qe(n,r)||tE(n,r)})}function uy(t){return F(t,"tokenTypeIdx")}function ZC(t){return F(t,"CATEGORIES")}function pq(t){return F(t,"categoryMatches")}function mq(t){return F(t,"categoryMatchesMap")}function rE(t){return F(t,"tokenTypeIdx")}var fy={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var Ge;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Ge||(Ge={}));var pc={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:fy,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(pc);var tt=class{constructor(e,r=pc){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:a,value:c}=uc(o),l=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&l(`${s}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,c}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Lt({},pc,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===pc.lineTerminatorsPattern)this.config.lineTerminatorsPattern=XC;else if(this.config.lineTerminatorCharacters===pc.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),U(e)?i={modes:{defaultMode:_e(e)},defaultMode:Vs}:(o=!1,i=_e(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(WC(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(BC(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},D(i.modes,(a,c)=>{i.modes[c]=Pi(a,l=>Vt(l))});let s=Ce(i.modes);if(D(i.modes,(a,c)=>{this.TRACE_INIT(`Mode: <${c}> processing`,()=>{if(this.modes.push(c),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(KC(a,s))}),Z(this.lexerDefinitionErrors)){Kn(a);let l;this.TRACE_INIT("analyzeTokenTypes",()=>{l=HC(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[c]=l.patternIdxToConfig,this.charCodeToPatternIdxToConfig[c]=l.charCodeToPatternIdxToConfig,this.emptyGroups=Lt({},this.emptyGroups,l.emptyGroups),this.hasCustom=l.hasCustom||this.hasCustom,this.canModeBeOptimized[c]=l.canBeOptimized}})}),this.defaultMode=i.defaultMode,!Z(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let c=_(this.lexerDefinitionErrors,l=>l.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+c)}D(this.lexerDefinitionWarning,a=>{lc(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(ly?(this.chopInput=fr,this.match=this.matchWithTest):(this.updateLastIndex=ze,this.match=this.matchWithExec),o&&(this.handleModes=ze),this.trackStartLines===!1&&(this.computeNewColumn=fr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=ze),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let a=Ve(this.canModeBeOptimized,(c,l,u)=>(l===!1&&c.push(u),c),[]);if(r.ensureOptimizations&&!Z(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{MC()}),this.TRACE_INIT("toFastProperties",()=>{fc(this)})})}tokenize(e,r=this.defaultMode){if(!Z(this.lexerDefinitionErrors)){let i=_(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,i,o,s,a,c,l,u,f,d,p,T,R,b,S,h,m=e,A=m.length,E=0,V=0,_t=this.hasCustom?0:Math.floor(e.length/10),rt=new Array(_t),gr=[],Xt=this.trackStartLines?1:void 0,P=this.trackStartLines?1:void 0,x=zC(this.emptyGroups),I=this.trackStartLines,L=this.config.lineTerminatorsPattern,ne=0,B=[],W=[],xt=[],vt=[];Object.freeze(vt);let oe;function en(){return B}function Oc(Rt){let sr=bn(Rt),Xn=W[sr];return Xn===void 0?vt:Xn}let op=Rt=>{if(xt.length===1&&Rt.tokenType.PUSH_MODE===void 0){let sr=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(Rt);gr.push({offset:Rt.startOffset,line:Rt.startLine,column:Rt.startColumn,length:Rt.image.length,message:sr})}else{xt.pop();let sr=Sn(xt);B=this.patternIdxToConfig[sr],W=this.charCodeToPatternIdxToConfig[sr],ne=B.length;let Xn=this.canModeBeOptimized[sr]&&this.config.safeMode===!1;W&&Xn?oe=Oc:oe=en}};function la(Rt){xt.push(Rt),W=this.charCodeToPatternIdxToConfig[Rt],B=this.patternIdxToConfig[Rt],ne=B.length,ne=B.length;let sr=this.canModeBeOptimized[Rt]&&this.config.safeMode===!1;W&&sr?oe=Oc:oe=en}la.call(this,r);let or,Lc=this.config.recoveryEnabled;for(;E<A;){c=null;let Rt=m.charCodeAt(E),sr=oe(Rt),Xn=sr.length;for(n=0;n<Xn;n++){or=sr[n];let Yt=or.pattern;l=null;let jr=or.short;if(jr!==!1?Rt===jr&&(c=Yt):or.isCustom===!0?(h=Yt.exec(m,E,rt,x),h!==null?(c=h[0],h.payload!==void 0&&(l=h.payload)):c=null):(this.updateLastIndex(Yt,E),c=this.match(Yt,e,E)),c!==null){if(a=or.longerAlt,a!==void 0){let $t=a.length;for(o=0;o<$t;o++){let Hr=B[a[o]],wn=Hr.pattern;if(u=null,Hr.isCustom===!0?(h=wn.exec(m,E,rt,x),h!==null?(s=h[0],h.payload!==void 0&&(u=h.payload)):s=null):(this.updateLastIndex(wn,E),s=this.match(wn,e,E)),s&&s.length>c.length){c=s,l=u,or=Hr;break}}}break}}if(c!==null){if(f=c.length,d=or.group,d!==void 0&&(p=or.tokenTypeIdx,T=this.createTokenInstance(c,E,p,or.tokenType,Xt,P,f),this.handlePayload(T,l),d===!1?V=this.addToken(rt,V,T):x[d].push(T)),e=this.chopInput(e,f),E=E+f,P=this.computeNewColumn(P,f),I===!0&&or.canLineTerminator===!0){let Yt=0,jr,$t;L.lastIndex=0;do jr=L.test(c),jr===!0&&($t=L.lastIndex-1,Yt++);while(jr===!0);Yt!==0&&(Xt=Xt+Yt,P=f-$t,this.updateTokenEndLineColumnLocation(T,d,$t,Yt,Xt,P,f))}this.handleModes(or,op,la,T)}else{let Yt=E,jr=Xt,$t=P,Hr=Lc===!1;for(;Hr===!1&&E<A;)for(e=this.chopInput(e,1),E++,i=0;i<ne;i++){let wn=B[i],Yn=wn.pattern,Mc=wn.short;if(Mc!==!1?m.charCodeAt(E)===Mc&&(Hr=!0):wn.isCustom===!0?Hr=Yn.exec(m,E,rt,x)!==null:(this.updateLastIndex(Yn,E),Hr=Yn.exec(e)!==null),Hr===!0)break}if(R=E-Yt,P=this.computeNewColumn(P,R),S=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(m,Yt,R,jr,$t),gr.push({offset:Yt,line:jr,column:$t,length:R,message:S}),Lc===!1)break}}return this.hasCustom||(rt.length=V),{tokens:rt,groups:x,errors:gr}}handleModes(e,r,n,i){if(e.pop===!0){let o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,i,o,s,a){let c,l;r!==void 0&&(c=n===a-1,l=c?-1:0,i===1&&c===!0||(e.endLine=o+l,e.endColumn=s-1+-l))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}}createStartOnlyToken(e,r,n,i,o,s){return{image:e,startOffset:r,startLine:o,startColumn:s,tokenTypeIdx:n,tokenType:i}}createFullToken(e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:r+a-1,startLine:o,endLine:o,startColumn:s,endColumn:s+a-1,tokenTypeIdx:n,tokenType:i}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};tt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";tt.NA=/NOT_APPLICABLE/;function Wn(t){return dy(t)?t.LABEL:t.name}function dy(t){return yt(t.LABEL)&&t.LABEL!==""}var hq="parent",nE="categories",iE="label",oE="group",sE="push_mode",aE="pop_mode",cE="longer_alt",lE="line_breaks",uE="start_chars_hint";function Zf(t){return gq(t)}function gq(t){let e=t.pattern,r={};if(r.name=t.name,Vt(e)||(r.PATTERN=e),F(t,hq))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return F(t,nE)&&(r.CATEGORIES=t[nE]),Kn([r]),F(t,iE)&&(r.LABEL=t[iE]),F(t,oE)&&(r.GROUP=t[oE]),F(t,aE)&&(r.POP_MODE=t[aE]),F(t,sE)&&(r.PUSH_MODE=t[sE]),F(t,cE)&&(r.LONGER_ALT=t[cE]),F(t,lE)&&(r.LINE_BREAKS=t[lE]),F(t,uE)&&(r.START_CHARS_HINT=t[uE]),r}var Er=Zf({name:"EOF",pattern:tt.NA});Kn([Er]);function co(t,e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:s,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function mc(t,e){return Hn(t,e)}var Bn={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${dy(t)?`--> ${Wn(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:i}){let o="Expecting: ",a=`
but found: '`+Ct(e).image+"'";if(n)return o+n+a;{let c=Ve(t,(d,p)=>d.concat(p),[]),l=_(c,d=>`[${_(d,p=>Wn(p)).join(", ")}]`),f=`one of these possible Token sequences:
${_(l,(d,p)=>`  ${p+1}. ${d}`).join(`
`)}`;return o+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let i="Expecting: ",s=`
but found: '`+Ct(e).image+"'";if(r)return i+r+s;{let c=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${_(t,l=>`[${_(l,u=>Wn(u)).join(",")}]`).join(" ,")}>`;return i+c+s}}};Object.freeze(Bn);var fE={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},Zr={buildDuplicateFoundError(t,e){function r(u){return u instanceof ee?u.terminalType.name:u instanceof me?u.nonTerminalName:""}let n=t.name,i=Ct(e),o=i.idx,s=hr(i),a=r(i),c=o>0,l=`->${s}${c?o:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return l=l.replace(/[ \t]+/g," "),l=l.replace(/\s\s+/g,`
`),l},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=_(t.prefixPath,i=>Wn(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=_(t.prefixPath,i=>Wn(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=hr(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=_(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof rr?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function dE(t,e){let r=new py(t,e);return r.resolveRefs(),r.errors}var py=class extends nr{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){D(Re(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:Tt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var my=class extends jn{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=_e(this.path.ruleStack).reverse(),this.occurrenceStack=_e(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let i=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){Z(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},ed=class extends my{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let i=r.concat(n),o=new $e({definition:i});this.possibleTokTypes=so(o),this.found=!0}}},Ys=class extends jn{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},td=class extends Ys{walkMany(e,r,n){if(e.idx===this.occurrence){let i=Ct(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ee&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,r,n)}},hc=class extends Ys{walkManySep(e,r,n){if(e.idx===this.occurrence){let i=Ct(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ee&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,r,n)}},rd=class extends Ys{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let i=Ct(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ee&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,r,n)}},gc=class extends Ys{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let i=Ct(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ee&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,r,n)}};function nd(t,e,r=[]){r=_e(r);let n=[],i=0;function o(a){return a.concat(st(t,i+1))}function s(a){let c=nd(o(a),e,r);return n.concat(c)}for(;r.length<e&&i<t.length;){let a=t[i];if(a instanceof $e)return s(a.definition);if(a instanceof me)return s(a.definition);if(a instanceof he)n=s(a.definition);else if(a instanceof Ne){let c=a.definition.concat([new re({definition:a.definition})]);return s(c)}else if(a instanceof Pe){let c=[new $e({definition:a.definition}),new re({definition:[new ee({terminalType:a.separator})].concat(a.definition)})];return s(c)}else if(a instanceof be){let c=a.definition.concat([new re({definition:[new ee({terminalType:a.separator})].concat(a.definition)})]);n=s(c)}else if(a instanceof re){let c=a.definition.concat([new re({definition:a.definition})]);n=s(c)}else{if(a instanceof we)return D(a.definition,c=>{Z(c.definition)===!1&&(n=s(c.definition))}),n;if(a instanceof ee)r.push(a.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:st(t,i)}),n}function id(t,e,r,n){let i="EXIT_NONE_TERMINAL",o=[i],s="EXIT_ALTERNATIVE",a=!1,c=e.length,l=c-n-1,u=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!Z(f);){let d=f.pop();if(d===s){a&&Sn(f).idx<=l&&f.pop();continue}let p=d.def,T=d.idx,R=d.ruleStack,b=d.occurrenceStack;if(Z(p))continue;let S=p[0];if(S===i){let h={idx:T,def:st(p),ruleStack:Gn(R),occurrenceStack:Gn(b)};f.push(h)}else if(S instanceof ee)if(T<c-1){let h=T+1,m=e[h];if(r(m,S.terminalType)){let A={idx:h,def:st(p),ruleStack:R,occurrenceStack:b};f.push(A)}}else if(T===c-1)u.push({nextTokenType:S.terminalType,nextTokenOccurrence:S.idx,ruleStack:R,occurrenceStack:b}),a=!0;else throw Error("non exhaustive match");else if(S instanceof me){let h=_e(R);h.push(S.nonTerminalName);let m=_e(b);m.push(S.idx);let A={idx:T,def:S.definition.concat(o,st(p)),ruleStack:h,occurrenceStack:m};f.push(A)}else if(S instanceof he){let h={idx:T,def:st(p),ruleStack:R,occurrenceStack:b};f.push(h),f.push(s);let m={idx:T,def:S.definition.concat(st(p)),ruleStack:R,occurrenceStack:b};f.push(m)}else if(S instanceof Ne){let h=new re({definition:S.definition,idx:S.idx}),m=S.definition.concat([h],st(p)),A={idx:T,def:m,ruleStack:R,occurrenceStack:b};f.push(A)}else if(S instanceof Pe){let h=new ee({terminalType:S.separator}),m=new re({definition:[h].concat(S.definition),idx:S.idx}),A=S.definition.concat([m],st(p)),E={idx:T,def:A,ruleStack:R,occurrenceStack:b};f.push(E)}else if(S instanceof be){let h={idx:T,def:st(p),ruleStack:R,occurrenceStack:b};f.push(h),f.push(s);let m=new ee({terminalType:S.separator}),A=new re({definition:[m].concat(S.definition),idx:S.idx}),E=S.definition.concat([A],st(p)),V={idx:T,def:E,ruleStack:R,occurrenceStack:b};f.push(V)}else if(S instanceof re){let h={idx:T,def:st(p),ruleStack:R,occurrenceStack:b};f.push(h),f.push(s);let m=new re({definition:S.definition,idx:S.idx}),A=S.definition.concat([m],st(p)),E={idx:T,def:A,ruleStack:R,occurrenceStack:b};f.push(E)}else if(S instanceof we)for(let h=S.definition.length-1;h>=0;h--){let m=S.definition[h],A={idx:T,def:m.definition.concat(st(p)),ruleStack:R,occurrenceStack:b};f.push(A),f.push(s)}else if(S instanceof $e)f.push({idx:T,def:S.definition.concat(st(p)),ruleStack:R,occurrenceStack:b});else if(S instanceof rr)f.push(yq(S,T,R,b));else throw Error("non exhaustive match")}return u}function yq(t,e,r,n){let i=_e(r);i.push(t.name);let o=_e(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}var je;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(je||(je={}));function yc(t){if(t instanceof he||t==="Option")return je.OPTION;if(t instanceof re||t==="Repetition")return je.REPETITION;if(t instanceof Ne||t==="RepetitionMandatory")return je.REPETITION_MANDATORY;if(t instanceof Pe||t==="RepetitionMandatoryWithSeparator")return je.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof be||t==="RepetitionWithSeparator")return je.REPETITION_WITH_SEPARATOR;if(t instanceof we||t==="Alternation")return je.ALTERNATION;throw Error("non exhaustive match")}function sd(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:i}=t,o=yc(n);return o===je.ALTERNATION?Js(e,r,i):Qs(e,r,o,i)}function mE(t,e,r,n,i,o){let s=Js(t,e,r),a=vE(s)?Xs:Hn;return o(s,n,a,i)}function hE(t,e,r,n,i,o){let s=Qs(t,e,i,r),a=vE(s)?Xs:Hn;return o(s[0],a,n)}function gE(t,e,r,n){let i=t.length,o=zt(t,s=>zt(s,a=>a.length===1));if(e)return function(s){let a=_(s,c=>c.GATE);for(let c=0;c<i;c++){let l=t[c],u=l.length,f=a[c];if(!(f!==void 0&&f.call(this)===!1))e:for(let d=0;d<u;d++){let p=l[d],T=p.length;for(let R=0;R<T;R++){let b=this.LA(R+1);if(r(b,p[R])===!1)continue e}return c}}};if(o&&!n){let s=_(t,c=>ot(c)),a=Ve(s,(c,l,u)=>(D(l,f=>{F(c,f.tokenTypeIdx)||(c[f.tokenTypeIdx]=u),D(f.categoryMatches,d=>{F(c,d)||(c[d]=u)})}),c),{});return function(){let c=this.LA(1);return a[c.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let a=t[s],c=a.length;e:for(let l=0;l<c;l++){let u=a[l],f=u.length;for(let d=0;d<f;d++){let p=this.LA(d+1);if(r(p,u[d])===!1)continue e}return s}}}}function yE(t,e,r){let n=zt(t,o=>o.length===1),i=t.length;if(n&&!r){let o=ot(t);if(o.length===1&&Z(o[0].categoryMatches)){let a=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{let s=Ve(o,(a,c,l)=>(a[c.tokenTypeIdx]=!0,D(c.categoryMatches,u=>{a[u]=!0}),a),[]);return function(){let a=this.LA(1);return s[a.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<i;o++){let s=t[o],a=s.length;for(let c=0;c<a;c++){let l=this.LA(c+1);if(e(l,s[c])===!1)continue e}return!0}return!1}}var gy=class extends jn{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,i){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(i),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,je.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,je.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,je.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,je.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,je.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},od=class extends nr{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,je.OPTION)}visitRepetition(e){this.checkIsTarget(e,je.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,je.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,je.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,je.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,je.ALTERNATION)}};function pE(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function hy(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],i=[];for(let o=0;o<e.length;o++){let s=e[o];i.push(s+"_"+n.tokenTypeIdx);for(let a=0;a<n.categoryMatches.length;a++){let c="_"+n.categoryMatches[a];i.push(s+c)}}e=i}return e}function Tq(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let i=t[n];for(let o=0;o<e.length;o++){let s=e[o];if(i[s]===!0)return!1}}return!0}function TE(t,e){let r=_(t,s=>nd([s],1)),n=pE(r.length),i=_(r,s=>{let a={};return D(s,c=>{let l=hy(c.partialPath);D(l,u=>{a[u]=!0})}),a}),o=r;for(let s=1;s<=e;s++){let a=o;o=pE(a.length);for(let c=0;c<a.length;c++){let l=a[c];for(let u=0;u<l.length;u++){let f=l[u].partialPath,d=l[u].suffixDef,p=hy(f);if(Tq(i,p,c)||Z(d)||f.length===e){let R=n[c];if(ad(R,f)===!1){R.push(f);for(let b=0;b<p.length;b++){let S=p[b];i[c][S]=!0}}}else{let R=nd(d,s+1,f);o[c]=o[c].concat(R),D(R,b=>{let S=hy(b.partialPath);D(S,h=>{i[c][h]=!0})})}}}}return n}function Js(t,e,r,n){let i=new od(t,je.ALTERNATION,n);return e.accept(i),TE(i.result,r)}function Qs(t,e,r,n){let i=new od(t,r);e.accept(i);let o=i.result,a=new gy(e,t,r).startWalking(),c=new $e({definition:o}),l=new $e({definition:a});return TE([c,l],n)}function ad(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let i=0;i<n.length;i++){let o=e[i],s=n[i];if((o===s||s.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function xE(t,e){return t.length<e.length&&zt(t,(r,n)=>{let i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}function vE(t){return zt(t,e=>zt(e,r=>zt(r,n=>Z(n.categoryMatches))))}function RE(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return _(e,r=>Object.assign({type:Tt.CUSTOM_LOOKAHEAD_VALIDATION},r))}function SE(t,e,r,n){let i=Mt(t,c=>xq(c,r)),o=wq(t,e,r),s=Mt(t,c=>Sq(c,r)),a=Mt(t,c=>Rq(c,t,n,r));return i.concat(o,s,a)}function xq(t,e){let r=new yy;t.accept(r);let n=r.allProductions,i=ty(n,vq),o=mr(i,a=>a.length>1);return _(Re(o),a=>{let c=Ct(a),l=e.buildDuplicateFoundError(t,a),u=hr(c),f={message:l,type:Tt.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:u,occurrence:c.idx},d=AE(c);return d&&(f.parameter=d),f})}function vq(t){return`${hr(t)}_#_${t.idx}_#_${AE(t)}`}function AE(t){return t instanceof ee?t.terminalType.name:t instanceof me?t.nonTerminalName:""}var yy=class extends nr{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function Rq(t,e,r,n){let i=[];if(Ve(e,(s,a)=>a.name===t.name?s+1:s,0)>1){let s=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:s,type:Tt.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function bE(t,e,r){let n=[],i;return qe(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:i,type:Tt.INVALID_RULE_OVERRIDE,ruleName:t})),n}function xy(t,e,r,n=[]){let i=[],o=cd(e.definition);if(Z(o))return[];{let s=t.name;qe(o,t)&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:Tt.LEFT_RECURSION,ruleName:s});let c=Ni(o,n.concat([t])),l=Mt(c,u=>{let f=_e(n);return f.push(u),xy(t,u,r,f)});return i.concat(l)}}function cd(t){let e=[];if(Z(t))return e;let r=Ct(t);if(r instanceof me)e.push(r.referencedRule);else if(r instanceof $e||r instanceof he||r instanceof Ne||r instanceof Pe||r instanceof be||r instanceof re)e=e.concat(cd(r.definition));else if(r instanceof we)e=ot(_(r.definition,o=>cd(o.definition)));else if(!(r instanceof ee))throw Error("non exhaustive match");let n=oo(r),i=t.length>1;if(n&&i){let o=st(t);return e.concat(cd(o))}else return e}var Tc=class extends nr{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function wE(t,e){let r=new Tc;t.accept(r);let n=r.alternations;return Mt(n,o=>{let s=Gn(o.definition);return Mt(s,(a,c)=>{let l=id([a],[],Hn,1);return Z(l)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:c}),type:Tt.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:c+1}]:[]})})}function kE(t,e,r){let n=new Tc;t.accept(n);let i=n.alternations;return i=Pi(i,s=>s.ignoreAmbiguities===!0),Mt(i,s=>{let a=s.idx,c=s.maxLookahead||e,l=Js(a,t,c,s),u=Aq(l,s,t,r),f=bq(l,s,t,r);return u.concat(f)})}var Ty=class extends nr{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function Sq(t,e){let r=new Tc;t.accept(r);let n=r.alternations;return Mt(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:Tt.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function CE(t,e,r){let n=[];return D(t,i=>{let o=new Ty;i.accept(o);let s=o.allProductions;D(s,a=>{let c=yc(a),l=a.maxLookahead||e,u=a.idx,d=Qs(u,i,c,l)[0];if(Z(ot(d))){let p=r.buildEmptyRepetitionError({topLevelRule:i,repetition:a});n.push({message:p,type:Tt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}function Aq(t,e,r,n){let i=[],o=Ve(t,(a,c,l)=>(e.definition[l].ignoreAmbiguities===!0||D(c,u=>{let f=[l];D(t,(d,p)=>{l!==p&&ad(d,u)&&e.definition[p].ignoreAmbiguities!==!0&&f.push(p)}),f.length>1&&!ad(i,u)&&(i.push(u),a.push({alts:f,path:u}))}),a),[]);return _(o,a=>{let c=_(a.alts,u=>u+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:c,prefixPath:a.path}),type:Tt.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:a.alts}})}function bq(t,e,r,n){let i=Ve(t,(s,a,c)=>{let l=_(a,u=>({idx:c,path:u}));return s.concat(l)},[]);return Rn(Mt(i,s=>{if(e.definition[s.idx].ignoreAmbiguities===!0)return[];let c=s.idx,l=s.path,u=kt(i,d=>e.definition[d.idx].ignoreAmbiguities!==!0&&d.idx<c&&xE(d.path,l));return _(u,d=>{let p=[d.idx+1,c+1],T=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:p,prefixPath:d.path}),type:Tt.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:T,alternatives:p}})}))}function wq(t,e,r){let n=[],i=_(e,o=>o.name);return D(t,o=>{let s=o.name;if(qe(i,s)){let a=r.buildNamespaceConflictError(o);n.push({message:a,type:Tt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),n}function EE(t){let e=js(t,{errMsgProvider:fE}),r={};return D(t.rules,n=>{r[n.name]=n}),dE(r,e.errMsgProvider)}function _E(t){return t=js(t,{errMsgProvider:Zr}),SE(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var $E="MismatchedTokenException",NE="NoViableAltException",PE="EarlyExitException",IE="NotAllInputParsedException",DE=[$E,NE,PE,IE];Object.freeze(DE);function Ii(t){return qe(DE,t.name)}var Zs=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},lo=class extends Zs{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=$E}},xc=class extends Zs{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=NE}},vc=class extends Zs{constructor(e,r){super(e,r),this.name=IE}},Rc=class extends Zs{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=PE}};var vy={},Sy="InRuleRecoveryException",Ry=class extends Error{constructor(e){super(e),this.name=Sy}},ld=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=F(e,"recoveryEnabled")?e.recoveryEnabled:ir.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=kq)}getTokenToInsert(e){let r=co(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,i){let o=this.findReSyncTokenType(),s=this.exportLexerState(),a=[],c=!1,l=this.LA(1),u=this.LA(1),f=()=>{let d=this.LA(0),p=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:l,previous:d,ruleName:this.getCurrRuleFullName()}),T=new lo(p,l,this.LA(0));T.resyncedTokens=Gn(a),this.SAVE_ERROR(T)};for(;!c;)if(this.tokenMatcher(u,i)){f();return}else if(n.call(this)){f(),e.apply(this,r);return}else this.tokenMatcher(u,o)?c=!0:(u=this.SKIP_TOKEN(),this.addToResyncTokens(u,a));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new Ry("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||Z(r))return!1;let n=this.LA(1);return An(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return qe(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let i=An(e,o=>mc(r,o));if(i!==void 0)return i;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return vy;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return _(e,(n,i)=>i===0?vy:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){let e=_(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return ot(e)}getFollowSetFromFollowKey(e){if(e===vy)return[Er];let r=e.ruleName+e.idxInCallingRule+zf+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,Er)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return Gn(r)}attemptInRepetitionRecovery(e,r,n,i,o,s,a){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),i=_e(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return _(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function kq(t,e,r,n,i,o,s){let a=this.getKeyForAutomaticLookahead(n,i),c=this.firstAfterRepMap[a];if(c===void 0){let d=this.getCurrRuleFullName(),p=this.getGAstProductions()[d];c=new o(p,i).startWalking(),this.firstAfterRepMap[a]=c}let l=c.token,u=c.occurrence,f=c.isEndOfRule;this.RULE_STACK.length===1&&f&&l===void 0&&(l=Er,u=1),!(l===void 0||u===void 0)&&this.shouldInRepetitionRecoveryBeTried(l,u,s)&&this.tryInRepetitionRecovery(t,e,r,l)}function ud(t,e,r){return r|e|t}var zn=class{constructor(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:ir.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(Z(r)){let n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...i,...o]}return r}validateNoLeftRecursion(e){return Mt(e,r=>xy(r,r,Zr))}validateEmptyOrAlternatives(e){return Mt(e,r=>wE(r,Zr))}validateAmbiguousAlternationAlternatives(e,r){return Mt(e,n=>kE(n,r,Zr))}validateSomeNonEmptyLookaheadPath(e,r){return CE(e,r,Zr)}buildLookaheadForAlternation(e){return mE(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,gE)}buildLookaheadForOptional(e){return hE(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,yc(e.prodType),yE)}};var dd=class{initLooksAhead(e){this.dynamicTokensEnabled=F(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:ir.dynamicTokensEnabled,this.maxLookahead=F(e,"maxLookahead")?e.maxLookahead:ir.maxLookahead,this.lookaheadStrategy=F(e,"lookaheadStrategy")?e.lookaheadStrategy:new zn({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){D(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:i,option:o,repetitionMandatory:s,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:c}=Cq(r);D(n,l=>{let u=l.idx===0?"":l.idx;this.TRACE_INIT(`${hr(l)}${u}`,()=>{let f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:l.idx,rule:r,maxLookahead:l.maxLookahead||this.maxLookahead,hasPredicates:l.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),d=ud(this.fullRuleNameToShort[r.name],256,l.idx);this.setLaFuncCache(d,f)})}),D(i,l=>{this.computeLookaheadFunc(r,l.idx,768,"Repetition",l.maxLookahead,hr(l))}),D(o,l=>{this.computeLookaheadFunc(r,l.idx,512,"Option",l.maxLookahead,hr(l))}),D(s,l=>{this.computeLookaheadFunc(r,l.idx,1024,"RepetitionMandatory",l.maxLookahead,hr(l))}),D(a,l=>{this.computeLookaheadFunc(r,l.idx,1536,"RepetitionMandatoryWithSeparator",l.maxLookahead,hr(l))}),D(c,l=>{this.computeLookaheadFunc(r,l.idx,1280,"RepetitionWithSeparator",l.maxLookahead,hr(l))})})})}computeLookaheadFunc(e,r,n,i,o,s){this.TRACE_INIT(`${s}${r===0?"":r}`,()=>{let a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),c=ud(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(c,a)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return ud(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},Ay=class extends nr{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},fd=new Ay;function Cq(t){fd.reset(),t.accept(fd);let e=fd.dslMethods;return fd.reset(),e}function ky(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function Cy(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function OE(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function LE(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var Eq="name";function Ey(t,e){Object.defineProperty(t,Eq,{enumerable:!1,configurable:!0,writable:!1,value:e})}function _q(t,e){let r=Ce(t),n=r.length;for(let i=0;i<n;i++){let o=r[i],s=t[o],a=s.length;for(let c=0;c<a;c++){let l=s[c];l.tokenTypeIdx===void 0&&this[l.name](l.children,e)}}}function ME(t,e){let r=function(){};Ey(r,t+"BaseSemantics");let n={visit:function(i,o){if(U(i)&&(i=i[0]),!Vt(i))return this[i.name](i.children,o)},validateVisitor:function(){let i=$q(this,e);if(!Z(i)){let o=_(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function FE(t,e,r){let n=function(){};Ey(n,t+"BaseSemanticsWithDefaults");let i=Object.create(r.prototype);return D(e,o=>{i[o]=_q}),n.prototype=i,n.prototype.constructor=n,n}var _y;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(_y||(_y={}));function $q(t,e){return Nq(t,e)}function Nq(t,e){let r=kt(e,i=>tr(t[i])===!1),n=_(r,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:_y.MISSING_METHOD,methodName:i}));return Rn(n)}var gd=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=F(e,"nodeLocationTracking")?e.nodeLocationTracking:ir.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=ze,this.cstFinallyStateUpdate=ze,this.cstPostTerminal=ze,this.cstPostNonTerminal=ze,this.cstPostRule=ze;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Cy,this.setNodeLocationFromNode=Cy,this.cstPostRule=ze,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=ze,this.setNodeLocationFromNode=ze,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=ky,this.setNodeLocationFromNode=ky,this.cstPostRule=ze,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=ze,this.setNodeLocationFromNode=ze,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=ze,this.setNodeLocationFromNode=ze,this.cstPostRule=ze,this.setInitialNodeLocation=ze;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];OE(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];LE(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(Vt(this.baseCstVisitorConstructor)){let e=ME(this.className,Ce(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(Vt(this.baseCstVisitorWithDefaultsConstructor)){let e=FE(this.className,Ce(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var yd=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):ea}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?ea:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Td=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=ta){if(qe(this.definedRulesNames,e)){let s={message:Zr.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:Tt.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(s)}this.definedRulesNames.push(e);let i=this.defineRule(e,r,n);return this[e]=i,i}OVERRIDE_RULE(e,r,n=ta){let i=bE(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if(Ii(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Bf(Re(this.gastProductionsCache))}};var xd=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Xs,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},F(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(U(e)){if(Z(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(U(e))this.tokensMap=Ve(e,(o,s)=>(o[s.name]=s,o),{});else if(F(e,"modes")&&zt(ot(Re(e.modes)),rE)){let o=ot(Re(e.modes)),s=Hs(o);this.tokensMap=Ve(s,(a,c)=>(a[c.name]=c,a),{})}else if(Be(e))this.tokensMap=_e(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Er;let n=F(e,"modes")?ot(Re(e.modes)):Re(e),i=zt(n,o=>Z(o.categoryMatches));this.tokenMatcher=i?Xs:Hn,Kn(Re(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=F(n,"resyncEnabled")?n.resyncEnabled:ta.resyncEnabled,o=F(n,"recoveryValueFunc")?n.recoveryValueFunc:ta.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=e,this.fullRuleNameToShort[e]=s;let a;return this.outputCst===!0?a=function(...u){try{this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,u);let f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}}:a=function(...u){try{return this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,u)}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(Ii(e)){let s=e;if(o){let a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(s.resyncedTokens=this.reSyncTo(a),this.outputCst){let c=this.CST_STACK[this.CST_STACK.length-1];return c.recoveredNode=!0,c}else return n(e);else{if(this.outputCst){let c=this.CST_STACK[this.CST_STACK.length-1];c.recoveredNode=!0,s.partialCstResult=c}throw s}}else{if(i)return this.moveToTerminatedState(),n(e);throw s}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let s=e.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=e;if(i.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=r;if(i.call(this)===!0){let s=this.doSingleRepetition(o);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,je.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],i,1024,e,rd)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,gc],a,1536,e,gc)}else throw this.raiseEarlyExitException(e,je.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let a=r.GATE;if(a!==void 0){let c=i;i=()=>a.call(this)&&c.call(this)}}else o=r;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],i,768,e,td,s)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,hc],a,1280,e,hc)}}repetitionSepSecondInternal(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),i=U(e)?e:e.DEF,s=this.getLaFuncFromCache(n).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new vc(r,e))}}subruleInternal(e,r,n){let i;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw Ii(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let i;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(o){i=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i}consumeInternalError(e,r,n){let i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new lo(i,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===Sy?n:o}}else throw n}saveRecogState(){let e=this.errors,r=_e(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Er)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var vd=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=F(e,"errorMessageProvider")?e.errorMessageProvider:ir.errorMessageProvider}SAVE_ERROR(e){if(Ii(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:_e(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return _e(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=Qs(e,o,r,this.maxLookahead)[0],c=[];for(let u=1;u<=this.maxLookahead;u++)c.push(this.LA(u));let l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:c,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new Rc(l,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=Js(e,i,this.maxLookahead),s=[];for(let l=1;l<=this.maxLookahead;l++)s.push(this.LA(l));let a=this.LA(0),c=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:s,previous:a,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new xc(c,this.LA(1),a))}};var Rd=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(Vt(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return id([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=Ct(e.ruleStack),i=this.getGAstProductions()[r];return new ed(i,e).startWalking()}};var bd={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(bd);var UE=!0,qE=Math.pow(2,8)-1,jE=Zf({name:"RECORDING_PHASE_TOKEN",pattern:tt.NA});Kn([jE]);var HE=co(jE,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(HE);var Iq={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Sd=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,i){return this.consumeInternalRecord(n,e,i)},this[`SUBRULE${r}`]=function(n,i){return this.subruleInternalRecord(n,e,i)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return ea}topLevelRuleRecord(e,r){try{let n=new rr({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return Ac.call(this,he,e,r)}atLeastOneInternalRecord(e,r){Ac.call(this,Ne,r,e)}atLeastOneSepFirstInternalRecord(e,r){Ac.call(this,Pe,r,e,UE)}manyInternalRecord(e,r){Ac.call(this,re,r,e)}manySepFirstInternalRecord(e,r){Ac.call(this,be,r,e,UE)}orInternalRecord(e,r){return Dq.call(this,e,r)}subruleInternalRecord(e,r,n){if(Ad(r),!e||F(e,"ruleName")===!1){let a=new Error(`<SUBRULE${GE(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}let i=Sn(this.recordingProdStack),o=e.ruleName,s=new me({idx:r,nonTerminalName:o,label:n?.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?Iq:bd}consumeInternalRecord(e,r,n){if(Ad(r),!uy(e)){let s=new Error(`<CONSUME${GE(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=Sn(this.recordingProdStack),o=new ee({idx:r,terminalType:e,label:n?.LABEL});return i.definition.push(o),HE}};function Ac(t,e,r,n=!1){Ad(r);let i=Sn(this.recordingProdStack),o=tr(e)?e:e.DEF,s=new t({definition:[],idx:r});return n&&(s.separator=e.SEP),F(e,"MAX_LOOKAHEAD")&&(s.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(s),o.call(this),i.definition.push(s),this.recordingProdStack.pop(),bd}function Dq(t,e){Ad(e);let r=Sn(this.recordingProdStack),n=U(t)===!1,i=n===!1?t:t.DEF,o=new we({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});F(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let s=cc(i,a=>tr(a.GATE));return o.hasPredicates=s,r.definition.push(o),D(i,a=>{let c=new $e({definition:[]});o.definition.push(c),F(a,"IGNORE_AMBIGUITIES")?c.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:F(a,"GATE")&&(c.ignoreAmbiguities=!0),this.recordingProdStack.push(c),a.ALT.call(this),this.recordingProdStack.pop()}),bd}function GE(t){return t===0?"":`${t}`}function Ad(t){if(t<0||t>qE){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${qE+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var wd=class{initPerformanceTracer(e){if(F(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=ir.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:i,value:o}=uc(r),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${n}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,o}else return r()}};function KE(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(i=>{if(i==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]})})}var ea=co(Er,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(ea);var ir=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Bn,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),ta=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),Tt;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Tt||(Tt={}));function kd(t=void 0){return function(){return t}}var bc=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{fc(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),D(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=EE({rules:Re(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(Z(n)&&this.skipValidations===!1){let i=_E({rules:Re(this.gastProductionsCache),tokenTypes:Re(this.tokensMap),errMsgProvider:Zr,grammarName:r}),o=RE({lookaheadStrategy:this.lookaheadStrategy,rules:Re(this.gastProductionsCache),tokenTypes:Re(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(i,o)}}),Z(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=LC(Re(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,o;(o=(i=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(i,{rules:Re(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Re(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!Z(this.definitionErrors))throw e=_(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),F(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=F(r,"skipValidations")?r.skipValidations:ir.skipValidations}};bc.DEFER_DEFINITION_ERRORS_HANDLING=!1;KE(bc,[ld,dd,gd,yd,xd,Td,vd,Rd,Sd,wd]);var wc=class extends bc{constructor(e,r=ir){let n=_e(r);n.outputCst=!1,super(e,n)}};function uo(t,e,r){return`${t.name}_${e}_${r}`}var Di=1,Lq=2,WE=4,BE=5;var ia=7,Mq=8,Fq=9,Uq=10,qq=11,zE=12,kc=class{constructor(e){this.target=e}isEpsilon(){return!1}},ra=class extends kc{constructor(e,r){super(e),this.tokenType=r}},Cc=class extends kc{constructor(e){super(e)}isEpsilon(){return!0}},na=class extends kc{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function VE(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};Gq(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=fo(e,i,i);o!==void 0&&Qq(e,i,o)}return e}function Gq(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=Et(t,i,void 0,{type:Lq}),s=Et(t,i,void 0,{type:ia});o.stop=s,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,s)}}function XE(t,e,r){return r instanceof ee?Ny(t,e,r.terminalType,r):r instanceof me?Jq(t,e,r):r instanceof we?Bq(t,e,r):r instanceof he?zq(t,e,r):r instanceof re?jq(t,e,r):r instanceof be?Hq(t,e,r):r instanceof Ne?Kq(t,e,r):r instanceof Pe?Wq(t,e,r):fo(t,e,r)}function jq(t,e,r){let n=Et(t,e,r,{type:BE});Oi(t,n);let i=oa(t,e,n,r,fo(t,e,r));return JE(t,e,r,i)}function Hq(t,e,r){let n=Et(t,e,r,{type:BE});Oi(t,n);let i=oa(t,e,n,r,fo(t,e,r)),o=Ny(t,e,r.separator,r);return JE(t,e,r,i,o)}function Kq(t,e,r){let n=Et(t,e,r,{type:WE});Oi(t,n);let i=oa(t,e,n,r,fo(t,e,r));return YE(t,e,r,i)}function Wq(t,e,r){let n=Et(t,e,r,{type:WE});Oi(t,n);let i=oa(t,e,n,r,fo(t,e,r)),o=Ny(t,e,r.separator,r);return YE(t,e,r,i,o)}function Bq(t,e,r){let n=Et(t,e,r,{type:Di});Oi(t,n);let i=_(r.definition,s=>XE(t,e,s));return oa(t,e,n,r,...i)}function zq(t,e,r){let n=Et(t,e,r,{type:Di});Oi(t,n);let i=oa(t,e,n,r,fo(t,e,r));return Vq(t,e,r,i)}function fo(t,e,r){let n=kt(_(r.definition,i=>XE(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:Yq(t,n)}function YE(t,e,r,n,i){let o=n.left,s=n.right,a=Et(t,e,r,{type:qq});Oi(t,a);let c=Et(t,e,r,{type:zE});return o.loopback=a,c.loopback=a,t.decisionMap[uo(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=a,pt(s,a),i===void 0?(pt(a,o),pt(a,c)):(pt(a,c),pt(a,i.left),pt(i.right,o)),{left:o,right:c}}function JE(t,e,r,n,i){let o=n.left,s=n.right,a=Et(t,e,r,{type:Uq});Oi(t,a);let c=Et(t,e,r,{type:zE}),l=Et(t,e,r,{type:Fq});return a.loopback=l,c.loopback=l,pt(a,o),pt(a,c),pt(s,l),i!==void 0?(pt(l,c),pt(l,i.left),pt(i.right,o)):pt(l,a),t.decisionMap[uo(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=a,{left:a,right:c}}function Vq(t,e,r,n){let i=n.left,o=n.right;return pt(i,o),t.decisionMap[uo(e,"Option",r.idx)]=i,n}function Oi(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function oa(t,e,r,n,...i){let o=Et(t,e,n,{type:Mq,start:r});r.end=o;for(let a of i)a!==void 0?(pt(r,a.left),pt(a.right,o)):pt(r,o);let s={left:r,right:o};return t.decisionMap[uo(e,Xq(n),n.idx)]=r,s}function Xq(t){if(t instanceof we)return"Alternation";if(t instanceof he)return"Option";if(t instanceof re)return"Repetition";if(t instanceof be)return"RepetitionWithSeparator";if(t instanceof Ne)return"RepetitionMandatory";if(t instanceof Pe)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function Yq(t,e){let r=e.length;for(let o=0;o<r-1;o++){let s=e[o],a;s.left.transitions.length===1&&(a=s.left.transitions[0]);let c=a instanceof na,l=a,u=e[o+1].left;s.left.type===Di&&s.right.type===Di&&a!==void 0&&(c&&l.followState===s.right||a.target===s.right)?(c?l.followState=u:a.target=u,Zq(t,s.right)):pt(s.right,u)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function Ny(t,e,r,n){let i=Et(t,e,n,{type:Di}),o=Et(t,e,n,{type:Di});return Py(i,new ra(o,r)),{left:i,right:o}}function Jq(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=Et(t,e,r,{type:Di}),s=Et(t,e,r,{type:Di}),a=new na(i,n,s);return Py(o,a),{left:o,right:s}}function Qq(t,e,r){let n=t.ruleToStartState.get(e);pt(n,r.left);let i=t.ruleToStopState.get(e);return pt(r.right,i),{left:n,right:i}}function pt(t,e){let r=new Cc(e);Py(t,r)}function Et(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function Py(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function Zq(t,e){t.states.splice(t.states.indexOf(e),1)}var Ec={},sa=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=Iy(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return _(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function Iy(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function eG(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var Cd=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},QE=new Cd,_c=class extends zn{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=VE(e.rules),this.dfas=tG(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,c=uo(n,"Alternation",r),u=this.atn.decisionMap[c].decision,f=_(sd({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),d=>_(d,p=>p[0]));if(ZE(f,!1)&&!o){let d=Ve(f,(p,T,R)=>(D(T,b=>{b&&(p[b.tokenTypeIdx]=R,D(b.categoryMatches,S=>{p[S]=R}))}),p),{});return i?function(p){var T;let R=this.LA(1),b=d[R.tokenTypeIdx];if(p!==void 0&&b!==void 0){let S=(T=p[b])===null||T===void 0?void 0:T.GATE;if(S!==void 0&&S.call(this)===!1)return}return b}:function(){let p=this.LA(1);return d[p.tokenTypeIdx]}}else return i?function(d){let p=new Cd,T=d===void 0?0:d.length;for(let b=0;b<T;b++){let S=d?.[b].GATE;p.set(b,S===void 0||S.call(this))}let R=Dy.call(this,s,u,p,a);return typeof R=="number"?R:void 0}:function(){let d=Dy.call(this,s,u,QE,a);return typeof d=="number"?d:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,c=uo(n,i,r),u=this.atn.decisionMap[c].decision,f=_(sd({maxLookahead:1,occurrence:r,prodType:i,rule:n}),d=>_(d,p=>p[0]));if(ZE(f)&&f[0][0]&&!o){let d=f[0],p=ot(d);if(p.length===1&&Z(p[0].categoryMatches)){let R=p[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===R}}else{let T=Ve(p,(R,b)=>(b!==void 0&&(R[b.tokenTypeIdx]=!0,D(b.categoryMatches,S=>{R[S]=!0})),R),{});return function(){let R=this.LA(1);return T[R.tokenTypeIdx]===!0}}}return function(){let d=Dy.call(this,s,u,QE,a);return typeof d=="object"?!1:d===0}}};function ZE(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let s=[o.tokenTypeIdx].concat(o.categoryMatches);for(let a of s)if(r.has(a)){if(!i.has(a))return!1}else r.add(a),i.add(a)}}return!0}function tG(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=eG(t.decisionStates[n],n);return r}function Dy(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let a=dG(i.atnStartState);o=r_(i,t_(a)),i.start=o}return rG.apply(this,[i,o,r,n])}function rG(t,e,r,n){let i=e,o=1,s=[],a=this.LA(o++);for(;;){let c=cG(i,a);if(c===void 0&&(c=nG.apply(this,[t,i,a,o,r,n])),c===Ec)return aG(s,i,a);if(c.isAcceptState===!0)return c.prediction;i=c,s.push(a),a=this.LA(o++)}}function nG(t,e,r,n,i,o){let s=lG(e.configs,r,i);if(s.size===0)return e_(t,e,r,Ec),Ec;let a=t_(s),c=fG(s,i);if(c!==void 0)a.isAcceptState=!0,a.prediction=c,a.configs.uniqueAlt=c;else if(gG(s)){let l=CC(s.alts);a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l,iG.apply(this,[t,n,s.alts,o])}return a=e_(t,e,r,a),a}function iG(t,e,r,n){let i=[];for(let l=1;l<=e;l++)i.push(this.LA(l).tokenType);let o=t.atnStartState,s=o.rule,a=o.production,c=oG({topLevelRule:s,ambiguityIndices:r,production:a,prefixPath:i});n(c)}function oG(t){let e=_(t.prefixPath,i=>Wn(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${sG(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function sG(t){if(t instanceof me)return"SUBRULE";if(t instanceof he)return"OPTION";if(t instanceof we)return"OR";if(t instanceof Ne)return"AT_LEAST_ONE";if(t instanceof Pe)return"AT_LEAST_ONE_SEP";if(t instanceof be)return"MANY_SEP";if(t instanceof re)return"MANY";if(t instanceof ee)return"CONSUME";throw Error("non exhaustive match")}function aG(t,e,r){let n=Mt(e.configs.elements,o=>o.state.transitions),i=DC(n.filter(o=>o instanceof ra).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function cG(t,e){return t.edges[e.tokenTypeIdx]}function lG(t,e,r){let n=new sa,i=[];for(let s of t.elements){if(r.is(s.alt)===!1)continue;if(s.state.type===ia){i.push(s);continue}let a=s.state.transitions.length;for(let c=0;c<a;c++){let l=s.state.transitions[c],u=uG(l,e);u!==void 0&&n.add({state:u,alt:s.alt,stack:s.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new sa;for(let s of n.elements)Ed(s,o)}if(i.length>0&&!mG(o))for(let s of i)o.add(s);return o}function uG(t,e){if(t instanceof ra&&mc(e,t.tokenType))return t.target}function fG(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function t_(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function e_(t,e,r,n){return n=r_(t,n),e.edges[r.tokenTypeIdx]=n,n}function r_(t,e){if(e===Ec)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function dG(t){let e=new sa,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Ed(o,e)}return e}function Ed(t,e){let r=t.state;if(r.type===ia){if(t.stack.length>0){let i=[...t.stack],s={state:i.pop(),alt:t.alt,stack:i};Ed(s,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],s=pG(t,o);s!==void 0&&Ed(s,e)}}function pG(t,e){if(e instanceof Cc)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof na){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function mG(t){for(let e of t.elements)if(e.state.type===ia)return!0;return!1}function hG(t){for(let e of t.elements)if(e.state.type!==ia)return!1;return!0}function gG(t){if(hG(t))return!0;let e=yG(t.elements);return TG(e)&&!xG(e)}function yG(t){let e=new Map;for(let r of t){let n=Iy(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function TG(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function xG(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}qi();var _d=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new Ly(e),this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Pd;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Nd(e.startOffset,e.image.length,Da(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.content.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Nd(r.startOffset,r.image.length,Da(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.content.length;o++){let s=e.content[o],{offset:a,end:c}=s;if(Br(s)&&n>a&&i<c){this.addHiddenToken(s,r);return}else if(i<=a){e.content.splice(o,0,r);return}}e.content.push(r)}},$d=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Nd=class extends $d{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}},Pd=class extends $d{constructor(){super(...arguments),this.content=new Oy(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:Qt.create(0,0),end:Qt.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},Oy=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},Ly=class extends Pd{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};var Fy=Symbol("Datatype");function My(t){return t.$type===Fy}var n_="\u200B",i_=t=>t.endsWith(n_)?t:t+n_,Id=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new qy(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},Dd=class extends Id{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new _d,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:wr(e)?Fy:Yr(e),i=this.wrapper.DEFINE_RULE(i_(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Fy&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(i)){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:s,isCrossRef:a}=this.getAssignment(n),c=this.current;if(s){let l=Ze(n)?i.image:this.converter.convert(i.image,o);this.assign(s.operator,s.feature,l,o,a)}else if(My(c)){let l=i.image;Ze(n)||(l=this.converter.convert(l,o).toString()),c.value+=l}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let s=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(s,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let s=this.current;if(My(s))s.value+=e.toString();else{let a=e.$type,c=this.assignWithoutOverride(e,s);a&&(c.$type=a);let l=c;this.stack.pop(),this.stack.push(l)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return hA(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),My(r)?this.converter.convert(r.value,r.$cstNode):(hu(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=xe(e,ce);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?It(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let s=this.current,a;switch(o&&typeof n=="string"?a=this.linker.buildReference(s,r,i,n):a=n,e){case"=":{s[r]=a;break}case"?=":{s[r]=!0;break}case"+=":Array.isArray(s[r])||(s[r]=[]),s[r].push(a)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r)){let o=e[n];o===void 0?e[n]=i:Array.isArray(o)&&Array.isArray(i)&&(i.push(...o),e[n]=i)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},Uy=class{buildMismatchTokenMessage(e){return Bn.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Bn.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Bn.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Bn.buildEarlyExitMessage(e)}},$c=class extends Uy{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},Od=class extends Id{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(i_(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},vG={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new $c},qy=class extends wc{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},vG),{lookaheadStrategy:n?new zn({maxLookahead:r.maxLookahead}):new _c}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};var Nc=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Ld(t){throw new Error("Error! The input value was not handled.")}function Fd(t,e,r){return RG({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function RG(t,e){let r=os(e,!1),n=J(e.rules).filter(M).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,po(o,i.definition)))}}function po(t,e,r=!1){let n;if(Ze(e))n=EG(t,e);else if(ye(e))n=SG(t,e);else if(ce(e))n=po(t,e.terminal);else if(It(e))n=o_(t,e);else if(Te(e))n=AG(t,e);else if(vr(e))n=wG(t,e);else if(Rr(e))n=kG(t,e);else if(At(e))n=CG(t,e);else if(JS(e)){let i=t.consume++;n=()=>t.parser.consume(i,Er,e)}else throw new Nc(e.$cstNode,`Unexpected element type: ${e.$type}`);return s_(t,r?void 0:Md(e),n,e.cardinality)}function SG(t,e){let r=Yr(e);return()=>t.parser.action(r,e)}function AG(t,e){let r=e.rule.ref;if(M(r)){let n=t.subrule++,i=e.arguments.length>0?bG(r,e.arguments):()=>({});return o=>t.parser.subrule(n,a_(t,r),e,i(o))}else if(pe(r)){let n=t.consume++,i=Gy(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)Ld(r);else throw new Nc(e.$cstNode,`Undefined rule type: ${e.$type}`)}function bG(t,e){let r=e.map(n=>Vn(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let s=t.parameters[o],a=r[o];i[s.name]=a(n)}return i}}function Vn(t){if(PS(t)){let e=Vn(t.left),r=Vn(t.right);return n=>e(n)||r(n)}else if($S(t)){let e=Vn(t.left),r=Vn(t.right);return n=>e(n)&&r(n)}else if(MS(t)){let e=Vn(t.value);return r=>!e(r)}else if(zo(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(OS(t)){let e=!!t.true;return()=>e}Ld(t)}function wG(t,e){if(e.elements.length===1)return po(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:po(t,i,!0)},s=Md(i);s&&(o.GATE=Vn(s)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let s={ALT:()=>o.ALT(i)},a=o.GATE;return a&&(s.GATE=()=>a(i)),s}))}}function kG(t,e){if(e.elements.length===1)return po(t,e.elements[0]);let r=[];for(let a of e.elements){let c={ALT:po(t,a,!0)},l=Md(a);l&&(c.GATE=Vn(l)),r.push(c)}let n=t.or++,i=(a,c)=>{let l=c.getRuleStack().join("-");return`uGroup_${a}_${l}`},o=a=>t.parser.alternatives(n,r.map((c,l)=>{let u={ALT:()=>!0},f=t.parser;u.ALT=()=>{if(c.ALT(a),!f.isRecording()){let p=i(n,f);f.unorderedGroups.get(p)||f.unorderedGroups.set(p,[]);let T=f.unorderedGroups.get(p);typeof T?.[l]>"u"&&(T[l]=!0)}};let d=c.GATE;return d?u.GATE=()=>d(a):u.GATE=()=>{let p=f.unorderedGroups.get(i(n,f));return!p?.[l]},u})),s=s_(t,Md(e),o,"*");return a=>{s(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function CG(t,e){let r=e.elements.map(n=>po(t,n));return n=>r.forEach(i=>i(n))}function Md(t){if(At(t))return t.guardCondition}function o_(t,e,r=e.terminal){if(r)if(Te(r)&&M(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,a_(t,r.rule.ref),e,i)}else if(Te(r)&&pe(r.rule.ref)){let n=t.consume++,i=Gy(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if(Ze(r)){let n=t.consume++,i=Gy(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=Qa(e.type.ref),i=n?.terminal;if(!i)throw new Error("Could not find name assignment for type: "+Yr(e.type.ref));return o_(t,e,i)}}function EG(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function s_(t,e,r,n){let i=e&&Vn(e);if(!n)if(i){let o=t.or++;return s=>t.parser.alternatives(o,[{ALT:()=>r(s),GATE:()=>i(s)},{ALT:kd(),GATE:()=>!i(s)}])}else return r;if(n==="*"){let o=t.many++;return s=>t.parser.many(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else if(n==="+"){let o=t.many++;if(i){let s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(a)}),GATE:()=>i(a)},{ALT:kd(),GATE:()=>!i(a)}])}else return s=>t.parser.atLeastOne(o,{DEF:()=>r(s)})}else if(n==="?"){let o=t.optional++;return s=>t.parser.optional(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else Ld(n)}function a_(t,e){let r=_G(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function _G(t,e){if(M(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!M(n);)(At(n)||vr(n)||Rr(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function Gy(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function c_(t){let e=t.Grammar,r=t.parser.Lexer,n=new Od(t);return Fd(e,n,r.definition),n.finalize(),n}function l_(t){let e=$G(t);return e.finalize(),e}function $G(t){let e=t.Grammar,r=t.parser.Lexer,n=new Dd(t);return Fd(e,n,r.definition)}var Ud=class{buildTokens(e,r){let n=J(os(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(s=>{let a=s.PATTERN;typeof a=="object"&&a&&"test"in a&&Sg(a)?o.unshift(s):o.push(s)}),o}buildTerminalTokens(e){return e.filter(pe).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=Fr(e),n=r.flags.includes("u")?this.regexPatternFunction(r):r,i={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(i.GROUP=Sg(r)?tt.SKIPPED:"hidden"),i}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,i)=>(r.lastIndex=i,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(M).flatMap(i=>Fe(i).filter(Ze)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(MA(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i?.PATTERN;return o?.source&&FA("^"+o.source+"$",e.value)&&n.push(i),n},[])}};var qd=class{convert(e,r){let n=r.grammarSource;if(It(n)&&(n=qu(n)),Te(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return DG(r);case"STRING":return NG(r);case"ID":return IG(r)}switch((i=eo(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return MG(r);case"boolean":return FG(r);case"bigint":return OG(r);case"date":return LG(r);default:return r}}};function NG(t){let e="";for(let r=1;r<t.length-1;r++){let n=t.charAt(r);if(n==="\\"){let i=t.charAt(++r);e+=PG(i)}else e+=n}return e}function PG(t){switch(t){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return t}}function IG(t){return t.charAt(0)==="^"?t.substring(1):t}function DG(t){return parseInt(t)}function OG(t){return BigInt(t)}function LG(t){return new Date(t)}function MG(t){return Number(t)}function FG(t){return t.toLowerCase()==="true"}var u_=se(de(),1);var Gd=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=u_.CancellationToken.None){for(let n of Nn(e.parseResult.value))await Ue(r),mu(n).forEach(i=>this.doLink(i,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if(Ho(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o??this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,s={$refNode:n,$refText:i,get ref(){var a;if(lt(this._ref))return this._ref;if(mS(this._nodeDescription)){let c=o.loadAstNode(this._nodeDescription);this._ref=c??o.createLinkingError({reference:s,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let c=o.getLinkedNode({reference:s,container:e,property:r});if(c.error&&Y(e).state<Oe.ComputedScopes)return;this._ref=(a=c.node)!==null&&a!==void 0?a:c.error,this._nodeDescription=c.descr}return lt(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return Ho(this._ref)?this._ref:void 0}};return s}getLinkedNode(e){try{let r=this.getCandidate(e);if(Ho(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getOrCreateDocument(e.documentUri);return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=Y(e.container);n.state<Oe.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};function d_(t){return typeof t.$comment=="string"}function f_(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var jd=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r){let n=r?.replacer,i=(s,a)=>this.replacer(s,a,r);return JSON.stringify(e,n?(s,a)=>n(s,a,i):i,r?.space)}deserialize(e){let r=JSON.parse(e);return this.linkNode(r,r),r}replacer(e,r,{refText:n,sourceText:i,textRegions:o,comments:s}={}){var a,c,l;if(!this.ignoreProperties.has(e))if(_n(r)){let u=r.ref,f=n?r.$refText:void 0;return u?{$refText:f,$ref:"#"+(u&&this.astNodeLocator.getAstNodePath(u))}:{$refText:f,$error:(c=(a=r.error)===null||a===void 0?void 0:a.message)!==null&&c!==void 0?c:"Could not resolve reference"}}else{let u;if(o&&lt(r)&&(u=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&u?.$textRegion))try{u.$textRegion.documentURI=Y(r).uri.toString()}catch{}return i&&!e&&lt(r)&&(u??(u=Object.assign({},r)),u.$sourceText=(l=r.$cstNode)===null||l===void 0?void 0:l.text),s&&lt(r)&&(u??(u=Object.assign({},r)),u.$comment=this.commentProvider.getComment(r)),u??r}}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),i=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let s=mi(e.$cstNode,o).map(r);s.length!==0&&(i[o]=s)}),e}}linkNode(e,r,n,i,o){for(let[a,c]of Object.entries(e))if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];f_(u)?c[l]=this.reviveReference(e,a,r,u):lt(u)&&this.linkNode(u,r,e,a,l)}else f_(c)?e[a]=this.reviveReference(e,a,r,c):lt(c)&&this.linkNode(c,r,e,a);let s=e;s.$container=n,s.$containerProperty=i,s.$containerIndex=o}reviveReference(e,r,n,i){let o=i.$refText;if(i.$ref){let s=this.getRefNode(n,i.$ref);return o||(o=this.nameProvider.getName(s)),{$refText:o??"",ref:s}}else if(i.$error){let s={$refText:o??""};return s.error={container:e,property:r,message:i.$error,reference:s},s}else return}getRefNode(e,r){return this.astNodeLocator.getAstNode(e,r.substring(1))}};var Hd=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=le.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};var p_=se(de(),1);var Kd=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=Y(e)){r??(r=this.nameProvider.getName(e));let i=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${i} has no name.`);let o,s=()=>{var a;return o??(o=jt((a=this.nameProvider.getNameNode(e))!==null&&a!==void 0?a:e.$cstNode))};return{node:e,name:r,get nameSegment(){return s()},selectionSegment:jt(e.$cstNode),type:e.$type,documentUri:n.uri,path:i}}},Wd=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=p_.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of Nn(i))await Ue(r),mu(o).filter(s=>!Ho(s)).forEach(s=>{let a=this.createDescription(s);a&&n.push(a)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=Y(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:jt(n),local:le.equals(r.documentUri,i)}}};var Bd=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let s=o.indexOf(this.indexSeparator);if(s>0){let a=o.substring(0,s),c=parseInt(o.substring(s+1)),l=i[a];return l?.[c]}return i[o]},e)}};var m_=se(Qe(),1),zd=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.initialized=!1,this.serviceRegistry=e.ServiceRegistry,this.connection=e.lsp.Connection,e.lsp.LanguageServer.onInitialize(r=>{var n,i;this.workspaceConfig=(i=(n=r.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&i!==void 0?i:!1}),e.lsp.LanguageServer.onInitialized(r=>{var n;let i=this.serviceRegistry.all;(n=e.lsp.Connection)===null||n===void 0||n.client.register(m_.DidChangeConfigurationNotification.type,{section:i.map(o=>this.toSectionName(o.LanguageMetaData.languageId))})})}async initialize(){if(this.workspaceConfig&&this.connection){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await this.connection.workspace.getConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}this.initialized=!0}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){this.initialized||await this.initialize();let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var aa=se(de(),1);var Vd=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new Ae,this.buildState=new Map,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=aa.CancellationToken.None){var i,o;for(let s of e){let a=s.uri.toString();if(s.state===Oe.Validated){if(typeof r.validation=="boolean"&&r.validation)s.state=Oe.IndexedReferences,s.diagnostics=void 0,this.buildState.delete(a);else if(typeof r.validation=="object"){let c=this.buildState.get(a),l=(i=c?.result)===null||i===void 0?void 0:i.validationChecks;if(l){let f=((o=r.validation.categories)!==null&&o!==void 0?o:za.all).filter(d=>!l.includes(d));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:f})},result:c.result}),s.state=Oe.IndexedReferences)}}}else this.buildState.delete(a)}await this.emitUpdate(e.map(s=>s.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=aa.CancellationToken.None){for(let s of r)this.langiumDocuments.deleteDocument(s),this.buildState.delete(s.toString());this.indexManager.remove(r);for(let s of e)this.langiumDocuments.invalidateDocument(s)||this.langiumDocuments.getOrCreateDocument(s),this.buildState.delete(s.toString());let i=J(e).concat(r).map(s=>s.toString()).toSet();this.langiumDocuments.all.filter(s=>!i.has(s.uri.toString())&&this.shouldRelink(s,i)).forEach(s=>{this.serviceRegistry.getServices(s.uri).references.Linker.unlink(s),s.state=Math.min(s.state,Oe.ComputedScopes),s.diagnostics=void 0}),await this.emitUpdate(e,r),await Ue(n);let o=this.langiumDocuments.all.filter(s=>{var a;return s.state<Oe.Linked||!(!((a=this.buildState.get(s.uri.toString()))===null||a===void 0)&&a.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),aa.Disposable.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,Oe.Parsed,n,o=>{this.langiumDocumentFactory.update(o)}),await this.runCancelable(e,Oe.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,Oe.ComputedScopes,n,async o=>{let s=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await s.computeLocalScopes(o,n)}),await this.runCancelable(e,Oe.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,Oe.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o));await this.runCancelable(i,Oe.Validated,n,o=>this.validate(o,n));for(let o of e){let s=this.buildState.get(o.uri.toString());s&&(s.completed=!0)}}prepareBuild(e,r){for(let n of e){let i=n.uri.toString(),o=this.buildState.get(i);(!o||o.completed)&&this.buildState.set(i,{completed:!1,options:r,result:o?.result})}}async runCancelable(e,r,n,i){let o=e.filter(s=>s.state<r);for(let s of o)await Ue(n),await i(s),s.state=r;await this.notifyBuildPhase(o,r,n)}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),aa.Disposable.create(()=>{this.buildPhaseListeners.delete(e,r)})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await Ue(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,i;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,s=this.getBuildOptions(e).validation,a=typeof s=="object"?s:void 0,c=await o.validateDocument(e,a,r);e.diagnostics?e.diagnostics.push(...c):e.diagnostics=c;let l=this.buildState.get(e.uri.toString());if(l){(n=l.result)!==null&&n!==void 0||(l.result={});let u=(i=a?.categories)!==null&&i!==void 0?i:za.all;l.result.validationChecks?l.result.validationChecks.push(...u):l.result.validationChecks=[...u]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var jy=se(de(),1);var Xd=class{constructor(e){this.simpleIndex=new Map,this.simpleTypeIndex=new Pu,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=Y(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(s=>{le.equals(s.targetUri,n)&&s.targetPath===r&&i.push(s)})}),J(i)}allElements(e,r){let n=J(this.simpleIndex.keys());return r&&(n=n.filter(i=>!r||r.has(i))),n.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,r){var n;return r?this.simpleTypeIndex.get(e,r,()=>{var o;return((o=this.simpleIndex.get(e))!==null&&o!==void 0?o:[]).filter(a=>this.astReflection.isSubtype(a.type,r))}):(n=this.simpleIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){for(let r of e){let n=r.toString();this.simpleIndex.delete(n),this.simpleTypeIndex.clear(n),this.referenceIndex.delete(n)}}async updateContent(e,r=jy.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r);for(let s of i)s.node=void 0;let o=e.uri.toString();this.simpleIndex.set(o,i),this.simpleTypeIndex.clear(o)}async updateReferences(e,r=jy.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(i=>!i.local&&r.has(i.targetUri.toString())):!1}};var h_=se(de(),1);var Yd=class{constructor(e){this.initialBuildOptions={},this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.MutexLock,e.lsp.LanguageServer.onInitialize(r=>{var n;this.folders=(n=r.workspaceFolders)!==null&&n!==void 0?n:void 0}),e.lsp.LanguageServer.onInitialized(r=>{this.mutex.lock(n=>{var i;return this.initializeWorkspace((i=this.folders)!==null&&i!==void 0?i:[],n)})})}async initializeWorkspace(e,r=h_.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(s=>s.LanguageMetaData.fileExtensions),i=[],o=s=>{i.push(s),this.langiumDocuments.hasDocument(s.uri)||this.langiumDocuments.addDocument(s)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(s=>[s,this.getRootFolder(s)]).map(async s=>this.traverseFolder(...s,n,o))),await Ue(r),await this.documentBuilder.build(i,this.initialBuildOptions,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return bt.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async s=>{if(this.includeEntry(e,s,n)){if(s.isDirectory)await this.traverseFolder(e,s.uri,n,i);else if(s.isFile){let a=this.langiumDocuments.getOrCreateDocument(s.uri);i(a)}}}))}includeEntry(e,r,n){let i=le.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=le.extname(r.uri);return n.includes(o)}return!1}};var Jd=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=g_(r)?Object.values(r):r;this.chevrotainLexer=new tt(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(g_(e))return e;let r=y_(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};function UG(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function y_(t){return t&&"modes"in t&&"defaultMode"in t}function g_(t){return!UG(t)&&!y_(t)}var ue=se(de(),1);function v_(t,e,r){let n,i;typeof t=="string"?(i=e,n=r):(i=t.range.start,n=e),i||(i=ue.Position.create(0,0));let o=S_(t),s=Wy(n),a=GG({lines:o,position:i,options:s});return BG({index:0,tokens:a,position:i})}function R_(t,e){let r=Wy(e),n=S_(t);if(n.length===0)return!1;let i=n[0],o=n[n.length-1],s=r.start,a=r.end;return!!s?.exec(i)&&!!a?.exec(o)}function S_(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(Fa)}var T_=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,qG=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function GG(t){var e,r,n;let i=[],o=t.position.line,s=t.position.character;for(let a=0;a<t.lines.length;a++){let c=a===0,l=a===t.lines.length-1,u=t.lines[a],f=0;if(c&&t.options.start){let p=(e=t.options.start)===null||e===void 0?void 0:e.exec(u);p&&(f=p.index+p[0].length)}else{let p=(r=t.options.line)===null||r===void 0?void 0:r.exec(u);p&&(f=p.index+p[0].length)}if(l){let p=(n=t.options.end)===null||n===void 0?void 0:n.exec(u);p&&(u=u.substring(0,p.index))}if(u=u.substring(0,WG(u)),Ky(u,f)>=u.length){if(i.length>0){let p=ue.Position.create(o,s);i.push({type:"break",content:"",range:ue.Range.create(p,p)})}}else{T_.lastIndex=f;let p=T_.exec(u);if(p){let T=p[0],R=p[1],b=ue.Position.create(o,s+f),S=ue.Position.create(o,s+f+T.length);i.push({type:"tag",content:R,range:ue.Range.create(b,S)}),f+=T.length,f=Ky(u,f)}if(f<u.length){let T=u.substring(f),R=Array.from(T.matchAll(qG));i.push(...jG(R,T,o,s+f))}}o++,s=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function jG(t,e,r,n){let i=[];if(t.length===0){let o=ue.Position.create(r,n),s=ue.Position.create(r,n+e.length);i.push({type:"text",content:e,range:ue.Range.create(o,s)})}else{let o=0;for(let a of t){let c=a.index,l=e.substring(o,c);l.length>0&&i.push({type:"text",content:e.substring(o,c),range:ue.Range.create(ue.Position.create(r,o+n),ue.Position.create(r,c+n))});let u=l.length+1,f=a[1];if(i.push({type:"inline-tag",content:f,range:ue.Range.create(ue.Position.create(r,o+u+n),ue.Position.create(r,o+u+f.length+n))}),u+=f.length,a.length===4){u+=a[2].length;let d=a[3];i.push({type:"text",content:d,range:ue.Range.create(ue.Position.create(r,o+u+n),ue.Position.create(r,o+u+d.length+n))})}else i.push({type:"text",content:"",range:ue.Range.create(ue.Position.create(r,o+u+n),ue.Position.create(r,o+u+n))});o=c+a[0].length}let s=e.substring(o);s.length>0&&i.push({type:"text",content:s,range:ue.Range.create(ue.Position.create(r,o+n),ue.Position.create(r,o+n+s.length))})}return i}var HG=/\S/,KG=/\s*$/;function Ky(t,e){let r=t.substring(e).match(HG);return r?e+r.index:t.length}function WG(t){let e=t.match(KG);if(e&&typeof e.index=="number")return e.index}function BG(t){var e,r,n,i;let o=ue.Position.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Qd([],ue.Range.create(o,o));let s=[];for(;t.index<t.tokens.length;){let l=zG(t,s[s.length-1]);l&&s.push(l)}let a=(r=(e=s[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,c=(i=(n=s[s.length-1])===null||n===void 0?void 0:n.range.end)!==null&&i!==void 0?i:o;return new Qd(s,ue.Range.create(a,c))}function zG(t,e){let r=t.tokens[t.index];if(r.type==="tag")return b_(t,!1);if(r.type==="text"||r.type==="inline-tag")return A_(t);VG(r,e),t.index++}function VG(t,e){if(e){let r=new Zd("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function A_(t){let e=t.tokens[t.index],r=e,n=e,i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(XG(t)),n=e,e=t.tokens[t.index];return new Ic(i,ue.Range.create(r.range.start,n.range.end))}function XG(t){return t.tokens[t.index].type==="inline-tag"?b_(t,!0):w_(t)}function b_(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),i=t.tokens[t.index];if(i?.type==="text")if(e){let o=w_(t);return new Pc(n,new Ic([o],o.range),e,ue.Range.create(r.range.start,o.range.end))}else{let o=A_(t);return new Pc(n,o,e,ue.Range.create(r.range.start,o.range.end))}else{let o=r.range;return new Pc(n,new Ic([],o),e,o)}}function w_(t){let e=t.tokens[t.index++];return new Zd(e.content,e.range)}function Wy(t){if(!t)return Wy({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:Hy(e,!0),end:Hy(r,!1),line:Hy(n,!0)}}function Hy(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?Dn(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var Qd=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=x_(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let i=n.toMarkdown(e);r+=x_(r)+i}return r.trim()}},Pc=class{constructor(e,r,n,i){this.name=e,this.content=r,this.inline=n,this.range=i}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e?.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let o=YG(this.name,r,e??{});if(typeof o=="string")return o}let n="";e?.tag==="italic"||e?.tag===void 0?n="*":e?.tag==="bold"?n="**":e?.tag==="bold-italic"&&(n="***");let i=`${n}@${this.name}${n}`;return this.content.inlines.length===1?i=`${i} \u2014 ${r}`:this.content.inlines.length>1&&(i=`${i}
${r}`),this.inline?`{${i}}`:i}};function YG(t,e,r){var n,i;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),s=e;if(o>0){let c=Ky(e,o);s=e.substring(c),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(s=`\`${s}\``),(i=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,s))!==null&&i!==void 0?i:JG(e,s)}}function JG(t,e){try{return bt.parse(t,!0),`[${e}](${t})`}catch{return t}}var Ic=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],i=this.inlines[r+1];e+=n.toString(),i&&i.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let i=this.inlines[n],o=this.inlines[n+1];r+=i.toMarkdown(e),o&&o.range.start.line>i.range.start.line&&(r+=`
`)}return r}},Zd=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function x_(t){return t.endsWith(`
`)?`
`:`

`}var ep=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&R_(r))return v_(r).toMarkdown({renderLink:(i,o)=>this.documentationLinkRenderer(e,i,o),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,r,n){var i;let o=(i=this.findNameInPrecomputedScopes(e,r))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let s=o.nameSegment.range.start.line+1,a=o.nameSegment.range.start.character+1,c=o.documentUri.with({fragment:`L${s},${a}`});return`[${n}](${c.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let i=Y(e).precomputedScopes;if(!i)return;let o=e;do{let a=i.get(o).find(c=>c.name===r);if(a)return a;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(i=>i.name===r)}};var tp=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return d_(e)?e.$comment:(r=vS(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};function nc(t){return{documentation:{CommentProvider:e=>new tp(e),DocumentationProvider:e=>new ep(e)},parser:{GrammarConfig:e=>qb(e),LangiumParser:e=>l_(e),CompletionParser:e=>c_(e),ValueConverter:()=>new qd,TokenBuilder:()=>new Ud,Lexer:e=>new Jd(e),ParserErrorMessageProvider:()=>new $c},lsp:{CompletionProvider:e=>new ms(e),DocumentSymbolProvider:e=>new Zu(e),HoverProvider:e=>new tf(e),FoldingRangeProvider:e=>new gs(e),ReferencesProvider:e=>new cf(e),DefinitionProvider:e=>new xs(e),DocumentHighlightProvider:e=>new Qu(e),RenameProvider:e=>new lf(e)},workspace:{AstNodeLocator:()=>new Bd,AstNodeDescriptionProvider:e=>new Kd(e),ReferenceDescriptionProvider:e=>new Wd(e)},references:{Linker:e=>new Gd(e),NameProvider:()=>new es,ScopeProvider:e=>new ds(e),ScopeComputation:e=>new fs(e),References:e=>new ys(e)},serializer:{JsonSerializer:e=>new jd(e)},validation:{DocumentValidator:e=>new Lu(e),ValidationRegistry:e=>new Eu(e)},shared:()=>t.shared}}function ic(t){return{ServiceRegistry:()=>new Hd,lsp:{Connection:()=>t.connection,LanguageServer:e=>new of(e),WorkspaceSymbolProvider:e=>new uf(e),NodeKindProvider:()=>new sf,FuzzyMatcher:()=>new ef},workspace:{LangiumDocuments:e=>new nf(e),LangiumDocumentFactory:e=>new rf(e),DocumentBuilder:e=>new Vd(e),TextDocuments:()=>new k_.TextDocuments(jo),IndexManager:e=>new Xd(e),WorkspaceManager:e=>new Yd(e),FileSystemProvider:e=>t.fileSystemProvider(e),MutexLock:()=>new Cu,ConfigurationProvider:e=>new zd(e)}}}var C_;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(C_||(C_={}));var ca=se(__(),1);var QG="Expression";var ZG="ExpressionType";var ej="ProcDeclaration";var tj="Statement";var rj="Unite";var nj="BinaryExpression";var ij="ConstantBoolean";var oj="ConstantInt";var sj="ProcCall";var $_="Sensor";var aj="ValCall";var cj="Addition";var lj="And";var uj="Equality";var fj="Greater";var dj="Lower";var pj="Multiplication";var mj="Or";var hj="Soustraction";var gj="Assignation";var yj="Block";var N_="ControlStructure";var P_="CustomAction";var Tj="Return";var I_="VarDeclaration";var xj="CM";var vj="MM";var Rj="DistanceCaptor";var Sj="If";var Aj="Repeat";var bj="While";var wj="Clock";var kj="Deplacement";var Cj="Speed";var Dc=class extends Ki{getAllTypes(){return["Addition","And","Assignation","BinaryExpression","Block","CM","Clock","ConstantBoolean","ConstantInt","ControlStructure","CustomAction","Deplacement","DistanceCaptor","Equality","Expression","ExpressionType","Greater","If","Lower","MM","Multiplication","Or","ProcCall","ProcDeclaration","Repeat","Return","Robot","Sensor","Soustraction","Speed","Statement","Unite","ValCall","VarDeclaration","While"]}computeIsSubtype(e,r){switch(e){case cj:case lj:case uj:case fj:case dj:case pj:case mj:case hj:return this.isSubtype(ZG,r);case gj:case yj:case N_:case P_:case Tj:case I_:return this.isSubtype(tj,r);case nj:case ij:case oj:case sj:case $_:case aj:return this.isSubtype(QG,r);case wj:case kj:case Cj:return this.isSubtype(P_,r);case xj:case vj:return this.isSubtype(rj,r);case Rj:return this.isSubtype($_,r);case Sj:case Aj:case bj:return this.isSubtype(N_,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"ProcCall:procdeclaration":return ej;case"ValCall:vardeclaration":return I_;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"ProcDeclaration":return{name:"ProcDeclaration",mandatory:[{name:"parameters",type:"array"}]};case"Robot":return{name:"Robot",mandatory:[{name:"function",type:"array"}]};case"ConstantBoolean":return{name:"ConstantBoolean",mandatory:[{name:"value",type:"boolean"}]};case"ProcCall":return{name:"ProcCall",mandatory:[{name:"arguments",type:"array"}]};case"Block":return{name:"Block",mandatory:[{name:"statements",type:"array"}]};default:return{name:e,mandatory:[]}}}},jle=new Dc;var rp,D_=()=>rp??(rp=ku(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Rob",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Robot",
      "entry": true,
      "returnType": {
        "$ref": "#/interfaces@0"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "function",
        "operator": "+=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@5"
          },
          "arguments": []
        },
        "cardinality": "*"
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Statement",
      "returnType": {
        "$ref": "#/interfaces@3"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@6"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@12"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@13"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@14"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@15"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@16"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@17"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@22"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@18"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@19"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@38"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Expression",
      "returnType": {
        "$ref": "#/interfaces@4"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@20"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@21"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@24"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@25"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Unite",
      "returnType": {
        "$ref": "#/interfaces@5"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@35"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@36"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ExpressionType",
      "returnType": {
        "$ref": "#/interfaces@6"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@26"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@27"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@28"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@29"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@33"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@31"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ProcDeclaration",
      "returnType": {
        "$ref": "#/interfaces@1"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "fun"
          },
          {
            "$type": "Assignment",
            "feature": "returnedType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "parameters",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@18"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": ",",
                    "cardinality": "?"
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "block",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Block",
      "returnType": {
        "$ref": "#/interfaces@2"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "statements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "statements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ],
        "cardinality": "?"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EString",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@46"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@44"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Types",
      "returnType": {
        "$ref": "#/types@0"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@9"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Types_Number",
      "returnType": {
        "$ref": "#/types@1"
      },
      "definition": {
        "$type": "Keyword",
        "value": "Number"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Types_Void",
      "returnType": {
        "$ref": "#/types@2"
      },
      "definition": {
        "$type": "Keyword",
        "value": "Void"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Types_Boolean",
      "returnType": {
        "$ref": "#/types@3"
      },
      "definition": {
        "$type": "Keyword",
        "value": "Boolean"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "If",
      "returnType": {
        "$ref": "#/interfaces@7"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "If"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "condition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Keyword",
            "value": "then"
          },
          {
            "$type": "Assignment",
            "feature": "then",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "else"
              },
              {
                "$type": "Assignment",
                "feature": "else",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@6"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "While",
      "returnType": {
        "$ref": "#/interfaces@9"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "While"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "condition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          },
          {
            "$type": "Assignment",
            "feature": "block",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Repeat",
      "returnType": {
        "$ref": "#/interfaces@10"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Repeat"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "condition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          },
          {
            "$type": "Assignment",
            "feature": "block",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Clock",
      "returnType": {
        "$ref": "#/interfaces@11"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Clock"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "time",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Deplacement",
      "returnType": {
        "$ref": "#/interfaces@13"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Deplacement"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "mouvement",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@39"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ","
          },
          {
            "$type": "Assignment",
            "feature": "deplacement_value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ","
          },
          {
            "$type": "Assignment",
            "feature": "unite",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Speed",
      "returnType": {
        "$ref": "#/interfaces@14"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "setSpeed"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ","
          },
          {
            "$type": "Assignment",
            "feature": "unite",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VarDeclaration",
      "returnType": {
        "$ref": "#/interfaces@15"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "="
              },
              {
                "$type": "Assignment",
                "feature": "expression",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@2"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Assignation",
      "returnType": {
        "$ref": "#/interfaces@16"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "valcall",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@25"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "Assignment",
            "feature": "expression",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BinaryExpression",
      "returnType": {
        "$ref": "#/interfaces@18"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "left",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "operator",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@4"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "right",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ConstantInt",
      "returnType": {
        "$ref": "#/interfaces@19"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "IntegerValue",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@34"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ProcCall",
      "returnType": {
        "$ref": "#/interfaces@20"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "procdeclaration",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/interfaces@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@7"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@2"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@2"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DistanceCaptor",
      "returnType": {
        "$ref": "#/interfaces@21"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "getDistanceFromCaptor"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "unite",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ConstantBoolean",
      "returnType": {
        "$ref": "#/interfaces@23"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@37"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ValCall",
      "returnType": {
        "$ref": "#/interfaces@17"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "vardeclaration",
        "operator": "=",
        "terminal": {
          "$type": "CrossReference",
          "type": {
            "$ref": "#/interfaces@15"
          },
          "terminal": {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          "deprecatedSyntax": false
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Addition",
      "returnType": {
        "$ref": "#/interfaces@24"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@24"
            }
          },
          {
            "$type": "Keyword",
            "value": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Soustraction",
      "returnType": {
        "$ref": "#/interfaces@25"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@25"
            }
          },
          {
            "$type": "Keyword",
            "value": "-"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Multiplication",
      "returnType": {
        "$ref": "#/interfaces@26"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@26"
            }
          },
          {
            "$type": "Keyword",
            "value": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Lower",
      "returnType": {
        "$ref": "#/interfaces@27"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@27"
            }
          },
          {
            "$type": "Keyword",
            "value": "<"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Greater",
      "returnType": {
        "$ref": "#/interfaces@29"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@29"
            }
          },
          {
            "$type": "Keyword",
            "value": ">"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Equality",
      "returnType": {
        "$ref": "#/interfaces@28"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@28"
            }
          },
          {
            "$type": "Keyword",
            "value": "=="
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "And",
      "returnType": {
        "$ref": "#/interfaces@30"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@30"
            }
          },
          {
            "$type": "Keyword",
            "value": "and"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Or",
      "returnType": {
        "$ref": "#/interfaces@31"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@31"
            }
          },
          {
            "$type": "Keyword",
            "value": "or"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EInt",
      "dataType": "number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "-",
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MM",
      "returnType": {
        "$ref": "#/interfaces@32"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@32"
            }
          },
          {
            "$type": "Keyword",
            "value": "MM"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CM",
      "returnType": {
        "$ref": "#/interfaces@33"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@33"
            }
          },
          {
            "$type": "Keyword",
            "value": "CM"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EBoolean",
      "dataType": "boolean",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "true"
          },
          {
            "$type": "Keyword",
            "value": "false"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Return",
      "returnType": {
        "$ref": "#/interfaces@34"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "return"
          },
          {
            "$type": "Assignment",
            "feature": "expression",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Mouvement",
      "returnType": {
        "$ref": "#/types@4"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@40"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@41"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@42"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@43"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Mouvement_AVANT",
      "returnType": {
        "$ref": "#/types@5"
      },
      "definition": {
        "$type": "Keyword",
        "value": "AVANT"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Mouvement_ARRIERE",
      "returnType": {
        "$ref": "#/types@6"
      },
      "definition": {
        "$type": "Keyword",
        "value": "ARRIERE"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Mouvement_DROITE",
      "returnType": {
        "$ref": "#/types@7"
      },
      "definition": {
        "$type": "Keyword",
        "value": "DROITE"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Mouvement_GAUCHE",
      "returnType": {
        "$ref": "#/types@8"
      },
      "definition": {
        "$type": "Keyword",
        "value": "GAUCHE"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "^"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "a"
                    },
                    "right": {
                      "$type": "Keyword",
                      "value": "z"
                    }
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "A"
                    },
                    "right": {
                      "$type": "Keyword",
                      "value": "Z"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "_"
                }
              }
            ]
          },
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "a"
                        },
                        "right": {
                          "$type": "Keyword",
                          "value": "z"
                        }
                      },
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "A"
                        },
                        "right": {
                          "$type": "Keyword",
                          "value": "Z"
                        }
                      }
                    ]
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "_"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "0"
                },
                "right": {
                  "$type": "Keyword",
                  "value": "9"
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "CharacterRange",
        "left": {
          "$type": "Keyword",
          "value": "0"
        },
        "right": {
          "$type": "Keyword",
          "value": "9"
        },
        "cardinality": "+"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\""
                }
              },
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalGroup",
                    "elements": [
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "\\\\"
                        }
                      },
                      {
                        "$type": "Wildcard"
                      }
                    ]
                  },
                  {
                    "$type": "NegatedToken",
                    "terminal": {
                      "$type": "TerminalAlternatives",
                      "elements": [
                        {
                          "$type": "CharacterRange",
                          "left": {
                            "$type": "Keyword",
                            "value": "\\\\"
                          }
                        },
                        {
                          "$type": "CharacterRange",
                          "left": {
                            "$type": "Keyword",
                            "value": "\\""
                          }
                        }
                      ]
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\""
                }
              }
            ]
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "'"
                }
              },
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalGroup",
                    "elements": [
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "\\\\"
                        }
                      },
                      {
                        "$type": "Wildcard"
                      }
                    ]
                  },
                  {
                    "$type": "NegatedToken",
                    "terminal": {
                      "$type": "TerminalAlternatives",
                      "elements": [
                        {
                          "$type": "CharacterRange",
                          "left": {
                            "$type": "Keyword",
                            "value": "\\\\"
                          }
                        },
                        {
                          "$type": "CharacterRange",
                          "left": {
                            "$type": "Keyword",
                            "value": "'"
                          }
                        }
                      ]
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "'"
                }
              }
            ]
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "/*"
            }
          },
          {
            "$type": "UntilToken",
            "terminal": {
              "$type": "CharacterRange",
              "left": {
                "$type": "Keyword",
                "value": "*/"
              }
            }
          }
        ]
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "//"
            }
          },
          {
            "$type": "NegatedToken",
            "terminal": {
              "$type": "TerminalAlternatives",
              "elements": [
                {
                  "$type": "CharacterRange",
                  "left": {
                    "$type": "Keyword",
                    "value": "\\n"
                  }
                },
                {
                  "$type": "CharacterRange",
                  "left": {
                    "$type": "Keyword",
                    "value": "\\r"
                  }
                }
              ]
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\r"
                },
                "cardinality": "?"
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\n"
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": " "
                    }
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "\\t"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\r"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "\\n"
            }
          }
        ],
        "cardinality": "+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ANY_OTHER",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "Wildcard"
      },
      "fragment": false,
      "hidden": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "function",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@1"
              }
            }
          },
          "isOptional": false
        }
      ],
      "name": "Robot",
      "superTypes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "block",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@2"
            }
          }
        },
        {
          "$type": "TypeAttribute",
          "name": "name",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "returnedType",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@0"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "parameters",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@15"
              }
            }
          },
          "isOptional": false
        }
      ],
      "name": "ProcDeclaration",
      "superTypes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "statements",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@3"
              }
            }
          },
          "isOptional": false
        }
      ],
      "name": "Block",
      "superTypes": [
        {
          "$ref": "#/interfaces@3"
        }
      ]
    },
    {
      "$type": "Interface",
      "name": "Statement",
      "attributes": [],
      "superTypes": []
    },
    {
      "$type": "Interface",
      "name": "Expression",
      "attributes": [],
      "superTypes": []
    },
    {
      "$type": "Interface",
      "name": "Unite",
      "attributes": [],
      "superTypes": []
    },
    {
      "$type": "Interface",
      "name": "ExpressionType",
      "attributes": [],
      "superTypes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "else",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@2"
            }
          }
        },
        {
          "$type": "TypeAttribute",
          "name": "then",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@2"
            }
          },
          "isOptional": false
        }
      ],
      "name": "If",
      "superTypes": [
        {
          "$ref": "#/interfaces@8"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "condition",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          }
        }
      ],
      "name": "ControlStructure",
      "superTypes": [
        {
          "$ref": "#/interfaces@3"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "block",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@2"
            }
          },
          "isOptional": false
        }
      ],
      "name": "While",
      "superTypes": [
        {
          "$ref": "#/interfaces@8"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "block",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@2"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Repeat",
      "superTypes": [
        {
          "$ref": "#/interfaces@8"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "time",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Clock",
      "superTypes": [
        {
          "$ref": "#/interfaces@12"
        }
      ]
    },
    {
      "$type": "Interface",
      "name": "CustomAction",
      "superTypes": [
        {
          "$ref": "#/interfaces@3"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "deplacement_value",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "mouvement",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@4"
            }
          }
        },
        {
          "$type": "TypeAttribute",
          "name": "unite",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Deplacement",
      "superTypes": [
        {
          "$ref": "#/interfaces@12"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "value",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "unite",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Speed",
      "superTypes": [
        {
          "$ref": "#/interfaces@12"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "name",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "type",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@0"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "expression",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          }
        }
      ],
      "name": "VarDeclaration",
      "superTypes": [
        {
          "$ref": "#/interfaces@3"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "valcall",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@17"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "expression",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Assignation",
      "superTypes": [
        {
          "$ref": "#/interfaces@3"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "vardeclaration",
          "isOptional": true,
          "type": {
            "$type": "ReferenceType",
            "referenceType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@15"
              }
            }
          }
        }
      ],
      "name": "ValCall",
      "superTypes": [
        {
          "$ref": "#/interfaces@4"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "left",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "right",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "operator",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@6"
            }
          },
          "isOptional": false
        }
      ],
      "name": "BinaryExpression",
      "superTypes": [
        {
          "$ref": "#/interfaces@4"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "IntegerValue",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "number"
          },
          "isOptional": false
        }
      ],
      "name": "ConstantInt",
      "superTypes": [
        {
          "$ref": "#/interfaces@4"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "arguments",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@4"
              }
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "procdeclaration",
          "isOptional": true,
          "type": {
            "$type": "ReferenceType",
            "referenceType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@1"
              }
            }
          }
        }
      ],
      "name": "ProcCall",
      "superTypes": [
        {
          "$ref": "#/interfaces@4"
        }
      ]
    },
    {
      "$type": "Interface",
      "name": "DistanceCaptor",
      "superTypes": [
        {
          "$ref": "#/interfaces@22"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "unite",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Sensor",
      "superTypes": [
        {
          "$ref": "#/interfaces@4"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "value",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "boolean"
          },
          "isOptional": false
        }
      ],
      "name": "ConstantBoolean",
      "superTypes": [
        {
          "$ref": "#/interfaces@4"
        }
      ]
    },
    {
      "$type": "Interface",
      "name": "Addition",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "Soustraction",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "Multiplication",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "Lower",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "Equality",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "Greater",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "And",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "Or",
      "superTypes": [
        {
          "$ref": "#/interfaces@6"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "MM",
      "superTypes": [
        {
          "$ref": "#/interfaces@5"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "CM",
      "superTypes": [
        {
          "$ref": "#/interfaces@5"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "expression",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@4"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Return",
      "superTypes": [
        {
          "$ref": "#/interfaces@3"
        }
      ]
    }
  ],
  "types": [
    {
      "$type": "Type",
      "name": "Types",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@1"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@2"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@3"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "Types_Number",
      "type": {
        "$type": "SimpleType",
        "stringType": "Number"
      }
    },
    {
      "$type": "Type",
      "name": "Types_Void",
      "type": {
        "$type": "SimpleType",
        "stringType": "Void"
      }
    },
    {
      "$type": "Type",
      "name": "Types_Boolean",
      "type": {
        "$type": "SimpleType",
        "stringType": "Boolean"
      }
    },
    {
      "$type": "Type",
      "name": "Mouvement",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@5"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@6"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@7"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@8"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "Mouvement_AVANT",
      "type": {
        "$type": "SimpleType",
        "stringType": "AVANT"
      }
    },
    {
      "$type": "Type",
      "name": "Mouvement_ARRIERE",
      "type": {
        "$type": "SimpleType",
        "stringType": "ARRIERE"
      }
    },
    {
      "$type": "Type",
      "name": "Mouvement_DROITE",
      "type": {
        "$type": "SimpleType",
        "stringType": "DROITE"
      }
    },
    {
      "$type": "Type",
      "name": "Mouvement_GAUCHE",
      "type": {
        "$type": "SimpleType",
        "stringType": "GAUCHE"
      }
    }
  ],
  "usedGrammars": []
}`));var Ej={languageId:"rob",fileExtensions:[".rob"],caseInsensitive:!1},O_={AstReflection:()=>new Dc},L_={Grammar:()=>D_(),LanguageMetaData:()=>Ej,parser:{}};function M_(t){let e=t.validation.ValidationRegistry,r=t.validation.RobValidator,n={ProcDeclaration:r.checkFunctionName,Robot:r.checkMainFunction};e.register(n,r)}var np=class{checkFunctionName(e,r){e.name||r("warning","Function name should not be empty.",{node:e,property:"name"}),/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name)||r("warning","Function name should start with a _ or a letter. It should not contains special caracters",{node:e,property:"name"})}checkMainFunction(e,r){e.function.find(n=>n.name=="mainCode")||r("warning","There is no mainCode function",{node:e,property:"function"})}};function ip(t){let e=t.validation.ValidationRegistry,r=new By;e.register(r.checks,r)}var By=class{constructor(){this.checks={Robot:this.weaveRobot,ProcDeclaration:this.weaveProcDeclaration,Block:this.weaveBlock,If:this.weaveIf,Clock:this.weaveClock,ConstantInt:this.weaveConstantInt,Speed:this.weaveSpeed,CM:this.weaveCM,MM:this.weaveMM,DistanceCaptor:this.weaveDistanceCaptor,Assignation:this.weaveAssignation,ValCall:this.weaveValCall,VarDeclaration:this.weaveVarDeclaration,ConstantBoolean:this.weaveConstantBoolean,Deplacement:this.weaveDeplacement,Repeat:this.weaveRepeat,BinaryExpression:this.weaveBinaryExpression,ProcCall:this.weaveProcCall,Return:this.weaveReturn}}weaveRobot(e,r){e.accept=n=>n.visitRobot(e)}weaveProcDeclaration(e,r){e.accept=n=>n.visitProcDeclaration(e)}weaveBlock(e,r){e.accept=n=>n.visitBlock(e)}weaveIf(e,r){e.accept=n=>n.visitIf(e)}weaveClock(e,r){e.accept=n=>n.visitClock(e)}weaveConstantInt(e,r){e.accept=n=>n.visitConstInt(e)}weaveSpeed(e,r){e.accept=n=>n.visitSpeed(e)}weaveCM(e,r){e.accept=n=>n.visitCM(e)}weaveMM(e,r){e.accept=n=>n.visitMM(e)}weaveDistanceCaptor(e,r){e.accept=n=>n.visitDistanceCaptor(e)}weaveAssignation(e,r){e.accept=n=>n.visitAssignation(e)}weaveValCall(e,r){e.accept=n=>n.visitValCall(e)}weaveVarDeclaration(e,r){e.accept=n=>n.visitVarDeclaration(e)}weaveConstantBoolean(e,r){e.accept=n=>n.visitConstantBoolean(e)}weaveDeplacement(e,r){e.accept=n=>n.visitDeplacement(e)}weaveRepeat(e,r){e.accept=n=>n.visitRepeat(e)}weaveBinaryExpression(e,r){e.accept=n=>n.visitBinaryExpression(e)}weaveProcCall(e,r){e.accept=n=>n.visitProcCall(e)}weaveReturn(e,r){e.accept=n=>n.visitReturn(e)}};var _j={validation:{RobValidator:()=>new np}};function F_(t){let e=Wi(ic(t),O_),r=Wi(nc({shared:e}),L_,_j);return e.ServiceRegistry.register(r),M_(r),ip(r),{shared:e,Rob:r}}var $j=new ca.BrowserMessageReader(self),Nj=new ca.BrowserMessageWriter(self),zy=(0,ca.createConnection)($j,Nj),{shared:Pj,Rob:Ij}=F_(Object.assign({connection:zy},hf));kb(Pj);zy.onNotification("browser/execute",t=>{console.log("received execute notification"),console.log(t),console.log("starting interpretation"),ip(Ij),console.log("After the weave");let e=[{type:"Forward",Value:100},{type:"Rotate",Value:300},{type:"Forward",Value:100},{type:"Rotate",Value:300},{type:"Forward",Value:100},{type:"Rotate",Value:300}];console.log(e),zy.sendNotification("browser/sendStatements",e)});})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
