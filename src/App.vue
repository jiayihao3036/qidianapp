<template>
      <router-view></router-view>
</template>

<script>
	import {mapActions} from 'vuex'
  export default {
//  data: function () {
//    return {
//
//  }
//}
		methods:{
			...mapActions(['getdata'])
			
		},
		created(){
			this.getdata()
		}
   }
</script>
<style lang="scss">
	@import './style/usage/core/reset';
	
		html,body{
		    height: 100%;
		    margin: 0;
		    padding: 0;
		    overflow-y: scroll;	
		    img{
		    	background-image: url("https://qidian.gtimg.com/qdm/img/book-cover.c977e.svg");
		    
		    } 		
		}
		
			     

</style>

