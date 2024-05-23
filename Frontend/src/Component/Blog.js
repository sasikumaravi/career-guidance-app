import React from 'react'
import './blog.css'
import pics from '../Pics/making-decision-process-finding-solution-important-choice-analysing-opportunities-businessman-crossroads-choosing-direction-considering-strategy_335657-2399.jpg'
export default function Blog() {
 
  return (
      <div>
        <header className='abs'>
            <h1>Career Blog</h1>
        </header>
        <div class="container" style={{backgroundImage:`url(${pics})`}}>
            <div class="main-content">
                <article>
                    <h2>Our Career</h2>
                    <p>Here's a detailed plan for content on a career guidance blog, covering various important aspects of career development. This includes articles on choosing a career path, job search tips, resume writing, interview preparation, networking, and professional development. Each article should be well-researched and provide actionable advice for readers.</p>
                </article>
                <article>
                    <h2>Another Blog Post</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna vel elit fringilla, ut lobortis magna aliquam.</p>
                </article>
            </div>
            <aside class="sidebar">
                <h3>About Us</h3>
                <p>We are united to give a proper consultation for a upcoming generation</p>
                <h3>Categories</h3>
                <ul>
                    <li><a href="#">School</a></li>
                    <li><a href="#">Higher</a></li>
                    <li><a href="#">Secondary</a></li>
                </ul>
                <h3>Recent Posts</h3>
                <ul>
                    <li><a href="#">Career Post</a></li>
                    <li><a href="#">Guidance Post</a></li>
                    <li><a href="#">Challenge Post</a></li>
                </ul>
            </aside>
        </div>
        <footer>
            <p>&copy; 2024 Our Blog. All rights reserved.</p>
        </footer>
        </div>
    
  )
}
