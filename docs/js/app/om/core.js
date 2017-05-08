// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.display_name[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.display_name["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.init_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.init_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.should_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto__.call(null,this$,next_props,next_state));
} else {
var m__7068__auto____$1 = (om.core.should_update["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_mount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.will_mount["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.did_mount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.did_mount["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_unmount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto__.call(null,this$,next_props,next_state));
} else {
var m__7068__auto____$1 = (om.core.will_update["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__7068__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.did_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__7068__auto__.call(null,this$,prev_props,prev_state));
} else {
var m__7068__auto____$1 = (om.core.did_update["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__7068__auto____$1.call(null,this$,prev_props,prev_state));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_receive_props[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__7068__auto__.call(null,this$,next_props));
} else {
var m__7068__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__7068__auto____$1.call(null,this$,next_props));
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core.render["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render_props[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__7068__auto__.call(null,this$,props,state));
} else {
var m__7068__auto____$1 = (om.core.render_props["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__7068__auto____$1.call(null,this$,props,state));
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__7068__auto__.call(null,this$,state));
} else {
var m__7068__auto____$1 = (om.core.render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,state) : m__7068__auto____$1.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$5 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__7068__auto__.call(null,this$,cursor,korks,f,tag));
} else {
var m__7068__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__7068__auto____$1.call(null,this$,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args20471 = [];
var len__7479__auto___20474 = arguments.length;
var i__7480__auto___20475 = (0);
while(true){
if((i__7480__auto___20475 < len__7479__auto___20474)){
args20471.push((arguments[i__7480__auto___20475]));

var G__20476 = (i__7480__auto___20475 + (1));
i__7480__auto___20475 = G__20476;
continue;
} else {
}
break;
}

var G__20473 = args20471.length;
switch (G__20473) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20471.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto__.call(null,this$,ks));
} else {
var m__7068__auto____$1 = (om.core._get_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args20478 = [];
var len__7479__auto___20481 = arguments.length;
var i__7480__auto___20482 = (0);
while(true){
if((i__7480__auto___20482 < len__7479__auto___20481)){
args20478.push((arguments[i__7480__auto___20482]));

var G__20483 = (i__7480__auto___20482 + (1));
i__7480__auto___20482 = G__20483;
continue;
} else {
}
break;
}

var G__20480 = args20478.length;
switch (G__20480) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20478.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto__.call(null,this$,ks));
} else {
var m__7068__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__7068__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args20485 = [];
var len__7479__auto___20488 = arguments.length;
var i__7480__auto___20489 = (0);
while(true){
if((i__7480__auto___20489 < len__7479__auto___20488)){
args20485.push((arguments[i__7480__auto___20489]));

var G__20490 = (i__7480__auto___20489 + (1));
i__7480__auto___20489 = G__20490;
continue;
} else {
}
break;
}

var G__20487 = args20485.length;
switch (G__20487) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20485.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__7068__auto__.call(null,this$,val,render));
} else {
var m__7068__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__7068__auto____$1.call(null,this$,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__7068__auto__.call(null,this$,ks,val,render));
} else {
var m__7068__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__7068__auto____$1.call(null,this$,ks,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_queue[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_queue["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto__.call(null,this$,c));
} else {
var m__7068__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._value[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__7068__auto__.call(null,x));
} else {
var m__7068__auto____$1 = (om.core._value["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__7068__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._path[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto__.call(null,cursor));
} else {
var m__7068__auto____$1 = (om.core._path["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto__.call(null,cursor));
} else {
var m__7068__auto____$1 = (om.core._state["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args20492 = [];
var len__7479__auto___20495 = arguments.length;
var i__7480__auto___20496 = (0);
while(true){
if((i__7480__auto___20496 < len__7479__auto___20495)){
args20492.push((arguments[i__7480__auto___20496]));

var G__20497 = (i__7480__auto___20496 + (1));
i__7480__auto___20496 = G__20497;
continue;
} else {
}
break;
}

var G__20494 = args20492.length;
switch (G__20494) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20492.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__7067__auto__ = (((value == null))?null:value);
var m__7068__auto__ = (om.core._to_cursor[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__7068__auto__.call(null,value,state));
} else {
var m__7068__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(value,state) : m__7068__auto____$1.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__7067__auto__ = (((value == null))?null:value);
var m__7068__auto__ = (om.core._to_cursor[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__7068__auto__.call(null,value,state,path));
} else {
var m__7068__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__7068__auto____$1.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._derive[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__7068__auto__.call(null,cursor,derived,state,path));
} else {
var m__7068__auto____$1 = (om.core._derive["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__7068__auto____$1.call(null,cursor,derived,state,path));
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._transact_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__7068__auto__.call(null,cursor,korks,f,tag));
} else {
var m__7068__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__7068__auto____$1.call(null,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._listen_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__7068__auto__.call(null,x,key,tx_listen));
} else {
var m__7068__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__7068__auto____$1.call(null,x,key,tx_listen));
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(x,key) : m__7068__auto__.call(null,x,key));
} else {
var m__7068__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(x,key) : m__7068__auto____$1.call(null,x,key));
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._notify_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__7068__auto__.call(null,x,tx_data,root_cursor));
} else {
var m__7068__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__7068__auto____$1.call(null,x,tx_data,root_cursor));
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__7068__auto__.call(null,this$,id,p,val));
} else {
var m__7068__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__7068__auto____$1.call(null,this$,id,p,val));
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto__.call(null,this$,id,p));
} else {
var m__7068__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__7068__auto__.call(null,this$,id));
} else {
var m__7068__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,id) : m__7068__auto____$1.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_property[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto__.call(null,this$,id,p));
} else {
var m__7068__auto____$1 = (om.core._get_property["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__7068__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._root_key[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto__.call(null,cursor));
} else {
var m__7068__auto____$1 = (om.core._root_key["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__7068__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._adapt[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,other) : m__7068__auto__.call(null,this$,other));
} else {
var m__7068__auto____$1 = (om.core._adapt["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,other) : m__7068__auto____$1.call(null,this$,other));
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto__.call(null,this$,c));
} else {
var m__7068__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto__.call(null,this$,c));
} else {
var m__7068__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__7068__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_deps[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (om.core._get_deps["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(om.core.path(cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state)))?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.cst$kw$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path),cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))], null);
if(!((tag == null))){
var G__20503 = cursor;
var G__20504 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.cst$kw$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__20503,G__20504) : om.core.notify_STAR_.call(null,G__20503,G__20504));
} else {
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args20507 = [];
var len__7479__auto___20511 = arguments.length;
var i__7480__auto___20512 = (0);
while(true){
if((i__7480__auto___20512 < len__7479__auto___20511)){
args20507.push((arguments[i__7480__auto___20512]));

var G__20513 = (i__7480__auto___20512 + (1));
i__7480__auto___20512 = G__20513;
continue;
} else {
}
break;
}

var G__20509 = args20507.length;
switch (G__20509) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20507.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__20510 = (x.props["__om_cursor"]);
if(cljs.core.seq(korks__$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__20510,korks__$1);
} else {
return G__20510;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args20515 = [];
var len__7479__auto___20518 = arguments.length;
var i__7480__auto___20519 = (0);
while(true){
if((i__7480__auto___20519 < len__7479__auto___20518)){
args20515.push((arguments[i__7480__auto___20519]));

var G__20520 = (i__7480__auto___20519 + (1));
i__7480__auto___20519 = G__20520;
continue;
} else {
}
break;
}

var G__20517 = args20515.length;
switch (G__20517) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20515.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args20522 = [];
var len__7479__auto___20525 = arguments.length;
var i__7480__auto___20526 = (0);
while(true){
if((i__7480__auto___20526 < len__7479__auto___20525)){
args20522.push((arguments[i__7480__auto___20526]));

var G__20527 = (i__7480__auto___20526 + (1));
i__7480__auto___20526 = G__20527;
continue;
} else {
}
break;
}

var G__20524 = args20522.length;
switch (G__20524) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20522.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__20530 = state;
(G__20530["__om_prev_state"] = (state["__om_state"]));

(G__20530["__om_state"] = pending_state);

(G__20530["__om_pending_state"] = null);

return G__20530;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args20531 = [];
var len__7479__auto___20534 = arguments.length;
var i__7480__auto___20535 = (0);
while(true){
if((i__7480__auto___20535 < len__7479__auto___20534)){
args20531.push((arguments[i__7480__auto___20535]));

var G__20536 = (i__7480__auto___20535 + (1));
i__7480__auto___20535 = G__20536;
continue;
} else {
}
break;
}

var G__20533 = args20531.length;
switch (G__20533) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20531.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__6404__auto__ = props;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__6404__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__20539 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20539) : cljs.core.deref.call(null,G__20539));
})(),om.core.path(ref),cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = om.core.path(ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref_state) : cljs.core.deref.call(null,ref_state)),ref_path,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.cst$kw$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(ref_val_SINGLEQUOTE_,ref_state,ref_path) : om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path)));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$isOmComponent,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$getDisplayName,cljs.core.cst$kw$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_20562 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": prev_props, "isOmComponent": true})),(function (){var or__6404__auto__ = (state_20562["__om_prev_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state_20562["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

var temp__4657__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__20543 = cljs.core.seq(refs);
var chunk__20544 = null;
var count__20545 = (0);
var i__20546 = (0);
while(true){
if((i__20546 < count__20545)){
var ref = chunk__20544.cljs$core$IIndexed$_nth$arity$2(null,i__20546);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__20563 = seq__20543;
var G__20564 = chunk__20544;
var G__20565 = count__20545;
var G__20566 = (i__20546 + (1));
seq__20543 = G__20563;
chunk__20544 = G__20564;
count__20545 = G__20565;
i__20546 = G__20566;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__20543);
if(temp__4657__auto____$1){
var seq__20543__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20543__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__20543__$1);
var G__20567 = cljs.core.chunk_rest(seq__20543__$1);
var G__20568 = c__7215__auto__;
var G__20569 = cljs.core.count(c__7215__auto__);
var G__20570 = (0);
seq__20543 = G__20567;
chunk__20544 = G__20568;
count__20545 = G__20569;
i__20546 = G__20570;
continue;
} else {
var ref = cljs.core.first(seq__20543__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__20571 = cljs.core.next(seq__20543__$1);
var G__20572 = null;
var G__20573 = (0);
var G__20574 = (0);
seq__20543 = G__20571;
chunk__20544 = G__20572;
count__20545 = G__20573;
i__20546 = G__20574;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c))){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__6392__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__6392__auto__){
return cljs.core.some(((function (and__6392__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__20540_SHARP_){
return om.core.ref_changed_QMARK_(p1__20540_SHARP_);
});})(and__6392__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_20549 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_20550 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_20551 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_20552 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_20553 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c))){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_20553;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_20552;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_20551;

om.core._STAR_state_STAR_ = _STAR_state_STAR_20550;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_20549;
}}),(function (next_props,next_state){
var this$ = this;
var c_20575 = om.core.children(this$);
if(((!((c_20575 == null)))?(((false) || (c_20575.om$core$IWillUpdate$))?true:(((!c_20575.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_20575):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_20575))){
var state_20576 = this$.state;
om.core.will_update(c_20575,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__6404__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__6404__auto__ = id;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id)], 0))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c))){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_20577 = om.core.children(this$);
if(((!((c_20577 == null)))?(((false) || (c_20577.om$core$IWillMount$))?true:(((!c_20577.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_20577):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_20577))){
om.core.will_mount(c_20577);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x20579 = obj;
x20579.om$core$ISetState$ = true;

x20579.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20579){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__6392__auto__ = !((app_state == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x20579))
;

x20579.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20579){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__6392__auto__ = !((app_state == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x20579))
;

x20579.om$core$IGetRenderState$ = true;

x20579.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20579){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x20579))
;

x20579.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20579){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20579))
;

x20579.om$core$IGetState$ = true;

x20579.om$core$IGetState$_get_state$arity$1 = ((function (x20579){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__6404__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state["__om_state"]);
}
});})(x20579))
;

