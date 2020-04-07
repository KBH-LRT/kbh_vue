<template>
  <div class="header-search header-search--renewed">
    <div class="search-area">
      <div class="top-rich-search-form">
        <form>
          <div class="sggstInputWrap">
            <input
              type="text"
              size="40"
              class="searchInput"
              id="sitem"
              placeholder="search what you want"
              autocomplete="off"
              maxlength="2048"
            />
          </div>
          <div id="detailSearch">
            <div id="detailSearchButton" class>
              <span id="searchButtonFace">
                pull list
                <span id="searchButtonArrow">▼</span>
              </span>
            </div>
          </div>
          <div class="ritSahTermArea">
            <input type="submit" class="searchBtn" id="searchBtn" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-area"
};
</script>