<template>
  <div class="imgBG">
    <div class="head-intro">COVID-19 Vaccination</div>
    <div class="head-desc">Midterm Project</div>
    <div class="head-btn">
      <router-link class="button button1" :to="{ name: 'PatientLists' }"
        >FOR MORE</router-link
      >
    </div>
  </div>
</template>
<style scoped>
.container {
  height: 100%;
  background-color: aqua;
}
.imgBG {
  padding: 21%;
  margin: 0%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../assets/GettyImages-1281635877-1600x660-1-1200x495.jpg');
}
.imgBF::before {
  position: absolute;
  background-size: cover;
   content: "";
  filter: brightness(0.3);
}
.head-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
}
.button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: transparent;
  color: white;
  border: 2px solid #42b883;
}

.button1:hover {
  background-color: #42b883;
  color: white;
}
.container-fluid {
  padding: 7% 15%;
}
.head-intro {
  font-size: 5vw;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.head-desc {
  line-height: 35px;
  color: #fff;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 2rem;
}
</style>