x20579.om$core$IGetState$_get_state$arity$2 = ((function (x20579){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20579))
;

return x20579;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (function (){var G__20582 = (om.core.get_node.cljs$core$IFn$_invoke$arity$1 ? om.core.get_node.cljs$core$IFn$_invoke$arity$1(x) : om.core.get_node.call(null,x));
var G__20583 = "reactid";
return goog.dom.dataset.get(G__20582,G__20583);
})();
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),spath);
if(cljs.core.truth_(cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.cst$kw$previous_DASH_state,cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.cst$kw$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.cst$kw$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.cst$kw$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__6404__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__6404__auto__ = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null)], 0));
(props["__om_init_state"] = null);

return ({"__om_id": om_id});
}),cljs.core.array_seq([cljs.core.cst$kw$componentDidMount,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$),cljs.core.cst$kw$render_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_20594 = om.core.children(this$);
if(((!((c_20594 == null)))?(((false) || (c_20594.om$core$IWillMount$))?true:(((!c_20594.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_20594):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_20594))){
om.core.will_mount(c_20594);
} else {
}

if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : om.core.mounted_QMARK_.call(null,this$)))){
return om.core.no_local_merge_pending_state(this$);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4657__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__20588 = cljs.core.seq(refs);
var chunk__20589 = null;
var count__20590 = (0);
var i__20591 = (0);
while(true){
if((i__20591 < count__20590)){
var ref = chunk__20589.cljs$core$IIndexed$_nth$arity$2(null,i__20591);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__20595 = seq__20588;
var G__20596 = chunk__20589;
var G__20597 = count__20590;
var G__20598 = (i__20591 + (1));
seq__20588 = G__20595;
chunk__20589 = G__20596;
count__20590 = G__20597;
i__20591 = G__20598;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__20588);
if(temp__4657__auto____$1){
var seq__20588__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20588__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__20588__$1);
var G__20599 = cljs.core.chunk_rest(seq__20588__$1);
var G__20600 = c__7215__auto__;
var G__20601 = cljs.core.count(c__7215__auto__);
var G__20602 = (0);
seq__20588 = G__20599;
chunk__20589 = G__20600;
count__20590 = G__20601;
i__20591 = G__20602;
continue;
} else {
var ref = cljs.core.first(seq__20588__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__20603 = cljs.core.next(seq__20588__$1);
var G__20604 = null;
var G__20605 = (0);
var G__20606 = (0);
seq__20588 = G__20603;
chunk__20589 = G__20604;
count__20590 = G__20605;
i__20591 = G__20606;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_20607 = this$.props;
var c_20608 = om.core.children(this$);
if(((!((c_20608 == null)))?(((false) || (c_20608.om$core$IWillUpdate$))?true:(((!c_20608.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_20608):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_20608))){
var state_20609 = this$.state;
om.core.will_update(c_20608,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.cst$kw$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_20610 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": prev_props, "isOmComponent": true})),(function (){var or__6404__auto__ = cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x20614 = cljs.core.clj__GT_js(methods$);
x20614.om$core$ISetState$ = true;

x20614.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20614){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__6392__auto__ = !((gstate == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x20614))
;

x20614.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20614){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x20614))
;

x20614.om$core$IGetRenderState$ = true;

x20614.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20614){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20615 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20615) : cljs.core.deref.call(null,G__20615));
})(),spath);
});})(x20614))
;

