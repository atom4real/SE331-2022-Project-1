<template>
  <div class="container">
    <div class="card-details">
      <h1>Patient details</h1>
      <p>Name: {{ patient.name }} {{ patient.surname }}</p>
      <p>Age: {{ patient.age }} years</p>
      <p>Birthday: {{ patient.birthday }}</p>
      <p>Address: {{ patient.homeTown }}</p>
      <p>Email: {{ patient.email }}</p>
      <p>Phone: {{ patient.phone }}</p>
      <p>Height: {{ patient.height }} Centimeters</p>
      <p>Weight: {{ patient.weight }} Kilograms</p>
      <p>Blood Type: {{ patient.bloodType }}</p>
    </div>
  </div>
      <button class="btn btnBack" @click="toPatientlists">
      Back to Patient Lists
    </button>
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
.card-details {
  padding: 2% 10%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 7px 2px;
  border-radius: 12%;
  transition: 0.5s;
  border: 2px solid #42b883;
}
.card-details:hover {
  background-color: #42b883;
  border: 2px solid white;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.btn {
  background-color: #42b883; /* Green */
  border: none;
  padding: 0.4% 5%;
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
