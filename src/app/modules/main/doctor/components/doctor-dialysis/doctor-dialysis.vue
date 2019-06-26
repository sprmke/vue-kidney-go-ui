<template>
 <div class="card doctor-dialysis m-0">
    <div class="card-body">
      <form>
        <div class="form-group row">
          <div class="ml-4 mr-5 d-flex">
            <label for="example-text-input" class="mr-3 col-form-label form-control-label">Type</label>
            <div class="col-auto p-0">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
                <option>Type 4</option>
                <option>Type 5</option>
              </select>
            </div>
          </div>
          <div class="mr-5 d-flex">
            <label for="example-text-input" class="mr-3 col-form-label form-control-label">Treatment</label>
            <div class="col-auto p-0">
              <input class="form-control" type="text" value="John Snow" id="example-text-input">
            </div>
            <label for="example-text-input" class="units col col-form-label form-control-label">hours</label>
          </div>
          <div class="d-flex">
            <label for="example-text-input" class="mr-3 col-form-label form-control-label">Ultrafiltration</label>
            <div class="col-auto p-0">
              <input class="form-control" type="text" value="John Snow" id="example-text-input">
            </div>
            <label for="example-text-input" class="units col col-form-label form-control-label">ml/min</label>
          </div>
        </div>
         <div class="form-group row mb-0">
          <div class="ml-4 mr-5 d-flex">
            <label for="example-text-input" class="mr-3 col-form-label form-control-label">Fluid</label>
            <div class="col-auto p-0">
              <input class="form-control" type="text" value="John Snow" id="example-text-input">
            </div>
          </div>
          <div class="mr-5 d-flex">
            <label for="example-text-input" class="mr-3 col-form-label form-control-label">Blood Flow</label>
            <div class="col-auto p-0">
              <input class="form-control" type="text" value="John Snow" id="example-text-input">
            </div>
            <label for="example-text-input" class="units col col-form-label form-control-label">ml/min</label>
          </div>
          <div class="d-flex">
            <label for="example-text-input" class="mr-3 col-form-label form-control-label">Dialysator</label>
            <div class="col-auto p-0">
              <input class="form-control" type="text" value="John Snow" id="example-text-input">
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./doctor-dialysis.js"></script>

<style lang="scss" scoped>
  @import './doctor-dialysis.scss';
</style>
