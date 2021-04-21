import { hours } from '../data'

export default function CookieStandTable({ stands, onDelete }) {

    return (
        <div className="">
        <Table className="w-9/12 m-auto ">
            <thead>
                <tr className="w-11/12 p-4 m-auto border-2 border-gray-500 rounded table-auto">

                    <TH>Location</TH>
                    {hours.map(slot => (
                        <TH key={slot}>{slot}</TH>
                    ))}
                    <TH>Totals</TH>
                </tr>
            </thead>
            <tbody className="w-11/12 p-4 m-auto border-2 border-gray-500 rounded table-auto">
                {stands.map((stand, i) => {

                    return (
                        <tr className="odd:bg-green-400" key={stand.id}>

                            <TH>
                                <div>

                                    <p>{stand.location}</p>

                                    <span onClick={() => onDelete(stand)}>X</span>
                                </div>
                            </TH>

                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i}>
                                    {amt}
                                </TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>
        </div>

    );
}

function Table({ children }) {
    return (
        <table>
            {children}
        </table>
    );
}
function TH({ children }) {
    return (
        <th>{children}</th>
    )
}

function TD({ children }) {
    return (
        <td>{children}</td>
    )
}