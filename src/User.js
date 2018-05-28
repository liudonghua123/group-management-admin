import React from 'react';
import { List, Edit, Create, Responsive, SimpleList, Datagrid, ReferenceField, TextField, BooleanField, EmailField, EditButton, DisabledInput, LongTextInput, Filter, ReferenceInput, SelectInput, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import { Button, CardActions, ListButton, ShowButton, DeleteButton, RefreshButton, } from 'react-admin';

const UserFilter = ({ permissions, ...props }) => (
    <Filter {...props}>
        {permissions === 'superAdmin' ? <TextInput label="Search by uid" source="uid" alwaysOn /> : null}
    </Filter>
);

export const UserList = ({ permissions, ...props }) => (
    <List {...props} filters={<UserFilter permissions={permissions} />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.uid}
                    secondaryText={record => `${record.idnum}`}
                    tertiaryText={record => record.phone}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="uid" />
                    <TextField source="username" />
                    <TextField source="depid" />
                    <TextField source="depname" />
                    <TextField source="category" />
                    <TextField source="idnum" />
                    <BooleanField source="expired" />
                    <BooleanField source="disable" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.uid}"` : ''}</span>;
};

const UserEditActions = ({ basePath, data, resource, permissions }) => (
    <CardActions>
        <ListButton basePath={basePath}/>
        {permissions === 'admin' || permissions === 'superAdmin' ?<DeleteButton basePath={basePath} record={data} resource={resource} /> : null }
        <RefreshButton />
    </CardActions>
);

export const UserEdit = ({ permissions, ...props }) => (
    <Edit title={<UserTitle />} actions={<UserEditActions permissions={permissions} />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            {permissions === 'admin' || permissions === 'superAdmin' ?<TextInput source="uid" /> : null }
            <TextInput source="username" />
            <TextInput source="password" />
            {permissions === 'admin' || permissions === 'superAdmin' ?<TextInput source="depid" /> : null }
            {permissions === 'admin' || permissions === 'superAdmin' ?<TextInput source="depname" /> : null }
            {permissions === 'admin' || permissions === 'superAdmin' ?<TextInput source="category" /> : null }
            <TextInput source="idnum" />
            {permissions === 'admin' || permissions === 'superAdmin' ?<BooleanInput source="expired" /> : null }
            {permissions === 'admin' || permissions === 'superAdmin' ?<BooleanInput source="disable" /> : null }
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="uid" />
            <TextInput source="password" />
            <TextInput source="username" />
            <TextInput source="depid" />
            <TextInput source="depname" />
            <TextInput source="category" />
            <TextInput source="idnum" />
            <BooleanInput source="expired" />
            <BooleanInput source="disable" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);