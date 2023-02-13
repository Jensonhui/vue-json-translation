<template>
	<div id="app" class="page-wrap">
		<div class="title-line">
			<h3>i18n批量翻译JSON工具 (仅支持一维数列格式)</h3>
			<el-button type="warning" size="mini" icon="el-icon-s-tools" @click="showVisible = true">配置</el-button>
		</div>

		<el-row class="top" type="flex" justify="space-between">
			<el-col :span="10">
				<textarea v-model="oldJsonText" class="input-textarea" @input="onTypeInHandle"
					placeholder="请输入要翻译的JSON数据(可参考右侧格式)" />
			</el-col>

			<el-col :span="2">
				<p><el-radio v-model="rSwitch" label="key">翻译key</el-radio></p>
				<p><el-radio v-model="rSwitch" label="value">翻译Value</el-radio></p>
			</el-col>

			<el-col :span="10">
				<pre class="to-json" v-html="newJson" />
			</el-col>
		</el-row>

		<el-row class="info-alert">
			<el-alert show-icon :closable="false" title="如果所有单词都未翻译，请检查appid或key配置是否正确，或者查看F12 ->Network定位错误原因" />
		</el-row>

		<el-row :gutter="20">
			<el-col :span="3" v-for="item in navList" :key="item.code">
				<el-button type="primary" @click="onSetTranslateRequest(item.code)">
					{{ item.name }}
				</el-button>
			</el-col>
		</el-row>

		<el-card class="card-tips" shadow="never">
			<div slot="header">相关工具链接：</div>
			<a v-for="(item, index) in toolNav" :key="index" :href="item.href" target="_blank">
				{{ item.name }}
			</a>
		</el-card>

		<!-- 配置appid和key -->
		<el-dialog title="API配置" :visible.sync="showVisible">
			<el-form :model="form" :rules="rules" ref="formRef">
				<el-form-item label="appid" label-width="80px" prop="appid">
					<el-input v-model="form.appid" autocomplete="off" />
				</el-form-item>

				<el-form-item label="key" label-width="80px" prop="key">
					<el-input v-model="form.key" autocomplete="off" />
				</el-form-item>
			</el-form>

			<div class="tips">
				<p>
					1、注册百度翻译开放平台账号
					<a href="https://api.fanyi.baidu.com/" target="_blank"> https://api.fanyi.baidu.com/</a>,并进行实名认证
				</p>
				<p>2、开通通用翻译API服务 <a href="https://fanyi-api.baidu.com/choose" target="_blank">开通链接</a></p>
				<p>3、在<a href="https://api.fanyi.baidu.com/manage/developer" target="_blank">开发者中心</a>,
					设置通用翻译服务信息的服务器地址，填写成<a href="https://ip.cn/" target="_blank">本机网络IP</a></p>
			</div>

			<div slot="footer" class="dialog-footer">
				<el-button @click="showVisible = false">取 消</el-button>
				<el-button type="primary" @click="confirmHandle">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import qs from 'qs'
import md5 from 'md5'
import { getSpecifiedName, isJSON, deepClone, transformName, setItem, getItem } from './utils/common.js'

const users = '__userConfig__'

const navList = [
	{
		code: 'zh',
		name: '翻译中文'
	},
	{
		code: 'en',
		name: '翻译英文'
	},
	{
		code: 'kor',
		name: '翻译韩语'
	},
	{
		code: 'jp',
		name: '翻译日语'
	},
	{
		code: 'ru',
		name: '翻译俄语'
	},
	{
		code: 'th',
		name: '翻译泰语'
	},
	{
		code: 'cht',
		name: '翻译繁体中文'
	}
]

const toolNav = [
	{
		name: '本机网络IP查询',
		href: 'https://ip.cn/'
	},
	{
		name: '百度翻译开放平台',
		href: 'https://api.fanyi.baidu.com/'
	},
	{
		name: '有效JSON检测工具',
		href: 'https://www.json.cn/json/jsononline.html'
	}
]

export default {
	name: 'app',
	data () {
		const config = {
			appid: "",
			key: "",
		}

		const configRules = {
			appid: [{ required: true, message: '请输入APPID', trigger: 'blur' }],
			key: [{ required: true, message: '请输入KEY', trigger: 'blur' }],
		}

		return {
			rSwitch: 'key',
			showVisible: false,
			navList: navList,
			toolNav: toolNav,
			oldJson: null,
			newJson: null,
			oldJsonText: null,
			form: config,
			rules: configRules
		}
	},
	created () {
		this.newJson = {
			"apple": "apple",
			"orange": "橘子",
			"other": ""
		}

		const hasUser = getItem(users)
		hasUser && (this.form = hasUser)
	},
	methods: {
		// 检测是否合法JSON
		onTypeInHandle () {
			if (!this.oldJsonText) {
				return false
			}

			const isJson = isJSON(this.oldJsonText) || false
			this.oldJson = isJson ? JSON.parse(this.oldJsonText) : false
		},

		// 提交翻译
		onSetTranslateRequest (type) {
			const { rSwitch, oldJson } = this
			const { appid, key } = this.form
			if (!appid || !key) {
				this.showVisible = true
				return false
			}

			if (!oldJson || JSON.stringify(oldJson) === "{}") {
				this.$message.error("JSON格式不合法, 请检查待翻译的JSON数据")
				return false
			}

			const salt = (new Date).getTime()
			const isGetKey = rSwitch === 'key'
			const queryList = getSpecifiedName(isGetKey, oldJson)
			const signQuery = queryList.reduce((a, b) => (a + b + '\n'), '')

			const sign = md5(appid + signQuery + salt + key)
			const queryPrarms = qs.stringify({
				q: signQuery,
				from: "auto",
				to: type,
				appid: appid,
				salt: salt,
				sign: sign
			})

			const https = new XMLHttpRequest()
			https.open('POST', '/api/trans/vip/translate', true)
			https.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

			https.onerror = error => { this.newJson = error }
			https.onreadystatechange = () => {
				if (https.readyState === 4 && https.status === 200) {
					const { trans_result } = JSON.parse(https.responseText)
					const transLen = trans_result.length
					const params = deepClone(this.oldJson)

					if (isGetKey) {
						const computedData = {}
						for (let i = 0; i < transLen; i++) {
							const { src, dst } = trans_result[i]
							const trnasDst = transformName(dst)
							for (const key in params) {
								if (key === src) {
									computedData[trnasDst] = key
									break
								}
							}
						}

						this.newJson = computedData
					} else {
						for (let i = 0; i < transLen; i++) {
							const { src, dst } = trans_result[i]
							for (const key in params) {
								if (params[key] === src) {
									params[key] = transformName(dst)
									break
								}
							}
						}

						this.newJson = params
					}
				}
			}

			https.send(queryPrarms)
		},

		// 配置开发者信息
		confirmHandle () {
			this.$refs.formRef.validate(valid => {
				if (valid) {
					setItem(users, this.form)
					this.showVisible = false;
				} else {
					return false;
				}
			});
		}
	}
}
</script>

<style>
@import './assets/translation.css';
</style>
