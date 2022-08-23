<template>
  <h1>Patient Vaccination Status</h1>
  <div class="">
    <div class="row">
      <div class="col-md-3 pagination">
        <router-link
          id="page-prev"
          :to="{ name: 'PatientLists', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
        >
          &#8249;
        </router-link>
      </div>

      <div class="col-md-8">
        <div class="patient-card">
          <PatientCards
            v-for="patient in patients"
            :key="patient.id"
            :patient="patient"
          />
        </div>
      </div>

      <div class="col-md-3 pagination">
        <router-link
          id="page-next"
          :to="{ name: 'PatientLists', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
        >
          &#8250;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PatientCards from '@/components/PatientCards.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'PatientLists',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    PatientCards
  },
  data() {
    return {
      patients: null,
      totalPatients: 0
    }
  },

  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalPatients = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    EventService.getPatients(4, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.patients = response.data
        this.totalPatients = response.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPatients / 3)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
h1 {
  margin: 7% 0% 2%;
}
.patient-card {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination {
  margin: auto;
  font-size: 50px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  transition: .3s;
}
.pagination:hover {
  transform: scale(.9);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  background-color: #42b883;
  color: white;
  font-weight: 600;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
</style>
