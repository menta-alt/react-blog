export const getNavList = () => {
  const navArr = [
    { name: '作品', to: '/works' },
    { name: '留言', to: '/message' },
    { name: '日志', to: '/log' },
  ];
  const articlesSecNavArr = [
    { name: '查找文章', to: '/search' },
    { name: '标签', to: '/tag' },
    { name: '分类', to: '/classes' }
  ];

  const aboutSecNavArr = [
    { name: '关于我', to: '/aboutme'},
    { name: '关于站点', to: '/aboutsite'}
  ]

  return {
    navArr,
    articlesSecNavArr,
    aboutSecNavArr
  };
};
