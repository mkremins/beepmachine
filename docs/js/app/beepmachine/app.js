// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('beepmachine.app');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om_tools.core');
goog.require('om_tools.dom');
beepmachine.app.ticks__GT_note_length = new cljs.core.PersistentArrayMap(null, 6, [(1),"32n",(2),"16n",(4),"8n",(8),"4n",(16),"2n",(32),"1n"], null);
beepmachine.app.note_id__GT_note = (function beepmachine$app$note_id__GT_note(id){
var octave = (cljs.core.quot(id,(5)) + (2));
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C#","E","F#"], null),cljs.core.mod(id,(5)));
return [cljs.core.str(letter),cljs.core.str(octave)].join('');
});
beepmachine.app.should_play_QMARK_ = (function beepmachine$app$should_play_QMARK_(instrument,tick){
return (cljs.core.mod(tick,cljs.core.cst$kw$spacing.cljs$core$IFn$_invoke$arity$1(instrument)) === (0));
});
beepmachine.app.play_BANG_ = (function beepmachine$app$play_BANG_(p__21308,note,time){
var map__21311 = p__21308;
var map__21311__$1 = ((((!((map__21311 == null)))?((((map__21311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21311):map__21311);
var synth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21311__$1,cljs.core.cst$kw$synth);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21311__$1,cljs.core.cst$kw$duration);
return synth.triggerAttackRelease(note,(beepmachine.app.ticks__GT_note_length.cljs$core$IFn$_invoke$arity$1 ? beepmachine.app.ticks__GT_note_length.cljs$core$IFn$_invoke$arity$1(duration) : beepmachine.app.ticks__GT_note_length.call(null,duration)),time);
});
if(typeof beepmachine.app.app_state !== 'undefined'){
} else {
beepmachine.app.app_state = (function (){var G__21313 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tick,(0),cljs.core.cst$kw$plink,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$synth,(new Tone.Synth()).toMaster(),cljs.core.cst$kw$spacing,(4),cljs.core.cst$kw$duration,(2),cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6),(7),(8),(9)], null),cljs.core.cst$kw$note_DASH_idx,(0)], null),cljs.core.cst$kw$beat,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$synth,(new Tone.MembraneSynth()).chain((new Tone.Volume((10))),Tone.Master),cljs.core.cst$kw$spacing,(8),cljs.core.cst$kw$duration,(4)], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21313) : cljs.core.atom.call(null,G__21313));
})();
}
beepmachine.app.wrap_any_ultrahigh_plinks = (function beepmachine$app$wrap_any_ultrahigh_plinks(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (notes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21314_SHARP_){
if((p1__21314_SHARP_ > (29))){
return (0);
} else {
return p1__21314_SHARP_;
}
}),notes);
}));
});
beepmachine.app.double_beat_spacing = (function beepmachine$app$double_beat_spacing(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beat,cljs.core.cst$kw$spacing], null),(function (p1__21315_SHARP_){
if((p1__21315_SHARP_ >= (32))){
return p1__21315_SHARP_;
} else {
return (p1__21315_SHARP_ * (2));
}
}));
});
beepmachine.app.halve_beat_spacing = (function beepmachine$app$halve_beat_spacing(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beat,cljs.core.cst$kw$spacing], null),(function (p1__21316_SHARP_){
return (p1__21316_SHARP_ / (2));
}));
});
beepmachine.app.shift_plinks_up_1 = (function beepmachine$app$shift_plinks_up_1(state){
return beepmachine.app.wrap_any_ultrahigh_plinks(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21317_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,p1__21317_SHARP_);
})));
});
beepmachine.app.shift_plinks_down_1 = (function beepmachine$app$shift_plinks_down_1(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21318_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,p1__21318_SHARP_);
}));
});
beepmachine.app.shuffle_plinks = (function beepmachine$app$shuffle_plinks(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.shuffle));
});
beepmachine.app.reverse_plinks = (function beepmachine$app$reverse_plinks(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.reverse));
});
beepmachine.app.drop_last_plink = (function beepmachine$app$drop_last_plink(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21319_SHARP_){
if(cljs.core.empty_QMARK_(p1__21319_SHARP_)){
return p1__21319_SHARP_;
} else {
return cljs.core.pop(p1__21319_SHARP_);
}
}));
});
beepmachine.app.push_last_plink = (function beepmachine$app$push_last_plink(state){
return beepmachine.app.wrap_any_ultrahigh_plinks(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21320_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21320_SHARP_,((cljs.core.empty_QMARK_(p1__21320_SHARP_))?(5):(cljs.core.peek(p1__21320_SHARP_) + (1))));
})));
});

var ufv___21337 = schema.utils.use_fn_validation;
var output_schema21322_21338 = schema.core.Any;
var input_schema21323_21339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21324_21340 = schema.core.checker(input_schema21323_21339);
var output_checker21325_21341 = schema.core.checker(output_schema21322_21338);
/**
 * Inputs: [data owner]
 */