x20614.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20614){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20614))
;

x20614.om$core$IGetState$ = true;

x20614.om$core$IGetState$_get_state$arity$1 = ((function (x20614){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : om.core.mounted_QMARK_.call(null,this$__$1)))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20616 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20616) : cljs.core.deref.call(null,G__20616));
})(),spath);
var or__6404__auto__ = cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x20614))
;

x20614.om$core$IGetState$_get_state$arity$2 = ((function (x20614){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20614))
;

return x20614;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_(om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__20620){
var vec__20621 = p__20620;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20621,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__20624 = null;
var G__20624__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20624__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20624 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20624__2.call(this,self__,k);
case 3:
return G__20624__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20624.cljs$core$IFn$_invoke$arity$2 = G__20624__2;
G__20624.cljs$core$IFn$_invoke$arity$3 = G__20624__3;
return G__20624;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args20619){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20619)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__20626 = null;
var G__20626__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20626__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20626 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20626__2.call(this,self__,k);
case 3:
return G__20626__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20626.cljs$core$IFn$_invoke$arity$2 = G__20626__2;
G__20626.cljs$core$IFn$_invoke$arity$3 = G__20626__3;
return G__20626;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args20625){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20625)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x20628 = cljs.core.clone(val);
x20628.cljs$core$IDeref$ = true;

x20628.cljs$core$IDeref$_deref$arity$1 = ((function (x20628){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path,cljs.core.cst$kw$om$core_SLASH_invalid);
});})(x20628))
;

x20628.om$core$ICursor$ = true;

x20628.om$core$ICursor$_path$arity$1 = ((function (x20628){
return (function (_){
var ___$1 = this;
return path;
});})(x20628))
;

x20628.om$core$ICursor$_state$arity$1 = ((function (x20628){
return (function (_){
var ___$1 = this;
return state;
});})(x20628))
;

x20628.om$core$ITransact$ = true;

x20628.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20628){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x20628))
;

x20628.cljs$core$IEquiv$ = true;

x20628.cljs$core$IEquiv$_equiv$arity$2 = ((function (x20628){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x20628))
;

return x20628;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args20629 = [];
var len__7479__auto___20634 = arguments.length;
var i__7480__auto___20635 = (0);
while(true){
if((i__7480__auto___20635 < len__7479__auto___20634)){
args20629.push((arguments[i__7480__auto___20635]));

var G__20636 = (i__7480__auto___20635 + (1));
i__7480__auto___20635 = G__20636;
continue;
} else {
}
break;
}

var G__20631 = args20629.length;
switch (G__20631) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20629.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__20640 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20640) : cljs.core.atom.call(null,G__20640));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x20646 = cljs.core.clone(x);
x20646.cljs$core$ICloneable$ = true;

