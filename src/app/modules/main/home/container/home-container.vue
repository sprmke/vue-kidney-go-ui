<template>
	<div>
		<GmapMap
			:center="{lat:10, lng:10}"
			:zoom="7"
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
				@click="center=m.position"
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
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<div class="input-group">
							<GmapAutocomplete @place_changed="setPlace" class="form-control gmap-search"></GmapAutocomplete>
							<div class="input-group-append">
								<button class="btn btn-primary" @click="usePlace">
									<i class="fa fa-search"></i>
								</button>
							</div>
						</div>
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

		<login-modal></login-modal>
		<signup-modal></signup-modal>
		<clinic-modal></clinic-modal>
	</div>
</template>

<script src="./home-container.js"></script>

<style lang="scss" scoped>
@import "./home-container.scss";
</style>
