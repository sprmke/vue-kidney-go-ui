<template>
  <div id="patient-page">
    <header>
      <Header />
    </header>

   <main class="patient-body">
    <!-- Profile -->
    <section class="profile-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <PatientSummary />
          </div>
        </div>
      </div>
    </section>

     <!-- New Message -->
      <section class="new-message-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <NewMessage />
            </div>
          </div>
        </div>
      </section>

      <!-- New Requests -->
      <section class="patient-request-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <h3>Requests</h3>
              <PatientRequests />
            </div>
          </div>
        </div>
      </section>

      <!--History -->
      <section class="patient-history">
        <div class="container">
          <div class="row">
            <div class="col">
              <h3>History</h3>
              <PatientHistory />
            </div>
          </div>
        </div>
      </section>
   </main>
  </div>
</template>

<script src="./patient-container.js"></script>

<style lang="scss" scoped>
  @import './patient-container.scss';
</style>