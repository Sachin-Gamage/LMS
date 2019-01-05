import * as React from 'react';

class Report extends React.Component{


    render(){
        return(
            <form>
                <table>
                    <tr>
                        <th>Borrowed Date</th>
                        <th>Item Type</th>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Borrowed By</th>
                        <th>Fee to be Paid</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Report;