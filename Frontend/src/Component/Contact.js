import React from 'react'
import './blog.css'
export default function Contact() {
  return (
    <div>
    <header className='header'>
        <h1>Contact Us</h1>
    </header>
    <div div class="container">
        <h2>We'd love to hear from you!</h2>
        <p>If you have any questions, suggestions, or need career advice, please fill out the form below to get in touch with us.</p>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        <div class="contact-info">
            <h3>Other Ways to Contact Us:</h3>
            <p>Email: <a href="mailto:smartsasi@example.com">smartsasi79.com</a></p>
            <p>Phone: 9344776008</p>
            <p>Follow us on social media:</p>
            <p>
                <a href="https://twitter.com/yourprofile" target="_blank">Twitter</a> |
                <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a> |
                <a href="https://facebook.com/yourprofile" target="_blank">Facebook</a>
            </p>
        </div>
    <footer>
        <p>&copy; 2024 Career Guidance Blog. All rights reserved.</p>
    </footer>
    </div>
    </div>
  )
}
