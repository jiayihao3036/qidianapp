<template>
  <div class="booklist">
    <appheader/>	
    <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div class="bookulmax" :style="wrapperHeight">
        <div class="bookulli" v-for="bookul of bookul" :key='bookul.bid'>
          <div class="bookulimg">
            <img :src="bookul.bookimg"/>
          </div>
          <div class="bookulcenter" @click="handleClick(bookul.bid)">
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
    </mt-loadmore>
    <div class="foot">copyright © 2002-2018 m.qidian.com</div>
  </div>
</template>
<script>
import $ from "axios";
import { Loadmore } from 'mint-ui';
import appheader from "../components/appheader/appheader";

export default {
  name: "dashenfinishlist",
  data(){
          return {
              bookul:[],
              allLoaded: false,
              wrapperHeight: {
              // 由于首屏数据加载是动态的，因此需要保证在mt-loadmore组件内部要有个初始化的高度
              // 高度需要使用DOM重新计算
              'min-height': window.innerHeight + 'px'
            }
          }
  },
  components: {
    appheader,
    [Loadmore.name]: Loadmore,
  },
  methods: {
    loadBottom(){
      $.get('/majax/recommend/dashenFinishlist?_csrfToken=o1FMPMLpn2BL8U1GrKYan4VXjT0WM9Bvz85PpMJN&gender=male&pageNum=' + this.start)
        .then(result => {
          this.bookul.push(...result.data.data.records)
          this.$refs.loadmore.onBottomLoaded()
          this.start += 1
      })
    }
  },
  mounted () {
    this.start =3
    $.get('/majax/recommend/dashenFinishlist?_csrfToken=o1FMPMLpn2BL8U1GrKYan4VXjT0WM9Bvz85PpMJN&gender=male&pageNum=2')
    .then((result)=>{
        console.log(result)
				this.bookul = result.data.data.records;				
    });
  }
};
</script>
<style lang="scss" scoped>
@import '../style/model/bookul';
.booklist {
  height: 100%;
  overflow: scroll;
  padding-bottom: 0.1px;
  background-color: #f6f7f9;
}
.foot{
      font-weight: 300;
      padding-top: .25rem;
      padding-bottom: .6rem;
      text-align: center;
      color: #969ba3;
}
</style>
