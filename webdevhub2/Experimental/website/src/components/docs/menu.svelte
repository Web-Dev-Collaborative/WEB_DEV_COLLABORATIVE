<script lang="ts">
  import MenuSection from "./menu-section.svelte";
  export let MENU;
</script>

<ul class="space-y-8">
  {#each MENU as menuItem}
    <MenuSection {menuItem} />
  {/each}
</ul>