x20646.cljs$core$ICloneable$_clone$arity$1 = ((function (x20646){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x20646))
;

x20646.om$core$IAdapt$ = true;

x20646.om$core$IAdapt$_adapt$arity$2 = ((function (x20646){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x20646))
;

x20646.om$core$ICursorDerive$ = true;

x20646.om$core$ICursorDerive$_derive$arity$4 = ((function (x20646){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20646))
;

x20646.om$core$ITransact$ = true;

x20646.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20646){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$1,korks,f) : om.core.commit_BANG_.call(null,cursor__$1,korks,f));

return om.core._refresh_deps_BANG_(parent);
});})(x20646))
;

return x20646;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(cursor))){
return cursor;
} else {
var path = om.core.path(cursor);
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__20655 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20655) : cljs.core.atom.call(null,G__20655));
})())),path);
var x20656 = cljs.core.clone(cursor);
x20656.om$core$ICursorDerive$ = true;

x20656.om$core$ICursorDerive$_derive$arity$4 = ((function (x20656,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20656,path,storage))
;

x20656.om$core$IOmRef$ = true;

x20656.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x20656,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)),c);
});})(x20656,path,storage))
;

x20656.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x20656,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)));
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x20656,path,storage))
;

x20656.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x20656,path,storage){
return (function (_){
var ___$1 = this;
var seq__20657 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage))));
var chunk__20658 = null;
var count__20659 = (0);
var i__20660 = (0);
while(true){
if((i__20660 < count__20659)){
var c = chunk__20658.cljs$core$IIndexed$_nth$arity$2(null,i__20660);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__20661 = seq__20657;
var G__20662 = chunk__20658;
var G__20663 = count__20659;
var G__20664 = (i__20660 + (1));
seq__20657 = G__20661;
chunk__20658 = G__20662;
count__20659 = G__20663;
i__20660 = G__20664;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20657);
if(temp__4657__auto__){
var seq__20657__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20657__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__20657__$1);
var G__20665 = cljs.core.chunk_rest(seq__20657__$1);
var G__20666 = c__7215__auto__;
var G__20667 = cljs.core.count(c__7215__auto__);
var G__20668 = (0);
seq__20657 = G__20665;
chunk__20658 = G__20666;
count__20659 = G__20667;
i__20660 = G__20668;
continue;
} else {
var c = cljs.core.first(seq__20657__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__20669 = cljs.core.next(seq__20657__$1);
var G__20670 = null;
var G__20671 = (0);
var G__20672 = (0);
seq__20657 = G__20669;
chunk__20658 = G__20670;
count__20659 = G__20671;
i__20660 = G__20672;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20656,path,storage))
;

x20656.om$core$IOmRef$_get_deps$arity$1 = ((function (x20656,path,storage){
return (function (_){
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage));
});})(x20656,path,storage))
;

x20656.om$core$ITransact$ = true;

x20656.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20656,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$2,korks,f) : om.core.commit_BANG_.call(null,cursor__$2,korks,f));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x20656,path,storage))
;

return x20656;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__6404__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_(ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__20673 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20673) : cljs.core.atom.call(null,G__20673));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__6404__auto__ = state.om$render$T;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args20674 = [];
var len__7479__auto___20681 = arguments.length;
var i__7480__auto___20682 = (0);
while(true){
if((i__7480__auto___20682 < len__7479__auto___20681)){
args20674.push((arguments[i__7480__auto___20682]));

var G__20683 = (i__7480__auto___20682 + (1));
i__7480__auto___20682 = G__20683;
continue;
} else {
}
break;
}

var G__20676 = args20674.length;
switch (G__20676) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20674.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__20677_20685 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)));
var chunk__20678_20686 = null;
var count__20679_20687 = (0);
var i__20680_20688 = (0);
while(true){
if((i__20680_20688 < count__20679_20687)){
var f_20689 = chunk__20678_20686.cljs$core$IIndexed$_nth$arity$2(null,i__20680_20688);
(f_20689.cljs$core$IFn$_invoke$arity$0 ? f_20689.cljs$core$IFn$_invoke$arity$0() : f_20689.call(null));

var G__20690 = seq__20677_20685;
var G__20691 = chunk__20678_20686;
var G__20692 = count__20679_20687;
var G__20693 = (i__20680_20688 + (1));
seq__20677_20685 = G__20690;
chunk__20678_20686 = G__20691;
count__20679_20687 = G__20692;
i__20680_20688 = G__20693;
continue;
} else {
var temp__4657__auto___20694 = cljs.core.seq(seq__20677_20685);
if(temp__4657__auto___20694){
var seq__20677_20695__$1 = temp__4657__auto___20694;
if(cljs.core.chunked_seq_QMARK_(seq__20677_20695__$1)){
var c__7215__auto___20696 = cljs.core.chunk_first(seq__20677_20695__$1);
var G__20697 = cljs.core.chunk_rest(seq__20677_20695__$1);
var G__20698 = c__7215__auto___20696;
var G__20699 = cljs.core.count(c__7215__auto___20696);
var G__20700 = (0);
seq__20677_20685 = G__20697;
chunk__20678_20686 = G__20698;
count__20679_20687 = G__20699;
i__20680_20688 = G__20700;
continue;
} else {
var f_20701 = cljs.core.first(seq__20677_20695__$1);
(f_20701.cljs$core$IFn$_invoke$arity$0 ? f_20701.cljs$core$IFn$_invoke$arity$0() : f_20701.call(null));

var G__20702 = cljs.core.next(seq__20677_20695__$1);
var G__20703 = null;
var G__20704 = (0);
var G__20705 = (0);
seq__20677_20685 = G__20702;
chunk__20678_20686 = G__20703;
count__20679_20687 = G__20704;
i__20680_20688 = G__20705;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = (function (){var G__20706 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20706) : cljs.core.atom.call(null,G__20706));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__6404__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,x));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x));
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$descriptor,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$react_DASH_key,null,cljs.core.cst$kw$key,null,cljs.core.cst$kw$init_DASH_state,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$key_DASH_fn,null,cljs.core.cst$kw$opts,null,cljs.core.cst$kw$om$core_SLASH_index,null,cljs.core.cst$kw$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args20717 = [];
var len__7479__auto___20721 = arguments.length;
var i__7480__auto___20722 = (0);
while(true){
if((i__7480__auto___20722 < len__7479__auto___20721)){
args20717.push((arguments[i__7480__auto___20722]));

var G__20723 = (i__7480__auto___20722 + (1));
i__7480__auto___20722 = G__20723;
continue;
} else {
}
break;
}

