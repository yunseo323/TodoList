/*
오늘의 날짜, 요일, 그리고 남은 할 일 개수를 보여줌

TodoHeadBlock 안에 들어있는 내용들에 대해 컴포넌트를 만들지 않고,
일반 HTML 태그를 사용해 TodoHeadBlock 의 스타일에서 CSS Selector을 사용해 스탕일링함
((취향))
*/

import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2020년 12월 26일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;