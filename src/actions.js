import { redirect } from "react-router-dom"

const URL = 'https://bookmarkapi.onrender.com'

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData()
  // set up our new person to match schema
  const newBookmark = {
    url: formData.get("url"),
    title: formData.get("title"),
  }
  // Send new person to our API
  await fetch(URL + "/bookmarks", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBookmark),
  })
  // redirect to index
  return redirect("/")
}

export const updateAction = async ({request, params}) => {
    // get data from form
    const formData = await request.formData()
    // set up our new person to match schema
    const updatedPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title")
    }
    // Send new person to our API
    await fetch(URL + "/people/" + params.id, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedPerson)
    })
    // redirect to index
    return redirect("/")
}

export const deleteAction = async ({params}) => {
    // delete person with our API
    await fetch(URL  /+ params.id, {
        method: "delete"
    })
    // redirect to index
    return redirect("/")
}