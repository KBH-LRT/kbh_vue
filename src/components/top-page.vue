<template>
  <div id="top-page">
    <HeaderTop />

    <SlideShow swipeid="swipe" ref="swiper" :autoPlay="3000" effect="slide">
      <div v-for="top in tops" :key="top.id" class="swiper-slide" slot="swiper-con">
        <img :src="top.image" style="top: 150px" />
      </div>
    </SlideShow>

    <MainContainer />

    <h1 class="test">{{msg}}</h1>
  </div>
</template>

<script>
import HeaderTop from "@/components/header-top.vue";
import SlideShow from "@/components/swiper-container.vue";
import MainContainer from "@/components/main-container.vue";

export default {
  name: "top-page",
  components: {
    HeaderTop,
    SlideShow,
    MainContainer
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      tops: [
        { id: "1", title: "picture1", image: require("../assets/temp/p1.png") },
        { id: "2", title: "picture2", image: require("../assets/temp/p2.png") },
        { id: "3", title: "picture3", image: require("../assets/temp/p3.png") }
      ]
    };
  }
};
</script>