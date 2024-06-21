import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css'; // CSS 파일 임포트
import MaskGroupSvg from './Mask group.svg'; // 이미지 경로 import


const CenteredNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 사진의 위치 및 크기 설정
  const photoStyle = {
    marginTop: '119px', // 네비게이션 바와 사진 사이의 간격
    marginLeft: '310px', // 사진 왼쪽 여백
    width: '660px', // 사진의 너비
    height: 'auto', // 높이 자동 조정
    maxWidth: '100%', // 최대 너비 설정
    display: 'block', // 블록 요소로 설정하여 왼쪽 정렬
  };

  // 사각형(폼) 스타일
  const formStyle = {
    width: '610px', // 사각형 너비
    height: '620px', // 사각형 높이
    backgroundColor: '#f0f0f0', // 배경색
    borderTopLeftRadius: '20px', // 왼쪽 상단 모서리 둥글게
    borderBottomLeftRadius: '20px', // 왼쪽 하단 모서리 둥글게
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px', // 내부 여백
    position: 'absolute', // 절대 위치 설정
    top: '170px', // 네비게이션 바와 사진 사이의 간격
    right: '340px', // 오른쪽 위치 조정
  };

  // 화면 크기 변경 시 사진 너비 조정
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // 컴포넌트가 마운트될 때와 창 크기 변경 시에도 사진 크기를 조정하기 위해 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">회사이름 로고</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link href="#home">회사소개</Nav.Link>
              <Nav.Link href="#link">시공사례</Nav.Link>
              <Nav.Link href="#about">시공상담</Nav.Link>
              <Nav.Link href="#contact">고객후기</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto">
            <Navbar.Brand href="#" className="signup-link">회원가입</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

      {/* 사각형(폼) */}
      <div style={formStyle}>
        <p>폼을 추가하거나 원하는 요소를 넣으세요.</p>
      </div>

      {/* 사진 */}
      <img
        src={MaskGroupSvg} // 이미지 경로 변수 사용
        alt="사진 설명" // 사진 대체 텍스트
        style={photoStyle} // 사진 스타일 적용
      />
    </div>
  );
}

export default CenteredNavbar;