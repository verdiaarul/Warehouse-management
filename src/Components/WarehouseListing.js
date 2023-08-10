import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Header, Center, Text, Space, UnstyledButton, Select, Input, Group, Container, Box, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { FetchWarehouseList } from '../Redux/Action';
import { Header as MantineHeader } from '@mantine/core';
// import { Headerhome } from '../../src/Components/HeaderHome'
const WarehouseListing = (props) => {
    console.log('WarehouseListing component rendered');
    const [clusterFilter, setClusterFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [spaceAvailableFilter, setSpaceAvailableFilter] = useState('');

    useEffect(() => {
        console.log('Fetching warehouse list...');
        props.loadwarehouse();
    }, []);
    console.log('Warehouse list from props:', props.warehouse.warehouselist);


    const handleClusterFilterChange = (value) => {
        setClusterFilter(value);
    };

    const handleCityFilterChange = (value) => {
        setCityFilter(value);
    };

    const handleSpaceAvailableFilterChange = (value) => {
        setSpaceAvailableFilter(value);
    };

    const filteredRows = props.warehouse.warehouselist.filter((item) => {
        return (
            (!clusterFilter || item.cluster === clusterFilter) &&
            (!cityFilter || item.city === cityFilter) &&
            (!spaceAvailableFilter || item.space_available >= parseInt(spaceAvailableFilter))
        );
    });

    const rowsToDisplay = filteredRows.length > 0 ? filteredRows : props.warehouse.warehouselist;

    const rows = rowsToDisplay.map((item) => (
        <tr key={item.id}>
            <td>
                <Link to={`/warehouse/${item.id}`}>{item.name}</Link>
            </td>
            <td>{item.code}</td>
            <td>{item.id}</td>
            <td>{item.city}</td>
            <td>{item.space_available}</td>
            <td>{item.type}</td>
            <td>{item.cluster}</td>
        </tr>
    ));

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
                    </Link>

                </Center>
            </MantineHeader>
            <Box sx={{ padding: 20 }}>
                <Center>
                    <Title>
                        Warehouse Listing
                    </Title>
                </Center>
                <Group position='right'>
                    <UnstyledButton sx={{}}>
                        <Link to={'/warehouse/add/'}>
                            Add new +
                        </Link>
                    </UnstyledButton>
                </Group>
                <Space h={'md'} />
                <Space h={'md'} />
                <Group position='apart' spacing={'xl'} >

                    <label>Cluster:</label>
                    <Select
                        data={['', 'cluster-a-32', 'cluster-a-1', 'cluster-v-2', 'cluster-v-21']}
                        value={clusterFilter}
                        onChange={handleClusterFilterChange}
                    />

                    <label>City:</label>
                    <Select
                        data={['', 'Delhi', 'Chennai', 'Indore', 'Mumbai', 'Bangalore', 'Guwahati']}
                        value={cityFilter}
                        onChange={handleCityFilterChange}
                    />

                    <label>Space Available:</label>
                    <Input
                        type="number"
                        value={spaceAvailableFilter}
                        onChange={(e) => handleSpaceAvailableFilterChange(e.target.value)}
                    />
                </Group>
                <Space h={'md'} />
                <Space h={'md'} />

                <Table highlightOnHover withColumnBorders withBorder horizontalSpacing={"lg"}>
                    <thead>
                        <tr>
                            <th><Center>Name</Center></th>
                            <th><Center>Code</Center></th>
                            <th><Center>Id</Center></th>
                            <th><Center>City</Center></th>
                            <th><Center>Space Available</Center></th>
                            <th><Center>Type</Center></th>
                            <th><Center>Cluster</Center></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
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
        loadwarehouse: () => dispatch(FetchWarehouseList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WarehouseListing);
