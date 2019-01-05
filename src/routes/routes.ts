import AddItem from '../components/add-item/addItem';
import ListItems from '../components/list-view/listView';
import Report from '../components/reports/report';
import DeleteItem from '../components/delete-item/deleteItem';

const Routes = [
  {
    component: AddItem,
    name: "Add item",
    path: "/add-item"
  },
  {
    component: ListItems,
    name: "List item",
    path: "/list-items"
  },
  {
    component: Report,
    name: "Report",
    path: "/report"
  },
  {
    component: DeleteItem,
    name: "Delete",
    path: "/delete-item"
  }
];
  
  export default Routes;