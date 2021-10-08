<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'Entry-Detail', params: { id: entry.id } })">
        <div class="entry-title d-flex">
            <span class="text-success fw-bold">{{ day }}</span>
            <span class="mx-1">{{ month }}</span>
            <span class="mx-2 fw-light">{{ yearAndDayOfTheWeek }}</span>
        </div>
        <div class="entry-description">
            {{ shortText }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Entry } from '../interfaces/entry.interface';

const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default defineComponent({
    props: {
        entry: {
            type: Object as PropType<Entry>,
            required: true
        }
    },
    computed: {
        shortText() {
            return (this.entry.text.length > 130)
                ? this.entry.text.substring(0, 130) + '...'
                : this.entry.text
        },
        day() {
            const date = new Date(this.entry.date)
            return date.getDate() // get the day (Not day of the week, the number)
        },
        month() {
            const date = new Date(this.entry.date)
            return months[date.getMonth()]
        },
        yearAndDayOfTheWeek() {
            const date = new Date(this.entry.date)
            return `${date.getFullYear()}, ${days[date.getDay()]}`
        }
    }
})
</script>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;
        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-description {
            font-size: 12px;
        }
    }
</style>