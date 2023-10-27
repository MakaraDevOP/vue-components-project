<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>

export default {
	name: 'App',
	components: {

	}
}
</script>

<style>
#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale; */
	text-align: center;
	font-family: Inter, ui-sans-serif, system-ui, -apple-system,
		BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
		"Noto Color Emoji";
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
