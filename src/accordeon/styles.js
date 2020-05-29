import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  padding: 40px 0;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BlockControl = styled.div`
  display: flex;
  width: 500px;
  background-color: #aaa;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 2px;
`;
export const BlockContent = styled.div`
  width: 500px;
  padding: 10px;
  background-color: #eef;
`;
