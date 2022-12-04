<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<div>
			<router-link to="/hello1">hello1</router-link>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<router-link to="/word1">word1</router-link>
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
	color: red;
}
</style>