<template>
  <v-card>
    <v-toolbar flat dense color="transparent">
      <v-toolbar-title>
        <h4>Project</h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table :headers="headers" :items="projects" hide-default-footer class="elevation-0">
          <template v-slot:item.avatar="{ item }">
            <v-avatar size="36px">
              <img :src="item.avatar" :alt="item.username" />
            </v-avatar>
          </template>
          <template v-slot:item.name="{ item }">
            <td>{{ item.name }}</td>
          </template>
          <template v-slot:item.deadline="{ item }">
            <td class="text-xs-left">{{ item.deadline }}</td>
          </template>
          <template v-slot:item.deadline="{ item }">
            <td class="text-xs-left">{{ item.deadline }}</td>
          </template>
          <template v-slot:item.progress="{ item }">
            <v-progress-linear :value="item.progress" height="5" :color="item.color"></v-progress-linear>
          </template>
          <template v-slot:item.action>
            <v-btn text icon color="grey">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn text icon color="grey">
              <v-icon>delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import { Projects } from '@/api/project'
export default {
  data() {
    return {
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'avatar'
        },
        {
          text: 'Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Progress', value: 'progress' },
        { text: 'Action', value: 'action', align: 'right' }
      ]
    }
  },
  computed: {
    projects() {
      return Projects
    }
  }
}
</script>
