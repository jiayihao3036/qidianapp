<template>
	<div class="index">
	<appheader />
		<div class="indexbanner">
		
			<mt-swipe class="mtswipe" :auto="4000">
			  <mt-swipe-item class="mtswipeitem" >
			  	<img src='../assets/imges/0 (1).jpg'/>
			  
			  </mt-swipe-item>	
			   <mt-swipe-item class="mtswipeitem" >
			  	<img src='../assets/imges/0 (2).jpg'/>
			  
			  </mt-swipe-item>
			   <mt-swipe-item class="mtswipeitem" >
			  	<img src='../assets/imges/0 (3).jpg'/>
			  
			  </mt-swipe-item>
			   <mt-swipe-item class="mtswipeitem" >
			  	<img src='../assets/imges/0.jpg'/>
			  
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class='search'>
			<i class="fa fa-search"></i><span>逆流纯真的年代</span>
		</div>
		<div class="myindex">		
				<div class="listindex">	
					<div class="list" :key='index' v-for='(dataindex,index) of dataindex' @click="handelindex(dataindex.path)">
						<div :style='dataindex.indeximg'></div>	
						<p>{{dataindex.indexp}}</p>
					</div>							
				</div>	
		</div>	
		<div class="avd"> 
			<img src="https://qidian.qpic.cn/qidian_common/349573/98630675299f399301c19529bcc02dda/0" />
		</div>							
		<div class="bookscroll" style="overflow: hidden;">
			<div class="bookscrollheader">
				<h3>热门小说</h3><span>起点编辑推荐</span>
			</div>
		<mybooklist :booklist = 'booklist'/>
		</div>
		<div class="groom">
			<div class="groomleft">
				<span>新书推荐</span>
			</div>
			<div class="groomright">
				<span>三江.网文新风</span>
			</div>
		</div>
		<div class="bookscroll" style="overflow: hidden;">
			<div class="bookscrollheader">
				<h3>限时免费</h3><span></span>
			</div>
		   <mybooklist isfree='true' :booklist = 'booklist2'/>
		</div>	
		<div class="bookscroll" style="overflow: hidden; margin-top: 20px; height: 2.3rem;">
			<div class="bookscrollheader">
				<h3>排行榜</h3><span class="more">更多></span>
			</div>
			<div class="select">
				<div class="Rankingselect1"><span>
					热销榜
				</span></div>
				<div class="Rankingselect1"><span>
					风云榜
				</span></div>
				<div class="Rankingselect1"><span>
					签约榜
				</span></div>
				<div class="Rankingselect1"><span>
					推荐榜
				</span></div>
			</div>
		   <mybooklist isrank='true' :booklist = 'booklist3'/>
		</div>
		<div class="avd"> 
			<img src="https://qidian.qpic.cn/qidian_common/349573/0f75fc58cca1708aacc746fe09e0153e/0" />
		</div>
		
		<div class="bookscroll">
			<div class="bookscrollheader">
				<h3>新书抢先</h3><span>24小时热销新书</span><span class="more">更多></span>
			</div>
			
		   <bookul/>
		</div>
	</div>
	
</template>
<script>
	import bookul from '../components/bookul/bookul';
	import mybooklist from '../components/booklistscroll/listscroll';
	import appheader from '../components/appheader/appheader';
	import $ from 'axios';
	import { Swipe, SwipeItem } from 'mint-ui'
	export default {
		name:"index",
		data(){
			
			return {
					dataindex:[{
						indeximg:"background:url('https://qidian.gtimg.com/qdm/icon/common/sprite@2x.f5569.png')no-repeat   -125px -55px; ",
						indexp:'分类',
						path:'/classification'
					},{
						indeximg:"background:url('https://qidian.gtimg.com/qdm/icon/common/sprite@2x.f5569.png')no-repeat   ; ",
						indexp:'排行榜',
						path:'/ranking'
					},{
						indeximg:"background:url('https://qidian.gtimg.com/qdm/icon/common/sprite@2x.f5569.png')no-repeat   0px -59px; ",
						indexp:'免费',
						path:'/Free'
					},{
						indeximg:"background:url('https://qidian.gtimg.com/qdm/icon/common/sprite@2x.f5569.png')no-repeat   0px -120px; ",
						indexp:'完本',
						path:'/overwrite'
					},{
						indeximg:"background:url('https://qidian.gtimg.com/qdm/icon/common/sprite@2x.f5569.png')no-repeat   -60px -60px; ",
						indexp:'大神',
						path:'/Okami'
					}],
					booklist:[],
					booklist2:[],
					booklist3:[]
					
			}			
		},
		methods:{
			handelindex(path){
				this.$router.push({path})
				
			}
		},
  		components:{
  			'mt-swipe': Swipe,
     		'mt-swipe-item': SwipeItem,
     		mybooklist,
     		bookul,
     		appheader
  		},
		mounted(){
			$.get('http://localhost:9000/booklist').then((result)=>{
				this.booklist = result.data.data;
				console.log(this.booklist)
				
			}),
			$.get('http://localhost:9000/booklist2').then((result)=>{
				this.booklist2 = result.data.data
			}),
			$.get('http://localhost:9000/booklist3').then((result)=>{
				this.booklist3 = result.data.data
			})
			
		}

	}
</script>
<style lang="scss" scoped>
	@import "../style/app";

</style>
