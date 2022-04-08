/*export function Books({ book }) {
  return (
    <div style={{border:'1px solid black'}}>
      <p><b>Title:</b> {book.name}</p>
      <p><b>Authors:</b> {book.authors}</p>
      <p><b>Country:</b> {book.country}</p>
      <p><b>ISBN:</b> {book.isbn}</p>
      <p><b>Media Type:</b> {book.mediaType}</p>
      <p><b>Pages:</b> {book.numberOfPages}</p>
      <p><b>Release date:</b> {new Date(book.released).toDateString()}</p>
      <a href={`/${book.isbn}`}>Book details</a>
    </div>
  );
}*/

export function Books({ book }) {
  return (

    <div className='col-lg-4 col-md-6' key={book.isbn}>
      <div className='card h-100'>
        <div className='single-post post-style-1'>
            <div class="blog-image">
              <img src="images/book.jpeg" alt="Blog Image"/>
            </div>  
            <a class="avatar" href="#"><img src="images/avatar.jpg" alt="Profile Image"/></a>
            <div className='blog-info'>
              <h5 className='title'><a ><b>{book.authors}</b></a></h5>
              <h6 class="pre-title"><a href="#"><b>Book Name</b></a></h6>
             
              <h4 className='title'><a ><b>{book.name}</b></a></h4>
              <a className="load-more-btn" href={`/${book.isbn}`}><b>Characters</b></a>
            
              <ul className='post-footer'>
                <li><a >{book.numberOfPages} Pages</a></li>
                <li><a >{book.mediaType}</a></li>
                <li><a>{book.country}</a></li>
                
              </ul>
            
          </div>
        </div>
      </div>
    </div>
  
  

 );
}
