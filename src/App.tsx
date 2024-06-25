import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, TextField, Button, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import './App.css'; // CSS 파일 임포트
import MaskGroupSvg from './Mask group.svg'; // 이미지 경로 import
import { makeStyles } from '@mui/styles';


const CenteredNavbar = () => {
  const handleResize = () => {};

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
const useStyles = makeStyles((theme) => ({
  navLink: {
    marginRight: '60px',
    fontSize: '16px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  signupLink: {
    backgroundColor: '#2EAFCB', // 원하는 배경색으로 변경
    borderRadius: '5px', // 둥근 모서리
    padding: '5px 10px', // 텍스트 주위에 여백 추가
    fontSize: '16px', // 글자 크기 설정
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          회사이름 로고
        </Typography>
        <Box sx={{ flexGrow: 60, display: 'flex', justifyContent: 'center' }}>
          <nav>
            <Button color="inherit" href="#home" className={classes.navLink}>회사소개</Button>
            <Button color="inherit" href="#link" className={classes.navLink}>시공사례</Button>
            <Button color="inherit" href="#about" className={classes.navLink}>시공상담</Button>
            <Button color="inherit" href="#contact" className={classes.navLink}>고객후기</Button>
          </nav>
        </Box>
        <Button color="inherit" href="#" className={classes.signupLink}>회원가입</Button>
      </Toolbar>
    </AppBar>
  );
};



  return (
    <div>
      <CustomAppBar />
      <Container>
        <Grid container justifyContent="center" spacing={4} style={{ marginTop: '117px' }}>
          <Grid item md={6}>
            <img
              src={MaskGroupSvg} // 이미지 경로 변수 사용
              alt="사진 설명" // 사진 대체 텍스트
              style={{
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
              }} // 사진 스타일 적용
            />
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                backgroundColor: '#E5E5E5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px', // 내부 여백 추가
                marginLeft: '60px', // 왼쪽으로 조금 더 이동
                border: '1px solid #ccc', // 약하게 실선 테두리 추가
                borderTopLeftRadius: '10px', // 왼쪽 위 둥근 모서리 설정
                borderBottomLeftRadius: '10px', // 왼쪽 아래 둥근 모서리 설정
              }}
            >
              <Typography variant="h6" align="left">
                온라인상담
              </Typography>
              <Box sx={{ width: '110%', my: 1, borderTop: '2px solid #000' }} /> {/* 검은색 선 추가 */}
              <form style={{ width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <TextField fullWidth label="이름" />
                  <TextField fullWidth label="전화번호" type="tel" />
                </Box>
                <TextField
                  select
                  fullWidth
                  label="주소"
                  helperText="구 선택"
                >
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </TextField>
                <TextField
                  select
                  fullWidth
                  label="상담유형"
                >
                  <MenuItem value="1">상담 유형을 선택하세요</MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  label="요청사항 / 문의사항"
                  multiline
                  rows={1}
                />
                <TextField fullWidth type="file" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="개인정보수집 및 이용동의"
                  sx={{ fontSize: '1.2em', mt: 1 }} // 크기와 상단 마진 조정
                />
                <Box textAlign="center">
                  <Button variant="contained" color="primary" type="submit">
                    신청하기
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={4} style={{ marginTop: '117px', marginBottom: '117px' }}>
          <Grid item xs={10} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                width: '650px',
                height: '180px',
                ml: 1,
                mr: -3,
                backgroundColor: '#7088A5',
                borderRadius: '10px 0 0 10px',
                color: '#FFFFFF', // 흰색 글자색 추가
                textAlign: 'center', // 텍스트 중앙 정렬
                fontSize: '30px', // 글자 크기 조정
                fontWeight: 'bold', // 글자 굵기 설정
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              📞 053-123-1234
            </Box>
          </Grid>
          <Grid item xs={10} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                width: '640px',
                height: '180px',
                ml: -3,
                mr: 3,
                backgroundColor: '#394D65',
                borderRadius: '0 10px 10px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                p: 2,
                color: '#FFFFFF', // 흰색 글자색 추가
                textAlign: 'left', // 텍스트 왼쪽 정렬
              }}
            >
              <Typography variant="h6" align="left" gutterBottom>
                &ensp;&ensp;&ensp;&ensp; 실시간 상담 현황
              </Typography>
              <Typography sx={{ mb: 1, ml: 1, letterSpacing: 2 }}>
                &emsp;&emsp;상담완료  &emsp;&emsp;김*민&emsp;&emsp;  010-****-1234
              </Typography>
              <Typography sx={{ mb: 1, ml: 1, letterSpacing: 2 }}>
                &emsp;&emsp;상담완료  &emsp;&emsp;김*민&emsp;&emsp;  010-****-1234
              </Typography>
              <Typography sx={{ mb: 1, ml: 1, letterSpacing: 2 }}>
                &emsp;&emsp;진행중    &emsp;&emsp;&emsp;김*민&emsp;&emsp;  010-****-1234
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '640px',
                height: '300px',
                backgroundColor: '#F0F0F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 9,
                mr: -3,

              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/map-placeholder.jpg`} // 지도 이미지 경로
                alt="지도" // 이미지 대체 텍스트
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '600px',
                  borderRadius: '10px',
                }} // 이미지 스타일
              />
            </Box>
          </Grid>
          <Grid item xs={10} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '640px',
                height: '300px',
                ml: -3,
                mr: 3,
                backgroundColor: '#6D6D6D',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 9,
              }}
            >
              <Box textAlign="left" p={2}>
                <Typography variant="h6">공지사항</Typography>
                <Box sx={{ width: '100%', my: 1, borderTop: '2px solid #000' }} /> {/* 검은색 선 추가 */}
                <Typography>이 공간에 공지사항 내용을 입력하세요.</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CenteredNavbar;
