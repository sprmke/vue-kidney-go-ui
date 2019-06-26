<template>
  <div id="doctor-page">
    <header>
      <Header />
    </header>

   <main class="doctor-body">
    <!-- Profile -->
    <section class="profile-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <DoctorSummary />
          </div>
        </div>
      </div>
    </section>

      <!-- Blood Tests -->
      <section class="blood-tests-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="section-header">
                <h3>Blood Tests</h3>
                <div class="action">
                  <button type="button" class="btn btn-primary btn-sm">Edit</button>
                  <button class="btn btn-icon btn-warning btn-sm" type="button">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                    <span>Upload pdf</span>
                  </button>
                </div>
              </div>
              <DoctorBloodTests />
            </div>
          </div>
        </div>
      </section>

      <!-- Dialysis -->
      <section class="blood-dialysis">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="section-header">
                <h3>Dialysis Details</h3>
                <div class="action">
                  <button type="button" class="btn btn-success btn-sm">Save</button>
                  <button class="btn btn-icon btn-warning btn-sm" type="button">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                    <span>Upload pdf</span>
                  </button>
                </div>
              </div>
              <DoctorDialysis />
            </div>
          </div>
        </div>
      </section>
   </main>
  </div>
</template>

<script src="./doctor-container.js"></script>

<style lang="scss" scoped>
  @import './doctor-container.scss';
</style>
