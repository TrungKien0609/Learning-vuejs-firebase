<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editting Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard
        :post="card"
        v-for="(card, index) in sampleBlogCards"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
export default {
  name: "blogs",
  components: {
    BlogCard,
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost : { ////////////////////////////////////// get set rất hay
      get(){
        return this.$store.state.editPost;
      },
      set(payLoad){
         this.$store.commit("toggleEditPost",payLoad);
      }
    }
  },
  beforeDestroy(){
    this.$store.commit("toggleEditPost", false)
  }
};
</script>
<style lang="scss" scoped>
.blog-cards {
  position: relative;
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    span {
      margin-right: 16px;
    }
    input[type="checkbox"] {
      position: relative;
      border: none;
      background-color: #fff;
      outline: none;
      width: 80px;
      -webkit-appearance: none;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]::before {
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background-color: #303030;
      transform: scale(1.1);
      transition: 0.75s ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]::before {
      background-color: #fff;
      left: 52px;
    }
  }
}
</style>