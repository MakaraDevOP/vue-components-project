export default [
  {
    name: "Master",
    path: "/",
    component: import('./../pages/layout/master'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: import('./../pages/dashboard'),
      },
      {
        name: 'recaptcha',
        path: '/recaptcha',
        component: import('./../pages/reCaptcha'),
      },
      {
        name: 'tiptap',
        path: '/tiptap',
        component: import('./../pages/tiptap'),
      },
      {
        name: 'ckeditor',
        path: '/ckeditor',
        component: import('./../pages/ckeditor'),
      }
    ]
  },

]