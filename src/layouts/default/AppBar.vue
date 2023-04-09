<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <span class="mr-2">
        <v-icon icon="mdi-link" />
        <router-link to="/">home</router-link>
      </span>
      <span class="mr-2">
        <v-icon icon="mdi-link" />
        <router-link to="/meetings">meetings</router-link>
      </span>
      <span class="mr-2">
        <v-icon icon="mdi-link" />
        <router-link to="/themes">themes</router-link>
      </span>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
