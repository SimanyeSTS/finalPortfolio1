<template>
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpinnerComp"
  };
  </script>
  
  <style scoped>
  .d-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spinner-border {
    width: 3rem;
    height: 3rem;
    border: 0.3em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border .75s linear infinite;
  }
  @keyframes spinner-border {
    to { transform: rotate(360deg); }
  }
  </style>
  