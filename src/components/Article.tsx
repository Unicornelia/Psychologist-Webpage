import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  font-weight: 500;
  margin: 40px auto;
  padding: 30px;
  line-height: 1.7;
  text-align: justify;
  width: 70%;
  border-radius: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    padding: 1.5rem;
    text-align: start;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: 85%;
    text-align: start;
  }
`;

interface ArticleProps {
  children: ReactNode;
}

const Article: FC<ArticleProps> = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export default Article;
