<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Fire Blogs</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link  v-if="!user" class="link" :to="{ name: 'Login' }"
            >Login/Register</router-link>
          <div class="profile" ref="profile" v-if="user">
            <span @click="toggleProfileMenu">{{
              this.$store.state.profileInitials
            }}</span>
            <div class="profile-menu" v-show="profileMenu">
              <div class="info">
                <p class="initials">
                  {{ this.$store.state.profileInitials }}
                </p>
                <div class="right">
                  <p>
                    {{ this.$store.state.profileFirstName }}
                    {{ this.$store.state.profileLastName }}
                  </p>
                  <p>{{ this.$store.state.profileUserName }}</p>
                  <p>{{ this.$store.state.profilEmail }}</p>
                </div>
              </div>
              <div class="options">
                <div class="option">
                  <router-link class="link" :to="{name : 'Profile'}">
                    <userIcon class="icon" />
                    <p>Profile</p>
                  </router-link>
                </div>
                <div class="option">
                  <router-link class="link" :to="{name : 'Admin'}">
                    <adminIcon class="icon" />
                    <p>Admin</p>
                  </router-link>
                </div>
                <div class="option" @click="signOut">
                  <router-link  class="link" to="#">
                    <signOutIcon class="icon" />
                    <p>Sign out</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile">
    </menuIcon>
    <transition name="mobile-nav">
      <!-- không được để các thuộc tính khác trên thẻ transition. chỉ có các thuôc tính của nó thôi
      không thể   <transition name="mobile-nav" v-show="mobileNav">  => lỗi -->
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>
<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "navigation",
  components: {
    menuIcon,
    userIcon,
    adminIcon,
    signOutIcon,
  },
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreenSize);
    this.checkScreenSize();
  },
  methods: {
    checkScreenSize() {
      // check screen size for responsive website
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false; // reset all after responsive
      return;
    },
    signOut() {
      firebase.auth().signOut();
      window.location= "/"
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleProfileMenu() {
      this.profileMenu = !this.profileMenu;
    },
  },
  computed: {
    user(){
      return this.$store.state.user ;
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  z-index: 99;
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;
    justify-content: space-between;
    .branding {
      display: flex;
      align-items: center;
      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }
    .nav-links {
      position: relative;
      ul {
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        margin-right: 32px;
        display: flex;
        .link {
          margin-right: 32px;
          &:last-child {
            margin-right: 0;
          }
        }
        .profile {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #fff;
          background-color: #303030;
          .profile-menu {
            position: absolute;
            top: 60px;
            right: 0;
            width: 250px;
            background-color: #303030;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
            .info {
              display: flex;
              align-items: center;
              padding: 15px;
              border-bottom: 1px solid #fff;
              .initials {
                position: initial;
                width: 40px;
                height: 40px;
                background-color: #fff;
                color: #303030;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
              }
              .right {
                flex: 1;
                margin-left: 24px;
                p {
                  &:nth-child(1) {
                    font-size: 14px;
                  }
                  &:nth-child(2),
                  &:nth-child(3) {
                    font-size: 12px;
                  }
                }
              }
            }
            .options {
              padding: 15px;
              .option {
                text-decoration: none;
                color: #fff;
                display: flex;
                align-items: center;
                margin-bottom: 12px;
                .link {
                  display: flex;
                  color: #fff;
                  text-transform: initial;
                  .icon {
                    width: 18px;
                    height: auto;
                  }
                  p {
                    font-size: 14px;
                    margin-left: 12px;
                  }
                }

                &:last-child {
                  margin-bottom: 0px;
                }
              }
            }
          }
        }
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #303030;
    .link {
      padding: 15px 0;
      color: #fff;
    }
  }
  // name + enver,leave,...
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }
  .mobile-nav-enter {
    transform: translateX(-250px); // = max-width
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>