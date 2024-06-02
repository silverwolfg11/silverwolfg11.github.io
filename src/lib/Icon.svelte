<script>
    import Glasses from "./icons/glasses.svelte";
    import CupStar from "./icons/cup-star.svelte";
    import Home from "./icons/home.svelte";
    
    export let name;
    const Icon = {"home": Home, "cupstar": CupStar, "glasses": Glasses}[name];
</script>

<Icon {...$$restProps} />