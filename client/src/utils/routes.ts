export type NavigationRouteGroup = {
  label: string;
  routes: NavigationRoute[];
};
export type NavigationRoute = {
  label: string;
  route: string;
  icon: string;
  description: string;
};
export const navigationRoutes: NavigationRouteGroup[] = [
  {
    label: 'general',
    routes: [
      {
        label: 'startpage',
        route: '/',
        icon: 'ion:rocket-outline',
        description: 'Enough seen? Get back to the start page.',
      },
      {
        label: 'dashboard',
        route: '/dashboard/home',
        icon: 'ion:home-outline',
        description:
          'Everything in one place. See a total overview about all your current nessesary information.',
      },
      {
        label: 'statistics',
        route: '/dashboard/statistics',
        icon: 'ion:stats-chart',
        description:
          'With this key performance indicators, you can keep track of your personal performance in a certain timespan.',
      },
    ],
  },
  {
    label: 'wallettracking',
    routes: [
      // {
      //   label: 'Overview',
      //   route: '/dashboard/wallettracking/overview',
      //   icon: 'ion:grid',
      // description: '',
      // },
      {
        label: 'finances',
        route: '/dashboard/wallettracking/finances',
        icon: 'ion:cash',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      },
    ],
  },
  {
    label: 'todomaster',
    routes: [
      {
        label: 'list',
        route: '/dashboard/todomaster/overview',
        icon: 'ion:list',
        description:
          'What is up for today? Find it out by taking a look into your todo list and managing it by deleting, adding and editing your tasks.',
      },
      {
        label: 'reportings',
        route: '/dashboard/todomaster/reportings',
        icon: 'ion:file-tray-full',
        description:
          'Take a look into your most recent todo reportings that include some valuable information about your behavior.',
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
export function getRouteGroup(route: string) {
  return navigationRoutes.find((p) => p.routes.find((r) => r.route == route) != null);
}
