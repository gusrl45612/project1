import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: 'primary.main', color: 'common.white', py: 6 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            회사 정보
                        </Typography>
                        <Typography variant="body2">
                            (주)00인테리어 | 대표: 홍길동 <br />
                            대구광역시 달서구 이곡동 555로 <br />
                            전화: 053-333-3333 | 팩스: 053-222-2222
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Home
                            </Link>
                            <br />
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                About
                            </Link>
                            <br />
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Services
                            </Link>
                            <br />
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Contact
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            연락처
                        </Typography>
                        <Typography variant="body2">
                            전화: 053.333.3333 <br />
                            이메일: interior@naver.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
