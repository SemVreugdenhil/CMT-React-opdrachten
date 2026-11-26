
const Book = ({title, author, img}) => {
    return ( 
 <section>
 <h1>{title}</h1>
 <h2>bij {author} </h2>
 <h3><img src={img} alt=""  /></h3>
 </section>

     );
}
 
export default Book;