<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "swiper-container",
  props: {
    swipeid: {
      type: String,
      default: ""
    },
    effect: {
      type: String,
      default: "slide"
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    pagination: {
      type: Object,
      default: function() {
        return {
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          clickable: true
        };
      }
    },
    autoplay: {
      type: Object,
      default: function() {
        return {
          delay: 3000,
          disableOnInteraction: false
        };
      }
    }
  },

  methods: {},

  mounted: function() {
    this.swipeDom = new Swiper("." + this.swipeid, {
      //循环
      loop: this.loop,
      //分页器
      pagination: this.pagination,
      //方向
      direction: this.direction,
      //特效
      effect: this.effect,
      //用户操作swiper之后，不禁止autoplay
      disableOnInteraction: true,
      //修改swiper自己或子元素时，自动初始化swiper
      observer: true,
      //修改swiper的父元素时，自动初始化swiper
      observeParents: true,
      autoplay: this.autoplay
    });
  }
};
</script>