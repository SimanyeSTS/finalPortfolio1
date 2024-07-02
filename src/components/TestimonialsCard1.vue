<template>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <div class="card-body">
            <slot name="cardBody"></slot>
          </div>
        </div>
        <div class="col-md-8">
          <slot name="cardHeader"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsCard1',
  };
  </script>
  
  <style scoped>
  .card{
    max-width: 540px;
  }

  </style>
  