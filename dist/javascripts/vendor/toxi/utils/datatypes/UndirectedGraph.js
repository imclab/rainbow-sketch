define(["require","exports","module","./ArraySet"],function(t,e,i){var n=t("./ArraySet"),s=function(){this._nodeLinks={},this._nodeIDs=[]};s.prototype={add:function(t){void 0===this._nodeLinks[t]&&(this._nodeLinks[t]=new n,this._nodeIDs.push(t))},connect:function(t,e){if(void 0===this._nodeLinks[t])throw Error("nodeA has not been added");if(void 0===this._nodeLinks[e])throw Error("nodeB has not been added");this._nodeLinks[t].push(e),this._nodeLinks[e].push(t)},disconnect:function(t,e){if(void 0===this._nodeLinks[t])throw Error("nodeA has not been added");if(void 0===this._nodeLinks[e])throw Error("nodeB has not been added");this._nodeLinks[t].splice(this._nodeLinks[t].indexOf(e),1),this._nodeLinks[e].splice(this._nodeLinks[e].indexOf(t),1)},getConnectedNodesFor:function(t){if(void 0===this._nodeLinks[t])throw Error("node has not been added");return this._nodeLinks[t]},getNodes:function(){return this._nodeIDs},remove:function(t){var e=this._nodeLinks[t];if(void 0!==e){for(var i=0,n=e.length;n>i;i++){var s=e[i],r=s.indexOf(t);s.splice(r,1)}delete this._nodeLinks[t];var i=this._nodeIDs.indexOf(t);this._nodeIDs.splice(t,1)}}},i.exports=s});