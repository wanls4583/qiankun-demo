<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<div>
			<router-link to="/hello2">hello2</router-link>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<router-link to="/word2">word2</router-link>
		</div>
		<div>
			<input type="text" v-model="test">
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			test: ''
		}
	}
};
</script>
<style>
a {
	color: blue;
}
</style>