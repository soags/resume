export default {
  logo: <span>Resume</span>, 
  project: {
    link: 'https://github.com/soags/resume'
  },      
  darkMode: false,
  useNextSeoProps: () => ({titleTemplate: '%s'}),  
  search: {
    component: null
  },
  toc: {
    title: '目次',
    backToTop: true
  },
  editLink: {
    component: null
  },
  feedback: {
    content	: null
  },
  gitTimestamp: () => '最終更新日 2024年8月1日',
  footer: {
    component: null
  }
}