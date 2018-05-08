export default async (elem,url = "http://localhost:3000/users") => {
    const id = elem.attributes[1].value;
    console.log(`${url}/${id}`);
    const request = await fetch(`${url}/${id}`, {
        method: "delete"
    })
    const status = await request.status;
    console.log(`${status} STATUS`);
    const data = await request.json();
    elem.remove()
    console.log( await data )
    return await data;
}