<template>
  <nav class="header navbar navbar-horizontal navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#"><h3 class="mb-0">KIDNEY GO</h3></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbar-primary">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="/">
                <img src="/img/brand/blue.png">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Links -->
        <ul class="navbar-nav">
          <li class="nav-item" @click="navigateTo('doctor')">
            <a class="nav-link">Doctor <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" @click="navigateTo('patient')">
            <a class="nav-link">Patients <span class="sr-only">(current)</span></a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Request</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
        </ul>
        <!-- Search -->
        <!-- <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative input-group-merge">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-search"></i></span>
              </div>
              <input class="form-control" placeholder="Search" type="text">
            </div>
          </div>
          <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </form> -->
        <!-- Profile -->
        <ul class="navbar-nav align-items-center ml-auto ml-md-0">
          <li class="nav-item dropdown">
            <a @click="onShowProfile" class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <!-- <div class="media-body mr-2 d-none d-lg-block">
                  <span class="mb-0 text-sm font-weight-bold">John Smith</span>
                </div> -->
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.0-9/57126997_731786927223606_6867553458199724032_n.jpg?_nc_cat=104&_nc_oc=AQnR0zw5HlbaPDxZGsaIf90h_dNoeUPP4mzAIZ3uPaxE5SW9wzgqIDvvB3PkzJ9BJcQ&_nc_ht=scontent.fcrk1-1.fna&oh=33d18858a07fd2243c626b5c4125ff79&oe=5D88096B">
                </span>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right" :class="{'show': showProfile }">
              <!-- <a href="#!" class="dropdown-item">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span>Activity</span>
              </a>
              <a href="#!" class="dropdown-item">
                <i class="fa fa-life-ring" aria-hidden="true"></i>
                <span>Support</span>
              </a> -->
              <!-- <div class="dropdown-divider"></div> -->
              <a class="dropdown-item logout" @click="onLogout">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                <span class="logout">Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script src="./header.js"></script>

<style lang="scss" scoped>
  @import './header.scss';
</style>