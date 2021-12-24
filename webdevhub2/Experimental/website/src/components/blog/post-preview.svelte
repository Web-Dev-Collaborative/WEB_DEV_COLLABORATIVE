<script lang="ts">
  import Author from "./author.svelte";
  import type { BlogPost } from "../../types/blog-post.type";

  export let post: BlogPost;
  export let isMostRecent: boolean = false;
</script>

<div class:previous={!isMostRecent} class="blogPreview">
  {#if isMostRecent}
    <a href="/blog/{post.slug}" sveltekit:prefetch>
      <img
        src="/images/blog/{post.slug}/{post.image}"
        alt={`Blog post: ${post.title}`}
        height="248"
        width="400"
      />
    </a>
  {/if}
  <div class="blurb">
    <h2>
      <a href="/blog/{post.slug}" sveltekit:prefetch>
        {post.title}
      </a>
    </h2>
    <p class="excerpt">{post.excerpt}</p>
    <p>
      <span>
        <Author author={post.author} showIconOnly />
        <a href="/blog/{post.slug}" class="date" sveltekit:prefetch>
          {new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </a>
      </span>
    </p>
  </div>
</div>
