<template>
  <b-modal
    id="signup-modal"
    title="SIGN UP"
    centered
    hide-footer>
    <b-form>
      <b-form-group
          id="input-group-1"
          label="Email"
          label-for="input-1"
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

      <b-form-group id="input-group-2" label="Confirm Password" label-for="input-2">
          <b-form-input
          id="input-2"
          type="password"
          placeholder="Confirm password"
          ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" block>SIGN UP</b-button>
    </b-form>
  </b-modal>
</template>

<script src="./signup-modal.js"></script>

<style lang="scss" scoped>
  @import './signup-modal.scss';
</style>