var G__20719 = args20717.length;
switch (G__20719) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20717.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_20725 = (function (){var or__6404__auto__ = descriptor;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_20725 === goog.object.get(f,"om$tag"))))){
var factory_20726 = (function (){var G__20720 = React.createClass(rdesc_20725);
return React.createFactory(G__20720);
})();
goog.object.set(f,"om$descriptor",factory_20726);

goog.object.set(f,"om$tag",rdesc_20725);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args20727 = [];
var len__7479__auto___20730 = arguments.length;
var i__7480__auto___20731 = (0);
while(true){
if((i__7480__auto___20731 < len__7479__auto___20730)){
args20727.push((arguments[i__7480__auto___20731]));

var G__20732 = (i__7480__auto___20731 + (1));
i__7480__auto___20731 = G__20732;
continue;
} else {
}
break;
}

var G__20729 = args20727.length;
switch (G__20729) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20727.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args20734 = [];
var len__7479__auto___20741 = arguments.length;
var i__7480__auto___20742 = (0);
while(true){
if((i__7480__auto___20742 < len__7479__auto___20741)){
args20734.push((arguments[i__7480__auto___20742]));

var G__20743 = (i__7480__auto___20742 + (1));
i__7480__auto___20742 = G__20743;
continue;
} else {
}
break;
}

var G__20736 = args20734.length;
switch (G__20736) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20734.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__20737 = ({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
});
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__20737) : ctor.call(null,G__20737));
} else {
var map__20738 = m;
var map__20738__$1 = ((((!((map__20738 == null)))?((((map__20738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20738):map__20738);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.cst$kw$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.cst$kw$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.cst$kw$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.cst$kw$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.cst$kw$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else {
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(cursor_SINGLEQUOTE_) : key_fn.call(null,cursor_SINGLEQUOTE_)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$react_DASH_key)
));
var shared = (function (){var or__6404__auto__ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.cst$kw$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__20740 = ({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__20738,map__20738__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__20738,map__20738__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__20738,map__20738__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__20738,map__20738__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__6404__auto__ = rkey;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__20740) : ctor.call(null,G__20740));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args20745 = [];
var len__7479__auto___20748 = arguments.length;
var i__7480__auto___20749 = (0);
while(true){
if((i__7480__auto___20749 < len__7479__auto___20748)){
args20745.push((arguments[i__7480__auto___20749]));

var G__20750 = (i__7480__auto___20749 + (1));
i__7480__auto___20749 = G__20750;
continue;
} else {
}
break;
}

var G__20747 = args20745.length;
switch (G__20747) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20745.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m) : om.core._STAR_instrument_STAR_.call(null,f,x,m));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args20752 = [];
var len__7479__auto___20755 = arguments.length;
var i__7480__auto___20756 = (0);
while(true){
if((i__7480__auto___20756 < len__7479__auto___20755)){
args20752.push((arguments[i__7480__auto___20756]));

var G__20757 = (i__7480__auto___20756 + (1));
i__7480__auto___20756 = G__20757;
continue;
} else {
}
break;
}

var G__20754 = args20752.length;
switch (G__20754) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20752.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_(om.core.INotify,state))){
} else {
var properties_20789 = (function (){var G__20775 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20775) : cljs.core.atom.call(null,G__20775));
})();
var listeners_20790 = (function (){var G__20776 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20776) : cljs.core.atom.call(null,G__20776));
})();
var render_queue_20791 = (function (){var G__20777 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20777) : cljs.core.atom.call(null,G__20777));
})();
var x20778_20792 = state;
x20778_20792.om$core$IRootProperties$ = true;

x20778_20792.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_20789,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_20789,cljs.core.dissoc,id,k);
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_20789,cljs.core.dissoc,id);
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$IRootProperties$_get_property$arity$3 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(properties_20789) : cljs.core.deref.call(null,properties_20789)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$INotify$ = true;

x20778_20792.om$core$INotify$_listen_BANG_$arity$3 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_20790,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_20790,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$INotify$_notify_BANG_$arity$3 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__20779_20793 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(listeners_20790) : cljs.core.deref.call(null,listeners_20790)));
var chunk__20780_20794 = null;
var count__20781_20795 = (0);
var i__20782_20796 = (0);
while(true){
if((i__20782_20796 < count__20781_20795)){
var vec__20783_20797 = chunk__20780_20794.cljs$core$IIndexed$_nth$arity$2(null,i__20782_20796);
var __20798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783_20797,(0),null);
var f_20799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783_20797,(1),null);
(f_20799.cljs$core$IFn$_invoke$arity$2 ? f_20799.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_20799.call(null,tx_data,root_cursor));

var G__20800 = seq__20779_20793;
var G__20801 = chunk__20780_20794;
var G__20802 = count__20781_20795;
var G__20803 = (i__20782_20796 + (1));
seq__20779_20793 = G__20800;
chunk__20780_20794 = G__20801;
count__20781_20795 = G__20802;
i__20782_20796 = G__20803;
continue;
} else {
var temp__4657__auto___20804 = cljs.core.seq(seq__20779_20793);
if(temp__4657__auto___20804){
var seq__20779_20805__$1 = temp__4657__auto___20804;
if(cljs.core.chunked_seq_QMARK_(seq__20779_20805__$1)){
var c__7215__auto___20806 = cljs.core.chunk_first(seq__20779_20805__$1);
var G__20807 = cljs.core.chunk_rest(seq__20779_20805__$1);
var G__20808 = c__7215__auto___20806;
var G__20809 = cljs.core.count(c__7215__auto___20806);
var G__20810 = (0);
seq__20779_20793 = G__20807;
chunk__20780_20794 = G__20808;
count__20781_20795 = G__20809;
i__20782_20796 = G__20810;
continue;
} else {
var vec__20786_20811 = cljs.core.first(seq__20779_20805__$1);
var __20812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20786_20811,(0),null);
var f_20813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20786_20811,(1),null);
(f_20813.cljs$core$IFn$_invoke$arity$2 ? f_20813.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_20813.call(null,tx_data,root_cursor));

var G__20814 = cljs.core.next(seq__20779_20805__$1);
var G__20815 = null;
var G__20816 = (0);
var G__20817 = (0);
seq__20779_20793 = G__20814;
chunk__20780_20794 = G__20815;
count__20781_20795 = G__20816;
i__20782_20796 = G__20817;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$IRenderQueue$ = true;

x20778_20792.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (this$){
var this$__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_20791) : cljs.core.deref.call(null,render_queue_20791));
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_20791) : cljs.core.deref.call(null,render_queue_20791)),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_20791,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

