<script>
    import { onMount } from 'svelte';
    import { typewriter } from "$lib/transition.js";
    import { messages } from "$lib/home-messages.js";

    let i = 0;

    onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<article id="home" class="panel intro">
    <header>
        <h1>Silverwolfg11</h1>
        <div style="height: 1vh;">
        {#key i }
            <p in:typewriter={{ speed: 3 }}>{messages[i]}</p>
        {/key}
        </div>
    </header>
    <a href="https://github.com/silverwolfg11" class="pic">
        <img src="https://github.com/silverwolfg11.png" alt="" />
    </a>
</article>