<template>
  <div class="row m-2 justify-content-between">
    <div class="col">
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">July</span>
      <span class="mx-2 fs-3 fw-light">2021, thursday</span>
    </div>
    <div class="col d-flex justify-content-end">
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Upload Image
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column h-75 m-2">
    <textarea placeholder="What happended today?"></textarea>
  </div>

  <FloatingActionButton iconName="fa-save"/>

  <img
    src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/XCM_1095776_Manual_750x375_1095776_us_pc_hardware_pcit_maincomputersstorefront_tablets_v3_cg_750x375_jpg_PCIT_PCIT_mainComputersStorefront_Additional_Stock_photos.jpg"
    alt="image"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    FloatingActionButton: defineAsyncComponent(() =>
      import("../components/FloatingActionButton.vue")
    ),
  },
});
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus {
        outline: none;
    }
}
img {
    position: fixed;
    bottom: 150px;
    right: 20px;
    width: 200px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
