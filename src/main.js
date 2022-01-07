import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
// import Vue2Editor from "vue2-editor";

// Vue.use(Vue2Editor);

Vue.config.productionTip = false;
let app
firebase.auth().onAuthStateChanged(() => { // bat dong bo
  if (!app) { // neu chua khoi tao bien app. 
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})

