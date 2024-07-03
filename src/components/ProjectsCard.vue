<template>
  <div class="card">
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
    <div class="card-footer">
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectsCard"
};
</script>
<style scoped>
.card {
  width: 320px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}
.card-header img {
  width: 100%;
  height: auto;
}
.card-body {
  padding: 15px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
}
</style>