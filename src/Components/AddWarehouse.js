import { Header, Title, Box, form, TextInput, Group, Button, Card, Space, Center, Grid } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddNewWarehouse } from '../Redux/Action';
import { Header as MantineHeader, Text } from '@mantine/core';


const AddWarehouse = () => {
    const [name, namechange] = useState('')
    const [code, codechange] = useState('')
    const [id, idchange] = useState('')
    const [city, citychange] = useState('')
    const [space, spacechange] = useState('')
    const [type, typechange] = useState('')
    const [cluster, clusterchange] = useState('')
    const [registered, registeredchange] = useState('')
    const [live, livechange] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        navigate('/warehouse');
        e.preventDefault();
        const warehouseobj = { name, code, id, city, space, type, cluster, registered, live };
        dispatch(AddNewWarehouse(warehouseobj));

        // console.log(warehouseobj);
    }
    // const form = useForm({
    //     initialValues: {
    //         name: "",
    //         code: "",
    //         id: "",
    //         city: "",
    //         space_available: "",
    //         type: "",
    //         cluster: '',
    //         is_registered: Boolean,
    //         is_live: Boolean
    //     },
    // });
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
            <Center>
                <Title>
                    Add Warehouse
                </Title>
            </Center>

            <Box maw={800} mx="auto" sx={{ alignItems: '-moz-initial', alignContent: 'left' }}>

                <Card withBorder mt={'lg'}>
                    <form onSubmit={handlesubmit}>
                        <Grid gutter={"md"}>

                            {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
                            <Grid.Col lg={6} xs={12}>

                                <TextInput
                                    withAsterisk
                                    label="Name"
                                    placeholder="Name of the warehouse"
                                    value={name} onChange={e => namechange(e.target.value)}

                                // {...form.getInputProps('name')}
                                />
                            </Grid.Col>

                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="Code"
                                    placeholder="Code of the warehouse"
                                    value={code} onChange={e => codechange(e.target.value)}

                                // {...form.getInputProps('code')} 
                                />
                            </Grid.Col>
                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="Id"
                                    placeholder="Enter Id"
                                    value={id} onChange={e => idchange(e.target.value)}

                                // {...form.getInputProps('id')} 
                                />
                            </Grid.Col>

                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="City"
                                    placeholder="City of the warehouse"
                                    value={city} onChange={e => citychange(e.target.value)}

                                // {...form.getInputProps('city')}
                                />
                            </Grid.Col>

                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="Space Available"
                                    value={space} onChange={e => spacechange(e.target.value)}

                                // {...form.getInputProps('space_available')}
                                />
                            </Grid.Col>

                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="Type"
                                    placeholder="Type of the warehouse"
                                    value={type} onChange={e => typechange(e.target.value)}

                                // {...form.getInputProps('type')}
                                />
                            </Grid.Col>

                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="Cluster"
                                    value={cluster} onChange={e => clusterchange(e.target.value)}

                                // {...form.getInputProps('cluster')} 
                                />
                            </Grid.Col>

                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="Is Registered"
                                    value={registered} onChange={e => registeredchange(e.target.value)}
                                // {...form.getInputProps('is_registered')} 
                                />
                            </Grid.Col>

                            <Space h={'sm'} />

                            <Grid.Col lg={6} xs={12}>
                                <TextInput
                                    withAsterisk
                                    label="Is Live"
                                    value={live} onChange={e => livechange(e.target.value)}

                                // {...form.getInputProps('is_live')} 
                                />
                            </Grid.Col>

                            {/* </form> */}
                        </Grid>
                        <Space h={'sm'} />

                        <Center>
                            <Button type="submit" >Submit</Button>
                        </Center>
                    </form>
                </Card>

            </Box >
        </>

    )
}

export default AddWarehouse