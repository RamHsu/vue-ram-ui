const components = {
  RamContainer: () => import("./components/ram-menu.vue"), // 布局-外层容器
  RamHeader: () => import("./components/ram-menu.vue"), // 布局-顶栏容器
  RamAside: () => import("./components/ram-menu.vue"), // 布局-侧边栏容器
  RamMain: () => import("./components/ram-menu.vue"), // 布局-主要区域容器
  RamFooter: () => import("./components/ram-menu.vue"), // 布局-底栏容器
  RamMenu: () => import("./components/ram-menu.vue"), // 导航菜单
  RamTree: () => import("./components/ram-tree.vue"), // 树形控件
  RamImage: () => import("./components/ram-image.vue"), // 图片
  RamSteps: () => import("./components/ram-steps.vue"), // 步骤条-父
  RamStep: () => import("./components/ram-step.vue"), // 步骤条-子
};

export default {
  install(app) {
    for (let name in components) {
      app.component(name, components[name]);
    }
  },
};