x20778_20792.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x20778_20792,properties_20789,listeners_20790,render_queue_20791){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_20791,cljs.core.empty);
});})(x20778_20792,properties_20789,listeners_20790,render_queue_20791))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x20823 = cljs.core.clone(cursor);
x20823.cljs$core$ICloneable$ = true;

x20823.cljs$core$ICloneable$_clone$arity$1 = ((function (x20823){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x20823))
;

x20823.om$core$IAdapt$ = true;

x20823.om$core$IAdapt$_adapt$arity$2 = ((function (x20823){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x20823))
;

x20823.om$core$IRootKey$ = true;

x20823.om$core$IRootKey$_root_key$arity$1 = ((function (x20823){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x20823))
;

return x20823;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__20824){
var map__20917 = p__20824;
var map__20917__$1 = ((((!((map__20917 == null)))?((((map__20917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20917):map__20917);
var options = map__20917__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,cljs.core.cst$kw$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,cljs.core.cst$kw$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,cljs.core.cst$kw$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,cljs.core.cst$kw$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,cljs.core.cst$kw$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,cljs.core.cst$kw$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,cljs.core.cst$kw$raf);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__21009 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots));
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__21009,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__21009,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value)))?value:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.atom.call(null,value)));
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__6404__auto__ = adapt;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$target,cljs.core.array_seq([cljs.core.cst$kw$tx_DASH_listen,cljs.core.cst$kw$path,cljs.core.cst$kw$adapt,cljs.core.cst$kw$raf], 0));
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state__$1) : cljs.core.deref.call(null,state__$1));
var cursor = (function (){var G__20963 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__20963) : adapt__$1.call(null,G__20963));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root))){
} else {
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,true);

var c_21010 = om.dom.render((function (){var _STAR_descriptor_STAR_20964 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_20965 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_20966 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_20967 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_20967;

om.core._STAR_state_STAR_ = _STAR_state_STAR_20966;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_20965;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_20964;
}})(),target);
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c_21010) : cljs.core.reset_BANG_.call(null,ret,c_21010));
} else {
}
}

var queue_21011 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_21011)){
} else {
var seq__20968_21012 = cljs.core.seq(queue_21011);
var chunk__20969_21013 = null;
var count__20970_21014 = (0);
var i__20971_21015 = (0);
while(true){
if((i__20971_21015 < count__20970_21014)){
var c_21016 = chunk__20969_21013.cljs$core$IIndexed$_nth$arity$2(null,i__20971_21015);
if(cljs.core.truth_(c_21016.isMounted())){
var temp__4657__auto___21017 = (c_21016.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___21017)){
var next_props_21018 = temp__4657__auto___21017;
(c_21016.props["__om_cursor"] = next_props_21018);

(c_21016.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6404__auto__ = !((function (){var G__20973 = om.core.children(c_21016);
if(!((G__20973 == null))){
if((false) || (G__20973.om$core$ICheckState$)){
return true;
} else {
if((!G__20973.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20973);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20973);
}
})());
if(or__6404__auto__){
return or__6404__auto__;
} else {
return c_21016.shouldComponentUpdate(c_21016.props,c_21016.state);
}
})())){
c_21016.forceUpdate();
} else {
}
} else {
}

var G__21019 = seq__20968_21012;
var G__21020 = chunk__20969_21013;
var G__21021 = count__20970_21014;
var G__21022 = (i__20971_21015 + (1));
seq__20968_21012 = G__21019;
chunk__20969_21013 = G__21020;
count__20970_21014 = G__21021;
i__20971_21015 = G__21022;
continue;
} else {
var temp__4657__auto___21023 = cljs.core.seq(seq__20968_21012);
if(temp__4657__auto___21023){
var seq__20968_21024__$1 = temp__4657__auto___21023;
if(cljs.core.chunked_seq_QMARK_(seq__20968_21024__$1)){
var c__7215__auto___21025 = cljs.core.chunk_first(seq__20968_21024__$1);
var G__21026 = cljs.core.chunk_rest(seq__20968_21024__$1);
var G__21027 = c__7215__auto___21025;
var G__21028 = cljs.core.count(c__7215__auto___21025);
var G__21029 = (0);
seq__20968_21012 = G__21026;
chunk__20969_21013 = G__21027;
count__20970_21014 = G__21028;
i__20971_21015 = G__21029;
continue;
} else {
var c_21030 = cljs.core.first(seq__20968_21024__$1);
if(cljs.core.truth_(c_21030.isMounted())){
var temp__4657__auto___21031__$1 = (c_21030.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___21031__$1)){
var next_props_21032 = temp__4657__auto___21031__$1;
(c_21030.props["__om_cursor"] = next_props_21032);

(c_21030.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6404__auto__ = !((function (){var G__20975 = om.core.children(c_21030);
if(!((G__20975 == null))){
if((false) || (G__20975.om$core$ICheckState$)){
return true;
} else {
if((!G__20975.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20975);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20975);
}
})());
if(or__6404__auto__){
return or__6404__auto__;
} else {
return c_21030.shouldComponentUpdate(c_21030.props,c_21030.state);
}
})())){
c_21030.forceUpdate();
} else {
}
} else {
}

var G__21033 = cljs.core.next(seq__20968_21024__$1);
var G__21034 = null;
var G__21035 = (0);
var G__21036 = (0);
seq__20968_21012 = G__21033;
chunk__20969_21013 = G__21034;
count__20970_21014 = G__21035;
i__20971_21015 = G__21036;
continue;
}
} else {
}
}
break;
}
}

