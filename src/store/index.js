import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-1", blogDate: "January 1 , 2022" },
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-2", blogDate: "January 1 , 2022" },
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-3", blogDate: "January 1 , 2022" },
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-4", blogDate: "January 1 , 2022" },
    ],
    editPost : null,

  },
  mutations: {
    toggleEditPost(state,payLoad){
        state.editPost = payLoad;
    }
  },
  actions: {
  },
  modules: {
  }
})
