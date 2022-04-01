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
    ],
  },
  {
    label: 'Dashboard',
    routes: [
      {
        label: 'Home',
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
    label: 'User',
    routes: [
      {
        label: 'Profile',
        route: '/dashboard/profile',
        icon: 'ion:person-circle-outline',
      },
      {
        label: 'Notifications',
        route: '/dashboard/notifications',
        icon: 'ion:notifications-outline',
      },
      {
        label: 'Settings',
        route: '/dashboard/settings',
        icon: 'ion:settings-outline',
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
