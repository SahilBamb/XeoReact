import "../../styles/Neomail.css";
import React, { useState } from 'react';


export default function Neomail(){

    const [messages, setMessages] = useState([
        {
        "id" : 0,  
        "Time" : "01/06/2020 1:33am",
        "From" : "TheNeopetsClassicTeam",
        "Subject" : "Winning Bid!",
        "Status" : "Read",
        "body" : "Congratulations! You have won the auction for the item 'The Neopets Team'! Please visit the Auction House to claim your prize!",
        "Expand": true },

        {
        "id" : 1,
        "Time" : "02/19/2020 5:40am",
        "From" : "TheNeopetsClassicTeam",
        "Subject" : "Losing Bid!",
        "Status" : "Unread",
        "body" : "Unfortunately, you have lost the auction for the item 'The Neopets Team'. Please visit the Auction House to try again!",
        "Expand": false},
    ]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [formText, setFormText] = useState({
        from: '', 
        subject: '', 
        body: ''
    });

    const expandMessage = (message) => {
          const updatedMessages = messages.map((item) => {
            if (item.id === message.id) {
              return { ...item, Expand: !item.Expand };
            }
            return item;
          });
          setMessages(updatedMessages);

    }

    const handleInputChange = (event) => {
      // Update state when input fields change
      const {name, value} = event.target;
      console.log(name, value);
      setFormText({
        ...formText,
        [name]: value, // Dynamically update the property based on the input name
      });
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();

      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const year = now.getFullYear();

      const TimeString = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

      setMessages([...messages, {
        "Time" : TimeString,
        "From" : formText.from,
        "Subject" : formText.subject,
        "Status" : "Unread"}]);
      // You can handle the form submission logic here, e.g., send data to a server or perform some action
      // console.log('Form data submitted:', { name, email, message });
    }

    return (
        <mail>
            <h4>XeoMail Web Messaging</h4>
            <h5>- Inbox -</h5>
            <table>
                <tr className="firstRow">
                    <th>         </th>
                    <th>Date Sent</th>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Status</th>
                </tr>
                {messages.map((message,index) => (
                  <>
                <tr onClick={() => {expandMessage(message)}} >
                    <td><input type="checkbox"></input></td>
                    <td>{message.Time}</td>
                    <td>{message.From}</td>
                    <td>{message.Subject}</td>
                    <td>{message.Status}</td>
                </tr>
                
                <td colspan="5" class="messageBody" style={{
                      visibility: message.Expand ? 'visible' : 'hidden', 
                      height: message.Expand ? '50px' : '0px',
                      padding: message.Expand ? '20px' : '0px',
                      }}>{message.body}</td>
                
                </>
                
                ))}
                <tr 
                    className="lastRow">
                    <td colspan="5"></td>                  
                </tr>
            </table>

            <div className="sendMail">
                <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">From:</label>
                <input
                    type="text"
                    id="from"
                    name="from"
                    value={formText.from}
                    onChange={handleInputChange}
                    required
                />
                </div>

                <div>
                <label htmlFor="subject">Subject:</label>
                <textarea
                    id="subject"
                    name="subject"
                    value={formText.subject}
                    onChange={handleInputChange}
                    required
                />
                </div>

                <div>
                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    name="body"
                    value={formText.body}
                    onChange={handleInputChange}
                    required
                />
                </div>

                <button type="submit">Submit</button>
                </form>
            </div>
            
        </mail>
    )
}