import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const CatalogData = [
    {
        id: 1,
        name: "Topic 1",
        data: "Topic 1 data"
    },
    {
        id: 2,
        name: "Topic 2",
        data: "Topic 2 data"
    },
    {
        id: 3,
        name: "Topic 3",
        data: "Topic 3 data"
    },
    {
        id: 4,
        name: "Topic 4",
        data: "Topic 4 data"
    }
];

export class CatalogService {
    constructor () {

    }
    getCatalogItem (id) {
        const filteredData = CatalogData.filter(
            (item) => {
              return item.id === Number(id) ? true : false;
            }
          );
        return new BehaviorSubject(filteredData[0]);
    }
}
