import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { BREAKPOINTS, QUERIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = (className) => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader className={className}>
        <ActionGroup className='hide-when-small'>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <div className='hide-when-small'>
          <SubscribeButton>
            SUBSCRIBE
          </SubscribeButton>
          <AlreadySubscriber>
            Already a member?
          </AlreadySubscriber>
        </div>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  display: none;

  @media(max-width: ${BREAKPOINTS.tabletMin}px) {
    display: block;

    .hide-when-small {
      display: none;
    }
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;

  @media(max-width: ${BREAKPOINTS.tabletMin}px) {
    justify-content: center;
    .hide-when-small {
      display: none;
    }
  }
`;

const SubscribeButton = styled(Button)`
  justify-self: flex-end;
`;

const AlreadySubscriber = styled.div`
  font-style: italic;
  text-decoration-line: underline;
  text-align: center;
  color: ${COLORS.gray-900};
`;

export default Header;
