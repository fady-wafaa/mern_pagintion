
import Pagination from './components/Pagination/Pagination';
import Card from './components/Card/Card';
import './App.css';
import { useEffect, useState } from 'react';

const App = ({match}) => {



  const pageNumber = match.params.pageNumber || 1 ;
  
  // console.log(match.params)

  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(false);

  const [error, seterror] = useState(false);

  const [page, setpage] = useState(pageNumber);
  const [pages, setpages] = useState(1);


  useEffect(() => {
    const fecthPosts = async() =>{
      setloading(true)
      try {
        const res = await fetch(`/api/posts?page=${page}`);

        const {data , pages} = await res.json()

        setpages(pages);
        setposts(data);
        setloading(false)
      } catch (error) {
        console.log(error);
        setloading(false)
        seterror('Some error occured')
      }
    };
    fecthPosts();
  }, [page]);

  return (
    <div className="app">
      {loading ? <h3 className="loading-text">loading .....</h3> : error ? <h3 className="error-text">{error}</h3> : (
        <>
        
        <Pagination page={page} pages={pages}  changePage={setpage} />
          <div className="app__posts">
            {posts.map( (post) => (
            
              <Card key={post.id} post={post} />
          
            ))}
          </div>
    
    
        <Pagination page={page} pages={pages}  changePage={setpage} />
        </>
      )
      }

    </div>
  );
};

export default App;
