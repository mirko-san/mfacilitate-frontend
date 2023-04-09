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
              <span>Description</span>
            </th>
            <th class="text-left">
              <span>created_at</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in themes"
            :key="item.theme_id"
          >
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { client } from '@/utils/client';

const r = await client.get('themes').json();

const themes = (r as any).data;
</script>
