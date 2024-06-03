<script>
    import { base } from '$app/paths'
    import { page } from '$app/stores';
    import Icon from "$lib/Icon.svelte";

    function getIconClass(path) {
        const active = $page.url.pathname == path;
        return "icon" + (active ? " active" : "");
    }
</script>

<!-- Wrapper-->
<div id="wrapper">

<!-- Nav -->
    {#key $page }
    <nav id="nav">
        <a href={ base + "/"} class={getIconClass("/")}><Icon name="home" width="parent" height="parent" fill="none" /><span>Home</span></a>
        <a href={ base + "/about"} class={getIconClass("/about")}><Icon name="glasses" width="parent" height="parent" fill="none" /><span>About</span></a>
        <a href={ base + "/projects"} class={getIconClass("/projects")}><Icon name="cupstar" width="parent" height="parent" fill="none" /><span>Projects</span></a>
    </nav>
    {/key}

<!-- Main -->
    <div id="main">
        <slot></slot>
    </div>

<!-- Footer -->
    <div id="footer">
        <ul class="copyright">
            <li>&copy; Silverwolfg11.</li><li>Design Inspiration: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
    </div>

</div>