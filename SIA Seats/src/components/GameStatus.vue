<template>
  <div v-if="!pauseTimer" class="status text-h1">{{ timerCount }}</div>
  <div v-else-if="pauseTimer && !isGameOver" class="text-h1">
    <span style="color: green">{{ rightGuesses }}</span> /
    <span style="color: red">{{ seats.length }}</span>
  </div>
  <div v-else class="status text-h1">אלה הסיטססס ואוווו</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { watch, ref } from "vue";
import { useSeatStore } from "../stores/SeatStore";
const START_TIME = 20;
const timerCount = ref(START_TIME);

const seatStore = useSeatStore();
const { seats, isGameOver, rightGuesses } = storeToRefs(seatStore);
const { resetClickedSeats, makeGameDisabled, resumeGame } = seatStore;
let pauseTimer = ref(false);

watch(
  timerCount,
  () => {
    if (timerCount.value > 0) {
      if (!pauseTimer.value) {
        setTimeout(() => {
          timerCount.value--;
        }, 1000);
      }
    } else {
      makeGameDisabled();
      pauseTimer.value = true;
      setTimeout(() => {
        if (!isGameOver.value) {
          resetClickedSeats();
          timerCount.value = START_TIME;
          pauseTimer.value = false;
          resumeGame();
        }
      }, 7000);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.status {
  color: white;
  font-family: "Karantina", cursive;
  font-size: 3rem;
  text-shadow: 3px 3px #ff0000;
}
</style>
