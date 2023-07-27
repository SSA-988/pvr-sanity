import {defineType} from "sanity";

export default defineType({
    name:"showtimes",
    type:'document',
    fields:[
        {
            name:"time",
            type:"string",
        },
        {
            title:"Movie",
            name:"movie",
            type:"reference",
            to:[{type:"movie"}]
        },
        {
            title:"Theatre",
            name:"theatre",
            type:"reference",
            to:[{type:"theatre"}]
        },
        {
            title:"Row",
            name:"row",
            type:"array",
            of:[{type:"row"}]
        }

    ]
})