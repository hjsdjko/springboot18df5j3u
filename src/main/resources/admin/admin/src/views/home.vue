<template>
<div class="content" :style='{"minHeight":"100vh","padding":"20px 30px 20px 0","alignItems":"flex-start","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231111/6dd5b058a7d54101b882572ff4a4142a.png) no-repeat center top / cover","display":"block","fontSize":"14px","height":"auto"}'>
	<!-- notice -->
	<!-- title -->
	<div class="text" :style='{"margin":"0px auto 40px","color":"rgb(51, 51, 51)","textAlign":"center","display":"block","width":"100%","fontSize":"28px","fontWeight":"600"}'>欢迎使用 {{this.$project.projectName}}</div>
	<!-- statis -->
	<div :style='{"border":"0px solid #bababa","padding":"0","margin":"10px 0 20px","alignItems":"flex-start","color":"#333","display":"block","justifyContent":"center","overflow":"hidden","borderRadius":"0px","flexWrap":"wrap","background":"none","width":"100%","fontSize":"14px","order":"0"}'>
		<div :style='{"padding":"20px","margin":"0 1% 12px 0","borderColor":"#e7e8f8","alignItems":"flex-end","textAlign":"center","display":"flex","float":"left","justifyContent":"center","minHeight":"168px","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"19%","position":"relative","borderStyle":"solid"}' v-if="isAuth('wuzikucun','首页总数')">
			<div :style='{"alignItems":"center","borderRadius":"0","top":"50px","left":"0","background":"none","display":"flex","width":"100%","position":"absolute","justifyContent":"center","height":"auto"}'>
				<span class="icon iconfont icon-qita3" :style='{"color":"#86929e","fontSize":"58px"}'></span>
			</div>
			<div :style='{"margin":"0","alignItems":"center","textAlign":"left","flexDirection":"column-reverse","background":"none","display":"block","width":"auto","justifyContent":"center"}'>
				<div :style='{"padding":"0 10px","margin":"0 auto","color":"#fff","borderRadius":"30px","textAlign":"center","background":"#ed5564","width":"auto","lineHeight":"26px","fontSize":"14px","minWidth":"80px","height":"auto"}'>{{wuzikucunCount}}</div>
				<div :style='{"margin":"0px 0","color":"#98a6ad","top":"20px","left":"0","textAlign":"center","width":"100%","lineHeight":"24px","fontSize":"13px","position":"absolute","height":"24px"}'>物资库存总数</div>
			</div>
		</div>
		<div :style='{"padding":"20px","margin":"0 1% 12px 0","borderColor":"#e7f8f8","alignItems":"flex-end","textAlign":"center","display":"flex","float":"left","justifyContent":"center","minHeight":"168px","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"19%","position":"relative","borderStyle":"solid"}' v-if="isAuth('wuziruku','首页总数')">
			<div :style='{"alignItems":"center","top":"50px","left":"0","background":"none","display":"flex","width":"100%","position":"absolute","justifyContent":"center","height":"auto"}'>
				<span class="icon iconfont icon-qita20" :style='{"color":"#86929e","fontSize":"58px"}'></span>
			</div>
			<div :style='{"margin":"0","alignItems":"flex-end","textAlign":"left","flexDirection":"column","display":"block","width":"auto","justifyContent":"center"}'>
				<div :style='{"padding":"0 10px","margin":"0 auto","color":"#fff","borderRadius":"30px","textAlign":"center","background":"#7dc855","lineHeight":"26px","fontSize":"14px","minWidth":"80px","height":"auto"}'>{{wuzirukuCount}}</div>
				<div :style='{"margin":"0","color":"#98a6ad","top":"20px","textAlign":"center","left":"0","width":"100%","lineHeight":"24px","fontSize":"14px","position":"absolute","height":"24px"}'>物资入库总数</div>
			</div>
		</div>
		<div :style='{"padding":"20px","margin":"0 1% 12px 0","borderColor":"#e7f8e8","alignItems":"flex-end","textAlign":"center","display":"flex","float":"left","justifyContent":"center","minHeight":"168px","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"19%","position":"relative","borderStyle":"solid"}' v-if="isAuth('wuzichuku','首页总数')">
			<div :style='{"alignItems":"center","top":"50px","left":"0","background":"none","display":"flex","width":"100%","position":"absolute","justifyContent":"center","height":"auto"}'>
				<span class="icon iconfont icon-tijiaoyanzi" :style='{"color":"#86929e","fontSize":"58px"}'></span>
			</div>
			<div :style='{"margin":"0","alignItems":"flex-end","textAlign":"left","flexDirection":"column","display":"block","width":"auto","justifyContent":"center"}'>
				<div :style='{"padding":"0 10px","margin":"0 auto","color":"#fff","borderRadius":"30px","textAlign":"center","background":"#7dc855","lineHeight":"26px","fontSize":"14px","minWidth":"80px","height":"auto"}'>{{wuzichukuCount}}</div>
				<div :style='{"margin":"0","color":"#98a6ad","top":"20px","textAlign":"center","left":"0","width":"100%","lineHeight":"24px","fontSize":"14px","position":"absolute","height":"24px"}'>物资出库总数</div>
			</div>
		</div>
		<div :style='{"padding":"20px","margin":"0 1% 12px 0","borderColor":"#f8f8e6","alignItems":"flex-end","textAlign":"center","display":"flex","float":"left","justifyContent":"center","minHeight":"168px","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"19%","position":"relative","borderStyle":"solid"}' v-if="isAuth('wuzidiaobo','首页总数')">
			<div :style='{"alignItems":"center","top":"50px","left":"0","background":"none","display":"flex","width":"100%","position":"absolute","justifyContent":"center","height":"auto"}'>
				<span class="icon iconfont icon-huifu3" :style='{"color":"#86929e","fontSize":"58px"}'></span>
			</div>
			<div :style='{"margin":"0","alignItems":"flex-end","textAlign":"left","flexDirection":"column","display":"block","width":"auto","justifyContent":"center"}'>
				<div :style='{"padding":"0 10px","margin":"0 auto","color":"#fff","borderRadius":"30px","textAlign":"center","background":"#fcce54","lineHeight":"26px","fontSize":"14px","minWidth":"80px","height":"auto"}'>{{wuzidiaoboCount}}</div>
				<div :style='{"margin":"0","color":"#98a6ad","top":"20px","textAlign":"center","left":"0","width":"100%","lineHeight":"24px","fontSize":"14px","position":"absolute","height":"24px"}'>物资调拨总数</div>
			</div>
		</div>
		<div :style='{"padding":"20px","margin":"0 0 12px","borderColor":"#f8f3e8","alignItems":"flex-end","textAlign":"center","display":"flex","float":"left","justifyContent":"center","minHeight":"168px","borderRadius":"0px","background":"#fff","borderWidth":"0px","width":"20%","position":"relative","borderStyle":"solid"}' v-if="isAuth('wuzibaosun','首页总数')">
			<div :style='{"alignItems":"center","top":"50px","left":"0","background":"none","display":"flex","width":"100%","position":"absolute","justifyContent":"center","height":"auto"}'>
				<span class="icon iconfont icon-zhangjie8" :style='{"color":"#86929e","fontSize":"58px"}'></span>
			</div>
			<div :style='{"margin":"0","alignItems":"flex-end","textAlign":"left","flexDirection":"column","display":"block","width":"auto","justifyContent":"center"}'>
				<div :style='{"padding":"0 10px","margin":"0 auto","color":"#fff","borderRadius":"30px","textAlign":"center","background":"#7dc855","lineHeight":"26px","fontSize":"14px","minWidth":"80px","height":"auto"}'>{{wuzibaosunCount}}</div>
				<div :style='{"margin":"0","color":"#98a6ad","top":"20px","textAlign":"center","left":"0","width":"100%","lineHeight":"24px","fontSize":"14px","position":"absolute","height":"24px"}'>物资报损总数</div>
			</div>
		</div>
	</div>
	<!-- statis -->
	

	<!-- 日历 -->
	<div class="calendar" :style='{"border":"0px solid #bababa","margin":"20px 0 30px 0","borderRadius":"0px","color":"#737373","background":"none","width":"calc(100% - 0px)","clear":"both","fontSize":"inherit","height":"auto","order":"1"}'>
	  <div :style='{"padding":"12px 7%","borderColor":"#e1e8ee","color":"#666","borderRadius":"0px 0px 0 0","flexWrap":"wrap","background":"#fff","borderWidth":"0 0 1px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}'>
	    <div @click="pyear" :style='{"cursor":"pointer","border":"0px solid #999","padding":"0 12px 0 0","alignItems":"center","color":"inherit","borderRadius":"4px","background":"rgba(255,255,255,.0)","display":"flex","width":"auto","fontSize":"inherit","justifyContent":"center","height":"auto"}'><span class="icon iconfont icon-jiantou33" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span>上一年</div>
	    <div @click="pmonth" :style='{"cursor":"pointer","border":"0px solid #999","padding":"0 12px 0 0","alignItems":"center","color":"inherit","borderRadius":"4px","background":"rgba(86,178,198,.0)","display":"flex","width":"auto","fontSize":"inherit","justifyContent":"center","height":"auto"}'><span class="icon iconfont icon-jiantou33" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span>上一月</div>
	    <div :style='{"padding":"0 10px","fontSize":"18px","alignItems":"center","justifyContent":"center","display":"flex"}'>
	      <div :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'>{{this.year}}年</div>
	      <div :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'>{{this.month}}月</div>
	    </div>
	    <div @click="nmonth" :style='{"cursor":"pointer","border":"0px solid #999","padding":"0 0 0 12px","alignItems":"center","color":"inherit","borderRadius":"4px","background":"rgba(86,178,198,.0)","display":"flex","width":"auto","fontSize":"inherit","justifyContent":"center","height":"auto"}'>下一月<span class="icon iconfont icon-jiantou34" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span></div>
	    <div @click="nyear" :style='{"cursor":"pointer","border":"0px solid #999","padding":"0 0 0 12px","alignItems":"center","color":"inherit","borderRadius":"4px","background":"rgba(86,178,198,.0)","display":"flex","width":"auto","fontSize":"inherit","justifyContent":"center","height":"auto"}'>下一年<span class="icon iconfont icon-jiantou34" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"none"}'></span></div>
	  </div>
	  <table :style='{"border":"0px solid #eee","width":"100%","padding":"0px","borderRadius":"0 0 0px 0px","background":"rgba(255, 255, 255, .96)","height":"auto"}' v-if="this.weeks.length">
	    <thead :style='{"width":"100%","height":"auto"}'>
	      <tr :style='{"borderColor":"#eee","alignItems":"center","borderWidth":"0px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center"}'>
	        <th :style='{"alignItems":"center","color":"inherit","flex":1,"display":"flex","lineHeight":"30px","fontSize":"inherit","justifyContent":"center"}' v-for="item,index in this.heads" :key="index">{{item}}</th>
	      </tr>
	    </thead>
	    <tbody :style='{"width":"100%"}'>
	      <tr :style='{"width":"100%","alignItems":"center","justifyContent":"center","display":"flex"}' v-for="week,index in this.weeks" :key="index">
	        <td :style='{"cursor":"pointer","padding":"4px 12px 4px","flex":1,"display":"flex","height":"auto"}' v-for="day,key in week.days" :key="key" :class="{other: day.isOther, festival: day.isFestival, today: day.isToday, rest: day.isRest}">
	          <div class="text">
	            <div class="new">{{day.day}}</div>
	            <div class="old">{{day.text}}</div>
	          </div>
	        </td>
	      </tr>
	    </tbody>
	  </table>
	</div>
	
	<!-- echarts -->
	<!-- 5 -->
	<div class="type5" :style='{"alignContent":"flex-start","padding":"0","borderRadius":"8px","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative","justifyContent":"space-between","height":"auto","order":"3"}'>
		<div id="wuzikucunChart1" class="echarts1" v-if="isAuth('wuzikucun','首页统计')"></div>
		<div id="wuzirukuChart1" class="echarts2" v-if="isAuth('wuziruku','首页统计')"></div>
		<div id="wuzichukuChart1" class="echarts3" v-if="isAuth('wuzichuku','首页统计')"></div>
		<div id="wuzidiaoboChart1" class="echarts4" v-if="isAuth('wuzidiaobo','首页统计')"></div>
		<div id="wuzibaosunChart1" class="echarts5" v-if="isAuth('wuzibaosun','首页统计')"></div>
	</div>
