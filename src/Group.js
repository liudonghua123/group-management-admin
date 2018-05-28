import React from 'react';
import { List, Edit, Create, Responsive, SimpleList, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, Filter, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const GroupFilter = ({ permissions, ...props }) => (
    <Filter {...props}>
        {permissions === 'superAdmin' ?  <TextInput label="Search by name" source="name" alwaysOn />: null}
    </Filter>
);

export const GroupList = ({ permissions, ...props }) => (
    <List {...props} filters={<GroupFilter permissions={permissions}/>}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => `${record.name}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const GroupTitle = ({ record }) => {
    return <span>Group {record ? `"${record.name}"` : ''}</span>;
};

export const GroupEdit = (props) => (
    <Edit title={<GroupTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const GroupCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);