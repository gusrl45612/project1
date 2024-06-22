import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css'; // CSS 파일 임포트
import MaskGroupSvg from './Mask group.svg'; // 이미지 경로 import

const CenteredNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div>
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

      <Container>
        <Row className="justify-content-center" style={{ marginTop: '117px' }}>
          <Col md={6}>
            <img
              src={MaskGroupSvg} // 이미지 경로 변수 사용
              alt="사진 설명" // 사진 대체 텍스트
              style={{
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
              }} // 사진 스타일 적용
            />
          </Col>
          <Col md={6}>
            <div style={{
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
            }}>
              <div style={{ textAlign: 'left' }}>
                온라인상담
              </div>
              <hr style={{ width: '110%', margin: '10px 0', borderTop: '2px solid #000' }} /> {/* 검은색 선 추가 */}
              <Form style={{ zIndex: '1', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Form.Control type="text" placeholder="이름" />
                  <Form.Control type="tel" placeholder="전화번호" />
                </div>
                <Form.Group controlId="formGridAddress">
                  <Form.Label>주소</Form.Label>
                  <Form.Text className="text-muted">
                    <Form.Select aria-label="Default select example">
                      <option>구 선택</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>상담유형</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>상담 유형을 선택하세요</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>요청사항 / 문의사항</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className=" d-flex justify-content-center" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="개인정보수집 및 이용동의"
                    style={{ fontSize: '1.2em', marginTop: '5px' }} // 크기와 상단 마진 조정
                  />

                </Form.Group>
                <div className="text-center"> {/* 중앙 정렬 */}
                  <Button variant="primary" type="submit">
                    신청하기
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ marginTop: '117px', marginBottom: '117px' }}>
          <Col xs={10} md={6} style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                width: '640px',
                height: '180px',
                marginLeft: '10px',
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
            </div>
          </Col>
          <Col xs={10} md={6} style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                width: '640px',
                height: '180px',
                marginLeft: '-25px',
                marginRight: '25px',
                backgroundColor: '#394D65',
                borderRadius: '0 10px 10px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                padding: '20px',
                color: '#FFFFFF', // 흰색 글자색 추가
                textAlign: 'left', // 텍스트 왼쪽 정렬
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>&ensp;&ensp;&ensp;&ensp; 실시간 상담 현황</span><br/><br/>
              </div>
              <div style={{ marginBottom: '10px', marginLeft: '10px', letterSpacing: '2px' }}>
                <span>&emsp;&emsp;상담완료  &emsp;&emsp;김*민&emsp;&emsp;  010-****-1234</span>
              </div>
              <div style={{ marginBottom: '10px', marginLeft: '10px', letterSpacing: '2px' }}>
                <span>&emsp;&emsp;상담완료  &emsp;&emsp;김*민&emsp;&emsp;  010-****-1234</span>
              </div>
              <div style={{ marginBottom: '10px', marginLeft: '10px', letterSpacing: '2px' }}>
                <span>&emsp;&emsp;진행중    &emsp;&emsp;&emsp;김*민&emsp;&emsp;  010-****-1234</span>
              </div>
            </div>
          </Col>
          <Col xs={10} md={6} style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '640px',
                height: '300px',
                backgroundColor: '#F0F0F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '117px',
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/map-placeholder.jpg`} // 지도 이미지 경로
                alt="지도" // 이미지 대체 텍스트
                style={{
                  width: '100%',
                  height: '100%',
                  marginLeft: '10px',
                  maxWidth: '600px',
                  borderRadius: '10px',
                }} // 이미지 스타일
              />
            </div>
          </Col>
          <Col xs={10} md={6} style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '640px',
                height: '300px',
                                marginLeft: '-25px',
                marginRight: '25px',
                backgroundColor: '#6D6D6D',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '117px',
              }}
            >
              <div style={{ textAlign: 'left', padding: '20px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>공지사항</span>
                <hr style={{ width: '100%', margin: '10px 0', borderTop: '2px solid #000' }} /> {/* 검은색 선 추가 */}
                <p>이 공간에 공지사항 내용을 입력하세요.</p>
              </div>
            </div>
          </Col>
        </Row>


        {/* 여기서부터 작성 */}
      </Container>
    </div>
  );
}

export default CenteredNavbar;
