<template>
  <div class="item">
    <el-form ref="form" :model="form" label-width="150px">
    	<el-form-item label="小程序id">
		    <el-input v-model="form.appid"></el-input>
		</el-form-item>
		<el-form-item label="小程序名称">
		    <el-input v-model="form.appname"></el-input>
		</el-form-item>
		<el-form-item label="是否在banner上显示">
		    <el-switch v-model="form.isBanner"></el-switch>
		</el-form-item>
		<el-form-item label="上传图片">
		    <el-upload enctype="multipart/form-data" action="http://www.rrdtjj.top/mp/upload"
                     name="imageFile" :on-success="handleAvatarSuccess">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
		</el-form-item>
		<el-form-item label="小程序简介">
		    <el-input type="textarea" v-model="form.intro"></el-input>
		</el-form-item>
		<el-form-item label="玩耍人数">
		    <el-input v-model="form.play_numbers"></el-input>
		</el-form-item>
		<el-form-item label="path 参数">
		    <el-input type="textarea" v-model="form.path"></el-input>
		</el-form-item>
		<el-form-item label="extra 参数">
		    <el-input type="textarea" v-model="form.extra"></el-input>
		</el-form-item>
		<el-form-item>
			<el-input type="hidden" v-model="form._id"></el-input>
		</el-form-item>
		<div class="submit-btn">
            <el-button style="width: 150px;" plain type="danger" @click="cancel">取消</el-button>
            <el-button style="width: 150px;" plain type="success" @click="save">保存</el-button>
        </div>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
  	return {
  		form:{},
  		imageUrl: ''
  	}
  },
  beforeMount:function(){
  	this.$data.form = this.$store.state.program
  	this.$data.imageUrl = this.$store.state.program.img
  },
  methods:{
  	handleAvatarSuccess(res, file) {
        this.$data.imageUrl = URL.createObjectURL(file.raw);
        this.$data.form.img = 'http://www.rrdtjj.top/uploads/'+res.filename
    },
  	cancel:function () {
  		this.$router.back(-1)
  	},
  	save: async function(){
  		let url='http://www.rrdtjj.top'
  		let method = 'put'
  		if(this.$data.form._id){
  			url += '/mp/'+this.$data.form._id	
  		}else{
  			url += '/mp/'
  			method = 'post'
  		}
  		let response = await this.$api.request(method,url,this.$data.form)
  		this.$router.back(-1)
  	}
  }
}

</script>

<style type="text/css">
	.item{
		margin: 40px;
		width: 640px;
		text-align: left;
	}
	.submit-btn{
		text-align: center;
	}
</style>
