<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              <span>Title</span>
            </th>
            <th class="text-left">
              <span>start_at</span>
            </th>
            <th class="text-left">
              <span>created_at</span>
            </th>
            <th class="text-left">
              <span>Id</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in meetings"
            :key="item.meeting_id"
          >
            <td>{{ item.title }}</td>
            <td>{{ item.start_at }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.meeting_id }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { client } from '@/utils/client';

const r = await client.get('meetings').json();

const meetings = (r as any).data;
</script>
