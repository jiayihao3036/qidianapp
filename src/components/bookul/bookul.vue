<template>
	<div class="bookulmax">
		<div class="bookulli" v-for="(bookul,index) of bookul" :key='index'>
			<div class="bookulimg">
				<img :src="bookul.bookimg"/>
			</div>
			<div class="bookulcenter">
				<span class="textname">
					{{bookul.textname}}
				</span>
				<p>
					{{bookul.textbody}}
				</p>
				<div class="textfooter">
					<div class="footerleft">
						<i class="fa fa-user-o" aria-hidden="true"></i>	
						{{bookul.bookuser}}
					</div>
						<div class="footerright">
				<span>{{bookul.bookclass}}</span><span>{{bookul.booktype}}</span>
							<span>{{bookul.bookfont}}</span>
						</div>
					</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'bookul',
		props:{
			bookul:{
				required:true
			}
		}

	}
</script>

<style lang="scss" scoped>
		@import '../../style/model/bookul';		
</style>