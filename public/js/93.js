"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93],{93:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});const r={data:function(){return{data:[],browser:"",error_message:""}},created:function(){this.getBrowserStat(this.$route.params.browser),this.browser=this.$route.params.browser},methods:{getBrowserStat:function(t){this.$http.get("/api/browser/"+t).then((function(t){200==t.status&&(this.data=t.data)}),(function(t){this.error_message="Что то пошло не так!"}))}}};const n=(0,s(900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container is-flex is-flex-direction-column is-align-items-center mt-5"},[s("h1",[t._v("Статистика по браузеру "+t._s(t.browser))]),t._v(" "),s("table",{staticClass:"table is-fullwidth"},[t._m(0),t._v(" "),s("tbody",t._l(t.data,(function(e){return s("tr",{key:e.link},[s("td",[t._v(t._s(e.link))]),t._v(" "),s("td",[t._v(t._s(e.count))])])})),0)])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[s("abbr",{attrs:{title:"ID Link"}},[t._v("Ссылки")])]),t._v(" "),s("th",[s("abbr",{attrs:{title:"Count"}},[t._v("Кол. переходов")])])])])}],!1,null,null,null).exports}}]);