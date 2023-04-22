<template>
  <v-form @submit.prevent>
    <v-card class="pt-2">
      <v-card-text>
        <v-text-field label="Title" v-model="formData.title"></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn @click="close" class="mr-1">
          <span>Close Dialog</span>
        </v-btn>
        <v-btn color="primary" variant="tonal" @click="submit">
          <span>Submit</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const emit = defineEmits(['submit', 'close']);

const formData = ref({
  meeting_id: uuidv4(),
  title: '',
  // TODO: カレンダーUIみたいなもので入力できるようにする
  start_at: '2023-03-20T15:00:00+00:00',
});

const submit = () => {
  emit('submit', formData.value);
};

const close = () => {
  emit('close');
};
</script>
