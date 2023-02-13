<template>
  <div class="calendar">
    <FullCalendar
        :options='calendarOptions'
    >
<!--      <template v-slot:eventContent='arg'>-->
<!--        <b>{{ arg.timeText }}</b>-->
<!--        <i>{{ arg.event.title }}</i>-->
<!--      </template>-->
    </FullCalendar>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calendar",
  components: {
    FullCalendar
  },
  methods: {
    handleDateClick: function (arg) {
      let url = `/day/${arg.dateStr}`;
      this.$router.push(url);
    }
  },
  computed: {},
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        weekends: true,
        headerToolbar: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        height: 500,
        events: [

        ]
      }
    }
  },
  props: {}
}
</script>

<style scoped>

</style>