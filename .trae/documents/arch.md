
# 书评阅读APP - 技术架构文档

## 1. Architecture Design

```mermaid
graph TD
    A[用户界面] --&gt; B[React组件层]
    B --&gt; C[状态管理层]
    C --&gt; D[模拟数据层]
    B --&gt; E[路由层]
    style A fill:#4A90E2,color:#fff
    style B fill:#5DADE2,color:#fff
    style C fill:#3498DB,color:#fff
    style D fill:#2980B9,color:#fff
    style E fill:#2471A3,color:#fff
```

## 2. Technology Description

- **前端框架**：React@18 + TypeScript@5 + Vite@5
- **样式方案**：Tailwind CSS@3
- **路由管理**：React Router@6
- **状态管理**：React内置useState/useContext
- **初始化工具**：vite-init
- **后端**：无需后端，使用前端模拟数据

## 3. Route Definitions

| Route | Purpose |
|-------|---------|
| /login | 登录页面 |
| /home | 首页 |
| /book/:id | 书籍详情页 |
| /discover | 搜索与发现页 |
| /profile | 个人主页 |
| /review | 写书评页 |

## 4. API Definitions

本项目无需真实后端接口，所有数据通过前端模拟数据实现。

## 5. Data Model

### 5.1 数据类型定义

```typescript
// 用户信息
interface User {
  id: string;
  nickname: string;
  avatar: string;
  bio: string;
  reviewCount: number;
  followingCount: number;
  favoriteCount: number;
}

// 书籍信息
interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  ratingCount: number;
  tags: string[];
  publisher: string;
  publishDate: string;
  pages: number;
  description: string;
  ratingDistribution: number[];
}

// 书评信息
interface Review {
  id: string;
  bookId: string;
  userId: string;
  userNickname: string;
  userAvatar: string;
  rating: number;
  title: string;
  content: string;
  tags: string[];
  publishDate: string;
  likes: number;
}

// 分类信息
interface Category {
  id: string;
  name: string;
  icon: string;
}
```

### 5.2 目录结构

```
src/
├── pages/              # 页面组件
│   ├── Login.tsx
│   ├── Home.tsx
│   ├── BookDetail.tsx
│   ├── Discover.tsx
│   ├── Profile.tsx
│   └── WriteReview.tsx
├── components/         # 公共组件
│   ├── BottomNav.tsx
│   ├── BookCard.tsx
│   ├── StarRating.tsx
│   ├── FilterTabs.tsx
│   ├── Button.tsx
│   └── Input.tsx
├── router/            # 路由配置
│   └── index.tsx
├── mock/              # 模拟数据
│   ├── books.ts
│   ├── users.ts
│   ├── reviews.ts
│   └── categories.ts
├── context/           # 状态管理
│   └── AppContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 6. 项目配置文件

### package.json
```json
{
  "name": "book-review-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc &amp;&amp; vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.4"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        'primary-light': '#5DADE2',
        secondary: '#F39C12',
        'secondary-dark': '#E67E22',
      },
    },
  },
  plugins: [],
}
```

## 7. GitHub Pages 部署配置

### 部署步骤

1. 安装 gh-pages 依赖
2. 在 package.json 中添加 deploy 脚本
3. 配置 vite.config.ts 的 base 路径
4. 运行 `npm run build` 构建项目
5. 运行 `npm run deploy` 部署到 GitHub Pages
