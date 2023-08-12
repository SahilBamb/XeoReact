import "../../styles/Xeoboard.css";

export default function Xeoboard(){

    const messages = [
        {"Topic" : "Lucky BTC",
        "Author" : "sushi",
        "Replies" : 20,
        "MostRecent" : "September 1st, 2021"},
    ]

    return (
        <mail>
            <h4>XeoMail Web Messaging</h4>
            <h5>- Inbox -</h5>

            <table>
                <tr className="firstRow">
                    <th>         </th>
                    <th>Topic</th>
                    <th>Author</th>
                    <th>Replies</th>
                    <th>Last Post</th>
                </tr>
                {messages.map((message,index) => (
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>{message.Topic}</td>
                    <td>{message.Author}</td>
                    <td>{message.Replies}</td>
                    <td>{message.MostRecent}</td>
                </tr>
                ))}
                <tr className="lastRow">
                    <td colspan="5"></td>                  
                </tr>
            </table>
        </mail>
    )
}