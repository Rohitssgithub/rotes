import { PATH } from "./constant";


console.log(PATH)


export const sideBarNavigation = Object.values(PATH.privateRoutes)
    .filter(x => x.sidebar)
    .map((pageData, index) => ({
        id: index + 1,
        path: pageData.path,
        pageName: pageData.sidebar.name || pageData.pageName
    }))


