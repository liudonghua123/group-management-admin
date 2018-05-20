import React from 'react';
import { List, Edit, Create, Responsive, SimpleList, Datagrid, ReferenceField, TextField, BooleanField, EmailField, EditButton, DisabledInput, LongTextInput, Filter, ReferenceInput, SelectInput, SimpleForm, TextInput, BooleanInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by uid" source="uid" alwaysOn />
    </Filter>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
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

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="uid" />
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