<script lang="ts">
	import { page } from '$app/stores';
	import { logStore } from '$lib/stores.js';
	import { logIt } from '$lib/utils.js';
	import { onMount } from 'svelte';

	export let data;

	const source = '+page.svelte';

	let dataCount = 0;
	$: {
		dataCount += 1;
		logIt({
			count: dataCount,
			routeDir: '/',
			routeId: $page.route.id,
			source,
			action: 'data',
			comment: `Reactive. Renders without triggering onMount.`
		});
	}

	let renderingCount = 0;
	renderingCount += 1;
	logIt({
		count: renderingCount,
		routeDir: '/',
		routeId: $page.route.id,
		source,
		action: 'rendering',
		comment: 'Start rendering'
	});

	$logStore = {
		routeDir: '/',
		routeId: $page.route.id,
		source,
		comment: 'Runs IN code sequence.'
	};

	let onMountCount = 0;
	onMount(() => {
		onMountCount += 1;
		logIt({
			count: onMountCount,
			timestamp: new Date(),
			routeDir: '/',
			routeId: $page.route.id,
			source,
			action: 'onMount',
			comment: 'onMount runs AFTER code sequence.'
		});
	});

	renderingCount += 1;
	logIt({
		count: renderingCount,
		routeDir: '/',
		routeId: $page.route.id,
		source,
		action: 'rendering',
		comment: 'Last static code runs in sequence.'
	});
</script>

<div>
	+page.svelte

	<pre>
    {JSON.stringify({ data }, null, 2)}
  </pre>
</div>
