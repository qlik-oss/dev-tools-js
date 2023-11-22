<script lang="ts">
  import OtherComponent from "./OtherComponent.svelte";
  import { wrapper } from "./Wrapper.tsx";

  const wrapped = wrapper();

  export let name: string;
</script>

<main>
  <section class="my-pink-section">Props: {`{ name: "${name}" }`}</section>
  <OtherComponent />
</main>

<style>
  .my-pink-section {
    color: pink;
  }
</style>
