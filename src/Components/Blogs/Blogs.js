import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='ques-ans'>
           <h1 className='title-blog'>All Your Questions</h1> 
           <h3>1. How does react work?</h3>
           <p>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together, Reconciliation = Render + Diffing occurs in between + Commit.</p>

           <h3>2. What is the difference between Props and State?</h3>
           <p>Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private it cannot be accessed from outside.</p>

           <h3>3. Why do we use UseEffect other than to load data from API ?</h3>
           <p> We use useEffect  to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, setting up subscriptions, timers, or dependencies. it also allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting. </p>
        </div>
    );
};

export default Blogs;