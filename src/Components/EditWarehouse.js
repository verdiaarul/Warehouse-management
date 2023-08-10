
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Text, Paper, Divider, Group, Button, Space, TextInput } from '@mantine/core';
import { FetchWarehouseList } from '../Redux/Action';
import { Header as MantineHeader, Center, Input, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { updateWarehouse } from '../Redux/Action';


const EditWarehouse = (props) => {
    const { id } = useParams();
    const [warehouse, setWarehouse] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        props.loadwarehouse();
    }, []);

    useEffect(() => {
        if (props.warehouse.warehouselist) {
            const selectedWarehouse = props.warehouse.warehouselist.find(item => item.id === parseInt(id));
            setWarehouse(selectedWarehouse);

        }
    }, [props.warehouse.warehouselist, id]);

    if (!props.warehouse.warehouselist) {
        return <div>Loading...</div>;
    }
    if (!warehouse) {
        return <div>Warehouse not found</div>
    }
    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setWarehouse(prevWarehouse => ({
            ...prevWarehouse,
            [name]: value
        }));
    };
    const handleSaveChanges = () => {
        const updatedWarehouse = {
            ...warehouse,
        };
        props.updateWarehouse(updatedWarehouse);
        navigate('/')
        // navigate('/warehouse')
        // history.push(`/warehouse/${id}`);
    };
    const formatBooleanValue = (value) => (value ? 'Yes' : 'No');

    if (!props.warehouse.warehouselist) {
        return <div>Loading...</div>;
    }
    if (!warehouse) {
        return <div>Warehouse not found</div>
    }

    return (
        <>
            <MantineHeader
                sx={{ backgroundColor: "#032681", zIndex: 402 }}
                height={{ base: 70, md: 70 }}
                p="md"
            >
                <Center>
                    <Link to={'/'}>
                        <Text color='white' size={22}>STOCK AREA</Text>
                    </Link>                </Center>
            </MantineHeader>
            <Space h={'md'} />
            <Space h={'md'} />
            <Box sx={{ padding: 80 }}>
                <Text size="xl" weight={700} style={{ marginBottom: '1rem' }}>
                    Edit Warehouse {id}
                </Text>
                <Space h={'md'} />

                <Group position='left'>
                    <Text>Name</Text>
                </Group>
                <Input

                    label="Name"
                    name="name"
                    value={warehouse.name}
                    onChange={handleInputChange}
                />
                <Space h={'md'} />

                <Group position='left'>
                    <Text>Code</Text>
                </Group>
                <Input
                    label="Code"
                    name="code"
                    value={warehouse.code}
                    onChange={handleInputChange}
                />

                <Space h={'md'} />


                <Group position='left'>
                    <Text>City</Text>
                </Group>
                <Input
                    label="City"
                    name="city"
                    value={warehouse.city}
                    onChange={handleInputChange}
                /> <Space h={'md'} />

                <Group position='left'>
                    <Text>Space Available</Text>
                </Group>
                <Input

                    label="Space Available"
                    name="space_available"
                    value={warehouse.space_available}
                    onChange={handleInputChange}
                />

                <Space h={'md'} />


                <Group position='left'>
                    <Text>Type</Text>
                </Group>
                <Input

                    label="Type"
                    name="type"
                    value={warehouse.type}
                    onChange={handleInputChange}
                />
                <Space h={'md'} />

                <Group position='left'>
                    <Text>Cluster</Text>
                </Group>
                <Input

                    label="Cluster"
                    name="cluster"
                    value={warehouse.cluster}
                    onChange={handleInputChange}
                />

                <Space h={'md'} />


                <Group position='left'>
                    <Text>Is Registered</Text>
                </Group>
                <Input

                    label="Is Registered"
                    name="is_registered"
                    value={formatBooleanValue(warehouse.is_registered)}
                    onChange={handleInputChange}
                />
                <Space h={'md'} />
                <Group position='left'>
                    <Text>Is Live</Text>
                </Group>
                <Input

                    label="Is Live"
                    name="is_live"
                    value={formatBooleanValue(warehouse.is_live)}
                    onChange={handleInputChange}
                />

                <Space h={'md'} />

                <Group position="center">
                    <Button size="sm" color="blue" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Group>
            </Box>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        warehouse: state.warehouse
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadwarehouse: () => dispatch(FetchWarehouseList()),
        updateWarehouse: (updatedWarehouse) => dispatch(updateWarehouse(updatedWarehouse))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWarehouse);

