webpackJsonp([10],{UXlQ:function(t,n){},uqfr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i("Muz9"),e=i.n(a),s=i("teIl"),r=i("xd7I"),o=i("xCN/");r.default.use(o.b);var l={components:{Header:s.a},name:"Home",data:function(){return{List:[],Arr:[],count:0,isLoading:!1,loading:!1,finished:!1,val:0}},filters:{ellipsis:function(t){return t?t.length>15?t.slice(0,15)+"...":t:""}},created:function(){var t=this;this.axios.get("http://elm.cangdu.org/shopping/restaurants?latitude=45.74764&longitude=126.63249&offset=0&limit=10&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=").then(function(n){t.Arr=n.data})},methods:{Division:function(t){for(var n=[],i=0,a=0;i<t.length;i+=8,a++)n[a]=t.slice(i,i+8);return n},click:function(){this.$router.push("/Address")},click2:function(){this.$router.push("/")},onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1,t.count++},500)},cli:function(t){this.$router.push({path:"/Nav",query:{items:t}}),console.log(t)},onLoad:function(){var t=this;setTimeout(function(){if(t.val+=10){e.a.get("http://elm.cangdu.org/shopping/restaurants?latitude=45.74764&longitude=126.63249&offset=0&limit="+t.val+"&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=").then(function(n){t.Arr=n.data});for(var n=0;n<10;n++)t.Arr.push(t.Arr.length+1);t.loading=!1,t.Arr.length>=40&&(t.finished=!0)}},1e3)}},mounted:function(){var t=this;this.axios.get("http://elm.cangdu.org/v2/index_entry?geohash=39.78493,116.49476&group_type=1 &flags[]=F").then(function(n){t.List=t.Division(n.data)})}},c={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"homepage"}},[i("Header",{attrs:{Flagadd:!1,FlagHome:!0,FlagCity:!1,FlagSignin:!1,FlagSearch:!1,FlagOrder:!1,FlagMy:!1,FlagAcc:!1}}),t._v(" "),i("van-pull-refresh",{attrs:{finished:t.finished},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[i("div",{staticClass:"content"},[i("van-swipe",{staticClass:"ant",attrs:{autoplay:3e3,"indicator-color":"blue"}},t._l(t.List,function(n,a){return i("van-swipe-item",{key:a,staticClass:"ant2"},t._l(n,function(n,a){return i("div",{key:a,staticClass:"ant3"},[i("img",{attrs:{src:"https://fuss10.elemecdn.com/"+n.image_url}}),t._v(" "),i("div",{staticClass:"ant4"},[t._v(t._s(n.title))])])}),0)}),1),t._v(" "),i("div",{staticClass:"con"},[i("div",{staticClass:"con1"},[t._v("附近商家")]),t._v(" "),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.Arr,function(n,a){return i("div",{key:a,staticClass:"con2",on:{click:function(i){return t.cli(n)}}},[i("img",{staticClass:"con2-1",attrs:{src:"http://elm.cangdu.org/img/"+n.image_path}}),t._v(" "),i("div",{staticClass:"con2-2"},[i("div",{staticClass:"conn1"},[i("span",[t._v("品牌")]),t._v(" "),i("span",[t._v(t._s(t._f("ellipsis")(n.name)))]),t._v(" "),i("span",[t._v("保准票")])]),t._v(" "),i("div",{staticClass:"conn2"},[i("span",[t._v("星星")]),t._v(" "),i("span",[t._v(t._s(n.rating))]),t._v(" "),i("span",[t._v("月售106单")]),t._v(" "),i("span",[t._v("蜂鸟专送")]),t._v(" "),i("span",[t._v("准时达")])]),t._v(" "),i("div",{staticClass:"conn3"},[i("span",[t._v("￥"+t._s(n.float_minimum_order_amount)+"起送/")]),t._v(" "),i("span",[t._v("配送费约￥"+t._s(n.float_delivery_fee))]),t._v(" "),i("span",[t._v(t._s(n.distance)+"/"+t._s(n.order_lead_time))])])])])}),0)],1)],1)])],1)},staticRenderFns:[]};var d=i("C7Lr")(l,c,!1,function(t){i("UXlQ")},null,null);n.default=d.exports}});
//# sourceMappingURL=10.fd980c1881c2742213e8.js.map