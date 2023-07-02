<script lang="ts">
	import '../app.css';
	import { navigating, page } from '$app/stores';
	import { logStore } from '$lib/stores.js';
	import { logIt } from '$lib/utils';
	import { onMount } from 'svelte';
	import Nav from '$lib/comp/Nav.svelte';

	export let data;

	const source = '+layout.svelte';

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
		comment: 'First static code runs in sequence.'
	});

	let navigatingCount = 0;
	// $: if($navigating?.to?.url.pathname) {
	$: {
		navigatingCount += 1;
		logIt({
			count: navigatingCount,
			routeDir: '/',
			routeId: $page.route.id,
			source,
			action: '$navigating',
			comment: `Reactive. From: ${$navigating?.from?.url.pathname} to: ${$navigating?.to?.url.pathname} delta: ${$navigating?.delta}`
		});
	}

	$logStore = {
		routeDir: '/',
		routeId: $page.route.id,
		source,
		comment: 'Static code runs in sequence.'
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
			comment: 'onMount runs AFTER static and reactive code.'
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
	+layout.svelte

	<Nav />

	<pre>
    {JSON.stringify({ data }, null, 2)}
  </pre>
</div>

<slot />
