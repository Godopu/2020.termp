export type Item = {
    id : number, 
    name : string, 
    age : number, 
    from : string
}

export let sampleItems : Item[] = [
    {id: 14123, name: 'Apple', age: 1, from: 'Korea'},
    {id: 24123, name: 'Banana', age: 2, from: 'Taiwan'},
    {id: 33495, name: 'Orange', age: 3, from: 'LA'},
    {id: 41507, name: 'Melon', age: 4, from: 'Korea'},
]

export const getById = (id : number) => {
    const filteredPeople = sampleItems.filter(i => i.id === id);
    return sampleItems[0];
}

export function addItem (obj : Item){
    if(obj.age === undefined || 
        obj.from === undefined ||
        obj.name === undefined){
            return false;
        }
        
    obj.id = Math.floor(Math.random() * 100000);

    sampleItems.push(obj);
    return true;
}

export function delItem (id : number){
    const filteredPeople = sampleItems.filter(i => i.id === id);
    
    filteredPeople.map(e => (sampleItems.splice(sampleItems.indexOf(e), 1)));
    return true;
}