<script lang="ts">
	import { page } from '$app/stores';
	import Thing from '$lib/comp/Thing.svelte';
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
			routeDir: '/aRoute',
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
		routeDir: '/aRoute',
		routeId: $page.route.id,
		source,
		action: 'rendering',
		comment: 'First static code runs in sequence.'
	});

	$logStore = {
		routeDir: '/aRoute',
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
			routeDir: '/aRoute',
			routeId: $page.route.id,
			source,
			action: 'onMount',
			comment: 'onMount runs AFTER static and reactive code.'
		});
	});

	let things: number[] = [];
	const addThing = () => (things = [...things, things.length]);

	renderingCount += 1;
	logIt({
		count: renderingCount,
		routeDir: '/aRoute',
		routeId: $page.route.id,
		source,
		action: 'rendering',
		comment: 'Last static code runs in sequence.'
	});
</script>

<div>
	aRoute/+page.svelte

	<pre>
    {JSON.stringify({ data }, null, 2)}
  </pre>

	<button on:click={addThing}>addThing</button>

	{#each things as value}
		<Thing {value} />
	{/each}
</div>
