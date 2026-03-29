<template>
  <div class="w-100 ml-5 mt-3">
    <div class="d-flex flex-column justify-space-between">
      <v-row>
        <v-col :cols="3"></v-col>
        <one-seat :cols="2" width="12vw" height="5vw" class="seat" :id="2" />
        <one-seat :cols="2" width="12vw" height="5vw" class="seat" :id="3" />
        <one-seat :cols="2" width="12vw" height="5vw" class="seat" :id="4" />
      </v-row>

      <v-row>
        <v-sheet height="10vh"></v-sheet>
      </v-row>
      <v-row>
         <v-col :cols="9"></v-col>
        <one-seat width="6vw" height="20vh" class="seat" :id="5" />
      </v-row>
      <v-row>
        <v-col :cols="9"></v-col>
        <one-seat width="6vw" height="20vh" class="seat mt-5" :id="6" />
      </v-row>
      

      <v-row class="d-flex align-end">
        <one-seat :cols="3" width="15vw" height="15vw" class="seat" :id="1" />
        <one-seat :cols="2" width="12vw" height="5vw" class="seat" :id="7" />
        <one-seat :cols="2" width="12vw" height="5vw" class="seat" :id="8" />
        <one-seat :cols="2" width="12vw" height="5vw" class="seat" :id="9" />
      </v-row>
    </div>
  </div>
</template>

<script setup>
import OneSeat from "@/components/OneSeat.vue";
</script>

<style scoped></style>
