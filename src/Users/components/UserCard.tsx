import {ucFirst} from "../../utils/common";
import {UserProps} from "../../interfaces/User";

export default function UserCard({user, onClick}: UserProps) {

    return (
        <div className="col-xs-12 col-md-6 col-xl-4" onClick={onClick}>
            <div className="user-card card mb-3">
                <div className="card-body p-2 d-flex flex-row gap-2">
                    <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} className="rounded" />
                    <div className="">
                        <strong>{user.name.first} {user.name.last}</strong>
                        <div>{ucFirst(user.gender)} ({user.dob.age} years)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}