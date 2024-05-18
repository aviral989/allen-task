import ListFlags  from "../pages/listCountries"
import CountryView from "../pages/viewCountry"
const RoutesList = [
    {
      path: '/',
      exact: true,
      component: <ListFlags />,
    },
    {
      path: '/country/:countryId',
      exact: true,
      component: <CountryView />,
    },
]
export default RoutesList;
