# i18n批量翻译JSON工具 (基于百度翻译API)

### 安装运行项目
```
npm install

npm run serve
```

### 注意：
  1. 暂不支持多层嵌套，如有需要可自行修改源码
  2. 此项目基于百度API，启动后请先配置开发者信息
  3. 本项目只是i18n插件使用的语言json数据批量翻译，请勿build运行线上，翻译格式如下：
```
{
  "apple": "apple",
  "orange": "橘子",
  "other": ""
}
```
