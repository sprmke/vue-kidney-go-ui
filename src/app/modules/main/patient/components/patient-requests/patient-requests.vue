<template>
 <div class="card patient-requests m-0">
    <div class="card-body p-2">
     <div class="table-responsive">
        <table class="table align-items-center table-flush table-striped">
          <tbody>
            <tr>
              <td>
                Hospital Zadar, Zadar Croatia
              </td>
              <td style="width: 10%">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </td>
              <td style="width: 30%">
                <div class="progress">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                </div>
              </td>
              <td>
                Pending...
              </td>
            </tr>
            <tr>
              <td>
                Hospital Zadar, Zadar Croatia
              </td>
              <td style="width: 10%">
              </td>
              <td style="width: 30%">
              </td>
              <td>
                <button class="btn btn-icon btn-success btn-sm" type="button">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </button>
                <button class="btn btn-icon btn-primary btn-sm" type="button">
                  <i class="fa fa-print" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Hospital Zadar, Zadar Croatia
              </td>
              <td style="width: 10%">
              </td>
              <td style="width: 30%">
              </td>
              <td>
                <button class="btn btn-icon btn-danger btn-sm" type="button">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="./patient-requests.js"></script>

<style lang="scss" scoped>
  @import './patient-requests.scss';
</style>