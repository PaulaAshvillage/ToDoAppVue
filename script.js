Vue.createApp({
  data() {
    return {
      newToDo: "",
      filterOption: "all",
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
      if (todoItem.length > 4) {
        let ToDo = {
          description: todoItem,
          id: Object.keys(this.toDos).length + 1,
          done: false,
        };
        this.newToDo = "";
        return this.toDos.push(ToDo);
      } else {
        alert("Mindestens 5 Zeichen");
      }
    },
    deleteDone() {
      let removedDoneToDos = this.toDos.filter((toDo) => !toDo.done);
      this.toDos = removedDoneToDos;
    },
  },
}).mount("#app");
