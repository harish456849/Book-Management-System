export default function Employee() {
    //JS Data
    let empID = 501
    let empName = "Harish"
    let empSalary = 45000
    let bonusOnEveryMonth = 4500
    let phoneNumbers = [9849198491, 9849198492]
    let hobbies = ["Singing","Cooking","Playing Cricker"]
    let aadharInfo = { uuid: 111122223333, gender: "male", fatherName: "Sairam" }
    let eduData = [
        { stream:"SSC",marks:550,poy:2000 },
        { stream:"IPE",marks:880,poy:2002 },
        { stream:"UG",marks:750,poy:2006 }
    ]
    let accountData = [
        {bank:"sbi",accNo:1112,amount:45000},
        {bank:"hdfc",accNo:3334,amount:5000},
        {bank:"icici",accNo:10002,amount:150000},
    ]

    
    //JS Method   => Business Logic
    let totalSalary = function () {
        return empSalary + bonusOnEveryMonth
    }
    //Presentation Logic - in jsx format
    return (
        <>
            <p>  Employee Id : {empID}   </p>
            <p>  Employee Name : {empName}   </p>
            <p>  Employee Salary : {empSalary}   </p>
            <p>  Employee Phone Numbers: </p>
            <ol>
                {
                    phoneNumbers.map((phoneNumber)=>(
                        <li> {phoneNumber} </li>
                    ))
                }
            </ol>
            <p>  Employee Hobbies: </p>
            <ul>
                {
                    hobbies.map((hobbi)=>(
                        <li> {hobbi} </li>
                    ))
                }
            </ul>
             <p>  Employee Educational Information: </p>
             <table border="2px">
                <thead>
                    <tr>
                        <th>STREAM</th>
                        <th>MARKS</th>
                        <th>YEAR OF PASS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        eduData.map((edu)=>(
                            <tr>
                                <td> {edu.stream} </td>
                                <td> {edu.marks} </td>
                                <td> {edu.poy} </td>
                            </tr>
                        ))
                    }
                </tbody>
             </table>
             <p>  Employee Account Information: </p>
             <table>
                    <thead>
                        <th>Bank Name</th>
                        <th>Account Number</th>
                        <th>Balance</th>
                    </thead>
                    <tbody>
                        {
                            accountData.map((account)=>(
                                <tr>
                                    <td> {account.bank} </td>
                                    <td> {account.accNo} </td>
                                    <td> {account.amount} </td>
                                </tr>
                            ))
                        }
                    </tbody>
             </table>

            <p>  Employee Aadhar Data:  {aadharInfo.uuid}    </p>
            <p>  Employee Total Salary:  {totalSalary()}    </p>
        </>
    );

}
