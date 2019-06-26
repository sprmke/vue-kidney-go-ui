<template>
  <div class="card doctor-summary">
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
          <h2><a href="">Dr John Smith</a></h2>
          <div class="edit-button">
            <button type="button" class="btn btn-sm btn-primary">Edit</button>
          </div>
        </div>
        <!-- Informations -->
        <div class="info">
          <ul class="list-group list-group-flush list my--3">
            <li class="list-group-item px-0">
              <p class="mb-0">SLE - Kronical kidney failure</p>
              <small>Diagnosis</small>
            </li>
            <li class="list-group-item px-0 d-flex">
              <div class="col pl-0">
                <p class="mb-0">February 2, 1988</p>
                <small>Date of birth</small>
              </div>
              <div class="col">
                <p class="mb-0">Male</p>
                <small>Sex</small>
              </div>
            </li>
            <li class="list-group-item px-0">
              <p class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <small>Medical history</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./doctor-summary.js"></script>

<style lang="scss" scoped>
  @import './doctor-summary.scss';
</style>
