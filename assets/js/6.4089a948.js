(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{332:function(e,a,l){"use strict";l.r(a);var s={data:function(){return{data:[{name:"Board Games",sold:131,available:301,items:[{name:"Monopoly",sold:57,available:100},{name:"Scrabble",sold:23,available:84},{name:"Chess",sold:37,available:61},{name:"Battleships",sold:14,available:56}]},{name:"Jigsaws & Puzzles",sold:88,available:167,items:[{name:"World Map",sold:31,available:38},{name:"London",sold:23,available:29},{name:"Sharks",sold:20,available:44},{name:"Disney",sold:14,available:56}]},{name:"Books",sold:434,available:721,items:[{name:"Hamlet",sold:101,available:187},{name:"The Lord Of The Rings",sold:85,available:156},{name:"To Kill a Mockingbird",sold:78,available:131},{name:"Catch-22",sold:73,available:98},{name:"Frankenstein",sold:51,available:81},{name:"Alice's Adventures In Wonderland",sold:46,available:68}]}],columnsVisible:{name:{title:"Name",display:!0},sold:{title:"Stock Sold",display:!0},available:{title:"Stock Available",display:!0},cleared:{title:"Stock Cleared",display:!0}},showDetailIcon:!0}},methods:{toggle:function(e){this.$refs.table.toggleDetails(e)}}},i=l(33),o=Object(i.a)(s,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("section",[l("b-field",{attrs:{grouped:"","group-multiline":""}},[l("div",{staticClass:"control"},[l("b-checkbox",{model:{value:e.showDetailIcon,callback:function(a){e.showDetailIcon=a},expression:"showDetailIcon"}},[e._v("Detail column")])],1),e._v(" "),e._l(e.columnsVisible,(function(a,s){return l("div",{key:s,staticClass:"control"},[l("b-checkbox",{model:{value:a.display,callback:function(l){e.$set(a,"display",l)},expression:"column.display"}},[e._v("\n                "+e._s(a.title)+"\n            ")])],1)}))],2),e._v(" "),l("b-table",{ref:"table",attrs:{data:e.data,detailed:"",hoverable:"","custom-detail-row":"","opened-detailed":["Board Games"],"default-sort":["name","asc"],"detail-key":"name","show-detail-icon":e.showDetailIcon},on:{"details-open":function(a,l){return e.$buefy.toast.open("Expanded "+a.name)}},scopedSlots:e._u([{key:"default",fn:function(a){return[l("b-table-column",{attrs:{field:"name",visible:e.columnsVisible.name.display,label:e.columnsVisible.name.title,width:"300",sortable:""}},[e.showDetailIcon?[e._v("\n                    "+e._s(a.row.name)+"\n                ")]:[l("a",{on:{click:function(l){return e.toggle(a.row)}}},[e._v("\n                        "+e._s(a.row.name)+"\n                    ")])]],2),e._v(" "),l("b-table-column",{attrs:{field:"sold",visible:e.columnsVisible.sold.display,label:e.columnsVisible.sold.title,sortable:"",centered:""}},[e._v("\n                "+e._s(a.row.sold)+"\n            ")]),e._v(" "),l("b-table-column",{attrs:{field:"available",visible:e.columnsVisible.available.display,label:e.columnsVisible.available.title,sortable:"",centered:""}},[e._v("\n                "+e._s(a.row.available)+"\n            ")]),e._v(" "),l("b-table-column",{attrs:{visible:e.columnsVisible.cleared.display,label:e.columnsVisible.cleared.title,centered:""}},[l("span",{class:["tag",{"is-danger":a.row.sold/a.row.available<=.45},{"is-success":a.row.sold/a.row.available>.45}]},[e._v("\n                    "+e._s(Math.round(a.row.sold/a.row.available*100))+"%\n                ")])])]}},{key:"detail",fn:function(a){return e._l(a.row.items,(function(a){return l("tr",{key:a.name},[e.showDetailIcon?l("td"):e._e(),e._v(" "),l("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.name.display,expression:"columnsVisible['name'].display"}]},[e._v("    "+e._s(a.name))]),e._v(" "),l("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.sold.display,expression:"columnsVisible['sold'].display"}],staticClass:"has-text-centered"},[e._v(e._s(a.sold))]),e._v(" "),l("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.available.display,expression:"columnsVisible['available'].display"}],staticClass:"has-text-centered"},[e._v(e._s(a.available))]),e._v(" "),l("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.cleared.display,expression:"columnsVisible['cleared'].display"}],staticClass:"has-text-centered"},[l("span",{class:["tag",{"is-danger":a.sold/a.available<=.45},{"is-success":a.sold/a.available>.45}]},[e._v("\n                        "+e._s(Math.round(a.sold/a.available*100))+"%\n                    ")])])])}))}}])})],1)}),[],!1,null,null,null);a.default=o.exports}}]);