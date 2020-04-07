<template>
  <div id="main-container">
    <DetailContainer />
    <SideNavi />
  </div>
</template>

<script>
import DetailContainer from "@/components/main-container/detail-container.vue";
import SideNavi from "@/components/main-container/side-navi.vue";

export default {
  name: "main-container",
  components: {
    DetailContainer,
    SideNavi
  }
};
</script>