<template>
	<div class="bookulmax">
		<div class="bookulli">
			<div class="bookulimg">
				<img src="https://qidian.qpic.cn/qdbimg/349573/1012029980/150"/>
			</div>
			<div class="bookulcenter">
				<span class="textname">
					{{textname}}
				</span>
				<p>
					{{textbody}}
				</p>
				<div class="textfooter">
					<div class="footerleft">
						<i class="fa fa-user-o" aria-hidden="true"></i>	
						{{bookuser}}
					</div>
						<div class="footerright">
							<span>{{bookclass}}</span><span>{{booktype}}</span>
							<span>{{bookfont}}</span>
						</div>
					</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'bookul',
		data(){
			return {
				textname:"恶魔就在身边",
				textbody:'sjckaclaksjca',
				bookuser:'作者',
				bookclass:'都市',
				booktype:'连载',
				bookfont:'73.56万字'
			}
		}
	}
</script>

<style lang="scss" scoped>
		@import '../../style/model/bookul';
		
		
</style>