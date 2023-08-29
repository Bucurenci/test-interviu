import {dateFromUTC, dateTimeFromUTC, ucFirst} from "../../utils/common";
import {UserProps} from "../../interfaces/User";

export default function ModalBody({user}: UserProps) {

    return(

        <>
          <div className="mb-3">
            <img src={user.picture?.large} className="img-thumbnail rounded-3" alt={`${user.name.first}  ${user.name.last} Image`}/>
          </div>

          <table className="table">
            <tbody>
            <tr>
              <td><strong>Full
                name:</strong> {user.name.title}. {user.name.first} {user.name.last}
              </td>
            </tr>
            <tr>
              <td><strong>Username:</strong> {user.login?.username}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong> {user.email}</td>
            </tr>
            <tr>
              <td><strong>Phone:</strong> {user.phone}</td>
            </tr>
            <tr>
              <td><strong>Gender:</strong> {ucFirst(user.gender)}</td>
            </tr>
            <tr>
              <td><strong>Date of birth:</strong> {dateFromUTC(user.registered?.date)} ({user.dob.age} years)</td>
            </tr>
            <tr>
              <td><strong>Country:</strong> {user.location?.country}</td>
            </tr>
            <tr>
              <td><strong>State:</strong> {user.location?.state}</td>
            </tr>
            <tr>
              <td><strong>City:</strong> {user.location?.city}</td>
            </tr>
            <tr>
              <td><strong>Street:</strong> {user.location?.street?.name},
                Nr. {user.location?.street?.number}</td>
            </tr>
            <tr>
              <td>
                <strong>Registered:</strong> {dateTimeFromUTC(user.registered?.date)} ({user.registered?.age} years
                ago)
              </td>
            </tr>
            </tbody>
          </table>
        </>
    )
}