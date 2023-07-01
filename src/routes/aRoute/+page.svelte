<script lang="ts">
	import { page } from '$app/stores';
	import Thing from '$lib/comp/Thing.svelte';
	import { logStore } from '$lib/stores.js';
	import { logIt } from '$lib/utils.js';
	import { onMount } from 'svelte';

	export let data;

	const route = $page.route.id || '';
	const source = '+page.svelte';

	$logStore = {
		routeDir: '/aRoute',
		routeId: $page.route.id,
		source,
		comment: 'value set in aRoute/+page.svelte'
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
			action: 'onMount'
		});
	});

	let things: number[] = [];
	const addThing = () => (things = [...things, things.length]);
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
