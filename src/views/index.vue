<template>
	<div class="index" >
		<div class="mengban" v-if="showmengban" @click="ifmengban"></div>
		<transition name='rightslide'>
		<div class= "read" v-if="showmengban">
			<span>最近阅读</span>
			<div><img src="https://qidian.gtimg.com/qdm/img/book-cover.c977e.svg"/>
			<p>暂无记录</p>
			</div>
		</div>
		</transition>
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
				<h3>热门小说</h3><span>起点编辑推荐</span><span class="more">更多></span>
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
				<h3>限时免费</h3><span class="time"><span class="hour">{{hour}}</span>
				<span>:</span><span class="min"><i v-if="minshow0">0</i>{{min}}</span><span>:</span><span class="second">
				  <i v-if="show0">0</i>{{second}}
				</span>
				</span>
				<span class="more">更多></span>
			</div>
		   <mybooklist isfree='true' :booklist = 'booklist2'/>
		</div>	
		<div class="bookscroll" style="overflow: hidden; margin-top: 20px; height: 2.3rem;">
			<div class="bookscrollheader">
				<h3>排行榜</h3><span class="more">更多></span>
			</div>		
				<mt-navbar v-model="selected" >
						<mt-tab-item id="1" >热销榜</mt-tab-item>
						<mt-tab-item id="2" >风云榜</mt-tab-item>
						<mt-tab-item id="3" >签约榜</mt-tab-item>
						<mt-tab-item id="4" >推荐榜</mt-tab-item>
					</mt-navbar>
					<!--<mybooklist isrank='true' :booklist = 'booklist3'/>-->

					<mt-tab-container v-model="selected">
						<mt-tab-container-item id="1">
							<mybooklist isrank='true' :booklist = 'booklist3' :myrefresh='myrefresh' />
						</mt-tab-container-item>
						<mt-tab-container-item id="2">
							<mybooklist isrank='true' :booklist = 'booklist2' :myrefresh='myrefresh'/>
						</mt-tab-container-item>
						<mt-tab-container-item id="3">
							<mybooklist isrank='true' :booklist = 'booklist' :myrefresh='myrefresh'/>
						</mt-tab-container-item>
						<mt-tab-container-item id="4">
							<mybooklist isrank='true' :booklist = 'booklist4' :myrefresh='myrefresh'/>
						</mt-tab-container-item>
					</mt-tab-container>
		  <!-- <mybooklist isrank='true' :booklist = 'booklist3'/>-->
		</div>
		<div class="avd"> 
			<img src="https://qidian.qpic.cn/qidian_common/349573/0f75fc58cca1708aacc746fe09e0153e/0" />
		</div>
		
		<div class="bookscroll" style="height: 4rem; ">
			<div class="bookscrollheader">
				<h3>新书抢先</h3><span>24小时热销新书</span><span class="more">更多></span>
			</div>
			
		   <bookul :bookul='bookul1'/>
		</div>
			<div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>畅销完本</h3><span>一周热销完本书</span><span class="more">更多></span>
			</div>
			
		   <bookul :bookul='bookul2'/>
		</div>
		
		<div class="bookscroll" style="overflow: hidden; margin-top: 20px; height: 4.7rem;">
			<div class="bookscrollheader ">
				<h3>分类推荐</h3><span>频道主编推荐</span><span class="more">更多></span>
			</div>
		
				
					<mt-navbar v-model="selected2" >
										<mt-tab-item id="1" >玄幻奇幻</mt-tab-item>
										<mt-tab-item id="2" >武侠仙侠</mt-tab-item>
										<mt-tab-item id="3" >都市职场</mt-tab-item>
									</mt-navbar>
													
									<mt-tab-container v-model="selected2">
										<mt-tab-container-item id="1">
										<mybooklist  :booklist = 'classification1' :myrefresh='myrefresh'/>
										</mt-tab-container-item>
										<mt-tab-container-item id="2">
											<mybooklist  :booklist = 'classification2' :myrefresh='myrefresh'/>
										</mt-tab-container-item>
										<mt-tab-container-item id="3">
										<mybooklist  :booklist = 'classification1' :myrefresh='myrefresh'/>
										</mt-tab-container-item>
									</mt-tab-container>
						 
						
		   <mt-navbar v-model="selected3"  style= 'margin-top: 10px;'>
		   					<mt-tab-item id="1" >历史军事</mt-tab-item>
		   					<mt-tab-item id="2" >游戏体育</mt-tab-item>
		   					<mt-tab-item id="3" >科幻灵异</mt-tab-item>
		   				</mt-navbar>
		   								
		   				<mt-tab-container v-model="selected3">
		   					<mt-tab-container-item id="1">
		   					<mybooklist  :booklist = 'classification2' :myrefresh='myrefresh'/>
		   					</mt-tab-container-item>
		   					<mt-tab-container-item id="2">
		   						<mybooklist  :booklist = 'classification1' :myrefresh='myrefresh'/>
		   					</mt-tab-container-item>
		   					<mt-tab-container-item id="3">
		   					<mybooklist  :booklist = 'classification2' :myrefresh='myrefresh'/>
		   					</mt-tab-container-item>
		   				</mt-tab-container>
		   
		   <div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>畅销完本</h3><span>一周热销完本书</span><span class="more">更多></span>
			</div>
			
		   <bookul :bookul='bookul2'/>
		</div>
		</div>
		   <div class="bookscroll" style="height: 2rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>二次元</h3><span class="more">更多></span>
			</div>
			<mybooklist :booklist = 'Quadratic'/>
		</div>
		
		<div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>猜你喜欢</h3><span class="more" :class="{spanhover:isselect}" 
					style="width: .7rem;" @click="handlechange()">
						<i  class="fa fa-refresh" aria-hidden="true"></i>
					&nbsp;&nbsp;换一批</span>
			</div>			
		 <gassul :bookul='mygass'/>
		</div>
		
		<div class="bookscroll" style="height: 2rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>精选专题</h3>
			</div>			
		    <adv/>
		</div>
		<div class="foot">copyright © 2002-2018 m.qidian.com</div>
			<transition name='fade'>
				<div v-if="show"  class="gotop" @click="handlegotop" >
						<i class="fa fa-chevron-up" aria-hidden="true"></i>
				</div>
			</transition>
			
				<div class="readbefore" @click="readbefore" >
						<p>最近<br>阅读</p>
				</div>
			
	</div>
	
