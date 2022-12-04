<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<div>
			<router-link to="/hello">hello</router-link>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<router-link to="/word">word</router-link>
		</div>
		<router-view></router-view>
		<div>
			<router-link to="/app1">应用1</router-link>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<router-link to="/app2">应用2</router-link>
		</div>
		<div id="container1" style="margin-top:50px"></div>
		<div id="container2" style="margin-top:50px"></div>
	</div>
</template>

<script>
import { loadMicroApp } from 'qiankun';
export default {
	name: 'App',
	created() {
		
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
