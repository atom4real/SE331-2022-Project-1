<template>
  <div class="container">
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name" />

      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
      <input class="button" type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
import GStore from '@/store'
export default {
  name: 'ReviewForm',
  inject: ['GStore'],
  // props: ['patient'],
  data() {
    return {
      IDpatient: '',
      patientName: '',
      name: '',
      review: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '') {
        alert('Review is incomplete. Please fill out every field.')
        return
      }
      let commets = {
        IDpatient: GStore.patient.id,
        patientName: GStore.patient.name,
        name: this.name,
        review: this.review
      }
      this.$emit('review-submitted', commets)

      this.GStore.flashMessage =
        'Dr.' + this.name + ' have been submitted the reviews'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)

      this.IDpatient = ''
      this.patientName = ''
      this.name = ''
      this.review = ''
    }
  }
}
</script>
<style scoped>
.review-form {
  display: flex;
  flex-direction: column;
  max-width: 425px;
  padding: 20px;
  margin: auto;
  border-radius: 12%;
  border: 2px solid #42b883;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
.button {
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
  color: black;
  border: 2px solid #42b883;
  border-radius: 12px;
}
.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  transform: scale(1.2);
}

.review-form .button {
  display: block;
  margin: 30px auto;
}
.container {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
