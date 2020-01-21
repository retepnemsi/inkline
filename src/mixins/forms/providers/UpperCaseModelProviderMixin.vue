<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        forceupper: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        /**
         * Get the value of the individual form item
         */
        currentValue() {
            return this.value;
        },

        /**
         * Bind the value of an individual form item
         */
        model: {
            get() {
                return this.value;
            },
            set (value) {
                console.log(`Set ${value} force uppercase ${this.forceupper}`)
                if (this.forceupper) {
                    value = value.toUpperCase()
                }
                return this.$emit('input', value);
            }
        }
    }
};
</script>
