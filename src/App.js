import React from 'react';
import { Admin, Resource, jsonServerRestClient } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import springRestClient from './springRestClient';
import {REACT_APP_API_HOST} from './Configration';

import Dashboard from './Dashboard';
import { UserList, UserEdit, UserCreate } from './User';
import { GroupList, GroupEdit, GroupCreate } from './Group';
import { UserGroupList, UserGroupEdit, UserGroupCreate } from './UserGroup';

import UserIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import UserGroupIcon from '@material-ui/icons/People';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={springRestClient(`${REACT_APP_API_HOST}/api`)} >
        { permissions => [
            permissions === 'user' ? <Resource options={{ label: 'Users' }} name="user" icon={UserIcon} list={UserList} edit={UserEdit} create={null} /> : null,
            permissions === 'superAdmin' || permissions === 'admin' ? <Resource options={{ label: 'Users' }} name="user" icon={UserIcon} list={UserList} edit={UserEdit} create={permissions === 'superAdmin' ? UserCreate: null} /> : null,
            permissions === 'superAdmin' || permissions === 'admin' ? <Resource options={{ label: 'Groups' }} name="group" icon={GroupIcon} list={GroupList} edit={GroupEdit} create={permissions === 'superAdmin' ? GroupCreate : null} /> : null,
            permissions === 'superAdmin' || permissions === 'admin' ? <Resource options={{ label: 'UserGroups' }} name="user-group" icon={UserGroupIcon}  list={UserGroupList} edit={UserGroupEdit} create={permissions === 'superAdmin' ? UserGroupCreate: null} /> : null,
        ]}
    </Admin>
);

export default App;