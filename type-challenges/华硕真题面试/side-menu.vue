<template>
    <div class="menu-wrapper">
        <div v-for="item in menuCinfig" :data-testid="`first--level-${item.title}`.toLowerCase()">
            {{ item.title }}
            <button :data-testid="getTestId(`button-${item.title}`)" v-if="item.subItems.length" @click="expend">
                {{ expendId === item.title ? 'Hide' : 'Expand' }}
            </button>
            <ul :data-testid="getTestId(`ul-${item.title}`)" v-if="item.subItems.length && item.title === expendId">
                <li v-for="sub in item.subItems" :data-testid="getTestId(`li-${item.title}-${sub}`)">{{ sub }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        menuConfig: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            expendId: ''
        }
    },
    methods: {
        getTestId(id) {
            return id.toLowerCase();
        },
        expend(title) {
            this.expendId = title
        }
    }
}
</script>