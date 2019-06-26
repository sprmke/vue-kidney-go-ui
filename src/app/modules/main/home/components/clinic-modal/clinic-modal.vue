<template>
  <b-modal
    id="clinic-modal"
    title="CLINIC NAME"
    centered
    hide-footer>
    <app-datepicker :inline="true" :bootstrap-styling="true" class="adjust-width"></app-datepicker>
    <b-button
      type="submit"
      variant="primary"
      class="mt-2"
      block>SEND REQUEST</b-button>
  </b-modal>
</template>

<script src="./clinic-modal.js"></script>

<style lang="scss" scoped>
  @import './clinic-modal.scss';
</style>

