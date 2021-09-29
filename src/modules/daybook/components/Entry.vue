<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'Entry-Detail', params: { id: 10 } })">
        <div class="entry-title d-flex">
            <span class="text-success fw-bold">15</span>
            <span class="mx-1">July</span>
            <span class="mx-2 fw-light">2021, thursday</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod suscipit minima voluptatem magni, iste pariatur esse placeat corrupti. Est nobis omnis expedita praesentium officia enim blanditiis maxime consequuntur, earum pariatur, quos reprehenderit. Ad quasi corrupti commodi praesentium adipisci dolor?
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    
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