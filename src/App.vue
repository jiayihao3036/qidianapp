<template>
			<transition name='fade'>
				<router-view></router-view>
			</transition>
</template>

<script>

	import {mapActions} from 'vuex'
  export default {
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
			
				.fade-enter-active, .fade-leave-active {
						transition: opacity .5s;
					}
					.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
						opacity: 0;
					}
		}
		
			     

</style>

