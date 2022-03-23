<template>
<!-- if visibility=false, then hiding template Users -->
  <div
      v-if="pageInfo.visibility"
      class="popUp"
      @click.self="togglePopup()"
  >
    <div class="popUp__container">
      <h1>Add new user</h1>
      <div class="popUp__input-container">
        <p>Name:</p>
        <input type="text" v-model="pageInfo.newName">
      </div>
      <div class="popUp__input-container">
        <p>Surname:</p>
        <input type="text" v-model="pageInfo.newSurname">
      </div>
      <div class="popUp__input-container">
        <p>Patronymic:</p>
        <input type="text" v-model="pageInfo.newPatronymic">
      </div>
      <div class="popUp__input-container">
        <p>Age:</p>
        <input type="number" v-model="pageInfo.newAge">
      </div>
      <div class="popUp__input-container">
        <p>Email:</p>
        <input type="email" v-model="pageInfo.newEmail">
      </div>
      <button @click="createNewUser(pageInfo)" class="saveUser__button">
        Save user
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "AddUserPopUp",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      pageInfo: "addUserPopUp",
    })
  },
  methods: {
    ...mapActions({
      togglePopup: "toggleAddUserPopup",
      createNewUser: "createNewUser",
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popUp {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ccc3;
}

.popUp__container {
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

.popUp__input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 35px;
}

.popUp__input-container p {
  width: 25%;
}

.popUp__input-container input {
  width: 70%;
  height: 30px;
  font-size: 20px;
  outline: none;
  border: 2px solid #aaa;
  border-radius: 5px;
  text-indent: 5px;
}

.saveUser__button {
  padding: 5px;
  margin: 10px 0;
  background: #eee;
  border: none;
  border-radius: 5px;
  transition: 0.3s;

  font-size: 20px;
}

.saveUser__button:hover {
  background: #ddd;
  cursor: pointer;
}
</style>