beepmachine.app.app = ((function (ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function beepmachine$app$app(G__21326,G__21327){
var validate__16734__auto__ = ufv___21337.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___21342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21326,G__21327], null);
var temp__4657__auto___21343 = (input_checker21324_21340.cljs$core$IFn$_invoke$arity$1 ? input_checker21324_21340.cljs$core$IFn$_invoke$arity$1(args__16735__auto___21342) : input_checker21324_21340.call(null,args__16735__auto___21342));
if(cljs.core.truth_(temp__4657__auto___21343)){
var error__16736__auto___21344 = temp__4657__auto___21343;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21344], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21323_21339,cljs.core.cst$kw$value,args__16735__auto___21342,cljs.core.cst$kw$error,error__16736__auto___21344], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var data = G__21326;
var owner = G__21327;
while(true){
if(typeof beepmachine.app.t_beepmachine$app21331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
beepmachine.app.t_beepmachine$app21331 = (function (G__21327,owner,input_schema21323,data,output_checker21325,output_schema21322,input_checker21324,G__21326,app,ufv__,validate__16734__auto__,meta21332){
this.G__21327 = G__21327;
this.owner = owner;
this.input_schema21323 = input_schema21323;
this.data = data;
this.output_checker21325 = output_checker21325;
this.output_schema21322 = output_schema21322;
this.input_checker21324 = input_checker21324;
this.G__21326 = G__21326;
this.app = app;
this.ufv__ = ufv__;
this.validate__16734__auto__ = validate__16734__auto__;
this.meta21332 = meta21332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
beepmachine.app.t_beepmachine$app21331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function (_21333,meta21332__$1){
var self__ = this;
var _21333__$1 = this;
return (new beepmachine.app.t_beepmachine$app21331(self__.G__21327,self__.owner,self__.input_schema21323,self__.data,self__.output_checker21325,self__.output_schema21322,self__.input_checker21324,self__.G__21326,self__.app,self__.ufv__,self__.validate__16734__auto__,meta21332__$1));
});})(validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

beepmachine.app.t_beepmachine$app21331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function (_21333){
var self__ = this;
var _21333__$1 = this;
return self__.meta21332;
});})(validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

beepmachine.app.t_beepmachine$app21331.prototype.om$core$IDisplayName$ = true;

beepmachine.app.t_beepmachine$app21331.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

beepmachine.app.t_beepmachine$app21331.prototype.om$core$IRender$ = true;

beepmachine.app.t_beepmachine$app21331.prototype.om$core$IRender$render$arity$1 = ((function (validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,"beepmachine");
});})(validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

beepmachine.app.t_beepmachine$app21331.getBasis = ((function (validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__21327,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$input_DASH_schema21323,cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_checker21325,cljs.core.cst$sym$output_DASH_schema21322,cljs.core.cst$sym$input_DASH_checker21324,cljs.core.with_meta(cljs.core.cst$sym$G__21326,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21322,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21323], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__16734__auto__,cljs.core.cst$sym$meta21332], null);
});})(validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

beepmachine.app.t_beepmachine$app21331.cljs$lang$type = true;

beepmachine.app.t_beepmachine$app21331.cljs$lang$ctorStr = "beepmachine.app/t_beepmachine$app21331";

beepmachine.app.t_beepmachine$app21331.cljs$lang$ctorPrWriter = ((function (validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"beepmachine.app/t_beepmachine$app21331");
});})(validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

beepmachine.app.__GT_t_beepmachine$app21331 = ((function (validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341){
return (function beepmachine$app$app_$___GT_t_beepmachine$app21331(G__21327__$1,owner__$1,input_schema21323__$1,data__$1,output_checker21325__$1,output_schema21322__$1,input_checker21324__$1,G__21326__$1,app__$1,ufv____$1,validate__16734__auto____$1,meta21332){
return (new beepmachine.app.t_beepmachine$app21331(G__21327__$1,owner__$1,input_schema21323__$1,data__$1,output_checker21325__$1,output_schema21322__$1,input_checker21324__$1,G__21326__$1,app__$1,ufv____$1,validate__16734__auto____$1,meta21332));
});})(validate__16734__auto__,ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

}

return (new beepmachine.app.t_beepmachine$app21331(G__21327,owner,input_schema21323_21339,data,output_checker21325_21341,output_schema21322_21338,input_checker21324_21340,G__21326,beepmachine$app$app,ufv___21337,validate__16734__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___21345 = (output_checker21325_21341.cljs$core$IFn$_invoke$arity$1 ? output_checker21325_21341.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker21325_21341.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___21345)){
var error__16736__auto___21346 = temp__4657__auto___21345;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21346], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21322_21338,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___21346], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___21337,output_schema21322_21338,input_schema21323_21339,input_checker21324_21340,output_checker21325_21341))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(beepmachine.app.app),schema.core.make_fn_schema(output_schema21322_21338,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21323_21339], null)));

