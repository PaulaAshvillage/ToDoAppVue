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
      console.log("Hallo Welt");
    },
  },
}).mount("#app");
