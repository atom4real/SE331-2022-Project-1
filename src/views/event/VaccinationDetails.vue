<template>
  <h1>Vaccination details</h1>
  <div v-for="vaccine in patient.vaccines" :key="vaccine">
    <div class="container">
      <div class="row">
        <div class="col-md-6- vaccine-card">
          <h4>The First Dose</h4>
          <p>Name: {{ vaccine.firstDose }}</p>
          <p>Date: {{ vaccine.firstDate }}</p>
        </div>
        <div class="col-md-6 vaccine-card">
          <h4>The Second Dose</h4>
          <p>Name: {{ vaccine.secondDose }}</p>
          <p>Date: {{ vaccine.secondDate }}</p>
        </div>
      </div>
      <div class="vaccine-detail-card">
        <p>Serial No.: {{ vaccine.serialNo }}</p>
        <p>Lot No.: {{ vaccine.lotNo }}</p>
        <p>Hospital: {{ vaccine.hospital }}</p>
      </div>
      <button class="btn btnBack" @click="toPatientlists">
        Back to Patient Lists
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['patient'],
  inject: ['GStore'],
  methods: {
    toPatientlists() {
      this.GStore.flashMessage =
        'You are back to the Patient Vaccination Status.'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)

      this.$router.push({
        name: 'PatientLists',
        params: { id: this.patient.id }
      })
    }
  }
}
</script>
<style scoped>
.vaccine-card {
  max-width: 330px;
  margin: 2% 3% 5%;
  padding: 2% 2%;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12%;
  transition: 0.5s;
  border: 2px solid #42b883;
  justify-content: center;
}
.vaccine-card:hover {
  background-color: #42b883;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.vaccine-detail-card {
  margin: 2% 3% 5%;
  padding: 8% 2%;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 18%;
  transition: 0.5s;
  border: 2px solid #42b883;
  justify-content: center;
}
.vaccine-detail-card:hover {
  background-color: #42b883;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.container {
  margin: auto;
  width: 50%;
}
.row {
  justify-content: center;
}
.btn {
  background-color: #42b883; /* Green */
  border: none;
  padding: 0.8% 10%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 4px 2px;
  cursor: pointer;
  transition: 0.5s;
}
.btnBack {
  background-color: 42b883;
  color: black;
  border: 2px solid #42b883;
  border-radius: 12px;
}
.btnBack:hover {
  transform: scale(1.2);
  background-color: #35495e;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
