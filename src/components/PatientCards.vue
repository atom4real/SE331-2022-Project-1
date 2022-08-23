<template>
  <router-link
    class="patient-link"
    :to="{ name: 'PatientDetails', params: { id: patient.id } }"
  >
    <div class="patient-card">
      <h4>{{ patient.name }} {{ patient.surname }}</h4>
      <span>{{ patient.vaccinateStatus }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PatientCards',
  props: {
    patient: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.patient-card {
  padding: 35px;
  min-width: 100px;
  cursor: pointer;
  border-radius: 14%;
  border: 2px solid #42b883;
  transition: 0.5s;
}

.patient-card:hover {
  transform: scale(1.25);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  background-color: #42b883;
  color: white;
  font-weight: 600;
    border: 2px solid #35495e;
}

.patient-link {
  margin: 2.3%;
  color: #2c3e50;
  text-decoration: none;
}
</style>
