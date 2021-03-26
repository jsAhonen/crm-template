import { OrdersCreate } from "./OrdersCreate"
import { OrdersEdit } from "./OrdersEdit"
import { OrdersList } from "./OrdersList"
import { OrdersShow } from "./OrdersShow"

const orders: any = {
    list: OrdersList,
    show: OrdersShow,
    edit: OrdersEdit,
    create: OrdersCreate,
}

export default orders