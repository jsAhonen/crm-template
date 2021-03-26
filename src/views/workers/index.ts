import { WorkersEdit } from './WorkersEdit';
import { WorkersShow } from './WorkersShow';
import { WorkersList } from "./WorkersList";
import { WorkersCreate } from './WorkersCreate';

const workers: any = {
    list: WorkersList,
    show: WorkersShow,
    edit: WorkersEdit,
    create: WorkersCreate,
}

export default workers