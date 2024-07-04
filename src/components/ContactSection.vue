<template>
    <div class="contact-section">
      <div class="contact-info">
        <h1>Reach Me</h1>
        <p>Email: simanyesomdaka@gmail.com</p>
        <p>LinkedIn: <a href="www.linkedin.com/in/simanye-somdaka-6501712b2">www.linkedin.com/in/simanye-somdaka-6501712b2</a></p>
        <p>Phone: +27 73 603 3609</p>
        <p>Home Address: Weltevreden Valley North, Cape Town, Western Cape</p>
      </div>


      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Your Name</label>
          <input type="text" v-model="form.name" />
        </div>
        <div>
          <label for="email">Your Email</label>
          <input type="email" v-model="form.email" />
        </div>
        <div>
          <label for="subject">Subject</label>
          <input type="text" v-model="form.subject" />
        </div>
        <div>
          <label for="message">Your Message</label>
          <textarea v-model="form.message"></textarea>
        </div>
        <button type="submit">Send Message</button>
        <button type="button" @click="clearForm">Clear</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        error: ''
      };
    },
    methods: {
      handleSubmit() {
        this.error = '';
        if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
          this.error = "Please complete all fields before submitting.";
          return;
        }

        alert("Thank You For Getting In Touch! I Will Be Sure To Reply At My Earliest Convenience");
      },
      clearForm() {
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.error = '';
      }
    }
  };
  </script>
  <style scoped>
  .contact-section {
    display: flex;
  }
  .contact-info {
    flex: 1;
    padding: 0 20px;
  }
  
  form {
    flex: 1;
    padding: 0 20px;
  }
  form > div {
    margin-bottom: 1rem;
  }
  input, textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }
  button {
    width: max-content;
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  p {
    color: white;
    font-weight: bold;
  }
  </style>