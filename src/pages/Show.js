import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const bookmark = useLoaderData();
  
    return (
      <div className="bookmark">
        <h1>{bookmark.title}</h1>
        <a href={bookmark.url}></a>
        

        <h2>Update {bookmark.title}</h2>
        <Form action={`/update/${bookmark._id}`} method="post">
            <input type="input" name="name" defaultValue={bookmark.title}/>
            <input type="input" name="url" defaultValue={bookmark.url}/>
            <input type="submit" value={`update ${bookmark.title}`}/>
        </Form>
        <h2>Delete Bookmark</h2>
        <Form action={`/delete/${bookmark._id}`} method="post">
            <input type="submit" value={`delete ${bookmark.title}`}/>
        </Form>
      </div>
    );
}

export default Show;