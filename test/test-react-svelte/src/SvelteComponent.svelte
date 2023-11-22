<script lang="ts">
  import { wrapper } from "./Wrapper";

  const wrapped = wrapper();

  export let name: string;
</script>

<main>
  <section class="my-pink-section">Props: {`{ name: "${name}" }`}</section>
</main>

<style>
  .my-pink-section {
    color: pink;
  }
</style>
