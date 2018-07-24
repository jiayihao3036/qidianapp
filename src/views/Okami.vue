<template>
    <div class="Okami">
        <appheader />
        <div class="bookscroll" style="overflow: hidden;margin-top: 20px;" >
			<div class="bookscrollheader">
				<h3>大神新书</h3>
			</div>
		    <mybooklist :booklist = 'booklist'/>
		</div>
       <div class="header">
      <div class="bookscrollheader">
      	<h3>白金列表</h3>
      </div>
       </div>
    </div>
</template>

<script>
    import appheader from '../components/appheader/appheader';
    import mybooklist from '../components/booklistscroll/listscroll';
    import $ from 'axios';
    export default {
        data(){
            return {
                
            }
        },
        components:{
             appheader,
             mybooklist            
          },       
		  computed:{
			  booklist(){
			  	let data = this.$store.state.booklist.booklist;
			  	return [...data]  					
			  }
		  },
		  mounted(){	   
		  
		  }
    }
</script>

<style lang="scss" scoped>
    @import "../style/usage/core/reset";
    .Okami{
				
        background-color: #f0f1f2; 
        width: 100%;
        overflow-y: scroll;
        @include flexbox();
        @include flex-direction(column);
				position:absolute;
				top:0
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