import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Modal from "../components/Modal";
import ModalBody from "./components/ModalBody";
import {UserType} from "../interfaces/User";

export default function Users() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [selectedUser, setSelectedUser] = useState<UserType|null>(null);
    const [query, setQuery] = useState('');
    const isOpen: boolean = !!selectedUser;

    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            return (
                user.name?.last?.toLowerCase().includes(query.toLowerCase()) ||
                user.name?.first?.toLowerCase().includes(query.toLowerCase()) ||
                user.gender?.toLowerCase().includes(query.toLowerCase()) ||
                (user.dob?.age + ' Years').toLowerCase().includes(query.toLowerCase())
            )
        })
    }, [users, query]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=50')
            .then(({data}) => {
                console.log(Object.values(data.results));
                setUsers(Object.values(data.results));
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    const openModal = (user: UserType) => {
        setSelectedUser(user);
    }

    const closeModal = () => {
        setSelectedUser(null);
    }

    return (
        <>
            <div className="users-card card">
                <div className="card-header bg-dark text-bg-dark d-flex flex-row align-items-center">

                    <h1 className="h4 my-2">Fetched Users:</h1>
                    <div className="ms-auto my-2">
                        <div className="input-group">
                            <input value={query} onChange={(ev) => setQuery(ev.target.value)} type="text"
                                   className="form-control" placeholder="Search username..."
                                   aria-label="Search username"/>
                            {query ?
                                <button onClick={() => setQuery('')} className="btn btn-outline-secondary"
                                        type="button">
                                    <i className="fa fa-close text-white"></i>
                                </button>
                                :
                                <button className="btn btn-outline-secondary">
                                    <i className="fa fa-search text-white"></i>
                                </button>
                            }
                        </div>
                    </div>

                </div>
                <div className="card-body pb-0">

                    {filteredUsers.length < 1 ?
                        <div className="alert alert-warning">No username</div>
                        :
                        <div className="row p-md-2">
                            {filteredUsers.map((user, index) => {
                                return <UserCard key={index} user={user} onClick={() => openModal(user)}/>
                            })}
                        </div>
                    }
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={closeModal} modalTitle={`Profile: ${selectedUser?.name.first} ${selectedUser?.name.last}`}>
                {selectedUser && <ModalBody user={selectedUser} />}
            </Modal>
        </>
    );
}