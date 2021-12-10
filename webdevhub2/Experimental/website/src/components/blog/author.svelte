<script lang="ts">
  import { authors } from "../../contents/blog";

  export let author: string;
  export let showIconOnly: boolean;
</script>

<!-- We use the GitHub profile image because the Twitter profile image needs an authenticated API call -->
<span class="author">
  {#each author.split(", ") as username}
    {#if showIconOnly}
      <a href="https://twitter.com/{authors[username].socialProfiles.twitter}"
        ><img
          src="https://github.com/{authors[username].socialProfiles.github}.png"
          alt="Avatar of {authors[username].name}"
          height="24"
          width="24"
        />
      </a>
    {:else}
      <a href="https://twitter.com/{authors[username].socialProfiles.twitter}"
        ><img
          src="https://github.com/{authors[username].socialProfiles.github}.png"
          alt="Avatar of {authors[username].name}"
          height="24"
          width="24"
        />
        {#if !showIconOnly}
          {authors[username].name}
        {/if}
      </a>
    {/if}
  {/each}
</span>
