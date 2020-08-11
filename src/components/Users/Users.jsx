import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png';

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers (
                    response.data.items
                );
            });
        }
    }

    render () {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map ( u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => {this.props.unfollow(u.id)} }>unfollow</button>
                                : <button onClick={ () => {this.props.follow(u.id)} }>follow</button>
                            }
                        </div>
                    </div>
                    <div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                    </div>
                </div>)
            }
        </div>
    }

}

export default Users;