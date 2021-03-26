import { CustomersEdit } from './CustomersEdit';
import { CustomersShow } from './CustomersShow';
import { CustomersList } from "./CustomersList";
import { CustomersCreate } from './CustomersCreate';

const customers: any = {
    list: CustomersList,
    show: CustomersShow,
    edit: CustomersEdit,
    create: CustomersCreate,
}

export default customers