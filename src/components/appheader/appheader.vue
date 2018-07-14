<template>
		<div class="indexheader">
			<div class="h1"><img width="90px" height="18px" src="../../assets/imges/logo-qdm.02fc8.svg" /></div> 
			<div class="sex">
				<span class="man active">男生</span>
				<span class="woman">女生</span>
			</div>
			<div class="indexicon">		
				<i class="fa fa-user-o fa-2x"></i>
				<i class="fa fa-book fa-2x"></i>			
			</div>			
		</div>
</template>

<script>
	export default {
		name:'appheader'
		
	}
</script>

<style lang="scss" scoped>
	@import '../../style/usage/core/reset';
	    .indexheader{
        @include flexbox();
        
        height:.44rem;
        width: 100%;       
        .h1{
            padding-top: .15rem;
            @include flex(); 
            height: 100%;
            width: 100%;
            @include flexbox() ;    
            img{
                @include flex();
            }    
        }
        .sex{
            
            @include flex();
            @include flexbox();
            padding-top: .10rem;
            padding-left: .09rem;
            span{
                width: .4rem;
                height: .3rem;
                line-height:.3rem;
                text-align: center;
                font-size:.14rem;
                @include flex();
                @include border(2px,#ed424b,solid,5px);
                color: #ed424b;
            }
             .active{
                    color: white;
                    background-color:#ed424b;
            }
           
            
        }
        .indexicon{
           
            padding-top: .10rem;
            font-size:.12rem;          
            @include flex();
            color:#ed424b;
            i{
                margin-left: .15rem;
            }
            i:nth-child(1){
                margin-left: 40%;
            }
        }
    }
    
</style>