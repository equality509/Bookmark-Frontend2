import { useLoaderData, Form, Link } from "react-router-dom";



function Index(props) {
    const bookmarks = useLoaderData();

    return (
    <div>
        <h2>Create a New Bookmark</h2>
        <Form action="/create" method="post">
            <input type="input" name="title" placeholder="Name" />
            <input type="input" name="url" placeholder="http://" />
            <input type="submit" value="Create" />
        </Form>

        <h2>Bookmarks</h2>
        
            {bookmarks.map((bookmark) => (
                <div className="bookmarkEntry" key={bookmark._id}>
                    <Link to={`/${bookmark._id}`}>
                        <h1>{bookmark.title}</h1>
                        <a href={bookmark.url} target="_blank"></a>
                    </Link>
                </div>
            ))}
    </div>
    )
}

export default Index;













