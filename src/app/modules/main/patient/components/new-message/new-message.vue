<template>
  <div class="new-message">
    <div class="alert alert-info alert-dismissible fade show m-0" role="alert">
      <div class="d-flex">
        <span class="alert-text mr-3"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
        <span class="alert-text mr-5"><strong>New Message</strong></span>
        <span class="alert-text col">Hospital Zadar - Zadar, Croatia</span>
        <span class="alert-text col"><i>Dear Jason, Please let us know additional...</i></span>
      </div>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  </div>
</template>

<script src="./new-message.js"></script>

<style lang="scss" scoped>
  @import './new-message.scss';
</style>