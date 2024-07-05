<template>
  <h1>Reach Me</h1>
  <div class="contact-section">
    <div class="contact-info">
      <p><i class="bi bi-envelope-at-fill icon"></i>Email: simanyesomdaka@gmail.com</p>
      <p><i class="bi bi-linkedin icon"></i>LinkedIn: <a href="https://www.linkedin.com/in/simanye-somdaka-6501712b2">Simanye Somdaka</a></p>
      <p><i class="bi bi-telephone-fill icon"></i>Phone: +27 73 603 3609</p>
      <p><i class="bi bi-geo-alt-fill icon"></i>Home Address: Weltevreden Valley North, Cape Town, Western Cape</p>
    </div>

    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <input placeholder="Your Name" type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <input placeholder="Your Email" type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <input placeholder="Subject" type="text" id="subject" v-model="form.subject" required />
      </div>
      <div class="form-group">
        <textarea placeholder="Your Message ;)" id="message" v-model="form.message" required></textarea>
      </div>
      <div class="button-group">
        <button type="button" @click="clearForm" class="btn btn-primary">Clear</button>
        <button type="submit" class="btn btn-primary">Send Message</button>
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
  font-weight: bold;
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

.btn-primary {
  background-color: white;
  color: #ff8c00;
  font-weight: bold;
}

.error-message {
  color: #ff8c00;
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

h1, p, label {
  color: white;
  font-weight: bold;
}

h1 {
  text-align: center;
}

a {
  color: white;
}

.bi {
  color: #ff8c00;
}

.icon {
  margin-right: 10px;
}
</style>
