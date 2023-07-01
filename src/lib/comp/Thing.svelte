<script lang="ts">
	import { logIt } from '$lib/utils';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let value: number;

	const source = 'Thing.svelte';

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
</script>

<div>
	this Thing's value is {value}
</div>
