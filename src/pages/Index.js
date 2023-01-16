import React from "react";
import { Form, useLoaderData } from "react-router-dom";

function Index(props) {
    const people = useLoaderData();
    return (
        <div>
            <h2>Create a Bookmark</h2>
            <Form
                action="/create"
                method="post"
            >
                <input type="input" name="title" placeholder="Website's Title" />
                <input
                    type="url"
                    name="url"
                    placeholder="Website's Url"
                />

                <input type="submit" value="Create Bookmark" />
            </Form>

            <h2>People</h2>
            <div className='container'>
                {people.map((person) => (
                    <div className="card" key={person._id}>
                        {/* <Link to={`${person.url}`} className="person">
                            <h1>{person.title}</h1>
                        </Link> */}
                        <a href={person.url} alt={person.name} >{person.title}</a>
                        <h3>{person.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;