</template>
<script>
	
	import bookul from '../components/bookul/bookul';
	import gassul from '../components/gassul/gassul';
	import mybooklist from '../components/booklistscroll/listscroll';
	import appheader from '../components/appheader/appheader';
	import adv from '../components/adv/adv';
//	import $ from 'zepto';
	import { Navbar, TabItem } from 'mint-ui';
	import { Swipe, SwipeItem } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui';
	import BScroll from 'better-scroll';

	
	export default {
		name:"index",
		data(){			
			return {
					myrefresh:0,
					showmengban:false,
					show0:false,
					minshow0:false,
					hour:24,
					min:0,
					second:0,
					show:false,
				  payload :0,
					isselect:false,
					mygass:[],
					selected: '1',
					selected2:'1',
					selected3:'1',
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
			}			
		},
		methods:{			
				
				readbefore(){
					this.showmengban=true
				},
				ifmengban(){				
						this.showmengban = false
				
				},
				handlegotop(){	
				$.fn.scrollTo =function(options){
		        var defaults = {
		            toT : 0,    //滚动目标位置
		            durTime : 500,  //过渡动画时间
		            delay : 30,     //定时器时间
		            callback:null   //回调函数
		        };
		        var opts = $.extend(defaults,options),
		            timer = null,
		            _this = this,
		            curTop = _this.scrollTop(),//滚动条当前的位置
		            subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
		            index = 0,
		            dur = Math.round(opts.durTime / opts.delay),
		            smoothScroll = function(t){
		                index++;
		                var per = Math.round(subTop/dur);
		                if(index >= dur){
		                    _this.scrollTop(t);
		                    window.clearInterval(timer);
		                    if(opts.callback && typeof opts.callback == 'function'){
		                        opts.callback();
		                    }
		                    return;
		                }else{
		                    _this.scrollTop(curTop + index*per);
		                }
		            };
		        timer = window.setInterval(function(){
		            smoothScroll(opts.toT);
		        }, opts.delay);
		        return _this;
	    },
		    $('body').scrollTo({
					toT:0
				},100)
			},
			
			handlechange(){			
				        if(this.payload==27){
				        	this.payload = -3
				        }
						this.payload+=3
						this.isselect=true
						var change = setInterval(function(){					
							this.isselect = false
							clearInterval(change)
						}.bind(this),500);						
						let data =  this.$store.getters.filter(this.payload);
						//console.log(this.payload)
						this.mygass = data
					
				},
			handelindex(path){
				this.$router.push({path})				
			}
		},
  		components:{
  			'mt-swipe': Swipe,
     		'mt-swipe-item': SwipeItem,
				'mt-navbar':Navbar,
				'mt-tab-item':TabItem,
				'mt-tab-container':TabContainer,
				'mt-tab-container-item': TabContainerItem,
     		mybooklist,
     		bookul,
     		appheader,
     		gassul,
     		adv
  		},
  		computed:{	
			
			booklist(){
				let data = this.$store.state.booklist.booklist;
				return [...data]  					
			},
			booklist2(){
				let data = this.$store.state.booklist.booklist2;
				return data  					
			},
			booklist3(){
				let data = this.$store.state.booklist.booklist3;
				return [...data]  					
			},
			booklist4(){
				let data = this.$store.state.booklist.booklist4;
				return [...data]  					
			},
			bookul1(){
				let data = this.$store.state.booklist.bookul1;
				return [...data]  					
			},
			bookul2(){
				let data = this.$store.state.booklist.bookul2;
				return [...data]  					
			},
			classification1(){
				let data = this.$store.state.booklist.classification1;
				return [...data]  					
			},
			classification2(){
				let data = this.$store.state.booklist.classification2;
				return [...data]  					
			},
			Quadratic(){
				let data = this.$store.state.booklist.Quadratic;				
				this.mygass  = this.$store.getters.filter(0)
				return [...data]  					
		}				
	  	},  	
	  	created(){
	  	
	  	},
		mounted(){
			$('body').on('scroll',function(){
				if($('body').scrollTop()>=700){				
					this.show = true
				}else{
					this.show = false
				} 
			}.bind(this))
			setInterval(function(){					
						this.second --
						if(this.second<10){							
							this.show0=true
						}					
						if(this.second<0){
							if(this.min==10){
								this.minshow0=true
							}
								this.show0=false
								this.min = this.min-1;
								this.second = 59							
						}
						if(this.min<0){
							this.minshow0 = false
							this.hour = this.hour-1;
							this.min = 59
						}
				}.bind(this),1000)		
		},
		
		watch:{
				selected:function(val, oldVal){					 
						this.myrefresh=1+this.myrefresh					
			},
				selected2:function(val, oldVal){					 
						this.myrefresh=1+this.myrefresh					
			},
				selected3:function(val, oldVal){					 
						this.myrefresh=1+this.myrefresh					
			}
	}
	}
</script>
<style lang="scss" scoped="scoped">
	@import "../style/app";
</style>

