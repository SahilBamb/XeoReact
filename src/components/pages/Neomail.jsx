import "../../styles/Neomail.css";


export default function Neomail(){

    const messages = [
        {"Time" : "01/06/2020 1:33am",
        "From" : "TheNeopetsClassicTeam",
        "Subject" : "Winning Bid!",
        "Status" : "Read"},

        {"Time" : "02/19/2020 5:40am",
        "From" : "TheNeopetsClassicTeam",
        "Subject" : "Losing Bid!",
        "Status" : "Unread"},
    ]

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
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>{message.Time}</td>
                    <td>{message.From}</td>
                    <td>{message.Subject}</td>
                    <td>{message.Status}</td>
                </tr>
                ))}

                <tr className="lastRow">
                    <td colspan="5"></td>                  
                </tr>
            </table>




        </mail>
    )
}