<script lang="ts">
  import type { Screencast } from "../../types/screencasts.type";
  import Logo from "../svgs/logo.svelte";

  export let screencast: Screencast;
  export let screencastNumber: number;

  $: screencastNumberPadded = `${screencastNumber}`.padStart(3, "0");
</script>

<style>
</style>

<a
  href="/screencasts/{screencast.title.toLowerCase().replace(/\s/g, '-')}"
  class="cast"
>
  <div>
    <data>Screencast {screencastNumberPadded}</data>
    <h2>{screencast.title}</h2>
    <Logo />
  </div>
</a>
