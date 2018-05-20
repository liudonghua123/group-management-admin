import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" icon={UserIcon} list={UserList} />
    </Admin>
);

export default App;