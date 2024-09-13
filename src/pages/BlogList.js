import { Link } from 'react-router-dom';
import Blogs from '../data/db';


function BlogList() {

    return (
        <div className="blog-list">
            {
                Blogs.map(blog => {
                    return (

                        <div className="blog-preview" >
                            <h2 >{blog.title}</h2 >
                            <Link to={`/blogs/${blog.id}`} >
                                <div className='btn btn-primary'>Read More</div>
                            </Link>

                        </div>

                    )
                })
            }
        </div>
    )
}


export default BlogList;

