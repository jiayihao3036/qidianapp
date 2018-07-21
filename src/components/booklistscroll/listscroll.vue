<template>
		<div class="bookscrollbody" :id='`list-${id}`'>
				<div class="booklistmax">			
					<div class="bookscrolllist" :id='`top-${index}`' v-for="(booklist,index) of booklist" :key='index'>
						<div>
							<span v-if='isfree'>限免</span>
							<i v-if='isrank' class="fa fa-diamond"></i>
							<span v-if='isrank' >
									Top{{index+1}}								
							</span>
							<img :src='booklist.bookimg'/>
						</div>	
							<p>{{booklist.bookname}}</p>
							<p>{{booklist.bookuser}}</p>
					</div>
				</div>
			</div>	
</template>
<script>
	import  BScroll from 'better-scroll';
	export default {
		name:'mybooklist',
		props:{
			 booklist: {
		      required: true
		  },
		  isfree:{
		  	type:String,
		  	required:false
		  },
		  isrank:{
		  	type:String,
		  	required:false
		  }
		   
		},
		data(){
			return {				
				id:''
			}
		},
		methods:{
			 getRandom(){
			      return new Date().getTime() + Math.ceil(Math.random() * 1000)
			    }
		},
		mounted(){
			this.id = this.getRandom()
			//this.id 改变会出发页面重绘但是不在执行mounted
 				this.$nextTick(function(){
 				new BScroll('#list-'+this.id,{
											scrollX:true
										})
 				})
				
						
				
		}	
		}
	
		
	
	
</script>

<style lang="scss" scoped>
		@import '../../style/usage/core/reset';
	  .bookscrollbody{
	  	overflow:hidden;
	  	@include flexbox();
	  	  
	  	.booklistmax{
	  		
	  		 padding-left: .10rem;
                   @include flexbox();
                   width:max-content;
                   .bookscrolllist{
                       width: .82rem;
                       height: 1.52rem;                     
                       div{
                           width: 66px;
                           height: 88px;
                           position: relative;
                           overflow: hidden;
                           i{
                           	display: block;
                           	position: absolute;
                           	left: -20px;
                           	top: -5px;
                           	width: 50px;
                           	height: 20px;
                           	color: white;
                           	text-align: center;
                           	line-height: 20px;
                           	font-size: 12px;
                           	background-color: #969ba3;
                           /*	transform: rotate(-45deg);*/
                           	transform: scale(0.8) rotate(-45deg);
                           }
                           span:nth-child(2){
                           
                           	background-color: #969ba3;
                           	
                           }
                           span{
                           	display: block;
                           	position: absolute;
                           	left: -12px;
                           	top: 5px;
                           	width: 50px;
                           	height: 16px;
                           	color: white;
                           	text-align: center;
                           	line-height: 16px;
                           	font-size: 12px;
                           	background-color: #4284ed;
                           	transform: rotate(-45deg);
                           }
                           img{
                               width: 100%;
                               height: 100%;
                           }
                       }
                       p{
                           font-size: 12px;
                       }
                       p:last-child{
                           color: #969ba3;
                       }
                   } 
	  			}         
                            
               }
               #top-0{
               	span:nth-child(2){
               		background-color: #ed424b;
               	}
               	i{
               		background-color: #ed424b;
               	}
               }
               #top-1{
               	span:nth-child(2){
               		background-color: #f0643a;
               	}
               	i{
               		background-color: #f0643a;
               	}
               }
               #top-2{
               	span:nth-child(2){
               		background-color: #f0c53a;
               	}
               	i{
               		background-color: #f0c53a;
               	}
               }
</style>