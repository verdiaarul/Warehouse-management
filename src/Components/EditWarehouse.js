// import { Header, Title, Box, form, TextInput, Group, Button, Card, Space, Center, Grid } from '@mantine/core'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AddNewWarehouse, FetchWarehouseObject, FunctionUpdateWarehouse } from '../Redux/Action';
// import { Header as MantineHeader, Text } from '@mantine/core';


// const EditWarehouse = () => {
//     const [name, namechange] = useState('')
//     const [code, codechange] = useState('')
//     // const [id, idchange] = useState(0)
//     const [city, citychange] = useState('')
//     const [space, spacechange] = useState('')
//     const [type, typechange] = useState('')
//     const [cluster, clusterchange] = useState('')
//     const [registered, registeredchange] = useState('')
//     const [live, livechange] = useState('')

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const { id } = useParams;
//     const warehouseobj = useSelector((state) => state.warehouse.warehouseobj)

//     const handlesubmit = (e) => {
//         navigate('/warehouse');
//         e.preventDefault();
//         const warehouseobj = { name, code, city, space, type, cluster, registered, live };
//         dispatch(FunctionUpdateWarehouse(warehouseobj));

//         // console.log(warehouseobj);
//     }
//     // const form = useForm({
//     //     initialValues: {
//     //         name: "",
//     //         code: "",
//     //         id: "",
//     //         city: "",
//     //         space_available: "",
//     //         type: "",
//     //         cluster: '',
//     //         is_registered: Boolean,
//     //         is_live: Boolean
//     //     },
//     // });
//     useEffect(() => {
//         dispatch(FetchWarehouseObject(id))
//     }, [])

//     useEffect(() => {
//         if (warehouseobj) {
//             namechange(warehouseobj.name)
//             codechange(warehouseobj.code)
//             citychange(warehouseobj.city)
//             spacechange(warehouseobj.space)
//             typechange(warehouseobj.type)
//             clusterchange(warehouseobj.cluster)
//             registeredchange(warehouseobj.registered)
//             livechange(warehouseobj.live)
//         }

//     }, [warehouseobj])

//     return (

//         <>
//             <MantineHeader
//                 sx={{ backgroundColor: "#032681", zIndex: 402 }}
//                 height={{ base: 70, md: 70 }}
//                 p="md"
//             >
//                 <Center>
//                     <Text color='white' size={22}>STOCK AREA</Text>
//                 </Center>
//             </MantineHeader>
//             <Space h={'md'} />
//             <Space h={'md'} />
//             <Center>
//                 <Title>
//                     Edit Warehouse
//                 </Title>
//             </Center>

//             <Box maw={800} mx="auto" sx={{ alignItems: '-moz-initial', alignContent: 'left' }}>

//                 <Card withBorder mt={'lg'}>
//                     <form onSubmit={handlesubmit}>
//                         <Grid gutter={"md"}>

//                             {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
//                             <Grid.Col lg={6} xs={12}>

//                                 <TextInput
//                                     withAsterisk
//                                     label="Name"
//                                     placeholder="Name of the warehouse"
//                                     value={name} onChange={e => namechange(e.target.value)}

//                                 // {...form.getInputProps('name')}
//                                 />
//                             </Grid.Col>

//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     withAsterisk
//                                     label="Code"
//                                     placeholder="Code of the warehouse"
//                                     value={code} onChange={e => codechange(e.target.value)}

//                                 // {...form.getInputProps('code')} 
//                                 />
//                             </Grid.Col>
//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     disabled
//                                     withAsterisk
//                                     label="Id"
//                                     placeholder="Enter Id"
//                                     value={id}

//                                 // {...form.getInputProps('id')} 
//                                 />
//                             </Grid.Col>

//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     withAsterisk
//                                     label="City"
//                                     placeholder="City of the warehouse"
//                                     value={city} onChange={e => citychange(e.target.value)}

//                                 // {...form.getInputProps('city')}
//                                 />
//                             </Grid.Col>

//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     withAsterisk
//                                     label="Space Available"
//                                     value={space} onChange={e => spacechange(e.target.value)}

//                                 // {...form.getInputProps('space_available')}
//                                 />
//                             </Grid.Col>

//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     withAsterisk
//                                     label="Type"
//                                     placeholder="Type of the warehouse"
//                                     value={type} onChange={e => typechange(e.target.value)}

//                                 // {...form.getInputProps('type')}
//                                 />
//                             </Grid.Col>

//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     withAsterisk
//                                     label="Cluster"
//                                     value={cluster} onChange={e => clusterchange(e.target.value)}

//                                 // {...form.getInputProps('cluster')} 
//                                 />
//                             </Grid.Col>

//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     withAsterisk
//                                     label="Is Registered"
//                                     value={registered} onChange={e => registeredchange(e.target.value)}
//                                 // {...form.getInputProps('is_registered')} 
//                                 />
//                             </Grid.Col>

//                             <Space h={'sm'} />

//                             <Grid.Col lg={6} xs={12}>
//                                 <TextInput
//                                     withAsterisk
//                                     label="Is Live"
//                                     value={live} onChange={e => livechange(e.target.value)}

//                                 // {...form.getInputProps('is_live')} 
//                                 />
//                             </Grid.Col>

//                             {/* </form> */}
//                         </Grid>
//                         <Space h={'sm'} />

//                         <Center>
//                             <Button type="submit" >Submit</Button>
//                         </Center>
//                     </form>
//                 </Card>

//             </Box >
//         </>

//     )
// }

// export default EditWarehouse
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Text, Paper, Divider, Group, Button, Space } from '@mantine/core';
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
        navigate('/warehouse')
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
                    <Text color='white' size={22}>STOCK AREA</Text>
                </Center>
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
                    name="Name"
                    value={warehouse.name}
                    onChange={handleInputChange}
                />
                <Space h={'md'} />

                <Group position='left'>
                    <Text>Code</Text>
                </Group>
                <Input
                    label="Code"
                    name="Code"
                    value={warehouse.code}
                    onChange={handleInputChange}
                />

                <Space h={'md'} />


                <Group position='left'>
                    <Text>City</Text>
                </Group>
                <Input
                    label="City"
                    name="City"
                    value={warehouse.city}
                    onChange={handleInputChange}
                /> <Space h={'md'} />

                <Group position='left'>
                    <Text>Space Available</Text>
                </Group>
                <Input

                    label="Space Available"
                    name="Space_available"
                    value={warehouse.space_available}
                    onChange={handleInputChange}
                />

                <Space h={'md'} />


                <Group position='left'>
                    <Text>Type</Text>
                </Group>
                <Input

                    label="Type"
                    name="Type"
                    value={warehouse.type}
                    onChange={handleInputChange}
                />
                <Space h={'md'} />

                <Group position='left'>
                    <Text>Cluster</Text>
                </Group>
                <Input

                    label="Cluster"
                    name="Cluster"
                    value={warehouse.cluster}
                    onChange={handleInputChange}
                />

                <Space h={'md'} />


                <Group position='left'>
                    <Text>Is Registered</Text>
                </Group>
                <Input

                    label="Is Registered"
                    name="Is Registered"
                    value={formatBooleanValue(warehouse.is_registered)}
                    onChange={handleInputChange}
                />
                <Space h={'md'} />
                <Group position='left'>
                    <Text>Is Live</Text>
                </Group>
                <Input

                    label="Is Live"
                    name="Is Live"
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

