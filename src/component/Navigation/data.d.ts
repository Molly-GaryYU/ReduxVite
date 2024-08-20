import React from 'react'

// 定义一个接口来描述每个数据项的结构
export interface DataItem {
  name: string;
  imgComponent: React.ReactElement; // imgComponent 是一个 React 元素
  id: number;
}

declare module 'data.tsx' {
  const value: DataItem[][];
  export default value;
}