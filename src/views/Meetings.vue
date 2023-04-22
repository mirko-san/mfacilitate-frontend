<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          <span>Create meeting</span>
        </v-btn>
      </template>

      <MeetingForm @close="closeDialog" @submit="(data) => createMetting(data)"/>
    </v-dialog>

    <Suspense>
      <MeetingsTable />
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { client } from '@/utils/client';

import MeetingForm from '@/components/MeetingForm.vue';
import MeetingsTable from '@/components/MeetingsTable.vue';

const dialog = ref(false);

const createMetting = async (data: any) => {
  const r = await client.post('meetings', {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).json();
  dialog.value = false;
};

const closeDialog = () => {
  dialog.value = false;
};
</script>
