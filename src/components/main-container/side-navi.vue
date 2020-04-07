<template>
  <div id="side-navi">
    <section id="sc_lidAdd_gmenu" class="ri-side-section genre-section">
      <div class="genre-section__heading-wrap">
        <h2>Topic</h2>
      </div>
      <div id="topic-container" v-for="topic in topics" :key="topic.id">
        <div class="genre-section__heading-wrap">
          <h2>{{topic.name}}</h2>
        </div>
        <ul class="categoryMenu__l1Container">
          <li
            class="categoryMenu__l1List"
            v-for="topicDetail in topic.topicDetails"
            :key="topicDetail.id"
          >
            <div class="categoryMenu__l1NameContainer">
              <h3 class="categoryMenu__l1Name">{{topicDetail.name}}</h3>
            </div>
            <div class="detailBox"></div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "side-navi",
  data() {
    return {
      topics: [
        {
          id: "TOPIC1",
          name: "When",
          topicDetails: [
            { id: "202001", name: "Jan. 2020" },
            { id: "202002", name: "Feb. 2020" },
            { id: "202003", name: "Mar. 2020" },
            { id: "202004", name: "Apr. 2020" },
            { id: "202005", name: "Jun. 2020" }
          ]
        },
        {
          id: "TOPIC2",
          name: "Who",
          topicDetails: [
            { id: "1", name: "KangDan" },
            { id: "2", name: "LiRuitong" },
            { id: "3", name: "Together" }
          ]
        },
        {
          id: "TOPIC3",
          name: "Where",
          topicDetails: [
            { id: "1", name: "LiuZhou. GuangXi" },
            { id: "2", name: "DaLian. LiaoNing" },
            { id: "3", name: "ShenYang. LiaoNing" },
            { id: "4", name: "AnYang. HeNan" },
            { id: "5", name: "GuangZhou. China" }
          ]
        }
      ]
    };
  }
};
</script>