/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types';

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.blank$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.blank$view.404',
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.blank$view.500',
    meta: {
      title: '500',
      i18nKey: 'route.500',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      icon: 'mdi:monitor-dashboard',
      order: 1
    }
  },
  {
    name: 'employee',
    path: '/employee',
    component: 'layout.base$view.employee',
    meta: {
      title: 'employee',
      i18nKey: 'route.employee',
      icon: 'mdi:monitor-dashboard',
      order: 1
    },
    children: [
      {
        name: '500',
        path: '/500',
        component: 'layout.blank$view.500',
        meta: {
          title: '500',
          i18nKey: 'route.500',
          constant: true,
          hideInMenu: true
        }
      },
      {
        name: '500',
        path: '/500',
        component: 'layout.blank$view.500',
        meta: {
          title: '500',
          i18nKey: 'route.500',
          constant: true,
          hideInMenu: false
        }
      },
      {
        name: 'login',
        path: '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?',
        component: 'layout.blank$view.login',
        props: true,
        meta: {
          title: 'login',
          i18nKey: 'route.login',
          constant: true,
          hideInMenu: false
        }
      }
    ]
  },
  {
    name: 'iframe-page',
    path: '/iframe-page/:url',
    component: 'layout.base$view.iframe-page',
    props: true,
    meta: {
      title: 'iframe-page',
      i18nKey: 'route.iframe-page',
      constant: true,
      hideInMenu: true,
      keepAlive: true
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?',
    component: 'layout.blank$view.login',
    props: true,
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    }
  }
];
