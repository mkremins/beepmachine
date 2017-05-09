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
beepmachine.app.inc_pitch_or_wrap = (function beepmachine$app$inc_pitch_or_wrap(note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,(function (p1__21308_SHARP_){
if((p1__21308_SHARP_ > (29))){
return (0);
} else {
return (p1__21308_SHARP_ + (1));
}
}));
});
beepmachine.app.dec_pitch_or_wrap = (function beepmachine$app$dec_pitch_or_wrap(note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,(function (p1__21309_SHARP_){
if((p1__21309_SHARP_ < (1))){
return (29);
} else {
return (p1__21309_SHARP_ - (1));
}
}));
});
beepmachine.app.should_play_QMARK_ = (function beepmachine$app$should_play_QMARK_(instrument,tick){
return (cljs.core.mod(tick,cljs.core.cst$kw$spacing.cljs$core$IFn$_invoke$arity$1(instrument)) === (0));
});
beepmachine.app.play_BANG_ = (function beepmachine$app$play_BANG_(p__21310,p__21311,time){
var map__21316 = p__21310;
var map__21316__$1 = ((((!((map__21316 == null)))?((((map__21316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21316):map__21316);
var synth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,cljs.core.cst$kw$synth);
var map__21317 = p__21311;
var map__21317__$1 = ((((!((map__21317 == null)))?((((map__21317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21317):map__21317);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,cljs.core.cst$kw$pitch);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,cljs.core.cst$kw$duration);
return synth.triggerAttackRelease(((typeof pitch === 'string')?pitch:beepmachine.app.note_id__GT_note(pitch)),(beepmachine.app.ticks__GT_note_length.cljs$core$IFn$_invoke$arity$1 ? beepmachine.app.ticks__GT_note_length.cljs$core$IFn$_invoke$arity$1(duration) : beepmachine.app.ticks__GT_note_length.call(null,duration)),time);
});
if(typeof beepmachine.app.app_state !== 'undefined'){
} else {
beepmachine.app.app_state = (function (){var G__21320 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tick,(0),cljs.core.cst$kw$plink,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$synth,(new Tone.Synth()).toMaster(),cljs.core.cst$kw$spacing,(4),cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(5),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(6),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(7),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(8),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(9),cljs.core.cst$kw$duration,(2)], null)], null),cljs.core.cst$kw$note_DASH_idx,(0)], null),cljs.core.cst$kw$beat,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$synth,(new Tone.MembraneSynth()).chain((new Tone.Volume((10))),Tone.Master),cljs.core.cst$kw$spacing,(8),cljs.core.cst$kw$duration,(4)], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21320) : cljs.core.atom.call(null,G__21320));
})();
}
beepmachine.app.clear_state = (function beepmachine$app$clear_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$plink,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spacing,(4),cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(5),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(6),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(7),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(8),cljs.core.cst$kw$duration,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(9),cljs.core.cst$kw$duration,(2)], null)], null)], null)),cljs.core.cst$kw$beat,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spacing,(8),cljs.core.cst$kw$duration,(4)], null));
});
beepmachine.app.raise_lowest_plink = (function beepmachine$app$raise_lowest_plink(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (notes){
if(cljs.core.empty_QMARK_(notes)){
return cljs.core.PersistentVector.EMPTY;
} else {
var lowest_pitch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pitch,notes));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (lowest_pitch){
return (function (note){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(note),lowest_pitch)){
return beepmachine.app.inc_pitch_or_wrap(note);
} else {
return note;
}
});})(lowest_pitch))
,notes);
}
}));
});
beepmachine.app.lower_highest_plink = (function beepmachine$app$lower_highest_plink(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (notes){
if(cljs.core.empty_QMARK_(notes)){
return cljs.core.PersistentVector.EMPTY;
} else {
var highest_pitch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pitch,notes));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (highest_pitch){
return (function (note){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(note),highest_pitch)){
return beepmachine.app.dec_pitch_or_wrap(note);
} else {
return note;
}
});})(highest_pitch))
,notes);
}
}));
});
beepmachine.app.double_beat_spacing = (function beepmachine$app$double_beat_spacing(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beat,cljs.core.cst$kw$spacing], null),(function (p1__21321_SHARP_){
if((p1__21321_SHARP_ >= (32))){
return p1__21321_SHARP_;
} else {
return (p1__21321_SHARP_ * (2));
}
}));
});
beepmachine.app.halve_beat_spacing = (function beepmachine$app$halve_beat_spacing(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beat,cljs.core.cst$kw$spacing], null),(function (p1__21322_SHARP_){
return (p1__21322_SHARP_ / (2));
}));
});
beepmachine.app.shift_plinks_up_1 = (function beepmachine$app$shift_plinks_up_1(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21323_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(beepmachine.app.inc_pitch_or_wrap,p1__21323_SHARP_);
}));
});
beepmachine.app.shift_plinks_down_1 = (function beepmachine$app$shift_plinks_down_1(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21324_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(beepmachine.app.dec_pitch_or_wrap,p1__21324_SHARP_);
}));
});
beepmachine.app.shuffle_plinks = (function beepmachine$app$shuffle_plinks(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.shuffle));
});
beepmachine.app.reverse_plinks = (function beepmachine$app$reverse_plinks(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.reverse));
});
beepmachine.app.drop_last_plink = (function beepmachine$app$drop_last_plink(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21325_SHARP_){
if(cljs.core.empty_QMARK_(p1__21325_SHARP_)){
return p1__21325_SHARP_;
} else {
return cljs.core.pop(p1__21325_SHARP_);
}
}));
});
beepmachine.app.push_last_plink = (function beepmachine$app$push_last_plink(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (p1__21326_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21326_SHARP_,((cljs.core.empty_QMARK_(p1__21326_SHARP_))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,(5),cljs.core.cst$kw$duration,(2)], null):beepmachine.app.inc_pitch_or_wrap(cljs.core.peek(p1__21326_SHARP_))));
}));
});
beepmachine.app.extend_first_short_plink = (function beepmachine$app$extend_first_short_plink(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (notes){
if(cljs.core.empty_QMARK_(notes)){
return cljs.core.PersistentVector.EMPTY;
} else {
var avg_duration = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$duration,notes)) / cljs.core.count(notes));
var idx = (function (){var i = (0);
while(true){
if((cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(notes,i)) <= avg_duration)){
return i;
} else {
var G__21328 = (i + (1));
i = G__21328;
continue;
}
break;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(notes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.cst$kw$duration], null),((function (avg_duration,idx){
return (function (p1__21327_SHARP_){
return (p1__21327_SHARP_ * (2));
});})(avg_duration,idx))
);
}
}));
});
beepmachine.app.shorten_first_long_plink = (function beepmachine$app$shorten_first_long_plink(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$notes], null),(function (notes){
if(cljs.core.empty_QMARK_(notes)){
return cljs.core.PersistentVector.EMPTY;
} else {
var avg_duration = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$duration,notes)) / cljs.core.count(notes));
var idx = (function (){var i = (0);
while(true){
if((cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(notes,i)) >= avg_duration)){
return i;
} else {
var G__21330 = (i + (1));
i = G__21330;
continue;
}
break;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(notes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.cst$kw$duration], null),((function (avg_duration,idx){
return (function (p1__21329_SHARP_){
if((p1__21329_SHARP_ > (1))){
return (p1__21329_SHARP_ / (2));
} else {
return p1__21329_SHARP_;
}
});})(avg_duration,idx))
);
}
}));
});

