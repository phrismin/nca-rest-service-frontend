import axios from "axios";
import {createStore} from "vuex";

export default createStore({
    state: {
        users: [],
        addUserPopUp: {
            visibility: false,
            newName: "",
            newSurname: "",
            newPatronymic: "",
            newAge: "",
            newEmail: ""
        },
        user: {
            name: "",
            surname: "",
            patronymic: "",
            age: "",
            email: ""
        }
    },
    // getter takes data from the state
    getters: {
        users: (state) => state.users,
        addUserPopUp: (state) => state.addUserPopUp,
        user: (state) => state.user
    },

    // change state(store)
    mutations: {
        ADD_USERS(state, userList) {
            state.users = userList;
        },
        // show form add user
        TOGGLE_ADD_USER_POPUP(state) {
            // change visibility
            state.addUserPopUp.visibility = !state.addUserPopUp.visibility;
        },
        // add data about user
        ADD_USER(state, user) {
            state.user = user;
        },
    },
    // function witch we call from components
    actions: {
        async getUsersList(store) {
            const response = await axios.get("http://localhost:9966/api/v1/users");
            store.commit("ADD_USERS", response.data)
        },

        toggleAddUserPopup(store) {
            store.commit("TOGGLE_ADD_USER_POPUP")
        },

        // payload - data of user
        async createNewUser(store, newUser) {
            await axios.post("http://localhost:9966/api/v1/users", {
                name: newUser.newName,
                surname: newUser.newSurname,
                patronymic: newUser.newPatronymic,
                age: newUser.newAge,
                email: newUser.newEmail
            });
            // update list of users
            store.dispatch("getUsersList");
            // close adding user form
            store.dispatch("toggleAddUserPopup");
        },

        async getUser(store, id) {
            const response = await axios.get(`http://localhost:9966/api/v1/users/${id}`);
            store.commit("ADD_USER", response.data);
        },

        async deleteUser(store, id) {
            await axios.delete(`http://localhost:9966/api/v1/users/${id}`);
            store.dispatch("getUsersList");
        },

        async updateUser(store, user) {
            await axios.put(`http://localhost:9966/api/v1/users/${user.id}`, {
                name: user.name,
                surname: user.surname,
                patronymic: user.patronymic,
                age: user.age,
                email: user.email
            });
        }
    },
});