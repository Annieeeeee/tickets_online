<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="头像">
			<img src="../../assets/user.png">
		</el-form-item>
		<el-form-item label="昵称">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="部门">
			<el-input v-model="form.region"></el-input>
		</el-form-item>
		
		<el-form-item>
			<el-button type="primary">修改信息</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				form: {
					name: "学术小李",
					region: "学术与文化促进部",
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			
			if (user) {
				user = JSON.parse(JSON.stringify(user));
				console.log(user);
				this.user = user;
				
			}

		}
	}

</script>