var ufv___21347 = schema.utils.use_fn_validation;
var output_schema21332_21348 = schema.core.Any;
var input_schema21333_21349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21334_21350 = schema.core.checker(input_schema21333_21349);
var output_checker21335_21351 = schema.core.checker(output_schema21332_21348);
/**
 * Inputs: [data owner]
 */
beepmachine.app.app = ((function (ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function beepmachine$app$app(G__21336,G__21337){
var validate__16734__auto__ = ufv___21347.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___21352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21336,G__21337], null);
var temp__4657__auto___21353 = (input_checker21334_21350.cljs$core$IFn$_invoke$arity$1 ? input_checker21334_21350.cljs$core$IFn$_invoke$arity$1(args__16735__auto___21352) : input_checker21334_21350.call(null,args__16735__auto___21352));
if(cljs.core.truth_(temp__4657__auto___21353)){
var error__16736__auto___21354 = temp__4657__auto___21353;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21354], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21333_21349,cljs.core.cst$kw$value,args__16735__auto___21352,cljs.core.cst$kw$error,error__16736__auto___21354], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var data = G__21336;
var owner = G__21337;
while(true){
if(typeof beepmachine.app.t_beepmachine$app21341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
beepmachine.app.t_beepmachine$app21341 = (function (input_schema21333,owner,data,input_checker21334,G__21337,output_schema21332,output_checker21335,app,G__21336,ufv__,validate__16734__auto__,meta21342){
this.input_schema21333 = input_schema21333;
this.owner = owner;
this.data = data;
this.input_checker21334 = input_checker21334;
this.G__21337 = G__21337;
this.output_schema21332 = output_schema21332;
this.output_checker21335 = output_checker21335;
this.app = app;
this.G__21336 = G__21336;
this.ufv__ = ufv__;
this.validate__16734__auto__ = validate__16734__auto__;
this.meta21342 = meta21342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
beepmachine.app.t_beepmachine$app21341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function (_21343,meta21342__$1){
var self__ = this;
var _21343__$1 = this;
return (new beepmachine.app.t_beepmachine$app21341(self__.input_schema21333,self__.owner,self__.data,self__.input_checker21334,self__.G__21337,self__.output_schema21332,self__.output_checker21335,self__.app,self__.G__21336,self__.ufv__,self__.validate__16734__auto__,meta21342__$1));
});})(validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

beepmachine.app.t_beepmachine$app21341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function (_21343){
var self__ = this;
var _21343__$1 = this;
return self__.meta21342;
});})(validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

beepmachine.app.t_beepmachine$app21341.prototype.om$core$IDisplayName$ = true;

beepmachine.app.t_beepmachine$app21341.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

beepmachine.app.t_beepmachine$app21341.prototype.om$core$IRender$ = true;

beepmachine.app.t_beepmachine$app21341.prototype.om$core$IRender$render$arity$1 = ((function (validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,"beepmachine");
});})(validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

beepmachine.app.t_beepmachine$app21341.getBasis = ((function (validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21333,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_checker21334,cljs.core.with_meta(cljs.core.cst$sym$G__21337,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema21332,cljs.core.cst$sym$output_DASH_checker21335,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21332,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21333], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.with_meta(cljs.core.cst$sym$G__21336,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__16734__auto__,cljs.core.cst$sym$meta21342], null);
});})(validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

beepmachine.app.t_beepmachine$app21341.cljs$lang$type = true;

beepmachine.app.t_beepmachine$app21341.cljs$lang$ctorStr = "beepmachine.app/t_beepmachine$app21341";

beepmachine.app.t_beepmachine$app21341.cljs$lang$ctorPrWriter = ((function (validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"beepmachine.app/t_beepmachine$app21341");
});})(validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

beepmachine.app.__GT_t_beepmachine$app21341 = ((function (validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351){
return (function beepmachine$app$app_$___GT_t_beepmachine$app21341(input_schema21333__$1,owner__$1,data__$1,input_checker21334__$1,G__21337__$1,output_schema21332__$1,output_checker21335__$1,app__$1,G__21336__$1,ufv____$1,validate__16734__auto____$1,meta21342){
return (new beepmachine.app.t_beepmachine$app21341(input_schema21333__$1,owner__$1,data__$1,input_checker21334__$1,G__21337__$1,output_schema21332__$1,output_checker21335__$1,app__$1,G__21336__$1,ufv____$1,validate__16734__auto____$1,meta21342));
});})(validate__16734__auto__,ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

}

return (new beepmachine.app.t_beepmachine$app21341(input_schema21333_21349,owner,data,input_checker21334_21350,G__21337,output_schema21332_21348,output_checker21335_21351,beepmachine$app$app,G__21336,ufv___21347,validate__16734__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___21355 = (output_checker21335_21351.cljs$core$IFn$_invoke$arity$1 ? output_checker21335_21351.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker21335_21351.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___21355)){
var error__16736__auto___21356 = temp__4657__auto___21355;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21356], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21332_21348,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___21356], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___21347,output_schema21332_21348,input_schema21333_21349,input_checker21334_21350,output_checker21335_21351))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(beepmachine.app.app),schema.core.make_fn_schema(output_schema21332_21348,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21333_21349], null)));

