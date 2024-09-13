<template>
	<div class="addEdit-block" :style='{"minHeight":"100vh","padding":"30px 30px 30px 0","fontSize":"14px","color":"#666","background":"#f4f8fb"}'>
		<el-form
			:style='{"border":"1px solid #e1e8ee","padding":"50px 10% 20px","overflow":"hidden","borderRadius":"0px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","fontSize":"inherit"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
		>
			<template >
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'" label="调拨单号" prop="diaobodanhao">
					<el-input v-model="ruleForm.diaobodanhao" placeholder="调拨单号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.diaobodanhao" label="调拨单号" prop="diaobodanhao">
					<el-input v-model="ruleForm.diaobodanhao" placeholder="调拨单号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="物资名称" prop="wuzimingcheng">
					<el-input v-model="ruleForm.wuzimingcheng" placeholder="物资名称" clearable  :readonly="ro.wuzimingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="物资名称" prop="wuzimingcheng">
					<el-input v-model="ruleForm.wuzimingcheng" placeholder="物资名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="物资分类" prop="wuzifenlei">
					<el-input v-model="ruleForm.wuzifenlei" placeholder="物资分类" clearable  :readonly="ro.wuzifenlei"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="物资分类" prop="wuzifenlei">
					<el-input v-model="ruleForm.wuzifenlei" placeholder="物资分类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="规格型号" prop="guigexinghao">
					<el-input v-model="ruleForm.guigexinghao" placeholder="规格型号" clearable  :readonly="ro.guigexinghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="规格型号" prop="guigexinghao">
					<el-input v-model="ruleForm.guigexinghao" placeholder="规格型号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="单位" prop="danwei">
					<el-input v-model="ruleForm.danwei" placeholder="单位" clearable  :readonly="ro.danwei"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="单位" prop="danwei">
					<el-input v-model="ruleForm.danwei" placeholder="单位" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="数量" prop="shuliang">
					<el-input v-model.number="ruleForm.shuliang" placeholder="数量" clearable  :readonly="ro.shuliang"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.wuzitupian" label="物资图片" prop="wuzitupian">
					<file-upload
						tip="点击上传物资图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.wuzitupian?ruleForm.wuzitupian:''"
						@change="wuzitupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.wuzitupian" label="物资图片" prop="wuzitupian">
					<img v-if="ruleForm.wuzitupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.wuzitupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.wuzitupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="调拨时间" prop="diaoboshijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.diaoboshijian" 
						type="date"
						:readonly="ro.diaoboshijian"
						placeholder="调拨时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.diaoboshijian" label="调拨时间" prop="diaoboshijian">
					<el-input v-model="ruleForm.diaoboshijian" placeholder="调拨时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="调拨地址" prop="diaobodizhi">
					<el-input v-model="ruleForm.diaobodizhi" placeholder="调拨地址" clearable  :readonly="ro.diaobodizhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="调拨地址" prop="diaobodizhi">
					<el-input v-model="ruleForm.diaobodizhi" placeholder="调拨地址" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="调拨原因" prop="diaoboyuanyin">
					<el-input v-model="ruleForm.diaoboyuanyin" placeholder="调拨原因" clearable  :readonly="ro.diaoboyuanyin"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="调拨原因" prop="diaoboyuanyin">
					<el-input v-model="ruleForm.diaoboyuanyin" placeholder="调拨原因" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="员工工号" prop="yuangonggonghao">
					<el-input v-model="ruleForm.yuangonggonghao" placeholder="员工工号" clearable  :readonly="ro.yuangonggonghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="员工工号" prop="yuangonggonghao">
					<el-input v-model="ruleForm.yuangonggonghao" placeholder="员工工号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="员工姓名" prop="yuangongxingming">
					<el-input v-model="ruleForm.yuangongxingming" placeholder="员工姓名" clearable  :readonly="ro.yuangongxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 20px 0","color":"inherit","borderRadius":"0px","display":"inline-block","width":"100%","fontSize":"inherit"}' v-else class="input" label="员工姓名" prop="yuangongxingming">
					<el-input v-model="ruleForm.yuangongxingming" placeholder="员工姓名" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"10px 0 20px","margin":"30px 0","alignItems":"center","textAlign":"left","display":"block","width":"100%","clear":"both","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					保存
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
import { 
	isIntNumer,
} from "@/utils/validate";
export default {
	data() {
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				diaobodanhao : false,
				wuzimingcheng : false,
				wuzifenlei : false,
				guigexinghao : false,
				danwei : false,
				shuliang : false,
				wuzitupian : false,
				diaoboshijian : false,
				diaobodizhi : false,
				diaoboyuanyin : false,
				yuangonggonghao : false,
				yuangongxingming : false,
			},
			
			
			ruleForm: {
				diaobodanhao: this.getUUID(),
				wuzimingcheng: '',
				wuzifenlei: '',
				guigexinghao: '',
				danwei: '',
				shuliang: '',
				wuzitupian: '',
				diaoboshijian: '',
				diaobodizhi: '',
				diaoboyuanyin: '',
				yuangonggonghao: '',
				yuangongxingming: '',
			},
		

			
			rules: {
				diaobodanhao: [
				],
				wuzimingcheng: [
				],
				wuzifenlei: [
				],
				guigexinghao: [
				],
				danwei: [
				],
				shuliang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				wuzitupian: [
				],
				diaoboshijian: [
				],
				diaobodizhi: [
				],
				diaoboyuanyin: [
				],
				yuangonggonghao: [
				],
				yuangongxingming: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.diaoboshijian = this.getCurDate()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='diaobodanhao'){
							this.ruleForm.diaobodanhao = obj[o];
							this.ro.diaobodanhao = true;
							continue;
						}
						if(o=='wuzimingcheng'){
							this.ruleForm.wuzimingcheng = obj[o];
							this.ro.wuzimingcheng = true;
							continue;
						}
						if(o=='wuzifenlei'){
							this.ruleForm.wuzifenlei = obj[o];
							this.ro.wuzifenlei = true;
							continue;
						}
						if(o=='guigexinghao'){
							this.ruleForm.guigexinghao = obj[o];
							this.ro.guigexinghao = true;
							continue;
						}
						if(o=='danwei'){
							this.ruleForm.danwei = obj[o];
							this.ro.danwei = true;
							continue;
						}
						if(o=='shuliang'){
							this.ruleForm.shuliang = obj[o];
							this.ro.shuliang = true;
							continue;
						}
						if(o=='wuzitupian'){
							this.ruleForm.wuzitupian = obj[o];
							this.ro.wuzitupian = true;
							continue;
						}
						if(o=='diaoboshijian'){
							this.ruleForm.diaoboshijian = obj[o];
							this.ro.diaoboshijian = true;
							continue;
						}
						if(o=='diaobodizhi'){
							this.ruleForm.diaobodizhi = obj[o];
							this.ro.diaobodizhi = true;
							continue;
						}
						if(o=='diaoboyuanyin'){
							this.ruleForm.diaoboyuanyin = obj[o];
							this.ro.diaoboyuanyin = true;
							continue;
						}
						if(o=='yuangonggonghao'){
							this.ruleForm.yuangonggonghao = obj[o];
							this.ro.yuangonggonghao = true;
							continue;
						}
						if(o=='yuangongxingming'){
							this.ruleForm.yuangongxingming = obj[o];
							this.ro.yuangongxingming = true;
							continue;
						}
				}
				this.ruleForm.shuliang = 0
				this.ro.shuliang = false;
			}
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					var json = data.data;
					if(this.$storage.get("role")!="管理员") {
						this.ro.diaoboshijian = true;
					}
					if(((json.yuangonggonghao!=''&&json.yuangonggonghao) || json.yuangonggonghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yuangonggonghao = json.yuangonggonghao
						this.ro.yuangonggonghao = true;
					}
					if(((json.yuangongxingming!=''&&json.yuangongxingming) || json.yuangongxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yuangongxingming = json.yuangongxingming
						this.ro.yuangongxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `wuzidiaobo/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
		if(this.ruleForm.diaobodanhao) {
			this.ruleForm.diaobodanhao = String(this.ruleForm.diaobodanhao)
		}
	if(this.ruleForm.wuzitupian!=null) {
		this.ruleForm.wuzitupian = this.ruleForm.wuzitupian.replace(new RegExp(this.$base.url,"g"),"");
	}
var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
		  if(!this.ruleForm.shuliang){
			  this.$message.error("数量不能为空");
			  return
		  }
	      objcross.shuliang = objcross.shuliang - this.ruleForm.shuliang
	      if(objcross.shuliang<0){
				this.$message.error("数量不足");
				return
	      }
                }
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "wuzidiaobo/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `wuzidiaobo/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.wuzidiaoboCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
									this.$http({
										url: `${table}/update`,
										method: "post",
										data: objcross
									}).then(({ data }) => {});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `wuzidiaobo/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$http({
						url: `${table}/update`,
						method: "post",
						data: objcross
					}).then(({ data }) => {});
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.wuzidiaoboCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.wuzidiaoboCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    wuzitupianUploadChange(fileUrls) {
	    this.ruleForm.wuzitupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 600;
	  	  display: inline-block;
	  	  width: 180px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  padding: 0 10px 0 30px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 32px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  cursor: pointer;
	  	  color: #c0cfdc;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e1e8ee;
	  	  line-height: 90px;
	  	  border-radius: 16px;
	  	  background: #f5f8fa;
	  	  width: 90px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  color: #c0cfdc;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e1e8ee;
	  	  line-height: 90px;
	  	  border-radius: 16px;
	  	  background: #f5f8fa;
	  	  width: 90px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  color: #c0cfdc;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #e1e8ee;
	  	  line-height: 90px;
	  	  border-radius: 16px;
	  	  background: #f5f8fa;
	  	  width: 90px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  padding: 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #e1e8ee;
	  	  min-height: 120px;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #f5f8fa;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 550px;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid rgba(53, 184, 224, 0.1);
				cursor: pointer;
				padding: 0 10px;
				margin: 0px 4px;
				color: #fff;
				display: inline-block;
				font-size: 12px;
				line-height: 24px;
				border-radius: 2px;
				outline: none;
				background: #03a9f4;
				width: auto;
				height: 26px;
			}
	
	.add-update-preview .btn .btn1:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 1px solid rgba(24, 138, 226, 0.1) ;
				cursor: pointer;
				border-radius: 2px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #6c757d;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn2:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 0px solid #0260ad;
				cursor: pointer;
				border-radius: 2px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #78bcee;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn3:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 2px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #7dc855;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn4:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 1;
			}
	
	.add-update-preview .btn .btn5 {
				border: 0px solid rgba(114, 123, 132, 0.1);
				cursor: pointer;
				border-radius: 2px;
				padding: 0 20px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #fcce54;
				width: auto;
				font-size: 12px;
				line-height: 24px;
				height: 26px;
			}
	
	.add-update-preview .btn .btn5:hover {
				box-shadow: 0px 0px 9px #ccc;
				transform: translate3d(0px, 0px, 0px);
				opacity: 1;
			}
</style>
