import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUsPage = () => {
    const handleSubmit = (values) => {
        // Implement your logic to handle the form submission here
        console.log(values);
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Grid container spacing={2} paddingBottom={5}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Contact Us
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        If you are having issues with anything, we are here for you! Let us know your ideas, suggestions, and concerns. We are open for questions and creative ideas. Do not misuse this by reporting a player or appealing for your ban here. Use the appropriate discord-tickets for your messages; they might be of use for others. Unsolicited messages will be trashed.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Please send business-related queries directly to <a href="mailto:admin@pokemonia.net">admin@pokemonia.net</a>.
                    </Typography>
                </Grid>
            </Grid>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                required
                                fullWidth
                                id="name"
                                name="name"
                                label="User Name"
                                variant="outlined"
                            />
                            <ErrorMessage name="name" component="div" />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label="E-mail"
                                type="email"
                                variant="outlined"
                            />
                            <ErrorMessage name="email" component="div" />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                required
                                fullWidth
                                id="message"
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                            <ErrorMessage name="message" component="div" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Container>
    );
};

export default ContactUsPage;