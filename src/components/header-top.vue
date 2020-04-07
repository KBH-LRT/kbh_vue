<template>
  <div id="header-top">
    <div class="header-top-container">
      <div class="header-function-container">
        <h1 class="header-logo header-logo--renewed">KBH</h1>
        <HeaderRight />
        <SearchArea />
      </div>
    </div>
  </div>
</template>

<script>
import SearchArea from "@/components/header-top/search-area.vue";
import HeaderRight from "@/components/header-top/header-right.vue";
export default {
  name: "header-top",
  components: {
    SearchArea,
    HeaderRight
  }
};
</script>