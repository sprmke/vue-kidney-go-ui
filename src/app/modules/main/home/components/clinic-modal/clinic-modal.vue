<template>
	<b-modal id="clinic-modal" :title="title" centered hide-footer>
		<app-datepicker :highlighted="highlighted" :inline="true" :bootstrap-styling="true" @selected="setDialysis" class="adjust-width"></app-datepicker>
		<b-button type="submit" variant="primary" class="mt-2" block @click="onSendRequest">SEND REQUEST</b-button>
	</b-modal>
</template>

<script src="./clinic-modal.js"></script>

<style lang="scss" scoped>
@import "./clinic-modal.scss";
</style>


<style lang="scss">
// PANSAMANTAGAL
.vdp-datepicker__calendar {
	width: 100% !important;
}
</style>


