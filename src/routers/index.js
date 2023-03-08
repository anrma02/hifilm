import config from '~/config';

// Layouts


// Pages
import Home from '~/pages/Home';

// Public routes

const publicRoutes = [{ path: config.routes.home, component: Home }];
// const publicRoutes = [
//     { path: '/', component: Home },
//     { path: '/library', component: Library },
//     { path: '/lovesong', component: Lovesong },
//     { path: '/playlist', component: Playlist },
//     { path: '/search', component: Search },
// ];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
