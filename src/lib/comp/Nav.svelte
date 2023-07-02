<script>
	import { logIt } from '$lib/utils';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const source = 'Nav.svelte';

	let renderingCount = 0;
	renderingCount += 1;
	logIt({
		count: renderingCount,
		routeId: $page.route.id,
		source,
		action: 'rendering',
		comment: 'Start rendering'
	});

	let onMountCount = 0;
	onMount(() => {
		onMountCount += 1;
		logIt({
			count: onMountCount,
			timestamp: new Date(),
			routeDir: '/',
			routeId: $page.route.id,
			source,
			action: 'onMount'
		});
	});

	renderingCount += 1;
	logIt({
		count: renderingCount,
		routeId: $page.route.id,
		source,
		action: 'rendering',
		comment: 'Start rendering'
	});
</script>

<nav>
	<a href="/">home</a>
	<a href="/aRoute">/aRoute</a>
</nav>
