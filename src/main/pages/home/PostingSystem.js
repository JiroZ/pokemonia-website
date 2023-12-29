import React, {useState} from 'react';

import {Formik, Form, Field, useFormik} from 'formik';
import {Card, CardContent, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import presetReact from '@bbob/preset-react';
import BBCode from '@bbob/react';
import localizedStrings from '../../../localization/common';
import {useSelector} from 'react-redux';
import {useToast} from '../../elements/ToastProvider';
import {LocalOffer} from "@mui/icons-material";

const useStyles = styled({
    root: {
        padding: '2rem',
    },
    posts: {
        marginBottom: '2rem',
    },
    post: {
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        padding: '1rem',
        boxShadow: '2px 2px 10px #ccc',
        textAlign: 'center',
        margin: '1rem',
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const plugins = [presetReact()];

function PostingForm(formik, PostType) {
    return <form onSubmit={formik.handleSubmit}>
        <Grid container paddingY={4} spacing={2}>
            <Grid item xs={8}>
                <TextField
                    name='title'
                    type='text'
                    label='Title'
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <Select
                    name='Post Type'
                    type='select'
                    label='Post Type'
                    fullWidth
                >
                    {
                        Object.keys(PostType).map(type => {
                            return (
                                <MenuItem value={type}>{type}</MenuItem>
                            )
                        })
                    }
                </Select>
            </Grid>
        </Grid>

        <TextareaAutosize
            name='post'
            type='text'
            label='Post'
            color='primary'
            fullWidth
            sx={{input: {color: 'primary'}}}

        />
        <Grid paddingY={4} xs={2}>
            <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
            >{localizedStrings.getString('submit')}</Button>
        </Grid>
    </form>;
}

const PostCard = (param) => {

    return (
        <Grid item xs={6} key={param.post.id}>
            <Card>
                <CardContent>
                    <Typography color='primary' variant='h5'>
                        <Grid container justifyContent="flex-start">
                            <BBCode  plugins={plugins}>{param.post.title}</BBCode>
                            <LocalOffer style={{padding: 5}} justifyContent="flex-end"/><Typography
                            justifyContent="flex-end">{param.post.type}</Typography>
                        </Grid>
                        <br/>
                        <BBCode plugins={plugins}>{param.post.text}</BBCode>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

function PostingSystem() {
    const {addToast} = useToast()

    const userAuth = useSelector(state => state.getUserAuth)
    const isSignedIn = useSelector(state => state.isSignedIn)

    const classes = useStyles();

    const PostType = {
        Announcement: 'Announcement',
        Update: 'Update',
        Event: 'Event',
    }

    const [posts, setPosts] = useState([
        {id: 1, title: '[b]Test Title 1[/b]', text: '[b]Post[/b] 1', type: PostType.Announcement},
        {id: 2, title: 'Test Title 2', text: '[b]Post[/b] 2', type: PostType.Event},
        {id: 3, title: 'Test Title 3', text: '[b]Post[/b] 3', type: PostType.Update},
        {id: 4, title: 'Test Title 4', text: '[b]Post[/b] 4', type: PostType.Event},
        {id: 5, title: 'Test Title 5', text: '[b]Post[/b] 5', type: PostType.Update},
        {id: 6, title: 'Test Title 6', text: '[b]Post[/b] 6', type: PostType.Update},
        {id: 7, title: 'Test Title 7', text: '[b]Post[/b] 7', type: PostType.Event},
    ]);

    const handlePostSubmit = (values) => {
        console.log(values)
        setPosts([...posts, {id: posts.length + 1, title: values.title, text: values.post, type: values.type}]);
    };

    function HandleReadMore() {

    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: (values) => {
            handlePostSubmit(values);
        },
    });

    return (
        <div className={classes.root} style={{padding: 50}}>
            <Grid container spacing={2} className={classes.posts}>
                {posts.map((post, index) => (
                    <PostCard post={post} key={index}/>
                ))}
            </Grid>
            <Grid paddingY={4}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={HandleReadMore}
                >{localizedStrings.getString('readMore')}</Button>
            </Grid>

            {
                isSignedIn && userAuth.adminLevel > 5 ?
                    PostingForm(formik, PostType) : <></>
            }
        </div>
    );
}


export default PostingSystem;
