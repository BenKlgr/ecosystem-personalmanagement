export type NavigationRouteGroup = {
  label: string;
  routes: NavigationRoute[];
};
export type NavigationRoute = {
  label: string;
  route: string;
  icon: string;
};
export const navigationRoutes: NavigationRouteGroup[] = [
  {
    label: 'General',
    routes: [
      {
        label: 'Startpage',
        route: '/',
        icon: 'ion:rocket-outline',
      },
      {
        label: 'Dashboard',
        route: '/dashboard/home',
        icon: 'ion:home-outline',
      },
      {
        label: 'Statistics',
        route: '/dashboard/statistics',
        icon: 'ion:stats-chart',
      },
    ],
  },
  {
    label: 'Wallet Tracking',
    routes: [
      // {
      //   label: 'Overview',
      //   route: '/dashboard/wallettracking/overview',
      //   icon: 'ion:grid',
      // },
      {
        label: 'Finances',
        route: '/dashboard/wallettracking/finances',
        icon: 'ion:cash',
      },
    ],
  },
  {
    label: 'Todo Master',
    routes: [
      {
        label: 'List',
        route: '/dashboard/todomaster/overview',
        icon: 'ion:list',
      },
      {
        label: 'Reportings',
        route: '/dashboard/todomaster/reportings',
        icon: 'ion:file-tray-full',
      },
    ],
  },
  {
    label: 'Password Manager',
    routes: [
      // {
      //   label: 'Overview',
      //   route: '/dashboard/passwordmanager/overview',
      //   icon: 'ion:grid',
      // },
      {
        label: 'Passwords',
        route: '/dashboard/passwordmanager/passwords',
        icon: 'ion:lock-closed-outline',
      },
    ],
  },
];
export function getRoute(route: string) {
  return navigationRoutes
    .map((group) => group.routes)
    .flat(1)
    .find((p) => p.route == route);
}
