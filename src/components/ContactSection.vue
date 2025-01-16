<template>
  <h1>Reach Me</h1>
  <p class="subtitle">I would love to hear from you, please do get in touch using the form below.</p>
  
  <div class="contact-section">
    <div class="contact-info">
      <p>
        <a href="mailto:simanyesomdaka@gmail.com" style="text-decoration: none; color: white;">
          <i class="bi bi-envelope-at-fill icon"></i>
          simanyesomdaka@gmail.com
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/simanye-somdaka-6501712b2" target="_blank" style="text-decoration: none; color: white;">
          <i class="bi bi-linkedin icon"></i>
          Simanye Somdaka
        </a>
      </p>
      <p>
        <a href="tel:+27730633069">
        <i class="bi bi-telephone-fill icon"></i>
        +27 73 063 3069
      </a>
      </p>
      <p>
        <i class="bi bi-geo-alt-fill icon"></i>
        <span class="spacing">Weltevreden Valley North, <br> 
          <span class="indent">Cape Town,</span> <br> 
          <span class="indent">Western Cape</span>
        </span>
      </p>
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
        <button type="submit" class="btn btn-secondary">Send Message</button>
      </div>
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

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

      Swal.fire({
        title: 'Sending...',
        html: `
          <div style="display: flex; justify-content: center; align-items: center; height: 100px;">
            <div class="spinner" style="
              width: 50px;
              height: 50px;
              border: 4px solid #f3f3f3;
              border-top: 4px solid #007bff;
              border-radius: 50%;
              animation: spin 1s linear infinite, colorChange 5s linear infinite;
            "></div>
          </div>
          <style>
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes colorChange {
              0% {
                  border-top-color: #007bff; /* Primary (Blue) */
              }
              12.5% {
                  border-top-color: #6c757d; /* Secondary (Gray) */
              }
              25% {
                  border-top-color: #28a745; /* Success (Green) */
              }
              37.5% {
                  border-top-color: #dc3545; /* Danger (Red) */
              }
              50% {
                  border-top-color: #ffc107; /* Warning (Yellow) */
              }
              62.5% {
                  border-top-color: #17a2b8; /* Info (Cyan) */
              }
              75% {
                  border-top-color: #f8f9fa; /* Light (Light Grey) */
              }
              87.5% {
                  border-top-color: #343a40; /* Dark (Black) */
              }
              100% {
                  border-top-color: #007bff; /* Loop back to Primary (Blue) */
              }
            }
            body.swal2-height-auto {
              overflow-y: hidden !important;
            }
          </style>
        `,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        heightAuto: false,
      });

      const serviceID = 'service_8u7cma9';
      const templateID = 'template_s6i5hee';
      const userID = 'FMfCQcMPcCi742ypD';

      emailjs.send(serviceID, templateID, this.form, userID)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Thank you for getting in touch! I will be sure to reply at my earliest convenience.',
          });
          this.clearForm();
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error sending your message. Please try again later.',
          });
        });
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

.spacing {
  margin-left: 2%; 
}

.indent {
  margin-left: 0%;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.5rem;
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
  background-color: white;
  color: #ff8c00;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: rgb(103, 103, 103) !important;
  color: white !important;
}

.error-message {
  color: #ff8c00;
  font-weight: bold;
  margin-top: 0.5rem;
}

h1 {
  margin-top: 1%;
  margin: 1%;
  text-align: center;
  color: white;
  font-weight: bold;
}

.subtitle {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 50px;
}

input[type="text"]:hover,
input[type="email"]:hover,
textarea:hover {
  border: solid #ff8c00;
}

.contact-info p {
  display: flex;
  align-items: flex-start;
  word-break: break-word;
  overflow-wrap: break-word;
  margin: 20px;
  color: white;
  font-weight: bold;
}

.contact-info a {
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: white;
  word-break: break-word;
  overflow-wrap: break-word;
}

.icon {
  margin-right: 10px;
  flex-shrink: 0;
}

.bi {
  color: #ff8c00;
}

.bi:hover {
  color: white;
}

@media (max-width: 600px) {
  .contact-section {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .contact-info,
  .contact-form {
    max-width: 100%;
    padding: 0;
  }

  .subtitle {
    font-size: 30px;
  }

  h1 {
    font-size: 24px;
  }

  .error-message {
    font-size: 1rem;
  }
}

@media (max-width: 300px) {
  .subtitle {
    font-size: 24px;
  }

  h1 {
    font-size: 22px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    font-size: 0.9rem;
    padding: 0.4rem;
  }

  button {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>