# 宠爱康复中心 - Node.js 项目

## 项目简介

本项目是宠爱康复中心的官网，采用 Node.js + Express 框架构建。

## 技术栈

- **运行时**: Node.js
- **框架**: Express.js
- **静态资源**: public 目录

## 项目结构

```
pets_care/
├── package.json          # 项目依赖配置
├── server.js            # Express 服务器入口
└── public/              # 静态资源目录
    └── index.html       # 网站首页
```

## 启动步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 启动服务器

```bash
npm start
```

或

```bash
node server.js
```

### 3. 访问网站

服务器启动后，打开浏览器访问: http://localhost:3000

## 功能特性

- 静态文件服务
- 健康检查接口: http://localhost:3000/api/health
- 响应式网页设计
- 服务项目轮播图
- 客户评价展示
- 在线预约表单

## 注意事项

- 确保 Node.js 版本 >= 14.0.0
- 默认端口为 3000，如需修改请编辑 server.js 中的 PORT 常量