beepmachine.app.__GT_app = (function beepmachine$app$__GT_app(var_args){
var args21344 = [];
var len__7479__auto___21357 = arguments.length;
var i__7480__auto___21358 = (0);
while(true){
if((i__7480__auto___21358 < len__7479__auto___21357)){
args21344.push((arguments[i__7480__auto___21358]));

var G__21359 = (i__7480__auto___21358 + (1));
i__7480__auto___21358 = G__21359;
continue;
} else {
}
break;
}

var G__21346 = args21344.length;
switch (G__21346) {
case 1:
return beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21344.length)].join('')));

}
});

beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21253__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(beepmachine.app.app,cursor__21253__auto__);
});

beepmachine.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21253__auto__,m21331){
return om.core.build.cljs$core$IFn$_invoke$arity$3(beepmachine.app.app,cursor__21253__auto__,m21331);
});

beepmachine.app.__GT_app.cljs$lang$maxFixedArity = 2;

beepmachine.app.charmap = new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp","\u2191","ArrowDown","\u2193","ArrowLeft","\u2190","ArrowRight","\u2192"], null);
beepmachine.app.keybinds = cljs.core.PersistentHashMap.fromArrays(["d","z","ArrowUp","s","ArrowDown","e","q","ArrowRight","ArrowLeft","a","r","h","c"],[beepmachine.app.double_beat_spacing,beepmachine.app.lower_highest_plink,beepmachine.app.shift_plinks_up_1,beepmachine.app.shorten_first_long_plink,beepmachine.app.shift_plinks_down_1,beepmachine.app.extend_first_short_plink,beepmachine.app.shuffle_plinks,beepmachine.app.push_last_plink,beepmachine.app.drop_last_plink,beepmachine.app.raise_lowest_plink,beepmachine.app.reverse_plinks,beepmachine.app.halve_beat_spacing,beepmachine.app.clear_state]);
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

