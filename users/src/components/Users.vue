<template>
  <div class="users__container">
    <h1>Users</h1>
    <button @click="togglePopup()" class="addUser__button">
      Add user
    </button>
    <div class="usersList__item_header">
      <p><b>name</b></p>
      <p><b>email</b></p>
    </div>
    <div v-for="user in users" :key="user.id" class="usersList">
      <div class="usersList__item">
        <p>{{ user.name }}</p>|
        <p>{{ user.email }}</p>|
        <br>
        <router-link :to="`/users/${user.id}`" class="usersList__view">
          View
        </router-link>
      </div>
    </div>
  </div>
  <AddUserPopUp></AddUserPopUp>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import AddUserPopUp from "./AddUserPopUp"

export default {
  name: "UsersList",
  components: {
    AddUserPopUp,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      users: "users",
      error: "error",
    })
  },
  // watch sees that something changed
  watch: {
    error() {
        this.throwError();
    }
  },
  methods: {
    ...mapActions({
      getUsers: "getUsersList",
      togglePopup: "toggleAddUserPopup",
      toggleError: "showError",
    }),
    throwError() {
      if (this.error) {
        alert('Error: not enough user data');
        // change try=>false state.error
        this.toggleError();
        // close form
        this.togglePopup();
      }
    }
  },
  beforeMount() {
    this.getUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users__container {
  width: 80%;
  margin: 20px auto;
}

h1 {
  margin: 10px auto;
}

.addUser__button {
  width: 20%;
  padding: 5px;
  margin: 10px 0;
  background: #eee;
  border: none;
  border-radius: 5px;
  transition: 0.3s;

  font-size: 20px;
}

.usersList__item {
  width: 100%;
  height: 35px;
  margin: 10px 0;
  padding: 7px;
  background: #eee;
  border-radius: 5px;
  transition: 0.3s;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.addUser__button:hover,
.usersList__item:hover {
  background: #ddd;
  cursor: pointer;
}

.usersList__item p {
  width: 20%;
}

.usersList__item_header {
  width: 100%;
  height: 35px;
  margin: 10px 0;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #eee;
  border-radius: 5px;
}

.usersList__item_header p {
  width: 40%;
  text-align: center;
}

.usersList__view {
  text-decoration: none;
  color: #000;
}

.usersList__view:hover {
  text-decoration: underline;
  color: #005239;
  font-weight: bolder;
}
</style>
