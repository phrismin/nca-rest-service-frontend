<template>
  <div class="user__container">
    <h1>User page</h1>
    <div class="user__input-container">
      <p>Name:</p>
      <input type="text" v-model="currentUser.name">
    </div>
    <div class="user__input-container">
      <p>Surname:</p>
      <input type="text" v-model="currentUser.surname">
    </div>
    <div class="user__input-container">
      <p>Patronymic:</p>
      <input type="text" v-model="currentUser.patronymic">
    </div>
    <div class="user__input-container">
      <p>Age:</p>
      <input type="number" v-model="currentUser.age">
    </div>
    <div class="user__input-container">
      <p>Email:</p>
      <input type="email" v-model="currentUser.email">
    </div>
    <div class="user-button__container">
      <router-link to="/" @click="updateUser(currentUser)" class="user__button">
        Save user
      </router-link>
      <router-link to="/" @click="deleteUser($route.params.userId)" class="user__button">
        Delete user
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "UserPage",
  data() {
    return {};
  },
  computed: {
    // call from index.js getters user
    ...mapGetters({
      currentUser: "user",
    })
  },
  methods: {
    // call from index.js actions user
    ...mapActions({
      getUser: "getUser",
      deleteUser: "deleteUser",
      updateUser: "updateUser",
    })
  },
  // running before loading site
  beforeMount() {
    this.getUser(this.$route.params.userId);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user__container {
  width: 50%;
  height: 500px;
  max-width: 500px;
  margin: 100px auto;
  padding: 20px;
  background: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.user__input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 35px;
}

.user__input-container p {
  width: 25%;
}

.user__input-container input {
  width: 70%;
  height: 30px;
  font-size: 20px;
  outline: none;
  border: 2px solid #aaa;
  border-radius: 5px;
  text-indent: 5px;
}

.user-button__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}

.user__button {
  padding: 5px;
  margin: 10px 0;
  background: #eee;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  transition: 0.3s;

  font-size: 20px;
}

.user__button:hover {
  background: #ddd;
  cursor: pointer;
}
</style>
