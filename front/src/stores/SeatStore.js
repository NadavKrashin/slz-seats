import { defineStore } from "pinia";
import stc from "string-to-color";
import { computed, ref } from "vue";

export const useSeatStore = defineStore("seat", () => {
  const seats = ref([
    {
      id: 1,
      seatName: "קרשין",
      clickedName: "",
      color: "white",
    },
    {
      id: 2,
      seatName: "שבור",
      clickedName: "",
      color: "white",
    },
    {
      id: 3,
      seatName: "שירה",
      clickedName: "",
      color: "white",
    },
    {
      id: 4,
      seatName: "לנקרי",
      clickedName: "",
      color: "white",
    },
    {
      id: 5,
      seatName: "קומפי",
      clickedName: "",
      color: "white",
    },
    {
      id: 6,
      seatName: "פלג",
      clickedName: "",
      color: "white",
    },
    {
      id: 7,
      seatName: "זקרי",
      clickedName: "",
      color: "white",
    },
    {
      id: 8,
      seatName: "יניב",
      clickedName: "",
      color: "white",
    },
    {
      id: 9,
      seatName: "הילה",
      clickedName: "",
      color: "white",
    }
  ]);

  const rightGuesses = computed(
    () =>
      seats.value.filter(
        ({ seatName, clickedName }) => seatName === clickedName
      ).length
  );

  const isGameOver = ref(false);

  const updateSeat = (seatId, username) => {
    const updatedSeat = seats.value.find(({ id }) => id === seatId);
    const prevChoice = seats.value.find(
      ({ clickedName }) => clickedName === username
    );

    if (prevChoice || prevChoice?.id === updatedSeat?.id) {
      prevChoice.clickedName = "";
      prevChoice.color = "white";
    }

    if (prevChoice?.id !== updatedSeat.id) {
      updatedSeat.clickedName = username;
      updatedSeat.color = stc(username);
    }

    isGameOver.value = rightGuesses.value === seats.value.length;
  };

  const isGameDisabled = ref(false);
  const makeGameDisabled = () => (isGameDisabled.value = true);
  const resumeGame = () => (isGameDisabled.value = false);

  const resetClickedSeats = () =>
    (seats.value = seats.value.map((seat) => ({
      ...seat,
      clickedName: "",
      color: "white",
    })));

  return {
    seats,
    updateSeat,
    rightGuesses,
    isGameOver,
    resetClickedSeats,
    isGameDisabled,
    makeGameDisabled,
    resumeGame,
  };
});
