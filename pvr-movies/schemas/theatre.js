import {defineType} from "sanity";


export default defineType({
    name:"theatre",
    title:"Theatre",
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            title:"Location",
            name:"location",
            type:'reference',
            to:[{type:'location'}]
        }
    ]
})