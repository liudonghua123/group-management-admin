import React from 'react';
import { List, Edit, Create, Responsive, SimpleList, Datagrid, ReferenceField, TextField, BooleanField, EditButton, DisabledInput, LongTextInput, Filter, ReferenceInput, SelectInput, SimpleForm, TextInput, BooleanInput } from 'react-admin';

const UserGroupFilter = ({ permissions, ...props }) => (
    <Filter {...props}>
        {permissions === 'superAdmin' ? 
        <ReferenceInput label="Group" source="groupId" reference="group">
            <SelectInput optionText="name" />
        </ReferenceInput> :null},
        {permissions === 'superAdmin' ?  <BooleanInput label="is Admin?" source="admin" /> : null},
    </Filter>
);

export const UserGroupList = ({ permissions, ...props }) => (
    <List {...props}  sort={{ field: 'groupId', order: 'ASC' }} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.groupId}
                    secondaryText={record => `${record.uid}`}
                    tertiaryText={record => record.admin}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="Group" source="groupId" reference="group">
                        <TextField source="name" />
                    </ReferenceField>
                    <ReferenceField label="User" source="userId" reference="user">
                        <TextField source="uid" />
                    </ReferenceField>
                    <BooleanField source="admin" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const UserGroupTitle = ({ record }) => {
    return <span>UserGroup {record ? `"groupId: ${record.groupId}, userId: ${record.userId}"` : ''}</span>;
};

export const UserGroupEdit = (props) => (
    <Edit title={<UserGroupTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="groupId" />
            <ReferenceInput label="User" source="userId" reference="user">
                <SelectInput optionText="uid" />
            </ReferenceInput>
            <BooleanInput source="admin" />
        </SimpleForm>
    </Edit>
);

export const UserGroupCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Group" source="groupId" reference="group">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="User" source="userId" reference="user">
                <SelectInput optionText="uid" />
            </ReferenceInput>
            <BooleanInput source="admin" />
        </SimpleForm>
    </Create>
);