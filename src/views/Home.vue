<template>
  <div class="home">
  	<div class="add-page">
        <el-button type="primary" plain @click="addPage">新增小程序</el-button>
    </div>
	<el-table
	:data="tableData"
	stripe
	style="width: 100%"
	:default-sort="{prop: 'index', order: 'descending'}" >
		<el-table-column
		  prop="appid"
		  label="小程序id"
		  header-align="center"
		  >
		</el-table-column>
		<el-table-column
		  prop="appname"
		  label="小程序名称"
		  header-align="center"
		  >
		</el-table-column>
		<el-table-column
		  label="图片"
		  width ="200"
		  header-align="center">
		  	<template slot-scope="scope">
		      <img  :src="scope.row.img" alt="" width="180">
		    </template>
		</el-table-column>

		<el-table-column
		  prop="index"
		  label="排序"
		  width="200"
		  header-align="center">
		  	<template slot-scope="scope">
		  		<el-input-number v-model="scope.row.index" @change="indexChange(scope.$index,scope.row)" ></el-input-number>
		    </template>
		</el-table-column>

		<el-table-column
		  fixed="right"
		  label="上架"
		  width="180"
		  header-align="center">
		  	<template slot-scope="scope">
		  		<el-switch
				  v-model="scope.row.isShow"
				  active-color="#13ce66"
				  inactive-color="#ff4949"
				  @change="changeSwitch(scope.row)">
				</el-switch>
		    </template>
		</el-table-column>
		<el-table-column
		  fixed="right"
		  label="操作"
		  width="180"
		  header-align="center">
		  	<template slot-scope="scope">
		  		<el-button @click="update(scope.row)" type="primary" size="small">编辑</el-button>
		        <el-button @click="remove(scope.row)" type="danger" size="small">删除</el-button>
		    </template>
		</el-table-column>
	</el-table>
  </div>
</template>


<script>

export default {
  name: 'home',
  data() {
  	return {
  		tableData:[]
  	}
  },
  beforeMount: async function() {
  	let response = await this.$api.get('http://www.rrdtjj.top/mp',null)
  	this.$data.tableData = response.data.data
  },
  methods:{
  	addPage: function(){
  		this.$store.dispatch('setProgram',{})
	  	this.$router.push('/mp/view/add')
	},
	update: function(row){
		this.$store.dispatch('setProgram',row)
		this.$router.push('/mp/view/update')
	},
	remove: async function(row){
		let response = await this.$api.delete('http://www.rrdtjj.top/mp/'+row._id,null)
		response = await this.$api.get('http://www.rrdtjj.top/mp',null)
  		this.$data.tableData = response.data.data
	},
	changeSwitch: async function(row){
		let response = await this.$api.put('http://www.rrdtjj.top/mp/show/'+row._id,{isShow:row.isShow})
	},
	indexChange: async function(arr_index,row){
		let response = await this.$api.put('http://www.rrdtjj.top/mp/sort/'+row._id,{index:row.index})
		this.$data.tableData = this.$data.tableData.sort(this.compare)
	},
	compare : function (x, y) {//比较函数
	    if (x.index < y.index) {
	        return -1;
	    } else if (x.index > y.index) {
	        return 1;
	    } else {
	        return 0;
	    }
	}
  }

}
</script>
