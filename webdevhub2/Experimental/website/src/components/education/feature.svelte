<script lang="ts">
  import type { EducationFeature } from "../../types/education.type";

  export let feature: EducationFeature;
</script>

<style>
  .card {
    display: grid;
    grid-template-columns: 1fr minmax(280px, 80%);
    gap: 20px;
    min-height: 192px;
    margin: 1rem;
    align-items: self-start;
  }
</style>

<div class="card">
  <h3 class="h4">{feature.title}</h3>
  <p>{@html feature.description}</p>
</div>
