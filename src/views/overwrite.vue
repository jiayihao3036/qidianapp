<template>
    <div class="overwrite">
        <appheader />
        <div class="bookscroll" style="overflow: hidden;">
			<div class="bookscrollheader">
				<h3>影视同期</h3><span>火热影视原著</span>
			</div>
		    <mybooklist :booklist = 'booklist'/>
		</div>
        <div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>经典必读</h3><span></span><span class="more" @click="handlelclick">更多></span>
			</div>	
		   <bookul :bookul='bookul2'/>
		</div>
        <div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>大神完本</h3><span></span><span class="more" @click="handlelclick">更多></span>
			</div>	
		   <bookul :bookul='bookul1'/>
		</div>
        <div class="bookscroll" style="height: 4rem;margin-top: .2rem;">
			<div class="bookscrollheader">
				<h3>畅销完本</h3><span>一周热销完本书</span><span class="more" @click="handlelclick">更多></span>
			</div>	
		   <bookul :bookul='bookul2'/>
		</div>
        <div class="foot">copyright © 2002-2018 m.qidian.com</div>
        <transition name='fade'>
            <div v-if="show"  class="gotop" @click="handlegotop" >
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
        </transition>
    </div>
</template>

<script>
import appheader from "../components/appheader/appheader";
import mybooklist from "../components/booklistscroll/listscroll";
import bookul from "../components/bookul/bookul";
//import $ from "axios";
export default {
  name: "overwrite",
  data() {
    return {
      booklist11: [],
      bookul22: [],
      show: true
    };
  },
  components: {
    appheader,
    mybooklist,
    bookul
  },
  methods: {
    handlegotop() {
      ($.fn.scrollTo = function(options) {
        var defaults = {
          toT: 0, //滚动目标位置
          durTime: 500, //过渡动画时间
          delay: 30, //定时器时间
          callback: null //回调函数
        };
        var opts = $.extend(defaults, options),
          timer = null,
          _this = this,
          curTop = _this.scrollTop(), //滚动条当前的位置
          subTop = opts.toT - curTop, //滚动条目标位置和当前位置的差值
          index = 0,
          dur = Math.round(opts.durTime / opts.delay),
          smoothScroll = function(t) {
            index++;
            var per = Math.round(subTop / dur);
            if (index >= dur) {
              _this.scrollTop(t);
              window.clearInterval(timer);
              if (opts.callback && typeof opts.callback == "function") {
                opts.callback();
              }
              return;
            } else {
              _this.scrollTop(curTop + index * per);
            }
          };
        timer = window.setInterval(function() {
          smoothScroll(opts.toT);
        }, opts.delay);
        return _this;
      }),
        $("body").scrollTo(
          {
            toT: 0
          },
          100
        );
    },
    handlelclick(){
        this.$router.push('dashenfinishlist')
    }

  },
  computed: {
    booklist(){
        let data = this.$store.state.booklist.booklist;
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
  },
  mounted() {
    $("body").on(
      "scroll",
      function() {
        if ($("body").scrollTop() >= 200) {
          this.show = true;
        } else {
          this.show = false;
        }
      }.bind(this)
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../style/usage/core/reset";
.overwrite {
  background-color: #f0f1f2;
  width: 100%;
  overflow-y: scroll;
  @include flexbox();
  @include flex-direction(column);
  position: absolute;
  top: 0;
}
.bookscroll {
  width: 100%;
  height: 2rem;
  background-color: white;
  .select {
    height: 0.3rem;
    width: 3.4rem;
    @include flexbox();
    margin: 0 auto;
    margin-bottom: 0.2rem;
    background-color: white;
    .Rankingselect1 {
      height: 100%;
      @include flex();
      @include border(1px, #ed424b, solid, 3px);
      text-align: center;
      line-height: 0.3rem;
      color: #ed424b;
    }
    .active {
      background-color: #ed424b;
      color: white;
    }
  }
  .bookscrollheader {
    margin-top: 0.1rem;
    padding-left: 0.1rem;
    @include flexbox();
    width: 100%;
    height: 0.34rem;
    position: relative;
    h3 {
      font-family: FZZCYSK;
      font-weight: bolder;
      color: #33373d;
      padding-left: 0.1rem;
      width: 0.75rem;
      height: 0.2rem;
      @include border(0 0 0 4px, #ed424b, solid);
    }
    span {
      margin-left: 0.15rem;
      color: #969ba3;
      display: block;
      @include flex();
    }
    .more {
      width: 0.5rem;
      position: absolute;
      right: 0.15rem;
    }
  }
}
.foot {
  font-weight: 300;
  padding-top: 0.25rem;
  padding-bottom: 0.6rem;
  text-align: center;
  color: #969ba3;
}
.gotop {
  position: fixed;
  bottom: 0.1rem;
  right: 0.1rem;
  background-color: #000000;
  opacity: 0.5;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
}
.readbefore {
  padding-top: 5px;
  position: fixed;
  bottom: 0.7rem;
  right: 0.1rem;
  background-color: #ed424b;
  font-size: 14px;
  line-height: 0.2rem;
  border-radius: 50%;
  color: white;
  text-align: center;
  width: 0.5rem;
  height: 0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>