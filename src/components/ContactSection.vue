<template>
    <div class="contact-section">
      <div class="contact-info">
        <h1>Reach Me</h1>
        <p>Email: simanyesomdaka@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/simanye-somdaka-6501712b2">Simanye Somdaka</a></p>
        <p>Phone: +27 73 603 3609</p>
        <p>Home Address: Weltevreden Valley North, Cape Town, Western Cape</p>
      </div>
  
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="form.subject" required />
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <div class="button-group">
          <button type="submit">Send Message</button>
          <button type="button" @click="clearForm">Clear</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
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
  
        alert("Thank you for getting in touch! I will be sure to reply at my earliest convenience.");
        this.clearForm();
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
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  
  .contact-info {
    flex: 1;
    padding: 0 20px;
    max-width: 400px;
  }
  
  .contact-form {
    flex: 1;
    padding: 0 20px;
    max-width: 600px;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical;
  }
  
  .button-group {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .contact-section {
      flex-direction: column;
      align-items: center;
    }
  
    .contact-info,
    .contact-form {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }
  </style>
  