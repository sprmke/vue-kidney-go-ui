<template>
	<div>
		<GmapMap
			:center="{lat:25.2048, lng:55.2708}"
			:zoom="10"
			:options="{scrollwheel: false, mapTypeControl: false, fullscreenControl: false, zoomControl: false}"
			map-type-id="terrain"
			style="width: 100%; height: 100vh"
			ref="mapRef"
		>
			<GmapMarker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				:clickable="true"
				:draggable="true"
				@click="onMarkerClick"
			/>
		</GmapMap>

		<nav class="navbar navbar-expand-lg navbar-light">
			<a class="navbar-brand text-white" href="#">Kidney Go</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
        @click="showMobileNav()"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div :class="{'show': isShownMobileNav}" class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<Autocomplete
							class="gmap-search"
							@search-result="navigateToClinic"
							:items="[ 'Dialysis Clinic Slovenia', 'Dialysis Clinic Croatia']" />
					</li>
					<li class="nav-item">
						<b-button variant="primary" v-b-modal.login-modal>LOG IN</b-button>
					</li>
					<li class="nav-item">
						<b-button variant="primary" v-b-modal.signup-modal>SIGN UP</b-button>
					</li>
					<li class="nav-item">
						<b-button variant="primary" v-b-modal.clinic-modal>CLINIC</b-button>
					</li>
				</ul>
			</div>
		</nav>

		<transition name="slide-fade">
			<div v-if="showClinicInfo" class="card clinic-info">
				<!-- Card image -->
				<img class="card-img-top" :src="clinicSelected[0].image" alt="Image placeholder">
				<!-- Card body -->
				<div class="card-body">
					<h5 class="h2 card-title mb-0">{{ clinicSelected[0].name }}</h5>
					<small class="text-muted">Medical clinic</small>
					<p class="card-text mt-4 mb-0"><i class="fa fa-map-marker" aria-hidden="true"></i> {{ clinicSelected[0].address }}</p>
					<p v-if="clinicSelected[0].phone" class="card-text mt-2 mb-0"><i class="fa fa-phone" aria-hidden="true"></i> {{ clinicSelected[0].phone }}</p>
					<a :href="clinicSelected[0].website" target="_blank" class="btn btn-link px-0"><i class="fa fa-globe" aria-hidden="true"></i> {{ clinicSelected[0].website }}</a>
				</div>
			</div>
		</transition>

		<login-modal></login-modal>
		<signup-modal></signup-modal>
		<clinic-modal :title="clinicSelected[0].name"></clinic-modal>
	</div>
</template>

<script src="./home-container.js"></script>

<style lang="scss" scoped>
@import "./home-container.scss";
</style>
