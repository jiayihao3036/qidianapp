import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		booklist:{
					booklist:[],
					booklist2:[],
					booklist3:[],
					bookul1:[],
					bookul2:[],
					classification1:[],
					classification2:[]
		}
  },
  mutations: {
			setdata(state,payload){
				state.booklist.booklist = payload[0].data.data;
				state.booklist.booklist2 = payload[1].data.data;
				state.booklist.booklist3 = payload[2].data.data;
				state.booklist.bookul1 = payload[3].data.data;
				state.booklist.bookul2 = payload[4].data.data;
				state.booklist.classification1=payload[5].data.data;
				state.booklist.classification2=payload[6].data.data;
			}
  },
  actions: {
			getdata({commit}){
				const booklist = $.get('http://localhost:9000/booklist').then((result)=>result)
				const booklist2 = $.get('http://localhost:9000/booklist2').then((result)=>result)
				const booklist3 = $.get('http://localhost:9000/booklist3').then((result)=>result)
				const bookul1 =
$.get('http://localhost:9000/bookul1').then((result)=>result)
				const bookul2 = 
$.get('http://localhost:9000/bookul2').then((result)=>result)
				const classification1 = $.get('http://localhost:9000/classification1').then((result)=>result)
				const classification2 = $.get('http://localhost:9000/classification2').then((result)=>result)
				
				Promise.all([booklist,booklist2,booklist3,bookul1,bookul2,classification1,classification2])
			.then((result)=>{
				commit('setdata',result)
			})
			}
			
  }
//getters:{
//	
//}
})
