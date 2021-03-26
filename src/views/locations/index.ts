import { LocationsCreate } from "./LocationsCreate"
import { LocationsEdit } from "./LocationsEdit"
import { LocationsList } from "./LocationsList"
import { LocationsShow } from "./LocationsShow"

const locations: any = {
    list: LocationsList,
    show: LocationsShow,
    edit: LocationsEdit,
    create: LocationsCreate,
}

export default locations