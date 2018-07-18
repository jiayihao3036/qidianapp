<template>
    <div class="overwrite">
        <appheader />
        <div class="bookscroll" style="overflow: hidden;">
			<div class="bookscrollheader">
				<h3>影视同期</h3><span>火热影视原著</span>
			</div>
		    <mybooklist :booklist = 'booklist11'/>
		</div>
        <div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>经典必读</h3><span></span><span class="more">更多></span>
			</div>	
		   <bookul :bookul='bookul22'/>
		</div>
        <div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>大神完本</h3><span></span><span class="more">更多></span>
			</div>	
		   <bookul :bookul='bookul22'/>
		</div>
        <div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>畅销完本</h3><span>一周热销完本书</span><span class="more">更多></span>
			</div>	
		   <bookul :bookul='bookul22'/>
		</div>
    </div>
</template>

<script>
    import appheader from '../components/appheader/appheader';
    import mybooklist from '../components/booklistscroll/listscroll';
    import bookul from '../components/bookul/bookul';
    import $ from 'axios';
    import { Swipe, SwipeItem } from 'mint-ui';
    export default {
        name:"overwrite",
        data(){
            return {
                booklist11:[],
                booklist22:[],
            }
        },
        components:{
             appheader,
             mybooklist,
             bookul
          },
          mounted(){
			$.get('http://localhost:9000/booklist').then((result)=>{
				this.booklist11 = result.data.data;
				//console.log(this.booklist11)				
            })
            $.get('http://localhost:9000/bookul2').then((result)=>{
				//console.log(result.data.data)
				this.bookul22 = result.data.data
			})
          }
    }
</script>

<style lang="scss" scoped>
    @import "../style/usage/core/reset";
    .overwrite{
        background-color: #f0f1f2; 
        width: 100%;
        overflow-y: scroll;
        @include flexbox();
        @include flex-direction(column);
    }
    .bookscroll {
        width: 100%;
        height: 2rem;
        background-color: white;
        .select {
            height: .3rem;
            width: 3.4rem;
            @include flexbox();
            margin: 0 auto;
            margin-bottom: .2rem;
            background-color: white;
            .Rankingselect1 {
                height: 100%;
                @include flex();
                @include border(1px, #ed424b, solid, 3px);
                text-align: center;
                line-height: .3rem;
                color: #ed424b;
            }
            .active {
                background-color: #ed424b;
                color: white;
            }
        }
        .bookscrollheader {
            margin-top: .1rem;
            padding-left: .10rem;
            @include flexbox();
            width: 100%;
            height: .34rem;
            position: relative;
            h3 {
                font-family: FZZCYSK;
                font-weight: bolder;
                color: #33373d;
                padding-left: .1rem;
                width: .75rem;
                height: .20rem;
                @include border(0 0 0 4px, #ed424b, solid);
            }
            span {
                margin-left: .15rem;
                color: #969ba3;
                display: block;
                @include flex();
            }
            .more {
                width: .5rem;
                position: absolute;
                right: .15rem;
            }
        }
    }

</style>