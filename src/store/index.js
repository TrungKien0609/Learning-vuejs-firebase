import Vue from 'vue'
import Vuex from 'vuex'
import firebase123 from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-1", blogDate: "January 1 , 2022" },
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-2", blogDate: "January 1 , 2022" },
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-3", blogDate: "January 1 , 2022" },
      { blogTitle: "Blog Card 1", blogCoverPhoto: "stock-4", blogDate: "January 1 , 2022" },
    ],
    editPost: null,

    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null
  },
  mutations: {
    toggleEditPost(state, payLoad) {
      state.editPost = payLoad;
    },
    updateUser(state, payLoad) {
      state.user = payLoad;
    },
    setProfileInfro(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().userName;
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join("")
        + state.profileLastName.match(/(\b\S)?/g).join("");
    },

    changeFirstName(state, payload){
      state.profileFirstName = payload
    },
    changeLastName(state, payload){
      state.profileLastName = payload
    },
    changeUserName(state, payload){
      state.profileUserName = payload
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase123.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      console.log(dbResults.data())
      commit("setProfileInfro", dbResults);
      commit("setProfileInitials")
    },
    async updateUserSettings({commit,state}){
      const dataBase = await db.collection("users").doc(state.profileId)
      console.log(dataBase)
      await dataBase.update({
        firstName : state.profileFirstName,
        lastName : state.profileLastName,
        userName : state.profileUserName
      });
      commit("setProfileInitials")
    }
  },
  modules: {
  }
})
