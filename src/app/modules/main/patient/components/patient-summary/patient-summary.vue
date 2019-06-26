<template>
  <div class="card patient-summary">
    <div class="card-body d-flex">
      <!-- Avatar -->
      <div class="avatar-container">
        <a href="#" class="avatar">
          <img alt="Image placeholder" src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.0-9/57126997_731786927223606_6867553458199724032_n.jpg?_nc_cat=104&_nc_oc=AQnR0zw5HlbaPDxZGsaIf90h_dNoeUPP4mzAIZ3uPaxE5SW9wzgqIDvvB3PkzJ9BJcQ&_nc_ht=scontent.fcrk1-1.fna&oh=33d18858a07fd2243c626b5c4125ff79&oe=5D88096B">
        </a>
      </div>
      <!-- Details -->
      <div class="details-container">
        <!-- Name -->
        <div class="name">
          <h2 v-if="!isEditing"><a href="">John Smith</a></h2>
          <b-form-input v-else id="input-1" type="text" placeholder="Enter email" value="John Smith" class="mr-3"></b-form-input>
          <div class="edit-button">
            <button type="button" class="btn btn-sm" :class="{'btn-primary': !isEditing, 'btn-success': isEditing}" @click="isEditing = !isEditing"> {{ isEditing ? 'Save' : 'Edit' }}</button>
          </div>
        </div>
        <!-- Informations -->
        <div class="info">
          <ul class="list-group list-group-flush list my--3">
            <li class="list-group-item px-0">
              <p v-if="!isEditing" class="mb-0">#750 St. Cool, Clinic B-Braun Paris, France</p>
              <b-form-input v-else id="input-1" type="text" placeholder="Enter email" value="#750 St. Cool, Clinic B-Braun Paris, France"></b-form-input>
              <small>Address</small>
            </li>
            <li class="list-group-item px-0 d-flex">
              <div class="col pl-0">
                <p v-if="!isEditing" class="mb-0">**** **** **** **** 221</p>
                <b-form-input v-else id="input-1" type="text" placeholder="Enter email" value="**** **** **** **** 221"></b-form-input>
                <small>Payment Information</small>
              </div>
              <div class="col">
                <p v-if="!isEditing" class="mb-0">European health insurance card</p>
                <b-form-input v-else id="input-1" type="text" placeholder="Enter email" value="European health insurance card"></b-form-input>
                <small>Health Insurance Information</small>
              </div>
            </li>
            <li class="list-group-item px-0 d-flex">
              <div class="col pl-0">
                <p v-if="!isEditing" class="mb-0">+36823829361239</p>
                <b-form-input v-else id="input-1" type="text" placeholder="Enter email" value="+36823829361239"></b-form-input>
                <small>Contact</small>
              </div>
              <div class="col">
                <p v-if="!isEditing" class="mb-0">verycoolemail@gmail.com</p>
                <b-form-input v-else id="input-1" type="text" placeholder="Enter email" value="verycoolemail@gmail.com"></b-form-input>
                <small>Email</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./patient-summary.js"></script>

<style lang="scss" scoped>
  @import './patient-summary.scss';
</style>