# 书评阅读 APP

一个专注于书籍发现、阅读和分享的移动端应用。

## 技术栈

- React 18
- TypeScript 5
- Vite 5
- Tailwind CSS 3
- React Router 6
- Lucide React（图标库）

## 功能特性

- 🔐 用户登录/注册
- 🏠 首页推荐书籍浏览
- 📚 书籍详情查看
- 🔍 搜索与发现
- ✍️ 写书评
- 👤 个人中心

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

### 部署到 GitHub Pages

1. 先修改 `vite.config.ts` 中的 `base` 为你的仓库名
2. 运行 `npm run build`
3. 运行 `npm run deploy`

## 项目结构

```
src/
├── components/       # 公共组件
├── context/        # 状态管理
├── mock/         # 模拟数据
├── pages/        # 页面组件
├── router/       # 路由配置
├── App.tsx
├── main.tsx
└── index.css
```

## 页面说明

1. `/login` - 登录页
2. `/home` - 首页
3. `/book/:id` - 书籍详情页
4. `/discover` - 搜索与发现页
5. `/profile` - 个人中心
6. `/review` - 写书评页
