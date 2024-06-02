<!-- Work -->
<script>
    import Card from '$lib/Card.svelte';
</script>

<article id="projects" class="panel">
    <header>
        <h2>Projects</h2>
    </header>
    <p>
       Some of the open-source projects I have contributed to:
    </p>
    <section>
        <div class="row">
            <div class="card col col-6-medium col-12-small">
                <Card url="https://github.com/TownyAdvanced/MapTowny" header="MapTowny" description="A spigot plugin that renders Towny towns on supported web-maps." />
            </div>
            <div class="card col col-6-medium col-12-small">
                <Card url="https://github.com/elian1203/ezAuctions" header="ezAuctions" description="A spigot plugin for player-hosted chat auctions." />
            </div>
            <div class="card col col-6-medium col-12-small">
                <Card url="https://github.com/TownyAdvanced/Towny" header="Towny" description="A widely-popular spigot plugin that adds towns and nations." />
            </div>
        </div>
        <div class="row">
            <div class="card justify-center">
                <Card url="https://github.com/silverwolfg11/CommentConfig" header="CommentConfig" description="A spigot library to generate and read commented YAML configurations." />
            </div>
        </div>
    </section>
</article>