var _refs_21037 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core._refs) : cljs.core.deref.call(null,om.core._refs));
if(cljs.core.empty_QMARK_(_refs_21037)){
} else {
var seq__20976_21038 = cljs.core.seq(_refs_21037);
var chunk__20977_21039 = null;
var count__20978_21040 = (0);
var i__20979_21041 = (0);
while(true){
if((i__20979_21041 < count__20978_21040)){
var vec__20980_21042 = chunk__20977_21039.cljs$core$IIndexed$_nth$arity$2(null,i__20979_21041);
var path_21043__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20980_21042,(0),null);
var cs_21044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20980_21042,(1),null);
var cs_21045__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_21044) : cljs.core.deref.call(null,cs_21044));
var seq__20983_21046 = cljs.core.seq(cs_21045__$1);
var chunk__20984_21047 = null;
var count__20985_21048 = (0);
var i__20986_21049 = (0);
while(true){
if((i__20986_21049 < count__20985_21048)){
var vec__20987_21050 = chunk__20984_21047.cljs$core$IIndexed$_nth$arity$2(null,i__20986_21049);
var id_21051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20987_21050,(0),null);
var c_21052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20987_21050,(1),null);
if(cljs.core.truth_(c_21052.shouldComponentUpdate(c_21052.props,c_21052.state))){
c_21052.forceUpdate();
} else {
}

var G__21053 = seq__20983_21046;
var G__21054 = chunk__20984_21047;
var G__21055 = count__20985_21048;
var G__21056 = (i__20986_21049 + (1));
seq__20983_21046 = G__21053;
chunk__20984_21047 = G__21054;
count__20985_21048 = G__21055;
i__20986_21049 = G__21056;
continue;
} else {
var temp__4657__auto___21057 = cljs.core.seq(seq__20983_21046);
if(temp__4657__auto___21057){
var seq__20983_21058__$1 = temp__4657__auto___21057;
if(cljs.core.chunked_seq_QMARK_(seq__20983_21058__$1)){
var c__7215__auto___21059 = cljs.core.chunk_first(seq__20983_21058__$1);
var G__21060 = cljs.core.chunk_rest(seq__20983_21058__$1);
var G__21061 = c__7215__auto___21059;
var G__21062 = cljs.core.count(c__7215__auto___21059);
var G__21063 = (0);
seq__20983_21046 = G__21060;
chunk__20984_21047 = G__21061;
count__20985_21048 = G__21062;
i__20986_21049 = G__21063;
continue;
} else {
var vec__20990_21064 = cljs.core.first(seq__20983_21058__$1);
var id_21065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20990_21064,(0),null);
var c_21066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20990_21064,(1),null);
if(cljs.core.truth_(c_21066.shouldComponentUpdate(c_21066.props,c_21066.state))){
c_21066.forceUpdate();
} else {
}

var G__21067 = cljs.core.next(seq__20983_21058__$1);
var G__21068 = null;
var G__21069 = (0);
var G__21070 = (0);
seq__20983_21046 = G__21067;
chunk__20984_21047 = G__21068;
count__20985_21048 = G__21069;
i__20986_21049 = G__21070;
continue;
}
} else {
}
}
break;
}

var G__21071 = seq__20976_21038;
var G__21072 = chunk__20977_21039;
var G__21073 = count__20978_21040;
var G__21074 = (i__20979_21041 + (1));
seq__20976_21038 = G__21071;
chunk__20977_21039 = G__21072;
count__20978_21040 = G__21073;
i__20979_21041 = G__21074;
continue;
} else {
var temp__4657__auto___21075 = cljs.core.seq(seq__20976_21038);
if(temp__4657__auto___21075){
var seq__20976_21076__$1 = temp__4657__auto___21075;
if(cljs.core.chunked_seq_QMARK_(seq__20976_21076__$1)){
var c__7215__auto___21077 = cljs.core.chunk_first(seq__20976_21076__$1);
var G__21078 = cljs.core.chunk_rest(seq__20976_21076__$1);
var G__21079 = c__7215__auto___21077;
var G__21080 = cljs.core.count(c__7215__auto___21077);
var G__21081 = (0);
seq__20976_21038 = G__21078;
chunk__20977_21039 = G__21079;
count__20978_21040 = G__21080;
i__20979_21041 = G__21081;
continue;
} else {
var vec__20993_21082 = cljs.core.first(seq__20976_21076__$1);
var path_21083__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20993_21082,(0),null);
var cs_21084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20993_21082,(1),null);
var cs_21085__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_21084) : cljs.core.deref.call(null,cs_21084));
var seq__20996_21086 = cljs.core.seq(cs_21085__$1);
var chunk__20997_21087 = null;
var count__20998_21088 = (0);
var i__20999_21089 = (0);
while(true){
if((i__20999_21089 < count__20998_21088)){
var vec__21000_21090 = chunk__20997_21087.cljs$core$IIndexed$_nth$arity$2(null,i__20999_21089);
var id_21091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000_21090,(0),null);
var c_21092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000_21090,(1),null);
if(cljs.core.truth_(c_21092.shouldComponentUpdate(c_21092.props,c_21092.state))){
c_21092.forceUpdate();
} else {
}

