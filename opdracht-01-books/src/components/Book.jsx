import { useState } from "react";
const Book = ({title, author, img}) => {
     const [count, setCount] = useState(0);
    return ( 
 <section>
 <h1>{title}</h1>
 <h2>bij {author} </h2>
 <h3><img src={img} alt=""  /></h3>
  <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
 </section>

     );
}
 
export default Book;