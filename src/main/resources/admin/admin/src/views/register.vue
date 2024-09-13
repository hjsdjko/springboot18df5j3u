<template>
	<div>
		<canvas id="canvas" style="background:url(http://codegen.caihongy.cn/20231205/effa942022fc46139846734808456f46.png)"></canvas>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231205/effa942022fc46139846734808456f46.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"1px solid #d4d5d7","padding":"20px 100px 40px","margin":"20px auto","alignItems":"flex-start","textAlign":"center","display":"block","justifyContent":"flex-start","borderRadius":"8px","flexWrap":"wrap","background":"#fcfdff","width":"450px","position":"relative","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"0 0 10px","margin":"0 0 10px","borderColor":"#d8ae86","color":"#545655","textAlign":"center","display":"inline-block","background":"none","borderWidth":"0 0 0px","width":"100%","lineHeight":"40px","fontSize":"24px","borderStyle":"solid","fontWeight":"500"}' class="title">拖恒ERP-物资管理注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 20px 0","textAlign":"left","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yuangong'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('yuangonggonghao')?'required':''">员工工号：</div>
					<el-input  v-model="ruleForm.yuangonggonghao"  autocomplete="off" placeholder="员工工号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 20px 0","textAlign":"left","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yuangong'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 20px 0","textAlign":"left","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yuangong'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 20px 0","textAlign":"left","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yuangong'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('yuangongxingming')?'required':''">员工姓名：</div>
					<el-input  v-model="ruleForm.yuangongxingming"  autocomplete="off" placeholder="员工姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 20px 0","textAlign":"left","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yuangong'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yuangongxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 20px 0","textAlign":"left","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yuangong'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('dianhua')?'required':''">电话：</div>
					<el-input  v-model="ruleForm.dianhua"  autocomplete="off" placeholder="电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 20px 0","textAlign":"left","flexWrap":"wrap","display":"flex","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yuangong'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yuangongtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0px solid #4FA1D9","cursor":"pointer","padding":"0 24px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px 0px 0 0","color":"#fff","display":"inline-block","letterSpacing":"4px","float":"left","outline":"none","borderRadius":"4px","background":"#0e88eb","width":"250px","fontSize":"16px","height":"40px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"0px 0 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"250px","lineHeight":"44px","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
import canvasBg from "@/assets/js/canvas-bg-2.js"
import "@/assets/css/canvas-bg-2.css"
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yuangongxingbieOptions: [],
		};
	},
	mounted(){
		this.$nextTick(() => {
			canvasBg()
		})
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yuangong'){
				this.ruleForm = {
					yuangonggonghao: '',
					mima: '',
					yuangongxingming: '',
					xingbie: '',
					dianhua: '',
					touxiang: '',
				}
			}
			if ('yuangong' == this.tableName) {
				this.rules.yuangonggonghao = [{ required: true, message: '请输入员工工号', trigger: 'blur' }]
			}
			if ('yuangong' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yuangong' == this.tableName) {
				this.rules.yuangongxingming = [{ required: true, message: '请输入员工姓名', trigger: 'blur' }]
			}
			this.yuangongxingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  		      this.$nextTick(() => {
		        canvasBg = null
		      })
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yuangongtouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yuangonggonghao) && `yuangong` == this.tableName){
						this.$message.error(`员工工号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `yuangong` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yuangong` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.yuangongxingming) && `yuangong` == this.tableName){
						this.$message.error(`员工姓名不能为空`);
						return
					}
					if(`yuangong` == this.tableName && this.ruleForm.dianhua &&(!this.$validate.isMobile(this.ruleForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: none !important;

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						color: #666;
						background: none;
						width: 250px;
						font-size: 14px;
						border-color: #d4d5d7;
						border-width: 0 0 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						color: #666;
						background: none;
						width: 250px;
						font-size: 14px;
						border-color: #d4d5d7;
						border-width: 0 0 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						margin: 0 0 10px;
						color: #666;
						background: none;
						width: 250px;
						font-size: 14px;
						border-color: #d4d5d7;
						border-width: 0 0 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						margin: 0 0 10px;
						color: #666;
						background: none;
						width: 250px;
						font-size: 14px;
						border-color: #d4d5d7;
						border-width: 0 0 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #d4d5d6;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  margin: 10px 0 0;
		  		  color: #adadad;
		  		  background: none;
		  		  font-weight: 600;
		  		  width: 90px;
		  		  font-size: 18px;
		  		  line-height: 44px;
		  		  text-align: center;
		  		  height: 44px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #d4d5d6;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  margin: 10px 0 0;
		  		  color: #adadad;
		  		  background: none;
		  		  font-weight: 600;
		  		  width: 90px;
		  		  font-size: 18px;
		  		  line-height: 44px;
		  		  text-align: center;
		  		  height: 44px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #d4d5d6;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  margin: 10px 0 0;
		  		  color: #adadad;
		  		  background: none;
		  		  font-weight: 600;
		  		  width: 90px;
		  		  font-size: 18px;
		  		  line-height: 44px;
		  		  text-align: center;
		  		  height: 44px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				position: absolute;
				right: 3px;
				content: "*";
				order: 3;
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
