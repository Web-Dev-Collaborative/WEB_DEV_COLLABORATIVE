<script lang="ts">
  // Components
  import MenuItem from "./menu-item.svelte";

  // States
  import topicsState from "../states/topics-state";

  export let MENU;
</script>

<div role="navigation" aria-label="All topics">
  <ul>
    {#each MENU as menuItem}
      <MenuItem
        href={menuItem.path}
        showIcon={true}
        onClick={() => ($topicsState = false)}
      >
        {menuItem.title}
      </MenuItem>
    {/each}
  </ul>
</div>
