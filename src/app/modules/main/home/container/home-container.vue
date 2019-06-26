<template>
    <div>

    <label>
      AutoComplete
      <GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
      <button @click="usePlace">Add</button>
    </label>
    <br/>

        <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            :options="{scrollwheel: false, mapTypeControl: false, fullscreenControl: false, zoomControl: false}"
            map-type-id="terrain"
            style="width: 100%; height: 100vh">

            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
        </GmapMap>

        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand text-white" href="#">Kidney Go</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                          <b-input-group>
                            <b-form-input placeholder="Search"></b-form-input>
                            <b-input-group-append><b-button variant="primary"><i class="fa fa-search" aria-hidden="true"></i></b-button></b-input-group-append>
                        </b-input-group>
                    </li>
                    <li class="nav-item">
                        <b-button
                        variant="primary"
                        v-b-modal.login-modal>LOG IN</b-button>
                    </li>
                    <li class="nav-item">
                        <b-button
                        variant="primary"
                        v-b-modal.signup-modal>SIGN UP</b-button>
                    </li>
                    <li class="nav-item">
                        <b-button
                        variant="primary"
                        v-b-modal.clinic-modal>CLINIC</b-button>
                    </li>
                </ul>
            </div>
        </nav>

        <login-modal></login-modal>
        <signup-modal></signup-modal>
        <clinic-modal></clinic-modal>
    </div>
</template>

<script src="./home-container.js"></script>

<style lang="scss" scoped>
  @import './home-container.scss';
</style>
