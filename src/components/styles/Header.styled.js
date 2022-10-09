import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.header};
	padding: 2.5em 0;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.5em;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-bottom: 2.5em;
	}
`;

export const Image = styled.img`
	width: 100%;
	max-width: 375px;
	margin-left: 2.5em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin: 2.5em 0 1.875em;
	}
`;