return beepmachine.app.display_key_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(beepmachine.app.charmap,ev.key,ev.key));
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
var map__21365_21369 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(beepmachine.app.app_state) : cljs.core.deref.call(null,beepmachine.app.app_state));
var map__21365_21370__$1 = ((((!((map__21365_21369 == null)))?((((map__21365_21369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21365_21369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21365_21369):map__21365_21369);
var state_21371 = map__21365_21370__$1;
var tick_21372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21365_21370__$1,cljs.core.cst$kw$tick);
var plink_21373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21365_21370__$1,cljs.core.cst$kw$plink);
var beat_21374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21365_21370__$1,cljs.core.cst$kw$beat);
if(cljs.core.truth_(beepmachine.app.should_play_QMARK_(plink_21373,tick_21372))){
var map__21367_21375 = plink_21373;
var map__21367_21376__$1 = ((((!((map__21367_21375 == null)))?((((map__21367_21375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21367_21375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21367_21375):map__21367_21375);
var notes_21377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367_21376__$1,cljs.core.cst$kw$notes);
var note_idx_21378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367_21376__$1,cljs.core.cst$kw$note_DASH_idx);
var note_21379 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(notes_21377,note_idx_21378,null);
var next_idx_21380 = (((note_idx_21378 >= (cljs.core.count(notes_21377) - (1))))?(0):(note_idx_21378 + (1)));
if(cljs.core.truth_(note_21379)){
beepmachine.app.play_BANG_(plink_21373,note_21379,time);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(beepmachine.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plink,cljs.core.cst$kw$note_DASH_idx], null),next_idx_21380);
} else {
}

if(cljs.core.truth_(beepmachine.app.should_play_QMARK_(beat_21374,tick_21372))){
beepmachine.app.play_BANG_(beat_21374,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,"C#2",cljs.core.cst$kw$duration,(4)], null),time);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(beepmachine.app.app_state,cljs.core.update,cljs.core.cst$kw$tick,cljs.core.inc);
});
beepmachine.app.init_BANG_ = (function beepmachine$app$init_BANG_(){
cljs.core.enable_console_print_BANG_();

var tone_loop_21381 = (new Tone.Loop(beepmachine.app.tick_BANG_));
tone_loop_21381.interval = "32n";

tone_loop_21381.start((0));

Tone.Transport.start();

document.onkeydown = beepmachine.app.handle_keydown_BANG_;

return document.onkeyup = beepmachine.app.handle_keyup_BANG_;
});
beepmachine.app.init_BANG_();
