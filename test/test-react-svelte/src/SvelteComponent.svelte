<script lang="ts">
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
