import URL from "./url";

export const indexLoader = async () => {
    const response = await fetch(URL + "/bookmark")
    const bookmarks = await response.json()
    return bookmarks
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/bookmark/${params.id}`)
    const bookmark = await response.json()
    return bookmark
}