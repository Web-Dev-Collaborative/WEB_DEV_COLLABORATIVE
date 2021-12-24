<script>
  import { pricingPlans } from "../../contents/pricing";
  import Section from "../section.svelte";
  import PricingBoxes from "./pricing-boxes.svelte";
</script>

<style>
  h1 {
    text-align: center;
  }
</style>

<Section>
  <h1>Plans and pricing</h1>
  <PricingBoxes {pricingPlans} />
</Section>