var G__21093 = seq__20996_21086;
var G__21094 = chunk__20997_21087;
var G__21095 = count__20998_21088;
var G__21096 = (i__20999_21089 + (1));
seq__20996_21086 = G__21093;
chunk__20997_21087 = G__21094;
count__20998_21088 = G__21095;
i__20999_21089 = G__21096;
continue;
} else {
var temp__4657__auto___21097__$1 = cljs.core.seq(seq__20996_21086);
if(temp__4657__auto___21097__$1){
var seq__20996_21098__$1 = temp__4657__auto___21097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20996_21098__$1)){
var c__7215__auto___21099 = cljs.core.chunk_first(seq__20996_21098__$1);
var G__21100 = cljs.core.chunk_rest(seq__20996_21098__$1);
var G__21101 = c__7215__auto___21099;
var G__21102 = cljs.core.count(c__7215__auto___21099);
var G__21103 = (0);
seq__20996_21086 = G__21100;
chunk__20997_21087 = G__21101;
count__20998_21088 = G__21102;
i__20999_21089 = G__21103;
continue;
} else {
var vec__21003_21104 = cljs.core.first(seq__20996_21098__$1);
var id_21105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21003_21104,(0),null);
var c_21106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21003_21104,(1),null);
if(cljs.core.truth_(c_21106.shouldComponentUpdate(c_21106.props,c_21106.state))){
c_21106.forceUpdate();
} else {
}

var G__21107 = cljs.core.next(seq__20996_21098__$1);
var G__21108 = null;
var G__21109 = (0);
var G__21110 = (0);
seq__20996_21086 = G__21107;
chunk__20997_21087 = G__21108;
count__20998_21088 = G__21109;
i__20999_21089 = G__21110;
continue;
}
} else {
}
}
break;
}

var G__21111 = cljs.core.next(seq__20976_21076__$1);
var G__21112 = null;
var G__21113 = (0);
var G__21114 = (0);
seq__20976_21038 = G__21111;
chunk__20977_21039 = G__21112;
count__20978_21040 = G__21113;
i__20979_21041 = G__21114;
continue;
}
} else {
}
}
break;
}
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$ignore,false);

if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__21006 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__21007 = (16);
return setTimeout(G__21006,G__21007);
} else {
var G__21008 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__21008);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20917,map__20917__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots)),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args21117 = [];
var len__7479__auto___21120 = arguments.length;
var i__7480__auto___21121 = (0);
while(true){
if((i__7480__auto___21121 < len__7479__auto___21120)){
args21117.push((arguments[i__7480__auto___21121]));

var G__21122 = (i__7480__auto___21121 + (1));
i__7480__auto___21121 = G__21122;
continue;
} else {
}
break;
}

var G__21119 = args21117.length;
switch (G__21119) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21117.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args21124 = [];
var len__7479__auto___21127 = arguments.length;
var i__7480__auto___21128 = (0);
while(true){
if((i__7480__auto___21128 < len__7479__auto___21127)){
args21124.push((arguments[i__7480__auto___21128]));

var G__21129 = (i__7480__auto___21128 + (1));
i__7480__auto___21128 = G__21129;
continue;
} else {
}
break;
}

var G__21126 = args21124.length;
switch (G__21126) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21124.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor)))?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path(cursor);
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.cst$kw$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args21133 = [];
var len__7479__auto___21137 = arguments.length;
var i__7480__auto___21138 = (0);
while(true){
if((i__7480__auto___21138 < len__7479__auto___21137)){
args21133.push((arguments[i__7480__auto___21138]));

var G__21139 = (i__7480__auto___21138 + (1));
i__7480__auto___21138 = G__21139;
continue;
} else {
}
break;
}

var G__21135 = args21133.length;
switch (G__21135) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21133.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__21136 = owner.refs;
var G__21136__$1 = (((G__21136 == null))?null:(G__21136[name]));
if((G__21136__$1 == null)){
return null;
} else {
return G__21136__$1.getDOMNode();
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__21142 = owner.refs;
if((G__21142 == null)){
return null;
} else {
return goog.object.get(G__21142,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args21143 = [];
var len__7479__auto___21146 = arguments.length;
var i__7480__auto___21147 = (0);
while(true){
if((i__7480__auto___21147 < len__7479__auto___21146)){
args21143.push((arguments[i__7480__auto___21147]));

var G__21148 = (i__7480__auto___21147 + (1));
i__7480__auto___21147 = G__21148;
continue;
} else {
}
break;
}

var G__21145 = args21143.length;
switch (G__21145) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21143.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args21150 = [];
var len__7479__auto___21153 = arguments.length;
var i__7480__auto___21154 = (0);
while(true){
if((i__7480__auto___21154 < len__7479__auto___21153)){
args21150.push((arguments[i__7480__auto___21154]));

var G__21155 = (i__7480__auto___21154 + (1));
i__7480__auto___21154 = G__21155;
continue;
} else {
}
break;
}

var G__21152 = args21150.length;
switch (G__21152) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21150.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args21157 = [];
var len__7479__auto___21162 = arguments.length;
var i__7480__auto___21163 = (0);
while(true){
if((i__7480__auto___21163 < len__7479__auto___21162)){
args21157.push((arguments[i__7480__auto___21163]));

var G__21164 = (i__7480__auto___21163 + (1));
i__7480__auto___21163 = G__21164;
continue;
} else {
}
break;
}

var G__21159 = args21157.length;
switch (G__21159) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21157.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__21160 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21160) : f.call(null,G__21160));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__21161 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21161) : f.call(null,G__21161));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args21166 = [];
var len__7479__auto___21171 = arguments.length;
var i__7480__auto___21172 = (0);
while(true){
if((i__7480__auto___21172 < len__7479__auto___21171)){
args21166.push((arguments[i__7480__auto___21172]));

var G__21173 = (i__7480__auto___21172 + (1));
i__7480__auto___21172 = G__21173;
continue;
} else {
}
break;
}

var G__21168 = args21166.length;
switch (G__21168) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21166.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__21169 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21169) : f.call(null,G__21169));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__21170 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21170) : f.call(null,G__21170));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args21175 = [];
var len__7479__auto___21178 = arguments.length;
var i__7480__auto___21179 = (0);
while(true){
if((i__7480__auto___21179 < len__7479__auto___21178)){
args21175.push((arguments[i__7480__auto___21179]));

var G__21180 = (i__7480__auto___21179 + (1));
i__7480__auto___21179 = G__21180;
continue;
} else {
}
break;
}

var G__21177 = args21175.length;
switch (G__21177) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21175.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

