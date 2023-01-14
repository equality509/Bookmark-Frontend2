import { redirect } from "react-router-dom"

const URL = 'https://peopleapi.onrender.com'

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData()
  // set up our new person to match schema
  const newPerson = {
    name: formData.get("name"),
    image: formData.get("image"),
    title: formData.get("title"),
  }
  // Send new person to our API
  await fetch(URL + "/people", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
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
    await fetch(URL + "/people/" + params.id, {
        method: "delete"
    })
    // redirect to index
    return redirect("/")
}