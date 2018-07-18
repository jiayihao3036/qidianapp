<template>
	<div class="bookulmax">
		<div class="bookulli" v-for="(bookul,index) of bookul" :key='index'>
			<div class="bookulimg">
				<img :src="bookul.bookimg"/>
			</div>
			<div class="bookulcenter">
				<span class="textname">
					{{bookul.bName}}
				</span>
				<p>
					{{bookul.desc}}
				</p>
				<div class="textfooter">
					<div class="footerleft">
						<i class="fa fa-user-o" aria-hidden="true"></i>	
						{{bookul.bAuth}}
					</div>
						<div class="footerright">
				<span>{{bookul.cat}}</span><span>{{bookul.state}}</span>
							<span>{{bookul.cnt}}</span>
						</div>
					</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'gassul',
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