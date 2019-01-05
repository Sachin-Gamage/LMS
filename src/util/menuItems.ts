
export interface IMenu  {
    id:String;
    items:[{
        id: string;
        name: string;
        icon:string;
        url:string;
        children:[{
            id: string;
            name: string;
            icon: string;
            url: string;
        }]
    }];
}


export function getMenuItems():IMenu{
    return require("../MenuOptions.json");
}                                                                    