beepmachine.app.__GT_app = (function beepmachine$app$__GT_app(var_args){
var args21334 = [];
var len__7479__auto___21347 = arguments.length;
var i__7480__auto___21348 = (0);
while(true){
if((i__7480__auto___21348 < len__7479__auto___21347)){
args21334.push((arguments[i__7480__auto___21348]));

var G__21349 = (i__7480__auto___21348 + (1));
i__7480__auto___21348 = G__21349;
continue;
} else {
}
break;
}

var G__21336 = args21334.length;
switch (G__21336) {
case 1:
return beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21334.length)].join('')));

}
});

beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21253__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(beepmachine.app.app,cursor__21253__auto__);
});

beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21253__auto__,m21321){
return om.core.build.cljs$core$IFn$_invoke$arity$3(beepmachine.app.app,cursor__21253__auto__,m21321);
});

beepmachine.app.__GT_app.cljs$lang$maxFixedArity = 2;

beepmachine.app.keybinds = new cljs.core.PersistentArrayMap(null, 8, ["d",beepmachine.app.double_beat_spacing,"h",beepmachine.app.halve_beat_spacing,"q",beepmachine.app.shuffle_plinks,"r",beepmachine.app.reverse_plinks,"ArrowUp",beepmachine.app.shift_plinks_up_1,"ArrowDown",beepmachine.app.shift_plinks_down_1,"ArrowLeft",beepmachine.app.drop_last_plink,"ArrowRight",beepmachine.app.push_last_plink], null);
beepmachine.app.display_key_BANG_ = (function beepmachine$app$display_key_BANG_(k){
var div = document.createElement("div");
div.classList.add("key");

div.textContent = k;

div.style.left = [cljs.core.str(cljs.core.rand_int(window.innerWidth)),cljs.core.str("px")].join('');

div.style.top = [cljs.core.str(cljs.core.rand_int(window.innerHeight)),cljs.core.str("px")].join('');

return document.body.appendChild(div);
});
beepmachine.app.handle_keydown_BANG_ = (function beepmachine$app$handle_keydown_BANG_(ev){
ev.preventDefault();

ev.stopPropagation();

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$keydown,cljs.core.cst$kw$key,ev.key,cljs.core.cst$kw$char,ev.char], null)], 0));

var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(beepmachine.app.keybinds,ev.key);
if(cljs.core.truth_(temp__4657__auto__)){
var keybind = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(beepmachine.app.app_state,keybind);

return beepmachine.app.display_key_BANG_(ev.key);
} else {
return null;
}
});
beepmachine.app.handle_keyup_BANG_ = (function beepmachine$app$handle_keyup_BANG_(ev){
ev.preventDefault();

ev.stopPropagation();

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyup,cljs.core.cst$kw$key,ev.key,cljs.core.cst$kw$char,ev.char], null)], 0));
});
beepmachine.app.tick_BANG_ = (function beepmachine$app$tick_BANG_(time){
var map__21355_21359 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(beepmachine.app.app_state) : cljs.core.deref.call(null,beepmachine.app.app_state));
var map__21355_21360__$1 = ((((!((map__21355_21359 == null)))?((((map__21355_21359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21355_21359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21355_21359):map__21355_21359);
var state_21361 = map__21355_21360__$1;
var tick_21362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355_21360__$1,cljs.core.cst$kw$tick);
var plink_21363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355_21360__$1,cljs.core.cst$kw$plink);
var beat_21364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355_21360__$1,cljs.core.cst$kw$beat);
if(cljs.core.truth_(beepmachine.app.should_play_QMARK_(plink_21363,tick_21362))){
var map__21357_21365 = plink_21363;
var map__21357_21366__$1 = ((((!((map__21357_21365 == null)))?((((map__21357_21365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21357_21365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21357_21365):map__21357_21365);
var notes_21367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357_21366__$1,cljs.core.cst$kw$notes);
var note_idx_21368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357_21366__$1,cljs.core.cst$kw$note_DASH_idx);
var note_id_21369 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(notes_21367,note_idx_21368,null);
var next_idx_21370 = (((note_idx_21368 >= (cljs.core.count(notes_21367) - (1))))?(0):(note_idx_21368 + (1)));
if(cljs.core.truth_(note_id_21369)){
beepmachine.app.play_BANG_(plink_21363,beepmachine.app.note_id__GT_note(note_id_21369),time);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(beepmachine.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$note_DASH_idx], null),next_idx_21370);
} else {
}

if(cljs.core.truth_(beepmachine.app.should_play_QMARK_(beat_21364,tick_21362))){
beepmachine.app.play_BANG_(beat_21364,"C#2",time);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(beepmachine.app.app_state,cljs.core.update,cljs.core.cst$kw$tick,cljs.core.inc);
});
beepmachine.app.init_BANG_ = (function beepmachine$app$init_BANG_(){
cljs.core.enable_console_print_BANG_();

var tone_loop_21371 = (new Tone.Loop(beepmachine.app.tick_BANG_));
tone_loop_21371.interval = "32n";

tone_loop_21371.start((0));

Tone.Transport.start();

document.onkeydown = beepmachine.app.handle_keydown_BANG_;

return document.onkeyup = beepmachine.app.handle_keyup_BANG_;
});
beepmachine.app.init_BANG_();
