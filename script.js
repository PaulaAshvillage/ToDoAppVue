Vue.createApp({
  data() {
    return {
      newToDo: "",

      toDos: [
        {
          description: "Beispiel 1",
          id: 1,
          done: false,
        },
        {
          description: "Beispiel 2",
          id: 2,
          done: false,
        },
      ],
    };
  },
  methods: {
    addToDo(todoItem) {
      let ToDo = {
        description: todoItem,
        id: Object.keys(this.toDos).length + 1,
        done: false,
      };

      console.log(ToDo);
      this.newToDo = "";
      return this.toDos.push(ToDo);
    },
  },
}).mount("#app");
