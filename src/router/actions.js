import URL from "./url";
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    const formData = await request.formData();

    const newBookmark = {
        url: formData.get("url"),
        title: formData.get("title")
    }

    await fetch(URL + "/bookmark", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBookmark)
    })

    return redirect("/")
}    


export const updateAction = async ({request, params}) => {
    const formData = await request.formData();

    const updatedBookmark = {
        url: formData.get("url"),
        title: formData.get("title")
    }

    await fetch(URL + `/bookmark/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBookmark)
    })

    return redirect("/")
}    


export const deleteAction = async ({params}) => {

    await fetch(URL + `/bookmark/${params.id}`, {
        method: "delete",
    })

    return redirect("/")
}    