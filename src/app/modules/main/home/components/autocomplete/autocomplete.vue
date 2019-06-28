<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      v-model="search"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <b-list-group
      v-show="isOpen"
      class="autocomplete-results"
    >
      <template v-if="results.length > 0">
        <b-list-group-item
          v-for="(result, i) in results"
          :key="i"
          @click="setResult(result)"
          :active="i === arrowCounter"
        >
          {{ result }}
        </b-list-group-item>
      </template>
      <b-list-group-item v-if="results.length === 0">No Clinic Found.</b-list-group-item>
    </b-list-group>
    <div class="input-group-append">
      <button class="btn btn-primary" @click="emitSearchResult(search)">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script src="./autocomplete.js"></script>

<style lang="scss" scoped>
  @import './autocomplete.scss';
</style>
