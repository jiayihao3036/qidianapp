import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		booklist:{
					booklist:[],
					booklist4:[],
					booklist2:[],
					booklist3:[],
					bookul1:[],
					bookul2:[],
					classification1:[],
					classification2:[],
					Quadratic:[],
					gass:[]
		},
		scrollId:''
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
				state.booklist.Quadratic=payload[7].data.data;
				state.booklist.gass=payload[8].data.data;
				state.booklist.booklist4 = payload[9].data.data;
			}
  },
  getters:{
  	filter:(state)=>(payload)=>{
  		var arr = [];
  		var payload=payload ? payload : 0;
  		for(var i = payload;i<payload+3;i++){
  			 arr.push(state.booklist.gass[i])
  		} 
  		return arr
  	},
		busId:(state)=>(payload)=>{
			state.scrollId = payload
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
				const Quadratic = $.get('http://localhost:9000/Quadratic').then((result)=>result)
				const gass = 
				$.get('http://localhost:9000/gass').then((result)=>result)	
				const booklist4 = $.get('http://localhost:9000/booklist4').then((result)=>result)
				Promise.all([booklist,booklist2,booklist3,bookul1,bookul2,classification1,classification2,Quadratic,gass
				,booklist4])
			.then((result)=>{
				commit('setdata',result)
			})
			}
			
  }

})
