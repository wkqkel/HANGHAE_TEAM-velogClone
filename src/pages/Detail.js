import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Button, Text, Input } from "../elements";

const Detail = (props) => {
  return (
    <React.Fragment>
      {/*헤더부분 추가하기 */}
      <Wrap>
        <TitleWrap>
          <Text margin="0px 0px 10px 0px" size="2.25rem" weight="600">
            {props.Title}
          </Text>
        </TitleWrap>
        <NicknameWrap>
          <NicknameLeftBox>
            <Text margin="0px 20px 0px 0px" size="16px">
              {props.user_name}
            </Text>
            <Text size="16px">{props.date}</Text>
          </NicknameLeftBox>
        </NicknameWrap>
        <LikeWrap>
          <LikeContainer>
            <LikeBox>
              <Button bg="white" borderRadius="50%">
                <FavoriteIcon fontSize="large" color="action" />
              </Button>
              <div>{props.likeCount}</div>
              <Button bg="white" borderRadius="50%">
                <ShareIcon fontSize="large" color="action" />
              </Button>
            </LikeBox>
          </LikeContainer>
        </LikeWrap>
        <img src="/imges/test.png"></img>
        <div>{props.contents}</div>
        <CommentWrap>
          <Text size="15px" bold margin="30px 0px 15px 0px">
            {props.comment}
            개의 댓글
          </Text>
          <CommentInput
            type="textarea"
            placeholder="댓글을 입력하세요"
          ></CommentInput>
          <ButtonSpace>
            <Button
              bg="#12B886"
              shape="rectangle"
              width="100px"
              padding="5px 1.25rem"
            >
              댓글 작성
            </Button>
          </ButtonSpace>
        </CommentWrap>
      </Wrap>
    </React.Fragment>
  );
};

// 데이터가 없으면 오류가 나기때문에 디폴트값을 지정해주는 작업
Detail.defaultProps = {
  Title: "안녕하세요, 프론트엔드 신입에 지원합니다. ",
  user_name: "dokyung",
  date: "2022년02월19일",
  hashtag: "개발자가 되려고 결심한 이유",
  likeCount: "200",
  contents:
    "먼저 내가 개발자가 되려고 결심한 이유를 주제로 포스팅하려다 이번에 취업을 준비하면서 신입 FE 면접 내용을 포스팅해보는 게 좋겠다는 생각이 들었다. 그래서 이번 포스팅은 면접에서 받은 질문과 답변 정리!",
  comment: "30",
};

const Wrap = styled.div`
  margin-top: 20px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;
`;

const TitleWrap = styled.div`
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const NicknameWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NicknameLeftBox = styled.div`
  margin: 10px;
  display: flex;
`;

const LikeWrap = styled.div`
  position: relative;
  margin-top: 2rem;
`;

const LikeContainer = styled.div`
  position: fixed;
  top: 300px;
  transform: translateX(-200%);
`;

const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background: #f8f9fa;
  border: 1px solid #f1f3f5;
  width: 4rem;
  border-radius: 2rem;
  & > :nth-child(2) {
    margin: 8px 0 16px 0;
  }
`;

const CommentWrap = styled.div`
  width: 767px;
  margin: auto;
`;

const ButtonSpace = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

const CommentInput = styled.textarea`
  font-size: 16px;
  width: 100%;
  padding: 10px 0 0 16px;
  margin: 16px 0 24px 0;
  height: 7.125rem;
  resize: none;
  display: flex;
`;

export default Detail;