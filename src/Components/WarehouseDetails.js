import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Text, Paper, Divider, Group, Button, Space } from '@mantine/core';
import { FetchWarehouseList } from '../Redux/Action';
import { Header as MantineHeader, Center } from '@mantine/core';

const WarehouseDetails = (props) => {
    const { id } = useParams();
    const [warehouse, setWarehouse] = useState(null);

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
    const formatBooleanValue = (value) => (value ? 'Yes' : 'No');


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
            <Container size="xs">
                <Paper padding="md" shadow="xs" radius="md">
                    <Text size="xl" weight={700} style={{ marginBottom: '1rem' }}>
                        Warehouse {id} Details
                    </Text>
                    <Divider style={{ marginBottom: '1rem' }} />
                    <div>
                        <p>Code: {warehouse.code}</p>
                        <p>ID: {warehouse.id}</p>
                        <p>City: {warehouse.city}</p>
                        <p>Space Available: {warehouse.space_available}</p>
                        <p>Type: {warehouse.type}</p>
                        <p>Cluster: {warehouse.cluster}</p>
                        <p>is_registered: {formatBooleanValue(warehouse.is_registered)}</p>
                        <p>is_live: {formatBooleanValue(warehouse.is_live)}</p>

                    </div>
                    <Group position="center">
                        <Link to={`/warehouse/edit/${id}`}>
                            <Button size="sm" color="blue">
                                Edit
                            </Button>
                        </Link>
                    </Group>
                    <Space h={'md'} />
                </Paper>
            </Container>
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
        loadwarehouse: () => dispatch(FetchWarehouseList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WarehouseDetails);

