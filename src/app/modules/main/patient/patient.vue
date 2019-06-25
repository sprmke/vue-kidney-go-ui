<template>
  <div id="patient-page">
    <div class="mb-4">
      <div class="container mt-4">
        <div class="card mb-1 profile-container d-flex">
          <div class="card-header p-0 border-0">
            <img src="https://via.placeholder.com/300" alt="test image">
          </div>
          <div class="card-body overflow-visible">
            <div class="row">
              <div class="col-12 text-left">
                <h3>JASON WU</h3>
              </div>
              <div class="col-12 text-left d-flex justify-content-between">
                <p>+386332165312 email@gmail.com</p>
                <b-button size="sm">CHANGE</b-button>
              </div>
              <div class="col-12 text-left d-flex justify-content-between">
                <div>
                    <p class="mb-0">Clinic B-Braun Paris, France</p>
                    <p class="mb-0">http://vaticanconference2018.com</p>
                </div>
                <b-button size="sm">CHANGE</b-button>
              </div>
              <div class="col-12 text-left d-flex justify-content-between">
                <div class="d-flex information-container">
                  <div class="payment-information">
                    <p class="mb-0">Payment Information</p>
                    <p class="mb-0">**** **** ***** ***** 221</p>
                  </div>
                  <div>
                    <p class="mb-0">Health Insurance Information</p>
                    <p class="mb-0">European health insurance card</p>
                  </div>
                </div>
                <b-button size="sm">CHANGE</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="card communication-container">
          <div class="card-body d-flex justify-content-between bg-white">
              <div>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <span class="text-danger">NEW MESSAGE</span>
              </div>
              <p>Hospital Zadar - Zadar, Crotia</p>
              <p class="text-muted">"Dear Jason, Please let us know additional..."</p>
          </div>
        </div>
      </div>

      <div class="container mt-4 text-left">
        <div class="card">
          <div class="card-header">
              REQUESTS
          </div>
          <div class="card-body p-0">
            <b-table striped hover :items="requestItems" :fields="requestFields" thead-class="hidden_header" class="request-table">
              <span slot="message" slot-scope="data" v-html="data.value"></span>
              <div slot="progressBar" slot-scope="data">
                <b-progress
                  :value="getProgressBarValue(data.value).value"
                  :max="getProgressBarValue(data.value).max"
                  :variant="getProgressBarValue(data.value).variant"
                  show-progress></b-progress>
              </div>
              <span slot="status" slot-scope="data" :class="{'text-success': data.value === 'Success', 'text-danger': data.value === 'Failed', 'text-warning': data.value === 'Pending'}">{{ data.value }}</span>
            </b-table>
          </div>
        </div>
      </div>

      <div class="container mt-4 text-left">
        <div class="card">
          <div class="card-header">
            HISTORY
          </div>
          <div class="card-body p-0">
            <b-table striped hover :items="historyItems" thead-class="hidden_header" class="history-table">
              <span class="text-right d-block rating-container" slot="html" slot-scope="data" v-html="data.value"></span>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./patient.js"></script>

<style lang="scss">
  @import './patient.scss';
</style>

