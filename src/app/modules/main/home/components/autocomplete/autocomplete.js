export default {
  name: 'autocomplete',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
      arrowCounter: -1
    };
  },
  methods: {
    onChange() {
      this.isOpen = true;
      this.filterResults();
    },
    filterResults() {
      if (this.search) {
        this.isOpen = true;
        this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      } else {
        this.isOpen = false;
        this.emitSearchResult(this.search)
      }
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
      this.emitSearchResult(this.search)
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
      this.emitSearchResult(this.search)
    },
    emitSearchResult(keyword) {
      this.$emit('search-result', keyword);
    }
  }
};