</div>
</template>
<script>
//5
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            wuzikucunCount: 0,
            wuzirukuCount: 0,
            wuzichukuCount: 0,
            wuzidiaoboCount: 0,
            wuzibaosunCount: 0,
			// 日历
			year: 2023,
			month: 6,
			heads: ['一', '二', '三', '四', '五', '六', '日'],
			weeks: [],
			now: Solar.fromDate(new Date()),
			line: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":15,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#333","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#666","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(25,25,25,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#333","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(25,25,25,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":0,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#666","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"#333","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"80%","itemWidth":20,"textStyle":{"textBorderWidth":0,"color":"#333","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"showSymbol":true,"symbol":"emptyCircle","symbolSize":4},"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"title":{"borderType":"solid","padding":0,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#666","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#333","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":600,"textBorderColor":"#666","textShadowBlur":0},"shadowColor":"transparent"}},
			bar: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":12,"backgroundColor":"transparent","borderColor":"#666","shadowOffsetY":0,"color":"#333","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#666","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(25,25,25,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#333","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(25,25,25,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#00ff00","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":0,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#666","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"#333","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":"auto","top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"80%","itemWidth":20,"textStyle":{"textBorderWidth":0,"color":"#333","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"barWidth":"auto","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#666","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"colorBy":"data","barCategoryGap":"20%"},"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"title":{"borderType":"solid","padding":0,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#666","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#333","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":600,"textBorderColor":"#666","textShadowBlur":0},"shadowColor":"transparent"},"base":{"animate":false,"interval":2000}},
			pie: {"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"borderType":"solid","padding":0,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#666","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#333","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":600,"textBorderColor":"#666","textShadowBlur":0},"shadowColor":"transparent"},"legend":{"padding":0,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#666","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"inherit","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"right":0,"top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"80%","itemWidth":20,"textStyle":{"textBorderWidth":0,"color":"#333","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":12,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#666","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"label":{"borderType":"solid","rotate":0,"padding":0,"textBorderWidth":0,"backgroundColor":"transparent","borderColor":"#666","color":"#333","show":true,"textShadowColor":"transparent","distanceToLabelLine":5,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"fontSize":12,"lineHeight":18,"textShadowOffsetX":0,"position":"outside","textShadowOffsetY":0,"textBorderType":"solid","textBorderColor":"#666","textShadowBlur":0},"labelLine":{"show":true,"length":10,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"#333","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"#000"},"length2":14,"smooth":false}}},
			funnel: {"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"center","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#666","textShadowColor":"transparent","fontSize":14,"lineHeight":12,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"},"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"vertical","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"inherit","shadowOffsetY":0,"color":"inherit","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"transparent"},"top":"auto","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"left","borderWidth":0,"width":"auto","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"inherit","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":20,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"series":{"itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#000","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"label":{"borderType":"solid","rotate":0,"padding":0,"textBorderWidth":0,"backgroundColor":"transparent","borderColor":"#fff","color":"","show":true,"textShadowColor":"transparent","distanceToLabelLine":5,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"fontSize":12,"lineHeight":18,"textShadowOffsetX":0,"position":"outside","textShadowOffsetY":0,"textBorderType":"solid","textBorderColor":"#fff","textShadowBlur":0},"labelLine":{"show":true,"length":10,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"#000"},"length2":14,"smooth":false}}},
			boardBase: {"funnelNum":8,"lineNum":8,"gaugeNum":8,"barNum":8,"pieNum":8},
			gauge: {"tooltip":{"backgroundColor":"#123","textStyle":{"color":"#fff"}},"backgroundColor":"transparent","color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"title":{"top":"top","left":"left","textStyle":{"fontSize":14,"lineHeight":24,"color":"#666","fontWeight":600}},"series":{"pointer":{"offsetCenter":[0,"10%"],"icon":"path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z","width":8,"length":"80%"},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"opacity":0.5,"shadowBlur":1,"shadowColor":"#000"},"roundCap":true},"anchor":{"show":true,"itemStyle":{"color":"inherit"},"size":18,"showAbove":true},"emphasis":{"disabled":false},"progress":{"show":true,"roundCap":true,"overlap":true},"splitNumber":25,"detail":{"formatter":"{value}","backgroundColor":"inherit","color":"#fff","borderRadius":3,"width":20,"fontSize":12,"height":12},"title":{"fontSize":12},"animation":true}},
		};
	},
	mounted(){
		this.init();
		this.getwuzikucunCount();
		this.wuzikucunChat1();
		this.getwuzirukuCount();
		this.wuzirukuChat1();
		this.getwuzichukuCount();
		this.wuzichukuChat1();
		this.getwuzidiaoboCount();
		this.wuzidiaoboChat1();
		this.getwuzibaosunCount();
		this.wuzibaosunChat1();
	},
	methods:{
		// 统计图动画
		myChartInterval(type, xAxisData, seriesData, myChart) {
			this.$nextTick(() => {
				setInterval(() => {
					let xAxis = xAxisData.shift()
					xAxisData.push(xAxis)
					let series = seriesData.shift()
					seriesData.push(series)
				
					if (type == 1) {
						myChart.setOption({
							xAxis: [{
								data: xAxisData
							}],
							series: [{
								data: seriesData
							}]
						});
					}
					if (type == 2) {
						myChart.setOption({
							yAxis: [{
								data: xAxisData
							}],
							series: [{
								data: seriesData
							}]
						});
					}
				}, 2000);
			})
		},
		init(){
			if(this.$storage.get('Token')){
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code != 0) {
				router.push({ name: 'login' })
				}
			});
			}else{
				router.push({ name: 'login' })
			}
			this.$nextTick(() => {
				// --- 日历 ---
				this.year = this.now.getYear()
				this.month = this.now.getMonth()
				this.weeks = this.render(this.year, this.month);
			})
		},
		// 日历
		nyear() {
			this.year = this.year + 1
			this.weeks = this.render(this.year, this.month)
		},
		pyear() {
			this.year = this.year - 1
			this.weeks = this.render(this.year, this.month)
		},
		nmonth() {
			this.month = this.month + 1
			if (this.month > 12) {
				this.month = 1
				this.year = this.year + 1
			}
			this.weeks = this.render(this.year, this.month)
		},
		pmonth() {
			this.month = this.month - 1
			if (this.month < 1) {
				this.month = 12
				this.year = this.year - 1
			}
			this.weeks = this.render(this.year, this.month)
		},
		// 日历
		render(year, month, weekStart = 1) {
			let months = SolarMonth.fromYm(year, month)
			let weeks = []
		
			months.getWeeks(weekStart).forEach(w => {
				let week = {
					index: 0,
					days: []
				}
				week.index = w.getIndexInYear()
				let days = []
				w.getDays().forEach(d => {
					days.push(this.buildDay(d, month))
				})
				week.days = days
				weeks.push(week)
			})
			return weeks
		},
		buildDay(d, month) {
			let lunar = d.getLunar()
			let day = {
				day: 0,
				text: '',
				isFestival: false,
				isToday: false,
				isOther: false,
				isHoliday: false,
				isRest: false
			}
			day.day = d.getDay()
			let text = lunar.getDayInChinese()
			if (1 === d.getDay()) {
				text = lunar.getMonthInChinese() + '月'
			}
			// let otherFestivals = d.getOtherFestivals()
			// if (otherFestivals.length > 0) {
			// 	text = otherFestivals[0]
			// 	day.isFestival = true
			// }
			// otherFestivals = lunar.getOtherFestivals()
			// if (otherFestivals.length > 0) {
			// 	text = otherFestivals[0]
			// 	day.isFestival = true
			// }
			let festivals = d.getFestivals()
			if (festivals.length > 0) {
				text = festivals[0]
				day.isFestival = true
			}
			festivals = lunar.getFestivals()
			if (festivals.length > 0) {
				text = festivals[0]
				day.isFestival = true
			}
			let jq = lunar.getJieQi()
			if (jq) {
				text = jq
				day.isFestival = true
			}
			day.text = text
			if (d.toYmd() === this.now.toYmd()) {
				day.isToday = true
			}
			if (d.getMonth() !== month) {
				day.isOther = true
			}
			let h = HolidayUtil.getHoliday(d.getYear(), d.getMonth(), d.getDay())
			if (h) {
				day.isHoliday = true
				day.isRest = !h.isWork()
			}
			return day
		},
		// 日历
		getwuzikucunCount() {
			this.$http({
				url: `wuzikucun/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.wuzikucunCount = data.data
				}
			})
		},
		wuzikucunChat1() {
			this.$nextTick(()=>{

        var wuzikucunChart1 = echarts.init(document.getElementById("wuzikucunChart1"),'macarons');
        this.$http({
            url: `wuzikucun/value/wuzimingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
					if(this.boardBase&&i==this.boardBase.pieNum){
						break;
					}
                    xAxis.push(res[i].wuzimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].wuzimingcheng
                    })
                }
                var option = {};
				let titleObj = this.pie.title
				titleObj.text = '库存数量'
				
				const legendObj = this.pie.legend
				let tooltipObj = {trigger: 'item',formatter: '{b} : {c} ({d}%)'}
				tooltipObj = Object.assign(tooltipObj , this.pie.tooltip?this.pie.tooltip:{})
				
				let seriesObj = {
					type: 'pie',
					radius: ['25%', '55%'],
					center: ['50%', '60%'],
					data: pArray,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
				seriesObj = Object.assign(seriesObj , this.pie.series)
				const gridObj = this.pie.grid
                option = {
                	backgroundColor: this.pie.backgroundColor,
                	color: this.pie.color,
                	title: titleObj,
                	legend: legendObj,
					grid: gridObj,
                	tooltip: tooltipObj,
                	series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                wuzikucunChart1.setOption(option);
				
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    wuzikucunChart1.resize();
                };
            }
        });
      })
    },


		getwuzirukuCount() {
			this.$http({
				url: `wuziruku/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.wuzirukuCount = data.data
				}
			})
		},
		wuzirukuChat1() {
			this.$nextTick(()=>{

        var wuzirukuChart1 = echarts.init(document.getElementById("wuzirukuChart1"),'macarons');
        this.$http({
            url: `wuziruku/value/wuzimingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
					if(this.boardBase&&i==this.boardBase.barNum){
						break;
					}
                    xAxis.push(res[i].wuzimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].wuzimingcheng
                    })
                }
                var option = {};
				let titleObj = this.bar.title
				titleObj.text = '入库统计'
				
				const legendObj = this.bar.legend
				let tooltipObj = {trigger: 'item',formatter: '{b} : {c}'}
				tooltipObj = Object.assign(tooltipObj , this.bar.tooltip?this.bar.tooltip:{})
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=30
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				let seriesObj = {
					data: yAxis,
					type: 'bar'
				}
				seriesObj = Object.assign(seriesObj , this.bar.series)
				const gridObj = this.bar.grid
				
                option = {
                    backgroundColor: this.bar.backgroundColor,
                    color: this.bar.color,
                    title: titleObj,
                    legend: legendObj,
					grid: gridObj,
                    tooltip: tooltipObj,
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                wuzirukuChart1.setOption(option);
				
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    wuzirukuChart1.resize();
                };
            }
        });
      })
    },


		getwuzichukuCount() {
			this.$http({
				url: `wuzichuku/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.wuzichukuCount = data.data
				}
			})
		},
		wuzichukuChat1() {
			this.$nextTick(()=>{

        var wuzichukuChart1 = echarts.init(document.getElementById("wuzichukuChart1"),'macarons');
        this.$http({
            url: `wuzichuku/value/wuzimingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
					if(this.boardBase&&i==this.boardBase.barNum){
						break;
					}
                    xAxis.push(res[i].wuzimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].wuzimingcheng
                    })
                }
                var option = {};
				let titleObj = this.bar.title
				titleObj.text = '出库统计'
				
				const legendObj = this.bar.legend
				let tooltipObj = {trigger: 'item',formatter: '{b} : {c}'}
				tooltipObj = Object.assign(tooltipObj , this.bar.tooltip?this.bar.tooltip:{})
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=30
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				let seriesObj = {
					data: yAxis,
					type: 'bar'
				}
				seriesObj = Object.assign(seriesObj , this.bar.series)
				const gridObj = this.bar.grid
				
                option = {
                    backgroundColor: this.bar.backgroundColor,
                    color: this.bar.color,
                    title: titleObj,
                    legend: legendObj,
					grid: gridObj,
                    tooltip: tooltipObj,
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                wuzichukuChart1.setOption(option);
				
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    wuzichukuChart1.resize();
                };
            }
        });
      })
    },


		getwuzidiaoboCount() {
			this.$http({
				url: `wuzidiaobo/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.wuzidiaoboCount = data.data
				}
			})
		},
		wuzidiaoboChat1() {
			this.$nextTick(()=>{

        var wuzidiaoboChart1 = echarts.init(document.getElementById("wuzidiaoboChart1"),'macarons');
        this.$http({
            url: `wuzidiaobo/value/wuzimingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
					if(this.boardBase&&i==this.boardBase.lineNum){
						break;
					}
                    xAxis.push(res[i].wuzimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].wuzimingcheng
                    })
                }
                var option = {};
				let titleObj = this.line.title
				titleObj.text = '调拨统计'
				
				const legendObj = this.line.legend
				let tooltipObj = { trigger: 'item',formatter: '{b} : {c}'}
				tooltipObj = Object.assign(tooltipObj , this.line.tooltip?this.line.tooltip:{})
				let xAxisObj = this.line.xAxis
				xAxisObj.type = 'category'
				xAxisObj.boundaryGap = false
				xAxisObj.data = xAxis
				xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.line.yAxis
				yAxisObj.type = 'value'
				const gridObj = this.line.grid
				
				let seriesObj = {
					data: yAxis,
					type: 'line',
				}
				seriesObj = Object.assign(seriesObj , this.line.series)
                option = {
					backgroundColor: this.line.backgroundColor,
					color: this.line.color,
                    title: titleObj,
					legend: legendObj,
					grid: gridObj,
                    tooltip: tooltipObj,
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                wuzidiaoboChart1.setOption(option);
				
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    wuzidiaoboChart1.resize();
                };
            }
        });
      })
    },


		getwuzibaosunCount() {
			this.$http({
				url: `wuzibaosun/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.wuzibaosunCount = data.data
				}
			})
		},
		wuzibaosunChat1() {
			this.$nextTick(()=>{

        var wuzibaosunChart1 = echarts.init(document.getElementById("wuzibaosunChart1"),'macarons');
        this.$http({
            url: `wuzibaosun/value/wuzimingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
					if(this.boardBase&&i==this.boardBase.lineNum){
						break;
					}
                    xAxis.push(res[i].wuzimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].wuzimingcheng
                    })
                }
                var option = {};
				let titleObj = this.line.title
				titleObj.text = '报损统计'
				
				const legendObj = this.line.legend
				let tooltipObj = { trigger: 'item',formatter: '{b} : {c}'}
				tooltipObj = Object.assign(tooltipObj , this.line.tooltip?this.line.tooltip:{})
				let xAxisObj = this.line.xAxis
				xAxisObj.type = 'category'
				xAxisObj.boundaryGap = false
				xAxisObj.data = xAxis
				xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.line.yAxis
				yAxisObj.type = 'value'
				const gridObj = this.line.grid
				
				let seriesObj = {
					data: yAxis,
					type: 'line',
				}
				seriesObj = Object.assign(seriesObj , this.line.series)
                option = {
					backgroundColor: this.line.backgroundColor,
					color: this.line.color,
                    title: titleObj,
					legend: legendObj,
					grid: gridObj,
                    tooltip: tooltipObj,
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                wuzibaosunChart1.setOption(option);
				
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    wuzibaosunChart1.resize();
                };
            }
        });
      })
    },


  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	
	// 日历
	.calendar td .text {
				border: 0px solid rgba(93, 213, 200, .2);
				border-radius: 0px;
				flex-direction: column;
				color: #888;
				background: #e1e8ee50;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td .text:hover {
				background: #e1e8ee50;
			}
	.calendar td .text .new {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td .text .old {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.festival .text {
				border: 0px solid rgba(93, 213, 200, .1);
				border-radius: 0px;
				flex-direction: column;
				color: #333;
				background: #7dc85550;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.festival .text:hover {
				background: #7dc85550;
			}
	.calendar td.festival .text .new {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.festival .text .old {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.other .text {
				border-radius: 20px;
				flex-direction: column;
				background: none;
				display: flex;
				width: 100%;
				font-size: inherit;
				justify-content: center;
				align-items: center;
				opacity: 0.6;
				height: 100%;
			}
	.calendar td.other .text:hover {
				background: none;
			}
	.calendar td.other .text .new {
				color: #000;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.other .text .old {
				color: #666;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.today .text {
				border-radius: 0px;
				flex-direction: column;
				color: #fff;
				background: #7dc855;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.today .text:hover {
				background: #7dc855;
			}
	.calendar td.today .text .new {
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.today .text .old {
				font-size: inherit;
				line-height: 1.4;
			}
	
	// echarts1
	.type1 .echarts1 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0 0 30px;
				background: rgba(255,255,255,1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type1 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts2
	.type2 .echarts1 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type2 .echarts2 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts3
	.type3 .echarts1 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0 0 30px;
				color: #333;
				background: rgba(255,255,255,.96);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type3 .echarts2 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type3 .echarts3 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0 0 30px;
				background: rgba(255,255,255,1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts3:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts4
	.type4 .echarts1 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type4 .echarts2 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type4 .echarts3 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts3:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type4 .echarts4 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts4:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts5
	.type5 .echarts1 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,.96);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts1:hover {
				box-shadow: 0 1px 10px 1px rgba(115,108,203,.1);
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts2 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts3 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts3:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts4 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts4:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts5 {
				border: 0px solid #bababa;
				border-radius: 0px;
				padding: 10px;
				margin: 0px 0 30px;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts5:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	
	.echarts-flag-2 {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  padding: 10px 20px;
	  background: rebeccapurple;
	
	  &>div {
	    width: 32%;
	    height: 300px;
	    margin: 10px 0;
	    background: rgba(255,255,255,.1);
	    border-radius: 8px;
	    padding: 10px 20px;
	  }
	}
</style>
