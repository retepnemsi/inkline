import Table from '@inkline/inkline/src/components/Table';

// [
//     { key: 'address.street', title: 'Street', component: 'MyTableComponent' },
// ]
//
// [ { address: { street: 'Wherever' } } ]

export default {
    name: 'IDatatable',
    extends: Table,
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        rows: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            sortBy: 'id'
        }
    },
    computed: {
        tableColumns() {
            return [...this.columns].map((column) => ({
                type: 'string',
                ...column
            }))
        },
        tableRows() {
            return [...this.rows].sort(() => 1).map((row, index) => ({
                _count: index + 1,
                ...row
            }));
        }
    }
};
