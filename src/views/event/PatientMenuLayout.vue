<template>
  <div v-if="GStore.patient">
    <h1>{{ GStore.patient.title }}</h1>
    <div id="nav">
      <router-link
        class="hover-underline-animation style"
        :to="{ name: 'PatientDetails' }"
        >Details</router-link
      >
      <router-link
        class="hover-underline-animation style"
        :to="{ name: 'VaccinationDetails' }"
        >Vaccination</router-link
      >
      <router-link
        class="hover-underline-animation style"
        :to="{ name: 'DoctorComments' }"
        >Suggestion</router-link
      >
    </div>
    <hr />
    <router-view :patient="GStore.patient" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  padding: 0.1% 0.3%;
  margin-left: 2%;
  text-decoration: none;
  transition: 0.5s;
  color: #35495e;
}
.hover-underline-animation.style {
  font-size: 1.2rem;
}
.hover-underline-animation.style:hover {
  font-size: 1.9rem;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #42b883;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
hr {
  border: 0;
  height: 1.4px;

  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
</style>
