<template>
  <b-modal
    id="login-modal"
    title="LOG IN"
    centered
    hide-footer>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
        id="input-2"
        type="password"
        placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" block>LOG IN</b-button>
    </b-form>
  </b-modal>
</template>

<script src="./login-modal.js"></script>

<style lang="scss" scoped>
  @import'./login-modal.scss';
</style>

