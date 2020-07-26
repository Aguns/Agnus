<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-subheader>Filtros</v-subheader>
      </v-col>
      <v-col>
        <v-select label="Room Type" multiple v-model="roomType" :items="RoomsType"></v-select>
      </v-col>
      <v-col>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisar" single-line></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <div class="col-md-4 col-lg4" v-for="item in filteredAndSorted" :key="item.id">
        <v-card class="card" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline">{{item.Room.name}}</div>
              <v-list-item-title class="headline mb-1">{{item.Room.type}}</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip>
                  Adult's
                  <v-avatar>{{item.adult}}</v-avatar>
                </v-chip>

                <v-chip>
                  Kid's
                  <v-avatar>{{item.kids}}</v-avatar>
                </v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-actions>
            <CountdownTimer :date="item.time"></CountdownTimer>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1">Check-Out</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { Booking } from "@/api/hospitality/booking";
import { RoomsType } from "@/api/hospitality/rooms";

export default {
  name: "",
  layout: "dashboard",
  data() {
    return {
      search: "",
      roomType: "",
      BookingDetails: [],
      RoomsType: [],
    };
  },
  methods: {},
  created() {
    this.BookingDetails = Booking;
    this.RoomsType = RoomsType;
  },
  computed: {
    filteredAndSorted: function () {
      return Booking.filter((book) => {
        if (this.roomType) {
          if (this.roomType.indexOf(book.Room.type) === -1) {
            return false;
          }
        }

        let fil =
          this.search.length === 0 ||
          book.Room.type.toLowerCase().includes(this.search.toLowerCase());
        return fil;
      });
    },
  },
};
</script>

